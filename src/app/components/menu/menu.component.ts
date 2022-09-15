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
            {
                label:'Inicio',
                routerLink: '/inicio',
                icon:'pi pi-fw pi-pencil'
            },
            {
                label:'Tarifas',
                routerLink: '/tarifas/main',
                icon:'pi pi-fw pi-pencil'
            },
          {
            
              label:'Corredores',
              routerLink: 'corredores/lista',
              icon:'pi pi-fw pi-pencil'
          },
          {
              label:'Buscar Rutas',
              icon:'pi pi-fw pi-user',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-user-plus',

                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-user-minus',

                  },
                  {
                      label:'Search',
                      icon:'pi pi-fw pi-users',
                      items:[
                      {
                          label:'Filter',
                          icon:'pi pi-fw pi-filter',
                          items:[
                              {
                                  label:'Print',
                                  icon:'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon:'pi pi-fw pi-bars',
                          label:'List'
                      }
                      ]
                  }
              ]
          },
          {
              label:'Tarjetas',
              icon:'pi pi-fw pi-calendar',
              items:[
                    {
                        label:'Recargar',
                        icon:'pi pi-fw pi-pencil',
                    },
                  {
                      label:'Registrar',
                      icon:'pi pi-fw pi-pencil',
                  },
                  {
                      label:'Consultar Saldo',
                      icon:'pi pi-fw pi-calendar-times',
                  }
              ]
          },
          {
            label:'Reclamos',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    
                    label:'Consultar',
                    routerLink: 'reclamos/consulta',
                    icon:'pi pi-fw pi-align-justify'  
                },
                {
                    label:'Registrar',
                  //   icon:'pi pi-fw pi-trash'
                    icon:'pi pi-fw pi-plus',
                },
                // {
                //     separator:true
                // },
                // {
                //     label:'Export',
                //     icon:'pi pi-fw pi-external-link'
                // }
            ]
        },
        //   {
        //       label:'Quit',
        //       icon:'pi pi-fw pi-power-off'
        //   }
      ];
  }

  

}
