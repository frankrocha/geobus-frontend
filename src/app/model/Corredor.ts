import { Ruta } from "./Ruta";

export class Corredor {
    idCorredor!:string;
    nombre!:string
    estado!:boolean
    color!:string
    rutas?:Ruta[]
}