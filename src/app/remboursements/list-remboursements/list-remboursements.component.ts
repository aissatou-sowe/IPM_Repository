import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/Services/facture.service';

@Component({
  selector: 'app-list-remboursements',
  templateUrl: './list-remboursements.component.html',
  styleUrls: ['./list-remboursements.component.css']
})
export class ListRemboursementsComponent implements OnInit {
  liste;
  constructor( private factservice:FactureService,private router:Router) { }

  ngOnInit(): void {
    this.factservice.getAllRemboursementGlobal().subscribe(data => {
      this.liste = data;
      $(function(){
        (<any>$('#datatable')).DataTable({
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
     
     console.log(this.liste)
     
      
    });
    
  }
  getDetrembouById(fac){
    //location.reload();
    //(<any>$('#datatable1')).dataTable().fnDestroy();
    console.log(fac.idRemboursement)
    this.router.navigate(['/remboursements/certification/'+fac.idRemboursement]);
    
  }
  

}