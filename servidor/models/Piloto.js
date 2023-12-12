const mongoose = require('mongoose');

const PilotoSchema = mongoose.Schema({
    
    codigo: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    hora_vuelo: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Piloto', PilotoSchema)