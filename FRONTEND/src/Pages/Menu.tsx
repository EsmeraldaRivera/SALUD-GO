import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>🏥 Menú Principal</h1>

      <button onClick={() => navigate("/perfil")} style={styles.button}>
        👤 Perfil
      </button>

      <button onClick={() => navigate("/citas")} style={styles.button}>
        📅 Citas
      </button>

      <button onClick={() => navigate("/medicos")} style={styles.button}>
        👨‍⚕️ Médicos
      </button>

      <button onClick={() => navigate("/agenda")} style={styles.button}>
        🗓 Agenda
      </button>

      <button onClick={() => navigate("/")} style={styles.logout}>
        🚪 Cerrar sesión
      </button>
    </div>
  );
}

export default Menu;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },

  button: {
    padding: "12px",
    width: "250px",
    borderRadius: "10px",
    border: "none",
    background: "white",
    cursor: "pointer",
    fontSize: "16px",
    color: "#0a3d62", 
    fontWeight: "bold",
  },

  logout: {
    padding: "12px",
    width: "250px",
    borderRadius: "10px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
  },
};
