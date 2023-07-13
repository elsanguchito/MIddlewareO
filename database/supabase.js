import { createClient } from '@supabase/supabase-js';
import env from 'dotenv';

env.config();

const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY, {
    auth: {
        persistSession: false
    }    
});

export default supabase;