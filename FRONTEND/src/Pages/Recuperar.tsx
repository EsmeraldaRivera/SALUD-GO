import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Recuperar() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMensaje("Por favor ingresa tu correo");
      return;
    }

    // Aquí aceptamos cualquier correo
    setMensaje("En el correo registrado, recibirás instrucciones para recuperar tu cuenta.");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recuperar contraseña</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Enviar instrucciones
        </button>

        {mensaje && <p style={styles.msg}>{mensaje}</p>}
      </form>

      {/* Botón para volver */}
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ⬅ Volver
      </button>
    </div>
  );
}

export default Recuperar;

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
