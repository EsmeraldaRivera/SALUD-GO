import { useParams, useNavigate } from "react-router-dom";

function MedicosPorEspecialidad() {
  const { id } = useParams();
  const navigate = useNavigate();

  const medicos = {
    1: [
      { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Medicina General" },
      { id: 2, nombre: "Dra. Laura Gómez", especialidad: "Medicina General" },
    ],
    2: [
      { id: 3, nombre: "Dra. Ana Torres", especialidad: "Pediatría" },
    ],
    3: [
      { id: 4, nombre: "Dr. Carlos Ruiz", especialidad: "Dermatología" },
    ],
    4: [
      { id: 5, nombre: "Dra. Sofía Martínez", especialidad: "Ginecología" },
    ],
    5: [
      { id: 6, nombre: "Dr. Andrés López", especialidad: "Cardiología" },
    ],
  };

  const lista = medicos[id as keyof typeof medicos] || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Médicos disponibles</h1>

      <div style={styles.grid}>
        {lista.map((m) => (
          <div
            key={m.id}
            style={styles.card}
            onClick={() => navigate(`/medicos/${m.id}`)}
          >
            <h3>{m.nombre}</h3>
            <p>{m.especialidad}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ⬅ Volver
      </button>
    </div>
  );
}

export default MedicosPorEspecialidad;

const styles = {
  container: { width: "80%", margin: "40px auto", textAlign: "center" },
  title: { fontSize: "28px", color: "#0A3D62", marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    cursor: "pointer",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#ccc",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

