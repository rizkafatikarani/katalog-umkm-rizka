"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSessionClient } from "@/lib/supabase/server";

/**
 * Server Action: Login admin dengan Supabase Auth
 */
export async function login(prevState, formData) {
  if (prevState instanceof FormData) {
    formData = prevState;
    prevState = null;
  }

  const email = formData?.get("email");
  const password = formData?.get("password");

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: String(email).trim(),
    password: String(password),
  });

  if (error) {
    return {
      error:
        error.message === "Invalid login credentials"
          ? "Email atau password salah. Periksa kembali data akun Anda."
          : `Gagal masuk: ${error.message}`,
    };
  }

  revalidatePath("/admin", "layout");
  redirect("/admin");
}

/**
 * Server Action: Keluar (logout) admin dan hapus sesi
 */
export async function logout() {
  const supabase = await createSessionClient();
  await supabase.auth.signOut();
  revalidatePath("/admin", "layout");
  redirect("/admin/login");
}

export const keluar = logout;

/**
 * Server Action: Ganti password admin yang sedang login
 */
export async function gantiPassword(prevState, formData) {
  if (prevState instanceof FormData) {
    formData = prevState;
    prevState = null;
  }

  // Aturan keamanan 3: Wajib memeriksa di server bahwa admin sudah login
  const supabase = await createSessionClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "Sesi telah berakhir atau Anda belum login. Silakan masuk kembali." };
  }

  const passwordBaru = formData?.get("password_baru");
  const konfirmasiPassword = formData?.get("konfirmasi_password");

  if (!passwordBaru || typeof passwordBaru !== "string") {
    return { error: "Password baru wajib diisi." };
  }

  if (passwordBaru.length < 8) {
    return { error: "Password baru minimal 8 karakter." };
  }

  if (passwordBaru !== konfirmasiPassword) {
    return { error: "Konfirmasi password harus sama dengan password baru." };
  }

  const { error } = await supabase.auth.updateUser({
    password: passwordBaru,
  });

  if (error) {
    return { error: `Gagal mengganti password: ${error.message}` };
  }

  return { success: true, message: "Password berhasil diganti." };
}

