import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';

import autoTable from 'jspdf-autotable';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
import { Prestation } from 'src/app/Models/Prestations';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-situation-par-prestation',
  templateUrl: './situation-par-prestation.component.html',
  styleUrls: ['./situation-par-prestation.component.css']
})
export class SituationParPrestationComponent implements OnInit {
  listPrestation: Prestation[];
  prestation: any;
  date1: any;
  date2: any;
  d1: string;
  d2: string;
  list: import("c:/Users/HP/workspace/IPM_Front/PROJET-IPM/src/app/Models/IPM_Detils_Factures").IPM_Details_Facture[];
  prestationChoisi: any;

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB'); }
   
  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
  }
  getprestation(presta){
  
       console.log(presta)
       this.prestationChoisi=presta.libelle
      }
  // getPrestation(){
  //   console.log(this.prestation)
  //  }
  getSituation(){ 
    console.log(this.prestation)
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    this.rapportServ.getSituatonParPrestation(this.d1,this.d2,this.prestation).subscribe(data=>{
      $(function(){
        (<any>$('#datatable')).DataTable({
            "pagingType": "full_numbers",
             "lengthMenu": [
               [10, 25, 50, -1],
               [10, 25, 50, "All"]
             ],
             responsive: true,
             retrieve:true,
             language: {
               search: "_INPUT_",
               searchPlaceholder: "Recherche",
               info: " _START_/_END_ sur _TOTAL_ demandes",
               paginate: {
                "first":        "Début",
                "previous":     "Précédent",
                "next":         "Suivant",
                "last":         "Fin"
            },
            lengthMenu:"Afficher par _MENU_",
            infoFiltered:""
             },
             
        
           });
      
      })
      this.list=data
      console.log(this.list)


    })
  }

}
