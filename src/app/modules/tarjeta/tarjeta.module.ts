import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { MainComponent } from './components/main/main.component';

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
import {SkeletonModule} from 'primeng/skeleton';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RecargaComponent } from './components/recarga/recarga.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    MainComponent,
    RecargaComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule,

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
    SkeletonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    ProgressSpinnerModule
  ]
})
export class TarjetaModule { }
