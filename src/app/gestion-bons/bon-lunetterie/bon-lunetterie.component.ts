import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { IPM_Bon_Lunetterie } from 'src/app/Models/IPM_Bon_Lunetterie';
//import { IPM_Bon_Lunetterie } from 'src/app/Models/IPM_Bon_Lunetterie';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonlettreService } from 'src/app/Services/bonlettre.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';

declare var $:any
@Component({
  selector: 'app-bon-lunetterie',
  templateUrl: './bon-lunetterie.component.html',
  styleUrls: ['./bon-lunetterie.component.css']
})
export class BonLunetterieComponent implements OnInit {
  employes : Array<any>=[];
  id : number;
  desactive:boolean=false
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
  messageconjoint: Conjoint;
  selectOrdonne: any;
  OrdonnanceURL: string | ArrayBuffer;
  p: any;
  idp: any;
  lprestataires: Prestataire[];
  addPrestataire :Prestataire;
  motif:string;
  addconjoint:Conjoint;
   addenfant:Enfant;
  prestatair;
  bonlettre:IPM_Bon_Lunetterie=new IPM_Bon_Lunetterie(0,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  matricule;
  AgeEmploye: number;
  AgeEnfant: number;
  AgeConjoint: any;
  selectOrDevit: any;
  maDate: Date = new Date();
  mess: Employe;
  mess1: string;
  constructor(private emp_service:EmployeService,private router: Router,private pres_service:PrestataireService,
    private route : ActivatedRoute,private conj_service:ConjointService,private enf_service:EnfantService,private datePipe:DatePipe,
    private bon_lettreService:BonlettreService) { }

  ngOnInit(): void {
    this.pres_service.getAllPrestataires().subscribe(
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
  }
  ////////////////////Rechercher par matricule 
  
  public findByMatricule(){
    ///////Rechercher l'employé
  this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
    data=>{
      this.mess=data;
      if (this.mess) {
        console.log(this.mess);         
      }
      else {
        this.mess1="yess"
        console.log("charlessssssssssssss")
        this.showNotification('top','center',3,"<b>matricule n'existe pas</b> :")
    }    
      if(data.statut==false)
       { this.message = data;
        console.log(this.message);}
        else{
          console.log(this.message)
          this.mess1="yess"
        this.showNotification('top','center',3,"<b>agent de numero matricule "+this.matricule+" ne beneficie plus de L'IPM</b> :")
      }
      this.matr=this.message.idemp
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
   //const date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
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
   //const date = this.datePipe.transform(this.messageconjoint.date_naiss_conj, "dd-MM-yyyy");
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
  selectDevit(event:any){
    //selectCertif
    this.selectOrDevit = event.target.files[0];
  
    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.OrdonnanceURL = readerr.result;
    };
  }
  /////////////////////////////////Save Lettre de Garantie

public BonConsultation(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.dateEtablissement=new Date();
   //this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=this.prestatair;
   this.bonlettre.devit=this.selectOrDevit.name
   this.bonlettre.motif=this.motif
   if (this.enfChoisi) {
    this.bonlettre.ipm_enfant=this.enfChoisi
    
  }
  if (this.conjChoisi) {
    this.bonlettre.ipm_conjoint=this.conjChoisi
    
  }
  //this.bonlettre.ordonnance=this.selectOrdonne.name
  console.log(this.bonlettre);
  this.bonlettre.numeroBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
   +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
   '' +this.AgeEmploye);
   if(this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&  this.bonlettre.numeroBon &&
    this.bonlettre.designation &&  this.bonlettre.nombre_article && this.bonlettre.motif &&this.bonlettre.dateEtablissement && this.bonlettre.devit){
   this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(
    (data)=>{});
    this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe( (data)=>{})
  this.desactive=true
 console.log(this.motif);
 this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :')
 let doc=new jsPDF();
 var imgData = '/assets/img_poste/header1.png'
 
   let col=[["Quantité","Designation","P.unitaire","Montant"]]
  let rows=[] 
  var ipm1=this.message?.prenom
  var ipm2=this.message?.nom
  console.log(ipm2);
  var prestataire=this.p
  var Ncarnet=this.message.numero_carnet
  var ipm3=this.message.ipmService?.type_service
  var ipm4=this.message?.matricule
  var ipm5=this.message?.reference
  var numBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
  +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
  '' +this.AgeEmploye);
  
  autoTable(doc,{
 //   startY:75,
 //   head:col,
 //    body:rows,
 //   margin:{ horizontal:10},
 //   styles:{overflow:"linebreak"},
 //   bodyStyles:{valign:"top"},
 //   theme:"grid",
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
     //RECTANGLE PAGE
     doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(10,100,190,170)
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     
     doc.text("BON DE COMMANDE",85,36)
     doc.text("POUR LUNETTERIE",85,45)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,60)
          
      doc.text(date.toLocaleDateString("fr-FR"),172,60)
         doc.setFontSize(12)
         doc.text("Malade:",15,75)
         doc.text(ipm1,40,75)
         doc.text(ipm2,80,75) 
         doc.text("Matricule:",120,75)
         doc.text(ipm4,140,75)
         doc.setFontSize(12)
         doc.text("N Carnet :",15,85)
         doc.text(""+Ncarnet,40,85)
         // doc.text("Nombre D'article :",120,85)
         // doc.text(""+Narticle,160,85)
         // doc.text("Malade:",15,95)
         // doc.text(ipm5,40,95)
         // doc.text(ipm6,80,95)
         doc.text("Service :",100,95)
         doc.text(ipm3,120,95)
         doc.text("Prestataire :",15,95)
         doc.text(prestataire,40,95)
         doc.text("N Bon :",55,85)
         doc.text(""+numBon,75,85)
       doc.setFontSize(12)
        doc.text("Monsieur,",15,110)
        doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
       //  doc.text("de:",15,125)
       //  doc.text("----------------------",15,130)
        doc.text("  institution :",15,130)
        doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
        doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
       
        doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
        doc.text("Le Gérant National",150,200)
        doc.setTextColor("#8C1C13")
        doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
        doc.text("--------------------------------------------------------------------------",15,250)
        doc.setTextColor("")
        doc.setFontSize(10)
        doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
        doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
        
    }
   })
 
 doc.output('dataurlnewwindow');
   }else {

    this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :")
   }

}
  
  /////////////////Save Bon Conjoint
