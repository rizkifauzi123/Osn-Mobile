import React from "react";
import "../style/components/Location.css";

export default function Location() {
  return (
    <section className="location-section">
      {/* HEADER */}
      <div className="location-header">
        <span className="location-badge">📍 Lokasi Event</span>
        <h2 className="location-title">Lokasi Kami</h2>
        <p className="location-subtitle">
          Temukan lokasi kami dengan mudah melalui Google Maps dan nikmati
          keindahan alam Jawa Tengah
        </p>
      </div>

        {/* CONTENT */}
        <div className="location-wrapper">
          {/* MAP */}
          <div className="map-card">
              <iframe
                title="Lokasi Homestay Sanjaya 2"
                src="https://www.google.com/maps?q=Homestay%20Sanjaya2%20Boyolali&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              /> 
            <div className="map-footer">
              <span>📍 Klik dan drag untuk jelajahi peta</span>
              <a
                href="https://maps.app.goo.gl/N4o52ruDpCsboGc67"
                target="_blank"
                rel="noreferrer"
              >
                Lihat di Google Maps ↗
              </a>
            </div>
          </div>

        {/* INFO */}
        <div className="location-info">
          <div className="location-main-card">
            <div className="icon-box">📍</div>
            <h3>Homestay Sanjaya 2</h3>
            <p>
              Blumbangsari, Dusun IV, Samiran, Kec. Selo, Kabupaten Boyolali, Jawa Tengah 57363
            </p>

            <ul>
              <li>📞 +62 812 3456 7890</li>
              <li>🕒 24 Jam (Camping Ground)</li>
            </ul>

           <a
              href="https://maps.app.goo.gl/N4o52ruDpCsboGc67"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              📍 Buka di Google Maps
            </a>

          </div>

          {/* SMALL CARDS */}
          <div className="location-features">
            <div className="feature-card">
              <span>🚗</span>
              <div>
                <h4>Akses Mudah</h4>
                <p>Dapat dijangkau kendaraan pribadi atau travel</p>
              </div>
            </div>

            <div className="feature-card">
              <span>🧭</span>
              <div>
                <h4>Navigasi GPS</h4>
                <p>Koordinat tersedia di Google Maps</p>
              </div>
            </div>

            <div className="feature-card">
              <span>📞</span>
              <div>
                <h4>Kontak Lokasi</h4>
                <p>Hubungi kami untuk petunjuk arah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
