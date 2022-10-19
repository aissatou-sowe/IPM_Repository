import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Bareme } from 'src/app/Models/Bareme';
import { BaremeService } from 'src/app/Services/bareme.service';
declare const $: any;
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-save-bareme',
  templateUrl: './save-bareme.component.html',
  styleUrls: ['./save-bareme.component.css']
})
export class SaveBaremeComponent implements OnInit {
  
  selectFormControl = new FormControl('', Validators.required);
  baremes :Bareme=new Bareme();
  message:any;
  listBareme:Bareme[];
  bareme:Bareme=new Bareme();
  public tableData: TableData;
  public dataTable: TableData;
  currentBareme:Bareme=new Bareme();
  constructor(private bareme_service:BaremeService
    ,private router: Router,private formBuilder:FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bareme_service.listeBareme().subscribe(
      result => {
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
        
        })
        this.listBareme=result;
        console.log(this.listBareme);
       });
       this.initForm();
  }

  initForm(){
    this.bareme_service.dataForm=this.formBuilder.group({
      idBareme:null,
      min:['',[Validators.required]],
      max:['',[Validators.required]],
      montant:['',[Validators.required]],
    })
    }

 /////////////////
saveBareme(){
  this.bareme_service.AjoutBareme(this.baremes).subscribe
  (()=>{
     console.log(this.baremes);
     this.toastr.success("Ajout Effectué avec succes");
       this.ngOnInit();

 });
}

/////////////////
   //Recuperer la bareme correspondant
   getBaremesById(bareme){
    this.bareme_service.getBaremeById(bareme.idBareme).subscribe(
      result => {
        this.currentBareme= result;
        console.log(this.currentBareme);
      }
    );
  }
    public updateBareme(){
  
      this.bareme_service.ModifierBareme(this.currentBareme).subscribe(
          
        () =>{
          this.toastr.success('Modification Faite avec Success');
          this.ngOnInit();
          this.router.navigate(['/list-prestation']);
        
        },
        
        (error) =>{
          this.toastr.error("Erreur ")
        }
       
      );
  }
}
