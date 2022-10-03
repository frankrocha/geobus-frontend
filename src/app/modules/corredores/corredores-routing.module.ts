import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'lista',component: ListaComponent},
      {path:'rutas',component: RutaComponent},
      {path:'**',redirectTo: 'lista'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredoresRoutingModule { }
