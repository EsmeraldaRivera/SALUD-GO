import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Perfil() {
  const { usuario } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mi Perfil</h1>

      <div style={styles.card}>
        <p><strong>Nombre:</strong> {usuario?.nombre}</p>
        <p><strong>Correo:</strong> usuario@correo.com</p>
        <p><strong>Rol:</strong> Paciente</p>
      </div>
    </div>
  );
}

export default Perfil;

const styles = {
  container: { width: "80%", margin: "40px auto", textAlign: "center" },
  title: { fontSize: "30px", color: "#0A3D62", marginBottom: "20px" },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    width: "300px",
    margin: "0 auto",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
};
