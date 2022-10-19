import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {
listEntity;
  listService:Service[];
  nomEntity: any;
  listEmployer: Object;
  constructor(private router:Router,private emp_service:EmployeService) { }

  ngOnInit(): void {
    this.emp_service.getEntity().subscribe((data)=> {
      this.listEntity=data
      console.log(this.listEntity)
    })
  }
  getService(list){
    this.nomEntity=list.nom_entity
    this.emp_service.getlistService(list.idEntity).subscribe((data)=>{
      this.listService=data
      console.log(this.listService)
    })


  }
  getEmploye(listserv){
    this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
    console.log(listserv)
  
  }

}
