import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Bareme } from 'src/app/Models/Bareme';
import { Employe } from 'src/app/Models/Employe';
import { Precompte } from 'src/app/Models/Precompte';
import { BaremeService } from 'src/app/Services/bareme.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { PrecomptesService } from 'src/app/Services/precomptes.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as xlsx from 'xlsx';
import { DatePipe } from '@angular/common';
declare const $: any;
@Component({
  selector: 'app-save-precomptes',
  templateUrl: './save-precomptes.component.html',
  styleUrls: ['./save-precomptes.component.css']
})
export class SavePrecomptesComponent implements OnInit {
  precompteForm: FormGroup;
  listEmploye: Employe[];
  barem: Bareme[];
  iden: any;
  precompte: Precompte = new Precompte();
  message: number;
  baremm: Bareme = new Bareme();
  rembourse: any;
  panier: Precompte = new Precompte();
  listPanier =[];
  listPre=[];
  addEmploye:Employe;
  annny: any;
  myDate = new Date();
  dateprecompte: string;
  constructor(private emp_service: EmployeService, private datePipe: DatePipe, private formbuildprecompte: FormBuilder,
    private router: Router, private bareme_service: BaremeService, private precompte_service: PrecomptesService,
    private route: ActivatedRoute) {
          this.addEmploye=new Employe();
     }

  ngOnInit(): void {
    this.dateprecompte=this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    console.log(this.dateprecompte)

    this.emp_service.listeEmploye().subscribe(
      emps => {
        console.log(emps);
        this.listEmploye = emps;
       this.getList();
            
      });
  }
  ////////////////////Tables
  getList(){
  
    this.bareme_service.listeBareme().subscribe(
      bars => {
        this.barem = bars;
        for (let ele = 0; ele < this.listEmploye.length; ele++) {
          for (let element = 0; element < this.barem.length; element++) {
            if (this.listEmploye[ele].solde <= this.barem[element].max && 
              this.listEmploye[ele].solde > this.barem[element].min) {
                if ( this.listEmploye[ele].solde > this.barem[element].montant) {
                  console.log(this.listEmploye[ele]);
              this.panier.ipm_employe = this.listEmploye[ele];
               this.panier.montantRembou = this.barem[element].montant;
              this.panier.datePrecompte=this.dateprecompte
               this.listEmploye[ele].cumul_charge = this.panier.montantRembou
              this.listPanier.push({...this.listEmploye[ele],...this.panier});
              console.log(this.listPanier);
                }
                else{
                  console.log(this.listEmploye[ele]);
                  this.panier.ipm_employe = this.listEmploye[ele];
                  this.panier.montantRembou =this.listEmploye[ele].solde;
                  this.panier.datePrecompte=this.dateprecompte
                   this.listEmploye[ele].cumul_charge = this.panier.montantRembou
                  this.listPanier.push({...this.listEmploye[ele],...this.panier});
                  console.log(this.listPanier);
                }
              
              
             // this.listPre=this.listPanier
            }
            
            console.log(this.rembourse);
          }


        }
        $(function () {
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
        console.log(this.listPanier);
      });
  }
  ////////////Enregistrer les précomptes 
  savePrecom(){
     this.precompte_service.SavePrecompte(this.listPanier).subscribe(
      (data) => {
        console.log(this.listPanier);
        console.log(data)
        this.showALERTE('top', 'center')
      });

  }
  ///////////////Fin/////////////////
  ////////////fonction  Alerte
  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Enregistrement reussi des precomptes </b> :'
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


  /////////////////Export
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef; 
  fileDownload(){
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: xlsx.WorkBook = xlsx.utils.book_new();  
    xlsx.utils.book_append_sheet(wb, ws, 'Fichier Precompte');  
    xlsx.writeFile(wb, 'precompte.xlsx');  
 
}
}
