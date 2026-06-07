  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();

      // Validación básica
      if (email === "" || password === "") {
        setError("Todos los campos son obligatorios");
        return;
      }

      // Login de prueba (luego lo conectamos al backend)
      if (email === "admin@salud.com" && password === "123456") {
        navigate("/home");
      } else {
        setError("Credenciales incorrectas");
      }
    };

    return (
      <div style={styles.container}>

      <img 
      src={logo} 
      alt="Logo SaludGO" 
      style={{ 
      width: "250px",
      margin: "0 auto 20px",
      display: "block"
      }} 
      />

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
          <p 
    style={{ 
      marginTop: "15px", 
      textAlign: "center", 
      color: "#0A3D62", 
      cursor: "pointer", 
      fontWeight: "500" 
    }}
    onClick={() => navigate("/recuperar")}
  >
    ¿Olvidaste tu contraseña?
  </p>
  <p 
    style={{ 
      marginTop: "10px", 
      textAlign: "center", 
      color: "#0A3D62", 
      cursor: "pointer", 
      fontWeight: "500" 
    }}
    onClick={() => navigate("/registro")}
  >
    ¿No tienes cuenta? Regístrate aquí
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
      borderRadius: "56px",
      background: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      backdropFilter: "blur(10px)",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#0a3d62",
      fontWeight: "bold",
      fontSize: "26px",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "15px",
    },
    input: {
      padding: "14px",
      borderRadius: "25px",
      border: "1px solid #d0d0d0",
      fontSize: "16px",
      transition: "0.3s",
      outline: "none",
    },
    button: {
      padding: "14px",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "17px",
      fontWeight: "bold",
      transition: "0.3s",
    },
    error: {
      color: "red",
      textAlign: "center" as const,
    },
  };
  import logo from "../assets/Saludgo.png";

