import { Employe } from "./Employe";
import { Prestataire } from "./Prestataire";
import { Prestation } from "./Prestations";

export class Facture{
    constructor(
        public idfacture?:number,
        // public code_acte?:string,
         public numerofacture?:number,
         public dateFacture?:Date,
         public dateSaisie?:Date,
        // public matricule?:string,
        // public montant_facture?:number,
        // public taux_ipm?:number,
         public part_ipm?:number,
         public part_patient?:number,
        // public tarification?:number,
        public ipm_prestataire?:Prestataire,
        // public ipm_prestation?:Prestation,
        // public ipm_employe?:Employe ,
        public certifier?:boolean ,
        //public ipm_details_factures?:any,
        public montantTotal?:number

    ){}
}