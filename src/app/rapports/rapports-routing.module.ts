import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargesIndividuelComponent } from './charges-individuel/charges-individuel.component';
import { CreancesGbalesComponent } from './creances-gbales/creances-gbales.component';

export const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'ChargesIndividuel',
      component: ChargesIndividuelComponent
    }]
},
{
  path: '',
  children: [ {
    path: 'CreancesGlobales',
    component: CreancesGbalesComponent
  }]
},
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RapportsRoutingModule { }
