import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, ConfirmEventType,MessageService } from 'primeng/api';
import { Usuario } from 'src/app/model/Usuario';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class MainComponent implements OnInit {
  
  tarjetaForm!: FormGroup
  mostrar!:boolean
  constructor(private usuarioService:UsuarioService,
              private tarjetaService:TarjetaService) { }

  ngOnInit(): void {
    this.mostrar=false
    // this.usuarioService.obtenerUsuario("2").subscribe((resp:Usuario)=>{
    //   console.log("el usuario",resp)
    // })
    this.tarjetaForm = new FormGroup({
      numTarjeta: new FormControl(),
    })
  }

  consultarInfo(){
   this.mostrar=true
   console.log("el numTarjeta",this.frmCtrlNumTarjeta.value)
   this.tarjetaService.obtenerTarjeta(this.frmCtrlNumTarjeta.value)

  }

  get frmCtrlNumTarjeta() : AbstractControl {
    return this.tarjetaForm.get("numTarjeta") as FormControl;
  }

  
}
