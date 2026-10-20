# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:**

Baca AGENTS.md dan docs/user-stories.md bagian US-01. Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase. Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**

- Agent mengubah 3 file: `app/page.jsx`, `lib/supabase/index.js`, dan `lib/supabase/server.js`.
- Tulisan "Masih data contoh" hilang dari halaman katalog.
- Kartu produk tetap tampil dengan desain sebelumnya.
- Pengujian berhasil: nama produk di Supabase diubah menjadi "Kopi Spesial", lalu perubahan tampil di `localhost:3000` setelah halaman dimuat ulang.
- Kesimpulan: katalog berhasil mengambil data dari database Supabase.

**Perbaikan:**

Tidak ada perbaikan kode tambahan yang diperlukan setelah pengujian. Fitur berhasil menampilkan perubahan data dari Supabase.

## US-02 Detail produk

**Prompt:**

Belum dikerjakan.

**Hasil:**

Belum diuji.

**Perbaikan:**

Belum ada.

## US-03 Pesan via WhatsApp

**Prompt:**

Belum dikerjakan.

**Hasil:**

Belum diuji.

**Perbaikan:**

Belum ada.

## US-04 Login admin

**Prompt:**

Belum dikerjakan.

**Hasil:**

Belum diuji.

**Perbaikan:**

Belum ada.

## US-05 Ganti password

**Prompt:**

Belum dikerjakan.

**Hasil:**

Belum diuji.

**Perbaikan:**

Belum ada.

## US-06 Proteksi halaman admin

**Prompt:**

Belum dikerjakan.

**Hasil:**

Belum diuji.

**Perbaikan:**

Belum ada.

## Debugging dan fitur bonus

### Debugging 1 — Autentikasi GitHub

**Masalah:**

Perintah `git push` awalnya gagal dengan pesan `Invalid username or token. Password authentication is not supported for Git operations.`

**Perbaikan:**

Menjalankan `git config --global credential.helper manager`, kemudian mengulangi `git push` dan menyelesaikan autentikasi melalui browser.

**Hasil:**

Perubahan berhasil dikirim ke branch `main` di GitHub.

**Fitur bonus:**

Belum ada.