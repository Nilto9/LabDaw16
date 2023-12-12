export class Vuelo {
  _id?: string;
  num_vuelo: string;
  origen: string;
  destino: string;
  fecha: string;
  piloto: string;
  avion: string;
  miembro: String;

  constructor(
    num_vuelo: string,
    origen: string,
    destino: string,
    fecha: string,
    piloto: string,
    avion: string,
    miembro: string
  ) {
    this.num_vuelo = num_vuelo;
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.piloto = piloto;
    this.avion = avion;
    this.miembro = miembro
  }
}
