function Agenda() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agenda Médica</h1>
      <p>Aquí podrás ver tu calendario de citas próximamente.</p>
    </div>
  );
}

export default Agenda;

const styles = {
  container: { width: "80%", margin: "40px auto", textAlign: "center" },
  title: { fontSize: "30px", color: "#0A3D62", marginBottom: "20px" },
};

