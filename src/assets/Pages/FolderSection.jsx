import React, { useState } from "react";
import { Camera, CalendarDays, ExternalLink, X, Clock } from "lucide-react";
import "../style/Pages/FolderSection.css";

export default function FolderSection() {
  const [showRundown, setShowRundown] = useState(false);

  return (
    <section className="folder-section">

      {/* ================= HEADER ================= */}
      <div className="folder-header">

        {/* VIDEO */}
        <div className="folder-video">
          <iframe
            src="https://www.youtube.com/embed/g3ON3-PUIek?si=thhzUwMUiTbYja0U"
            title="Video Informasi Reuni SN"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="folder-badge">📁 Pusat Informasi</div>
        <h2 className="folder-title">Folder Dokumen</h2>
        <p className="folder-subtitle">
          Akses semua informasi penting seputar acara Reuni SN Nusantara dalam satu tempat
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="folder-cards">

        {/* CARD 1 */}
        <div className="folder-card purple">
          <div className="card-top"></div>

          <div className="card-icon purple-bg">
            <Camera size={22} />
          </div>

          <h3>Dokumentasi Acara</h3>
          <p>Akses seluruh dokumentasi foto dan video resmi acara melalui Google Drive</p>

          <ul>
            <li>Foto & Video Acara</li>
            <li>Album per Hari</li>
            <li>Highlight Video</li>
          </ul>

          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noreferrer"
            className="card-btn purple-btn"
          >
            Buka Google Drive <ExternalLink size={16} />
          </a>
        </div>

        {/* CARD 2 */}
        <div className="folder-card green">
          <div className="card-top"></div>

          <div className="card-icon green-bg">
            <CalendarDays size={22} />
          </div>

          <h3>Jadwal & Rundown Acara</h3>
          <p>Lihat rangkaian kegiatan lengkap dari awal hingga akhir acara</p>

          <ul>
            <li>Hari Jumat – Minggu</li>
            <li>Opening, Inti Acara, Closing</li>
            <li>Detail Waktu & Durasi</li>
          </ul>

          <button
            className="card-btn green-btn"
            onClick={() => setShowRundown(true)}
          >
            Lihat Rundown Lengkap <CalendarDays size={16} />
          </button>
        </div>
      </div>

      {/* ================= MODAL RUNDOWN ================= */}
{showRundown && (
  <div className="rundown-overlay">
    <div className="rundown-modal">

      <button
        className="close-btn"
        onClick={() => setShowRundown(false)}
      >
        <X size={18} />
      </button>

      <div className="rundown-header">
        <CalendarDays size={22} />
        <div>
          <h2>Rundown Acara Lengkap</h2>
          <p>Reuni SN Nusantara 2026 • Bukit Selo Boyolali</p>
        </div>
      </div>

      {/* ================= DATA RUNDOWN ================= */}
      {[
        {
          day: "Jumat, 10 April 2026",
          items: [
            { time: "08.00 – 13.00", dur: "5 Jam", act: "Loading All Material Event & Panitia Event" },
            { time: "13.00 – 17.00", dur: "4 Jam", act: "Prepare All Material Event & Gladi Resik Panitia" },
            { time: "17.00 – 19.30", dur: "2.5 Jam", act: "Break Event (Istirahat)" },
            { time: "19.30 – 22.00", dur: "2.5 Jam", act: "Rapat Koordinasi All Panitia" },
            { time: "22.00 – 08.00", dur: "Istirahat", act: "Break Event (Istirahat)" },
          ]
        },
        {
          day: "Sabtu, 11 April 2026",
          items: [
            { time: "08.00 – 13.00", dur: "5 Jam", act: "Loading Tenant & Peserta, Registrasi Ulang, Scan QR, Photo Booth, Peserta ke Penginapan" },
            { time: "13.00 – 13.30", dur: "30 Menit", act: "Persiapan Apel Pembukaan & Gladi Resik" },
            { time: "13.30 – 14.30", dur: "1 Jam", act: "Apel Pembukaan (Sambutan Ketua Panitia, VIP, Pembina, Doa, Pelepasan Balon, Foto Bersama)" },
            { time: "14.30 – 15.30", dur: "1 Jam", act: "Break Event (Ibadah Ashar)" },
            { time: "15.30 – 17.30", dur: "2 Jam", act: "Opening Master Ceremony & Fun Game" },
            { time: "17.30 – 19.30", dur: "2 Jam", act: "Break Event (Maghrib, Isya, Tausiyah, Doa)" },
            { time: "19.30 – 20.30", dur: "1 Jam", act: "Istirahat (Makan Malam – Tenant UMKM)" },
            { time: "20.30 – 00.00", dur: "3.5 Jam", act: "Kegiatan Malam (Edukasi Medsos, Api Unggun, Bakar-bakar, Coffee Time, Live Music)" },
          ]
        },
        {
          day: "Minggu, 12 April 2026",
          items: [
            { time: "00.00 – 04.00", dur: "4 Jam", act: "Break Event (Istirahat)" },
            { time: "04.00 – 06.00", dur: "2 Jam", act: "Ibadah Subuh & Coffee Break" },
            { time: "06.00 – 07.00", dur: "1 Jam", act: "Senam Pagi Peserta" },
            { time: "07.00 – 09.00", dur: "2 Jam", act: "Wisata Kuliner & Hiburan Tradisional" },
            { time: "09.00 – 11.00", dur: "2 Jam", act: "Edukasi Networking & UMKM" },
            { time: "11.00 – 14.00", dur: "3 Jam", act: "Closing Ceremony (Karaoke, Fun Game, Hadiah, Video Testimoni, Foto Bersama, Sambutan Ketua Panitia, LPJ Panitia)" },
            { time: "14.00 – Selesai", dur: "Closing", act: "Prepare Material, Loading Peserta Pulang, Evaluasi & Penutupan Panitia" },
          ]
        }
      ].map((dayData, dIndex) => (
        <div key={dIndex}>
          <div className="day-title">
            <CalendarDays size={18} /> {dayData.day}
          </div>

          <div className="rundown-list">
            {dayData.items.map((item, i) => (
              <div key={i} className="rundown-item">
                <div className="time">
                  <Clock size={14} /> {item.time}
                </div>
                <div className="dur">{item.dur}</div>
                <div className="act">{item.act}</div>
              </div>
            ))}
          </div>
        </div>
      ))}



      {/* ================= DOWNLOAD PDF SECTION ================= */}
{/* <div className="download-doc-section">
  <div className="download-doc-card">
    <div className="doc-left">
      <div className="doc-icon">📄</div>
      <div className="doc-text">
        <h3>Unduh Dokumen Acara (PDF)</h3>
        <p>Download proposal dan dokumen resmi Reuni SN Nusantara</p>
      </div>
    </div>

    <a
      href="https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      className="doc-button"
    >
      Download PDF
    </a>
  </div>
</div> */}


      {/* ================= CATATAN ================= */}
      <div className="note-box">
        <strong>Catatan Penting</strong>
        <p>
          Jadwal dapat berubah sewaktu-waktu. Harap datang tepat waktu dan siapkan
          perlengkapan sesuai kebutuhan acara outdoor. Informasi lebih lanjut hubungi panitia.
        </p>
      </div>

    </div>
  </div>
)}

    </section>
    
  );
}
