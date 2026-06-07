import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Saludgo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (email === "admin@salud.com" && password === "123456") {
      navigate("/menu"); // 👈 IMPORTANTE
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />

      <h2 style={styles.title}>Iniciar Sesión</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          Entrar
        </button>

        <p onClick={() => navigate("/recuperar")} style={styles.link}>
          ¿Olvidaste tu contraseña?
        </p>

        <p onClick={() => navigate("/registro")} style={styles.link}>
          ¿No tienes cuenta? Regístrate
        </p>
      </form>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    width: "55%",
    maxWidth: "680px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "20px",
    background: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    textAlign: "center" as const,
  },
  logo: {
    width: "200px",
    marginBottom: "20px",
  },
  title: {
    color: "#0a3d62",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    background: "#00c6ff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  link: {
    marginTop: "10px",
    cursor: "pointer",
    color: "#0a3d62",
  },
};