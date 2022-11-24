import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CreancesGbalesComponent } from './creances-gbales/creances-gbales.component';
import { ChargesIndividuelComponent } from './charges-individuel/charges-individuel.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { routes } from './rapports-routing.module';
import { SituationAnnuelleComponent } from './situation-annuelle/situation-annuelle.component';
import { MaterialModule } from '../app.module';

//import { RapportsModule } from './rapports.module';

@NgModule({
  declarations: [CreancesGbalesComponent, ChargesIndividuelComponent, SituationAnnuelleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
	  MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [DatePipe],
})
export class RapportsModule { }
