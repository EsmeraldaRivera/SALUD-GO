import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const { usuario } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👤 Mi Perfil Médico</h1>

      <p style={styles.subtitle}>
        Información personal del paciente registrado en el sistema
      </p>

      {/* CARD PRINCIPAL */}
      <div style={styles.card}>
        
        {/* AVATAR */}
        <div style={styles.avatar}>
          👤
        </div>

        {/* INFO */}
        <div style={styles.info}>
          <p style={styles.label}>
            Nombre:
          </p>
          <p style={styles.value}>
            {usuario?.nombre || "Usuario no registrado"}
          </p>

          <p style={styles.label}>
            Correo:
          </p>
          <p style={styles.value}>
            usuario@correo.com
          </p>

          <p style={styles.label}>
            Rol:
          </p>
          <p style={styles.value}>
            Paciente
          </p>

          <p style={styles.label}>
            Estado:
          </p>
          <p style={styles.valueActive}>
            Activo 🟢
          </p>
        </div>
      </div>

      {/* BOTÓN */}
      <button
        onClick={() => navigate("/menu")}
        style={styles.button}
      >
        ⬅ Volver al menú
      </button>
    </div>
  );
}

export default Perfil;

/* 🎨 ESTILOS */
const styles = {
  container: {
    padding: "30px",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    minHeight: "100vh",
  },

  title: {
    color: "#0a3d62",
    fontSize: "32px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "25px",
  },

  card: {
    background: "white",
    width: "350px",
    margin: "0 auto",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "left" as const,
  },

  avatar: {
    fontSize: "60px",
    textAlign: "center" as const,
    marginBottom: "15px",
  },

  info: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },

  label: {
    fontSize: "13px",
    color: "#888",
    margin: "0",
  },

  value: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0a3d62",
    marginBottom: "8px",
  },

  valueActive: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: "8px",
  },

  button: {
    marginTop: "25px",
    padding: "12px 20px",
    background: "#0a3d62",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};