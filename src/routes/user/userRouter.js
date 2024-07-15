// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');
const authMiddleware = require('../../middleware/authenticateToken');

router.get('/', authMiddleware, userController.getAllUsers); // Ruta protegida
router.post('/', userController.createUser); // Registro de usuario
router.put('/:id', authMiddleware, userController.updateUser); // Ruta protegida
router.delete('/:id', authMiddleware, userController.deleteUser); // Ruta protegida
router.post('/login', userController.login); // Login de usuario

module.exports = router;
