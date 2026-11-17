import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, RSVPRecord } from "@/lib/supabaseClient";
import fs from "fs";
import path from "path";

const LOCAL_DATA_FILE = path.join(process.cwd(), "public", "rsvps.json");

function getLocalRSVPs(): RSVPRecord[] {
  try {
    if (fs.existsSync(LOCAL_DATA_FILE)) {
      const data = fs.readFileSync(LOCAL_DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading local RSVP data", e);
  }
  return [];
}

function saveLocalRSVP(record: RSVPRecord) {
  try {
    const list = getLocalRSVPs();
    list.push(record);
    fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving local RSVP data", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      guest_name,
      family_name,
      mobile_number,
      number_of_guests,
      attendance_status,
      events_attending,
      personal_message,
    } = body;

    // 1. Validation
    if (!guest_name || !guest_name.trim()) {
      return NextResponse.json(
        { error: "Guest name is required." },
        { status: 400 }
      );
    }
    if (!family_name || !family_name.trim()) {
      return NextResponse.json(
        { error: "Family name is required." },
        { status: 400 }
      );
    }
    if (!mobile_number || !mobile_number.trim() || mobile_number.trim().length < 8) {
      return NextResponse.json(
        { error: "Valid mobile number is required." },
        { status: 400 }
      );
    }
    if (!attendance_status || !["accept", "decline"].includes(attendance_status)) {
      return NextResponse.json(
        { error: "Attendance status must be accept or decline." },
        { status: 400 }
      );
    }

    const cleanMobile = mobile_number.trim();
    const cleanGuestName = guest_name.trim();

    const record: RSVPRecord = {
      guest_name: cleanGuestName,
      family_name: family_name.trim(),
      mobile_number: cleanMobile,
      number_of_guests: Number(number_of_guests) || 1,
      attendance_status,
      events_attending: Array.isArray(events_attending) ? events_attending : [],
      personal_message: personal_message?.trim() || "",
      created_at: new Date().toISOString(),
    };

    // 2. If Supabase is configured, use Supabase
    if (isSupabaseConfigured && supabase) {
      // Check duplicate by mobile number within the last 24h
      const { data: existing } = await supabase
        .from("rsvps")
        .select("id")
        .eq("mobile_number", cleanMobile)
        .limit(1);

      if (existing && existing.length > 0) {
        // Update existing record
        const { error: updateError } = await supabase
          .from("rsvps")
          .update(record)
          .eq("mobile_number", cleanMobile);

        if (updateError) {
          console.error("Supabase update error:", updateError);
          return NextResponse.json(
            { error: "Failed to update RSVP. Please try again." },
            { status: 500 }
          );
        }

        return NextResponse.json({
          success: true,
          message: "Your RSVP was successfully updated with joy!",
          record,
        });
      }

      // Insert new record
      const { data: inserted, error: insertError } = await supabase
        .from("rsvps")
        .insert([record])
        .select()
        .single();

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        return NextResponse.json(
          { error: "Failed to submit RSVP. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your RSVP has been joyfully recorded in the royal registry!",
        record: inserted || record,
      });
    }

    // 3. Fallback: Save to local storage
    const currentList = getLocalRSVPs();
    const existingIndex = currentList.findIndex(
      (item) => item.mobile_number === cleanMobile
    );

    if (existingIndex >= 0) {
      currentList[existingIndex] = {
        ...record,
        id: currentList[existingIndex].id || `rsvp-${Date.now()}`,
      };
      fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(currentList, null, 2), "utf-8");
      return NextResponse.json({
        success: true,
        message: "Your RSVP was successfully updated with joy!",
        record: currentList[existingIndex],
      });
    }

    record.id = `rsvp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    saveLocalRSVP(record);

    return NextResponse.json({
      success: true,
      message: "Your RSVP has been joyfully recorded in the royal registry!",
      record,
    });
  } catch (error: any) {
    console.error("RSVP API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing RSVP." },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("rsvps")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      return NextResponse.json({ rsvps: data });
    }
  }

  const local = getLocalRSVPs();
  return NextResponse.json({ rsvps: local });
}

