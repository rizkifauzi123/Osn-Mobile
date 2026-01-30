import React from "react";
import "../style/Pages/TermSection.css";

export default function TermsSection() {
  return (

    
    <section className="terms-section">
      {/* Header */}
      <div className="terms-header">
        <span className="terms-badge">📋 Syarat & Ketentuan</span>
        <h2 className="terms-title">Ketentuan Peserta</h2>
        <p className="terms-subtitle">
          Harap membaca dan memahami ketentuan berikut demi kelancaran
          kegiatan Reuni SN Nusantara
        </p>
      </div>

      {/* Cards */}
      <div className="terms-grid">
        {/* A. Ketentuan Umum */}
        <div className="terms-card green">
          <div className="card-head">
            <span className="card-icon">✅</span>
            <h3>A. Ketentuan Umum</h3>
          </div>
          <ul>
            <li>Peserta terbuka untuk seluruh keluarga SN di Nusantara</li>
            <li>Dalam keadaan sehat jasmani dan rohani</li>
            <li>
              Membawa keperluan pribadi selama acara
              (pakaian wajib, umum & olahraga, jaket, obat/vitamin,
              jas hujan/ponco, kaos kaki atau sarung tangan – skala prioritas)
            </li>
            <li>
              Menggunakan KAOS REUNI saat apel atau acara resmi lainnya
              (bagi yang tidak memiliki, diperkenankan menggunakan kaos
              identitas lain dengan warna dasar hitam)
            </li>
            <li>
              Datang ke lokasi lebih awal agar dapat mengikuti seluruh rangkaian
              kegiatan
            </li>
            <li>
              Menghubungi panitia terkait jika mengalami kendala selama acara
            </li>
          </ul>
        </div>

        {/* B. Ketentuan Administratif */}
        <div className="terms-card blue">
          <div className="card-head">
            <span className="card-icon">📄</span>
            <h3>B. Ketentuan Administratif</h3>
          </div>
          <ul>
            <li>WAJIB melakukan registrasi untuk mengikuti acara</li>
            <li>Mengisi seluruh data dan pertanyaan pada form registrasi</li>
            <li>WAJIB mengikuti seluruh rangkaian kegiatan yang dijadwalkan</li>
            <li>WAJIB mematuhi semua ketentuan yang berlaku selama acara</li>
            <li>
              Pelayanan prioritas diberikan kepada peserta yang sudah
              teregister (Festival)
            </li>
            <li>Membawa kartu identitas diri dan kartu kesehatan</li>
            <li>Bijak dalam menggunakan handphone selama kegiatan</li>
            <li>Hadir minimal 10 menit lebih awal pada setiap agenda</li>
            <li>
              Panitia berhak menegur atau mengambil sikap terhadap peserta
              demi ketertiban dan kelancaran acara
            </li>
          </ul>
        </div>

        {/* C. Tata Tertib */}
        <div className="terms-card purple">
          <div className="card-head">
            <span className="card-icon">ℹ️</span>
            <h3>C. Tata Tertib Selama Event</h3>
          </div>
          <ul>
            <li>
              Dilarang membawa benda yang membahayakan atau tidak sesuai
              kebutuhan acara
            </li>
            <li>Dilarang keluar area event tanpa izin panitia</li>
            <li>
              Dilarang memasuki area berbahaya di sekitar lokasi acara
            </li>
            <li>WAJIB menjaga kebersihan di seluruh area</li>
            <li>WAJIB mengedepankan etika dan sopan santun</li>
            <li>
              Menjaga barang bawaan pribadi dan rekan satu tim/tenda
            </li>
            <li>
              Barang bawaan pribadi menjadi tanggung jawab masing-masing
            </li>
            <li>
              Dilarang membawa perhiasan atau barang berharga berlebihan
            </li>
            <li>
              Segera laporkan kepada panitia jika terjadi hal yang tidak
              diinginkan
            </li>
            <li>
              Mendampingi putra/putri yang masih memerlukan pendampingan
            </li>
            <li>
              Nomor telepon wajib aktif untuk kebutuhan koordinasi dan
              informasi penting lainnya
            </li>
          </ul>
        </div>
      </div>

       <div className="term-btn-wrapper">
        <button
          type="button"
          className="term-reg-btn"
          onClick={() =>
            window.open("https://forms.gle/FS9ULg13mzXeKwQN7", "_blank")
          }
        >
          ✈️ Daftar Sekarang
        </button>
      </div>

       {/* ================= DOWNLOAD PDF SECTION ================= */}
      <div className="terms-download-section">
        <div className="terms-download-card">

          <div className="terms-dp-left">
            <div className="terms-dp-icon">📄</div>

            <div className="terms-dp-text">
              <h3>Download Dokumen Ketentuan</h3>
              <p>
                Unduh dokumen PDF berisi syarat & ketentuan lengkap peserta
                Reuni SN Nusantara.
              </p>
            </div>
          </div>

          <a
            href="/Ketentuan.pdf"
            download
            className="terms-dp-button"
          >
            ⬇️ Download PDF
          </a>

        </div>
      </div>


      {/* Footer note */}
      <p className="terms-footer">
        Dengan melakukan registrasi, peserta dianggap telah membaca,
        memahami, dan menyetujui seluruh ketentuan di atas.
      </p>

     
    </section>
  );
}
