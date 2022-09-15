import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from '../model/Corredor';
import { environment } from 'src/environments/environment';
import { Constantes } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class CorredorService {
  // http://localhost:8080/api/v1/geobus/corredor
  constructor(private http: HttpClient) {

  }

  getCorredores(): Observable<Corredor[]>{
    const ruta = environment.urlBase + Constantes.LISTA_CORREDORES_RUTAS
    return this.http.get<Corredor[]>(ruta) 
  }
  
}
