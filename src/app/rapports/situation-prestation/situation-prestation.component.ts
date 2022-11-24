import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';
import { Prestation } from 'src/app/Models/Prestations';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';

@Component({
  selector: 'app-situation-prestation',
  templateUrl: './situation-prestation.component.html',
  styleUrls: ['./situation-prestation.component.css']
})
export class SituationPrestationComponent implements OnInit {
  listPrestation:Prestation[];
  prestatonChoisi: any;
  d1: string;
  d2: string;
  date1: any;
  date2: any;
  listPrestatio: IPM_Details_Facture[];
  matricule;
  list: IPM_Details_Facture[];
  id: any;

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB');

  }

  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
  }

  getPrestation(presta){
    this.prestatonChoisi=presta
    console.log(this.prestatonChoisi,presta.code_prestation)
    
   }
   getSituation(){
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    
    this.rapportServ.getSituatonParindividus(this.d1,this.d2,this.matricule).subscribe(
      result=>{
        this.listPrestatio=result
        console.log(this.listPrestatio)
      })

   }
   getPrestaton(element){
    console.log(element)
    this.id=element.ipm_prestation.code_prestation
    // this.rapportServ.getSituatonParPrestation(this.d1,this.d2,element.ipm_prestation.code_prestation).subscribe(
    //   result=>{
    //     this.list=result
    //     console.log(this.list)
    //   })
        this.router.navigate(['/rapports/situation-par-prestation/'+this.d1+'/'+this.d2+'/'+element.ipm_prestation.code_prestation]);
        console.log('/situation-par-prestation/'+this.d1+'/'+this.d2+'/'+this.id)

   }


}
