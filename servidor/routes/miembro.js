//Rutas miembro
const express = require('express');
const router = express.Router();
const miembroController = require('../controllers/miembroController');

//api/pilotos
router.post('/', miembroController.crearMiembro);
router.get('/', miembroController.obtenerMiembros);
router.put('/:id', miembroController.actualizarMiembro);
router.get('/:id', miembroController.verMiembro);
router.delete('/:id', miembroController.eliminarMiembro);

module.exports = router;