import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Agenda() {
  const { citas } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>

      {/* 🔙 BOTÓN REGRESAR AL MENÚ */}
      <button
        onClick={() => navigate("/menu")}
        style={{
          marginBottom: "20px",
          padding: "10px",
          background: "#0a3d62",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⬅ Regresar al menú
      </button>

      <h1>🗓 Agenda Médica</h1>

      {/* 📭 SI NO HAY CITAS */}
      {citas.length === 0 ? (
        <p style={{ marginTop: "20px" }}>
          No tienes citas programadas.
        </p>
      ) : (
        citas.map((cita: any) => (
          <div
            key={cita.id}
            style={{
              background: "white",
              padding: "15px",
              margin: "10px auto",
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <p>
              <strong>Especialidad:</strong> {cita.motivo}
            </p>
            <p>
              <strong>Fecha:</strong> {cita.fecha}
            </p>
            <p>
              <strong>Hora:</strong> {cita.hora}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Agenda;