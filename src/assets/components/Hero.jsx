import React from "react";
import { Link } from "react-router-dom";
import "../style/components/Hero.css";
import heroImage from "../Images/hero .jpeg"; // ganti sesuai nama file kamu

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">● Event Nasional 2026</div>

          <h1 className="hero-title">
            Reuni SN <br />
            <span>Nusantara</span>
          </h1>

          <p className="hero-subtitle">
            Menyatukan Kenangan, Merajut Kebersamaan Nusantara
          </p>

          <div className="hero-meta">
            <div className="meta-item">
              📅 <span>11–12 April 2026</span>
            </div>
            <div className="meta-item">
              📍 <span>Bukit Selo Boyolali, Jawa Tengah</span>
            </div>
          </div>
          <div className="hero-actions">
            {/* Daftar Sekarang - External Link */}
            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://forms.gle/FS9ULg13mzXeKwQN7", "_blank")
              }
            >
              Daftar Sekarang →
            </button>

            {/* Lihat Informasi - Internal Route */}
            <Link to="/layanan" className="btn-outline">
              Lihat Informasi
            </Link>
          </div>
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={heroImage} alt="Poster Reuni SN Nusantara" />
        </div>

      </div>
    </section>
  );
}
