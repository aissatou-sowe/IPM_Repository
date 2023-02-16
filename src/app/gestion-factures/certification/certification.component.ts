import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sum } from 'chartist';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
     this.fact_service.UpdateFacture(this.facture).subscribe(
      (data)=>{
        this.ngOnInit();
      }

    )
    // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
    //  (data)=>{
        console.log(this.listFactureCertif)
        // for (let j = 0; j < this.listFactureCertif.length; j++) { 
          
        // }                                                                            
  for (let index = 0; index < this.listFactureCertif.length; index++) {
    this.fact_service.getEmployeById(this.listFactureCertif[index].ipm_employe.idemp).subscribe((data)=>{
      this.objetEmploye=data
     // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
    // this.listFactureCertif[index]
    console.log(this.objetEmploye.solde);
      this.objetEmploye.solde+=this.listFactureCertif[index].part_patient
      this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
     this.chargeEmploie.push({...this.objetEmploye})
     // //console.log(this.chargeEmploie);
     this.update=this.objetEmploye
     console.log(this.update,this.update.solde);

       this.fact_service.updateOnEmploye(this.update).subscribe(data=>
        {if(index+1==this.listFactureCertif.length)
          {this. showALERTE("top","center")}},
          err=>{
            if(index+1==this.listFactureCertif.length)
            this. showALERTE2("top","center")})
    })
    // this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>
    //   {if(index+1==this.listFactureCertif.length)
    //   {this. showALERTE("top","center")}},
    //   err=>{
    //     if(index+1==this.listFactureCertif.length)
    //     this. showALERTE2("top","center")})
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
      message: '<b> facture  certifié avec succès </b> :'
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
    ///////////////////////// Imprimer Duplicata facture
  imprimerfacture(){
  console.log(this.listFactures)
  let doc=new jsPDF();
  //var imgData = '/assets/img_poste/laposte.png'
  var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

  let col=[["Matricule","Prenom","Nom","Prestation","Montant Facture","Charge IPM","Charge Agent"]]
  let rows=[]
  for (let factemp of this.listFactures) {
    let tmp = [factemp.ipm_employe?.matricule, factemp.ipm_employe?.prenom, factemp.ipm_employe?.nom, factemp.ipm_prestation?.libelle, factemp.montant_facture, factemp.part_ipm, factemp.part_patient]
    rows.push(tmp)
    var prestataire=factemp.ipmFacture?.ipm_prestataire.nom_prestataire;
  
  }
  var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
  var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
  var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
  console.log(somme);
  let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
  var num=this.numero;
 
    console.log(num)
  autoTable(doc,{
    startY:75,
    head:col,
    body:rows,
    foot:f,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"striped",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,30,30)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,100,15)
    doc.setFillColor(240,240,240)
    //  doc.rect(13,40,185,32,'F')
    //  doc.setFillColor(240,240,240)
     
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     doc.text("Duplicata Facture",77,40)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,18)
          doc.text("Numero Facture:",15,60)
          doc.text(''+num,50,60)
          doc.text("Prestataire:",15,72) 
          doc.text(""+prestataire,40,72)     
      doc.text(date.toLocaleDateString("fr-FR"),172,18)
         doc.setFontSize(12)

     }
  });
  
  doc.output('dataurlnewwindow');


}
/////////////////Fin Duplicata Facture 

}
