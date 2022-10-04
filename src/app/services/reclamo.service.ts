import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageReponse } from '../model/MessageReponse';
import { Reclamo } from '../model/Reclamo';
import { ReclamoRequest } from '../model/ReclamoRequest';
import { Constantes } from '../utils/constantes';
import { catchError, map,retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  constructor(private http:HttpClient) { }

  registrarReclamo(reclamoRequest:ReclamoRequest):Observable<MessageReponse>{
    console.log("obj reclamo",reclamoRequest)
   const url = environment.urlBase + Constantes.REGISTRAR_RECLAMO 
    return this.http.post<MessageReponse>(url,reclamoRequest).pipe(
      map((item:MessageReponse) => {
        return item
      }),
      catchError((error:HttpErrorResponse)=>{
        console.log("error",error)
        return throwError(error)
      })
    )
    //R-132131231
  }

  consultarReclamoPorId(idReclamo:string):Observable<Reclamo[]>{
     const url = environment.urlBase + Constantes.CONSULTAR_RECLAMO_POR_ID
     return this.http.get<any>(url+idReclamo).pipe(
      map((item:Reclamo[]) => {
        return item
      }),
      catchError((error:HttpErrorResponse)=>{
        console.log("error",error)
        return throwError(error)
      })
    )
  }
}
