import React from "react";
import {
  Flag,
  Gamepad2,
  Camera,
  Handshake,
  Award,
} from "lucide-react";

import heroImage from "../Images/About.jpg";
import "../style/components/AboutEvent.css";

export default function AboutEvent() {
  return (
    <section className="about-section">

      {/* BADGE */}
      <div className="about-badge">ℹ️ Tentang Acara</div>

      {/* TITLE */}
      <h2 className="about-title">Reuni SN Nusantara</h2>
      <p className="about-tagline">Menyatukan Kenangan, Merajut Kebersamaan</p>

      {/* CONTENT */}
      <div className="about-wrapper">

        {/* LEFT TEXT */}
        <div className="about-text">
          <p>
            <strong>Reuni SN Nusantara</strong> adalah acara reuni besar yang
            mempertemukan alumni lintas angkatan dari berbagai daerah di
            Nusantara. Acara ini mengusung konsep kebersamaan dan silaturahmi,
            menciptakan momen berharga untuk saling berbagi cerita, pengalaman,
            dan mempererat tali persaudaraan.
          </p>

          <p>
            Berlangsung selama beberapa hari di lokasi yang indah dan strategis,
            acara ini dikemas dengan berbagai kegiatan menarik mulai dari diskusi,
            games, hiburan, hingga networking. Kami berkomitmen memberikan pengalaman
            yang berkesan bagi setiap peserta.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <h3>3 Hari</h3>
              <span>Durasi Acara</span>
            </div>
            <div>
              <h3>500+</h3>
              <span>Peserta</span>
            </div>
            <div>
              <h3>15+</h3>
              <span>Kegiatan</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
        <img src={heroImage} alt="Lokasi Event" />
        {/* <div className="image-overlay">
            <h4>Bukit Selo Boyolali</h4>
            <span>11–13 April 2026</span>
        </div> */}
        </div>
      </div>

      {/* ACTIVITIES */}
      <h3 className="activity-title">Aktivitas Utama</h3>

      <div className="activity-cards">

        <div className="activity-card">
          <Flag size={22} />
          <h4>Opening Ceremony</h4>
          <p>Pembukaan acara dengan sambutan dan perkenalan</p>
        </div>

        <div className="activity-card">
          <Gamepad2 size={22} />
          <h4>Games & Hiburan</h4>
          <p>Beragam permainan seru dan pertunjukan menarik</p>
        </div>

        <div className="activity-card">
          <Camera size={22} />
          <h4>Dokumentasi & Photo Session</h4>
          <p>Sesi foto bersama dan dokumentasi kenangan</p>
        </div>

        <div className="activity-card">
          <Handshake size={22} />
          <h4>Networking & UMKM</h4>
          <p>Edukasi, berbagi peluang usaha, dan kolaborasi</p>
        </div>

        <div className="activity-card">
          <Award size={22} />
          <h4>Closing Ceremony</h4>
          <p>Penutupan acara dan pemberian kenang-kenangan</p>
        </div>

      </div>
    </section>
  );
}
