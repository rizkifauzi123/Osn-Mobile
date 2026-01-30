
import React, { useState, useEffect } from "react";
import "../style/components/Statistik.css";
import {
  FiUsers, FiUserCheck, FiHome, FiCheckCircle,
  FiActivity, FiTruck, FiMapPin
} from "react-icons/fi";

export default function StatistikSection() {
  const [stats, setStats] = useState(null);

 useEffect(() => {
  const loadData = () => {
    fetch("https://script.google.com/macros/s/AKfycbyYB2qmRBLRZ9VyoGuxlA4RQ0is4Pf_a283obuTkmIYRhnTTsb1OKVhLb3l3ZjZN9314w/exec?nocache=" + Date.now())
      .then(res => res.json())
      .then(data => setStats(data));
  };

  loadData();
  const interval = setInterval(loadData, 10000); // refresh 10 detik

  return () => clearInterval(interval);
}, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <section className="stat-section">
        <div className="stat-header">
        <span className="stat-badge">📊 Data Realtime</span>
        <h2>Statistik Peserta</h2>
        <p>Data realtime berdasarkan aktivasi dan kehadiran peserta Reuni SN Nusantara</p>
      </div>
      {/* ======= CARD STATISTIK ======= */}
      <div className="stat-grid">
        <div className="stat-card teal">
          <div className="icon-wrap"><FiUsers /></div>
          <h3>{stats.totalAktivasiPeserta}</h3>
          <span>PESERTA YANG SUDAH AKTIVASI</span>
          <p>Total Aktivasi Peserta</p>
        </div>

        <div className="stat-card purple">
          <div className="icon-wrap"><FiUserCheck /></div>
          <h3>{stats.jumlahKehadiran}</h3>
          <span>TERMASUK PENDAMPING</span>
          <p>Total Peserta & Keluarga</p>
        </div>

        <div className="stat-card orange">
          <div className="icon-wrap"><FiHome /></div>
          <h3>{stats.totalTenant}</h3>
          <span>UMKM & BOOTH TERDAFTAR</span>
          <p>Total Aktivasi Tenant</p>
        </div>

        <div className="stat-card green">
          <div className="icon-wrap"><FiCheckCircle /></div>
          <h3>{stats.totalHadir}</h3>
          <span>CHECK-IN CONFIRMED</span>
          <p>Total Kehadiran</p>
        </div>

        <div className="stat-card blue">
          <div className="icon-wrap"><FiActivity /></div>
          <h3>{stats.totalMotor}</h3>
          <span>KENDARAAN RODA DUA</span>
          <p>Akses Parkir Motor</p>
        </div>

        <div className="stat-card pink">
          <div className="icon-wrap"><FiTruck /></div>
          <h3>{stats.totalMobil}</h3>
          <span>KENDARAAN RODA EMPAT</span>
          <p>Akses Parkir Mobil</p>
        </div>
      </div>

      {/* ======= TABEL KABUPATEN ======= */}
      <div className="kabupaten-card">
        <div className="kab-header">
          <FiMapPin />
          <div>
            <h3>Data Peserta per Kabupaten</h3>
            <p>Sebaran peserta dari seluruh Nusantara</p>
          </div>
        </div>

        <div className="kab-table">
          <div className="kab-row kab-head">
            <span>No</span>
            <span>Kabupaten/Kota</span>
            <span>Total</span>
          </div>

          {stats.kabupaten.map((item, i) => (
            <div className="kab-row" key={i}>
              <span>{i + 1}</span>
              <span>{item.nama}</span>
              <span className="kab-total">{item.total}</span>
            </div>
          ))}
        </div>
      </div>
      <button  type="button"
  className="reg-btn"
  onClick={() =>
    window.open("https://forms.gle/FS9ULg13mzXeKwQN7", "_blank")
  }>
              ✈️ Daftar Sekarang
            </button>

    </section>
  );
}
