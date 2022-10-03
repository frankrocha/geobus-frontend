import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Reclamo } from 'src/app/model/Reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  reclamo= new Reclamo
  showInfo!:boolean
  reclamoForm!:FormGroup
  constructor(private reclamoService:ReclamoService) { }

  ngOnInit(): void {
    this.showInfo=false
    console.log("Se cargo el coponente")
    this.reclamoForm = new FormGroup({
      idReclamo: new FormControl(),
    })
  }

  consultarInfo(){
        this.reclamoService.consultarReclamoPorId(this.frmCtrlReclamo.value).subscribe((resp:Reclamo[])=>{
         
          this.reclamo=resp[0]
          console.log("el reclomo",this.reclamo)
                this.showInfo=true
        })
  }

  get frmCtrlReclamo() : AbstractControl {
    return this.reclamoForm.get("idReclamo") as FormControl;
  }

}
