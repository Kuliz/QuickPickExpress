import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://clcfzeytfqrjngyemwiq.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your actual anon key if not already set globally[cite: 3]

// Declare globally once so all scripts can access it safely[cite: 3]
window.supabaseClient = createClient(supabaseUrl, supabaseKey);
const supabase = window.supabaseClient;

export { supabase };
