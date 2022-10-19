import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';
import { FactureService } from 'src/app/Services/facture.service';
import { Employe } from '../../Models/Employe';
import { Facture } from '../../Models/IPM_Facture';
type AOA = any;
declare var $;
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
id;
listFactures:IPM_Details_Facture[];
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
  chargeEmploie=[];
  numFacture: any;
  detailfacture: any;
  certifier:boolean;
  list: IPM_Details_Facture[];
  isCheik:boolean=false;
  listDetail:Employe[]
  Emploie: any;
  undetailfacture: any;
  listEmploie=[];
  booleanCerti: any;
  listCertifier=[];
  liste;
  facture=new Facture();
  elements: IPM_Details_Facture[];
  table;
  fac;
  id1: any;
  listFactureCertif: IPM_Details_Facture[];
  numero: any;
  objetEmploye: Employe;
  update: Employe;
  constructor(private fact_service:FactureService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   // this.id1=this.route.snapshot.params['id2'];
    //(<any>$('#datatable')).dataTable().fnDestroy(); 
    console.log(this.id)
    this.fact_service.getAllFactbyfactglobale(this.id).subscribe(data=>{
      this.listFactures=data;
      console.log(data)
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
           
      }); 
         
        console.log(this.listFactures)
        for(let lf of this.listFactures){
          this.certifier=lf.ipmFacture.certifier
          this.facture=lf.ipmFacture
          this.numero =lf.ipmFacture.numerofacture
         
        }
      }
    );
    //this.fact_service.getFactureById(this.id).subscribe((data)=>{
      
    //   this.fac=data
    //   this.certifier=this.listFactures.ipmFacture.certifier
    //   =this.fac
    // })
    
    
    
   
    //(<any>$('#datatable1')).dataTable().fnDestroy();
  }
  CertifierEmploye(){
    console.log(this.facture,this.certifier)
    this.listFactureCertif=this.listFactures
    this.facture.certifier=true;
    console.log(this.facture)
    //a revoir apres la présentattion
     //this.fact_service.UpdateFacture(this.facture).subscribe(
     //  (data)=>{}
    // )
    // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
    //  (data)=>{
        console.log(this.listFactureCertif)
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
          
        // }                                                                            
  for (let index = 0; index < this.listFactureCertif.length; index++) {
    this.fact_service.getEmployeById(this.listFactureCertif[index].ipm_employe.idemp).subscribe((data)=>{
      this.objetEmploye=data
     // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
    // this.listFactureCertif[index]
    console.log(this.objetEmploye.solde);
      this.objetEmploye.solde+=this.listFactureCertif[index].part_patient
      this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
     // //this.chargeEmploie.push({...index.ipm_employe})
     // //console.log(this.chargeEmploie);
     this.update=this.objetEmploye
     console.log(this.update,this.update.solde);
     // console.log(this.objetEmploye,this.objetEmploye.solde,this.update);
     // debugger
       this.fact_service.updateOnEmploye(this.update).subscribe(data=>{this. showALERTE("top","center")},
         err=>{this. showALERTE2("top","center")})
    })
    //this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>{this. showALERTE("top","center")},
      //err=>{this. showALERTE2("top","center")})
      //  (data)=>{
    //this.elements.push(element);
  }
}
  //console.log(this.elements);


  
  getFactureById(fact){
    console.log(fact)
    fact.ipm_employe.solde+=fact.part_patient
    fact.ipm_employe.cumul_charge+=fact.part_patient

    console.log(fact.ipm_employe.solde,fact);
    this.nom=fact.ipm_employe.nom
    this.prenom=fact.ipm_employe.prenom
    this.matricule=fact.ipm_employe.matricule
    this.prestation=fact.ipm_prestation.libelle
    this.montant=fact.montant_facture
    this.part_ipm=fact.part_ipm
    this.part_patient=fact.part_patient
    this.dateFacture=fact.ipmFacture.date_facture
    this.dateEnregistrement=fact.ipmFacture.date_saisie
    this.prestataire=fact.ipmFacture.ipm_prestataire.nom_prestataire
    this.numFacture=fact.ipmFacture.numerofacture
this.solde=fact.ipm_employe.solde
this.cumulCharge=fact.ipm_employe.cumul_charge
this.detailfacture=fact
   // this.chargeEmploie=fac.ipm_employe
    //this.certifier=this.detailfacture.certifier

  }
 
  getCertified(certifier){
    this.booleanCerti=certifier//pour pouvoir changer le boolean certifier
    certifier.ipm_employe.solde+=certifier.part_patient
    certifier.ipm_employe.cumul_charge+=certifier.part_patient
    this.undetailfacture=certifier
    this.Emploie=certifier.ipm_employe

    this.booleanCerti.certifier=true
    this.booleanCerti.ipm_employe=certifier.ipm_employe
    this.listCertifier.push(this.booleanCerti)

    this.listDetail.push(certifier)
    console.log(this.listDetail)
    this.listEmploie.push(this.Emploie)
    //this.booleanCerti=certifier

    //console.log(this.listEmploie)



  }
  certifiGlobal(){
    console.log(this.listEmploie)
    this.fact_service.updateLemploye(this.listEmploie).subscribe(
      (data)=>{}
    )
    console.log(this.listCertifier)
    this.fact_service.updateLdetailFacture(this.listCertifier).subscribe(
      (data)=>{}
    )

  }
  retourner(){
    this.router.navigate(['/gestion-factures/ListeFacture']);

  }
  showALERTE2(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Erreure d enregistrement  </b> :'
    }, {
      type: type[3],
      timer: 13000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b> enregistrement fait avec succes  </b> :'
    }, {
      type: type[1],
      timer: 13000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

}
