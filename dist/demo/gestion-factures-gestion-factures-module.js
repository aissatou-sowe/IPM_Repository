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

/***/ "5z/M":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/liste-facture/liste-facture.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--liste facture-->\r\n<style>\r\n    tr{font-weight: bold;}\r\n</style>\r\n<div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n        <div class=\"material-datatable\">\r\n            <div class=\"card-header card-header-icon\" >\r\n                <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                  <i class=\"material-icons\">list</i>\r\n                </div>\r\n                <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Liste des factures </h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\r\n                    width=\"100%\" style=\"width:100%\">\r\n                    <!-- <div *ngFor=\"let item of pageOfItems\">{{item.nom}}</div> -->\r\n                    <thead style=\"background-color: whitesmoke; \">\r\n\r\n                        <tr>\r\n                            <!-- <th class=\"text-center\"><b>Id</b> </th>-->\r\n                            <th  style=\"font-weight:bold;\" cope=\"col\"> Numero facture</th>\r\n                            <th style=\"font-weight:bold;\" cope=\"col\">Prestataire</th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\" >Date</th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Montant Facture</th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Charge ipm</th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Charge agent</th>\r\n                            <!-- <th cope=\"col\">Date</th> -->\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Action</th>\r\n                            <!-- <th style=\"font-weight:bold;\" cope=\"col\"></th>  -->\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\" let fac of liste\">\r\n                            <td ><b>{{fac.numerofacture}}</b></td>\r\n                        <td ><b>{{fac.ipm_prestataire.nom_prestataire}}</b></td>\r\n                        <td class=\"text-center\"><b>{{fac.dateFacture | date}}</b></td>\r\n\r\n                      <td class=\"text-center\"><b>{{fac.montantTotal | number:'.2'}}</b></td>\r\n                    <td class=\"text-center\"><b>{{fac.part_ipm | number:'.2'}}</b></td>\r\n             <td class=\"text-center\"><b>{{fac.part_patient | number:'.2'}}</b></td>\r\n\r\n                            <td class=\"td_actions text-right\">\r\n                                <!-- <button mat-raised-button type=\"button\" class=\"btn btn-outline-info\"> -->\r\n                                <button mat-raised-button (click)=\"getDetFactById(fac)\" type=\"button\" class=\"btn btn-round btn-xs\" id=\"edit\">\r\n                                    <i class=\"material-icons\" >help</i></button>\r\n                                        \r\n                            </td>\r\n                            <!-- <td>\r\n                        <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\r\n                            <div *ngSwitchCase=\"true\">\r\n                                \r\n                              <mat-checkbox checked=\"true\"></mat-checkbox>\r\n                            </div>\r\n                            \r\n                            <div *ngSwitchDefault>\r\n                                \r\n                              <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                      \r\n                    </td> -->\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n\r\n\r\n\r\n                <!-- <thead class=\"text-primary\">\r\n\r\n            \r\n         \r\n          <tfoot class=\"text-primary\">\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td><h4>TOTAL<p><div></div>{{montantTotals}}<p></h4></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              \r\n            </tr>\r\n          </tfoot> -->\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- modal modification -->\r\n\r\n        \r\n    \r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!--saisi facture-->\r\n<style>\r\n  b {\r\n    color: black;\r\n  }\r\n</style>\r\n<!---->\r\n<div class=\"card\">\r\n  <div class=\"card-header card-header-icon\">\r\n    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n      <i class=\"material-icons\">search</i>\r\n    </div>\r\n    <h2 class=\"text-center\" \r\n    style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture par\r\n      saisie</h2>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <form>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-4 form-group\" style=\"margin-top: -20px;\">\r\n          <mat-form-field>\r\n            <mat-select multiple placeholder=\"Choisir Plusieurs Participant\" name=\"Employe\" class=\"form-control\" id=\"Employe\"\r\n            [(ngModel)]=\"Employe\">\r\n              <mat-option *ngFor=\"let emp of listemploye\" [value]=\"emp.idemp\"\r\n              (click)=\"getnomemploye(emp)\">\r\n                {{ emp.matricule}}-{{ emp.prenom}}-{{emp.nom}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n\r\n\r\n        <div class=\"form-group  col-md-3\" style=\"margin-top: -20px;\">\r\n          <label for=\"Matricule\"><b>Matricule</b> </label>\r\n          <input type=\"text\" name=\"matricule\" class=\"form-control\" id=\"matricule\" [(ngModel)]=\"matricule\">\r\n        </div>\r\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -35px;\">\r\n          <!--*ngIf=\"agree\" -->\r\n          <mat-form-field>\r\n            <label for=\"Prestataires\"><b>Prestataires</b> </label>\r\n            <mat-select name=\"Prestataires\" class=\"form-control\" id=\"Prestataires\" formControlName=\"Prestataires\">\r\n              <mat-option *ngFor=\"let prest of listPrestataire\" [value]=\"prest.code_prestataire\"\r\n                (click)=\"getnomprestataire(prest)\">\r\n                {{ prest.nom_prestataire }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -20px;\">\r\n\r\n          <label for=\"numerofacture\"><b>Numero Facture</b></label><br />\r\n\r\n          <input type=\"number\" class=\"form-control\" id=\"numerofacture\" name=\"numerofacture\" [(ngModel)]=\"numerofacture\">\r\n        </div>\r\n        <div class=\"form-group  col-md-3\" style=\"margin-top: -20px;\">\r\n          <label for=\"date_facture\"><b>Date Facture</b>\r\n          </label>\r\n          <input type=\"date\" class=\"form-control\" id=\"date_facture\" name=\"date_facture\" placeholder=\"date_facture\"\r\n            [(ngModel)]=\"date_facture\">\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" (click)=\"findByMatricules()\">recherche\r\n        </button>\r\n\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n<!--fin recherche-->\r\n<div class=\"\" *ngIf=\"message\">\r\n\r\n  <div class=\"\">\r\n\r\n    <!---->\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\">\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">text_snippet</i>\r\n        </div>\r\n        <h2 class=\"text-center\"\r\n         style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture Prestation</h2>\r\n    </div>\r\n      <div class=\"card-body\">\r\n\r\n        <form [formGroup]=\"factureForm\">\r\n\r\n          <div class=\"row\">\r\n\r\n\r\n            <div class=\"col-md-4 form-group\" style=\"margin-top: -20px;\">\r\n              <mat-form-field>\r\n                <label for=\"Prestataires\"><b>Choisir une Prestation</b> </label>\r\n                <mat-select  name=\"Prestation\"\r\n                  class=\"form-control\" id=\"Prestation\" [(ngModel)]=\"Prestation\">\r\n                  <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\" (click)=\"getnom(pret)\">\r\n                    {{ pret.libelle }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\" style=\"color:black;\">\r\n\r\n\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"Matricule\"><b>Matricule</b></label><br />\r\n                 <b> {{message.matricule}}</b>\r\n              <!-- <input type=\"number\" class=\"form-control\" id=\"matricule\" formControlName=\"Matricule\"> -->\r\n            </div>\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"participant\"> <b>participant</b></label><br />\r\n              <b>{{message.nom}} {{message.prenom}}</b>\r\n              <!-- <input type=\"text\" class=\"form-control\" id=\"Montant\" formControlName=\"participant\"> -->\r\n            </div>\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"prestation\"><b>prestation</b></label><br />\r\n              <b>{{prestation_choisi}}</b>\r\n              <!-- <input type=\"text\" class=\"form-control\" id=\"prestation\" formControlName=\"prestation\"> -->\r\n            </div>\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"Prestataires \"><b>Prestataires</b></label><br />\r\n              <b>{{prestataire_choisi}}</b>\r\n              <!-- <input type=\"number\" class=\"form-control\" id=\"matricule\" formControlName=\"Matricule\"> -->\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"Montant\"><b>Montant Facture</b></label>\r\n\r\n              <input type=\"number\" class=\"form-control\" id=\"Montant\" formControlName=\"Montant\">\r\n            </div>\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"Code_acte\"><b>Code acte</b></label><br />\r\n\r\n              <input type=\"number\" class=\"form-control\" id=\"Code_acte\" formControlName=\"Code_acte\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3 form-group\">\r\n              <label for=\"Taux_ipm\"><b>Taux ipm</b></label><br />\r\n              {{taux_ipm}}\r\n              <!-- <input type=\"number\" class=\"form-control\" id=\"Taux_ipm\" formControlName=\"Taux_ipm\"> -->\r\n            </div>\r\n\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n\r\n\r\n\r\n\r\n            <!-- <div class=\"form-group  col-md-3\">\r\n                <label for=\"date_saisie\">Date de saisie</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"date_saisie\" formControlName=\"date_saisie\">\r\n              </div> -->\r\n\r\n            <div class=\"form-group  col-md-3\">\r\n              <label for=\"date_prestation\"><b>date de prestation</b></label>\r\n              <input type=\"date\" class=\"form-control\" id=\"date_prestation\" formControlName=\"date_prestation\">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"modal-footer justify-content-center\">\r\n            <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" (click)=\"addDetails()\">Ajouter\r\n              facture </button>\r\n\r\n          </div>\r\n\r\n          <div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--liste facture-->\r\n<div class=\"col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-icon\">\r\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n        <i class=\"material-icons\">list</i>\r\n\r\n      </div>\r\n      <h2 class=\"text-center\" \r\n      style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">liste Prestation\r\n      </h2>\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <table class=\"table table-hover table-bordered\">\r\n\r\n        <thead style=\"font-weight:bold;\">\r\n\r\n          <th cope=\"col\"> Matricule</th>\r\n          <th cope=\"col\">Participant</th>\r\n          <th cope=\"col\">Prestation</th>\r\n          <!-- <th cope=\"col\">Code Prestation</th> -->\r\n          <th cope=\"col\">TauxIpm</th>\r\n          <th cope=\"col\">MontantFacture</th>\r\n          <th cope=\"col\">ChargeIpm</th>\r\n          <th cope=\"col\">ChargeAgent</th>\r\n          <th cope=\"col\">Date</th>\r\n          <th cope=\"col\">Action</th>\r\n\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let element of panier; let i=index\">\r\n            <td><b>{{element.matricule}}</b></td>\r\n            <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n            <!-- <td><b>{{prestation_choisi}}</b></td> -->\r\n            <td>{{element.ipm_prestation?.libelle}}</td>\r\n            <td><b>{{element.taux_ipm}}</b></td>\r\n            <td><b>{{element.montant_facture}}</b></td>\r\n            <td><b>{{element.part_ipm}}</b></td>\r\n            <td><b>{{element.part_patient}}</b></td>\r\n            <td><b>{{element.datePrestation | date: 'dd/MM/yyyy'}}</b></td>\r\n            <td class=\"td_actions\">\r\n              <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetails(i)><span\r\n                  class=\"fa fa-trash-o\"></span></i>\r\n            </td>\r\n            <!-- <td>\r\n              <button class=\"btn btn-info btn-block\" \r\n             data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n              </button></td> -->\r\n\r\n\r\n          </tr>\r\n        </tbody>\r\n        <tfoot style=\"font-weight:bold;\">\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td>\r\n              <h4>TOTAL</h4>\r\n            </td>\r\n            <td>{{total}}</td>\r\n            <td>{{totalChargeIpm}}</td>\r\n            <td>{{totalChargeAgent}}</td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n\r\n          </tr>\r\n        </tfoot>\r\n\r\n      </table>\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" (click)=\"ajoutFacture()\">Valider facture\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<!--fin liste-->\r\n\r\n\r\n<!-- Partie Modification -->\r\n<!-- <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modification du facture Prestataire</h4>\r\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n          <i class=\"material-icons\">clear</i>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form #userForme=\"ngForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <label for=\"Montant\">Montant Facture</label>\r\n\r\n              <input type=\"number\" class=\"form-control\" id=\"montant_facture\" formControlName=\"dataa.montant_facture\">\r\n              <mat-form-field class=\"example-full-width\">\r\n\r\n                <input matInput type=\"text\" placeholder=\"nom prestataire\" id=\"nom_prestataire\" name=\"nom_prestataire\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"adresse\" id=\"adresse_prestataire\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 form-group\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Prestataire\" name=\"listTypePrestataire\" [(ngModel)]=\"code_presta\">\r\n                  <mat-option *ngFor=\"let prest of cur\" [value]=\"prest.id_type_prestataire\">\r\n                    {{ prest.nom_type_prestaire }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"Telephone\" id=\"telephone\" name=\"telephone\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"Code Categorie\" id=\"code_categorie_pretataire\"\r\n                  name=\"code_categorie_pretataire\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </form>\r\n\r\n\r\n        <div class=\"modal-footer\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-success btn-round\"\r\n            data-dismiss=\"modal\">modifier</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "FC1X":
/*!****************************************************************************!*\
  !*** ./src/app/gestion-factures/certification/certification.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .modal1 {\r\n    max-width: 1200px;\r\n    margin: 1.\r\n    75rem auto;\r\n} */\r\n#edit{\r\n    background-color: rgb(0, 0, 255);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1mYWN0dXJlcy9jZXJ0aWZpY2F0aW9uL2NlcnRpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uLWZhY3R1cmVzL2NlcnRpZmljYXRpb24vY2VydGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1vZGFsMSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMS5cclxuICAgIDc1cmVtIGF1dG87XHJcbn0gKi9cclxuI2VkaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcclxufSJdfQ== */");

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
        this.factureglobal.dateFacture = this.dateFacture;
        this.factureglobal.numerofacture = this.NumeroFacture;
        this.factureglobal.dateSaisie = new Date();
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
        console.log(detailsfact.datePrestation);
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
        this.Factures.dateFacture = this.date_facture;
        this.Factures.dateSaisie = new Date();
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

