# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang diminta, hasil implementasi, pengujian, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang ditulis sendiri, bukan dari lembar kerja.

## US-01 — Katalog dari database

**Prompt:**

Baca AGENTS.md dan docs/user-stories.md bagian US-01. Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase. Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**

- Agent mengubah `app/page.jsx`, `lib/supabase/index.js`, dan `lib/supabase/server.js`.
- Tulisan "Masih data contoh" hilang dari halaman katalog.
- Kartu produk tetap tampil dengan desain sebelumnya.
- Pengujian berhasil: nama produk di Supabase diubah menjadi "Kopi Spesial", lalu perubahan tampil di `localhost:3000` setelah halaman dimuat ulang.
- Kesimpulan: katalog berhasil mengambil data dari database Supabase.

**Perbaikan:**

Tidak ada perbaikan kode tambahan yang diperlukan setelah pengujian. Fitur berhasil menampilkan perubahan data dari Supabase.

## US-02 — Detail produk

**Prompt:**

Baca docs/user-stories.md bagian US-02. Ubah app/produk/[id]/page.jsx supaya mengambil satu produk dari tabel "produk" di Supabase berdasarkan id di URL, di sisi server, memakai koneksi Supabase yang sudah dibuat di lib/supabase. Kalau produk tidak ditemukan, panggil notFound(). Jangan ubah tampilannya. Hapus CatatanBelumAktif dari halaman ini, tapi biarkan tombol WhatsApp.

**Hasil:**

- Agent mengubah `app/produk/[id]/page.jsx` untuk mengambil detail produk berdasarkan ID dari URL.
- Halaman detail berhasil menampilkan data produk dari Supabase.
- Pengujian berhasil: deskripsi produk diubah melalui Supabase, kemudian perubahan tampil di halaman detail setelah dimuat ulang.
- Pengujian ID yang tidak ditemukan berhasil: ketika membuka `http://localhost:3000/produk/9999`, muncul halaman "Halaman tidak ditemukan".
- Kesimpulan: halaman detail berhasil mengambil data produk dari database dan menangani produk yang tidak ditemukan.

**Perbaikan:**

Tidak ada perbaikan kode tambahan yang diperlukan setelah pengujian. Kedua pengujian berhasil.

## US-03 — Pesan via WhatsApp

**Prompt:**

Baca docs/rancangan-teknis.md bagian "Pesan WhatsApp (US-03)". Ubah components/TombolWhatsApp.jsx menjadi tautan yang membuka https://wa.me/ ke nomor di lib/toko.js, dengan pesan otomatis berisi nama dan harga produk dalam format rupiah. Pesan di-encode dengan encodeURIComponent dan dibuka di tab baru. Pertahankan tampilan tombolnya. Hapus CatatanBelumAktif yang menyebut US-03 di halaman detail produk.

**Hasil:**

- Agent mengubah `components/TombolWhatsApp.jsx` untuk membuat tombol pemesanan melalui WhatsApp.
- Tombol berhasil membuka WhatsApp dengan nomor tujuan toko yang sesuai.
- Pesan otomatis berhasil terisi dengan nama produk dan harga dalam format rupiah.
- Pengujian berhasil menggunakan produk "Kopi Spesial 250 g" dengan harga Rp 45.000.
- Kesimpulan: tombol WhatsApp berhasil menyiapkan pesan pemesanan secara otomatis.

**Perbaikan:**

Tidak ada perbaikan kode tambahan yang diperlukan setelah pengujian. Tombol dan pesan otomatis berfungsi sesuai harapan.

## US-04 — Login admin

**Prompt dari lembar kerja:**

Baca AGENTS.md bagian aturan keamanan dan docs/user-stories.md bagian US-04. Buat login admin memakai Supabase Auth (email dan password) dengan @supabase/ssr dan cookie, memakai SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY. Login diproses dengan Server Action di app/admin/actions.js dan disambungkan ke form di app/admin/login/page.jsx. Login berhasil diarahkan ke /admin; login gagal menampilkan pesan error yang jelas di halaman login. Buat juga tombol "Keluar" di components/NavAdmin.jsx berfungsi: mengakhiri sesi lalu kembali ke /admin/login. Jangan ubah tampilan. Hapus CatatanBelumAktif dari halaman login.

**Hasil implementasi awal:**

