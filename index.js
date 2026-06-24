require('dotenv').config();

const connection = require("./database/connection");
const Tarea = require("./models/tarea.model");
const tareasRoutes = require("./routes/tareas.routes");

//Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

//Conexión a la base de datos
connection();

//Crear el servidor
const app = express();
const PORT = process.env.PORT || 4000; // Si no encuentra el .env usará por defecto el puerto 4000

//Configuración del cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Vincular las rutas modularizadas
app.use('/api/tareas', tareasRoutes);

//Convertir los datos del body a objetos
app.use(express.json()); //Con este middleware analizamos las solicitudes que nos lleguen en formato JSON
app.use(express.urlencoded({extended: true}));

//Servidor a escuchar
app.listen(PORT, () => {
    console.log("Servidor corriendo correctamente en el puerto "+PORT);
});




/*Crear endpoints de prueba
app.post('/api/tareas', async (req, res) => {
    try{
        const { titulo, descripcion, estado, prioridad, fechaLimite, fechaRegistro } = req.body;

        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            estado,
            prioridad,
            fechaLimite,
            fechaRegistro
        });
        const tareaGuardada = await nuevaTarea.save();

        return res.status(201).json(tareaGuardada);
    }catch(error){
        return res.status(400).json({ 
      mensaje: "Error al guardar el documento", 
      error: error.message
    });
   }
});*/


