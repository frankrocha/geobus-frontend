import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: 'reclamos',
    loadChildren: () => import('./modules/reclamos/reclamos.module').then(m =>m.ReclamosModule)
  },
  {
    path: 'corredores',
    loadChildren: () => import('./modules/corredores/corredores.module').then(m =>m.CorredoresModule)
  },
  {
    path: 'tarifas',
    loadChildren: () => import('./modules/tarifas/tarifas.module').then(m =>m.TarifasModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./modules/tarjeta/tarjeta.module').then(m =>m.TarjetaModule)
  },
  // {path:'inicio',component: MapComponent},
  {path:'**',redirectTo: 'corredores'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
