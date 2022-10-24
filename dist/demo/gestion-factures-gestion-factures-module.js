(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-factures-gestion-factures-module"],{

/***/ "+znE":
/*!*********************************************************************!*\
  !*** ./src/app/gestion-factures/gestion-factures-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: Factureroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factureroutes", function() { return Factureroutes; });
/* harmony import */ var _ajouter_factures_ajouter_factures_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-factures/ajouter-factures.component */ "IDCw");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification/certification.component */ "sk9U");
/* harmony import */ var _facture_employes_facture_employes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facture-employes/facture-employes.component */ "MznM");
/* harmony import */ var _liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-facture/liste-facture.component */ "983t");




var Factureroutes = [
    {
        path: '',
        children: [{
                path: 'Ajouterfactures',
                component: _ajouter_factures_ajouter_factures_component__WEBPACK_IMPORTED_MODULE_0__["AjouterFacturesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'certification/:id',
                component: _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__["CertificationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'FactureEmployes',
                component: _facture_employes_facture_employes_component__WEBPACK_IMPORTED_MODULE_2__["FactureEmployesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ListeFacture',
                component: _liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_3__["ListeFactureComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class GestionFacturesRoutingModule { }


/***/ }),

/***/ "5GYJ":
/*!***********************************!*\
  !*** ./src/app/Models/Employe.ts ***!
  \***********************************/
/*! exports provided: Employe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employe", function() { return Employe; });
var Employe = /** @class */ (function () {
    function Employe(idemp, nom, prenom, sexe, adresse_domicile, date_nais, lieu_nais, telephone, date_recrutement, matricule, reference, numero_carnet, situation_familial, solde, cumul_charge, niveau_salarial, ipm_categorie, ipmService, ipmEntity, photo, statut, ipmStatutEmploye, justificatif
    //public certifier?:boolean,
    ) {
        this.idemp = idemp;
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.adresse_domicile = adresse_domicile;
        this.date_nais = date_nais;
        this.lieu_nais = lieu_nais;
        this.telephone = telephone;
        this.date_recrutement = date_recrutement;
        this.matricule = matricule;
        this.reference = reference;
        this.numero_carnet = numero_carnet;
        this.situation_familial = situation_familial;
        this.solde = solde;
        this.cumul_charge = cumul_charge;
        this.niveau_salarial = niveau_salarial;
        this.ipm_categorie = ipm_categorie;
        this.ipmService = ipmService;
        this.ipmEntity = ipmEntity;
        this.photo = photo;
        this.statut = statut;
        this.ipmStatutEmploye = ipmStatutEmploye;
        this.justificatif = justificatif;
    }
    return Employe;
}());



/***/ }),

/***/ "5z/M":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/liste-facture/liste-facture.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--liste facture-->\n<style>\n    tr{font-weight: bold;}\n</style>\n<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"material-datatable\">\n            <div class=\"card-header card-header-icon\" >\n                <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                  <i class=\"material-icons\">list</i>\n                </div>\n                <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Liste des factures </h2>\n            </div>\n            <div class=\"card-body\">\n\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\n                    width=\"100%\" style=\"width:100%\">\n                    <!-- <div *ngFor=\"let item of pageOfItems\">{{item.nom}}</div> -->\n                    <thead style=\"background-color: whitesmoke; \">\n\n                        <tr>\n                            <!-- <th class=\"text-center\"><b>Id</b> </th>-->\n                            <th  style=\"font-weight:bold;\" cope=\"col\"> Numero facture</th>\n                            <th style=\"font-weight:bold;\" cope=\"col\">Prestataire</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\" >Date</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Montant Facture</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Charge ipm</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Charge agent</th>\n                            <!-- <th cope=\"col\">Date</th> -->\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Action</th>\n                            <!-- <th style=\"font-weight:bold;\" cope=\"col\"></th>  -->\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\" let fac of liste\">\n                            <td ><b>{{fac.numerofacture}}</b></td>\n                        <td ><b>{{fac.ipm_prestataire.nom_prestataire}}</b></td>\n                        <td class=\"text-center\"><b>{{fac.date_facture | date}}</b></td>\n\n                      <td class=\"text-center\"><b>{{fac.montantTotal | number:'.2'}}</b></td>\n                    <td class=\"text-center\"><b>{{fac.part_ipm | number:'.2'}}</b></td>\n             <td class=\"text-center\"><b>{{fac.part_patient | number:'.2'}}</b></td>\n\n                            <td class=\"td_actions text-right\">\n                                <!-- <button mat-raised-button type=\"button\" class=\"btn btn-outline-info\"> -->\n                                <button mat-raised-button (click)=\"getDetFactById(fac)\" type=\"button\" class=\"btn btn-round btn-xs\" id=\"edit\">\n                                    <i class=\"material-icons\" >help</i></button>\n                                        \n                            </td>\n                            <!-- <td>\n                        <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\n                            <div *ngSwitchCase=\"true\">\n                                \n                              <mat-checkbox checked=\"true\"></mat-checkbox>\n                            </div>\n                            \n                            <div *ngSwitchDefault>\n                                \n                              <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\n                            </div>\n                        </div>\n                      \n                    </td> -->\n                        </tr>\n                    </tbody>\n\n                </table>\n\n\n\n\n                <!-- <thead class=\"text-primary\">\n\n            \n         \n          <tfoot class=\"text-primary\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td><h4>TOTAL<p><div></div>{{montantTotals}}<p></h4></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              \n            </tr>\n          </tfoot> -->\n\n\n            </div>\n        </div>\n    </div>\n</div>\n<!-- modal modification -->\n\n        \n    \n");

/***/ }),

/***/ "983t":
/*!***************************************************************************!*\
  !*** ./src/app/gestion-factures/liste-facture/liste-facture.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListeFactureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeFactureComponent", function() { return ListeFactureComponent; });
/* harmony import */ var _raw_loader_liste_facture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-facture.component.html */ "5z/M");
/* harmony import */ var _liste_facture_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-facture.component.css */ "Wufc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListeFactureComponent = /** @class */ (function () {
    function ListeFactureComponent(fact_service, datepipe, router) {
        this.fact_service = fact_service;
        this.datepipe = datepipe;
        this.router = router;
        this.isCheik = false;
        this.listDetail = [];
        this.listEmploie = [];
        this.listCertifier = [];
    }
    ListeFactureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fact_service.getAllFactureglobale().subscribe(function (data) {
            $(function () {
                $('#datatable').DataTable({
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    responsive: true,
                    language: {
                        search: "_INPUT_",
                        searchPlaceholder: "Recherche",
                        info: " _START_/_END_ sur _TOTAL_ demandes",
                        paginate: {
                            "first": "Début",
                            "previous": "Précédent",
                            "next": "Suivant",
                            "last": "Fin"
                        },
                        lengthMenu: "Afficher par _MENU_",
                        infoFiltered: ""
                    },
                });
            });
            _this.liste = data;
            //      for (let index = 0; index < this.listFacture.length; index++) {
            //       //  if(this.listFacture[0].ipm_facture.certifier!=true){
            //       //    this.liste.push(this.listFacture[index].ipm_facture)
            console.log(_this.liste);
            //console.log((<any>$('#datatable')).dataTable())
            //       //  }
            //      }
            // console.log(this.date1)
            //     console.log(this.listFacture);
        });
    };
    ListeFactureComponent.prototype.getDetFactById = function (fac) {
        //location.reload();
        //(<any>$('#datatable1')).dataTable().fnDestroy();
        console.log(fac.idfacture);
        this.router.navigate(['/gestion-factures/certification/' + fac.idfacture]);
    };
    ListeFactureComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_5__["FactureService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListeFactureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-liste-facture',
            template: _raw_loader_liste_facture_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_facture_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_5__["FactureService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListeFactureComponent);
    return ListeFactureComponent;
}());



/***/ }),

