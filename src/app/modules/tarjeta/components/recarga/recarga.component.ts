import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, ConfirmEventType,MessageService } from 'primeng/api';
import { Email } from 'src/app/model/Email';
import { MessageReponse } from 'src/app/model/MessageReponse';
import { RecargaRequest } from 'src/app/model/RecargaRequest';
import { Tarjeta } from 'src/app/model/Tarjeta';
import { Usuario } from 'src/app/model/Usuario';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class RecargaComponent implements OnInit {
  submitted: boolean = false
  show!:boolean
  showSpinner!:boolean
  recargarForm!: FormGroup
  displayModal!: boolean;
  displaySpinner!:boolean;
  usuario!:Usuario
  tarjeta!:Tarjeta
  respuestaRecarga = new MessageReponse
  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private tarjetaService:TarjetaService,
              private usuarioService :UsuarioService) {
    this.recargarForm = new FormGroup({
      monto: new FormControl(),
      correo: new FormControl(),
      numTarjeta:new FormControl()
    })
    this.show=false
    this.showSpinner=false
   }

  ngOnInit(): void {
  
    this.tarjetaService.tarjeta$.subscribe((resp:Tarjeta)=>{
      console.log("el dato que esta esperando",resp)
      // this.show=true
      if (resp!=null){
        this.tarjeta=resp
        this.usuarioService.getUsuario(resp.idUsuario).subscribe((resp:Usuario)=>{
          this.usuario=resp
          this.show=true
          console.log("El usuario",resp)
        })
      }else{
        console.log("La tarjeta no existe")
        this.messageService.add({severity: 'warn', detail:'No existe la tarjeta'});
      }
     

    })


  }

  confirm(correo:string,numtarjeta:string) {
    if(this.frmCtrlMonto.value!=null){
      this.confirmationService.confirm({
        message: '¿Seguro que quire recargar?',
        header: 'Comfirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.displaySpinner=true
            const obj = new RecargaRequest()
            obj.monto=this.frmCtrlMonto.value
            obj.nroTarjeta=numtarjeta
            obj.correo=correo
            this.tarjetaService.recargaTarjeta(obj).subscribe((resp:MessageReponse)=>{
              this.respuestaRecarga=resp
              this.displaySpinner=false
              this.displayModal=true
              console.log("respuesta",resp)
            })
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
        },
        reject: (type:any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
        }
      });

    }else{
      console.log("La tarjeta no existe")
      this.messageService.add({severity: 'warn', detail:'Ingrese el monto'});
    }

  }

  get frmCtrlMonto() : AbstractControl {
    return this.recargarForm.get("monto") as FormControl;
  }
  get frmCtrlCorreo() : AbstractControl {
    return this.recargarForm.get("correo") as FormControl;
  }
  get frmCtrlNumTarjeta() : AbstractControl {
    return this.recargarForm.get("numTarjeta") as FormControl;
  }
}
