import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetalleComponent } from './components/detalle/detalle.component';


import { TarifasRoutingModule } from './tarifas-routing.module';

import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
// import {MenuItem} from 'primeng/api';
// import {MegaMenuItem} from 'primeng/api'; 
import {FormsModule} from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import {BadgeModule} from 'primeng/badge';
import {PaginatorModule} from 'primeng/paginator';

import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {GMapModule} from 'primeng/gmap';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { MainComponent } from './components/main/main.component';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  declarations: [
    CabeceraComponent,
    DetalleComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    TarifasRoutingModule,

    CalendarModule,
    PanelModule,
    CardModule,
    CascadeSelectModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    BadgeModule,
    DropdownModule,
    PaginatorModule,
    TabViewModule,
    GMapModule,
    ToastModule,
    DialogModule,
    SkeletonModule
  ]
})
export class TarifasModule { }
