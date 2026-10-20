import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Koneksi Supabase untuk server (pengunjung).
 * Menggunakan SUPABASE_SECRET_KEY untuk membaca data dari tabel yang dilindungi RLS.
 */
export function createClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "SUPABASE_URL atau SUPABASE_SECRET_KEY belum diatur di environment variable."
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export const createServerClient = createClient;
export default createClient;

