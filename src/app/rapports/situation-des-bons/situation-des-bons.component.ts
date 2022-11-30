import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
import { Prestation } from 'src/app/Models/Prestations';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
declare var $:any
@Component({
  selector: 'app-situation-des-bons',
  templateUrl: './situation-des-bons.component.html',
  styleUrls: ['./situation-des-bons.component.css']
})
export class SituationDesBonsComponent implements OnInit {
  listPrestation: Prestation[];
  date2: any;
  date1:any
  d1: string;
  d2: string;
  idpres:any;
  typeBons:any;
  listBonGlobalsPrestation:IPM_Bon[];
  listypeBon=[{id:1,value:"pharmacie"},{id:2,value:"consultation"},
   {id:3,value:"lettregrantie"},{id:4,value:"lunetterie"}
  ]
  d3: any;
  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB'); }

  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
    console.log(this.typeBons);

  }
//Prestation Choisi
  getPrestation(presta){
    console.log(presta);
    this.idpres=presta;
   }
  getBonsPeriode(){ 
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    console.log(this.d1,this.d2,this.typeBons);
    this.d3=this.typeBons   
    this.rapportServ.getBonByPeriodeBon(this.d1,this.d2,this.typeBons).subscribe(
      result=>{
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
        this.listBonGlobalsPrestation=result;
        console.log(this.listBonGlobalsPrestation);
        if (this.listBonGlobalsPrestation.length==0) {
          this.showNotification('top','center',3,"<b> Il n'existe pas de  bon dans cette période</b> :")         
        }
      }
    )
  }

  //Notification
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

}
