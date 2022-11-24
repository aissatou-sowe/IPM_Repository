import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';

import autoTable from 'jspdf-autotable';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';

@Component({
  selector: 'app-situation-par-prestation',
  templateUrl: './situation-par-prestation.component.html',
  styleUrls: ['./situation-par-prestation.component.css']
})
export class SituationParPrestationComponent implements OnInit {
  date1: any;
  date2: any;
  id: any;

  list: any;

  constructor(private route:ActivatedRoute,private rapportServ:RapportServiceService) { }

  ngOnInit(): void {
    this.date1=this.route.snapshot.params['d1'] ;
    this.date2=this.route.snapshot.params['d2'] ;
    this.id=this.route.snapshot.params['id'] ;
    console.log(this.date1,this.date2,this.id)
    this.rapportServ.getSituatonParPrestation(this.date1,this.date2,this.id).subscribe(
         result=>{
          $(function(){
            (<any>$('#datatable')).dataTable({
                "pagingType": "full_numbers",
                 "lengthMenu": [
                   [10, 25, 50, -1],
                   [10, 25, 50, "All"]
                 ],
                 responsive: true,
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
           this.list=result
           console.log(this.list)
         })
    
  }

}
