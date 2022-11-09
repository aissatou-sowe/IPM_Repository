import { IPM_Role } from "./Role";

export class IPM_Utilisateur{
    constructor(
        public id?:number,
        public login?:string,
        public mot_passe?:string,
        public roles?:IPM_Role,
        ){}
}