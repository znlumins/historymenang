import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { CSSProperties } from "react";

// URL untuk siluet Borobudur. Anda bisa ganti dengan file SVG lokal Anda untuk performa lebih baik.
const borobudurSilhouetteUrl = "https://www.svgrepo.com/show/24443/borobudur-temple.svg";

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
      // PERUBAHAN UTAMA: Latar belakang gradien Merah-Putih yang dinamis
      backgroundColor: "#ef4444", // Fallback color
      background: "linear-gradient(120deg, #ef4444 40%, #f8fafc 80%)", 
      position: "relative",
      overflow: "hidden", 
      // PERUBAHAN UTAMA: Menambahkan siluet candi sebagai background image
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
    // Elemen blob dihilangkan, diganti dengan siluet yang lebih relevan
    heroIllustration: {
      fontSize: "6rem",
      marginBottom: "24px",
      animation: "float 4s ease-in-out infinite",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: 800,
      color: "#1e293b", // Warna teks gelap agar terbaca di latar putih/merah muda
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
    // SECTION: FOOTER
    footer: {
      backgroundColor: "#111827",
      color: "white",
      padding: "32px 16px",
      textAlign: "center" as const,
    },
    footerContainer: {
      maxWidth: "1536px",
      margin: "0 auto",
    },
    footerTitle: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "8px",
    },
    footerSubtitle: {
      color: "#9ca3af",
    },
  };

  const keyframes = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { translateY(0px); }
    }
  `;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) {
    styles.heroTitle.fontSize = "2.5rem";
    styles.heroIllustration.fontSize = "5rem";
    styles.heroSection.backgroundPosition = "bottom -50px right -100px";
    styles.heroSection.backgroundSize = "300px";
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

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p style={styles.footerTitle}>Historic Block</p>
          <p style={styles.footerSubtitle}>
            Belajar sejarah dengan cara yang menyenangkan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;