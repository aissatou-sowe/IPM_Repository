import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonService } from 'src/app/Services/bon.service';
import { BonlettreService } from 'src/app/Services/bonlettre.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import { PrestationService } from 'src/app/Services/prestation.service';
import { IPM_Bon_Consultation } from '../../Models/IPM_Bon_Consultation';
declare var $:any
@Component({
  selector: 'app-bon-consultation',
  templateUrl: './bon-consultation.component.html',
  styleUrls: ['./bon-consultation.component.css']
})
export class BonConsultationComponent implements OnInit {
  public tableData: TableData;
  employes : Array<any>=[];
  id : number;
  matricule:string;
  message:any;
  enfant: Enfant= new Enfant();
  enfants:any[]=[];
  prestataires:Prestataire[];
  conjoints : Array<any>=[];
  matr:string;
  currentemploye: Employe = new Employe();
  employe: Employe[];
  idbenf: any;
  enfChoisi: any;
  messageenfant: Enfant;
  conjChoisi: any;
  idbconj: any;
  listBon: any;
  listBonConj: any;
  numberBon: any;
  listBonEnf: any;
  listBonConjoint: any;
  messageconjoint: Conjoint;
  selectOrdonne: any;
  OrdonnanceURL: string | ArrayBuffer;
  p: any;
  prestationC:any;
  idp: any;
  lprestataires: Prestataire[];
  bonlettre: IPM_Bon_Consultation=new IPM_Bon_Consultation(0,"","","","",null,null,null,null,null,null,null,null,null);
  addPrestataire :Prestataire;
  motif:string;
  addconjoint:Conjoint;
   addenfant:Enfant;
  prestatair;
  AgeConjoint: number;
  AgeEnfant: number;
  AgeEmploye: number;
  desactive:boolean=false
  prestation: any;
  listPrestation: any;
  nombre_article: any;
  valInt: number;
  mois;
  str: string;
  strBEm: string;
  numBEm: string;
  numBC: string;
  numBEnf: string;
  constructor(private emp_service:EmployeService,private router: Router,private pres_service:PrestataireService,
    private route : ActivatedRoute,private conj_service:ConjointService,private enf_service:EnfantService,
    private datePipe:DatePipe,private Serviceprestation: PrestationService,
    private bon_lettreService:BonlettreService) { }

  ngOnInit(): void {
    this.pres_service.getTypePestataires('Hopital').subscribe(
      pres => {
       // console.log(cat);
        this.lprestataires = pres;
        console.log(this.lprestataires);
      }
    )
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        
        this.currentemploye = result;
      }
    );
    this.Serviceprestation.getAllPrestation().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestation = pres;
        // for (let i = 0; i < this.listPrestation.length; i++) {
        //   let emmployesdansPanier = this.listPrestation[i].code_prestation;
        //   //mettre les employes  dans la variable tableau avec tous les employes
        //   AllPrestations.push(emmployesdansPanier);
        //   console.log(AllPrestations);
        // }
        //  this.listPrestation.forEach(element =>{
        //    element.code_prestation
        //    console.log(element.code_prestation);
        //  })
        //console.log(this.listPrestation);
      }
    );
      
  }
  ////////////////////Rechercher par matricule 
  
  public findByMatricule(){
    ///////Rechercher l'employé
  this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
    data=>{
      if(data.statut==false) { this.message = data;

        this.matr=this.message.idemp
        console.log(this.matr);
        this.enfant=this.message;
        console.log(this.enfant);
        const date = this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
        //const date =this.message.date_nais
          console.log(date)
          const b=new Date(date)
          const ttoday=new Date();
        this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
     const m = ttoday.getMonth() - b.getMonth();
     console.log(this.message.date_nais);
     console.log(m);
    
     if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
       this.AgeEmploye--;
      // console.log(this.messageconjoint.date_naiss_conj);
     }
        console.log(this.message);}else{
          console.log(this.message)
        this.showNotification('top','center',3,"<b>agent de numero matricule "+this.matricule+" ne beneficie plus de L'IPM</b> :")
      }
    this.emp_service.getlistBonConsult(this.message.idemp).subscribe(res=>{
      this.listBon=res
      console.log(res)

    })
    
     
 console.log(this.AgeEmploye);
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
 /////////////Recuperer un enfant pour lui choisir bon
 getenfantbon(enfant){
  this.idbenf=enfant.idenf;
  this.enfChoisi=enfant
  this.enf_service.getEnfantById(enfant.idenf).subscribe(
   data=>{this. messageenfant=data
   console.log(this. messageenfant)
   const date =this.messageenfant.date_nais_enfant
      console.log(date)
      const b=new Date(date)
      const ttoday=new Date();
    this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.message.date_nais);
 console.log(ttoday);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.AgeEnfant--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.AgeEnfant);
   
   })}
  /////////////Recuperer un coinjoint pour lui choisir bon
 getconjointbon(conjoint){
   this.conjChoisi=conjoint
   this.idbconj=conjoint.idconj
  this.conj_service.getConjointById(conjoint.idconj).subscribe(
   data=>{this.messageconjoint=data
   console.log(this.messageconjoint)
   const date =this.messageconjoint.date_naiss_conj
      console.log(date)
      const b=new Date(date)
      const ttoday=new Date();
    this.AgeConjoint = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.message.date_nais);
 console.log(m);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.AgeConjoint--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.AgeConjoint);
   })}
   getPrestation(pret){
    this.prestation = pret;
    this.motif=this.prestation.libelle
    this.prestationC=this.prestation.libelle
    console.log(this.prestation,pret )
   }
   getnom(prest){
    this.prestatair = prest;
    console.log(this.prestatair);

    this.pres_service.getAllPrestataires().subscribe(
      pres => {
        
        console.log(prest.nom_prestataire);
       
        this.p=prest.nom_prestataire;
        this.idp=prest.code_prestataire;
        
        

      //   this.prestataires.forEach(element => {
      //     console.log(element.code_prestataire)
      //       if (element.code_prestataire=prest)
      //           {
      //             this.nomm=element.nom_prestataire;
      //             console.log(this.nomm);
      //           }
                
      //           else
      //           this.nomm!=prest
              
           
      //   });
      //   //console.log(this.prestataires);
       }
    )

  } 
  selectOrdonn(event:any){
    //selectCertif
    this.selectOrdonne = event.target.files[0];
  
    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.OrdonnanceURL = readerr.result;
    };
  }
  /////////////////////////////////Save Lettre de Garantie

