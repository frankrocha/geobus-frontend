import { Component, OnInit } from '@angular/core';
import { Corredor } from 'src/app/model/Corredor';
import { CorredorService } from 'src/app/services/corredor.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  corredores!: Corredor[]
  constructor(private corredorService:CorredorService) { }

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

}
