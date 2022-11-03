const mongoose = require('mongoose');
//const { identity } = require('underscore');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    id: identity,
    marca: String,
    nombre: String,
    codebar: String
})
const producto = mongoose.model('producto',productoSchema)

module.exports = producto;

//modelo de producto segun db