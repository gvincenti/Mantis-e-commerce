require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const sequelize = require('./src/db/db'); // Ajusta la ruta según tu estructura
const path = require('path');
const cors = require('cors');
const app = express();

// Configurar Sequelize con las variables de entorno
const port = process.env.PORT || 3000;

// Importar rutas
const authenticateToken = require('./src/middleware/authenticateToken'); // Ajusta la ruta según tu estructura
const authRouter = require('./src/routes/auth/authRouter'); // Ajusta la ruta según tu estructura
const userRoutes = require('./src/routes/user/userRouter'); // Ajusta la ruta según tu estructura
const productRoutes = require('./src/routes/product/productRouter'); // Ajusta la ruta según tu estructura

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Usar rutas
app.use('/auth', authRouter);
app.use('/users', userRoutes); // Quitar el middleware aquí para permitir registro de usuarios sin autenticación
app.use('/products', productRoutes);

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Sincronizar el modelo User y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
