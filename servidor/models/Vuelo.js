const { Schema, model } = require("mongoose");

const VueloSchema = new Schema({
  num_vuelo: {
    type: String,
    require: true,
  },
  origen: {
    type: String,
    require: true,
  },
  destino: {
    type: String,
    require: true,
  },
  hora: {
    type: String,
    require: true,
  },
  fecha: {
    type: String,
    require: true,
  },
  piloto: { type: Schema.Types.ObjectId, ref: "Piloto", required: true },
  avion: {
    type: Schema.Types.ObjectId,
    ref: "Avion",
    required: true,
  },
  miembro: { type: Schema.Types.ObjectId, ref: "Miembro", required: true },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});
const VueloModel = model("Vuelo", VueloSchema);
module.exports = VueloModel;
