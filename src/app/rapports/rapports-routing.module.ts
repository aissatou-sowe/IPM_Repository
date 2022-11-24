import { Routes, RouterModule } from '@angular/router';
import { ChargesIndividuelComponent } from './charges-individuel/charges-individuel.component';
import { CreancesGbalesComponent } from './creances-gbales/creances-gbales.component';
import { SituationAnnuelleComponent } from './situation-annuelle/situation-annuelle.component';

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
{
  path: '',
  children: [ {
    path: 'SituationAnnuelle',
    component: SituationAnnuelleComponent
  }]
},
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RapportsRoutingModule { }
