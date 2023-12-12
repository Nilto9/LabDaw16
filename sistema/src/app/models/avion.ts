export class Avion {

    _id?: string;
    codigo: string;
    tipo: string;
    base: string;
   

    constructor(codigo:string, tipo:string, base: string){
        this.codigo = codigo;
        this.tipo = tipo;
        this.base = base;
    }

}