public BonConsultation(){
  const dayBEm=new Date();
  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  {this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
   this.numBEm=0+''+dayBEm.getDate()+''+this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.valInt
   console.log(this.numBEm);
   this.bonlettre.numeroBon=this.numBEm
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   
   //this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=this.prestatair;
   this.bonlettre.ipm_prestation=this.prestation;

   this.bonlettre.motif=this.motif
   if (this.enfChoisi) {
    this.bonlettre.ipm_enfant=this.enfChoisi
    
  }
  if (this.conjChoisi) {
    this.bonlettre.ipm_conjoint=this.conjChoisi
    
  }
  //this.bonlettre.ordonnance=this.selectOrdonne.name
  console.log(this.bonlettre);
   this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(
    (data)=>{ 
  });

    //this.toastr.success( 'Ajouter Faite avec Success');
  
  // console.log( this.b.ipm_employe);
  // console.log(this.b.ipm_prestataire);
   
 // this.router.navigate(['/gestion-bons/Listebons']);
 console.log(this.motif);

}
  
  /////////////////Save Bon Conjoint
public BonConjoint(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   
   this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addconjoint.idconj=this.idbconj
   this.bonlettre.ipm_conjoint=JSON.parse(JSON.stringify(this.addconjoint))
 
   console.log(this.bonlettre.ipm_conjoint);
  
  // console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);
 // this.bonlettre.ordonnance=this.selectOrdonne.name
   //this.bon.prix_unitaire=this.prix_unitaire;
    this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(
        (data)=>{
      });
      
        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)
       
       
 }

 /////////////////Save Bon Enfants
public BonEnfant(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   
   this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addenfant.idenf=this.idbenf
   //this.bonlettre.ipm_enfant=JSON.parse(JSON.stringify(this.addenfant))
 
   console.log(this.bonlettre.ipm_enfant);
   
   //console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);

//this.bonlettre.ordonnance=this.selectOrdonne.name
    this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(
        (data)=>{ 
      });
        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)
       
    } 
