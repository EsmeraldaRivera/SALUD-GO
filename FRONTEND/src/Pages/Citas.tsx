import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Citas() {
  const navigate = useNavigate();

  // 🔥 CONTEXTO GLOBAL (IMPORTANTE)
  const { citas, setCitas } = useContext(AppContext);

  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // 🕒 Horarios con disponibilidad
  const horarios = [
    { hora: "08:00 AM", disponible: true },
    { hora: "09:00 AM", disponible: false },
    { hora: "10:00 AM", disponible: true },
    { hora: "11:00 AM", disponible: false },
    { hora: "12:00 PM", disponible: true },
    { hora: "02:00 PM", disponible: true },
    { hora: "03:00 PM", disponible: false },
    { hora: "04:00 PM", disponible: true },
    { hora: "05:00 PM", disponible: false },
  ];

  // 📅 FECHA ALEATORIA
  const generarFechaAleatoria = () => {
    const dias = [3, 5, 7, 10, 12, 15, 18];
    const random = dias[Math.floor(Math.random() * dias.length)];

    const fechaBase = new Date();
    fechaBase.setDate(fechaBase.getDate() + random);

    return fechaBase.toISOString().split("T")[0];
  };

  // 💾 GUARDAR CITA
  const agregarCita = () => {
    if (!motivo || !fecha || !hora) return;

    const horario = horarios.find((h) => h.hora === hora);

    if (!horario?.disponible) {
      alert("❌ Esta hora no está disponible");
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      motivo,
      fecha: generarFechaAleatoria(),
      hora,
    };

    setCitas([...citas, nuevaCita]);

    alert("✅ Tu cita ha sido asignada exitosamente");

    setMotivo("");
    setFecha("");
    setHora("");
  };

  // ❌ CANCELAR
  const cancelarCita = (id: number) => {
    setCitas(citas.filter((c: any) => c.id !== id));
  };

  // 🔄 REPROGRAMAR
  const reprogramarCita = () => {
    alert("📌 Ve al formulario para reagendar tu cita");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📅 Mis Citas Médicas</h1>

      {/* 🔙 REGRESAR */}
      <button onClick={() => navigate("/menu")} style={styles.backButton}>
        ⬅ Regresar al menú
      </button>

      {/* 📭 MENSAJE SI NO HAY CITAS */}
      {citas.length === 0 ? (
        <p style={{ marginTop: "20px" }}>
          No tienes citas programadas.
        </p>
      ) : (
        citas.map((cita: any) => (
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
                onClick={reprogramarCita}
                style={styles.reprogramar}
              >
                Reprogramar
              </button>
            </div>
          </div>
        ))
      )}

      {/* 📝 FORMULARIO */}
      <div style={styles.form}>
        <select
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          style={styles.input}
        >
          <option value="">Especialidad</option>

          {/* 🏥 MÁS ESPECIALIDADES */}
          <option value="Medicina general">Medicina general</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
          <option value="Dermatología">Dermatología</option>
          <option value="Ginecología">Ginecología</option>
          <option value="Neurología">Neurología</option>
          <option value="Odontología">Odontología</option>
          <option value="Oftalmología">Oftalmología</option>
          <option value="Psicología">Psicología</option>
          <option value="Traumatología">Traumatología</option>
          <option value="Urología">Urología</option>
          <option value="Endocrinología">Endocrinología</option>
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
            <option
              key={h.hora}
              value={h.hora}
              disabled={!h.disponible}
            >
              {h.hora} {h.disponible ? "" : "❌ No disponible"}
            </option>
          ))}
        </select>

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
  },

  backButton: {
    margin: "10px",
    padding: "10px",
    background: "#0a3d62",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
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
};