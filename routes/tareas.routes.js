const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const upload = require('../midlewares/upload.midleware');

//Enlazmos las rutas
router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTareas);
router.get('/:id', tareaController.obtenerTareaId);
router.put('/:id', tareaController.actualizarTareaId);
router.delete('/:id', tareaController.eliminarTarea);
router.post('/upload-file', upload.single('archivo'), tareaController.subirArchivo);

module.exports = router;