/***/ "Uzns":
/*!***************************************!*\
  !*** ./src/app/Models/IPM_Facture.ts ***!
  \***************************************/
/*! exports provided: Facture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facture", function() { return Facture; });
var Facture = /** @class */ (function () {
    function Facture(idfacture, 
    // public code_acte?:string,
    numerofacture, dateFacture, dateSaisie, 
    // public matricule?:string,
    // public montant_facture?:number,
    // public taux_ipm?:number,
    part_ipm, part_patient, 
    // public tarification?:number,
    ipm_prestataire, 
    // public ipm_prestation?:Prestation,
    // public ipm_employe?:Employe ,
    certifier, 
    //public ipm_details_factures?:any,
    montantTotal) {
        this.idfacture = idfacture;
        this.numerofacture = numerofacture;
        this.dateFacture = dateFacture;
        this.dateSaisie = dateSaisie;
        this.part_ipm = part_ipm;
        this.part_patient = part_patient;
        this.ipm_prestataire = ipm_prestataire;
        this.certifier = certifier;
        this.montantTotal = montantTotal;
    }
    return Facture;
}());



/***/ }),

/***/ "WQN+":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/ajouter-factures/ajouter-factures.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!--saisi facture-->\r\n  <!---->\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-icon\" >\r\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n        <i class=\"material-icons\">list</i>\r\n      </div>\r\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Facture par importation </h2>\r\n  </div>\r\n    <div class=\"card-body\">\r\n      <form>\r\n\r\n        <div class=\"row\">\r\n        \r\n\r\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -10px;\" >\r\n          <mat-form-field>\r\n            <mat-select  placeholder=\"Prestataires\" formControlName=\"Prestataires\" \r\n            class=\"form-control\" id=\"Prestataires\"\r\n              formControlName=\"Prestataires\">\r\n              <mat-option *ngFor=\"let prest of listPrestataire\" [value]=\"prest.code_prestataire\"\r\n              (click)=\"getnomprestataire(prest)\">\r\n                {{ prest.nom_prestataire }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -10px;\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Choisir une Prestation\" formControlName=\"Prestation\" class=\"form-control\" id=\"Prestation\"\r\n            [(ngModel)]=\"Prestation\">\r\n              <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\"\r\n              (click)=\"getnom(pret)\">\r\n                {{ pret.libelle }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\r\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\r\n          \r\n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\r\n        </div>\r\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n          <!-- <legend>date Facture</legend> -->\r\n          <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"date Facture\" id=\"dateFacture\" name=\"dateFacture\" [(ngModel)]=\"dateFacture\" (click)=\"picker1.open()\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n          </mat-form-field>\r\n      </div>\r\n        \r\n      </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Ajouter au ponier details facture --> \r\n  <div class=\"card\">\r\n   <div class=\"card-header card-header-icon\">\r\n    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n      <i class=\"material-icons\">backup</i>\r\n    </div>\r\n    <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Importation fichier excel</h2>\r\n\r\n  </div>\r\n    \r\n    <div class=\"card-body\" >\r\n      <div class=\"row\" *ngIf=\"ws\">\r\n        <div class=\"form-group col-md-4\" style=\"font-weight:bold;\">\r\n          <h5 style=\"font-weight:bold;\"> PRESTATAIRE :{{prestataire_choisi}}</h5>\r\n\r\n        </div>\r\n        <div class=\"form-group  col-md-4\">\r\n          <h5 style=\"font-weight:bold;\">PRESTATION :{{prestation_choisi}}</h5>\r\n\r\n        </div>\r\n        <div class=\"form-group  col-md-4\">\r\n          <h5 style=\"font-weight:bold;\">DATE Facture  :{{date1}}</h5>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <form [formGroup]=\"uploadForm\">\r\n      \r\n          \r\n            <!-- <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" class=\"btn btn-outline-success\" /> -->\r\n      <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"myFile\"/>\r\n      <table class=\"table table-hover\">\r\n\r\n        <thead  style=\"font-weight:bold;\">\r\n\r\n          <th cope=\"col\"> Matricule</th>\r\n          \r\n          <!-- <th cope=\"col\">Prestation</th>\r\n          <th cope=\"col\">Prestataire</th> -->\r\n          <th cope=\"col\">TauxIpm</th>\r\n          <th cope=\"col\">Montant</th>\r\n          <th cope=\"col\">ChargeIpm</th>\r\n          <th cope=\"col\">ChargeAgent</th>\r\n          <th cope=\"col\">DateFacture</th>\r\n           <!-- <th cope=\"col\">Action</th>  -->\r\n\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\" let fac of ws\">\r\n            <td  style=\"font-weight:bold;\">{{fac.Matricule}}</td>\r\n            \r\n            <!-- <td>{{prestation_choisi}}</td>\r\n            <td>{{prestataire_choisi}}</td> -->\r\n            <td style=\"font-weight:bold;\">{{taux_ipm}}</td>\r\n            <td style=\"font-weight:bold;\">{{fac.Montant}}</td>\r\n            <td style=\"font-weight:bold;\">{{(fac.Montant*taux_ipm)/100}}</td>\r\n            <td style=\"font-weight:bold;\">{{fac.Montant-(fac.Montant*taux_ipm)/100}}</td> \r\n            <td style=\"font-weight:bold;\">{{date1}}</td>\r\n            <!-- <td class=\"td_actions\">\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-outline-info\">\r\n                <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#noticeModal\"\r\n                (click)=\"getFactureById(fac)\">edit</i>\r\n            </button> \r\n            </td> -->\r\n\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <!-- <td></td> -->\r\n            <!-- <td></td> -->\r\n            <td></td>\r\n            \r\n            \r\n            <td><h4 style=\"font-weight:bold;\">TOTAL</h4></td>\r\n            <td style=\"font-weight:bold;\">{{total}}</td>\r\n            <td style=\"font-weight:bold;\">{{totalChargeIpm}}</td>\r\n            <td style=\"font-weight:bold;\">{{totalChargeAgent}}</td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            \r\n            \r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n      <!--<button (click)=\"export()\" class=\"btn btn-outline-info\">Export!</button> -->\r\n      <div class=\"modal-footer justify-content-center\">\r\n      <button (click)=\"ajoutFacture(ws)\"  mat-raised-button class=\"btn btn-success\" [disabled]=\"desactive\">\r\n        <i class=\"material-icons\">checked</i>Ajouter Details Facture</button>\r\n      </div>\r\n    </form>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n  \r\n  <!--fin liste-->\r\n\r\n\r\n<!-- lien.txt\r\nAffichage de lien.txt en cours... -->\r\n\r\n<!-- Partie Modification modification-->\r\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Modification du facture Prestataire</h4>\r\n      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n        <i class=\"material-icons\">clear</i>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <form #userForme=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <label for=\"Montant\">Montant Facture</label>\r\n              \r\n      <input type=\"number\" class=\"form-control\" id=\"montant_facture\" formControlName=\"montant_facture\"\r\n       (ngModel)=\"currrentfacture.montant_facture\" > \r\n            <mat-form-field class=\"example-full-width\">\r\n\r\n              <input matInput type=\"text\" placeholder=\"nom prestataire\" \r\n              id=\"nom_prestataire\" name=\"nom_prestataire\"\r\n              >  \r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"text\" placeholder=\"adresse\" id=\"adresse_prestataire\"\r\n               name=\"adresse_prestataire\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n       \r\n        <div class=\"row\">\r\n        <div class=\"col-md-6 form-group\">\r\n          <mat-form-field>\r\n           <!--{{currentprestataire.typePres}}--> \r\n            <mat-select placeholder=\"Prestataire\" name=\"listTypePrestataire\" [(ngModel)]=\"code_presta\">\r\n              <mat-option *ngFor=\"let prest of cur\" [value]=\"prest.id_type_prestataire\">\r\n                {{ prest.nom_type_prestaire }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field> \r\n        </div>\r\n      </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"Telephone\" id=\"telephone\"\r\n                  name=\"telephone\" >\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"text\" placeholder=\"Code Categorie\" id=\"code_categorie_pretataire\"\r\n                  name=\"code_categorie_pretataire\" >\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        \r\n\r\n\r\n      </form>\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-success btn-round\" data-dismiss=\"modal\"\r\n          >modifier</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "Wufc":
/*!****************************************************************************!*\
  !*** ./src/app/gestion-factures/liste-facture/liste-facture.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#edit{\r\n    background-color: rgb(0, 0, 255);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1mYWN0dXJlcy9saXN0ZS1mYWN0dXJlL2xpc3RlLWZhY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZmFjdHVyZXMvbGlzdGUtZmFjdHVyZS9saXN0ZS1mYWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAyNTUpO1xyXG59Il19 */");

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

