import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("https://") &&
    supabaseAnonKey.length > 20
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface RSVPRecord {
  id?: string;
  created_at?: string;
  guest_name: string;
  family_name: string;
  mobile_number: string;
  number_of_guests: number;
  attendance_status: "accept" | "decline";
  events_attending: string[];
  personal_message?: string;
}

// SQL Schema for the Supabase `rsvps` table:
/*
create table public.rsvps (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  guest_name text not null,
  family_name text not null,
  mobile_number text not null,
  number_of_guests integer default 1,
  attendance_status text check (attendance_status in ('accept', 'decline')) not null,
  events_attending text[] default '{}',
  personal_message text
);
*/

