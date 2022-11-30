import { DOCUMENT, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
import { IPM_Bon_Pharmaceutique } from 'src/app/Models/IPM_Bon_Pharmaceutique';
import {DatePipe} from '@angular/common';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonPharmacieService } from 'src/app/Services/bon-pharmacie.service';
import { BonService } from 'src/app/Services/bon.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
declare var $:any
@Component({
  selector: 'app-liste-bons',
  templateUrl: './liste-bons.component.html',
  styleUrls: ['./liste-bons.component.css']
})
export class ListeBonsComponent implements OnInit {
  public tableData: TableData;
 employes : Array<any>=[];
 lprestataires:Prestataire[];
 prestataires:Prestataire[];
 conjoints : Array<any>=[];
  nom_conjoint:string;
  prenom_conjoint:string;
 //////////////////////-----Recuperation Conjoints/////////////////////
 conjoint: Conjoint= new Conjoint();
 ide : number;
 addPrestataire :Prestataire;
 currentprestataire=new Prestataire();
 enfant: Enfant= new Enfant();
  currentemploye: Employe = new Employe();
  matricule:string;
  reference:string;
  message:any;
  code_presta:number;
  id_enfant:number;
  //id_conjoint:number;
  messageconjoint:Conjoint=new Conjoint();
  messageenfant;
  employe: Employe[];
  enfants:any[]=[];
  id : number;
  bonss : any;
  iden:number;
  idp : number;
  today= new Date();
  jstoday = '';
  bons: Array<any>=[];
  designation;
  prix_unitaire;
  nombre_article;
  matr:string;
  listBon;
  //dateform =new Date();
  b:IPM_Bon=new IPM_Bon(0,"",null,null,null,null,null,null);
  bon:IPM_Bon_Pharmaceutique=new IPM_Bon_Pharmaceutique(0,0,null,"",null,null,"",null,null,null,null,null,null,"",null)
  nomm:string;
  p: any;
  addconjoint:Conjoint;
  addenfant:Enfant;
  idbconj: any;
  idbenf: any;
  Ageconjoint;
  ageE: number;
  Ageconjoin: number;
  selectOrdonne: any;
  OrdonnanceURL: string | ArrayBuffer;
  prestatair: any;
  AgeEnfant: number;
  AgeConjoint: number;
  desactive:boolean=false
  maDate: Date = new Date();
  strBEm: string;
  mois;
  numEB: any;
  numBEnf: any;
  numBEm: string;
  valInt;
  constructor(@Inject(LOCALE_ID) private dateform: string,private emp_service:EmployeService,private router: Router,
    private route : ActivatedRoute,private pres_service:PrestataireService,
    private bonpharma:BonPharmacieService,private bont:BonService,  
        private conj_service:ConjointService,private enf_service:EnfantService,private toastr: ToastrService,
        private datePipe:DatePipe) { 
      this.jstoday = formatDate(Date.now(),'dd-MM-yyyy',this.dateform);
      this.addPrestataire=new Prestataire();
      this.addconjoint= new Conjoint();
      this.addenfant =new Enfant();
    }

