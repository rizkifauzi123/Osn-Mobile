import React from "react";
import { Link } from "react-router-dom";
import "../style/components/Sponsorship.css";

// import logo
import NusantaraTech from "../Images/sponsor1.jpeg";
import BankNusantara from "../Images/sponsor2.jpeg";
import Telkom from "../Images/Sponsorship/pertamina.png";
import Garuda from "../Images/Sponsorship/pertamina.png";
import Pertamina from "../Images/Sponsorship/pertamina.png";

// data sponsor (digandakan biar looping halus)
const sponsors = [
  { name: "PT Nusantara Tech", logo: NusantaraTech },
  { name: "Bank Nusantara", logo: BankNusantara },
  { name: "Telkom Indonesia", logo: Telkom },
  { name: "Garuda Indonesia", logo: Garuda },
  { name: "Pertamina", logo: Pertamina },

  // duplicate for seamless loop
  { name: "PT Nusantara Tech", logo: NusantaraTech },
  { name: "Bank Nusantara", logo: BankNusantara },
  { name: "Telkom Indonesia", logo: Telkom },
  { name: "Garuda Indonesia", logo: Garuda },
  { name: "Pertamina", logo: Pertamina },
];

export default function Sponsorship() {
  return (
    <section className="sponsorship-section">
      {/* HEADER */}
      <div className="sponsorship-header">
        <span className="sponsorship-badge">🤝 Partnership</span>
        <h2 className="sponsorship-title">Sponsor Kami</h2>
        <p className="sponsorship-subtitle">
          Terima kasih atas dukungan para sponsor yang telah mempercayai acara kami
        </p>
      </div>

      {/* SLIDER */}
      <div className="sponsorship-slider">
        <div className="sponsorship-track">
          {sponsors.map((item, index) => (
            <div className="sponsorship-card" key={index}>
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <p className="sponsorship-footer">
        Tertarik menjadi sponsor?{" "}
        <Link to="/sponsor">Hubungi kami →</Link>
      </p>

    </section>
  );
}
