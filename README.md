# Trail & Tale — Katalog UMKM + Order WhatsApp

Aplikasi katalog produk untuk usaha **Trail & Tale**, bertema outdoor lifestyle. Proyek ini dikembangkan sebagai bagian dari workshop *Vibe Coding Creative Hub App Talent (CHAT) 2026* dengan bantuan AI.

Aplikasi menggunakan Next.js dan Supabase untuk menampilkan katalog produk dari database, menyediakan halaman detail produk, serta memudahkan pelanggan melakukan pemesanan melalui WhatsApp.

## Tentang Aplikasi

- **Nama usaha:** Trail & Tale
- **Pembuat:** Rizka Fatikarani
- **Program:** Workshop CHAT 2026 — Tutorial Development Katalog UMKM
- **Link aplikasi:** https://katalog-umkm-rizka.vercel.app/
- **Repository GitHub:** https://github.com/rizkafatikarani/katalog-umkm-rizka
- **Nomor WhatsApp pemesanan:** 081293077039

## Fitur Aplikasi

### Fitur pelanggan
- Menampilkan katalog produk dari database Supabase.
- Menampilkan detail produk berdasarkan data dari database.
- Menampilkan informasi produk, termasuk nama dan harga.
- Menyediakan tombol pemesanan melalui WhatsApp.
- Mengirim informasi nama produk dan harga ke WhatsApp untuk memudahkan pemesanan.
- Menampilkan halaman yang sesuai ketika produk tidak ditemukan.

### Fitur admin
- Login admin menggunakan Supabase Authentication.
- Logout dari akun admin.
- Mengganti password akun admin.
- Proteksi halaman admin agar tidak dapat diakses tanpa autentikasi.

### Fitur tambahan
Fokus pengembangan proyek ini adalah menyelesaikan enam user story utama, yaitu US-01 sampai US-06, yang mencakup katalog database, detail produk, pemesanan WhatsApp, login admin, penggantian password, dan proteksi halaman admin.

## Teknologi yang Digunakan

- **Next.js** — framework aplikasi web.
- **React** — membangun antarmuka pengguna.
- **Supabase Database** — menyimpan data produk.
- **Supabase Authentication** — autentikasi akun admin.
- **WhatsApp** — media komunikasi untuk pemesanan.
- **Git dan GitHub** — version control dan penyimpanan kode.
- **Vercel** — deployment aplikasi.

## Struktur Proyek

| File atau folder | Keterangan |
|---|---|
| `app/` | Halaman aplikasi dan halaman admin |
| `app/admin/` | Halaman dan fitur administrasi |
| `components/` | Komponen antarmuka aplikasi |
| `lib/toko.js` | Konfigurasi identitas toko, kontak, alamat, dan jam operasional |
| `lib/supabase/` | Konfigurasi koneksi Supabase |
| `docs/` | Dokumentasi, skema database, user story, dan checklist |
| `PROMPTS.md` | Jurnal prompt dan proses pengembangan dengan AI |
| `.env.example` | Contoh konfigurasi environment variable |
| `.env.local` | Konfigurasi lokal yang tidak boleh diunggah ke GitHub |

## Menjalankan Aplikasi Secara Lokal

### 1. Persyaratan

Pastikan perangkat sudah memiliki:
- Node.js
- npm
- Git

### 2. Clone repository

Jalankan perintah berikut di terminal:

```bash
git clone https://github.com/rizkafatikarani/katalog-umkm-rizka.git
cd katalog-umkm-rizka
```

### 3. Install dependencies

```bash
npm install
```

### 4. Konfigurasi environment variable

Salin file `.env.example` menjadi `.env.local`, kemudian isi menggunakan konfigurasi proyek Supabase milikmu.

Pastikan nama variabel sesuai dengan yang digunakan aplikasi:

```env
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
```

Isi nilainya secara lokal menggunakan kredensial dari Supabase. Jangan mengisi nilai rahasia ke dalam README atau mengunggah file `.env.local` ke GitHub.

**Penting:** `SUPABASE_SECRET_KEY` hanya boleh digunakan di lingkungan server dan tidak boleh diekspos ke browser.

### 5. Jalankan aplikasi

```bash
npm run dev
```

Buka alamat berikut di browser:

http://localhost:3000

## Konfigurasi Toko

Pengaturan identitas toko dapat disesuaikan melalui file `lib/toko.js`.

Informasi yang dapat dikonfigurasi antara lain:
- Nama dan deskripsi toko.
- Nomor WhatsApp pemesanan.
- Alamat toko.
- Jam operasional.

Nomor WhatsApp yang digunakan untuk pemesanan adalah **081293077039**. Untuk tautan WhatsApp, nomor tersebut menggunakan format internasional tanpa angka `0` di awal, yaitu `6281293077039`.

## Database dan Autentikasi

Aplikasi menggunakan Supabase untuk menyimpan data produk dan mengelola autentikasi admin.

Data produk dikelola melalui **Supabase Dashboard → Table Editor → `produk`**.

Akun admin dibuat melalui Supabase Authentication. Pendaftaran akun publik sebaiknya dinonaktifkan apabila aplikasi hanya ditujukan untuk admin yang telah dibuat.

## Deployment

Aplikasi di-deploy menggunakan Vercel dan terhubung dengan repository GitHub.

- **Website:** https://katalog-umkm-rizka.vercel.app/
- **Repository:** https://github.com/rizkafatikarani/katalog-umkm-rizka

Setiap perubahan yang sudah di-commit dan di-push ke branch utama dapat memicu deployment otomatis melalui Vercel.

## Keamanan

- Jangan mengunggah file `.env.local` ke GitHub.
- Jangan menaruh secret key atau password di dalam kode frontend.
- Jangan menggunakan awalan `NEXT_PUBLIC_` untuk secret key.
- Pastikan halaman admin hanya dapat diakses oleh pengguna yang terautentikasi.
- Pastikan konfigurasi environment variable di Vercel sudah benar.
- Periksa checklist keamanan dan checklist pengujian sebelum mengumpulkan proyek.

## Dokumentasi Pengembangan

Dokumentasi pendukung proyek tersedia di folder `docs/`, termasuk user story, rancangan teknis, skema database, dan checklist pengujian.

Jurnal pengembangan menggunakan AI dicatat di `PROMPTS.md`.

---

*Trail & Tale — Temukan perlengkapan untuk setiap petualangan.*