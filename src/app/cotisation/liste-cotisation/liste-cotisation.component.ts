import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/Services/employe.service';
import { Categorie } from '../../Models/Categorie';

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

}
