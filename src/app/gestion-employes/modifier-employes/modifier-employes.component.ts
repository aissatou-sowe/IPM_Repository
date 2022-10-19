import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-modifier-employes',
  templateUrl: './modifier-employes.component.html',
  styleUrls: ['./modifier-employes.component.css']
})
export class ModifierEmployesComponent implements OnInit {

  currentemploye: Employe= new Employe();
  id : number;
  service: Service[];
  categorie: Categorie[];
  servi:number;
  cate:number;
  addService : Service;
  addCategorie : Categorie;
  type_service: string;
  type_categorie: string;
  serviceChoisi: any;
  categorieChoisi: any;


  constructor(private emp_service: EmployeService,
              private router: Router,
              private route : ActivatedRoute) { 
                this.addCategorie=new Categorie();
                this.addService=new Service();
              }

  ngOnInit(): void {

    this.getCategorie();
    this.getService();

    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        this.currentemploye = result;
        console.log(this.currentemploye);
        this.type_service=this.currentemploye.ipmService.type_service
        this.type_categorie=this.currentemploye.ipm_categorie.libelle
        console.log(this.type_service,this.type_categorie);

      }
    );
  }
  getserv(serv){
    this.serviceChoisi=serv

  }
  getCategor(cat){
    this.categorieChoisi=cat
    

  }

  

    public updateEmploye(){
      console.log(this.currentemploye);
      this.addService.idService=this.servi;
      this.currentemploye.ipmService= this.serviceChoisi;
      this.addCategorie.code_categorie=this.cate;
      this.currentemploye.ipm_categorie=this.categorieChoisi;
    
      console.log(this.currentemploye);
      this.emp_service.ModifierEmploye(this.currentemploye).subscribe(
        
        () =>{
          
          this.router.navigate(['/gestion-employes/ListeEmployes']) ;
        
        },
        
        (error) =>{
          alert("Probleme lors de la modification !");
        }
       
      );

      //debugger;
    } 
    public retourner(){
      this.router.navigate(['/gestion-employes/ListeEmployes']) ;

    }

    public getService(){
      this.emp_service.getService().subscribe(
        serv => {
         // console.log(serv);
          this.service = serv;
         // console.log(this.service)
        }
      )
    }

    public getCategorie(){
      this.emp_service.getCategorie().subscribe(
        cat => {
         // console.log(cat);
          this.categorie = cat;
         // console.log(this.categorie)
        }
      )
    }

}
