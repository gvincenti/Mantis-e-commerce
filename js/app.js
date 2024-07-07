require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const sequelize = require('../db/db'); // Importar la conexión a la base de datos
const path = require('path');
const cors = require('cors');
const app = express();


// Configurar Sequelize con las variables de entorno
const port = process.env.PORT || 3000;

// Importar rutas
const authenticateToken = require('../middleware/authenticateToken');
const authRouter = require('../routes/auth/authRouter');
const userRoutes = require('../routes/user/userRouter');
const productRoutes = require('../routes/product/productRouter');

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
// Usar rutas
app.use('/auth', authRouter);
app.use('/users', userRoutes); // Quitar el middleware aquí para permitir registro de usuarios sin autenticación
app.use('/products', productRoutes);


app.use(express.static(path.join(__dirname, 'public')));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
//console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);

// Sincronizar el modelo User y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
