// routes/authRouter.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Esta es una función simulada para verificar el usuario. Reemplázala con tu lógica real.
const authenticateUser = (username, password) => {
    // Verifica el usuario con tu base de datos
    if (username === 'test' && password === 'password') {
        return { id: 1, username: 'test' };
    }
    return null;
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = authenticateUser(username, password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ accessToken });
});

module.exports = router;
