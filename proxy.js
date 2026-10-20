
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  const isAdminRoute =
    cleanPath === "/admin" || cleanPath.startsWith("/admin/");
  const isLoginPage = cleanPath === "/admin/login";

  let response = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabasePublishableKey =
    process.env.SUPABASE_PUBLISHABLE_KEY;

  // Jangan biarkan halaman admin terlindungi terbuka
  // jika konfigurasi Supabase belum tersedia.
  if (!supabaseUrl || !supabasePublishableKey) {
    if (isAdminRoute && !isLoginPage) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    return response;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabasePublishableKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Validasi sesi di server, bukan hanya dari tampilan.
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Semua halaman admin selain login membutuhkan sesi valid.
  if (isAdminRoute && !isLoginPage && (error || !user)) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  // Jika sudah login, jangan tampilkan halaman login lagi.
  if (isLoginPage && !error && user) {
    return NextResponse.redirect(
      new URL("/admin", request.url)
    );
  }

  return response;
}

export default proxy;

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
