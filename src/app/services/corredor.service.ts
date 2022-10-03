import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corredor } from '../model/Corredor';
import { environment } from 'src/environments/environment';
import { Constantes } from '../utils/constantes';
import { RutaLongitud } from '../model/RutaLongitud';
import { Subject, Observable } from 'rxjs';
import { Ruta } from '../model/Ruta';

@Injectable({
  providedIn: 'root'
})
export class CorredorService {
  // http://localhost:8080/api/v1/geobus/corredor

  public rutas !: RutaLongitud[]
  public nombreRuta!:any
  private listaRutas = new Subject<RutaLongitud[]>()
  public listaRutas$ = this.listaRutas.asObservable()

  constructor(private http: HttpClient) {

  }

  getCorredores(): Observable<Corredor[]>{
    const ruta = environment.urlBase + Constantes.LISTA_CORREDORES_RUTAS
    return this.http.get<Corredor[]>(ruta) 
  }


  obtenerRuta(nroRuta:number,nombre:string){
    this.httpObtenerRuta(nroRuta).subscribe((res:RutaLongitud[])=>{
      console.log("las rutas",res)
      this.rutas=res
      this.nombreRuta=nombre
      this.listaRutas.next(res)
      
    })
  }


  private httpObtenerRuta(nroRuta:number):Observable<RutaLongitud[]>{
    const ruta = environment.urlBase + Constantes.LISTA_RUTAS_LONGITUDES
    return this.http.get<RutaLongitud[]>(ruta+nroRuta)
  }

  
}
