import Link from "next/link";
import { toko } from "@/lib/toko";

export const metadata = {
  title: `Tentang Kami - ${toko.nama}`,
  description: `${toko.nama} - ${toko.tagline}`,
};

export default function HalamanTentang() {
  const pesanKontak = `Halo ${toko.nama}, saya ingin bertanya tentang produk dan layanan Anda.`;
  const urlWhatsApp = `https://wa.me/${toko.nomorWhatsApp}?text=${encodeURIComponent(pesanKontak)}`;

  return (
    <div className="py-10 sm:py-14">
      {/* Bagian Navigasi & Judul */}
      <div className="max-w-2xl">
        <Link
          href="/"
          className="text-sm text-teks-lembut underline underline-offset-4 hover:text-utama"
        >
          &larr; Kembali ke katalog
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-teks">
          Tentang {toko.nama}
        </h1>
        <p className="mt-2 text-lg font-medium text-utama">{toko.tagline}</p>
      </div>

      {/* Konten Utama */}
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {/* Deskripsi Toko */}
        <div className="md:col-span-2 flex flex-col gap-5 text-teks-lembut leading-relaxed">
          <p>
            Selamat datang di <strong className="text-teks">{toko.nama}</strong>. Kami adalah toko
            perlengkapan petualangan dan gaya hidup outdoor yang berbasis di {toko.alamat}. Kami
            berkomitmen untuk menyediakan perlengkapan berkualitas tinggi yang siap menemani setiap
            langkah penjelajahan Anda, mulai dari pendakian gunung, berkemah di alam terbuka, hingga
            kegiatan harian dengan sentuhan petualang.
          </p>
          <p>
            Di {toko.nama}, setiap produk dipilih dengan cermat untuk memastikan ketahanan, kenyamanan,
            dan fungsi terbaik dalam menghadapi berbagai kondisi medan. Kami percaya bahwa petualangan
            terbaik dimulai dari persiapan yang matang dan perlengkapan yang dapat diandalkan.
          </p>
        </div>

        {/* Kartu Informasi & Kontak */}
        <div className="flex flex-col gap-5 rounded-2xl border border-garis bg-permukaan p-6">
          <h2 className="text-lg font-bold text-teks">Informasi & Kontak</h2>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-semibold text-teks">Alamat:</span>
            <span className="text-teks-lembut">{toko.alamat}</span>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-semibold text-teks">Jam Operasional:</span>
            <span className="text-teks-lembut">{toko.jamBuka}</span>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-semibold text-teks">Nomor WhatsApp:</span>
            <span className="text-teks-lembut">+{toko.nomorWhatsApp}</span>
          </div>

          <div className="pt-2">
            <a
              href={urlWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-utama px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-utama-gelap"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

