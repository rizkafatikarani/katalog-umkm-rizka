"use client";

import { useState } from "react";

export default function TombolSalinLink() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'copied' | 'error'

  const salinLink = async () => {
    try {
      const url = window.location.href;

      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        setStatus("copied");
      } else {
        // Fallback jika Clipboard API tidak didukung atau di luar secure context
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const success = document.execCommand("copy");
        textArea.remove();

        if (success) {
          setStatus("copied");
        } else {
          window.prompt("Salin link produk berikut:", url);
          setStatus("copied");
        }
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-1 sm:self-start">
      <button
        type="button"
        onClick={salinLink}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-garis bg-latar px-5 py-3 font-semibold text-teks transition-colors hover:border-utama hover:text-utama sm:w-auto"
        aria-label="Salin Link Produk"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-3.354a4.5 4.5 0 0 0-6.364-6.364l-1.757 1.757m-1.414 4.243a4.5 4.5 0 0 1 6.364 0"
          />
        </svg>
        <span>
          {status === "copied"
            ? "Link berhasil disalin!"
            : status === "error"
            ? "Gagal menyalin link"
            : "Salin Link Produk"}
        </span>
      </button>

      {status === "copied" && (
        <p role="status" className="text-xs font-medium text-utama">
          ✓ Link produk telah disalin ke clipboard
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-xs font-medium text-bahaya">
          Gagal menyalin. Silakan salin URL langsung dari browser.
        </p>
      )}
    </div>
  );
}

