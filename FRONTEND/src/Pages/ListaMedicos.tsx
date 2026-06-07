import { useNavigate } from "react-router-dom";

function ListaMedicos() {
  const navigate = useNavigate();

  const medicos = [
    // 🧑‍⚕️ MEDICINA GENERAL
    {
      nombre: "Dra. Rosa Flores",
      especialidad: "Medicina General",
      experiencia: "9 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },
    {
      nombre: "Dr. Héctor Díaz",
      especialidad: "Medicina General",
      experiencia: "15 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },

    // 🫀 CARDIOLOGÍA
    {
      nombre: "Dr. Juan Pérez",
      especialidad: "Cardiología",
      experiencia: "10 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },
    {
      nombre: "Dra. Silvia Rojas",
      especialidad: "Cardiología",
      experiencia: "12 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },

    // 👶 PEDIATRÍA
    {
      nombre: "Dra. María Gómez",
      especialidad: "Pediatría",
      experiencia: "8 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },
    {
      nombre: "Dr. Andrés Molina",
      especialidad: "Pediatría",
      experiencia: "11 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },

    // 🧴 DERMATOLOGÍA
    {
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Dermatología",
      experiencia: "12 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },
    {
      nombre: "Dra. Elena Vargas",
      especialidad: "Dermatología",
      experiencia: "9 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },

    // 🦴 TRAUMATOLOGÍA
    {
      nombre: "Dr. Andrés Silva",
      especialidad: "Traumatología",
      experiencia: "14 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },
    {
      nombre: "Dr. Javier Ortega",
      especialidad: "Traumatología",
      experiencia: "10 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },

    // 🧠 NEUROLOGÍA
    {
      nombre: "Dr. Luis Martínez",
      especialidad: "Neurología",
      experiencia: "15 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },
    {
      nombre: "Dra. Paula Herrera",
      especialidad: "Neurología",
      experiencia: "9 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },

    // 🧬 ENDOCRINOLOGÍA
    {
      nombre: "Dra. Sofía Herrera",
      especialidad: "Endocrinología",
      experiencia: "11 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },
    {
      nombre: "Dr. Ricardo Castro",
      especialidad: "Endocrinología",
      experiencia: "13 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },

    // 👁 OFTALMOLOGÍA
    {
      nombre: "Dra. Valeria Mendoza",
      especialidad: "Oftalmología",
      experiencia: "10 años de experiencia",
      horario: "10:00 AM - 04:00 PM",
    },
    {
      nombre: "Dr. Fernando Castillo",
      especialidad: "Oftalmología",
      experiencia: "14 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },

    // 🧠 PSIQUIATRÍA
    {
      nombre: "Dr. Ricardo Castro",
      especialidad: "Psiquiatría",
      experiencia: "12 años de experiencia",
      horario: "09:00 AM - 03:00 PM",
    },
    {
      nombre: "Dra. Laura Medina",
      especialidad: "Psiquiatría",
      experiencia: "8 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },

    // 🧬 UROLOGÍA
    {
      nombre: "Dr. Javier Torres",
      especialidad: "Urología",
      experiencia: "13 años de experiencia",
      horario: "08:00 AM - 02:00 PM",
    },
    {
      nombre: "Dra. Patricia León",
      especialidad: "Urología",
      experiencia: "9 años de experiencia",
      horario: "02:00 PM - 06:00 PM",
    },

    // 🧬 GINECOLOGÍA
    {
      nombre: "Dra. Ana López",
      especialidad: "Ginecología",
      experiencia: "9 años de experiencia",
      horario: "01:00 PM - 06:00 PM",
    },
    {
      nombre: "Dra. Carmen Ruiz",
      especialidad: "Ginecología",
      experiencia: "12 años de experiencia",
      horario: "06:00 AM - 12:00 PM",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍⚕️ Médicos Disponibles</h1>

      {/* 🔥 TEXTO ACTUALIZADO */}
      <p style={styles.subtitle}>
        Encuentra el horario de tu médico ideal y agenda tu cita de forma rápida y sencilla
      </p>

      <div style={styles.grid}>
        {medicos.map((medico, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.name}>{medico.nombre}</h2>

            <p style={styles.specialty}>🩺 {medico.especialidad}</p>

            <p style={styles.text}>📌 {medico.experiencia}</p>

            <p style={styles.text}>🕒 {medico.horario}</p>

            <button
              onClick={() => navigate("/citas")}
              style={styles.button}
            >
              Agendar cita
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/menu")}
        style={styles.backButton}
      >
        ⬅ Volver al menú
      </button>
    </div>
  );
}

export default ListaMedicos;

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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  },

  name: {
    fontSize: "18px",
    color: "#0a3d62",
    marginBottom: "10px",
  },

  specialty: {
    fontWeight: "bold",
    color: "#00a8ff",
  },

  text: {
    fontSize: "14px",
    color: "#444",
  },

  button: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    background: "#00c6ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  backButton: {
    marginTop: "30px",
    padding: "10px 20px",
    background: "#0a3d62",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};