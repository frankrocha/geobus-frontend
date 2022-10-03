import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
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
import { MapComponent } from './components/map/map.component';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';

    



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MenuModule,

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
    HttpClientModule

  ],
  providers: [
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
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
