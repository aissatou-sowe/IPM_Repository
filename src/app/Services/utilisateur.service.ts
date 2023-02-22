import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPM_Role } from '../Models/Role';
import { IPM_Utilisateur } from '../Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  public SaveUserToRole(user){
    
    return this.http.post(environment.URL+'saveUser',user,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
      
      
    ))
  }
  public SaveRole(role){
    
    return this.http.post(environment.URL+'saveRole',role,{responseType: 'text' as 'json'})
  }
  public SaveRoleUser(UserRole){
    
    return this.http.post(environment.URL+'roleAddUser',UserRole,{responseType: 'text' as 'json'})
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'erreur de telechargement ');
  }

  public getAllRoles():Observable<IPM_Role[]>{
    return this.http.get<IPM_Role[]>(environment.URL+'AllRoles');
  }
  public getAllUser():Observable<IPM_Utilisateur[]>{
    return this.http.get<IPM_Utilisateur[]>(environment.URL+'allUser');
  }

  getUserByUsername(email):Observable<any> {
    return this.http.get(environment.URL + 'email/' + email);
}
}