/***/ "oqW8":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/certification/certification.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n    tr{font-weight: bold;}\r\n</style>\r\n<div class=\"col-md-12 mt-5\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\" >\r\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n            <h2 style=\"background-color:whitesmoke; color: black; pading: 2px; width: 100%;\"> Facture numero :{{numero}} \r\n                <button mat-raised-button  style=\"float: right;\" class=\"btn btn-fill btn-success\" data-dismiss=\"modal\" (click)=\"CertifierEmploye()\"\r\n                *ngIf=\"certifier!=true else test\">Certifier\r\n                </button>\r\n            \r\n            \r\n            \r\n            <ng-template #test>\r\n                <h4 class=\" text-white text-center bg-success p-2\" style=\"float: right; font-size: 20px;\">\r\n                    <i class=\"material-icons\">checked</i>\r\n                    la facture est déja certfiée\r\n                </h4>\r\n            </ng-template> </h2>\r\n\r\n            \r\n          </div>\r\n        <div class=\"material-datatable\">\r\n            <div class=\"card-body\">\r\n\r\n\r\n\r\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\r\n                    width=\"100%\" style=\"width:100%\">\r\n\r\n                    <thead>\r\n\r\n                        <tr style=\"background-color: whitesmoke\">\r\n                            \r\n                            <th class=\"text-center\" cope=\"col\" ><b>Matricule</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Prenom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Nom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Prestation</b></th>\r\n                            <!-- <th cope=\"col\">Code Prestation</th> -->\r\n\r\n                            <th class=\"text-center\" cope=\"col\"><b>Montant Facture</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Charge_ipm</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Charge_agent</b></th>\r\n                         <!-- <th class=\"text-center\" cope=\"col\"><b>Date</b></th> -->\r\n                            <th class=\"text-center\" cope=\"col\"><b>Action</b></th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let fact of listFactures\">\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.matricule}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.prenom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.nom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_prestation?.libelle}}</td>\r\n                            <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>\r\n                         -->\r\n                            <td class=\"text-center\">{{fact.montant_facture | number:'.2'}}</td>\r\n                            <td class=\"text-center\">{{fact.part_ipm | number:'.2'}}</td>\r\n                            <td class=\"text-center\">{{fact.part_patient | number:'.2'}}</td>\r\n                            <!-- <td class=\"text-center\">{{fact.date_facture}}</td> -->\r\n                            <td class=\"td_actions text-right\">\r\n                                <button mat-raised-button (click)=\"getFactureById(fact)\" type=\"button\"\r\n                                    class=\"btn btn-round btn-xs\" id=\"edit\">\r\n                                    <i class=\"material-icons\" data-toggle=\"modal\"\r\n                                        data-target=\"#Modal2\">help</i></button>\r\n                                        \r\n                                             \r\n                            </td>\r\n                            <!-- <td>\r\n                            <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\r\n                                <div *ngSwitchCase=\"true\">\r\n                                    \r\n                                  <mat-checkbox checked=\"true\"></mat-checkbox>\r\n                                </div>\r\n                                \r\n                                <div *ngSwitchDefault>\r\n                                    \r\n                                  <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                          \r\n                        </td> -->\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                \r\n\r\n                </table>\r\n                <button mat-raised-button class=\"btn btn-fill btn-success btn-round\" \r\n                style=\"margin-right: 28.5cm;\" (click)=\"imprimerfacture()\">imprimer\r\n               </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<button mat-raised-button class=\"btn btn-fill btn-danger\"  style=\"margin-left: 28.5cm;\" (click)=\"retourner()\"\r\n    >retour\r\n</button>\r\n\r\n\r\n\r\n<!--formulaire-->\r\n<div class=\"modal fade\" id=\"Modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-success\">\r\n                <h4 class=\"modal-title text-white\" id=\"Modal2\" style=\"font-weight:bold;\">Detail\r\n                </h4>\r\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-sm-offset-2\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"nom\">nom :{{nom}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"prenom\">prenom :\r\n                                        {{prenom}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Matricule\">Matricule\r\n                                        :{{matricule}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestation\">Prestation :\r\n                                        {{prestation}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestataire\">Prestataire\r\n                                        {{prestataire}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date de Facture\">Date de\r\n                                        Facture : {{dateFacture}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date d'enregistrement\">Date\r\n                                        d'enregistremen: {{dateEnregistrement}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Montant\">Montant\r\n                                        :{{montant}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part IPM\">Part IPM\r\n                                        :{{part_ipm}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part Patient\">Part Patient\r\n                                        :{{part_patient}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Solde\">SOLDE\r\n                                        :{{solde}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Cumul Charge\">Cumul Charge\r\n                                        :{{cumulCharge}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--end formulaire-->");

