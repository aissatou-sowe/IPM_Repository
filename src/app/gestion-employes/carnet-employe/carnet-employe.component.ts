import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Categorie } from 'src/app/Models/Categorie';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { Service } from 'src/app/Models/Service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import {DatePipe,formatDate} from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { Entity } from 'src/app/Models/Entity';
import { FormBuilder, Validators } from '@angular/forms';
import { event } from 'jquery';
import { ModifierEmployesComponent } from '../modifier-employes/modifier-employes.component';
import { ToastrService } from 'ngx-toastr';
declare var $:any
@Component({
  selector: 'app-carnet-employe',
  templateUrl: './carnet-employe.component.html',
  styleUrls: ['./carnet-employe.component.css']
})
export class CarnetEmployeComponent implements OnInit {
//Objet du Conjoint et l'enfant
uploadProgress:number;
uploadSub: Subscription;
  conjoint: Conjoint= new Conjoint();
  enfant: Enfant= new Enfant();
  //enfantt: Enfant= new Enfant(0,"","",null,"","",null);
  ide : number;
  employe: Employe[];
  message: any;
  //Objets lister les conjoints
  public tableData: TableData;
  conjoints : Array<any>=[];
  nom_conjoint:string;
  prenom_conjoint:string;
  currentconjoint: Conjoint= new Conjoint();
  /////Objets lister Enfants///////
  public tableDatas: TableData;
  iden:number;
  enfants : Array<any>=[];
  currentenfant: Enfant= new Enfant();
  myMessage="Salut votre enregistrement est effectue !!! "
  myId=0 ;

  /////////
  currentemploye: Employe= new Employe();
  id : number;
  service: Service[];
  categorie: Categorie[];
  servi:number;
  cate:number;
  addService : Service;
  addCategorie : Categorie;
  addEmploye:Employe;
  selectedFile: any;
  selectCertif:any;
  selectExtrait:any;
  selectdFile: any;
  selectedFileextrait: any;
  userFile: any;
  imagePath: any;
  imgURL: any;
  imgURL2: any;
  today= new Date();
  jstoday :string;
  datenaissance:string;
  d;
  sexM;
  sexee
  dateNaiscoinjoint:Date;
  agenfant: number;
  agemploye: number;
  entity: Entity[];
  sexe=[{id:1,value:"Masculin"},
  {id:2,value:"Féminin"}
  ]
  FormControlEnfant: any;
  sexChoisi: any;
  sexconjChoisi: any;
  CertifURL: string | ArrayBuffer;
  ExtraitURL: string | ArrayBuffer;
  sexe_conjoint: string;
  date_naiss_conj: string;
  lieu_naiss_conj: string;
  telephone: string;
  nom_enfant: string;
  prenom_enfant: string;
  sexe_enfant: string;
  date_naiss_enfant: string;
  lieu_naiss_enfant: string;
  adresse: string;
  imgEnfant: string;
  selectChemin: any;
  CheminURL: string | ArrayBuffer;
  selectEditphoto: any;
  constructor(@Inject(LOCALE_ID) private locale: string,private toastr: ToastrService,
  private emp_service: EmployeService,
   private conj_service:ConjointService,
   private enf_service:EnfantService, private datePipe:DatePipe,
    private router: Router,
    private route : ActivatedRoute,private fb :FormBuilder ) { 
      this.jstoday = formatDate(Date.now(),'dd-MM-yyyy',this.locale);
      this.addCategorie=new Categorie();
      this.addService=new Service();
      this.addEmploye=new Employe()
    }

