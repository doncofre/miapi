const mongoose = require('mongoose');
const { identity } = require('underscore');
//const { identity } = require('underscore');
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
    id: identity,
    iduser: identity,
    productos: Array
})
const carrito = mongoose.model('carrito',carritoSchema);

module.exports = carrito;

//modelo de carrito segun db