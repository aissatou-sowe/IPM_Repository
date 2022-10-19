import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  Login;
  Mot_passe;
  desactive:boolean=false;
  constructor(private user_Service:UtilisateurService,private router: Router, private route: ActivatedRoute,
    private formUtilisateur: FormBuilder) { }

  ngOnInit(): void {
    this.initfacteurform();
  }

///formulaire
initfacteurform() {
  this.UserForm = this.formUtilisateur.group({

    iduser: [null],
    login: [Validators.required],
    mot_passe: [null, Validators.required],
    roles: [''],

  });
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
}
AjoutUser(user){
  this.User.login=this.Login;
  this.User.mot_passe=this.Mot_passe;
  this.User.roles = JSON.parse(JSON.stringify(this.jsonRole))
  this.user_Service.SaveUserToRole(user).subscribe(
    (data) => {
      console.log(data);
    }
  );
this.showALERTE2('top', 'center')
this.desactive=true

}

///////////Notification
showALERTE2(from: any, align: any) {
  const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

  // const color = Math.floor((Math.random() * 6) + 1);

  $.notify({
    icon: 'notifications',
    message: '<b>Enregistrement avec succes </b> :'
  }, {
    type: type[1],
    timer: 9000,
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
