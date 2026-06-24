require('dotenv').config();

//Importar dependencias
const connection = require("./database/connection");
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

//Convertir los datos del body a objetos
app.use(express.json()); //Con este middleware analizamos las solicitudes que nos lleguen en formato JSON
app.use(express.urlencoded({extended: true}));

//Servidor a escuchar
app.listen(PORT, () => {
    console.log("Servidor corriendo correctamente en el puerto "+PORT);
});




