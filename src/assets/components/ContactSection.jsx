import React from "react";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import "../style/components/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <span className="contact-badge">
          <Clock size={16} /> Layanan Bantuan
        </span>
        <h2 className="contact-title">Hubungi Kami</h2>
        <p className="contact-subtitle">
          Tim panitia siap membantu menjawab pertanyaan dan kebutuhan Anda
        </p>
      </div>

      <div className="contact-cards">
        {/* WhatsApp */}
        <div className="contact-card whatsapp-card">
        <div className="icon whatsapp">
          <MessageCircle size={24} />
        </div>

        <h3>WhatsApp</h3>

        <p className="contact-main">
          087832810134 – Admin 1 (Didit)
        </p>
        <a
          href="https://wa.me/6287832810134?text=Halo%20Admin%201%2C%20saya%20ingin%20bertanya%20tentang%20Reuni%20SN%20Nusantara"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn whatsapp-btn small">
            <MessageCircle size={16} /> Chat Didit
          </button>
        </a>

        <p className="contact-main">
          082312636561 – Admin 2 (NdoroB31)
        </p>
        <a
          href="https://wa.me/6282312636561?text=Halo%20Admin%202%2C%20saya%20ingin%20bertanya%20tentang%20Reuni%20SN%20Nusantara"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn whatsapp-btn small">
            <MessageCircle size={16} /> Chat NdoroB31
          </button>
        </a>

        <span className="contact-desc">
          Chat langsung dengan panitia
        </span>
      </div>


        {/* Telepon */}
        <div className="contact-card phone-card">
          <div className="icon phone">
            <Phone size={24} />
          </div>
          <h3>Telepon</h3>
          <p className="contact-main">087832810134 – Admin 1 (Didit)</p>
          <p className="contact-main">082312636561 – Admin 2 (NdoroB31)</p>
          <span className="contact-desc">Hotline resmi panitia</span>
          <a 
            href="tel:+6282312636561"
          >
            <button className="btn phone-btn">
              <Phone size={18} /> Hubungi
            </button>
          </a>
        </div>

        {/* Email */}
        <div className="contact-card email-card">
          <div className="icon email">
            <Mail size={24} />
          </div>
          <h3>Email</h3>
          <p className="contact-main">demang738@gmail.com</p>
          <span className="contact-desc">Untuk pertanyaan formal</span>
          <a 
            href="mailto:info@reuninsn.id"
          >
            <button className="btn email-btn">
              <Mail size={18} /> Kirim Email
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}