/***/ "9JJ4":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/facture-employes/facture-employes.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--saisi facture-->\n<style>\n  b {\n    color: black;\n  }\n</style>\n<!---->\n<div class=\"card\">\n  <div class=\"card-header card-header-icon\">\n    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n      <i class=\"material-icons\">search</i>\n    </div>\n    <h2 class=\"text-center\" \n    style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture par\n      saisie</h2>\n  </div>\n  <div class=\"card-body\">\n\n    <form>\n      <div class=\"row\">\n        <!-- <div class=\"col-md-4 form-group\" style=\"margin-top: -20px;\">\n          <mat-form-field>\n            <mat-select multiple placeholder=\"Choisir Plusieurs Participant\" name=\"Employe\" class=\"form-control\" id=\"Employe\"\n            [(ngModel)]=\"Employe\">\n              <mat-option *ngFor=\"let emp of listemploye\" [value]=\"emp.idemp\"\n              (click)=\"getnomemploye(emp)\">\n                {{ emp.matricule}}-{{ emp.prenom}}-{{emp.nom}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div> -->\n\n\n\n        <div class=\"form-group  col-md-3\" style=\"margin-top: -20px;\">\n          <label for=\"Matricule\"><b>Matricule</b> </label>\n          <input type=\"text\" name=\"matricule\" class=\"form-control\" id=\"matricule\" [(ngModel)]=\"matricule\">\n        </div>\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -35px;\">\n          <!--*ngIf=\"agree\" -->\n          <mat-form-field>\n            <label for=\"Prestataires\"><b>Prestataires</b> </label>\n            <mat-select name=\"Prestataires\" class=\"form-control\" id=\"Prestataires\" formControlName=\"Prestataires\">\n              <mat-option *ngFor=\"let prest of listPrestataire\" [value]=\"prest.code_prestataire\"\n                (click)=\"getnomprestataire(prest)\">\n                {{ prest.nom_prestataire }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -20px;\">\n\n          <label for=\"numerofacture\"><b>Numero Facture</b></label><br />\n\n          <input type=\"number\" class=\"form-control\" id=\"numerofacture\" name=\"numerofacture\" [(ngModel)]=\"numerofacture\">\n        </div>\n        <div class=\"form-group  col-md-3\" style=\"margin-top: -20px;\">\n          <label for=\"date_facture\"><b>Date Facture</b>\n          </label>\n          <input type=\"date\" class=\"form-control\" id=\"date_facture\" name=\"date_facture\" placeholder=\"date_facture\"\n            [(ngModel)]=\"date_facture\">\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" (click)=\"findByMatricules()\">recherche\n        </button>\n\n      </div>\n    </form>\n\n  </div>\n</div>\n<!--fin recherche-->\n<div class=\"\" *ngIf=\"message\">\n\n  <div class=\"\">\n\n    <!---->\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\">\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">text_snippet</i>\n        </div>\n        <h2 class=\"text-center\"\n         style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture Prestation</h2>\n    </div>\n      <div class=\"card-body\">\n\n        <form [formGroup]=\"factureForm\">\n\n          <div class=\"row\">\n\n\n            <div class=\"col-md-4 form-group\" style=\"margin-top: -20px;\">\n              <mat-form-field>\n                <label for=\"Prestataires\"><b>Choisir une Prestation</b> </label>\n                <mat-select  name=\"Prestation\"\n                  class=\"form-control\" id=\"Prestation\" [(ngModel)]=\"Prestation\">\n                  <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\" (click)=\"getnom(pret)\">\n                    {{ pret.libelle }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n          </div>\n          <hr>\n          <div class=\"row\" style=\"color:black;\">\n\n\n            <div class=\"col-md-3 form-group\">\n              <label for=\"Matricule\"><b>Matricule</b></label><br />\n                 <b> {{message.matricule}}</b>\n              <!-- <input type=\"number\" class=\"form-control\" id=\"matricule\" formControlName=\"Matricule\"> -->\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <label for=\"participant\"> <b>participant</b></label><br />\n              <b>{{message.nom}} {{message.prenom}}</b>\n              <!-- <input type=\"text\" class=\"form-control\" id=\"Montant\" formControlName=\"participant\"> -->\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <label for=\"prestation\"><b>prestation</b></label><br />\n              <b>{{prestation_choisi}}</b>\n              <!-- <input type=\"text\" class=\"form-control\" id=\"prestation\" formControlName=\"prestation\"> -->\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <label for=\"Prestataires \"><b>Prestataires</b></label><br />\n              <b>{{prestataire_choisi}}</b>\n              <!-- <input type=\"number\" class=\"form-control\" id=\"matricule\" formControlName=\"Matricule\"> -->\n            </div>\n\n\n          </div>\n          <hr>\n          <div class=\"row\">\n\n            <div class=\"col-md-3 form-group\">\n              <label for=\"Montant\"><b>Montant Facture</b></label>\n\n              <input type=\"number\" class=\"form-control\" id=\"Montant\" formControlName=\"Montant\">\n            </div>\n            <div class=\"col-md-3 form-group\">\n              <label for=\"Code_acte\"><b>Code acte</b></label><br />\n\n              <input type=\"number\" class=\"form-control\" id=\"Code_acte\" formControlName=\"Code_acte\">\n            </div>\n\n            <div class=\"col-md-3 form-group\">\n              <label for=\"Taux_ipm\"><b>Taux ipm</b></label><br />\n              {{taux_ipm}}\n              <!-- <input type=\"number\" class=\"form-control\" id=\"Taux_ipm\" formControlName=\"Taux_ipm\"> -->\n            </div>\n\n          </div>\n          <hr>\n          <div class=\"row\">\n\n\n\n\n            <!-- <div class=\"form-group  col-md-3\">\n                <label for=\"date_saisie\">Date de saisie</label>\n                <input type=\"date\" class=\"form-control\" id=\"date_saisie\" formControlName=\"date_saisie\">\n              </div> -->\n\n            <div class=\"form-group  col-md-3\">\n              <label for=\"date_prestation\"><b>date de prestation</b></label>\n              <input type=\"date\" class=\"form-control\" id=\"date_prestation\" formControlName=\"date_prestation\">\n            </div>\n\n\n          </div>\n\n\n\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" (click)=\"addDetails()\">Ajouter\n              facture </button>\n\n          </div>\n\n          <div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--liste facture-->\n<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\">\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">list</i>\n\n      </div>\n      <h2 class=\"text-center\" \n      style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">liste Prestation\n      </h2>\n    </div>\n    <div class=\"card-body\">\n\n      <table class=\"table table-hover table-bordered\">\n\n        <thead style=\"font-weight:bold;\">\n\n          <th cope=\"col\"> Matricule</th>\n          <th cope=\"col\">Participant</th>\n          <th cope=\"col\">Prestation</th>\n          <!-- <th cope=\"col\">Code Prestation</th> -->\n          <th cope=\"col\">TauxIpm</th>\n          <th cope=\"col\">MontantFacture</th>\n          <th cope=\"col\">ChargeIpm</th>\n          <th cope=\"col\">ChargeAgent</th>\n          <th cope=\"col\">Date</th>\n          <th cope=\"col\">Action</th>\n\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let element of panier; let i=index\">\n            <td><b>{{element.matricule}}</b></td>\n            <td><b>{{element.ipm_employe?.prenom}}</b></td>\n            <td><b>{{prestation_choisi}}</b></td>\n            <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n            <td><b>{{element.taux_ipm}}</b></td>\n            <td><b>{{element.montant_facture}}</b></td>\n            <td><b>{{element.part_ipm}}</b></td>\n            <td><b>{{element.part_patient}}</b></td>\n            <td><b>{{element.datePrestation | date: 'dd/MM/yyyy'}}</b></td>\n            <td class=\"td_actions\">\n              <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetails(i)><span\n                  class=\"fa fa-trash-o\"></span></i>\n            </td>\n            <!-- <td>\n              <button class=\"btn btn-info btn-block\" \n             data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n              </button></td> -->\n\n\n          </tr>\n        </tbody>\n        <tfoot style=\"font-weight:bold;\">\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>\n              <h4>TOTAL</h4>\n            </td>\n            <td>{{total}}</td>\n            <td>{{totalChargeIpm}}</td>\n            <td>{{totalChargeAgent}}</td>\n            <td></td>\n            <td></td>\n            <td></td>\n\n          </tr>\n        </tfoot>\n\n      </table>\n      <div class=\"modal-footer justify-content-center\">\n        <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" (click)=\"ajoutFacture()\">Valider facture\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!--fin liste-->\n\n\n<!-- Partie Modification -->\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modification du facture Prestataire</h4>\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form #userForme=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <label for=\"Montant\">Montant Facture</label>\n\n              <input type=\"number\" class=\"form-control\" id=\"montant_facture\" formControlName=\"dataa.montant_facture\">\n              <mat-form-field class=\"example-full-width\">\n\n                <input matInput type=\"text\" placeholder=\"nom prestataire\" id=\"nom_prestataire\" name=\"nom_prestataire\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"adresse\" id=\"adresse_prestataire\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <mat-form-field>\n                <!--{{currentprestataire.typePres}}-->\n                <mat-select placeholder=\"Prestataire\" name=\"listTypePrestataire\" [(ngModel)]=\"code_presta\">\n                  <mat-option *ngFor=\"let prest of cur\" [value]=\"prest.id_type_prestataire\">\n                    {{ prest.nom_type_prestaire }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Telephone\" id=\"telephone\" name=\"telephone\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Code Categorie\" id=\"code_categorie_pretataire\"\n                  name=\"code_categorie_pretataire\">\n              </mat-form-field>\n            </div>\n          </div>\n\n\n\n        </form>\n\n\n        <div class=\"modal-footer\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-success btn-round\"\n            data-dismiss=\"modal\">modifier</button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "ABBt":
/*!********************************************!*\
  !*** ./src/app/Services/enfant.service.ts ***!
  \********************************************/
