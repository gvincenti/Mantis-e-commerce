# Mantis Back-end

Mantis Back-end es una aplicación web que proporciona una API para gestionar usuarios y productos. Esta aplicación está construida con Node.js, Express, y utiliza Sequelize como ORM para interactuar con una base de datos MySQL.

## Características

- Registro y autenticación de usuarios.
- Gestión de productos.
- Middleware de autenticación JWT.
- Rutas protegidas para operaciones CRUD.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize
- JWT (JSON Web Tokens)
- bcrypt.js (para el hashing de contraseñas)

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/mantis-backend.git
    cd mantis-backend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```plaintext
    DB_HOST=roundhouse.proxy.rlwy.net
    DB_PORT=15764
    DB_USER=root
    DB_PASSWORD=tu_contraseña
    DB_NAME=railway
    JWT_SECRET=tu_secreto_jwt
    PORT=3000
    ```

4. Inicializa la base de datos:

    ```bash
    npx sequelize db:migrate
    ```

5. Inicia la aplicación:

    ```bash
    npm start
    ```

La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Rutas de Autenticación

- `POST /auth/register`: Registra un nuevo usuario.
- `POST /auth/login`: Inicia sesión con un usuario existente.

### Rutas de Usuarios (Protegidas)

- `GET /users`: Obtiene todos los usuarios (requiere autenticación).
- `POST /users`: Crea un nuevo usuario.
- `PUT /users/:id`: Actualiza un usuario existente (requiere autenticación).
- `DELETE /users/:id`: Elimina un usuario existente (requiere autenticación).

### Rutas de Productos

- `GET /products`: Obtiene todos los productos.
- `POST /products`: Crea un nuevo producto.
- `PUT /products/:id`: Actualiza un producto existente.
- `DELETE /products/:id`: Elimina un producto existente.

## Estructura del Proyecto

```plaintext
mantis-backend/
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── productController.js
├── middleware/
│   └── authenticateToken.js
├── models/
│   ├── userModel.js
│   └── productModel.js
├── routes/
│   ├── auth/
│   │   └── authRouter.js
│   ├── user/
│   │   └── userRouter.js
│   └── product/
│       └── productRouter.js
├── config/
│   └── config.json
├── db/
│   └── db.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