  ngOnInit(): void {
    // this.getPrestat();
     // debugger
    this.pres_service.getTypePestataires('Pharmacie').subscribe(
      pres => {
       // console.log(cat);
        this.lprestataires = pres;
        console.log(this.lprestataires);
      }
    )
   // this.b.ipm_employe=this.currentemploye;
    this.b.ipm_prestataire=this.currentprestataire;
    this.ide=this.route.snapshot.params['id'];
    this.bont.listeBon(this.ide).subscribe(
     
      bonsss => {
        console.log(bonsss);
        this.b= bonsss;
        this.b.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
        console.log(this.bons)
      }
    );
       
       
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        this.currentemploye = result;
      }
    );

  }
  f:boolean;
  getnom(prest){
    this.prestatair = prest;
    this.pres_service.getTypePestataires('Pharmacie').subscribe(
      pres => {
        console.log(prest.code_prestataire);
        console.log(prest.nom_prestataire);
        this.prestataires = pres;
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
   /////////////Recuperer un enfant pour lui choisir bon
getenfantbon(enfant){
 this.idbenf=enfant.idenf;
 this.enf_service.getEnfantById(enfant.idenf).subscribe(
  data=>{this. messageenfant=data
  console.log(this.messageenfant)
 // const date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
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
  this.idbconj=conjoint.idconj
 this.conj_service.getConjointById(conjoint.idconj).subscribe(
  data=>{this.messageconjoint=data
  console.log(data)
  const dateC =this.messageconjoint.date_naiss_conj
  console.log(dateC)
  const bC=new Date(dateC)
  const today=new Date();
this.AgeConjoint = today.getFullYear() - bC.getFullYear();
const mC = today.getMonth() - bC.getMonth();
console.log(this.message.date_nais);
console.log(mC);

if (mC < 0 || (mC === 0 && today.getDate() < bC.getDate())) {
this.AgeConjoint--;
// console.log(this.messageconjoint.date_naiss_conj);
}
console.log(this.AgeConjoint);
 // if (this.messageconjoint.date_naiss_conj) {
    //convert date again to type Date
    
      
      //convert date again to type Date
      const date =this.messageconjoint.date_naiss_conj
      console.log(date)
      const b=new Date(date)
      console.log(b)
      console.log(date)
      console.log(b)
      const ttoday=new Date();
     // const timeDiff = Math.abs(Date.now() - bdate.getTime());
      //this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
   
    
this.Ageconjoin = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.messageconjoint.date_naiss_conj);
 console.log(this.message.date_naiss_conj);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.Ageconjoin--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.Ageconjoin);

    
  
  })}
  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(result=>
      {
        this.currentemploye=result;  
        this.router.navigate(['/gestion-bons/Ajouterbons/'+employe.idemp]);
             
    });   
  }
  getPrestBy(prest){
    this.pres_service.getPrestataireById(prest.code_prestataire).subscribe(result=>
     {
       this.currentprestataire=result;
       console.log(this.currentprestataire.nom_prestataire);
       this.router.navigate(['/gestion-bons/Ajouterbons/'+prest.idpres]);
     } );
  }
  ///////////////////Recuperer les prestataires
  // public getPrestat(){
  //   this.pres_service.getAllPestataires().subscribe(
  //     pres => {
  //      // console.log(cat);
  //       this.prestataires = pres;
  //       console.log(this.prestataires);
  //     }
  //   )
  // }

  public findByMatricule(){
      ///////Rechercher l'employé
  debugger
    this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data=>{
        
        if(data.statut==false) { this.message = data;
          console.log(this.message);}else{
            console.log(this.message)
          this.showNotification('top','center',3,"<b>agent de numero matricule "+this.matricule+" ne beneficie plus de L'IPM</b> :")
        }
      this.emp_service.getlistBon(this.message.idemp).subscribe(res=>{
        this.listBon=res
        console.log(res)

      })
        const date =this.message.date_nais
        console.log(date)
        const b=new Date(date)
        console.log(this.message.date_nais)
        console.log(date)
        console.log(b)
        const ttoday=new Date();
       // const timeDiff = Math.abs(Date.now() - bdate.getTime());
        //this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
     
      
  this.ageE = ttoday.getFullYear() - b.getFullYear();
   const m = ttoday.getMonth() - b.getMonth();
   console.log(this.message.date_nais);
   if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
     this.ageE--;
   }
        this.matr=this.message.idemp
      console.log(this.ageE);
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
  showNotification(from: any, align: any, idtype:any,note ) {
    const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

    //const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
        icon: 'notifications',
        message: note
    }, {
        type: type[idtype],
        timer: 10000,
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
nom;
/////////////////Save Bon Employé
public BonNow(){
  const dayBEm=new Date();
//   this.prenomEm=this.message.prenom
// this.nomEm=this.message.nom
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
//let strBEm=dayBEm.getFullYear().toString()
this.numBEm=0+''+dayBEm.getDate()+''+this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.valInt
console.log(this.numBEm);
  this.bon.ipm_employe=this.message;
  
  this.addPrestataire.code_prestataire=this.idp;
  this.bon.ipm_prestataire=this.prestatair;
  // this.bon.numero_bon_pharmacie=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
  // +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
  // '' +this.ageE);
  console.log(this.bon.numero_bon_pharmacie);

  // this.bont.AjoutBon(this.b).subscribe(
  //   (data)=>{this.message=data});
  console.log(this.b);
  console.log( this.b.ipm_employe);
  console.log(this.b.ipm_prestataire);
// this.router.navigate(['/gestion-bons/Listebons']);
console.log(this.designation,this.nombre_article);
   this.bon.designation=this.designation;
   this.bon.dateEtablissement=new Date();
  this.bon.nombre_article=this.nombre_article;
  //this.bon.prix_unitaire=this.prix_unitaire;
  this.bon.ordonnance=this.selectOrdonne.name
   this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(
  
       (data)=>{
         
          //this.router.navigate(['/gestion-bons/Listebons'])
        });
          this.bonpharma.uploadFile(this.selectOrdonne).subscribe( (data)=>{})
       
       console.log(this.bon.ipm_prestataire)
       console.log(this.bon)
      
      
}

/////////////////Save Bon Conjoint
public BonConjoint(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bon.ipm_employe=this.message;
   
   this.addPrestataire.code_prestataire=this.idp;
   this.bon.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addconjoint.idconj=this.idbconj
   this.bon.ipm_conjoint=JSON.parse(JSON.stringify(this.addconjoint))
  this.bon.dateEtablissement=new Date();
   console.log(this.bon.ipm_conjoint);
   console.log(this.b);
   console.log( this.b.ipm_employe);
   console.log(this.b.ipm_prestataire);
 // this.router.navigate(['/gestion-bons/Listebons']);
 console.log(this.designation,this.nombre_article);
    this.bon.designation=this.designation;
   this.bon.nombre_article=this.nombre_article;
   //this.bon.prix_unitaire=this.prix_unitaire;
   this.bon.ordonnance=this.selectOrdonne.name
    this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(
        (data)=>{ this.router.navigate(['/gestion-bons/Listebons'])
      });
      this.bonpharma.uploadFile(this.selectOrdonne).subscribe( (data)=>{})

        console.log(this.bon.ipm_prestataire)
        console.log(this.bon)
       
       
 }

 /////////////////Save Bon Enfants
public BonEnfant(){
  // this.nom=this.bon.ipm_employe.prenom
   this.bon.ipm_employe=this.message;
   
   this.addPrestataire.code_prestataire=this.idp;
   this.bon.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   this.addenfant.idenf=this.idbenf
   this.bon.ipm_enfant=JSON.parse(JSON.stringify(this.addenfant))
   this.bon.dateEtablissement=new Date();
   console.log(this.bon.ipm_enfant);
   console.log(this.b);
   console.log( this.b.ipm_employe);
   console.log(this.b.ipm_prestataire);
 // this.router.navigate(['/gestion-bons/Listebons']);
 console.log(this.designation,this.nombre_article);
    this.bon.designation=this.designation;
   this.bon.nombre_article=this.nombre_article;
   //this.bon.prix_unitaire=this.prix_unitaire;
   this.bon.ordonnance=this.selectOrdonne.name
    this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(
        (data)=>{ this.router.navigate(['/gestion-bons/Listebons'])
      });
      this.bonpharma.uploadFile(this.selectOrdonne).subscribe( (data)=>{})
        console.log(this.bon.ipm_prestataire)
        console.log(this.bon)
       
       
 }
///////////////////////// Imprimer Bon Employé
upload(){
  console.log(this.message)
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  let col=[["Quantité","Designation","P.unitaire","Montant"]]
  let rows=[]
    if(this.bon.ipm_employe=this.message.idemp){
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
      }
    //rows.push(tmp)
     //rows.push()

   }

   var ipm1=this.message.prenom
   var ipm2=this.message.nom
   var ipm3=this.p
   var Pmalade=this.message.prenom
   var Narticle=this.nombre_article
   var Ncarnet=this.message.numero_carnet
   var ipm4=this.message.ipmService?.type_service
   var ipm=this.message.matricule
   var numBon=this.bon.numero_bon_pharmacie
   
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
     doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
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
         doc.text("N Carnet :",15,85)
         doc.text(""+Ncarnet,40,85)
         doc.text("N Bon :",55,85)
         doc.text(""+numBon,40,85)
         doc.text("Nombre D'article :",120,85)
         doc.text(""+Narticle,160,85)

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
  
  doc.save("bonpharmacie.pdf");
  // let data = document.getElementById('noticeModal'); 
  // const printContents = document.getElementById('noticeModal').innerHTML;
  //    const originalContents = document.body.innerHTML;
  //    document.body.innerHTML = printContents;
  //    window.print();
  //    document.body.innerHTML = originalContents;
}
///////////////////////// Imprimer Bon Conjoint
uploadConjoint(){
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  
   let col=[["Quantité","Designation","P.unitaire","Montant"]]
  let rows=[]
    if(this.bon.ipm_employe=this.message.idemp){
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
      }
    }
   var ipm1=this.message?.prenom
   var ipm2=this.message?.nom
   var ipm3=this.p
   var ipm4=this.message.ipmService?.type_service
   var ipm5=this.messageconjoint?.prenom_conjoint
   var ipm6=this.messageconjoint?.nom_conjoint
   var ipm= this.message.matricule
   var Narticle=this.nombre_article
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
     doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
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
         doc.text("Nombre D'article :",120,85)
         doc.text(""+Narticle,160,85)
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
///////////////////////// Imprimer Bon Enfant
uploadEnfant(){
  let doc=new jsPDF();
  var imgData = '/assets/img_poste/header1.png'
  
   let col=[["Quantité","Designation","P.unitaire","Montant"]]
  let rows=[]
    if(this.bon.ipm_employe=this.message.idemp){
      //let tmp=[this.designation,this.nombre_article]
      for (let index = 1; index < 10; index++) {
        let tmp=[]
        rows.push(tmp)
      }
    }

   var ipm1=this.message?.prenom
   var ipm2=this.message?.nom
   var ipm3=this.p
   var ipm4=this.message.ipm_service?.type_service
   var ipm5=this.messageenfant.prenom_enfant
   var ipm6=this.messageenfant?.nom_enfant
   var ipm= this.message.matricule
   var Narticle=this.nombre_article
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
     doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
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
         doc.text("Nombre D'article :",120,85)
         doc.text(""+Narticle,160,85)
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
