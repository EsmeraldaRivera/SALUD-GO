import { useState } from "react";

function Citas() {
  const [citas, setCitas] = useState<any[]>([]);

  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const horarios = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // ➜ AGREGAR CITA
  const agregarCita = () => {
    if (!motivo || !fecha || !hora) return;

    const nuevaCita = {
      id: Date.now(),
      motivo,
      fecha,
      hora,
    };

    setCitas([...citas, nuevaCita]);

    setMotivo("");
    setFecha("");
    setHora("");
  };

  // ➜ CANCELAR CITA
  const cancelarCita = (id: number) => {
    setCitas(citas.filter((c) => c.id !== id));
  };

  // ➜ REPROGRAMAR CITA (simulación simple)
  const reprogramarCita = (id: number) => {
    const nuevaHora = prompt("Ingresa nueva hora (ej: 10:00 AM)");

    if (!nuevaHora) return;

    setCitas(
      citas.map((c) =>
        c.id === id ? { ...c, hora: nuevaHora } : c
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📅 Mis Citas Médicas</h1>

      {/* SI NO HAY CITAS */}
      {citas.length === 0 ? (
        <div style={styles.empty}>
          <p>No tienes citas programadas.</p>

          <button
            onClick={() => alert("Ve al formulario para agendar")}
            style={styles.newButton}
          >
            ➕ Agendar nueva cita
          </button>
        </div>
      ) : (
        citas.map((cita) => (
          <div key={cita.id} style={styles.card}>
            <p><strong>Especialidad:</strong> {cita.motivo}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>

            <div style={styles.actions}>
              <button
                onClick={() => cancelarCita(cita.id)}
                style={styles.cancel}
              >
                Cancelar
              </button>

              <button
                onClick={() => reprogramarCita(cita.id)}
                style={styles.reprogramar}
              >
                Reprogramar
              </button>
            </div>
          </div>
        ))
      )}

      {/* FORMULARIO */}
      <div style={styles.form}>
        <select
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          style={styles.input}
        >
          <option value="">Especialidad</option>
          <option value="Medicina general">Medicina general</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
          <option value="Dermatología">Dermatología</option>
        </select>

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          style={styles.input}
        />

        <select
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style={styles.input}
        >
          <option value="">Hora</option>
          {horarios.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        {/* GUARDAR */}
        <button onClick={agregarCita} style={styles.save}>
          💾 Guardar cita
        </button>
      </div>
    </div>
  );
}

export default Citas;

const styles = {
  container: {
    padding: "30px",
    textAlign: "center" as const,
  },

  title: {
    color: "#0a3d62",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    width: "300px",
    margin: "20px auto",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "300px",
    margin: "10px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  cancel: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  reprogramar: {
    background: "#ffb400",
    color: "white",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  save: {
    background: "#00c6ff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  empty: {
    marginTop: "20px",
  },

  newButton: {
    marginTop: "10px",
    padding: "10px",
    background: "#0a3d62",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};