/***/ }),

/***/ "sk9U":
/*!***************************************************************************!*\
  !*** ./src/app/gestion-factures/certification/certification.component.ts ***!
  \***************************************************************************/
/*! exports provided: CertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationComponent", function() { return CertificationComponent; });
/* harmony import */ var _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./certification.component.html */ "oqW8");
/* harmony import */ var _certification_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification.component.css */ "FC1X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Models/IPM_Facture */ "Uzns");
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








var CertificationComponent = /** @class */ (function () {
    function CertificationComponent(fact_service, route, router) {
        this.fact_service = fact_service;
        this.route = route;
        this.router = router;
        this.chargeEmploie = [];
        this.isCheik = false;
        this.listEmploie = [];
        this.listCertifier = [];
        this.facture = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_7__["Facture"]();
    }
    CertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        // this.id1=this.route.snapshot.params['id2'];
        //(<any>$('#datatable')).dataTable().fnDestroy(); 
        console.log(this.id);
        this.fact_service.getAllFactbyfactglobale(this.id).subscribe(function (data) {
            _this.listFactures = data;
            console.log(data);
            $(function () {
                $('#datatable').DataTable({
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    responsive: true,
                    retrieve: true,
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
            console.log(_this.listFactures);
            for (var _i = 0, _a = _this.listFactures; _i < _a.length; _i++) {
                var lf = _a[_i];
                _this.certifier = lf.ipmFacture.certifier;
                _this.facture = lf.ipmFacture;
                _this.numero = lf.ipmFacture.numerofacture;
            }
        });
        //this.fact_service.getFactureById(this.id).subscribe((data)=>{
        //   this.fac=data
        //   this.certifier=this.listFactures.ipmFacture.certifier
        //   =this.fac
        // })
        //(<any>$('#datatable1')).dataTable().fnDestroy();
    };
    CertificationComponent.prototype.CertifierEmploye = function () {
        var _this = this;
        console.log(this.facture, this.certifier);
        this.listFactureCertif = this.listFactures;
        this.facture.certifier = true;
        console.log(this.facture);
        //a revoir apres la présentattion
        this.fact_service.UpdateFacture(this.facture).subscribe(function (data) {
            _this.ngOnInit();
        });
        // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
        //  (data)=>{
        console.log(this.listFactureCertif);
        var _loop_1 = function (index) {
            this_1.fact_service.getEmployeById(this_1.listFactureCertif[index].ipm_employe.idemp).subscribe(function (data) {
                _this.objetEmploye = data;
                // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
                // this.listFactureCertif[index]
                console.log(_this.objetEmploye.solde);
                _this.objetEmploye.solde += _this.listFactureCertif[index].part_patient;
                _this.objetEmploye.cumul_charge += _this.listFactureCertif[index].part_patient;
                _this.chargeEmploie.push(__assign({}, _this.objetEmploye));
                // //console.log(this.chargeEmploie);
                _this.update = _this.objetEmploye;
                console.log(_this.update, _this.update.solde);
                _this.fact_service.updateOnEmploye(_this.update).subscribe(function (data) {
                    if (index + 1 == _this.listFactureCertif.length) {
                        _this.showALERTE("top", "center");
                    }
                }, function (err) {
                    if (index + 1 == _this.listFactureCertif.length)
                        _this.showALERTE2("top", "center");
                });
            });
        };
        var this_1 = this;
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
        // }                                                                            
        for (var index = 0; index < this.listFactureCertif.length; index++) {
            _loop_1(index);
        }
    };
    //console.log(this.elements);
    CertificationComponent.prototype.getFactureById = function (fact) {
        console.log(fact);
        fact.ipm_employe.solde += fact.part_patient;
        fact.ipm_employe.cumul_charge += fact.part_patient;
        console.log(fact.ipm_employe.solde, fact);
        this.nom = fact.ipm_employe.nom;
        this.prenom = fact.ipm_employe.prenom;
        this.matricule = fact.ipm_employe.matricule;
        this.prestation = fact.ipm_prestation.libelle;
        this.montant = fact.montant_facture;
        this.part_ipm = fact.part_ipm;
        this.part_patient = fact.part_patient;
        this.dateFacture = fact.ipmFacture.date_facture;
        this.dateEnregistrement = fact.ipmFacture.date_saisie;
        this.prestataire = fact.ipmFacture.ipm_prestataire.nom_prestataire;
        this.numFacture = fact.ipmFacture.numerofacture;
        this.solde = fact.ipm_employe.solde;
        this.cumulCharge = fact.ipm_employe.cumul_charge;
        this.detailfacture = fact;
        // this.chargeEmploie=fac.ipm_employe
        //this.certifier=this.detailfacture.certifier
    };
    CertificationComponent.prototype.getCertified = function (certifier) {
        this.booleanCerti = certifier; //pour pouvoir changer le boolean certifier
        certifier.ipm_employe.solde += certifier.part_patient;
        certifier.ipm_employe.cumul_charge += certifier.part_patient;
        this.undetailfacture = certifier;
        this.Emploie = certifier.ipm_employe;
        this.booleanCerti.certifier = true;
        this.booleanCerti.ipm_employe = certifier.ipm_employe;
        this.listCertifier.push(this.booleanCerti);
        this.listDetail.push(certifier);
        console.log(this.listDetail);
        this.listEmploie.push(this.Emploie);
        //this.booleanCerti=certifier
        //console.log(this.listEmploie)
    };
    CertificationComponent.prototype.certifiGlobal = function () {
        console.log(this.listEmploie);
        this.fact_service.updateLemploye(this.listEmploie).subscribe(function (data) { });
        console.log(this.listCertifier);
        this.fact_service.updateLdetailFacture(this.listCertifier).subscribe(function (data) { });
    };
    CertificationComponent.prototype.retourner = function () {
        this.router.navigate(['/gestion-factures/ListeFacture']);
    };
    CertificationComponent.prototype.showALERTE2 = function (from, align) {
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
    CertificationComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b> facture  certifié avec succès </b> :'
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
    ///////////////////////// Imprimer Duplicata facture
    CertificationComponent.prototype.imprimerfacture = function () {
        var _a, _b, _c, _d, _e;
        console.log(this.listFactures);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Prenom", "Nom", "Prestation", "Montant Facture", "Charge IPM", "Charge Agent"]];
        var rows = [];
        for (var _i = 0, _f = this.listFactures; _i < _f.length; _i++) {
            var factemp = _f[_i];
            var tmp = [(_a = factemp.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = factemp.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = factemp.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, (_d = factemp.ipm_prestation) === null || _d === void 0 ? void 0 : _d.libelle, factemp.montant_facture, factemp.part_ipm, factemp.part_patient];
            rows.push(tmp);
            var prestataire = (_e = factemp.ipmFacture) === null || _e === void 0 ? void 0 : _e.ipm_prestataire.nom_prestataire;
        }
        var somme = this.listFactures.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var sommeCharagent = this.listFactures.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var sommeChargeIPM = this.listFactures.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        console.log(somme);
        var f = [["", "", "", "Total Montants", somme, sommeCharagent, sommeChargeIPM]];
        var num = this.numero;
        console.log(num);
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 100, 15);
                doc.setFillColor(240, 240, 240);
                //  doc.rect(13,40,185,32,'F')
                //  doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Duplicata Facture", 77, 40);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 18);
                doc.text("Numero Facture:", 15, 60);
                doc.text('' + num, 50, 60);
                doc.text("Prestataire:", 15, 72);
                doc.text("" + prestataire, 40, 72);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 18);
                doc.setFontSize(12);
            }
        });
        doc.output('dataurlnewwindow');
    };
    CertificationComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_6__["FactureService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CertificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-certification',
            template: _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_certification_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_6__["FactureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CertificationComponent);
    return CertificationComponent;
}());



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