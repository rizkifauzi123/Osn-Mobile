import React from "react";
import "../style/components/Footer.css";
import logoSN from "../Images/Logo.png"

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* LEFT */}
       <div className="footer-brand">
        <div className="brand-header">
          <div className="brand-logo">
            <img src={logoSN} alt="Logo Reuni SN Nusantara" />
          </div>

          <div className="brand-text">
            <h4>Reuni SN Nusantara</h4>
            <span>Event Nasional 2025</span>
          </div>
        </div>

          <p className="brand-desc">
            Menyatukan kenangan, merajut kebersamaan Nusantara.
            Bergabunglah dengan ribuan alumni dalam acara reuni terbesar tahun ini.
          </p>

          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-menu">
          <h5>Menu</h5>
          <ul>
            <li>Home</li>
            <li>Folder</li>
            <li>Hotline</li>
            <li>Ketentuan</li>
            <li>Sponsor</li>
            <li>Register</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h5>Kontak</h5>

          <ul>
            <li>📞 082312636561 - NdoroB31</li>
            <li>📞 087832810134 - Didit</li>
            <li>✉️ demang738@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 Reuni SN Nusantara. All rights reserved.</span>
        <div>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
