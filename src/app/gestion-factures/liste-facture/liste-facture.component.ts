import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';
import { FactureService } from 'src/app/Services/facture.service';

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.css']
})

export class ListeFactureComponent implements OnInit {
  listFacture:IPM_Details_Facture[];
  date1: string;
  nom: any;
  prenom: any;
  matricule: any;
  prestation: any;
  prestataire: any;
  part_ipm: any;
  montant: any;
  part_patient: any;
  dateFacture: any;
  dateEregistrement: any;
  dateEnregistrement: any;
  solde: any;
  cumulCharge: any;
  chargeEmploie: any;
  numFacture: any;
  detailfacture: any;
  certifier:boolean;
  list: IPM_Details_Facture[];
  isCheik:boolean=false;
  listDetail=[]
  Emploie: any;
  undetailfacture: any;
  listEmploie=[];
  booleanCerti: any;
  listCertifier=[];
  liste;
  facture: any;
  elements: IPM_Details_Facture[];
  table;
  
  constructor(private fact_service:FactureService,private datepipe: DatePipe,
    private router:Router) { }

  ngOnInit(): void {
    this.fact_service.getAllFactureglobale().subscribe(data => {
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
      this.liste = data;
  //      for (let index = 0; index < this.listFacture.length; index++) {
  //       //  if(this.listFacture[0].ipm_facture.certifier!=true){
  //       //    this.liste.push(this.listFacture[index].ipm_facture)
     console.log(this.liste)
     //console.log((<any>$('#datatable')).dataTable())
  //       //  }
        
  //      }

      
  // console.log(this.date1)
  //     console.log(this.listFacture);
      
    });
    
  }
  getDetFactById(fac){
    //location.reload();
    //(<any>$('#datatable1')).dataTable().fnDestroy();
    console.log(fac.idfacture)
    this.router.navigate(['/gestion-factures/certification/'+fac.idfacture]);
    
  }
  
  
  

}
