import { Component, OnInit } from '@angular/core';
import { Tarifa } from 'src/app/model/Tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  listarifas!:Tarifa[]
  constructor(private tarifaService:TarifaService) { }

  ngOnInit(): void {
    this.tarifaService.tarifas$.subscribe((res:Tarifa[])=>{
      this.listarifas=res
    })
  }

}
