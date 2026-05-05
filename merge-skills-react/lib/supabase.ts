import { createClient } from '@supabase/supabase-js';

// TODO: substitua pelos valores do seu projeto Supabase
// Acesse: https://supabase.com/dashboard > Project Settings > API
const supabaseUrl = 'YOUR_PROJECT_URL';
const supabaseAnonKey = 'YOUR_ANON_KEY';

// TODO: crie e exporte o client do Supabase usando createClient
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