  ngOnInit(): void {
    //this.initForm()
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    $('.modal').on('shown.bs.modal', function () {
      mainPanel.classList.add('no-scroll');
    })
    $('.modal').on('hidden.bs.modal', function () {
      mainPanel.classList.remove('no-scroll');
    })
    this.getCategorie();
    this.getService(); 
    this.getEmploye();
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        this.currentemploye = result;
        console.log(result)
        //const ttoday=new Date();
        //const birthDate = new Date(this.currentemploye.date_nais);
        if (this.currentemploye.date_nais) {
          console.log(this.currentemploye.date_nais)
          let date=this.currentemploye.date_nais
          //convert date again to type Date
          const bdate = new Date(date);
          console.log(date)
          const ttoday=new Date();
         // const timeDiff = Math.abs(Date.now() - bdate.getTime());
          //this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
         
        console.log(this.agemploye);
    this.agemploye = ttoday.getFullYear() - bdate.getFullYear();
     const m = ttoday.getMonth() - bdate.getMonth();

     if (m < 0 || (m === 0 && ttoday.getDate() < bdate.getDate())) {
       this.agemploye--;
     }
     console.log(this.agemploye);
  }
      }
    );
   ///
    //lister les conjoints en fonction de leur employe
    this.ide=this.route.snapshot.params['id'];
      this.conj_service.listeConjoint(this.ide).subscribe(
       conjs => {
          console.log(conjs);
         this.conjoints = conjs;
         console.log(this.conjoints)
       });
       //lister les enfants en fonction de leur employe
       this.iden=this.route.snapshot.params['id'];
      this.enf_service.listeEnfant(this.iden).subscribe(
       enfs => {
          console.log(enfs);
         this.enfants = enfs;
         this.enfants.forEach(ele =>{
          if (ele.date_nais_enfant) {
            //convert date again to type Date
            const bdate = new Date(ele.date_nais_enfant);
            const timeDiff = Math.abs(Date.now() - bdate.getTime());
            this.agenfant = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
          
          }
          console.log(this.agenfant)
          if (this.agenfant> 21) {
            console.log("Age atteinte impossible de ce beneficier à l'ipm :", this.agenfant)
            ele.active = false
            console.log(ele.active);
            console.log("age depasse")
          }
          else if (this.agenfant< 21) {
            console.log("Voici l'age :", this.agenfant)
            ele.active = true
            console.log(ele.active);
            console.log("age non depasse")

          }
         })
         console.log(this.enfants)
       });
  }
  routage(enfant){
    console.log(enfant.extrait_naiss)
    location.href='enfant.extrait_naiss'
   let reader = new FileReader();
 reader.readAsDataURL(enfant.extrait_naiss);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
 };
    //this.router.navigate(['enfant.extrait_naiss'])
  }
  sexeEnfant(sex){
    console.log(sex)
    this.sexChoisi=sex.value
  }
  // sexeConjoint(sex){
  //   this.sexconjChoisi=sex.value

  // }
 
  
  getConjointById(conjoint){
    this.conj_service.getConjointById(conjoint.idconj).subscribe(
      result => {
        this.currentconjoint = result;
        this.nom_conjoint= this.currentconjoint.nom_conjoint
        this.prenom_conjoint= this.currentconjoint.prenom_conjoint
        this.sexe_conjoint= this.currentconjoint.sexe_conjoint
        this.date_naiss_conj= this.currentconjoint.date_naiss_conj
        this.lieu_naiss_conj= this.currentconjoint.lieu_naiss_conj
        this.telephone= this.currentconjoint.telephone
        this.imgURL=this.currentconjoint.photos
        //this.date_naiss_conj= this.currentconjoint.date_naiss_conj


      }
    );
  }
  ModifConjointNow(){
    //this.currentconjoint.nom_conjoint
    console.log(this.currentconjoint.nom_conjoint)

    console.log(this.nom_conjoint)
    this.currentconjoint.nom_conjoint=this.nom_conjoint
    this.currentconjoint.prenom_conjoint=this.prenom_conjoint
    this.currentconjoint.sexe_conjoint=this.sexe_conjoint
    this.currentconjoint.date_naiss_conj=this.date_naiss_conj
    this.currentconjoint.lieu_naiss_conj=this.lieu_naiss_conj
    this.currentconjoint.telephone= this.telephone
    
    if(this.selectCertif){
      this.currentconjoint.certificat=this.selectCertif.name
    }
    if(this.selectedFile){
      this.currentconjoint.photos=this.selectedFile.name;
        }
    
      console.log(this.currentconjoint)
      this.conj_service.modifConjoint(this.currentconjoint).subscribe(data=>{this.ngOnInit()})
      this.conj_service.uploadFile(this.selectedFile).subscribe(
        (data)=> { 
          this.message=data ;
          console.log("the message ",data)
          
          return this.message
        })
        this.conj_service.uploadFileCertif(this.selectCertif).subscribe(
          (data)=> { 
            // this.message=data ;
            // console.log("the message ",data)
            
            // return this.message
          })




  }
  getEnfantById(enfant){
    this.enf_service.getEnfantById(enfant.idenf).subscribe(
      result => {
        this.enfant = result;
      
        this.nom_enfant= this.enfant.nom_enfant
        this.prenom_enfant= this.enfant.prenom_enfant
        this.sexe_enfant= this.enfant.sexe_enfant
        this.date_naiss_enfant= this.enfant.date_nais_enfant
        this.lieu_naiss_enfant= this.enfant.lieu_nais_enfant
        this.adresse= this.enfant.adresse
        this.imgURL=this.enfant.chemin
        
      }
    );
  }
  modifEnfant(){
    this.enfant.nom_enfant=this.nom_enfant
    this.enfant.prenom_enfant=this.prenom_enfant
    this.enfant.sexe_enfant=this.sexe_enfant
    this.enfant.date_nais_enfant=this.date_naiss_enfant
    this.enfant.lieu_nais_enfant=this.lieu_naiss_enfant
    this.enfant.adresse=this.adresse
    if(this.selectedFile){
      this.enfant.chemin=this.selectedFile.name
    }
   
    
    console.log(this.enfant);
    this.enf_service.modifEnfant(this.enfant).subscribe(data=>{this.ngOnInit()})
    if(this.selectedFile){
      this.enf_service.uploadFile(this.selectedFile).subscribe(
        (data)=> { 
          
        })  
        }
        if(this.selectExtrait){
          this.enf_service.uploadFileExtrait(this.selectExtrait).subscribe(
            (data)=> { 
              
              //console.log("the message",data)
              
              //return this.message
            })
                  }
      


  }
  ////////////----------------//////////////////
  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
        console.log(this.currentemploye.date_nais);
      }
    );
  }
   //Recuperer les employe au niveau  des conjoints
     public getEmploye(){
      this.conj_service.getEmploye().subscribe(
       conj=>{
        this.employe=conj;
       }
      )
     }
 
    public getService(){
      this.emp_service.getService().subscribe(
        serv => {
         // console.log(serv);
          this.service = serv;
         // console.log(this.service)
        }
      )
    }

    public getCategorie(){
      this.emp_service.getCategorie().subscribe(
        cat => {
         // console.log(cat);
          this.categorie = cat;
         // console.log(this.categorie)
        }
      )
    }
