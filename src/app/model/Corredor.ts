import { Ruta } from "./Ruta";

export class Corredor {
    idCorredor!:string;
    nombre!:string
    estado!:boolean
    rutas?:Ruta[]
}