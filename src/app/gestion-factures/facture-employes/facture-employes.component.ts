import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employe } from 'src/app/Models/Employe';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';
import { Facture } from 'src/app/Models/IPM_Facture';
import { Prestataire } from 'src/app/Models/Prestataire';
import { Prestation } from 'src/app/Models/Prestations';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { FactureService } from 'src/app/Services/facture.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import { PrestationService } from 'src/app/Services/prestation.service';
import { element } from 'protractor';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { IPM_Statut_Facture } from 'src/app/Models/IPM_Statut_Facture';

declare var $;
@Component({
  selector: 'app-facture-employes',
  templateUrl: './facture-employes.component.html',
  styleUrls: ['./facture-employes.component.css']
})
export class FactureEmployesComponent implements OnInit {
  panier: Array<IPM_Details_Facture> = [];
  matr: number;
  enfant: Employe;
  enfants: any;
  conjoints: any;
  factureForm:FormGroup;
  listPrestataire: Prestataire[];
  listPrestation:Prestation[];
  prestation_choisi: any;
  prestataire_choisi: any;
  employe_choisi:any;
  id_emp_choisi:any;
  agree: any;
  addStatutFacture:IPM_Statut_Facture;
  non_agree: any;
  id_prest_choisi: any;
  part_imp: number;
  part_patient: number;
  id_prestation_choisi: any;
  ipm_prestataires:Prestataire;
  ipm_prestations:Prestation;
  ipm_facturess:Facture;
  ipm_employes:Employe;
  items:IPM_Details_Facture[]=[];
  val: any;
  total: number;
  totalChargeIpm: number;
  totalChargeAgent: number;
  dataa: any;
  donnee: any;
  jsonPrest: any;
  Jsonprestations: any;
  numerofacture:number;
  factuGlobale: Facture;
  date_prestation:Date
  code_presta:any;
  d1: number;
  constructor(private builder: FormBuilder,private emp_service: EmployeService, 
    private router: Router, private route: ActivatedRoute,
    private pres_service: PrestataireService,private prestation:PrestationService,
    private fact_service:FactureService,private toastr: ToastrService,
    private conj_service:ConjointService,private enf_service:EnfantService,private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    ) { 
      this.addStatutFacture=new IPM_Statut_Facture();
    }
    listemploye: Employe[];
    Employe:Employe[];
    matricule: string;
    reference: string;
    message: Employe;
    id: number;
    ide: number;
    selectedFile: any;
    userFile: any;
    imagePath: any;
    imgURL: any;
    file: any;
    listFacture:Facture[];
    arrayBuffer: any;
     taux_ipm;
     messagefacture:any;
     p:any;
     Factures =new Facture();
     date_facture;
     idfacture;
     validerFact:boolean=false
     reception;
  ngOnInit(): void {

////////////////
    let date = new Date(2016, 1, 28);
   if (date.setDate(date.getMonth() + 2 +date.getDate() +15))
    if(date.getTimezoneOffset())
    {
        
      console.log( date );
      alert(date);
    }
    else
    {
      console.log("******************************************")
      // alert("**********Temps****************")
    }
 

     this.createForm(); 

     this.pres_service.getAllPrestataires().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestataire = pres;
        console.log(this.listPrestataire);
      }
    );

    let AllPrestations=[];
    this.prestation.getAllPrestation().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestation = pres;
        for(let i =0; i<this.listPrestation.length; i++){
          let emmployesdansPanier=this.listPrestation[i].code_prestation;
          //mettre les employes  dans la variable tableau avec tous les employes
          AllPrestations.push(emmployesdansPanier);
          console.log(AllPrestations);
        }
        //  this.listPrestation.forEach(element =>{
        //    element.code_prestation
        //    console.log(element.code_prestation);
        //  })
        //console.log(this.listPrestation);
      }
    );
  }
  createForm(){
    this.factureForm = this.builder.group({ 
      
      idfacture:[null],
      // numerofacture:[0,Validators.required],
      //prestation:[''],
      Montant:[null,Validators.required],
     // participant:[''],
     Matricule:[null,Validators.required],
      //Taux_ipm:[null,Validators.required],
      //Charge_ipm:[null,Validators.required],
      //Charge_agent:[null,Validators.required],
      //Prestataires:['',Validators.required],
      Code_acte:[null,Validators.required],
     // date_facture:[null],
      //date_saisie:[null],
      date_prestation:[null],
      
      
     // libelleStructure:[''],
     // active:[false,Validators.required]
      
    });

  } 
  //////////////////Fonction pour choisir le libelle de la prestation
  addToCart(product: IPM_Details_Facture) {
    this.items.push(product);
  }
  getnom(pret){
    console.log(pret)
    this.prestation_choisi=pret.libelle;
    this.id_prestation_choisi=pret.code_prestation;
    this.agree=pret.taux_agrees
    this.non_agree=pret.taux_non_agrees
   this.Jsonprestations=pret;
   if(this.val==1){
    this.taux_ipm=this.agree
    console.log(this.taux_ipm,"agreer")
    //this.part_imp=(5000*this.taux_ipm)/100
   // this.part_patient=5000-(5000*this.taux_ipm)/100
    

  }else console.log(this.non_agree)
  this.taux_ipm=this.non_agree
    console.log(this.ipm_prestations);
    console.log(this.id_prestation_choisi);
    let detailsFac =[];
    for(let i =0; i<this.id_prestation_choisi; i++){
     let DetailsePannier=this.id_prestation_choisi[i];
     //mettre les montants  dans la variable tableau avec tous les montants
     detailsFac.push(DetailsePannier);
     console.log(detailsFac);
   }
  }

  getnomprestataire(prest){
    console.log(prest,prest.nom_prestataire)
    this.prestataire_choisi=prest.nom_prestataire;
    this.id_prest_choisi=prest.code_prestataire;
    this.val=prest.code_categorie_pretataire
    //this.part_imp=(5000*this.taux_ipm)/100
     this.jsonPrest=prest

    console.log(this.prestataire_choisi,this.taux_ipm,"non agrreer")
    this.ipm_prestataires.code_prestataire=this.id_prest_choisi;
  }
  public findByMatricules(){
    ///////Rechercher l'employé
  this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
    data=>{this.message = data;
      this.matr=this.message.idemp;
    console.log(this.matr);
    this.enfant=this.message;
    console.log(this.enfant);
    ///////Rechercher les enfants en fontion de l'employé
    this.enf_service.listeEnfant(this.message.idemp).subscribe(
      enfs => {      
        this.enfants = enfs;
        console.log(this.enfants)
      });
    ///////Rechercher les conjoints en fontion de l'employé
      this.conj_service.listeConjoint(this.message.idemp).subscribe(
        conjs => {
           
          this.conjoints = conjs;
          console.log(this.conjoints)
        });
    
    if(this.message){
      this.showNotification('top','center',1,'<b>agent existe</b> :')
      console.log(this.message);
    }
  else if(!this.message){
      console.log("not existe");
      this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
    }
  }
    );
  
  
  
}
public findByMatricule() {

  this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
    data => {
      this.message = data;
      //     console.log(this.message.idemp);
      if (this.message) {
        this.showNotification('top', 'center', 1, '<b>agent existe</b> :')
        console.log(this.message);
      }
      else if (!this.message) {
        console.log("not existe");
        this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :")
      }
    }
  );



}
showNotification(from: any, align: any, idtype: any, note) {
  const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

  //const color = Math.floor((Math.random() * 6) + 1);

  $.notify({
    icon: 'notifications',
    message: note
  }, {
    type: type[idtype],
    timer: 2000,
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
  ///////////////////Save Panier
  addDetails() {
    const detailsfact= new IPM_Details_Facture(); 
      detailsfact.matricule= this.message.matricule,

     // detailsfact.numerofacture=this.factureForm.get('numerofacture').value,
      //detailsfact.date_facture=this.date_facture,
      detailsfact.datePrestation=this.factureForm.get('date_prestation').value;
      console.log(detailsfact.datePrestation);
      detailsfact.ipm_employe= this.message;
       //detailsfact.ipm_prestation.libelle=this.prestation_choisi; 
      // detailsfact.ipm_prestation.code_prestation=this.id_prestation_choisi;
      detailsfact.part_patient = (this.factureForm.get('Montant').value)-((this.factureForm.get('Montant').value)*this.taux_ipm)/100
    // facture.tarification = this.taux_ipm;
    console.log(detailsfact.part_patient);
    detailsfact.taux_ipm=this.taux_ipm;
    detailsfact.part_ipm =((this.factureForm.get('Montant').value)*this.taux_ipm)/100
    console.log(detailsfact.part_ipm);
    detailsfact.code_acte = this.factureForm.get('Code_acte').value;
        detailsfact.montant_facture=this.factureForm.get('Montant').value;
        // detailsfacture.ipm_employe= this.message;
        //JSON.parse(JSON.stringify(this.ipm_employes))      
        let f=detailsfact;
        f.ipm_prestation=JSON.parse(JSON.stringify(this.Jsonprestations));
        //f.ipm_prestation=this.id_prestation_choisi;
        console.log(f);
        this.panier.push(f);
        console.log(this.panier);
       // window.alert("details ajouter avec success");
        for(let key in this.factureForm.controls) {
              let control = this.factureForm.get(key);
              control.get('');
              control.updateValueAndValidity();
           }
            this.updateTotal();
    
  }

  ////////////////////Supprimer Details
  deleteDetails(index: number) {
      this.panier.splice(index, 1);
      this.updateTotal();
    }
////////////////edit 
editDetails(index: number) { 
  console.log(index);
  this.panier[index]
  console.log(this.panier[index]);
  this.dataa=this.panier[index];
    (this.factureForm.get('montant_facture')).value;
    (this.factureForm.get('matricule')).value;
    (this.factureForm.get('date_facture')).value;
    this.panier.splice(index, 1);
    this.updateTotal();
  }
  ///Calcul du total 
 updateTotal() {
     this.total = 0;
     this.totalChargeIpm=0;
     this.totalChargeAgent=0;
     for(let element of this.panier) {
      this.total += element.montant_facture;
      console.log(this.total);
      this.totalChargeIpm+=element.part_ipm;
      this.totalChargeAgent+=element.part_patient;

    }
    
  }
  ajoutFacture(){
    //let Facture :Array<Facture>=[];
    this.Factures.ipm_prestataire =JSON.parse(JSON.stringify(this.jsonPrest));
    this.Factures.montantTotal=this.total
    this.Factures.part_ipm=this.totalChargeIpm
    this.Factures.part_patient=this.totalChargeAgent
    this.Factures.numerofacture=this.numerofacture
    this.Factures.dateFacture=this.date_facture
    this.Factures.DateReception=this.reception
    this.Factures.dateSaisie=new Date();
    this.addStatutFacture.idStatutFacture=1
    this.Factures.ipmStatutFacture=JSON.parse(JSON.stringify(this.addStatutFacture))
    console.log(this.jsonPrest)
    console.log(this.ipm_prestataires);

    
   //this.Factures.ipm_prestataire=JSON.parse(JSON.stringify(this.ipm_prestataires));
    console.log(this.Factures);
    //this.donnee=JSON.parse(JSON.stringify(this.Factures))
     this.fact_service.AjoutFacture(this.Factures).subscribe(
      (result:string)=>{console.log(result);
        this.idfacture=result
      this.Factures.idfacture=parseInt(result)
      this.factuGlobale=this.Factures
        console.log(this.Factures);

       
      for (let i of this.panier) {
      
          i.ipmFacture=JSON.parse(JSON.stringify(this.Factures));
        }
          console.log(this.Factures, this.panier);
       
    //this.panier.ipmFacture=this.Factures
         console.log(this.panier);
      this.fact_service.AjoutDetailsFacture(this.panier).subscribe(data=>{
        this.validerFact=true
        
        this.showALERTE('top', 'center')
       },
       err=>{
        this.showALERTE2('top', 'center')

       })
     
    }
    );

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