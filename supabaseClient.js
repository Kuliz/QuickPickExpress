import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://clcfzeytfqrjngyemwiq.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

// Declare and export in one go without redeclaring
export const supabase = createClient(supabaseUrl, supabaseKey);
