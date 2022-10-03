import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarifa } from '../model/Tarifa';
import { Constantes } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private tarifas !: Tarifa[]
  private listaTarifas = new  BehaviorSubject<Tarifa[]>(this.tarifas)
  public tarifas$ = this.listaTarifas.asObservable()
  
  constructor(private http: HttpClient) { 

  }

  // getTarifas(idCorredor: String): Observable<Tarifa[]>{
  //     const ruta = environment.urlBase + Constantes.LISTA_TARIFAS_POR_CORREDOR
  //     return this.http.get<Tarifa[]>(ruta+idCorredor)

  // }


  obtenerTarifasgetTarifas(idCorredor: String): void {
     this.getTarifas(idCorredor).subscribe((resp:Tarifa[])=>{
       console.log(resp)
      this.listaTarifas.next(resp)
          this.tarifas=resp
     })
  }

  private getTarifas(idCorredor: String): Observable<Tarifa[]>{
    const ruta = environment.urlBase + Constantes.LISTA_TARIFAS_POR_CORREDOR
     return this.http.get<Tarifa[]>(ruta+idCorredor)
  } 

  // getTarifas$(): Observable<Tarifa[]> {
  //   return this.tarifas$.asObservable();
  // }
}
