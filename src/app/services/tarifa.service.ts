import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarifa } from '../model/Tarifa';
import { Constantes } from '../utils/constantes';
import { catchError, map,retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private tarifas !: Tarifa[]
  private listaTarifas = new  BehaviorSubject<Tarifa[]>(this.tarifas)
  public tarifas$ = this.listaTarifas.asObservable()
  
  constructor(private http: HttpClient) { 

  }

  obtenerTarifasgetTarifas(idCorredor: String): void {
     this.getTarifas(idCorredor).subscribe((resp:Tarifa[])=>{
       console.log(resp)
      this.listaTarifas.next(resp)
          this.tarifas=resp
     })
  }

  private getTarifas(idCorredor: String): Observable<Tarifa[]>{
    const ruta = environment.urlBase + Constantes.LISTA_TARIFAS_POR_CORREDOR
     return this.http.get<Tarifa[]>(ruta+idCorredor).pipe(
      map((item:Tarifa[]) => {
        return item
      }),
      catchError((error:HttpErrorResponse)=>{
        console.log("error",error)
        return throwError(error)
      })
    )
  } 

  // getTarifas$(): Observable<Tarifa[]> {
  //   return this.tarifas$.asObservable();
  // }
}