/*! exports provided: EnfantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnfantService", function() { return EnfantService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnfantService = /** @class */ (function () {
    function EnfantService(http) {
        this.http = http;
    }
    EnfantService.prototype.AjoutEnfant = function (enfant) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'enfant', enfant, { responseType: 'text' });
    };
    EnfantService.prototype.listeEnfant = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + '/getenfantByid/' + idemp);
    };
    EnfantService.prototype.getEnfantById = function (idenf) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'enfant/' + idenf);
    };
    EnfantService.prototype.modifEnfant = function (enfant) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'putenfant', enfant, { responseType: 'text' });
    };
    //////////upload photo enfant
    EnfantService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('image', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "upload", formData);
    };
    EnfantService.prototype.uploadFileExtrait = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadExtrait", formData);
    };
    //////////upload piece extrait de naissance uploadExtrait
    EnfantService.prototype.uploadExtraitNaiss = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "ext", formData);
    };
    EnfantService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    EnfantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EnfantService);
    return EnfantService;
}());



/***/ }),

/***/ "IDCw":
/*!*********************************************************************************!*\
  !*** ./src/app/gestion-factures/ajouter-factures/ajouter-factures.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AjouterFacturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterFacturesComponent", function() { return AjouterFacturesComponent; });
/* harmony import */ var _raw_loader_ajouter_factures_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajouter-factures.component.html */ "WQN+");
/* harmony import */ var _ajouter_factures_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-factures.component.css */ "OWEX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Prestataire */ "gL+i");
/* harmony import */ var src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Prestations */ "fnsB");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Services/prestation.service */ "E7Th");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Models/IPM_Facture */ "Uzns");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AjouterFacturesComponent = /** @class */ (function () {
    //detailFacture : Array<IPM_Details_Facture> = [];
    // import("c:/Users/HP/workspace/projet_IPM/material-dashboard-pro-angular-v2.5.0/material-dashboard-pro-angular-v2.5.0/src/app/Models/Prestations").Prestation[];
    function AjouterFacturesComponent(emp_service, router, route, pres_service, httpClient, conj_service, enf_service, prestation, formbuildFacture, fact_service, toastr, dateAdapter, datepipe) {
        this.emp_service = emp_service;
        this.router = router;
        this.route = route;
        this.pres_service = pres_service;
        this.httpClient = httpClient;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.prestation = prestation;
        this.formbuildFacture = formbuildFacture;
        this.fact_service = fact_service;
        this.toastr = toastr;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.currentfacture = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].URL + '/fileupload';
        this.facture = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.Factures = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.factureglobal = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.listEmploye = [];
        this.objt = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.Facturess = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
        this.pani = [];
        this.panier = [];
        this.detailFactur = { idDedtailsFacture: null, datePrestation: null, taux_ipm: null, montant_facture: null, part_ipm: null, part_patient: null, ipm_prestation: null, ipm_employe: null };
        this.desactive = false;
        this.compte = 0;
        /////////////////////////////////////////
        //   addfile(event)     
        //   {    
        //   this.file= event.target.files[0];     
        //   let fileReader = new FileReader();    
        //   fileReader.readAsArrayBuffer(this.file);     
        //   fileReader.onload = (e) => {    
        //       this.arrayBuffer = fileReader.result;    
        //       var data = new Uint8Array(this.arrayBuffer);    
        //       var arr = new Array();    
        //       for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        //       var bstr = arr.join("");    
        //       var workbook = xlsx.read(bstr, {type:"binary"});    
        //       var first_sheet_name = workbook.SheetNames[0];    
        //       var worksheet = workbook.Sheets[first_sheet_name];    
        //       console.log(xlsx.utils.sheet_to_json(worksheet,{raw:true}));    
        //         var arraylist = xlsx.utils.sheet_to_json(worksheet,{raw:true});     
        //             this.filelist = [];    
        //             console.log(this.filelist)    
        //   }    
        // } 
        this.data = [[,], [,]];
        this.wopts = { bookType: 'xlsx', type: 'array' };
        this.fileName = 'SheetJS.xlsx';
        this.dateAdapter.setLocale('en-GB');
        this.ipm_prestataires = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_8__["Prestataire"]();
        this.ipm_prestations = new src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_9__["Prestation"]();
        this.ipm_employes = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__["Employe"]();
        this.ipm_facturess = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
    }
    AjouterFacturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploadForm = this.formbuildFacture.group({
            // evenement: ['', Validators.required],
            myFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Employe: [''],
            Prestation: [''],
            Prestataires: ['']
        });
        this.initfacteurform();
        this.id = this.route.snapshot.params['id'];
        //this.emp_service.getEmployeById(this.id).subscribe(
        // result => {
        //   this.employe = result;
        //   console.log(this.employe)
        // }
        // );
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            // console.log(cat);
            _this.listPrestataire = pres;
            console.log(_this.listPrestataire);
        });
        var AllPrestations = [];
        this.prestation.getAllPrestation().subscribe(function (pres) {
            // console.log(cat);
            _this.listPrestation = pres;
            for (var i = 0; i < _this.listPrestation.length; i++) {
                var emmployesdansPanier = _this.listPrestation[i].code_prestation;
                //mettre les employes  dans la variable tableau avec tous les employes
                AllPrestations.push(emmployesdansPanier);
                console.log(AllPrestations);
            }
            //  this.listPrestation.forEach(element =>{
            //    element.code_prestation
            //    console.log(element.code_prestation);
            //  })
            //console.log(this.listPrestation);
        });
        var MontantTotalCalcul = [];
        this.fact_service.getAllFacture().subscribe(function (fact) {
            _this.listFacture = fact;
            console.log(_this.listFacture);
            for (var i = 0; i < fact.length; i++) {
                var montantfacturePannier = fact[i].montant_facture;
                //  mettre les montants  dans la variable tableau avec tous les montants
                MontantTotalCalcul.push(montantfacturePannier);
                console.log(MontantTotalCalcul);
            }
            // Additionner les montants qu'il ya dans le tableau de la variable MontantTotalCalcul avec la méthode reducer
            var montantTotals = MontantTotalCalcul.reduce(function (a, b) {
                return a + b;
            });
            console.log("Le montant total  est:", montantTotals);
            // return montantTotals;
        });
        var AllEmployes = [];
        this.emp_service.listeEmploye().subscribe(function (result) {
            _this.listemploye = result;
            for (var i = 0; i < result.length; i++) {
                var emmployesdansPanier = result[i].idemp;
                //mettre les employes  dans la variable tableau avec tous les employes
                AllEmployes.push(emmployesdansPanier);
                console.log(AllEmployes);
            }
        });
    };
    //Recuperer le facture correspondant
    AjouterFacturesComponent.prototype.getFactureById = function (fac) {
        var _this = this;
        console.log(fac);
        this.fact_service.getFactureById(fac.idfacture).subscribe(function (result) {
            _this.currentfacture = result;
            console.log(_this.currentfacture.idfacture);
            // this.pres_service.getAllTypePrestataires().subscribe(
            //     data =>{
            //      // prestataire.ipm_type_prestataire?.nom_type_prestaire
            //       this.cur= data;
            //       console.log(this.cur);
            //     }
            // )
        });
    };
    ///formulaire
    AjouterFacturesComponent.prototype.initfacteurform = function () {
        this.factureForm = this.formbuildFacture.group({
            idfacture: [null],
            numerofacture: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            //prestation:[''],
            Montant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            // participant:[''],
            // Matricule:[null,Validators.required],
            //Taux_ipm:[null,Validators.required],
            //Charge_ipm:[null,Validators.required],
            //Charge_agent:[null,Validators.required],
            //Prestataires:['',Validators.required],
            Code_acte: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date_facture: [null],
            date_saisie: [null],
            date_prestation: [null],
        });
    };
    AjouterFacturesComponent.prototype.findByMatricules = function () {
        var _this = this;
        ///////Rechercher l'employé
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            _this.matr = _this.message.idemp;
            console.log(_this.matr);
            _this.enfant = _this.message;
            console.log(_this.enfant);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                console.log(_this.enfants);
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                console.log(_this.conjoints);
            });
            if (_this.message) {
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
                console.log(_this.message);
            }
            else if (!_this.message) {
                console.log("not existe");
                _this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :");
            }
        });
    };
    //Details:Details_Facture[];
    ////////////Save Facture
    // save() {
    //   console.log(this.factureForm.get('date_facture').value);
    //   this.facture.ipm_details_factures = [];
    //   let detailsFacture = new IPM_Details_Facture();
    //   this.facture.numerofacture = this.factureForm.get('numerofacture').value;
    //   detailsFacture.date_facture = this.factureForm.get('date_facture').value;
    //   detailsFacture.date_saisie = this.factureForm.get('date_saisie').value;
    //   detailsFacture.matricule = this.message.matricule;
    //   detailsFacture.montant_facture = this.factureForm.get('Montant').value;
    //   detailsFacture.ipm_employe = this.message;
    //   console.log(this.facture.ipm_details_factures.ipm_employe);
    //   this.facture.ipm_prestataire = JSON.parse(JSON.stringify(this.ipm_prestataires));
    //   detailsFacture.ipm_prestation = JSON.parse(JSON.stringify(this.ipm_prestations));
    //   detailsFacture.part_patient = (this.factureForm.get('Montant').value) - ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
    //   // facture.tarification = this.taux_ipm;
    //   console.log(detailsFacture.part_patient);
    //   detailsFacture.taux_ipm = this.taux_ipm;
    //   detailsFacture.part_ipm = ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
    //   console.log(detailsFacture.part_ipm);
    //   detailsFacture.code_acte = this.factureForm.get('Code_acte').value;
    //   this.facture.ipm_details_factures.push(detailsFacture)
    //   console.log(this.facture);
    //   console.log(this.facture.ipm_details_factures);
    //   const detailsfacture = new IPM_Details_Facture()
    //   //detailsfacture.numerofacture = this.factureForm.get('numerofacture').value;
    //   detailsfacture.date_facture = this.factureForm.get('date_facture').value;
    //   detailsfacture.date_saisie = this.factureForm.get('date_saisie').value;
    //   // detailsfacture.matricule = this.message.matricule;
    //   detailsfacture.montant_facture = this.factureForm.get('Montant').value;
    //   // detailsfacture.ipm_employe= this.message;
    //   detailsfacture.ipm_employe = JSON.parse(JSON.stringify(this.ipm_employes));
    //   //  facture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
    //   console.log(detailsfacture.ipm_employe.idemp);
    //   //facture.ipm_prestataire =JSON.parse(JSON.stringify(this.ipm_prestataires));
    //   // detailsfacture.ipm_facture=JSON.parse(JSON.stringify(this.ipm_factures));
    //   detailsfacture.ipm_prestation = JSON.parse(JSON.stringify(this.ipm_prestations));
    //   detailsfacture.part_patient = (this.factureForm.get('Montant').value) - ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
    //   detailsfacture.tarification = this.taux_ipm;
    //   detailsfacture.taux_ipm = this.taux_ipm;
    //   detailsfacture.part_ipm = ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
    //   //facture.idfacture = this.factureForm.get('numero_facture').value;
    //   detailsfacture.code_acte = this.factureForm.get('Code_acte').value;
    //   console.log(detailsfacture);
    //   console.log(detailsfacture.montant_facture);
    //   //  for(let i=0;i<detailsfacture;i++){
    //   //   this.Details.push(detailsfacture[i]);
    //   //  }
    //   this.fact_service.AjoutFacture(this.facture).subscribe(
    //     result => {
    //       console.log(result);
    //       this.messagefacture = result;
    //       console.log(this.messagefacture.idfacture);
    //       let detailsFac: Array<IPM_Details_Facture> = [];
    //       for (let i = 0; i < this.facture.ipm_details_factures.length; i++) {
    //         console.log(this.facture.ipm_details_factures.length);
    //         this.facture.ipm_details_factures[i].idfacture = this.messagefacture.idfacture;
    //         console.log(this.facture.ipm_details_factures[i].idfacture);
    //         let DetailsPannier = this.facture.ipm_details_factures[i];
    //         console.log(DetailsPannier);
    //         //mettre les tous les details dans la variable tableau avec tous les details
    //         detailsFac.push(DetailsPannier);
    //         console.log(detailsFac);
    //       }
    //       this.fact_service.AjoutDetailsFacture(detailsFac).subscribe(data => {
    //         data;
    //         console.log(data);
    //       });
    //       //    let that = this;
    //       //    setTimeout(function(){
    //       //      that.reloadComponent();
    //       //    },5000);
    //       //  }, err=>{
    //       //    console.log(err);
    //       //    let that = this;
    //       //    setTimeout(function(){
    //       //     that.reloadComponent();
    //       //    },15000);
    //       this.toastr.success("Enregistrement avec succes du details ");
    //     });
    //   // this.toastr.error("Erreur d'enregistrement");
    // }
    ///////////////////////Save Details factures
    //Details =new Array();
    // saveDetailsFacture(){
    //   console.log("mon nom")
    //   const detailsfacture=new Details_Facture()
    //   detailsfacture.numerofacture=this.factureForm.get('numerofacture').value;
    //   detailsfacture.date_facture = this.factureForm.get('date_facture').value;
    //   detailsfacture.date_saisie = this.factureForm.get('date_saisie').value;
    //  // detailsfacture.matricule = this.message.matricule;
    //   detailsfacture.montant_facture= this.factureForm.get('Montant').value;
    //  // detailsfacture.ipm_employe= this.message;
    //   detailsfacture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
    //   //  facture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
    //   console.log(detailsfacture.ipm_employe.idemp);
    //   //facture.ipm_prestataire =JSON.parse(JSON.stringify(this.ipm_prestataires));
    //   detailsfacture.ipm_facture=JSON.parse(JSON.stringify(this.ipm_factures));
    //   detailsfacture.ipm_prestation=JSON.parse(JSON.stringify(this.ipm_prestations));
    //   detailsfacture.part_patient = (this.factureForm.get('Montant').value)-((this.factureForm.get('Montant').value)*this.taux_ipm)/100
    //   detailsfacture.tarification = this.taux_ipm;
    //   detailsfacture.taux_ipm=this.taux_ipm;
    //   detailsfacture.part_ipm =((this.factureForm.get('Montant').value)*this.taux_ipm)/100
    //   //facture.idfacture = this.factureForm.get('numero_facture').value;
    //   detailsfacture.code_acte = this.factureForm.get('Code_acte').value;
    //   console.log(detailsfacture);
    //   console.log(detailsfacture.montant_facture);
    //   this.Details.push(detailsfacture)
    //   this.fact_service.AjoutDetailsFacture(this.Details).subscribe(data=>
    //     {
    //       this.Details;
    //       console.log(this.Details);
    //       this.toastr.success("details ajouter avec success")
    //       this.ngOnInit
    //     })
    //     this.toastr.error("Erreur d'enregistrement")
    // }
    ////////////////////////Fonction qui permet de choisir plusieurs employées
    AjouterFacturesComponent.prototype.getnomemploye = function (emp) {
        this.employe_choisi = emp.idemp;
        this.id_emp_choisi = emp.idemp;
        console.log(this.employe_choisi);
    };
    AjouterFacturesComponent.prototype.findByMatricule = function () {
        var _this = this;
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            //     console.log(this.message.idemp);
            if (_this.message) {
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
                console.log(_this.message);
            }
            else if (!_this.message) {
                console.log("not existe");
                _this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :");
            }
        });
    };
    AjouterFacturesComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
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
    };
    AjouterFacturesComponent.prototype.getnom = function (pret) {
        console.log(pret);
        this.prestation_choisi = pret.libelle;
        this.id_prestation_choisi = pret.code_prestation;
        this.agree = pret.taux_agrees;
        this.non_agree = pret.taux_non_agrees;
        this.Jsonprestations = pret;
        if (this.val == 1) {
            this.taux_ipm = this.agree;
            console.log(this.taux_ipm, "agreer");
            //this.part_imp=(5000*this.taux_ipm)/100
            // this.part_patient=5000-(5000*this.taux_ipm)/100
        }
        else
            console.log(this.non_agree);
        this.taux_ipm = this.non_agree;
        console.log(this.ipm_prestations);
        console.log(this.id_prestation_choisi);
        var detailsFac = [];
        for (var i = 0; i < this.id_prestation_choisi; i++) {
            var DetailsePannier = this.id_prestation_choisi[i];
            //mettre les montants  dans la variable tableau avec tous les montants
            detailsFac.push(DetailsePannier);
            console.log(detailsFac);
        }
    };
    //choixDate(){
    //}
    AjouterFacturesComponent.prototype.getnomprestataire = function (prest) {
        console.log(prest);
        this.prestataire_choisi = prest.nom_prestataire;
        this.id_prest_choisi = prest.code_prestataire;
        this.val = prest.code_categorie_pretataire;
        //this.part_imp=(5000*this.taux_ipm)/100
        this.jsonPrest = prest;
        console.log(this.taux_ipm, "non agrreer");
        this.ipm_prestataires.code_prestataire = this.id_prest_choisi;
    };
    AjouterFacturesComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        this.date1 = this.datepipe.transform(this.dateFacture, 'dd-MM-yyyy');
        console.log(this.date1);
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_17__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            _this.wb.SheetNames.forEach(function (ele) {
                _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].sheet_to_json(_this.wb.Sheets[ele]);
                console.log(_this.ws);
            });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
            _this.calculemontant(_this.ws);
            console.log(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ///Calcul du total 
    AjouterFacturesComponent.prototype.calculemontant = function (fac) {
        this.total = 0;
        this.totalChargeIpm = 0;
        this.totalChargeAgent = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element_1 = fac_1[_i];
            this.total += element_1.Montant;
            //console.log(this.total);
            this.totalChargeIpm += (element_1.Montant * this.taux_ipm) / 100;
            // console.log(this.totalChargeIpm);
            this.totalChargeAgent += element_1.Montant - (element_1.Montant * this.taux_ipm) / 100;
        }
    };
    AjouterFacturesComponent.prototype.ajoutFacture = function (fac) {
        var _this = this;
        //var detailFacture=IPM_Details_Facture
        // console.log(fac.Montant)
        //for (let i = 0; i <fac.length ; i++) {
        //var detailFactur: IPM_Details_Facture;
        //new Promise(function (resolve,reject) {
        var bonmatricule = false;
        this.factureglobal.montantTotal = this.total;
        this.factureglobal.part_ipm = this.totalChargeIpm;
        this.factureglobal.part_patient = this.totalChargeAgent;
        this.factureglobal.ipm_prestataire = JSON.parse(JSON.stringify(this.jsonPrest));
        this.factureglobal.date_facture = this.dateFacture;
        this.factureglobal.numerofacture = this.NumeroFacture;
        this.factureglobal.date_saisie = new Date();
        this.fact_service.AjoutFacture(this.factureglobal).subscribe(function (data) {
            console.log(data);
            _this.factureglobal.idfacture = parseInt(data);
            var _loop_1 = function (index) {
                //break;
                _this.emp_service.getEmployeByMatricule(index.Matricule).subscribe(
                //() => console.log("Processing Complete."),
                function (data) {
                    _this.message = data;
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(data);
                        //console.log("null"),
                        //break;
                        // else
                        // console.log("pas null")
                        var element_2 = index.Nfacture;
                        console.log(index.Nfacture);
                        //for (let i = 0; i <fac.length ; i++ {
                        //console.log(this.listEmploye[0])
                        //}
                        _this.detailFactur.montant_facture = index.Montant;
                        _this.detailFactur.part_ipm = (index.Montant * _this.taux_ipm) / 100;
                        _this.detailFactur.part_patient = index.Montant - (index.Montant * _this.taux_ipm) / 100;
                        _this.detailFactur.ipm_prestation = JSON.parse(JSON.stringify(_this.Jsonprestations));
                        _this.detailFactur.ipm_employe = _this.message;
                        _this.detailFactur.ipmFacture = _this.factureglobal;
                        _this.detailFactur.datePrestation = _this.dateFacture;
                        _this.detailFactur.matricule = index.Matricule;
                        _this.detailFactur.taux_ipm = _this.taux_ipm;
                        // this.detailFactur.datePrestation = new Date()
                        console.log(_this.detailFactur.ipmFacture);
                        console.log(index.Montant);
                        console.log(_this.detailFactur);
                        _this.panier.push(__assign({}, _this.detailFactur));
                        console.log(fac.length, _this.listEmploye.length);
                        // while (this.panier) {
                        if (fac.length == _this.listEmploye.length) {
                            console.log(_this.listEmploye.length);
                            _this.fact_service.AjoutDetailsFacture(_this.panier).subscribe(function (data) {
                                console.log(data);
                            });
                            _this.fact_service.UpdateFacture(_this.factureglobal).subscribe(function (data) {
                                console.log(data);
                            });
                            _this.showALERTE2('top', 'center');
                            _this.desactive = true;
                        }
                    }
                    else if (!_this.message && _this.factureglobal.idfacture) {
                        //this.compte++
                        console.log("Erreur sur le fichier " + index.Matricule, index, _this.compte);
                        _this.indexMatricule = _this.compte;
                        console.log(_this.factureglobal);
                        _this.fact_service.deleteById(_this.factureglobal.idfacture).subscribe(function (data) {
                            _this.matri = index.Matricule;
                            _this.showALERTE('top', 'center');
                            console.log(+index.Matricule);
                        });
                        // this.router.navigate(['/gestion-factures']);
                    }
                });
            };
            for (var _i = 0, fac_2 = fac; _i < fac_2.length; _i++) {
                var index = fac_2[_i];
                _loop_1(index);
            }
        });
    };
    AjouterFacturesComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b>Veuillez verifer le fichier pour le Matricule :' + this.matri + ' a la ligne :' + this.indexMatricule + ' </b> :'
        }, {
            type: type[3],
            timer: 13000,
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
    };
    AjouterFacturesComponent.prototype.showALERTE2 = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    AjouterFacturesComponent.prototype.AjoutDetailsFacture = function (donne) {
        this.fact_service.AjoutDetailsFacture(donne).subscribe(function (data) {
            data;
        });
    };
    AjouterFacturesComponent.prototype.detailFact = function (detailFact) {
        throw new Error('Method not implemented.');
    };
    AjouterFacturesComponent.prototype.export = function () {
        /* generate worksheet */
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].aoa_to_sheet(this.data);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_17__["writeFile"](wb, this.fileName);
    };
    ////////////////////////
    AjouterFacturesComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // @ts-ignore
            this.uploadForm.get('myFile').setValue(file);
        }
    };
    ///////////////////////RELOAD
    AjouterFacturesComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    AjouterFacturesComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        // @ts-ignore
        formData.append('file', this.uploadForm.get('myFile').value);
        // @ts-ignore
        // formData.append('field', this.uploadForm.get('evenement').value);
        this.httpClient.post(this.SERVER_URL, formData).subscribe(function (response) {
            console.log(response);
            _this.toastr.info("Fichier chargé avec succes");
            var that = _this;
            setTimeout(function () {
                that.reloadComponent();
            }, 5000);
        }, function (err) {
            console.log(err);
            var that = _this;
            setTimeout(function () {
                that.reloadComponent();
            }, 15000);
        });
    };
    AjouterFacturesComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__["PrestataireService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__["EnfantService"] },
        { type: src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_15__["PrestationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_13__["FactureService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"] }
    ]; };
    AjouterFacturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ajouter-factures',
            template: _raw_loader_ajouter_factures_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajouter_factures_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__["PrestataireService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__["EnfantService"],
            src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_15__["PrestationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_13__["FactureService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"]])
    ], AjouterFacturesComponent);
    return AjouterFacturesComponent;
}());



