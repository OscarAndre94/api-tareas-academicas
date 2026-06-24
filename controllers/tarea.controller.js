const Tarea = require("../models/tarea.model");

//Crear y exportar la funcionalidad de creación de tareas
exports.crearTarea = async(req, res) => {
    try{
        const { titulo, descripcion, estado, prioridad, fechaLimite, fechaRegistro } = req.body;

        //Instanciamos el modelo de mongoose
        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            estado,
            prioridad,
            fechaLimite,
            fechaRegistro
        });

        //Guardamos en MongoDB
        const tareaGuardada = await nuevaTarea.save();
        
        return res.status(201).json(tareaGuardada);
    }catch(error){
        return res.status(400).json({
            error: error.message,
            mensaje: "Error al guardar la tarea"
        });
        
    }
};

exports.obtenerTareas = async(req, res) => {
    try{
        const tareas = await Tarea.find();

        return res.status(200).json(tareas);
    }catch(error){
        return res.status(500).json({
            error: error.message,
            mensaje: "Error al obtener las tareas"
        });
    }
};