import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { EmployeService } from 'src/app/Services/employe.service';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Entity } from 'src/app/Models/Entity';
import { Service } from 'src/app/Models/Service';
import { isNull, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { StatutEmployeService } from 'src/app/Services/statut-employe.service';
import { IPM_StatutEmploye } from 'src/app/Models/IPM_StatutEmploye';
import { ToastrService } from 'ngx-toastr';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare const $: any;
@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit /*,AfterViewInit*/ {
  listService:Service[];
  public tableData: TableData;
  public dataTable: DataTable;
  //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");
  selectFormControl = new FormControl('', Validators.required);
  employes:Employe[];
  nom: string;
  prenom: string;
  private selectedFile: any;
  imgURL: any;
  employe: Employe = new Employe();
  message: any;
  service: any[];
  categorie: Categorie[];
  statutEmploye:IPM_StatutEmploye[];
  entity: Entity[];
  enti: number;
  servi: number;
  cate: number;
  userFile;
  nomEntity: any;
  dateRecrute:string;
  addEntity: Entity;
  addService: Service;
  addCategorie: Categorie;
  addStatut:IPM_StatutEmploye;
  tempservice: any[];
  ipm_active: boolean;
  currentemploye: Employe = new Employe();
  statuEmp:IPM_StatutEmploye =new IPM_StatutEmploye();
  ages: number;
  date: Date;
  date1: Date;
  situation_familial=[{id:1,value:"Celibataire"},
  {id:2,value:"Marier"},
  {id:3,value:"Divorce"},
  {id:4,value:"Veuf"}
  ];
  sexe=[{id:1,value:"Masculin"},
  {id:2,value:"Féminin"}
  ]
  codeStat: number;
  desactive:boolean=false
  selectJustif: any;
  JustifURL: string | ArrayBuffer;
  constructor(private emp_service: EmployeService,private emp_statut:StatutEmployeService,
    private router: Router, private fb: FormBuilder,private toastr: ToastrService,
    private route: ActivatedRoute, private datePipe: DatePipe, 
    private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,) {
    this.addCategorie = new Categorie();
    this.addService = new Service();
    this.addEntity = new Entity(0, "", "");
    this.addStatut=new IPM_StatutEmploye();
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    ////////////////
    this.getCategorie();
    this.getService();
    this.getEntity();
    this.getStatutEmploye();
    ///////////////////
    this.dataTable = {
      headerRow: ['Numero Carnet', 'Nom', 'Prenom', 'Sexe', 'Matricule', 'Reference', 'Service', 'Categorie', 'Actions'],
      footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],

      dataRows: []
    };
    /////////////////////////
    this.emp_service.listeEmploye().subscribe(

      emps => {
        $(function () {
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
                "first": "Début",
                "previous": "Précédent",
                "next": "Suivant",
                "last": "Fin"
              },
              lengthMenu: "Afficher par _MENU_",
              infoFiltered: ""
            },


          });

        })

        console.log(emps);
        this.employes = emps;
        this.employes.forEach(ele => {
          if (ele.date_nais) {
            //convert date again to type Date 
            const bdate = new Date(ele.date_nais);
            const timeDiff = Math.abs(Date.now() - bdate.getTime());
            console.log(timeDiff);
            this.ages = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
          }
          if (this.ages > 60 || ele.ipmStatutEmploye.emplStatut=="Demission" 
          || ele.ipmStatutEmploye.emplStatut=="Licenciment") {
            console.log("Age atteinte impossible de ce beneficier à l'ipm :", this.ages)
            ele.statut = true
            console.log(ele);
            this.emp_service.ModifierEmploye(ele).subscribe(data=>{})
            console.log("age depasse")
          }
          else if (this.ages < 60) {
            console.log("Voici l'age :", this.ages)
            ele.statut = false
            //console.log(ele);
            console.log("age non depasse")

          }

          // const ttoday=new Date();
          // const birthDate = new Date(ele.date_nais);
          // console.log(ele.date_nais);
          // let age = ttoday.getFullYear() - birthDate.getFullYear();
          // const m = ttoday.getMonth() - birthDate.getMonth();

          // if (m < 0 || (m === 0 && ttoday.getDate() < birthDate.getDate())) {
          //   var p=age--;

          // }
          // console.log(+p);
          // if(+p>57){
          //   console.log("Voici l'age :"+p)
          //   ele.active==false
          //   console.log(ele.active==false);
          // console.log("age depasse")
          // }
          // else if(+p<=57){
          //   console.log("Voici l'age :"+p)
          //   ele.active==true
          //   console.log("age non depasse")

          // }  
        });



        console.log(this.employes)
      }
    );
    this.getFiles(this.employes);
  }

  getEmployeById(employe) {
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
    );

  }
  getFiles(employe) {
    this.emp_service.getFiles(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
  }
  supprimerEmploye(emp: Employe) {
    let conf = confirm("Etes-vous sur ?");
    if (conf)
      this.emp_service.deleteEmployeById(emp.idemp).subscribe(
        () => {
          console.log("employe supprimer");
          //pour ne pas faire de reload
          //this.supprimerEmployeDuTableau(emp);
          this.router.navigate(['/gestion-employes/ListeEmployes']).then(
            () => {
              window.location.reload();
            }
          );
        }
      );
  }

  /* public EmployeNow(){
     const uploadData = new FormData();
     this.addService.idService=this.servi;
     this.employe.ipm_service=JSON.parse(JSON.stringify(this.addService));
 
     this.addEntity.idEntity=this.enti;
     this.employe.ipm_entity=JSON.parse(JSON.stringify(this.addEntity));
 
     this.addCategorie.code_categorie=this.cate;
     this.employe.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
     console.log(this.employe);
     this.selectedFile.photo = this.selectedFile.name;
     uploadData.append('image', this.selectedFile, this.selectedFile.name);
     this.http.post('http://localhost:8082/ipm/uploads', uploadData, { observe: 'response' })
       .subscribe((response) => {
           if (response.status === 200) {
             this.emp_service.AjoutEmploye(this.employe).subscribe(
               (data)=>this.message=data);
          this.router.navigate(['/liste-employes']);
               
             console.log('Image uploaded successfully');
           } else {
             console.log('Image not uploaded successfully');
           }
         }
       );
   

    this.router.navigate(['/gestion-employes/ListeEmployes']);
 }*/
  public EmployeNow() {
    this.addService.idService = this.servi;
    this.employe.ipmService= JSON.parse(JSON.stringify(this.addService));

    this.addEntity.idEntity = this.enti;
    this.employe.ipmEntity= JSON.parse(JSON.stringify(this.addEntity));

    this.addCategorie.code_categorie = this.cate;
    this.employe.ipm_categorie = JSON.parse(JSON.stringify(this.addCategorie));
    this.employe.nom=this.FormControlEmpployes.get("nom").value;
    this.employe.prenom=this.FormControlEmpployes.get("prenom").value;
    this.employe.matricule=this.FormControlEmpployes.get("matricule").value;
    this.employe.reference=this.FormControlEmpployes.get("reference").value;
    this.employe.sexe=this.FormControlEmpployes.get("sexe").value;
    this.employe.situation_familial=this.FormControlEmpployes.get("situation_familial").value;
    this.employe.lieu_nais=this.FormControlEmpployes.get("lieu_nais").value;
    this.employe.adresse_domicile=this.FormControlEmpployes.get("adresse_domicile").value;
    this.employe.telephone=this.FormControlEmpployes.get("telephone").value;
    this.employe.date_nais =this.FormControlEmpployes.get("date_nais").value;;
    console.log(this.employe.date_nais);
    this.employe.date_recrutement = this.FormControlEmpployes.get("date_recrutement").value;
    console.log(this.employe.date_recrutement);
    console.log(this.employe);
    this.employe.photo = this.selectedFile.name;
    this.employe.justificatif=this.selectJustif.name;
    console.log(this.employe);

    this.emp_service.AjoutEmploye(this.employe).subscribe(
      (data) => {
        this.message = data;
        this.ngOnInit();
        console.log("the message ", data)
        console.log(this.employe.date_nais);

        // return this.message
      
      });
      this.emp_service.addUploadData(this.selectedFile).subscribe(
        (data) => {
          this.message = data;
          console.log("the message ", data)
          //return this.message
        })
        this.emp_service.addUploadJustif(this.selectJustif).subscribe(
            (data) => {
              
              //return this.message
            })
    if (!this.message) {
      this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :')
      // console.log(this.message);
      this.router.navigate(['/gestion-employes/ListeEmployes']);
    }
    else if (this.message == null) {
      console.log("not existe");
      this.showNotification('top', 'center', 3, "<b>employé non ajouté</b> :")
    }
    
  }

  public getService() {
    this.emp_service.getService().subscribe(
      serv => {
        // console.log(serv);
        this.service = serv;
        this.tempservice = serv

        // console.log(this.service)
      }
    )
  }

  public getCategorie() {
    this.emp_service.getCategorie().subscribe(
      cat => {
        // console.log(cat);
        this.categorie = cat;
        // console.log(this.categorie)
      }
    )
  }

  public getEntity() {
    this.emp_service.getEntity().subscribe(
      ent => {
        // console.log(cat);
        this.entity = ent;
        // console.log(this.categorie)
      }
    )
  }

  public selectService() {
    this.service = this.tempservice
    this.service = this.service.filter(serv => serv.ipmEntity.idEntity == this.enti)

    console.log(this.enti)
    console.log(this.service)
  }
  /////choisir et recuperer l'image sur l'ordinateur
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  upload() {
    var imgData = '/assets/img_poste/laposte.png'
    let doc = new jsPDF();
    let col = [["Numero Carnet", "nom", "prenom", "sexe", "matricule", "reference", "Service", "Categorie",]]
    let rows = []
    for (let employe of this.employes) {
      let tmp = [employe.idemp, employe.nom, employe.prenom, employe.sexe, employe.matricule, employe.reference, employe.ipmService?.type_service, employe.ipm_categorie?.libelle]
      rows.push(tmp)
    }
    autoTable(doc, {
      startY: 75,
      head: col,
      body: rows,

    });

    doc.addImage(imgData, 'JPEG', 15, 5, 25, 25)
    doc.setFontSize(20)
    doc.text("Liste Des Employes", 75, 50)
    const date = new Date()
    doc.setFontSize(10)
    doc.text("Dakar,le:", 166, 5)
    doc.text(date.toLocaleDateString("fr-FR"), 185, 5)


    doc.save("employe.pdf");
  }

  // Only AlphaNumeric with Some Characters [-_ ]
  keyPressAlphaNumericWithCharacters(event) {

    var inp = String.fromCharCode(event.keyCode);
    // Allow numbers, alpahbets, space, underscore
    if (/[A-Z/0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  /////////////////
  FormControlEmpployes = this.fb.group({
    nom: [null, Validators.required],
    prenom: [null, Validators.required],
    sexe: [null, Validators.required],
    adresse_domicile: [null, Validators.required],
    situation_familial: [null, Validators.required],
    date_nais: [null, Validators.required],
    lieu_nais: [null, Validators.required],
    telephone: [null, Validators.required],
    date_recrutement: [null, Validators.required],
    reference: [null, Validators.required],
    ipm_categorie: [null, Validators.required],
    ipmService: [null, Validators.required],
    ipmEntity: [null, Validators.required],
    matricule: [null, Validators.compose([
      Validators.required, Validators.minLength(7), Validators.maxLength(8)
    ] ,
    )]
  });



  ////////////Function Notification

  showNotification(from: any, align: any, idtype: any, note) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

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
  getServiceEmploye(list){
    this.nomEntity=list.nom_entity
    this.emp_service.getlistService(list.idEntity).subscribe((data)=>{
      this.listService=data
      console.log(this.listService)
    })
  }
  getEmploye(employe){
    // this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
    // console.log(listserv)
      this.emp_service.getEmployeById(employe.idemp).subscribe(
        res=>{
          this.employe=res;
          console.log(this.employe);
        }
      )
  }
  getStatutEmploye(){
    this.emp_statut.getStatutEmploye().subscribe(
      stu => {
        // console.log(cat);
        this.statutEmploye = stu;
        console.log(this.statutEmploye)
      }
    )
  }
  /////Update Statut employe
  public updateStatut(){
    this.addStatut.idStatut=this.codeStat;
    this.employe.ipmStatutEmploye=JSON.parse(JSON.stringify(this.addStatut));
      this.emp_statut.modifierStatut(this.employe).subscribe(
        (res)=>{
              this.message=res;
                this.toastr.success("Mise à jour avec Success avec comme statut");
             })
        }
////////////////////////Justificatif
        selectJustificatif(event:any){
          this.selectJustif = event.target.files[0];
        
          let readerr = new FileReader();
          readerr.readAsDataURL(event.target.files[0]);
          readerr.onload = (event) => {
            this.JustifURL = readerr.result;
          };
        
        }
}