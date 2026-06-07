const express = require('express');
const app = express();  
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello, bienvenid@');
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
app.get('/Medicos',(req, res) => {
    res.json(MEDICOS);
});

    //POST -CREAR
app.post('/MEDICOS', (req, res) => {
const nuevomedico = {
id: MEDICOS.length + 1,
Especialidades: req.body.Especialidades
};
MEDICOS.push(nuevomedico);
res.status(201).json(nuevomedico);
});

// GET - OBTENER UN MÉDICO POR ID
app.get('/MEDICOS/:id', (req, res) => {
    const medico = MEDICOS.find(m => m.id === parseInt(req.params.id));

    if (!medico) {
        return res.status(404).json({ message: 'Medico no encontrado' });
    }

    res.json(medico);
});

// PUT - ACTUALIZAR
app.put('/api/MEDICOS/:id', (req, res) => {
    const medico = MEDICOS.find(m => m.id === parseInt(req.params.id));

    if (!medico) {
        return res.status(404).json({ message: 'Medico no encontrado' });
    }

    medico.titulo = req.body.titulo || medico.titulo;

    res.json(medico);
});

//DELETE - ELIMINAR
app.delete('/api/MEDICOS/:id', (req, res) => {
    const EspecialidadesIndex = MEDICOS.findIndex(m => m.id === parseInt(req.params.id));
    if (EspecialidadesIndex === -1) {
        return res.status(404).json({ message: `medico no encontrado` });
    }

const EspecialidadesEliminado = MEDICOS.splice(EspecialidadesIndex, 1);
res.json(EspecialidadesEliminado[0]);
});


