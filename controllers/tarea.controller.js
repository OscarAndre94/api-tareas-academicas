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

//Obtener tarea por ID
exports.obtenerTareaId = async(req, res) => {
    try{
        const {id} = req.params;
        const tarea = await Tarea.findById(id);

        if(!tarea){
            return res.status(404).json({
                mensaje: "Tarea no encontrada"
            });
        }
        return res.status(200).json(tarea);
    }catch(error){
        return res.status(500).json({
            error: error.message,
            mensaje: "Error al buscar la tarea"
        });
    }
};

//Actualizar tarea por ID
exports.actualizarTareaId = async(req, res) => {
    try{
        const {id} = req.params;
        const tareaActualizada = await Tarea.findByIdAndUpdate(id, req.body, { new: true });

        if(!tareaActualizada){
            return res.status(404).json({
                mensaje: "No se pudo actualizar, tarea no encontrada"
            });
        }
        return res.status(200).json(tareaActualizada);
    }catch(error){
        return res.status(500).json({
            error: error.message,
            mensaje: "Error al actualizar la tarea"
        });
    }
};

//Eliminar tarea
exports.eliminarTarea = async(req, res) => {
    try{
        const {id} = req.params;
        const tareaEliminada = await Tarea.findByIdAndDelete(id);

        if(!tareaEliminada){
            return res.status(404).json({
                mensaje: "No se pudo eliminar, tarea no encontrada"
        });
       }
       return res.status(200).json(tareaEliminada);
    }catch(error){
        return res.status(500).json({
            error: error.message,
            mensaje: "Error al eliminar la tarea"
        });        
    }
};

//Subir archivos
exports.subirArchivo = async(req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                mensaje: "Por favor, selecciona un archivo"
            });
        }

        const urlArchivo = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        return res.status(200).json({
            mensaje: "Archivo subido exitosamente",
            archivo: req.file.filename,
            url: urlArchivo
        });
    }catch(error){
        return res.status(500).json({
            error: error.message,
            mensaje: "Error del servidor al intentar subir el archivo"
        });
    }

};