import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [mensaje, setMensaje] = useState("👋Bienvenidos✨, ¡tu salud en un clic!");
  const navigate = useNavigate();

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏥 SaludGO</h1>

        <p style={styles.subtitle}>{mensaje}</p>

        {/* BOTÓN LOGIN */}
        <button
          style={styles.primaryButton}
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </button>

        {/* TEXTO FIJO */}
        <p style={styles.footerText}>
          Gracias por confiar en SaludGO 💙
        </p>

      </div>
    </div>
  );
}

export default Home;

/* 🎨 ESTILOS */
const styles = {
  background: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center" as const,
    width: "320px",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#0a3d62",
  },

  subtitle: {
    marginBottom: "20px",
    color: "#555",
  },

  primaryButton: {
    width: "100%",
    padding: "12px",
    background: "#0a3d62",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "16px",
  },

  secondaryButton: {
    width: "100%",
    padding: "12px",
    background: "#e0f7ff",
    color: "#0a3d62",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  },

  footerText: {
    marginTop: "15px",
    color: "#0a3d62",
    fontSize: "14px",
    fontWeight: "500",
  },
};