//Ajout du Conjoint de l'employé
    public ConjointNow(){
     
      this.conjoint.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
      console.log(this.conjoint);
      var date = this.datePipe.transform(this.conjoint.date_naiss_conj, "dd-MM-yyyy");
    this.conjoint.date_naiss_conj= date;
    this.conjoint.sexe_conjoint=this.sexChoisi
    console.log(this.conjoint)
      this.conjoint.photos=this.selectedFile.name;
      this.conjoint.certificat=this.selectCertif.name
      this.conj_service.AjoutConjoint(this.conjoint).subscribe(
        (data)=>this.message=data)
        this.conj_service.uploadFile(this.selectedFile).subscribe(
          (data)=> { 
            this.message=data ;
            console.log("the message ",data)
            
            return this.message
          })
          this.conj_service.uploadFileCertif(this.selectCertif).subscribe(
            (data)=> { 
              // this.message=data ;
              // console.log("the message ",data)
              
              // return this.message
            })
        if(!this.message){
          this.showNotification('top','center',1,'<b>conjoint ajouté</b> :')
         // console.log(this.message);
             this.router.navigate(['carnet-employe/:id']);
        }
      else if(this.message==null){
          console.log("not existe");
          this.showNotification('top','center',3,"<b>conjoint non ajouté</b> :")
        }
    
   
}
retourner(){
  this.router.navigate(['/gestion-employes/ListeEmployes']) ;

}
showNotification(from: any, align: any, idtype:any,note ) {
  const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

 // const color = Math.floor((Math.random() * 6) + 1);

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
//Fin de l'ajout des Conjoints de l'employé
//Ajout du Conjoint de l'employé
// initForm(){
// this.FormControlEnfant = this.fb.group({
//   nom_enfant: [null, Validators.required],
//   prenom_enfant: [null, Validators.required],
//   date_nais_enfant: [null, Validators.required],
//   lieu_nais_enfant: [null, Validators.required],
//   adresse: [null, Validators.required],
//   sexe_enfant: [null, Validators.required],
//   chemin: [null, Validators.required],

// });
// }
// public EnfantNow(){
    
//   this.enfant.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
//   //console.log(this.enfant);
//     //this.enfantt.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
//     console.log(this.enfant);
//     this.enfant.chemin=this.selectedFile.name;
//     console.log(this.enfant);
//     var date = this.datePipe.transform(this.FormControlEnfant.get("date_nais_enfant"), "dd-MM-yyyy");
//     this.enfant.date_nais_enfant= date;
//     this.enfant.nom_enfant=this.FormControlEnfant.get("nom_enfant").value;
//     this.enfant.prenom_enfant=this.FormControlEnfant.get("prenom_enfant").value;
//     this.enfant.lieu_nais_enfant=this.FormControlEnfant.get("lieu_nais_enfant").value;
//     this.enfant.adresse=this.FormControlEnfant.get("adresse").value;
//     this.enfant.sexe_enfant=this.FormControlEnfant.get("sexe").value;
//     console.log(this.enfant)
//     //this.enfant.extrait_naiss=this.selectedFileextrait.name;
//    this.enf_service.AjoutEnfant(this.enfant).subscribe(
//     (data)=> { 
//       this.message=data ;
//       console.log("the message ",data)
      
//       return this.message
//     })

//       this.enf_service.uploadFile(this.selectedFile).subscribe(
//         (data)=> { 
//           this.message=data ;
//           console.log("the message",data)
          
//           return this.message
//         })
//         // this.enf_service.uploadExtraitNaiss(this.selectedFileextrait).subscribe(
//         //   (data)=> { 
//         //     this.message=data ;
//         //     console.log("the message",data)
            
//         //     return this.message
//         //   })
//         //alert('Successfully.');
//     if(!this.message){
//       this.showNotification1('top','center',1,'<b>enfant ajouté</b> :')
//      // console.log(this.message);
//          this.router.navigate(['/carnet-employe/:id']);
//     }
//   else if(this.message==null){
//       console.log("not existe");
//       this.showNotification1('top','center',3,"<b>enfant non ajouté</b> :")
//     }
    


// }
modifPhoto(event:any){
  this.selectChemin = event.target.files[0];

  let readerr = new FileReader();
  readerr.readAsDataURL(event.target.files[0]);
  readerr.onload = (event) => {
    this.CheminURL = readerr.result;
  };

}
public EnfantNow(){
    
  this.enfant.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
  //console.log(this.enfant);
    //this.enfantt.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
    console.log(this.enfant);
    this.enfant.chemin=this.selectedFile.name;
    console.log(this.enfant);
    var date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
    this.enfant.date_nais_enfant= date;
    console.log(this.enfant)
    this.enfant.sexe_enfant=this.sexChoisi
    this.enfant.extrait_naiss=this.selectExtrait.name;
   this.enf_service.AjoutEnfant(this.enfant).subscribe(
    (data)=> { 
      this.message=data ;
      console.log("the message ",data)
      
      return this.message
    })

      this.enf_service.uploadFile(this.selectedFile).subscribe(
        (data)=> { 
          this.message=data ;
          console.log("the message",data)
          
          return this.message
        })
        this.enf_service.uploadFileExtrait(this.selectExtrait).subscribe(
          (data)=> { 
            this.enfants
            //console.log("the message",data)
            
            //return this.message
          })
        // this.enf_service.uploadExtraitNaiss(this.selectedFileextrait).subscribe(
        //   (data)=> { 
        //     this.message=data ;
        //     console.log("the message",data)
            
        //     return this.message
        //   })
        //alert('Successfully.');
    if(!this.message){
      this.showNotification1('top','center',1,'<b>enfant ajouté</b> :')
     // console.log(this.message);
         this.router.navigate(['/carnet-employe/:id']);
    }
  else if(this.message==null){
      console.log("not existe");
      this.showNotification1('top','center',3,"<b>enfant non ajouté</b> :")
    }
    


 }
/////////Entité
public getEntity() {
  this.emp_service.getEntity().subscribe(
    ent => {
      // console.log(cat);
      this.entity = ent;
       console.log(this.entity)
    }
  )
}
showNotification1(from: any, align: any, idtype:any,note ) {
const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

// const color = Math.floor((Math.random() * 6) + 1);

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
////////////////////----------/////////////////
//recuperer le fichier
getFile(event:any){
  console.log(event);
  this.selectedFile = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
  };

  //console.log("fichier selectionne")
}
selctExtrait(event:any){
  this.selectExtrait = event.target.files[0];

  let readerr = new FileReader();
  readerr.readAsDataURL(event.target.files[0]);
  readerr.onload = (event) => {
    this.ExtraitURL = readerr.result;
  };

}
selectCertificat(event:any){
  //selectCertif
  this.selectCertif = event.target.files[0];

  let readerr = new FileReader();
  readerr.readAsDataURL(event.target.files[0]);
  readerr.onload = (event) => {
    this.CertifURL = readerr.result;
  };
}
onFileChanged(event :any){
 // console.log(event);
  this.selectdFile = event.target.files[0];

  let readers = new FileReader();
  readers.readAsDataURL(event.target.files[0]);
  readers.onload = (evente2) => {
    this.imgURL2 = readers.result;
  };

}
image(){
  console.log(this.imgURL2);
  this.router.navigate(['this.imgURL2'])
}
//envoyer le fivhier au serveur


// onSelectFile(event){
//   if(event.target.files.length>0)
//   {
//      const file=event.target.files[0];
//      this.userFile=file;
//     // this.f["profile"].setValue(file);
//     var mimeType=event.target.files[0].type;
//     if(mimeType.match(/image\/*/)==null)
//     {
//       this.message="Only images are surrported.";
//       return ;
//     }
//     var reader = new FileReader();
//   this.imagePath=file;
//   reader.readAsDataURL(file);
//   reader.onload=(_event)=>  {
//     this.imageURL=reader.result;
//   }
//  }
// }
//envoyer le fivhier au serveur
// uploadFile(){
//   if (this.selectedFile != null){
//     this.enf_service.uploadFile(this.selectedFile).subscribe(
//       response => {
//         console.log(response);
//       },
//     error => {
//       console.log(error);
//     }
//     )
//   }
// }


/////////////////////
// dateOfBirth=this.currentemploye.date_nais;
// console.log(dateOfBirth);
// public ageFromDateOfBirthday(dateOfBirth: any): number {
//   const today = new Date();
//   console.log(dateOfBirth);
//   const birthDate = new Date(dateOfBirth);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const m = today.getMonth() - birthDate.getMonth();
//   console.log(today.getFullYear());
//   console.log( today.getMonth());
//   console.log(birthDate.getFullYear());
  
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   return age;
  
// }


/////////////////////Upload fichier 
fileChange(event) {
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
      let file: File = fileList[0];
        console.log(file);
      if (file.size== HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        console.log(this.uploadProgress);
      }
      
  }
}

//////////editPhoto
editphoto(event:any){
  this.selectEditphoto = event.target.files[0];

  let readers = new FileReader();
  readers.readAsDataURL(event.target.files[0]);
  readers.onload = (evente2) => {
    this.imgURL2 = readers.result;
  };

  
}

Modifier(){
  this.currentemploye.photo=this.selectEditphoto.name
  this.emp_service.ModifierEmploye(this.currentemploye).subscribe(
     () =>{
          this.emp_service.addUploadData(this.selectEditphoto).subscribe(
            (data) => {
              this.message = data;
              console.log("the message ", data)
              //return this.message
            })
         this.toastr.success("Modification Effectué avec succès")
     // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
     }, (error) =>{
      console.log(error);
     // alert("Probleme lors de la modification !");
      this.toastr.error("Erreur lors de la modification de l'image")
    }
   
  ); 

    
}

}