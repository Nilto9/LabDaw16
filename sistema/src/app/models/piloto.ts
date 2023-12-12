export class Piloto {

    _id?: string;
    codigo: string;
    nombre: string;
    hora_vuelo: string;
   

    constructor(codigo:string, nombre:string, hora_vuelo: string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.hora_vuelo = hora_vuelo;
    }

}