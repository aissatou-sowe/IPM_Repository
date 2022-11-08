import { HttpClient, HttpEvent, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/Categorie';
import { Employe } from '../Models/Employe';
import { Entity } from '../Models/Entity';
import { IPM_Bon } from '../Models/IPM_Bon';
import { Service } from '../Models/Service';
import { catchError } from 'rxjs/operators';
import { Cotisation } from '../Models/CotisatonGlobal';
import { DetailCotisation } from '../Models/IPM_Cotisation';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient ) { 
    
  }
  
  //private baseUrl = '/ipm/employe';

  public AjoutEmploye(employe){
    console.log(employe);
    return this.http.post(environment.URL+'employe',employe,{responseType: 'text' as 'json'}
    )
  }
   

  listeEmploye() : Observable<any>{
    return this.http.get<any>(environment.URL+'employe');
  }

   public ModifierEmploye(emp: Employe){
     return this.http.put<Employe>(environment.URL+'employe',emp)
    
   }
   public ModifierEmployeSansphoto(emp: Employe){
    return this.http.put<Employe>(environment.URL+'employesansPhoto',emp)
   
  }

   public getEmployeById(idemp: number):Observable<Employe>{
     return this.http.get<Employe>(environment.URL+'employes/'+idemp) 
    
   }
   public getEmployeByIdSanstof(idemp: number):Observable<Employe>{
    return this.http.get<Employe>(environment.URL+'employesanstof/'+idemp) 
   
  }

   deleteEmployeById(idemp: number){
    return this.http.delete(environment.URL+'employe/'+idemp, {responseType: 'text' as 'json'});

   }

   public getEmploye(){
     return this.http.get(environment.URL+'employe');
   }
   public getListEmploByservice(id:number){
    return this.http.get(environment.URL+'listemployes/'+id);
  }
   public getEmployeByMatricules(matricule: string):Observable<Employe>{
     
    return this.http.get<Employe>(environment.URL+'rechercheM/'+matricule);
  }
  public AjoutCotisation(cotisation:Cotisation){
    debugger
    return this.http.post(environment.URL+'cotisation',cotisation)
  }
  public AjoutDetaCotisation(detailCotsa:DetailCotisation[]){
    
    return this.http.post(environment.URL+'adddetailscotisation',detailCotsa,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
      
      
    ))
  ;
  }

   public getEmployeByMatricule(matricule: any):Observable<Employe>{
     
     return this.http.get<Employe>(environment.URL+'rechercheM/'+matricule)
     .pipe(
      catchError((this.erroHandler)
      
      
    ))
  
     
   }
   erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'erreur de telechargement de fichier');
  }
  public getlistBon(id:number){
    return this.http.get<any>(environment.URL+'getbonParmByid/'+id)
  }

   public getService():Observable<Service[]>{
     return this.http.get<Service[]>(environment.URL+'service');
   }
   public getlistService(id:number):Observable<Service[]>{
    return this.http.get<Service[]>(environment.URL+'listservice/'+id);
  }
  public getlistBonConsult(id:number){
    return this.http.get<any>(environment.URL+'getbonConsultByid/'+id)
  }
   public getCategorie():Observable<Categorie[]>{
     return this.http.get<Categorie[]>(environment.URL+'categorie');
   }

   public getEntity():Observable<Entity[]>{
    return this.http.get<Entity[]>(environment.URL+'entity');
  }
  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

   getFiles(idemp:number): Observable<Employe> {
     return this.http.get<Employe>(environment.URL+'employe/'+idemp);
   }
   /*uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }*/
   addUploadData(file:File):Observable<any> {
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('image', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploads", formData);
  }
   
  addUploadJustif(file:File):Observable<any> {
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('image', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadjustif", formData);
  }
}
