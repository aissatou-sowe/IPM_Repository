import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, VERSION } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { element } from 'protractor';
import { Cotisation } from 'src/app/Models/CotisatonGlobal';
import { DetailCotisation } from 'src/app/Models/IPM_Cotisation';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
declare var $:any


@Component({
  selector: 'app-situation-annuelle',
  templateUrl: './situation-annuelle.component.html',
  styleUrls: ['./situation-annuelle.component.css']
})
export class SituationAnnuelleComponent implements OnInit {
  detailsCotisations:DetailCotisation[];
  selectedYear: number;
  years: number[] = [];
  mois:any;
  mois1: any;
  listOfMonths= [{id:1,value:'Javnvier'}, {id:2, value:'Février'}, {id:3, value:'Mars'}, {id:4, value:'Avril'}, {id:5, value:'Mai'}, {id:6, value:'Juin'}
   ,{id:7, value:'Juillet'},{id:8, value:'Aout'},{id:9, value:'Septembre'},{id:10, value:'Octobre'},{id:11, value:'Novembre'},{id:12, value:'Décembre'}];
  listCotisations: DetailCotisation[];
  nomCotisation: any;
  
    constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,private rapportServ:RapportServiceService) { 
    this.selectedYear = new Date().getFullYear();
    let y:number=this.selectedYear-9
    console.log(y)
    for (let year = this.selectedYear; year >= y; year--) {
      this.years.push(year);
    }
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
   
  
  }

  getCumulAnnee(){
       this.rapportServ.getCumulCotisationAnnee(this.selectedYear).subscribe(
        result=>{
        this.detailsCotisations=result
         this.mois=new Date(this.detailsCotisations[0].ipm_cotisation?.date).getMonth()+1;
        console.log(this.mois,new Date(this.detailsCotisations[0].ipm_cotisation?.date));
        this.detailsCotisations.forEach(element => {      
          this.listOfMonths.forEach(lmt => {
            if (new Date(element.ipm_cotisation?.date).getMonth()+1==lmt.id) {
              console.log(lmt.value,new Date(element.ipm_cotisation?.date).getMonth(),lmt.id)
              
              element.ipm_employe.justificatif=lmt.value;
             console.log(element.ipm_employe?.justificatif);
            }

          }) 
       });
        console.log(this.detailsCotisations.length);
        console.table(this.detailsCotisations);
        if (this.detailsCotisations.length==0) {
          this.showNotification('top','center',3,"<b> verifer la date ou l'entite</b> :")
  
           }}
       )


     


  }
  getDetailsCotisation(element){        
    console.log(element.ipm_cotisation?.idCotisation)
        this.rapportServ.getDetailsCotisationByEmploye(element.ipm_cotisation?.idCotisation).subscribe(
          result => {
            this.listCotisations= result;
            console.log(this.listCotisations);
          }
        )
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
  
  


 



}
