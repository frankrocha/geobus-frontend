import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../model/Email';
import { MessageReponse } from '../model/MessageReponse';
import { RecargaRequest } from '../model/RecargaRequest';
import { Tarjeta } from '../model/Tarjeta';
import { Constantes } from '../utils/constantes';
import { catchError, map,retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http: HttpClient) { }

  //private tarjeta !: Tarjeta
  private tarjeta =  new Subject<Tarjeta>()
  public tarjeta$ = this.tarjeta.asObservable()

  
  obtenerTarjeta(nroTarjeta:string){
    this.getTarjeta(nroTarjeta).subscribe((res:Tarjeta)=>{
      this.tarjeta.next(res)
       //this.tarjeta=res
    })
  }

  private getTarjeta(nroTarjeta:string):Observable<Tarjeta>{
    const ruta = environment.urlBase + Constantes.CONSULTAR_TARJETA_POR_NR_TARJETA
    return this.http.get<Tarjeta>(ruta+nroTarjeta)
  }

  recargaTarjeta(recargaRequest:RecargaRequest): Observable<MessageReponse>{
    const ruta = environment.urlBase + Constantes.RECARGAR_TARJETA
    console.log("recargaRequestssssss",recargaRequest)
    console.log("la uri",recargaRequest)
    return this.http.post<any>(ruta,recargaRequest).pipe(
      map((item:MessageReponse) => {
        return item
      }),
      catchError((error:HttpErrorResponse)=>{
        console.log("error",error)
        return throwError(error)
      })
    )
  }

  // enviarCorreo (email:Email):Observable<string>{
  //   const ruta = environment.urlBase + Constantes.ENVIAR_CORREO
  //   return this.http.post<string>(ruta,email)
  // }




}