/***/ }),

/***/ "MznM":
/*!*********************************************************************************!*\
  !*** ./src/app/gestion-factures/facture-employes/facture-employes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FactureEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureEmployesComponent", function() { return FactureEmployesComponent; });
/* harmony import */ var _raw_loader_facture_employes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./facture-employes.component.html */ "9JJ4");
/* harmony import */ var _facture_employes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facture-employes.component.css */ "nr2k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_IPM_Detils_Factures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/IPM_Detils_Factures */ "N7aF");
/* harmony import */ var src_app_Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/IPM_Facture */ "Uzns");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Services/prestation.service */ "E7Th");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var FactureEmployesComponent = /** @class */ (function () {
    function FactureEmployesComponent(builder, emp_service, router, route, pres_service, prestation, fact_service, toastr, conj_service, enf_service, dateAdapter, datepipe) {
        this.builder = builder;
        this.emp_service = emp_service;
        this.router = router;
        this.route = route;
        this.pres_service = pres_service;
        this.prestation = prestation;
        this.fact_service = fact_service;
        this.toastr = toastr;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.panier = [];
        this.items = [];
        this.Factures = new src_app_Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_7__["Facture"]();
        this.validerFact = false;
    }
    FactureEmployesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            // console.log(cat);
            _this.listPrestataire = pres;
            console.log(_this.listPrestataire);
        });
        var AllPrestations = [];
        this.prestation.getAllPrestation().subscribe(function (pres) {
            // console.log(cat);
            _this.listPrestation = pres;
            for (var i = 0; i < _this.listPrestation.length; i++) {
                var emmployesdansPanier = _this.listPrestation[i].code_prestation;
                //mettre les employes  dans la variable tableau avec tous les employes
                AllPrestations.push(emmployesdansPanier);
                console.log(AllPrestations);
            }
            //  this.listPrestation.forEach(element =>{
            //    element.code_prestation
            //    console.log(element.code_prestation);
            //  })
            //console.log(this.listPrestation);
        });
    };
    FactureEmployesComponent.prototype.createForm = function () {
        this.factureForm = this.builder.group({
            idfacture: [null],
            // numerofacture:[0,Validators.required],
            //prestation:[''],
            Montant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // participant:[''],
            Matricule: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            //Taux_ipm:[null,Validators.required],
            //Charge_ipm:[null,Validators.required],
            //Charge_agent:[null,Validators.required],
            //Prestataires:['',Validators.required],
            Code_acte: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // date_facture:[null],
            //date_saisie:[null],
            date_prestation: [null],
        });
    };
    //////////////////Fonction pour choisir le libelle de la prestation
    FactureEmployesComponent.prototype.addToCart = function (product) {
        this.items.push(product);
    };
    FactureEmployesComponent.prototype.getnom = function (pret) {
        console.log(pret);
        this.prestation_choisi = pret.libelle;
        this.id_prestation_choisi = pret.code_prestation;
        this.agree = pret.taux_agrees;
        this.non_agree = pret.taux_non_agrees;
        this.Jsonprestations = pret;
        if (this.val == 1) {
            this.taux_ipm = this.agree;
            console.log(this.taux_ipm, "agreer");
            //this.part_imp=(5000*this.taux_ipm)/100
            // this.part_patient=5000-(5000*this.taux_ipm)/100
        }
        else
            console.log(this.non_agree);
        this.taux_ipm = this.non_agree;
        console.log(this.ipm_prestations);
        console.log(this.id_prestation_choisi);
        var detailsFac = [];
        for (var i = 0; i < this.id_prestation_choisi; i++) {
            var DetailsePannier = this.id_prestation_choisi[i];
            //mettre les montants  dans la variable tableau avec tous les montants
            detailsFac.push(DetailsePannier);
            console.log(detailsFac);
        }
    };
    FactureEmployesComponent.prototype.getnomprestataire = function (prest) {
        console.log(prest, prest.nom_prestataire);
        this.prestataire_choisi = prest.nom_prestataire;
        this.id_prest_choisi = prest.code_prestataire;
        this.val = prest.code_categorie_pretataire;
        //this.part_imp=(5000*this.taux_ipm)/100
        this.jsonPrest = prest;
        console.log(this.prestataire_choisi, this.taux_ipm, "non agrreer");
        this.ipm_prestataires.code_prestataire = this.id_prest_choisi;
    };
    FactureEmployesComponent.prototype.findByMatricules = function () {
        var _this = this;
        ///////Rechercher l'employé
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            _this.matr = _this.message.idemp;
            console.log(_this.matr);
            _this.enfant = _this.message;
            console.log(_this.enfant);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                console.log(_this.enfants);
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                console.log(_this.conjoints);
            });
            if (_this.message) {
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
                console.log(_this.message);
            }
            else if (!_this.message) {
                console.log("not existe");
                _this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :");
            }
        });
    };
    FactureEmployesComponent.prototype.findByMatricule = function () {
        var _this = this;
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            //     console.log(this.message.idemp);
            if (_this.message) {
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
                console.log(_this.message);
            }
            else if (!_this.message) {
                console.log("not existe");
                _this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :");
            }
        });
    };
    FactureEmployesComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
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
    };
    ///////////////////Save Panier
    FactureEmployesComponent.prototype.addDetails = function () {
        var detailsfact = new src_app_Models_IPM_Detils_Factures__WEBPACK_IMPORTED_MODULE_6__["IPM_Details_Facture"]();
        detailsfact.matricule = this.message.matricule,
            // detailsfact.numerofacture=this.factureForm.get('numerofacture').value,
            //detailsfact.date_facture=this.date_facture,
            detailsfact.datePrestation = this.factureForm.get('date_prestation').value;
        detailsfact.ipm_employe = this.message;
        //detailsfact.ipm_prestation.libelle=this.prestation_choisi; 
        // detailsfact.ipm_prestation.code_prestation=this.id_prestation_choisi;
        detailsfact.part_patient = (this.factureForm.get('Montant').value) - ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100;
        // facture.tarification = this.taux_ipm;
        console.log(detailsfact.part_patient);
        detailsfact.taux_ipm = this.taux_ipm;
        detailsfact.part_ipm = ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100;
        console.log(detailsfact.part_ipm);
        detailsfact.code_acte = this.factureForm.get('Code_acte').value;
        detailsfact.montant_facture = this.factureForm.get('Montant').value;
        // detailsfacture.ipm_employe= this.message;
        //JSON.parse(JSON.stringify(this.ipm_employes))      
        var f = detailsfact;
        f.ipm_prestation = JSON.parse(JSON.stringify(this.Jsonprestations));
        //f.ipm_prestation=this.id_prestation_choisi;
        console.log(f);
        this.panier.push(f);
        console.log(this.panier);
        // window.alert("details ajouter avec success");
        for (var key in this.factureForm.controls) {
            var control = this.factureForm.get(key);
            control.get('');
            control.updateValueAndValidity();
        }
        this.updateTotal();
    };
    ////////////////////Supprimer Details
    FactureEmployesComponent.prototype.deleteDetails = function (index) {
        this.panier.splice(index, 1);
        this.updateTotal();
    };
    ////////////////edit 
    FactureEmployesComponent.prototype.editDetails = function (index) {
        console.log(index);
        this.panier[index];
        console.log(this.panier[index]);
        this.dataa = this.panier[index];
        (this.factureForm.get('montant_facture')).value;
        (this.factureForm.get('matricule')).value;
        (this.factureForm.get('date_facture')).value;
        this.panier.splice(index, 1);
        this.updateTotal();
    };
    ///Calcul du total 
    FactureEmployesComponent.prototype.updateTotal = function () {
        this.total = 0;
        this.totalChargeIpm = 0;
        this.totalChargeAgent = 0;
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var element_1 = _a[_i];
            this.total += element_1.montant_facture;
            console.log(this.total);
            this.totalChargeIpm += element_1.part_ipm;
            this.totalChargeAgent += element_1.part_patient;
        }
    };
    FactureEmployesComponent.prototype.ajoutFacture = function () {
        var _this = this;
        //let Facture :Array<Facture>=[];
        this.Factures.ipm_prestataire = JSON.parse(JSON.stringify(this.jsonPrest));
        this.Factures.montantTotal = this.total;
        this.Factures.part_ipm = this.totalChargeIpm;
        this.Factures.part_patient = this.totalChargeAgent;
        this.Factures.numerofacture = this.numerofacture;
        this.Factures.date_facture = this.date_facture;
        this.Factures.date_saisie = new Date();
        console.log(this.jsonPrest);
        console.log(this.ipm_prestataires);
        //this.Factures.ipm_prestataire=JSON.parse(JSON.stringify(this.ipm_prestataires));
        console.log(this.Factures);
        //this.donnee=JSON.parse(JSON.stringify(this.Factures))
        this.fact_service.AjoutFacture(this.Factures).subscribe(function (result) {
            console.log(result);
            _this.idfacture = result;
            _this.Factures.idfacture = parseInt(result);
            _this.factuGlobale = _this.Factures;
            console.log(_this.Factures);
            for (var _i = 0, _a = _this.panier; _i < _a.length; _i++) {
                var i = _a[_i];
                i.ipmFacture = JSON.parse(JSON.stringify(_this.Factures));
            }
            console.log(_this.Factures, _this.panier);
            //this.panier.ipmFacture=this.Factures
            console.log(_this.panier);
            _this.fact_service.AjoutDetailsFacture(_this.panier).subscribe(function (data) {
                _this.validerFact = true;
                _this.showALERTE('top', 'center');
            }, function (err) {
                _this.showALERTE2('top', 'center');
            });
        });
    };
    FactureEmployesComponent.prototype.showALERTE2 = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b>Erreure d enregistrement  </b> :'
        }, {
            type: type[3],
            timer: 13000,
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
    };
    FactureEmployesComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b> enregistrement fait avec succes  </b> :'
        }, {
            type: type[1],
            timer: 13000,
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
    };
    FactureEmployesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_9__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__["PrestataireService"] },
        { type: src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_13__["PrestationService"] },
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_11__["FactureService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__["EnfantService"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"] }
    ]; };
    FactureEmployesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-facture-employes',
            template: _raw_loader_facture_employes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_facture_employes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_9__["EmployeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__["PrestataireService"], src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_13__["PrestationService"],
            src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_11__["FactureService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__["EnfantService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]])
    ], FactureEmployesComponent);
    return FactureEmployesComponent;
}());



