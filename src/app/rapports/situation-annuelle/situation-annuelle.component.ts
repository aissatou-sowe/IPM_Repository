import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, VERSION } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
  desactive:boolean=false;
  listOfMonths= [{id:1,value:'Janvier'}, {id:2, value:'Février'}, {id:3, value:'Mars'}, {id:4, value:'Avril'}, {id:5, value:'Mai'}, {id:6, value:'Juin'}
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
   
    this.desactive=true
       this.rapportServ.getCumulCotisationAnnee(this.selectedYear).subscribe(
        result=>{
        this.detailsCotisations=result
        console.log(this.detailsCotisations);
         this.mois=new Date(this.detailsCotisations[0].ipm_cotisation?.date).getMonth()+1;
        console.log(this.mois,new Date(this.detailsCotisations[0].ipm_cotisation?.date));
        this.detailsCotisations.forEach(element => {      
          this.listOfMonths.forEach(lmt => {
            if (new Date(element.ipm_cotisation?.date).getMonth()+1==lmt.id) {
              console.log(lmt.value,new Date(element.ipm_cotisation?.date).getMonth(),lmt.id)
            
              element.ipm_employe.justificatif=lmt.value;
              console.log(element.ipm_employe.justificatif);

             console.log(element.ipm_employe?.justificatif);
            }

          }) 
       });
     
        console.log(this.detailsCotisations.length);
        console.table(this.detailsCotisations);
        if (this.detailsCotisations.length==0) {
          this.showNotification('top','center',3,"<b> verifer la date ou l'entite</b> :")
  
           };
          }
       )


     


  }
  getDetailsCotisation(element){        
    console.log(element.ipm_cotisation?.idCotisation)
        this.rapportServ.getDetailsCotisationByEmploye(element.ipm_cotisation?.idCotisation).subscribe(
          result => {
            this.listCotisations= result;
            console.log(element);
            this.mois1=element.ipm_employe.justificatif
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

//Imprimer Situation Annuelle
printSituationAnnuelle(){
  let doc=new jsPDF();
  //var imgData = '/assets/img_poste/laposte.png'
  var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

  let col=[["Matricule","Prenom","Nom","Montant Cotisé","Date Cotisation"]]
  let rows=[]
  for (let situAnnee of this.listCotisations) {
    let tmp = [situAnnee.ipm_employe?.matricule,situAnnee.ipm_employe?.prenom,situAnnee.ipm_employe?.nom,situAnnee.montant,situAnnee.ipm_cotisation?.date]
    rows.push(tmp);
    var montantCotisa=situAnnee.ipm_cotisation?.montant_totals;
    var mois=this.mois1;
    console.log(this.mois1);
  }
  // var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
  // var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
  // var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
  // console.log(somme);
  // let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
   
 

  autoTable(doc,{
    startY:75,
    head:col,
    body:rows,
   // foot:f,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"striped",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,30,30)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,100,15)
    doc.setFillColor(240,240,240)
    //  doc.rect(13,40,185,32,'F')
    //  doc.setFillColor(240,240,240)
    doc.setTextColor("")
    doc.text("Institut de Prévoyance Maladie",50,10);
    doc.text("du personnel de la Poste",60,17)
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     doc.text("Rapport Situation Annuelle",77,40)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,18)
          doc.text("Mois de:",15,60)
          doc.text(''+mois,35,60)
          doc.text("Montant Totals:",15,72) 
          doc.text(""+montantCotisa,50,72)     
      doc.text(date.toLocaleDateString("fr-FR"),172,18)
         doc.setFontSize(12)

     }
  });
  
  doc.output('dataurlnewwindow');

}
  
  


 



}
