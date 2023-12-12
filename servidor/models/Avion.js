const mongoose = require("mongoose");

const AvionSchema = mongoose.Schema({
  codigo: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  base: {
    type: String,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Avion", AvionSchema);