- Pengerjaan US-04 dikirim ke Antigravity bersama prompt US-05 dan US-06 dalam satu prompt gabungan.
- Perubahan yang berkaitan dengan login mencakup `app/admin/login/page.jsx`, `app/admin/actions.js`, `components/NavAdmin.jsx`, serta koneksi Supabase.
- Pengujian login dengan password salah: belum diuji.
- Pengujian login menggunakan kredensial bawaan: belum diuji.
- Pengujian tombol Keluar: belum diuji.

**Perbaikan:**

Belum ada perbaikan lanjutan yang dikonfirmasi. Pengujian perlu dilakukan untuk memastikan login dan logout berfungsi sesuai harapan.

## US-05 — Ganti password admin

**Prompt dari lembar kerja:**

Baca docs/user-stories.md bagian US-05. Buat Server Action ganti password di app/admin/actions.js untuk admin yang sedang login, memakai Supabase Auth. Validasi di server: password baru minimal 8 karakter dan harus sama dengan konfirmasi. Tampilkan pesan berhasil atau pesan error yang jelas di halaman. Sambungkan ke form di app/admin/password/page.jsx tanpa mengubah tampilannya. Hapus CatatanBelumAktif dari halaman ini.

**Hasil implementasi awal:**

- Pengerjaan US-05 dikirim ke Antigravity bersama prompt US-04 dan US-06 dalam satu prompt gabungan.
- Perubahan yang berkaitan dengan fitur ini mencakup `app/admin/password/page.jsx` dan `app/admin/actions.js`.
- Validasi panjang password minimal 8 karakter: belum diuji.
- Validasi kecocokan password dan konfirmasi: belum diuji.
- Pengujian penggantian password dan login menggunakan password baru: belum diuji.

**Perbaikan:**

Belum ada perbaikan lanjutan yang dikonfirmasi. Pengujian perlu dilakukan, termasuk memastikan password baru dapat digunakan untuk login.

## US-06 — Proteksi halaman admin

**Prompt dari lembar kerja:**

Baca AGENTS.md aturan keamanan nomor 3 dan 4, dan docs/user-stories.md bagian US-06. Buat file proxy.js di root proyek (Next.js 16). Semua rute /admin kecuali /admin/login wajib login dengan Supabase Auth; kalau belum login, alihkan ke /admin/login. Pastikan juga setiap Server Action yang mengubah data memeriksa login di server. Hapus CatatanBelumAktif dari halaman /admin.

**Hasil implementasi awal:**

- Pengerjaan US-06 dikirim ke Antigravity bersama prompt US-04 dan US-05 dalam satu prompt gabungan.
- Agent membuat file `proxy.js` di root proyek.
- Perubahan terkait juga mencakup `app/admin/page.jsx` dan file koneksi Supabase.
- Pengujian akses `/admin` tanpa login: belum diuji.
- Pengujian akses `/admin/password` tanpa login: belum diuji.
- Pengujian akses halaman admin setelah login: belum diuji.
- Pemeriksaan login pada setiap Server Action yang mengubah data: belum diverifikasi.

**Perbaikan:**

Belum ada perbaikan lanjutan yang dikonfirmasi. Pengujian proteksi halaman dan pemeriksaan autentikasi pada Server Action perlu dilakukan.

## Debugging dan fitur bonus

### Debugging 1 — Autentikasi GitHub

**Masalah:**

Perintah `git push` awalnya gagal dengan pesan `Invalid username or token. Password authentication is not supported for Git operations.`

**Perbaikan:**

Menjalankan perintah `git config --global credential.helper manager`, kemudian mengulangi `git push` dan menyelesaikan autentikasi melalui browser.

**Hasil:**

Perubahan berhasil dikirim ke branch `main` di GitHub.

### Debugging 2 — Peringatan format baris Git di Windows

**Masalah:**

Saat menjalankan `git add .`, Git menampilkan peringatan bahwa format baris `LF` akan diubah menjadi `CRLF` pada beberapa file.

**Perbaikan:**

Tidak diperlukan perbaikan khusus karena pesan tersebut merupakan peringatan perbedaan format akhir baris file, bukan error yang menghentikan perintah Git.

**Hasil:**

Perintah Git dapat dilanjutkan dan perubahan berhasil di-commit serta di-push.

### Fitur bonus

Belum ada.
