import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { IPM_Role } from 'src/app/Models/Role';
import { IPM_Utilisateur } from 'src/app/Models/Utilisateur';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
declare var $;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  UserForm: FormGroup;
  listRole: IPM_Role[];
  listUser:IPM_Utilisateur[];
  User:IPM_Utilisateur  =new IPM_Utilisateur();
  jsonRole: any;
  desactive:boolean=false;
  addRole:IPM_Role;
  listRoles: string[];
  rolesUser
  constructor(private user_Service:UtilisateurService,private router: Router, private route: ActivatedRoute,
    private keycloakservice: KeycloakService, private formUtilisateur: FormBuilder) {
      this.UserForm = new FormGroup({
        login: new FormControl(),
        mot_passe: new FormControl(),
        roles: new FormControl(),

      });
      this.addRole=new IPM_Role();
     }

  ngOnInit(): void {
   // this.initfacteurform();
    /////////////////Tous les Roles
this.user_Service.getAllRoles().subscribe(
  role => {
    // console.log(cat);
    this.listRole = role;
    console.log(this.listRole);
  }
);
////////////////Tous les users
this.user_Service.getAllUser().subscribe(
  user => {
    // console.log(cat);
    this.listUser = user;
    console.log(this.listUser);
  }
);
/////////////////////Keycloak Liste Roles/////////////////////////////////

this.listRoles=this.keycloakservice.getKeycloakInstance().realmAccess.roles
        console.log(this.keycloakservice.getKeycloakInstance().realmAccess.roles)

        this.rolesUser=this.keycloakservice.getKeycloakInstance().realmAccess.roles
 

/////////////////////////////Fin////////////////////////////////////////
  }

///formulaire
initfacteurform() {
  this.UserForm = this.formUtilisateur.group({

    id: [null],
    login: [Validators.required],
    mot_passe: [null, Validators.required],
    roles: [''],

  });
////////////////////*****************////////////////////////////
}
AjoutUser(){
  console.log(this.User);
  //  this.addRole.id=this.jsonRole;
  // this.User.roles = JSON.parse(JSON.stringify(this.addRole));
  console.log(this.User);

  this.user_Service.SaveUserToRole(this.User).subscribe(
    (data) => {
      console.log(data);
      this.showNotification('top', 'center', 1, '<b>utilisateur ajouté avec succées!!!</b> :')
    }
  ),
(error)=>{
  console.error(error);
  this.showNotification('top', 'center', 3, "<b>utilisateur non ajouté</b> :");
} 

}

  ////////////////////Supprimer Details
  deleteDetails(index: number) {
    this.listRole.splice(index, 1);
   // this.updateTotal();
  }

///////////Notification
showNotification(from: any, align: any, idtype: any, note) {
  const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

  // const color = Math.floor((Math.random() * 6) + 1);

  $.notify({
    icon: 'notifications',
    message: note
  }, {
    type: type[idtype],
    timer: 2000,
    placement: {
      from: from,
      align: align
    },
    template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
      '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
      '<i class="material-icons" data-notify="icon">notifications</i> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}
}
