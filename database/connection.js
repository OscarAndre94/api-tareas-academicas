const mongoose = require("mongoose");

const connection = async() => {
    try{
        const urlConexion = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/api-tareas-academicas';
     await mongoose.connect(urlConexion);
     console.log("Conexión exitosa a la Base de datos - MongoDB");

    }catch(error){
        console.log("Error al conectar a la BD", error.message);
        
    }
}

module.exports = connection;