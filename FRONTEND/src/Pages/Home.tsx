import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [mensaje, setMensaje] = useState("Bienvenida a SaludGO");
  const navigate = useNavigate();

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏥 SaludGO</h1>

        <p style={styles.subtitle}>{mensaje}</p>

        <button
          style={styles.primaryButton}
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </button>

        <button
          style={styles.secondaryButton}
          onClick={() => setMensaje("Gracias por confiar en SaludGO 💙")}
        >
          Cambiar mensaje
        </button>
      </div>
    </div>
  );
}

export default Home;

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
  },
};
