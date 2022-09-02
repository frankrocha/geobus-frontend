import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamosRoutingModule } from './reclamos-routing.module';
import { ConsultaComponent } from './components/consulta/consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    ReclamosRoutingModule
  ]
})
export class ReclamosModule { }
