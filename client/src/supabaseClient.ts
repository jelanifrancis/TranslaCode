import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dxryzujxrmdxadrmvrpg.supabase.co'; // replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4cnl6dWp4cm1keGFkcm12cnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzIyOTUsImV4cCI6MjA2MDA0ODI5NX0.9pLeR3RjwsxJWJ_tf2aNuzUz6SC2l05Hje9bYD-6KPQ'; // replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseKey);