const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');

//Enlazmos las rutas
router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTareas);

module.exports = router;