import { createClient } from '@supabase/supabase-js';

// No mundo real, estas chaves viriam de um arquivo .env
const supabaseUrl = 'https://YOUR_PROJECT_REF.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
