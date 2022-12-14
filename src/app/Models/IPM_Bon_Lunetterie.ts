import { Conjoint } from "./Conjoint";
import { Employe } from "./Employe";
import { Enfant } from "./Enfant";
import { IPM_Bon } from "./IPM_Bon";
import { Prestataire } from "./Prestataire";
import { Prestation } from './Prestations';

export class  IPM_Bon_Lunetterie extends IPM_Bon{  
    constructor(
      public idbon:number,
     public nombre_article:string,
     //public service:string,
     public  total:string,
    // public date_etablissement:Date,
      public quantite:number,
      public designation:string,
      public prix_unitaire:number,
      public ipm_employe:Employe,
      public ipm_prestataire:Prestataire,
      public  ipm_enfant:Enfant,
      public  ipm_prestation:Prestation,
     // public ordonnance:string,
      public motif :string,
      public devit:string,
        public  ipm_conjoint:Conjoint,public dateEtablissement:Date)
     
      { 
      super(idbon,total,ipm_employe,ipm_prestataire,ipm_enfant,ipm_conjoint,ipm_prestation,dateEtablissement);
      }
    }