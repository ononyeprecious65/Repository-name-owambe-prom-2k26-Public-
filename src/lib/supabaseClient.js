import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yukmnlltncyerwulntej.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1a21ubGx0bmN5ZXJ3dWxudGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTIxMTQsImV4cCI6MjA5Njc4ODExNH0.y9MbKQvH3po-4UuXRbUfgvdNhzFVN4uGxSivq-Z2K1M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);