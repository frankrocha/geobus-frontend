import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { MessageReponse } from 'src/app/model/MessageReponse';
import { ReclamoRequest } from 'src/app/model/ReclamoRequest';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class RegistrarComponent implements OnInit {
  messageReponse =new MessageReponse
  displayModal!: boolean;
  reclamoRequest!:ReclamoRequest
  reclamoFrom!:FormGroup
  constructor(private reclamoService:ReclamoService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.reclamoFrom = new FormGroup({
      descripcion: new FormControl(),
      correo: new FormControl(),
      telefono:new FormControl(),
      razonSocial: new FormControl(),
      dni:new FormControl()

    })
  }

  confirm(){

    console.log("Entro")
    this.confirmationService.confirm({
      message: '¿Seguro que quire registrar?',
      header: 'Comfirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => { 
        let obj= new ReclamoRequest
        obj.descripcion=this.frmCtrlDescripcion.value
        obj.correo=this.frmCtrlCorreo.value
        obj.dni=this.frmCtrlDni.value
        obj.nameRazonSocial=this.frmCtrlRazonSocial.value
        obj.telefono=this.frmCtrlTelefono.value
        obj.estado="Pendiente"
        this.reclamoService.registrarReclamo(obj).subscribe((resp:MessageReponse)=>{
          this.messageReponse=resp
          console.log("respuesta registro de reclamo",resp)
          this.displayModal=true
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

  

  }

  get frmCtrlDescripcion() : AbstractControl {
    return this.reclamoFrom.get("descripcion") as FormControl
  }
  get frmCtrlCorreo() : AbstractControl {
    return this.reclamoFrom.get("correo") as FormControl
  }
  get frmCtrlTelefono() : AbstractControl {
    return this.reclamoFrom.get("telefono") as FormControl
  }
  get frmCtrlDni() : AbstractControl {
    return this.reclamoFrom.get("dni") as FormControl
  }
  get frmCtrlRazonSocial() : AbstractControl {
    return this.reclamoFrom.get("razonSocial") as FormControl
  }

}
