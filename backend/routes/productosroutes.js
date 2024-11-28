const express = require("express");
const router = express.Router();
const productoscontroller = require("../controllers/ProductosController.js");

router.get("/",productoscontroller.consultar);
/*
router.post("/",cursoscontroller.ingresar);
router.post("/registraEstudiante",cursoscontroller.asociarEstudiante);

router.route("/:id")
.get(cursoscontroller.consultarDetalle)
.put(cursoscontroller.actualizar)
.delete(cursoscontroller.borrar);
*/

module.exports = router;
