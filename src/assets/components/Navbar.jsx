import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/components/Navbar.css";
import logoSN from "../Images/Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (path) => {
    setMenuOpen(false);

    if (location.pathname === path) {
      // klik menu yang sama → scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // pindah halaman → otomatis ke atas
      navigate(path);
    }
  };

  return (
    <nav
      className={`navbar
        ${!isHome ? "navbar-solid" : ""}
        ${scrolled && isHome ? "navbar-scrolled" : ""}
      `}
    >
      {/* LOGO */}
      <div
        className="logo"
        onClick={() => handleNavClick("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logoSN} alt="Logo SN" />
        <span className="logo-text">Reuni Nusantara</span>
      </div>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => handleNavClick("/")}>Home</li>
        <li onClick={() => handleNavClick("/folder")}>Folder</li>
        <li onClick={() => handleNavClick("/layanan")}>Ketentuan</li>
        <li onClick={() => handleNavClick("/sponsor")}>Sponsor</li>

        {/* Register Mobile */}
        <button
          className="btn-register mobile-only"
          onClick={() =>
            window.open("https://forms.gle/FS9ULg13mzXeKwQN7", "_blank")
          }
        >
          Register
        </button>
      </ul>

      {/* Register Desktop */}
      <button
        className="btn-register desktop-only"
        onClick={() =>
          window.open("https://forms.gle/FS9ULg13mzXeKwQN7", "_blank")
        }
      >
        Register
      </button>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
