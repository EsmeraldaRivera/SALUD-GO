const express = require('express');
const app = express();  
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello, world');
});
app.listen (port, () => {
console.log(`server is running at http://Localhost:${port}`);
});

// creacion del crud

let MEDICOS = [
    {id: 1, titulo: `Medico general`},
    {id: 2, titulo: `Medico optometra`},
    {id: 3, titulo: `Medico otorriinolaringolo`},
];

//crear rutas

//GET- LISTAR LOS MEDICOS
app.get(`/Api/Medicos/`,(req, res) => {
  const {id} = req.params;
  const {Medico} = medico.find(1 => 1.id === parseInt(req.params.id));
  if (!Medico) {
    return res.status(404).json({ message: `medico no encontrado` });
  }
  res.json(Medico);
});
//post- crear una nueva especialidad



