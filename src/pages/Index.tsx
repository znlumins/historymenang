import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { CSSProperties } from "react";

// URL untuk siluet Borobudur
const borobudurSilhouetteUrl = "https://www.svgrepo.com/show/24443/borobudur-temple.svg";

// URL untuk ikon media sosial (warna disesuaikan agar cocok dengan tema)
const twitterIconUrl = "https://api.iconify.design/mdi/twitter.svg?color=%239ca3af&width=24";
const facebookIconUrl = "https://api.iconify.design/mdi/facebook.svg?color=%239ca3af&width=24";
const instagramIconUrl = "https://api.iconify.design/mdi/instagram.svg?color=%239ca3af&width=24";

const Index = () => {
  const { isAuthenticated } = useAuth();

  const styles: { [key: string]: CSSProperties } = {
    // SECTION: MAIN CONTAINER & HERO
    container: {
      backgroundColor: "#f8fafc",
    },
    heroSection: {
      minHeight: "calc(100vh - 64px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      backgroundColor: "#ef4444", // Fallback color
      background: "linear-gradient(120deg, #ef4444 40%, #f8fafc 80%)",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url(${borobudurSilhouetteUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom -100px right -150px", // Posisi di kanan bawah
      backgroundSize: "600px", // Ukuran siluet
    },
    heroContainer: {
      maxWidth: "800px",
      textAlign: "center" as const,
      position: "relative",
      zIndex: 2,
    },
    heroIllustration: {
      fontSize: "6rem",
      marginBottom: "24px",
      animation: "float 4s ease-in-out infinite",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: 800,
      color: "#1e293b", // Warna teks gelap agar terbaca
      marginBottom: "16px",
      textShadow: "0px 2px 15px rgba(255, 255, 255, 0.5)", // Bayangan putih agar menonjol
    },
    heroSubtitle: {
      fontSize: "1.25rem",
      color: "#475569", // Abu-abu gelap agar nyaman dibaca
      marginBottom: "40px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    // SECTION: BUTTONS (Warna disesuaikan agar cocok)
    buttonContainer: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap" as const,
    },
    primaryButton: {
      display: "inline-block",
      backgroundColor: "#d97706", // Warna kuning kunyit/emas
      color: "#ffffff",
      padding: "16px 48px",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "700",
      textDecoration: "none",
      borderBottom: "4px solid #9a3412", // Coklat tua untuk efek 3D
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      transition: "transform 0.1s ease-out, background-color 0.2s",
    },
    secondaryButton: {
      display: "inline-block",
      backgroundColor: "#ffffff",
      color: "#be123c", // Warna merah yang kuat
      border: "2px solid #fecaca",
      padding: "14px 48px",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "700",
      textDecoration: "none",
      transition: "transform 0.1s ease-out, background-color 0.2s",
    },
    // SECTION: FOOTER (GAYA BARU, KONTEN SESUAI HISTORIC BLOCK)
    footer: {
      backgroundColor: "#1f2937", // Abu-abu gelap yang netral dan elegan
      color: "#9ca3af",
      padding: "40px 24px",
    },
    footerContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "32px",
    },
    footerBrand: {
      flex: 1,
      minWidth: "250px",
    },
    footerBrandTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#ffffff",
      marginBottom: "8px",
    },
    footerCopyright: {
      fontSize: "0.875rem",
      marginTop: "16px",
    },
    footerLinksContainer: {
      display: "flex",
      gap: "48px",
      flexWrap: "wrap",
    },
    footerLinkGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    footerLinkTitle: {
      fontWeight: 600,
      color: "#ffffff",
      fontSize: "1rem",
    },
    footerLink: {
      color: "#9ca3af",
      textDecoration: "none",
      transition: "color 0.2s",
    },
    socialIcons: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
    },
  };

  const keyframes = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `;

  // --- Penyesuaian untuk Mobile ---
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) {
    styles.heroTitle.fontSize = "2.5rem";
    styles.heroIllustration.fontSize = "5rem";
    styles.heroSection.backgroundPosition = "bottom -50px right -100px";
    styles.heroSection.backgroundSize = "300px";
    styles.footerContainer.flexDirection = "column"; // Tumpuk elemen footer di mobile
    styles.footerContainer.alignItems = "flex-start"; // Rata kiri di mobile
  }

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      <Navbar />

      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroIllustration}>🦅</div>
          <h1 style={styles.heroTitle}>Jadi Saksi Sejarah Bangsa</h1>
          <p style={styles.heroSubtitle}>
            Dari Sabang sampai Merauke, dari era kerajaan hingga reformasi. Seberapa jauh kamu mengenal Indonesia?
          </p>
          <div style={styles.buttonContainer}>
            {isAuthenticated ? (
              <Link to="/kuis" style={styles.primaryButton}
                onMouseDown={(e) => e.currentTarget.style.transform = "translateY(2px)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
              >
                Mulai Petualangan
              </Link>
            ) : (
              <>
                <Link to="/register" style={styles.primaryButton}
                  onMouseDown={(e) => e.currentTarget.style.transform = "translateY(2px)"}
                  onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
                >
                  Daftar Sekarang
                </Link>
                <Link to="/login" style={styles.secondaryButton}
                  onMouseDown={(e) => e.currentTarget.style.transform = "translateY(2px)"}
                  onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
                >
                  Masuk
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* --- FOOTER BARU YANG SESUAI TEMA --- */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerBrand}>
            <p style={styles.footerBrandTitle}>Historic Block</p>
            <p>Belajar sejarah dengan cara yang menyenangkan.</p>
            <div style={styles.footerCopyright}>
              © {new Date().getFullYear()} Historic Block. All Rights Reserved.
            </div>
          </div>

          <div style={styles.footerLinksContainer}>
            <div style={styles.footerLinkGroup}>
              <p style={styles.footerLinkTitle}>Navigasi</p>
              <Link to="/" style={styles.footerLink}>Beranda</Link>
              <Link to="/kuis" style={styles.footerLink}>Mulai Kuis</Link>
              <Link to="/tentang" style={styles.footerLink}>Tentang Kami</Link>
            </div>
            <div style={styles.footerLinkGroup}>
              <p style={styles.footerLinkTitle}>Lainnya</p>
              <Link to="/kebijakan-privasi" style={styles.footerLink}>Kebijakan Privasi</Link>
              <Link to="/syarat-ketentuan" style={styles.footerLink}>Syarat & Ketentuan</Link>
              <Link to="/kontak" style={styles.footerLink}>Hubungi Kami</Link>
            </div>
          </div>

          <div style={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitterIconUrl} alt="Twitter"/></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebookIconUrl} alt="Facebook"/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagramIconUrl} alt="Instagram"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;