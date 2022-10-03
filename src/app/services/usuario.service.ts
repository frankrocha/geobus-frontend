import { HttpClient } from '@angular/common/http';
import { Target } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';
import { Constantes } from '../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  private usuario =  new Subject<Usuario>()
  public usuario$ = this.usuario.asObservable()

  constructor(private http: HttpClient) { }


  // obtenerUsuario(idUsuario:string):void{
  //   this.getUsuario(idUsuario).subscribe((resp:Usuario)=>{
  //     this.usuario.next(resp)
  //   })
  
  // }

  // private getUsuario(idUsuario:string):Observable<Usuario>{
  //   const url = environment.urlBase + Constantes.OBTENER_USUARIO
  //   return this.http.get<Usuario>(url+idUsuario)
  // }

   getUsuario(idUsuario:string):Observable<Usuario>{
    const url = environment.urlBase + Constantes.OBTENER_USUARIO
    return this.http.get<Usuario>(url+idUsuario)
  }

}
