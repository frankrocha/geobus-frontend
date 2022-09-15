import { Component, OnInit } from '@angular/core';
import { Corredor } from 'src/app/model/Corredor';
import { CorredorService } from 'src/app/services/corredor.service';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  corredores!: Corredor[]
  constructor(private corredorService:CorredorService,
            private tarifaService:TarifaService) { }

  ngOnInit(): void {
    this.corredorService.getCorredores().subscribe((respuesta:Corredor[])=>{
      this.corredores=respuesta
      console.log("los corredores",this.corredores)
  })

  }

  listarTarifas(id: string){
    this.tarifaService.obtenerTarifasgetTarifas(id)

  }
  corredorSelecionado(envent:Event){
    console.log("elvento",envent)
  }



}
