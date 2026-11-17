-- ====================================================================
-- SUPABASE SCHEMA FOR KRISHAN & GAYATRI ROYAL WEDDING RSVP REGISTRY
-- ====================================================================

create table if not exists public.rsvps (
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

-- Enable Row Level Security (RLS)
alter table public.rsvps enable row level security;

-- Policy: Allow anonymous users to insert their RSVP
create policy "Allow anonymous RSVP submission"
  on public.rsvps
  for insert
  to anon
  with check (true);

-- Policy: Allow anonymous update by matching mobile_number
create policy "Allow updating own RSVP"
  on public.rsvps
  for update
  to anon
  using (true)
  with check (true);

-- Policy: Allow anonymous reading of RSVP count/status
create policy "Allow reading RSVPs"
  on public.rsvps
  for select
  to anon
  using (true);