public BonConjoint(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.dateEtablissement=new Date();
   this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addconjoint.idconj=this.idbconj
   this.bonlettre.ipm_conjoint=JSON.parse(JSON.stringify(this.addconjoint))
   this.bonlettre.numeroBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
   +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
   '' +this.AgeConjoint);
   console.log(this.bonlettre.ipm_conjoint);
  
  // console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);
 // this.bonlettre.ordonnance=this.selectOrdonne.name
   //this.bon.prix_unitaire=this.prix_unitaire;
    this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(
        (data)=>{
      });
      
        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)
       
       
 }

 /////////////////Save Bon Enfants
public BonEnfant(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.dateEtablissement=new Date();
   this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addenfant.idenf=this.idbenf
   //this.bonlettre.ipm_enfant=JSON.parse(JSON.stringify(this.addenfant))
 
   console.log(this.bonlettre.ipm_enfant);
   
   //console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);

//this.bonlettre.ordonnance=this.selectOrdonne.name
this.bonlettre.numeroBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
   +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
   '' +this.AgeEnfant);
    this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(
        (data)=>{ 
      });
        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)
       
    } 
    upload(){
      let doc=new jsPDF();
      var imgData = '/assets/img_poste/header1.png'
      
        let col=[["Quantité","Designation","P.unitaire","Montant"]]
       let rows=[] 
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
       console.log(ipm2);
       var prestataire=this.p
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.message?.reference
       var numBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
       +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
       '' +this.AgeEmploye);
       autoTable(doc,{
      //   startY:75,
      //   head:col,
      //    body:rows,
      //   margin:{ horizontal:10},
      //   styles:{overflow:"linebreak"},
      //   bodyStyles:{valign:"top"},
      //   theme:"grid",
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
          //RECTANGLE PAGE
          doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(10,100,190,170)
          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")
          doc.text("N Bon :",55,85)
          doc.text(""+numBon,75,85)
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
          doc.setTextColor("")
           const date=new Date()
              doc.setFontSize(13)
               doc.text("Dakar, le :",150,60)
               
           doc.text(date.toLocaleDateString("fr-FR"),172,60)
              doc.setFontSize(12)
              doc.text("Malade:",15,75)
              doc.text(ipm1,40,75)
              doc.text(ipm2,80,75) 
              doc.text("Matricule:",120,75)
              doc.text(ipm4,140,75)
              doc.setFontSize(12)
              doc.text("N Carnet :",15,85)
              doc.text(""+Ncarnet,40,85)
        
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            doc.setFontSize(12)
             doc.text("Monsieur,",15,110)
             doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            //  doc.text("de:",15,125)
            //  doc.text("----------------------",15,130)
             doc.text("  institution :",15,130)
             doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
             doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
             doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
             doc.text("Le Gérant National",150,200)
             doc.setTextColor("#8C1C13")
             doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
             doc.text("--------------------------------------------------------------------------",15,250)
             doc.setTextColor("")
             doc.setFontSize(10)
             doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
             doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
      doc.save("lettreGantie.pdf");
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
      
        let col=[["Quantité","Designation","P.unitaire","Montant"]]
       let rows=[] 
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
       console.log(ipm2);
       var prestataire=this.p
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.messageconjoint?.prenom_conjoint
       var ipm6=this.messageconjoint?.nom_conjoint
       autoTable(doc,{
      //   startY:75,
      //   head:col,
      //    body:rows,
      //   margin:{ horizontal:10},
      //   styles:{overflow:"linebreak"},
      //   bodyStyles:{valign:"top"},
      //   theme:"grid",
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
          //RECTANGLE PAGE
          doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(10,100,190,170)
          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")
          
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
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
              doc.text(ipm4,140,75)
              doc.text("Malade:",15,85)
              doc.text(ipm5,40,85)
              doc.text(ipm6,80,85) 
              doc.setFontSize(12)
              doc.text("N Carnet :",120,85)
              doc.text(""+Ncarnet,140,85)
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            doc.setFontSize(12)
             doc.text("Monsieur,",15,110)
             doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            //  doc.text("de:",15,125)
            //  doc.text("----------------------",15,130)
             doc.text("  institution :",15,130)
             doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
             doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
             doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
             doc.text("Le Gérant National",150,200)
             doc.setTextColor("#8C1C13")
             doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
             doc.text("--------------------------------------------------------------------------",15,250)
             doc.setTextColor("")
             doc.setFontSize(10)
             doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
             doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
      doc.save("lettreGantie.pdf");
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
      
        let col=[["Quantité","Designation","P.unitaire","Montant"]]
       let rows=[] 
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
       console.log(ipm2);
       var prestataire=this.p
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.messageenfant.prenom_enfant
       var ipm6=this.messageenfant?.nom_enfant
       autoTable(doc,{
      //   startY:75,
      //   head:col,
      //    body:rows,
      //   margin:{ horizontal:10},
      //   styles:{overflow:"linebreak"},
      //   bodyStyles:{valign:"top"},
      //   theme:"grid",
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
          //RECTANGLE PAGE
          doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(10,100,190,170)
          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")
          
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
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
              doc.text(ipm4,140,75)
              doc.text("Malade:",15,85)
              doc.text(ipm5,40,85)
              doc.text(ipm6,80,85) 
              doc.setFontSize(12)
              doc.text("N Carnet :",120,85)
              doc.text(""+Ncarnet,140,85)
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            doc.setFontSize(12)
             doc.text("Monsieur,",15,110)
             doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            //  doc.text("de:",15,125)
            //  doc.text("----------------------",15,130)
             doc.text("  institution :",15,130)
             doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
             doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
             doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
             doc.text("Le Gérant National",150,200)
             doc.setTextColor("#8C1C13")
             doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
             doc.text("--------------------------------------------------------------------------",15,250)
             doc.setTextColor("")
             doc.setFontSize(10)
             doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
             doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
      doc.save("lettreGantie.pdf");
      // let data = document.getElementById('noticeModal'); 
      // const printContents = document.getElementById('noticeModal').innerHTML;
      //    const originalContents = document.body.innerHTML;
      //    document.body.innerHTML = printContents;
      //    window.print();
      //    document.body.innerHTML = originalContents;
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

}
