const mongoose = require('mongoose');

const MiembroSchema = mongoose.Schema({
    
    codigo: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Miembro', MiembroSchema)