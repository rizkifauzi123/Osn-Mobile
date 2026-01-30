import React from "react";
import "../style/Pages/SponsorSection.css";

const waNumber = "6281234567890"; // GANTI NOMOR ADMIN

export default function SponsorSection() {
  return (
    <>
    <section className="sponsor-section">
      <div className="sponsor-header">
        <span className="sponsor-badge">⭐ Partnership</span>
        <h2 className="sponsor-title">Proposal Sponsor</h2>
        <p className="sponsor-subtitle">
          Jadilah bagian dari acara Reuni SN Nusantara dan promosikan brand Anda
        </p>
      </div>

      <div className="sponsor-grid">

        {/* SPONSORSHIP UTAMA */}
        <div className="sponsor-card platinum">
          <div className="card-top"></div>
          <div className="card-icon">👑</div>

          <h3><strong>Sponsorship Utama</strong></h3>
          <p>
            Sponsorship adalah paket untuk sponsor <strong>UTAMA</strong> dengan dukungan dana 
            sebesar <strong>Rp. 10.000.000</strong>. Sponsor berhak memonopoli media/materi publikasi 
            kegiatan, dan panitia masih berhak mendapatkan Co Sponsor.
          </p>

          <ul>
            <li>Akomodasi penginapan dan layanan antar jemput</li>
            <li>Booth utama untuk produk/media promosi</li>
            <li>Logo pada banner utama & Web OSN Mobile Acara</li>
            <li>Data peserta</li>
            <li>Sertifikat dan/atau cinderamata</li>
            <li>Promosi khusus saat acara resmi berlangsung</li>
          </ul>

          <a
            href={`https://forms.gle/418rwsLVL9wCrRWP9`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn platinum-btn">Pilih Paket</button>
          </a>
        </div>

        {/* CO SPONSOR */}
        <div className="sponsor-card gold highlight">
          <div className="card-top"></div>
          <div className="card-icon">💎</div>

          <h3><strong>Co Sponsor</strong></h3>
          <p>
            Co Sponsor adalah paket sponsor pendukung dengan dana 
            <strong> Rp. 5.000.000</strong>. Tidak berhak memonopoli materi publikasi,
            dan panitia masih berhak menerima sponsor lainnya.
          </p>

          <ul>
            <li>Layanan antar jemput</li>
            <li>Booth utama untuk produk/media promosi</li>
            <li>Logo pada banner utama & Web OSN Mobile Acara</li>
            <li>Sertifikat dan/atau cinderamata</li>
            <li>Promosi di sekitar lokasi acara</li>
          </ul>

          <a
            href={`https://forms.gle/418rwsLVL9wCrRWP9`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn gold-btn">Pilih Paket</button>
          </a>
        </div>

        {/* SPONSOR PENDUKUNG UMKM */}
        <div className="sponsor-card silver">
          <div className="card-top"></div>
          <div className="card-icon">🎖️</div>

          <h3><strong>Sponsor Pendukung – UMKM</strong></h3>
          <p>
            Sponsor pendukung untuk pelaku UMKM dengan beberapa kategori dukungan.
          </p>

          <ul>
            <li><strong>Kategori A – Rp 3.000.000</strong></li>
            <li>Booth utama untuk produk/media promosi</li>
            <li>Logo backdrop & Web OSN Mobile Acara</li>
            <li>Sertifikat dan/atau cinderamata</li>

            <li><strong>Kategori B – Rp 2.000.000</strong></li>
            <li>Booth UMKM</li>
            <li>Sertifikat</li>
            <li>Logo backdrop</li>

            <li><strong>Kategori C – Rp 1.000.000</strong></li>
            <li>Booth UMKM</li>
          </ul>

          <a
            href={`https://forms.gle/418rwsLVL9wCrRWP9`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn silver-btn">Pilih Paket</button>
          </a>
        </div>
         </div>
    </section>


    {/* DOWNLOAD PROPOSAL SECTION - TERPISAH */}
      <section className="download-proposal-section">
        <div className="download-proposal-card">
          <div className="dp-left">
            <div className="dp-icon">
              📄
            </div>

            <div className="dp-text">
              <h3>Download Proposal Lengkap</h3>
              <p>
                Dapatkan informasi lengkap tentang paket sponsorship, benefit,
                dan detail acara dalam satu dokumen
              </p>
            </div>
          </div>
          <a
            href="/Proposal_Reuni.pdf"
            download
            className="dp-button"
          >
            ⬇️ Download Proposal
          </a>

        </div>
      </section>
    </>
  );
}
