const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

//Definir filtros para archivos
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|docx/;
    const allowedMimes = /jpeg|jpg|png|pdf|officedocument|msword/;
    
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if(extName && mimeType){
        return cb(null, true);
    }else{
        cb(new Error('Error: Solo es permitido archivos PDF, DOCX o imágenes'));
    }
};

//Configuración de multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024}
});

module.exports = upload;