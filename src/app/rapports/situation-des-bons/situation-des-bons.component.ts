import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/Models/Prestations';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';

@Component({
  selector: 'app-situation-des-bons',
  templateUrl: './situation-des-bons.component.html',
  styleUrls: ['./situation-des-bons.component.css']
})
export class SituationDesBonsComponent implements OnInit {
  listPrestation: Prestation[];

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB'); }

  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
  }
  getPrestation(presta){ }
  getSituation(){ }

}