/***/ }),

/***/ "N7aF":
/*!***********************************************!*\
  !*** ./src/app/Models/IPM_Detils_Factures.ts ***!
  \***********************************************/
/*! exports provided: IPM_Details_Facture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Details_Facture", function() { return IPM_Details_Facture; });
var IPM_Details_Facture = /** @class */ (function () {
    function IPM_Details_Facture(idDedtailsFacture, code_acte, 
    //public numerofacture?:number,
    //public date_facture?:Date,
    datePrestation, matricule, montant_facture, taux_ipm, part_ipm, part_patient, tarification, ipm_prestation, ipm_employe, ipmFacture) {
        this.idDedtailsFacture = idDedtailsFacture;
        this.code_acte = code_acte;
        this.datePrestation = datePrestation;
        this.matricule = matricule;
        this.montant_facture = montant_facture;
        this.taux_ipm = taux_ipm;
        this.part_ipm = part_ipm;
        this.part_patient = part_patient;
        this.tarification = tarification;
        this.ipm_prestation = ipm_prestation;
        this.ipm_employe = ipm_employe;
        this.ipmFacture = ipmFacture;
    }
    return IPM_Details_Facture;
}());



/***/ }),

/***/ "NbTU":
/*!**********************************************!*\
  !*** ./src/app/Services/conjoint.service.ts ***!
  \**********************************************/
