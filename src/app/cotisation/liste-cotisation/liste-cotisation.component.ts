import { Component, OnInit, NgModule } from '@angular/core';
import { CotsationExcel } from 'src/app/Models/CotsatonExcel';
import { EmployeService } from 'src/app/Services/employe.service';
import { Categorie } from '../../Models/Categorie';
//import { PrecomptesRoutingModule } from '../../precomptes/precomptes-routing.module';
import { SidebarModule } from '../../sidebar/sidebar.module';
import * as FileSaver from 'file-saver';
declare var $:any
@Component({
  selector: 'app-liste-cotisation',
  templateUrl: './liste-cotisation.component.html',
  styleUrls: ['./liste-cotisation.component.css']
})
export class ListeCotisationComponent implements OnInit {
  montant;
  categorie;
  categories:Categorie[];
  modifCategorie: any;
  employe;
  CotisationExcel:CotsationExcel=new CotsationExcel();
  CotisationExcels=[];
  entite
  listEntity
  listCotisationEntity;
  nomEntity: any;
  condition: any;

  constructor(private emp_service: EmployeService) { }

  ngOnInit(): void {
    this.emp_service.getCategorie().subscribe(
      cat => {
        // console.log(cat);
        this.categories = cat;
        console.log(this.categories);
         //console.log(this.categorie)
      }
    )
    this.emp_service.getEntity().subscribe(data => { 
      this.listEntity=data
      console.log(this.listEntity)

     });
    this.emp_service.getEmploye().subscribe(data => {
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
      this.employe = data;
       
      
    });
  }
  getnomEntity(prest){
    this.listCotisationEntity=null
    console.log(this.listCotisationEntity)
    console.log(prest.idEntity)
    this.nomEntity=prest.nom_entity
    this.condition=prest.idEntity
    this.listCotisationEntity=this.employe.filter(serv =>serv.ipmEntity.idEntity==prest.idEntity)
    console.log(this.listCotisationEntity)
    $(function(){
      (<any>$('#datatable1')).DataTable({
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
    
    })
 
    console.log(this.listCotisationEntity)
    for (let i = 0; i < this.listCotisationEntity.length; i++) {
      this.CotisationExcel.Matricule=this.listCotisationEntity[i].matricule
      this.CotisationExcel.Prenom=this.listCotisationEntity[i].prenom
      this.CotisationExcel.nom=this.listCotisationEntity[i].nom
      this.CotisationExcel.Catégorie=this.listCotisationEntity[i].ipm_categorie.libelle
      this.CotisationExcel.solde=this.listCotisationEntity[i].solde
      this.CotisationExcel.MontantAcotiser=this.listCotisationEntity[i].ipm_categorie.montant
      this.CotisationExcels.push({...this.CotisationExcel})
  
      
     }
  }
 
  getnomCategorie(prest){
    console.log(this.categorie,this.montant);
    //console.log(prest);
    this.modifCategorie=prest

  } 
  Enregistrer(){
    this.modifCategorie.montant=this.montant
    this.emp_service.ModifierCategorie(this.modifCategorie).subscribe(data=>{
      console.log(data);
      this.ngOnInit()
    })

  }
  fileDownloadEntity() {
    this.CotisationExcels=null
    this.CotisationExcels=[]
    
    console.log(this.CotisationExcels)
    for (let i = 0; i < this.listCotisationEntity.length; i++) {
      this.CotisationExcel.Matricule=this.listCotisationEntity[i].matricule
      this.CotisationExcel.Prenom=this.listCotisationEntity[i].prenom
      this.CotisationExcel.nom=this.listCotisationEntity[i].nom
      this.CotisationExcel.Catégorie=this.listCotisationEntity[i].ipm_categorie.libelle
      this.CotisationExcel.solde=this.listCotisationEntity[i].solde
      this.CotisationExcel.MontantAcotiser=this.listCotisationEntity[i].ipm_categorie.montant
      this.CotisationExcels.push({...this.CotisationExcel})
  
      
     }
    
    // @ts-ignore
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
        const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "CotisationExcel");
       // this.CotisationExcels=null
    });
  }
  fileDownload() {
    this.CotisationExcels=null
    this.CotisationExcels=[]
    for (let i = 0; i < this.employe.length; i++) {
      this.CotisationExcel.Matricule=this.employe[i].matricule
      this.CotisationExcel.Prenom=this.employe[i].prenom
      this.CotisationExcel.nom=this.employe[i].nom
      this.CotisationExcel.Catégorie=this.employe[i].ipm_categorie.libelle
      this.CotisationExcel.solde=this.employe[i].solde
      this.CotisationExcel.MontantAcotiser=this.employe[i].ipm_categorie.montant
      this.CotisationExcels.push({...this.CotisationExcel})
  
      
     }

    

    console.log(this.CotisationExcels)
    
    // @ts-ignore
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
        const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "CotisationExcel");
        //this.CotisationExcels=null
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
