const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');

//Enlazmos las rutas
router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTareas);
router.get('/:id', tareaController.obtenerTareaId);
router.put('/:id', tareaController.actualizarTareaId);
router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;