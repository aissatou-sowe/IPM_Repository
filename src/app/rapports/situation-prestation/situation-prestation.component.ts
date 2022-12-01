import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';
import { Prestation } from 'src/app/Models/Prestations';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';

@Component({
  selector: 'app-situation-prestation',
  templateUrl: './situation-prestation.component.html',
  styleUrls: ['./situation-prestation.component.css']
})
export class SituationPrestationComponent implements OnInit {
  listPrestation:Prestation[];
  prestatonChoisi: any;
  d1: string;
  d2: string;
  date1: any;
  date2: any;
  listPrestatio: IPM_Details_Facture[];
  matricule;
  list: IPM_Details_Facture[];
  id: any;

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB');

  }

  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
  }

  getPrestation(presta){
    this.prestatonChoisi=presta
    console.log(this.prestatonChoisi,presta.code_prestation)
    
   }
   getSituation(){
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    
    this.rapportServ.getSituatonParindividus(this.d1,this.d2,this.matricule).subscribe(
      result=>{
        this.listPrestatio=result
        console.log(this.listPrestatio)
      })

   }
   getPrestaton(element){
    console.log(element)
    this.id=element.ipm_prestation.code_prestation
    // this.rapportServ.getSituatonParPrestation(this.d1,this.d2,element.ipm_prestation.code_prestation).subscribe(
    //   result=>{
    //     this.list=result
    //     console.log(this.list)
    //   })
        this.router.navigate(['/rapports/situation-par-prestation/'+this.d1+'/'+this.d2+'/'+element.ipm_prestation.code_prestation]);
        console.log('/situation-par-prestation/'+this.d1+'/'+this.d2+'/'+this.id)

   }
   imprimer(){
    let doc=new jsPDF();
    var imgData = '/assets/img_poste/header1.png'
    
     let col=[["Facture","Prestataire","Traitement","Date Prestation ","Charge IPM","Charge Agent","Montant Facture"]]
    let rows=[]
      
        //let tmp=[this.designation,this.nombre_article]
        for (let liste of this.listPrestatio) {
          let tmp = [liste.ipmFacture?.numerofacture, liste.ipmFacture?.ipm_prestataire.nom_prestataire, liste.ipm_prestation?.libelle, liste.ipmFacture.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture]
          rows.push(tmp)
          var ipm1=liste.ipm_employe?.nom

          var ipm2=liste.ipm_employe?.prenom
          var ipm3=liste.ipm_employe?.matricule
        }
      
  
    
     autoTable(doc,{
      startY:95,
      head:col,
      body:rows,
       margin:{ horizontal:10},
       styles:{overflow:"linebreak"},
       bodyStyles:{valign:"top"},
       theme:"striped",
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
       doc.rect(13,65,185,23,'F')
       //doc.setFillColor(240,240,240)
       
       doc.setFontSize(15)
       doc.setTextColor("#3A6EA5")
       
       doc.text("RELEVE PARTICIPANT",85,42)
       //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
       doc.setTextColor("")
        const date=new Date()
           doc.setFontSize(13)
            doc.text("Dakar, le :",150,60)
            
        doc.text(date.toLocaleDateString("fr-FR"),172,60)
            doc.setFontSize(12)
           doc.text("Matricule Participant:",15,75)
            doc.text(ipm3,60,75)
          //  doc.text(ipm2,80,75) 
            doc.text("Prenom & Nom:",15,85)
            doc.text(""+ipm2 +" "+" "+" "+ipm1,60,85)
            doc.setFontSize(12)
          
       }
    });
    
    doc.save("prestation.pdf");
    
  }
  


}
