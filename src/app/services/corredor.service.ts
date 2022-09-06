import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from '../model/Corredor';

@Injectable({
  providedIn: 'root'
})
export class CorredorService {
  // http://localhost:8080/api/v1/geobus/corredor
  constructor(private http: HttpClient) {

  }
  getCorredores(): Observable<Corredor[]>{
    return this.http.get<Corredor[]>('http://localhost:8080/api/v1/geobus/corredor') 
  }
}
