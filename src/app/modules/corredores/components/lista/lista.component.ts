import { Component, OnInit } from '@angular/core';
import { Corredor } from 'src/app/model/Corredor';
import { CorredorService } from 'src/app/services/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  corredores!: Corredor[]
  constructor(private corredorService:CorredorService,
             private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit(): void {
  //  this.corredorService.getCorredores().subscribe((respuesta:Corredor[])=>{
  //   this.corredor=respuesta
  //   console.log("los corredores", this.corredor)
  //  })

    this.corredorService.getCorredores().subscribe((respuesta:Corredor[])=>{
    this.corredores=respuesta
    this.corredores.forEach(element => {
          console.log(element.rutas)
    });
    console.log("los corredores", this.corredores)
   })
  }

  verRuta(idRuta:number,nombre:string){
    this.corredorService.obtenerRuta(idRuta,nombre)
    this.router.navigate(['/corredores', 'rutas'])
  }

}
