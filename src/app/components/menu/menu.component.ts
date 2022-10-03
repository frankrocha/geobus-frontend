import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ConsultaComponent } from 'src/app/modules/reclamos/components/consulta/consulta.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
            // {
            //     label:'Inicio',
            //     routerLink: '/inicio',
            //     icon:'pi pi-fw pi-home'
            // },
            {
            
                label:'Corredores',
                routerLink: 'corredores/lista',
                icon:'pi pi-fw pi-car'
            },
            {
                label:'Tarifas',
                routerLink: '/tarifas/main',
                icon:'pi pi-fw pi-money-bill'
            },
          {
              label:'Tarjetas',
              icon:'pi pi-fw pi-credit-card',
              routerLink: '/tarjetas/main',
          },
          {
            label:'Reclamos',
            icon:'pi pi-fw pi-book',
            routerLink: '/reclamos/main',
           
            }
      ];
  }

  

}
