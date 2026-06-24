const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');

//Enlazmos las rutas
router.post('/', tareaController.crearTarea);

module.exports = router;