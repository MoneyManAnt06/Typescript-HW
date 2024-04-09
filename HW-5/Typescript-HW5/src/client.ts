import { createBrowserClient } from "@supabase/ssr";
import 'dotenv/config'

export const createClient = () =>
  createBrowserClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_API_KEY!,
  );