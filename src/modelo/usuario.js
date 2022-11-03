const mongoose = require('mongoose');
//const { identity } = require('underscore');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id: identity,
    nombre: String,
    apellido: String,
    apellido: String,
    dni: String,
    usuario: String,
    contrasena: String,

})
const usuario = mongoose.model('usuario',usuarioSchema)

module.exports = usuario;

//modelo de usuario segun db