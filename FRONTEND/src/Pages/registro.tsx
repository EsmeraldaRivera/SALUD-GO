import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegistro = (e: any) => {
    e.preventDefault();

    if (!nombre || !correo || !password) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    setMensaje("Registro exitoso. Ahora puedes iniciar sesión.");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Crear Cuenta</h1>

      <form onSubmit={handleRegistro} style={styles.form}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Registrarme
        </button>

        {mensaje && <p style={styles.msg}>{mensaje}</p>}
      </form>

      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ⬅ Volver
      </button>
    </div>
  );
}

export default Registro;

const styles = {
  container: { width: "80%", margin: "40px auto", textAlign: "center" },
  title: { fontSize: "28px", color: "#0A3D62", marginBottom: "20px" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    margin: "0 auto",
  },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #ccc" },
  button: {
    padding: "12px",
    background: "#0A3D62",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  msg: { marginTop: "10px", color: "#0A3D62" },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#ccc",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