/*! exports provided: ConjointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjointService", function() { return ConjointService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConjointService = /** @class */ (function () {
    function ConjointService(http) {
        this.http = http;
    }
    ConjointService.prototype.AjoutConjoint = function (conjoint) {
        console.log(conjoint);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'conjoint', conjoint, { responseType: 'text' });
    };
    ConjointService.prototype.listeConjoint = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'getconjointByid/' + idemp);
    };
    ConjointService.prototype.getConjoint = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'conjoint');
    };
    ConjointService.prototype.getEmploye = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'employe');
    };
    ConjointService.prototype.getConjointById = function (idconj) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'conjoint/' + idconj);
    };
    ConjointService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('image', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploade", formData);
    };
    ConjointService.prototype.modifConjoint = function (conjoint) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "putconjoint", conjoint, { responseType: 'text' });
    };
    ConjointService.prototype.uploadFileCertif = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadeCertif", formData);
    };
    ConjointService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    ConjointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConjointService);
    return ConjointService;
}());



/***/ }),

/***/ "OWEX":
/*!**********************************************************************************!*\
  !*** ./src/app/gestion-factures/ajouter-factures/ajouter-factures.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZmFjdHVyZXMvYWpvdXRlci1mYWN0dXJlcy9ham91dGVyLWZhY3R1cmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "WQN+":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/ajouter-factures/ajouter-factures.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!--saisi facture-->\n  <!---->\n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\" >\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">list</i>\n      </div>\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture par importation </h2>\n  </div>\n    <div class=\"card-body\">\n      <form>\n\n        <div class=\"row\">\n        \n\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -10px;\" >\n          <mat-form-field>\n            <mat-select  placeholder=\"Prestataires\" formControlName=\"Prestataires\" \n            class=\"form-control\" id=\"Prestataires\"\n              formControlName=\"Prestataires\">\n              <mat-option *ngFor=\"let prest of listPrestataire\" [value]=\"prest.code_prestataire\"\n              (click)=\"getnomprestataire(prest)\">\n                {{ prest.nom_prestataire }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -10px;\">\n          <mat-form-field>\n            <mat-select placeholder=\"Choisir une Prestation\" formControlName=\"Prestation\" class=\"form-control\" id=\"Prestation\"\n            [(ngModel)]=\"Prestation\">\n              <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\"\n              (click)=\"getnom(pret)\">\n                {{ pret.libelle }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\n          \n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\n        </div>\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n          <!-- <legend>date Facture</legend> -->\n          <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"date Facture\" id=\"dateFacture\" name=\"dateFacture\" [(ngModel)]=\"dateFacture\" (click)=\"picker1.open()\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n          </mat-form-field>\n      </div>\n        \n      </div>\n      </form>\n\n\n    </div>\n  </div>\n  \n  <!-- Ajouter au ponier details facture --> \n  <div class=\"card\">\n   <div class=\"card-header card-header-icon\">\n    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n      <i class=\"material-icons\">backup</i>\n    </div>\n    <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Importation fichier excel</h2>\n\n  </div>\n    \n    <div class=\"card-body\" >\n      <div class=\"row\" *ngIf=\"ws\">\n        <div class=\"form-group col-md-4\" style=\"font-weight:bold;\">\n          <h5 style=\"font-weight:bold;\"> PRESTATAIRE :{{prestataire_choisi}}</h5>\n\n        </div>\n        <div class=\"form-group  col-md-4\">\n          <h5 style=\"font-weight:bold;\">PRESTATION :{{prestation_choisi}}</h5>\n\n        </div>\n        <div class=\"form-group  col-md-4\">\n          <h5 style=\"font-weight:bold;\">DATE Facture  :{{date1}}</h5>\n\n        </div>\n\n\n      </div>\n      <form [formGroup]=\"uploadForm\">\n      \n          \n            <!-- <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" class=\"btn btn-outline-success\" /> -->\n      <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"myFile\"/>\n      <table class=\"table table-hover\">\n\n        <thead  style=\"font-weight:bold;\">\n\n          <th cope=\"col\"> Matricule</th>\n          \n          <!-- <th cope=\"col\">Prestation</th>\n          <th cope=\"col\">Prestataire</th> -->\n          <th cope=\"col\">TauxIpm</th>\n          <th cope=\"col\">Montant</th>\n          <th cope=\"col\">ChargeIpm</th>\n          <th cope=\"col\">ChargeAgent</th>\n          <th cope=\"col\">DateFacture</th>\n           <!-- <th cope=\"col\">Action</th>  -->\n\n        </thead>\n        <tbody>\n          <tr *ngFor=\" let fac of ws\">\n            <td  style=\"font-weight:bold;\">{{fac.Matricule}}</td>\n            \n            <!-- <td>{{prestation_choisi}}</td>\n            <td>{{prestataire_choisi}}</td> -->\n            <td style=\"font-weight:bold;\">{{taux_ipm}}</td>\n            <td style=\"font-weight:bold;\">{{fac.Montant}}</td>\n            <td style=\"font-weight:bold;\">{{(fac.Montant*taux_ipm)/100}}</td>\n            <td style=\"font-weight:bold;\">{{fac.Montant-(fac.Montant*taux_ipm)/100}}</td> \n            <td style=\"font-weight:bold;\">{{date1}}</td>\n            <!-- <td class=\"td_actions\">\n              <button mat-raised-button type=\"button\" class=\"btn btn-outline-info\">\n                <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#noticeModal\"\n                (click)=\"getFactureById(fac)\">edit</i>\n            </button> \n            </td> -->\n\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <!-- <td></td> -->\n            <!-- <td></td> -->\n            <td></td>\n            \n            \n            <td><h4 style=\"font-weight:bold;\">TOTAL</h4></td>\n            <td style=\"font-weight:bold;\">{{total}}</td>\n            <td style=\"font-weight:bold;\">{{totalChargeIpm}}</td>\n            <td style=\"font-weight:bold;\">{{totalChargeAgent}}</td>\n            <td></td>\n            <td></td>\n            <td></td>\n            \n            \n          </tr>\n        </tfoot>\n      </table>\n      <!--<button (click)=\"export()\" class=\"btn btn-outline-info\">Export!</button> -->\n      <div class=\"modal-footer justify-content-center\">\n      <button (click)=\"ajoutFacture(ws)\"  mat-raised-button class=\"btn btn-success\" [disabled]=\"desactive\">\n        <i class=\"material-icons\">checked</i>Ajouter Details Facture</button>\n      </div>\n    </form>\n    </div>\n  </div>\n  \n\n  \n  <!--fin liste-->\n\n\n<!-- lien.txt\nAffichage de lien.txt en cours... -->\n\n<!-- Partie Modification modification-->\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Modification du facture Prestataire</h4>\n      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n        <i class=\"material-icons\">clear</i>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <form #userForme=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <label for=\"Montant\">Montant Facture</label>\n              \n      <input type=\"number\" class=\"form-control\" id=\"montant_facture\" formControlName=\"montant_facture\"\n       (ngModel)=\"currrentfacture.montant_facture\" > \n            <mat-form-field class=\"example-full-width\">\n\n              <input matInput type=\"text\" placeholder=\"nom prestataire\" \n              id=\"nom_prestataire\" name=\"nom_prestataire\"\n              >  \n            </mat-form-field>\n          </div>\n          <div class=\"col-md-12\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput type=\"text\" placeholder=\"adresse\" id=\"adresse_prestataire\"\n               name=\"adresse_prestataire\">\n            </mat-form-field>\n          </div>\n        </div>\n       \n        <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n          <mat-form-field>\n           <!--{{currentprestataire.typePres}}--> \n            <mat-select placeholder=\"Prestataire\" name=\"listTypePrestataire\" [(ngModel)]=\"code_presta\">\n              <mat-option *ngFor=\"let prest of cur\" [value]=\"prest.id_type_prestataire\">\n                {{ prest.nom_type_prestaire }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> \n        </div>\n      </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Telephone\" id=\"telephone\"\n                  name=\"telephone\" >\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" placeholder=\"Code Categorie\" id=\"code_categorie_pretataire\"\n                  name=\"code_categorie_pretataire\" >\n              </mat-form-field>\n            </div>\n          </div>\n        \n\n\n      </form>\n\n\n      <div class=\"modal-footer\">\n        <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-success btn-round\" data-dismiss=\"modal\"\n          >modifier</button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "Wufc":
/*!****************************************************************************!*\
  !*** ./src/app/gestion-factures/liste-facture/liste-facture.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#edit{\n    background-color: rgb(0, 0, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1mYWN0dXJlcy9saXN0ZS1mYWN0dXJlL2xpc3RlLWZhY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZmFjdHVyZXMvbGlzdGUtZmFjdHVyZS9saXN0ZS1mYWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcbn0iXX0= */");

