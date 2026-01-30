import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./assets/components/ScrollToTop";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutEvent from "./assets/components/AboutEvent";
import Sponsorship from "./assets/components/Sponsorship";
import StatistikSection from "./assets/components/Statistik";
import FolderSection from "./assets/Pages/FolderSection";
import ContactSection from "./assets/components/ContactSection";
import TermsSection from "./assets/Pages/TermSection";
import SponsorSection from "./assets/Pages/SponsorSection";
import Location from "./assets/components/Location";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      {/* AUTO SCROLL KE ATAS SETIAP PINDAH HALAMAN */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutEvent />
              <Sponsorship />
              <StatistikSection />
              <ContactSection />
              <Location />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/folder" element={<FolderSection />} />
        <Route path="/layanan" element={<TermsSection />} />
        <Route path="/sponsor" element={<SponsorSection />} />
      </Routes>

      <Footer />

      </>
    
  );
}

export default App;
