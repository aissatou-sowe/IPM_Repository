import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';

import autoTable from 'jspdf-autotable';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
import { Prestation } from 'src/app/Models/Prestations';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Detils_Factures';

@Component({
  selector: 'app-situation-par-prestation',
  templateUrl: './situation-par-prestation.component.html',
  styleUrls: ['./situation-par-prestation.component.css']
})
export class SituationParPrestationComponent implements OnInit {
  listPrestation: Prestation[];
  prestation: any;
  date1: any;
  date2: any;
  d1: string;
  d2: string;
  list: IPM_Details_Facture[];
  prestationChoisi: any;

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router) { 
    this.dateAdapter.setLocale('en-GB'); }
   
  ngOnInit(): void {
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
  }
  getprestation(presta){
  
       console.log(presta)
       this.prestationChoisi=presta.libelle
      }
  // getPrestation(){
  //   console.log(this.prestation)
  //  }
  getSituation(){ 
    console.log(this.prestation)
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    this.rapportServ.getSituatonParPrestation(this.d1,this.d2,this.prestation).subscribe(data=>{
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
      this.list=data
      console.log(this.list)


    })
  }
  imprimer(){
    let doc=new jsPDF();
    //var imgData = '/assets/img_poste/laposte.png'
    var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

    
     let col=[["Facture","Prenom","Nom","Matricule","Prestataire","Date Prestation ","Charge IPM","Charge Agent","Montant Facture"]]
    let rows=[]
      
        //let tmp=[this.designation,this.nombre_article]
        for (let liste of this.list) {
          let tmp = [liste.ipmFacture?.numerofacture, liste.ipm_employe?.prenom, liste.ipm_employe?.nom, liste.ipm_employe?.matricule,liste.ipmFacture?.ipm_prestataire.nom_prestataire,liste.ipmFacture?.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture]
          rows.push(tmp)
          
          var ipm2=liste.ipm_employe?.prenom
          var ipm3=liste.ipm_employe?.matricule
        }
        var somme1=this.list.reduce((sum,current)=>sum+current.part_ipm,0);
        var somme2=this.list.reduce((sum,current)=>sum+current.part_patient,0);
        var somme3=this.list.reduce((sum,current)=>sum+current.montant_facture,0);

        var prestation=this.prestationChoisi
        var date1=this.d1
        var date2=this.d2
        let f=[["","","","","","Total ",somme1,somme2,somme3]]

      
  
    
     autoTable(doc,{
      startY:70,
      head:col,
      body:rows,
      foot:f,
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
      doc.rect(60,30,105,20)
      //doc.setFillColor(240,240,240)
       //doc.rect(13,65,185,23,'F')
       //doc.setFillColor(240,240,240)
       
       doc.setFontSize(15)
       doc.setTextColor("#3A6EA5")
       
       doc.text("Rapport par prestation",85,42)
       doc.text("la prestation  "+prestation+" du "+date1+" au "+date2,20,60)
       //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
       doc.setTextColor("")
        const date=new Date()
           doc.setFontSize(12)
            doc.text("Dakar, le :",150,10)
            doc.setFontSize(12)
            doc.text("Institut de Prévoyance Maladie ",50,10)
            doc.text("du personnel de la Poste ",60,17)
            
        doc.text(date.toLocaleDateString("fr-FR"),172,10)
          
          
          
       }
    });
    
    doc.output("dataurlnewwindow")
    
  }
  


}
