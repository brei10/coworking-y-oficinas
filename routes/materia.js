const { Router } = require('express');
const { check } = require('express-validator');
const { } = require('../controllers/coworking');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();


router.get('/obtener', coworkingGet);


router.post('/crear', [
    // CHECK CON EXPRESS VALIDATOR
    check("telefono", "el telefono debe ser un numero").not().isEmpty(),
    check("correo", "debe ser un correo valido").isEmail(),
    validarCampos,
],coworkingPost );


router.get('/obtener/:id', [
    check("id", "no es un id de mongo valido").isMongoId(),
    validarCampos
], );


router.put("/actualizar/:id", [
    check("id", "no es un id de mongo valido").isMongoId(),
    validarCampos
], coworkingPut)


router.delete("/borrar/:id", )



module.exports = router; 