/***/ }),

/***/ "nr2k":
/*!**********************************************************************************!*\
  !*** ./src/app/gestion-factures/facture-employes/facture-employes.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZmFjdHVyZXMvZmFjdHVyZS1lbXBsb3llcy9mYWN0dXJlLWVtcGxveWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "z6mg":
/*!*************************************************************!*\
  !*** ./src/app/gestion-factures/gestion-factures.module.ts ***!
  \*************************************************************/
/*! exports provided: GestionFacturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionFacturesModule", function() { return GestionFacturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajouter_factures_ajouter_factures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajouter-factures/ajouter-factures.component */ "IDCw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gestion_factures_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestion-factures-routing.module */ "+znE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _facture_employes_facture_employes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facture-employes/facture-employes.component */ "MznM");
/* harmony import */ var _liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./liste-facture/liste-facture.component */ "983t");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./certification/certification.component */ "sk9U");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Factureroutes, GestionFacturesRoutingModule } from './gestion-factures-routing.module';









var GestionFacturesModule = /** @class */ (function () {
    function GestionFacturesModule() {
    }
    GestionFacturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajouter_factures_ajouter_factures_component__WEBPACK_IMPORTED_MODULE_2__["AjouterFacturesComponent"], _facture_employes_facture_employes_component__WEBPACK_IMPORTED_MODULE_8__["FactureEmployesComponent"], _liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_9__["ListeFactureComponent"], _certification_certification_component__WEBPACK_IMPORTED_MODULE_10__["CertificationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_gestion_factures_routing_module__WEBPACK_IMPORTED_MODULE_4__["Factureroutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                // GestionFacturesRoutingModule
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], GestionFacturesModule);
    return GestionFacturesModule;
}());



/***/ })

}]);
//# sourceMappingURL=gestion-factures-gestion-factures-module.js.map