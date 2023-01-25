import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity } from '../Models/Entity';
import { HttpClient } from '@angular/common/http';
import { IPM_Details_Facture } from '../Models/IPM_Detils_Factures';
import { DetailCotisation } from '../Models/IPM_Cotisation';
import { Cotisation } from '../Models/CotisatonGlobal';
import { Prestation } from '../Models/Prestations';
import { IPM_Bon } from '../Models/IPM_Bon';
import { IPM_DetaRembourse } from '../Models/IPM_DetaRembourse';
import { Employe } from '../Models/Employe';

@Injectable({
  providedIn: 'root'
})
export class RapportServiceService {

  constructor( private http:HttpClient ) { }
  public getEntity():Observable<Entity[]>{
    return this.http.get<Entity[]>(environment.URL+'entity');
  }
  public getGlobaleParEntity(date1:String,date2:String,id:number):Observable<IPM_Details_Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'getCreanceGlobaless/'+date1+'/'+date2+'/'+id);
  }
  public getCumulCotisationAnnee(annee:number){
    return this.http.get<DetailCotisation[]>(environment.URL+'cumulCotisation/'+annee);
  }
  getDetailsCotisationByEmploye(details:number){
     return this.http.get<DetailCotisation[]>(environment.URL+'listcotisation/'+details);
  }
  public getSituationIndividuel(date1:String,date2:String):Observable<IPM_Details_Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'getCreanceGlo/'+date1+'/'+date2);
  }
  public getPrestation():Observable<Prestation[]>{
    return this.http.get<Prestation[]>(environment.URL+'prestation');
  }
  public getSituatonParPrestation(date1:String,date2:String,id:number):Observable<IPM_Details_Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'getGlobalsPrestations/'+date1+'/'+date2+'/'+id);
  }
  public getSituatonParindividus(date1:String,date2:String,id:String):Observable<IPM_Details_Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'getIndividuelPrestations/'+date1+'/'+date2+'/'+id);
  }
  public getSituatonRemboursement(date1:String,date2:String,id:String):Observable<IPM_DetaRembourse[]>{
    return this.http.get<IPM_DetaRembourse[]>(environment.URL+'getIndividuelRembour/'+date1+'/'+date2+'/'+id);
  }

  public getBonByPeriodeAndtypeBon(date1:String,date2:String,idprestation:String):Observable<IPM_Bon[]>{
    return this.http.get<IPM_Bon[]>(environment.URL+'getBonByPeriodeAndtype/'+date1+'/'+date2+'/'+idprestation);
  }
  public getBonByPeriodeBon(date1:String,date2:String,typeBon:String):Observable<IPM_Bon[]>{
    return this.http.get<IPM_Bon[]>(environment.URL+'getBonByPeriode/'+date1+'/'+date2+'/'+typeBon);
  }

  public CountEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(environment.URL+'employe/count');
  }
}