showNotification(from: any, align: any, idtype:any,note ) {
  const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

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
///////////////////////// Imprimer Bon Employé
upload(){
  console.log(this.message)
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  let col=[["Consultation","Designation","Tarif","Montant"]]
  let rows=[]
    
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
      
    //rows.push(tmp)
     //rows.push()

   }

   var ipm1=this.message.prenom
   var ipm2=this.message.nom
   var ipm3=this.p
   var prestatio=this.prestationC
   var Pmalade=this.message.prenom
   var Narticle=this.nombre_article
   var Ncarnet=this.message.numero_carnet
   var ipm4=this.message.ipmService?.type_service
   var ipm=this.message.matricule
   
  autoTable(doc,{
    startY:100,
    head:col,
    body:rows,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"grid",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,180,20)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,105,20)
    doc.setFillColor(240,240,240)
     doc.rect(13,65,185,35,'F')
     //doc.setFillColor(240,240,240)
     
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     
     doc.text("BON DE COMMANDE",85,36)
     doc.text("POUR CONSULTATION",84,45)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,60)
          
      doc.text(date.toLocaleDateString("fr-FR"),172,60)
         doc.setFontSize(12)
         doc.text("Malade :",15,75)
         doc.text(ipm1,40,75)
         doc.setFontSize(12)
         doc.text("",90,75)
         doc.text(ipm2,80,75)
         doc.text("Matricule :",120,75)
         doc.text(ipm,140,75)
         doc.text("Prestation :",120,85)
         doc.text(prestatio,143,85)
         doc.text("N Carnet :",15,85)
         doc.text(""+Ncarnet,40,85)
        //  doc.text("Nombre D'article :",120,85)
        //  doc.text(""+Narticle,160,85)

        //  doc.setFontSize(12)
        //  doc.text("MALADE :",15,85)
        //  doc.text(ipm1,40,85)
        //  doc.text("",15,85)
        //  doc.text(ipm2,80,85)
         
         doc.setFontSize(12)
         doc.text("Prestataire :",15,95)
         doc.text(ipm3,40,95)
         doc.setFontSize(12)
         doc.text("Services :",93,95)
         doc.text(ipm4,113,95)
         doc.text("Total :",140,180)

     }
  });
  
  doc.save("bonConsultation.pdf");
  // let data = document.getElementById('noticeModal'); 
  // const printContents = document.getElementById('noticeModal').innerHTML;
  //    const originalContents = document.body.innerHTML;
  //    document.body.innerHTML = printContents;
  //    window.print();
  //    document.body.innerHTML = originalContents;
}
uploadConjoint(){
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  
   let col=[["Consultation","Designation","Tarif","Montant"]]
  let rows=[]
   // if(this.bon.ipm_employe=this.message.idemp){
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
     // }
    }
   var ipm1=this.message?.prenom
   var ipm2=this.message?.nom
   var ipm3=this.p
   var ipm4=this.message.ipmService?.type_service
   var ipm5=this.messageconjoint?.prenom_conjoint
   var ipm6=this.messageconjoint?.nom_conjoint
   var ipm= this.message.matricule
   var prestatio=this.prestationC
   var Ncarnet=this.message.numero_carnet
  autoTable(doc,{
    startY:100,
    head:col,
    body:rows,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"grid",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,180,20)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,105,20)
    doc.setFillColor(240,240,240)
     doc.rect(13,65,185,35,'F')
     //doc.setFillColor(240,240,240)
     
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     
     doc.text("BON DE COMMANDE",85,36)
     doc.text("POUR CONSULTATION",85,45)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,60)
          
      doc.text(date.toLocaleDateString("fr-FR"),172,60)
         doc.setFontSize(12)
         doc.text("Participant:",15,75)
         doc.text(ipm1,40,75)
         doc.text(ipm2,80,75) 
         doc.text("Matricule:",120,75)
         doc.text(ipm,140,75)
         doc.setFontSize(12)
         doc.text("N Carnet :",15,85)
         doc.text(""+Ncarnet,40,85)
         doc.text("Prestation :",120,85)
         doc.text(prestatio,160,85)
         doc.text("Malade:",15,95)
         doc.text(ipm5,40,95)
         doc.text(ipm6,80,95)
         doc.text("Prestataire :",120,95)
         doc.text(ipm3,145,95)
         doc.text("Total :",140,180)
         

     }
  });
  
  doc.save("bonpharmacie.pdf");
  // let data = document.getElementById('noticeModal'); 
  // const printContents = document.getElementById('noticeModal').innerHTML;
  //    const originalContents = document.body.innerHTML;
  //    document.body.innerHTML = printContents;
  //    window.print();
  //    document.body.innerHTML = originalContents;
}
uploadEnfant(){
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  
   let col=[["Consultation","Designation","Tarif","Montant"]]
  let rows=[]
   // if(this.bon.ipm_employe=this.message.idemp){
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
     // }
    }
   var ipm1=this.message?.prenom
   var ipm2=this.message?.nom
   var ipm3=this.p
   var ipm4=this.message.ipmService?.type_service
   var ipm5=this.messageenfant.prenom_enfant
   var ipm6=this.messageenfant?.nom_enfant
   var ipm= this.message.matricule
   var prestatio=this.prestationC
   var Ncarnet=this.message.numero_carnet
  autoTable(doc,{
    startY:100,
    head:col,
    body:rows,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"grid",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,180,20)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,105,20)
    doc.setFillColor(240,240,240)
     doc.rect(13,65,185,35,'F')
     //doc.setFillColor(240,240,240)
     
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     
     doc.text("BON DE COMMANDE",85,36)
     doc.text("POUR CONSULTATION",85,45)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,60)
          
      doc.text(date.toLocaleDateString("fr-FR"),172,60)
         doc.setFontSize(12)
         doc.text("Participant:",15,75)
         doc.text(ipm1,40,75)
         doc.text(ipm2,80,75) 
         doc.text("Matricule:",120,75)
         doc.text(ipm,140,75)
         doc.setFontSize(12)
         doc.text("N Carnet :",15,85)
         doc.text(""+Ncarnet,40,85)
         doc.text("Prestation :",120,85)
         doc.text(prestatio,160,85)
         doc.text("Malade:",15,95)
         doc.text(ipm5,40,95)
         doc.text(ipm6,80,95)
         doc.text("Prestataire :",120,95)
         doc.text(ipm3,145,95)
         doc.text("Total :",140,180)
         

     }
  });
  
  doc.save("bonpharmacie.pdf");
  // let data = document.getElementById('noticeModal'); 
  // const printContents = document.getElementById('noticeModal').innerHTML;
  //    const originalContents = document.body.innerHTML;
  //    document.body.innerHTML = printContents;
  //    window.print();
  //    document.body.innerHTML = originalContents;
}

}
