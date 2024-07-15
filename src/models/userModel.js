// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('user', { // Cambiado a 'user' en minúsculas
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users', // Asegura que Sequelize use la tabla 'users'
  timestamps: false // Desactiva las marcas de tiempo automáticas
});

module.exports = User;
