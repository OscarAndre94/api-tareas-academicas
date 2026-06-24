const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio.'],
    trim: true // Limpia espacios vacíos accidentales al inicio y al final
  },
  descripcion:{
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  estado: {
    type: String,
    enum: {
        values: ['Pendiente', 'En Progreso', 'Completado'],
        message: '{VALUE} No es un estado válido'
    }
  },
  prioridad: {
    type: String,
    enum: {
        values: ['Baja', 'Media', 'Alta'],
        message: '{VALUE} No es una prioridad válida'
    },
    default: 'Media'
  },
  fechaLimite: {
    type: Date,
    required: [true, 'La fecha limite es obligatoria para la tarea acádemica'] 
  },
  archivo: {
    type: String,
    default: null
  },
  fechaRegistro:{
    type: Date,
    default: Date.now
  }
});

//EXportamos el modulo
module.exports = mongoose.model("Tarea", TareaSchema);