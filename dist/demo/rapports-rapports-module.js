(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapports-rapports-module"],{

/***/ "0a5w":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/charges-individuel/charges-individuel.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      \r\n  <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\" >\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">search</i>\r\n        </div>\r\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 70%;\">situation des individus par péroide </h2>\r\n    </div>\r\n      <div class=\"card-body\">\r\n        <form #form=\"ngForm\">\r\n  \r\n          <div class=\"row\">\r\n          \r\n  \r\n          \r\n          \r\n          <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\r\n            <label for=\"Numéro\"><b>Numéro Facture</b></label>\r\n            \r\n            <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\r\n          </div> -->\r\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n              <!-- <legend>date Facture</legend> -->\r\n              <mat-form-field>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker startView=\"year\"></mat-datepicker>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n            <!-- <legend>date Facture</legend> -->\r\n            <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n          <button mat-raised-button type=\"submit\" \r\n           (click)=\"getSituation();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\r\n              class=\"material-icons\">search</i>Rechercher</button>\r\n        </div>\r\n          \r\n        </div>\r\n        </form>\r\n        </div>\r\n        </div>\r\n        \r\n        <!--liste creances-->\r\n  <div *ngIf=\"listCharge\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\">\r\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n            <i class=\"material-icons\">list</i>\r\n    \r\n          </div >\r\n          <h2 class=\"text-center\" \r\n          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste des situatons individuelle du {{d1}} au {{d2}}\r\n          </h2>\r\n        </div >\r\n        <div class=\"material-datatable\">\r\n        <div class=\"card-body\">\r\n          \r\n          <table id=\"donne\" class=\"table table-striped\">\r\n    \r\n            <thead>\r\n              <tr>\r\n    \r\n              <th> Matricule</th>\r\n              <th>Nom Participant</th>\r\n              <th>Prenom Participant</th>\r\n              \r\n              <th>MontantFacture</th>\r\n              <th>ChargeIpm</th>\r\n              <th>ChargeAgent</th>\r\n          \r\n              <!-- <th>Action</th> -->\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let element of listCharge\">\r\n                <td><b>{{element.ipm_employe?.matricule}}</b></td>\r\n                <td><b>{{element.ipm_employe?.nom}}</b></td>\r\n                <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n                <td><b>{{element.montant_facture}}</b></td>\r\n                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n                <td><b>{{element.part_ipm}}</b></td>\r\n                <td><b>{{element.part_patient}}</b></td>\r\n                \r\n                <!-- <td class=\"td_actions\">\r\n                  <i class=\"material-icons\" class=\"btn btn-danger\" ><span\r\n                      class=\"fa fa-trash-o\"></span></i>\r\n                </td> -->\r\n                <!-- <td>\r\n                  <button class=\"btn btn-info btn-block\" \r\n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                  </button></td> -->\r\n    \r\n    \r\n              </tr>\r\n            </tbody>\r\n            <!-- <tfoot style=\"font-weight:bold;\">\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>\r\n                  <h4>TOTAL</h4>\r\n                </td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n    \r\n              </tr>\r\n            </tfoot> -->\r\n    \r\n          </table>\r\n        </div>\r\n          <!-- <div class=\"modal-footer justify-content-center\">\r\n            <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\r\n            </button>\r\n          </div> -->\r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n    <!--fin liste-->\r\n    \r\n    \r\n  \r\n  \r\n  \r\n");

/***/ }),

/***/ "7ZWq":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/creances-gbales/creances-gbales.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\">\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">search</i>\r\n        </div>\r\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Rapport\r\n          globale </h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <form #form=\"ngForm\">\r\n\r\n          <div class=\"row\">\r\n\r\n\r\n\r\n\r\n            <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\r\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\r\n          \r\n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\r\n        </div> -->\r\n            <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n              <!-- <legend>date Facture</legend> -->\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\"\r\n                  [(ngModel)]=\"date1\" (click)=\"picker.open()\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker startView=\"year\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n              <!-- <legend>date Facture</legend> -->\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\"\r\n                  (click)=\"picker1.open()\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Entité\" name=\"entity\" [(ngModel)]=\"entity\">\r\n\r\n\r\n                  <mat-option [value]=\"tout\" (click)=\"getEntout()\">\r\n                    {{\"tout\" }}\r\n\r\n\r\n                  </mat-option>\r\n\r\n                  <mat-option *ngFor=\"let ent of listEntiy\" [value]=\"ent.idEntity\" (click)=\"getEntity(ent)\">\r\n\r\n\r\n                    {{ ent.nom_entity }}\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n              <button mat-raised-button type=\"submit\" (click)=\"getCreanceglobale();form.resetForm()\"\r\n                class=\"btn btn-fill btn-success\"><i class=\"material-icons\">search</i>Rechercher</button>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!--liste creances-->\r\n    <div class=\"col-md-12\" *ngIf=\"listCreanceEntites else test\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\">\r\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n            <i class=\"material-icons\">list</i>\r\n\r\n          </div>\r\n          <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste\r\n            creance {{attente}} du {{d1}} au {{d2}} </h2>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"material-datatable\">\r\n            <table id=\"datatable\" class=\"table table-bordered \" #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n\r\n              <thead style=\"font-weight:bold;\">\r\n\r\n\r\n\r\n\r\n\r\n                <tr>\r\n\r\n                  <th cope=\"col\"> Matricule</th>\r\n                  <th cope=\"col\">Nom Participant</th>\r\n                  <th cope=\"col\">Prenom Participant</th>\r\n\r\n                  <th cope=\"col\">MontantFacture</th>\r\n                  <th cope=\"col\">ChargeIpm</th>\r\n                  <th cope=\"col\">ChargeAgent</th>\r\n\r\n\r\n\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <tr *ngFor=\"let element of listCreanceEntites; let i=index\">\r\n                  <td><b>{{element.ipm_employe?.matricule}}</b></td>\r\n                  <td><b>{{element.ipm_employe?.nom}}</b></td>\r\n                  <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n                  <td><b>{{element.montant_facture}}</b></td>\r\n                  <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n                  <td><b>{{element.part_ipm}}</b></td>\r\n                  <td><b>{{element.part_patient}}</b></td>\r\n\r\n                  <!-- <td class=\"td_actions\">\r\n                <i class=\"material-icons\" class=\"btn btn-danger\" ><span\r\n                    class=\"fa fa-trash-o\"></span></i>\r\n              </td> -->\r\n                  <!-- <td>\r\n                <button class=\"btn btn-info btn-block\" \r\n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                </button></td> -->\r\n\r\n\r\n                </tr>\r\n              </tbody>\r\n              <!-- <tfoot style=\"font-weight:bold;\">\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>\r\n                <h4>TOTAL</h4>\r\n              </td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n  \r\n            </tr>\r\n          </tfoot> -->\r\n\r\n            </table>\r\n          </div>\r\n          <button class=\"btn btn-raised btn-round btn-success\" (click)=\"imprimer() \">imprimer\r\n          </button>\r\n          <!-- <div class=\"modal-footer justify-content-center\">\r\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\r\n          </button>\r\n        </div> -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <ng-template #test>\r\n      <div class=\"col-md-12\" *ngIf=\"listCreanceGlobales\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\">\r\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n              <i class=\"material-icons\">list</i>\r\n\r\n            </div>\r\n            <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste\r\n              creance {{attente}} du {{d1}} au {{d2}}\r\n            </h2>\r\n\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"material-datatable\">\r\n              <table id=\"datatable\" class=\"table table-bordered \" #TABLE cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n\r\n                <thead style=\"font-weight:bold;\">\r\n\r\n                  <tr>\r\n\r\n\r\n                    <th cope=\"col\"> Matricule</th>\r\n                    <th cope=\"col\">Nom Participant</th>\r\n                    <th cope=\"col\">Prenom Participant</th>\r\n\r\n                    <th cope=\"col\">MontantFacture</th>\r\n                    <th cope=\"col\">ChargeIpm</th>\r\n                    <th cope=\"col\">ChargeAgent</th>\r\n\r\n\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <tr *ngFor=\"let element of listCreanceGlobales; let i=index\">\r\n                    <td><b>{{element.ipm_employe?.matricule}}</b></td>\r\n                    <td><b>{{element.ipm_employe?.nom}}</b></td>\r\n                    <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n                    <td><b>{{element.montant_facture}}</b></td>\r\n                    <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n                    <td><b>{{element.part_ipm}}</b></td>\r\n                    <td><b>{{element.part_patient}}</b></td>\r\n\r\n                    <!-- <td class=\"td_actions\">\r\n                <i class=\"material-icons\" class=\"btn btn-danger\" ><span\r\n                    class=\"fa fa-trash-o\"></span></i>\r\n              </td> -->\r\n                    <!-- <td>\r\n                <button class=\"btn btn-info btn-block\" \r\n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                </button></td> -->\r\n\r\n\r\n                  </tr>\r\n                </tbody>\r\n                <!-- <tfoot style=\"font-weight:bold;\">\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>\r\n                <h4>TOTAL</h4>\r\n              </td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n  \r\n            </tr>\r\n          </tfoot> -->\r\n\r\n              </table>\r\n            </div>\r\n            <!-- <div class=\"modal-footer justify-content-center\">\r\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\r\n          </button>\r\n        </div> -->\r\n            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"imprimerTout() \">imprimer\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <!--liste creances-->\r\n   \r\n\r\n    <!--fin liste2-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "8n7b":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/situation-des-bons/situation-des-bons.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1kZXMtYm9ucy9zaXR1YXRpb24tZGVzLWJvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AxGv":
/*!*****************************************************!*\
  !*** ./src/app/rapports/rapports-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charges-individuel/charges-individuel.component */ "PdVo");
/* harmony import */ var _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creances-gbales/creances-gbales.component */ "r5eF");
/* harmony import */ var _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./situation-annuelle/situation-annuelle.component */ "dwU9");
/* harmony import */ var _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./situation-des-bons/situation-des-bons.component */ "gh0Y");
/* harmony import */ var _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./situation-par-prestation/situation-par-prestation.component */ "IaBU");
/* harmony import */ var _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./situation-prestation/situation-prestation.component */ "QESj");






var routes = [
    {
        path: '',
        children: [{
                path: 'ChargesIndividuel',
                component: _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_0__["ChargesIndividuelComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'CreancesGlobales',
                component: _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_1__["CreancesGbalesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'SituationAnnuelle',
                component: _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_2__["SituationAnnuelleComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'SituationPrestation',
                component: _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_5__["SituationPrestationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'situation-par-prestation',
                component: _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_4__["SituationParPrestationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Situation-des-bons',
                component: _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_3__["SituationDesBonsComponent"]
            }]
    }
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RapportsRoutingModule { }


/***/ }),

/***/ "IaBU":
/*!*****************************************************************************************!*\
  !*** ./src/app/rapports/situation-par-prestation/situation-par-prestation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SituationParPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationParPrestationComponent", function() { return SituationParPrestationComponent; });
/* harmony import */ var _raw_loader_situation_par_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-par-prestation.component.html */ "xMcM");
/* harmony import */ var _situation_par_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-par-prestation.component.css */ "hHNi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "i680");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SituationParPrestationComponent = /** @class */ (function () {
    function SituationParPrestationComponent(dateAdapter, datepipe, rapportServ, router) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.dateAdapter.setLocale('en-GB');
    }
    SituationParPrestationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rapportServ.getPrestation().subscribe(function (data) {
            _this.listPrestation = data;
            console.log(_this.listPrestation);
        });
    };
    SituationParPrestationComponent.prototype.getprestation = function (presta) {
        console.log(presta);
        this.prestationChoisi = presta.libelle;
    };
    // getPrestation(){
    //   console.log(this.prestation)
    //  }
    SituationParPrestationComponent.prototype.getSituation = function () {
        var _this = this;
        console.log(this.prestation);
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        this.rapportServ.getSituatonParPrestation(this.d1, this.d2, this.prestation).subscribe(function (data) {
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
            _this.list = data;
            console.log(_this.list);
        });
    };
    SituationParPrestationComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Facture", "Prenom", "Nom", "Matricule", "Prestataire", "Date Prestation ", "Charge IPM", "Charge Agent", "Montant Facture"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _j = this.list; _i < _j.length; _i++) {
            var liste = _j[_i];
            var tmp = [(_a = liste.ipmFacture) === null || _a === void 0 ? void 0 : _a.numerofacture, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.matricule, (_e = liste.ipmFacture) === null || _e === void 0 ? void 0 : _e.ipm_prestataire.nom_prestataire, (_f = liste.ipmFacture) === null || _f === void 0 ? void 0 : _f.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture];
            rows.push(tmp);
            var ipm2 = (_g = liste.ipm_employe) === null || _g === void 0 ? void 0 : _g.prenom;
            var ipm3 = (_h = liste.ipm_employe) === null || _h === void 0 ? void 0 : _h.matricule;
        }
        var somme1 = this.list.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.list.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.list.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var prestation = this.prestationChoisi;
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "", "", "", "Total ", somme1, somme2, somme3]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default()(doc, {
            startY: 70,
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
                doc.rect(60, 30, 105, 20);
                //doc.setFillColor(240,240,240)
                //doc.rect(13,65,185,23,'F')
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Rapport par prestation", 85, 42);
                doc.text("la prestation  " + prestation + " du " + date1 + " au " + date2, 20, 60);
                //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(12);
                doc.text("Dakar, le :", 150, 10);
                doc.setFontSize(12);
                doc.text("Institut de Prévoyance Maladie ", 50, 10);
                doc.text("du personnel de la Poste ", 60, 17);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
            }
        });
        doc.output("dataurlnewwindow");
    };
    SituationParPrestationComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SituationParPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-situation-par-prestation',
            template: _raw_loader_situation_par_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_par_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SituationParPrestationComponent);
    return SituationParPrestationComponent;
}());



/***/ }),

/***/ "PdVo":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/charges-individuel/charges-individuel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChargesIndividuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargesIndividuelComponent", function() { return ChargesIndividuelComponent; });
/* harmony import */ var _raw_loader_charges_individuel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./charges-individuel.component.html */ "0a5w");
/* harmony import */ var _charges_individuel_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charges-individuel.component.css */ "SQQb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChargesIndividuelComponent = /** @class */ (function () {
    function ChargesIndividuelComponent(dateAdapter, datepipe, rapportServ) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.dateAdapter.setLocale('en-GB');
    }
    ChargesIndividuelComponent.prototype.ngOnInit = function () {
    };
    ChargesIndividuelComponent.prototype.getSituation = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        this.rapportServ.getSituationIndividuel(this.d1, this.d2).subscribe(function (data) {
            $(function () {
                $('#donne').DataTable({
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    responsive: true,
                    retreive: true,
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
            _this.listCharge = data;
            console.log(_this.listCharge);
            if (_this.listCharge.length == 0) {
                _this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
        });
    };
    ChargesIndividuelComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    ChargesIndividuelComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"] }
    ]; };
    ChargesIndividuelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-charges-individuel',
            template: _raw_loader_charges_individuel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_charges_individuel_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"]])
    ], ChargesIndividuelComponent);
    return ChargesIndividuelComponent;
}());



/***/ }),

/***/ "QESj":
/*!*********************************************************************************!*\
  !*** ./src/app/rapports/situation-prestation/situation-prestation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SituationPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationPrestationComponent", function() { return SituationPrestationComponent; });
/* harmony import */ var _raw_loader_situation_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-prestation.component.html */ "wzYM");
/* harmony import */ var _situation_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-prestation.component.css */ "QyZh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SituationPrestationComponent = /** @class */ (function () {
    function SituationPrestationComponent(dateAdapter, datepipe, rapportServ, router) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.dateAdapter.setLocale('en-GB');
    }
    SituationPrestationComponent.prototype.ngOnInit = function () {
        // this.rapportServ.getPrestation().subscribe(data=>{
        //   this.listPrestation=data
        //   //console.log(this.prestatonChoisi,presta.code_prestation)
        // })
    };
    SituationPrestationComponent.prototype.getPrestation = function (presta) {
        this.prestatonChoisi = presta;
        console.log(this.prestatonChoisi, presta.code_prestation);
    };
    SituationPrestationComponent.prototype.getSituation = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        this.matr = this.matricule;
        this.rapportServ.getSituatonParindividus(this.d1, this.d2, this.matricule).subscribe(function (result) {
            var _a, _b;
            _this.listPrestatio = result;
            console.log(_this.listPrestatio);
            for (var _i = 0, _c = _this.listPrestatio; _i < _c.length; _i++) {
                var liste = _c[_i];
                _this.nom = (_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.nom;
                _this.prenom = (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom;
            }
        });
        this.rapportServ.getSituatonRemboursement(this.d1, this.d2, this.matr).subscribe(function (result) {
            console.log(_this.d1, _this.d2, _this.matr);
            console.log(result);
            _this.listRemboursement = result;
        });
    };
    SituationPrestationComponent.prototype.getPrestaton = function (element) {
        console.log(element);
        this.id = element.ipm_prestation.code_prestation;
        // this.rapportServ.getSituatonParPrestation(this.d1,this.d2,element.ipm_prestation.code_prestation).subscribe(
        //   result=>{
        //     this.list=result
        //     console.log(this.list)
        //   })
        this.router.navigate(['/rapports/situation-par-prestation/' + this.d1 + '/' + this.d2 + '/' + element.ipm_prestation.code_prestation]);
        console.log('/situation-par-prestation/' + this.d1 + '/' + this.d2 + '/' + this.id);
    };
    SituationPrestationComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Facture", "Prestataire", "Traitement", "Date Prestation ", "Charge IPM", "Charge Agent", "Montant Facture"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _j = this.listPrestatio; _i < _j.length; _i++) {
            var liste = _j[_i];
            var tmp = [(_a = liste.ipmFacture) === null || _a === void 0 ? void 0 : _a.numerofacture, (_b = liste.ipmFacture) === null || _b === void 0 ? void 0 : _b.ipm_prestataire.nom_prestataire, (_c = liste.ipm_prestation) === null || _c === void 0 ? void 0 : _c.libelle, liste.ipmFacture.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            this.nom = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.nom;
            this.prenom = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.prenom;
            var ipm2 = (_g = liste.ipm_employe) === null || _g === void 0 ? void 0 : _g.prenom;
            var ipm3 = (_h = liste.ipm_employe) === null || _h === void 0 ? void 0 : _h.matricule;
        }
        var somme1 = this.listPrestatio.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.listPrestatio.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listPrestatio.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var f = [["", "", "", "Total ", somme1, somme2, somme3]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 95,
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
                doc.rect(60, 30, 105, 20);
                //doc.setFillColor(240,240,240)
                //doc.rect(13,65,185,23,'F')
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("RELEVE  PARTICIPANT", 85, 42);
                //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(12);
                doc.text("Dakar, le :", 150, 10);
                doc.setFontSize(12);
                doc.text("Institut de Prévoyance Maladie ", 50, 10);
                doc.text("du personnel de la Poste ", 60, 17);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                doc.setFontSize(12);
                doc.text("Matricule Participant:", 15, 75);
                doc.text(ipm3, 60, 75);
                //  doc.text(ipm2,80,75) 
                doc.text("Prenom & Nom:", 15, 85);
                doc.text("" + ipm2 + " " + " " + " " + ipm1, 60, 85);
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    SituationPrestationComponent.prototype.getremboursement = function () {
        var _a, _b, _c, _d, _e, _f;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Date Remboursement", "Montant Remboursement"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _g = this.listRemboursement; _i < _g.length; _i++) {
            var liste = _g[_i];
            var tmp = [(_a = liste.ipmRemboursement) === null || _a === void 0 ? void 0 : _a.dateRemboursement, liste.montant];
            rows.push(tmp);
            var ipm1 = (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom;
            this.nom = (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom;
            this.prenom = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.prenom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
        }
        var somme1 = this.listRemboursement.reduce(function (sum, current) { return sum + current.montant; }, 0);
        var f = [["Total ", somme1]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 95,
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
                doc.rect(60, 30, 105, 20);
                //doc.setFillColor(240,240,240)
                //doc.rect(13,65,185,23,'F')
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Relevé remboursement par participant", 71, 42);
                //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(12);
                doc.text("Dakar, le :", 150, 10);
                doc.setFontSize(12);
                doc.text("Institut de Prévoyance Maladie ", 50, 10);
                doc.text("du personnel de la Poste ", 60, 17);
                doc.text(date.toLocaleDateString(), 172, 10);
                doc.setFontSize(12);
                doc.text("Matricule Participant:", 15, 75);
                doc.text(ipm3, 60, 75);
                //  doc.text(ipm2,80,75) 
                doc.text("Prenom & Nom:", 15, 85);
                doc.text("" + ipm2 + " " + " " + " " + ipm1, 60, 85);
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    SituationPrestationComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SituationPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-prestation',
            template: _raw_loader_situation_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SituationPrestationComponent);
    return SituationPrestationComponent;
}());



/***/ }),

/***/ "QyZh":
/*!**********************************************************************************!*\
  !*** ./src/app/rapports/situation-prestation/situation-prestation.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1wcmVzdGF0aW9uL3NpdHVhdGlvbi1wcmVzdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SQQb":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/charges-individuel/charges-individuel.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL2NoYXJnZXMtaW5kaXZpZHVlbC9jaGFyZ2VzLWluZGl2aWR1ZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VeOI":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/situation-annuelle/situation-annuelle.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFwcG9ydHMvc2l0dWF0aW9uLWFubnVlbGxlL3NpdHVhdGlvbi1hbm51ZWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmFwcG9ydHMvc2l0dWF0aW9uLWFubnVlbGxlL3NpdHVhdGlvbi1hbm51ZWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItYXJyb3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9Il19 */");

/***/ }),

/***/ "dwU9":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/situation-annuelle/situation-annuelle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SituationAnnuelleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationAnnuelleComponent", function() { return SituationAnnuelleComponent; });
/* harmony import */ var _raw_loader_situation_annuelle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-annuelle.component.html */ "wPeT");
/* harmony import */ var _situation_annuelle_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-annuelle.component.css */ "VeOI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SituationAnnuelleComponent = /** @class */ (function () {
    function SituationAnnuelleComponent(dateAdapter, datepipe, rapportServ) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.years = [];
        this.listOfMonths = [{ id: 1, value: 'Janvier' }, { id: 2, value: 'Février' }, { id: 3, value: 'Mars' }, { id: 4, value: 'Avril' }, { id: 5, value: 'Mai' }, { id: 6, value: 'Juin' },
            { id: 7, value: 'Juillet' }, { id: 8, value: 'Aout' }, { id: 9, value: 'Septembre' }, { id: 10, value: 'Octobre' }, { id: 11, value: 'Novembre' }, { id: 12, value: 'Décembre' }];
        this.selectedYear = new Date().getFullYear();
        var y = this.selectedYear - 9;
        console.log(this.selectedYear);
        for (var year = this.selectedYear; year >= y; year--) {
            this.years.push(year);
        }
        this.dateAdapter.setLocale('en-GB');
    }
    SituationAnnuelleComponent.prototype.ngOnInit = function () {
    };
    SituationAnnuelleComponent.prototype.getChoixAnne = function (year) {
        this.selectedY = year;
    };
    SituationAnnuelleComponent.prototype.getCumulAnnee = function () {
        var _this = this;
        this.desactive = false;
        this.rapportServ.getCumulCotisationAnnee(this.selectedY).subscribe(function (result) {
            var _a, _b;
            _this.detailsCotisations = result;
            console.log(_this.detailsCotisations);
            if (_this.detailsCotisations.length == 0) {
                _this.desactive = true;
                _this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
            _this.mois = new Date((_a = _this.detailsCotisations[0].ipm_cotisation) === null || _a === void 0 ? void 0 : _a.date).getMonth() + 1;
            console.log(_this.mois, new Date((_b = _this.detailsCotisations[0].ipm_cotisation) === null || _b === void 0 ? void 0 : _b.date));
            _this.detailsCotisations.forEach(function (element) {
                _this.listOfMonths.forEach(function (lmt) {
                    var _a, _b, _c;
                    if (new Date((_a = element.ipm_cotisation) === null || _a === void 0 ? void 0 : _a.date).getMonth() + 1 == lmt.id) {
                        console.log(lmt.value, new Date((_b = element.ipm_cotisation) === null || _b === void 0 ? void 0 : _b.date).getMonth(), lmt.id);
                        element.ipm_employe.justificatif = lmt.value;
                        console.log(element.ipm_employe.justificatif);
                        console.log((_c = element.ipm_employe) === null || _c === void 0 ? void 0 : _c.justificatif);
                    }
                });
            });
            console.log(_this.detailsCotisations.length);
            console.table(_this.detailsCotisations);
        });
    };
    SituationAnnuelleComponent.prototype.getDetailsCotisation = function (element) {
        var _this = this;
        var _a, _b;
        console.log((_a = element.ipm_cotisation) === null || _a === void 0 ? void 0 : _a.idCotisation);
        this.rapportServ.getDetailsCotisationByEmploye((_b = element.ipm_cotisation) === null || _b === void 0 ? void 0 : _b.idCotisation).subscribe(function (result) {
            _this.listCotisations = result;
            console.log(element);
            _this.mois1 = element.ipm_employe.justificatif;
        });
    };
    SituationAnnuelleComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 600,
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
    //Imprimer Situation Annuelle
    SituationAnnuelleComponent.prototype.printSituationAnnuelle = function () {
        var _a, _b, _c, _d, _e;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Prenom", "Nom", "Montant Cotisé", "Date Cotisation"]];
        var rows = [];
        for (var _i = 0, _f = this.listCotisations; _i < _f.length; _i++) {
            var situAnnee = _f[_i];
            var tmp = [(_a = situAnnee.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = situAnnee.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = situAnnee.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, situAnnee.montant, (_d = situAnnee.ipm_cotisation) === null || _d === void 0 ? void 0 : _d.date];
            rows.push(tmp);
            var montantCotisa = (_e = situAnnee.ipm_cotisation) === null || _e === void 0 ? void 0 : _e.montant_totals;
            var mois = this.mois1;
            console.log(this.mois1);
        }
        // var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
        // var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
        // var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
        // console.log(somme);
        // let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
            // foot:f,
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
                doc.setTextColor("");
                doc.text("Institut de Prévoyance Maladie", 50, 10);
                doc.text("du personnel de la Poste", 60, 17);
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Rapport Situation Annuelle", 77, 40);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 18);
                doc.text("Mois de:", 15, 60);
                doc.text('' + mois, 35, 60);
                doc.text("Montant Totals:", 15, 72);
                doc.text("" + montantCotisa, 50, 72);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 18);
                doc.setFontSize(12);
            }
        });
        doc.output('dataurlnewwindow');
    };
    SituationAnnuelleComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"] }
    ]; };
    SituationAnnuelleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-annuelle',
            template: _raw_loader_situation_annuelle_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_annuelle_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"]])
    ], SituationAnnuelleComponent);
    return SituationAnnuelleComponent;
}());



/***/ }),

/***/ "gHaW":
/*!*********************************************!*\
  !*** ./src/app/rapports/rapports.module.ts ***!
  \*********************************************/
/*! exports provided: RapportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportsModule", function() { return RapportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creances-gbales/creances-gbales.component */ "r5eF");
/* harmony import */ var _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charges-individuel/charges-individuel.component */ "PdVo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _rapports_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rapports-routing.module */ "AxGv");
/* harmony import */ var _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./situation-annuelle/situation-annuelle.component */ "dwU9");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./situation-par-prestation/situation-par-prestation.component */ "IaBU");
/* harmony import */ var _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./situation-prestation/situation-prestation.component */ "QESj");
/* harmony import */ var _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./situation-des-bons/situation-des-bons.component */ "gh0Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { RapportsModule } from './rapports.module';
var RapportsModule = /** @class */ (function () {
    function RapportsModule() {
    }
    RapportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_2__["CreancesGbalesComponent"], _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_3__["ChargesIndividuelComponent"], _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_9__["SituationAnnuelleComponent"], _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_11__["SituationParPrestationComponent"],
                _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_12__["SituationPrestationComponent"],
                _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_13__["SituationDesBonsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_rapports_routing_module__WEBPACK_IMPORTED_MODULE_8__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], RapportsModule);
    return RapportsModule;
}());



/***/ }),

/***/ "gh0Y":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/situation-des-bons/situation-des-bons.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SituationDesBonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationDesBonsComponent", function() { return SituationDesBonsComponent; });
/* harmony import */ var _raw_loader_situation_des_bons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-des-bons.component.html */ "yBa3");
/* harmony import */ var _situation_des_bons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-des-bons.component.css */ "8n7b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SituationDesBonsComponent = /** @class */ (function () {
    function SituationDesBonsComponent(dateAdapter, datepipe, rapportServ, router) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.listypeBon = [{ id: 1, value: "pharmacie" }, { id: 2, value: "consultation" },
            { id: 3, value: "lettregrantie" }, { id: 4, value: "lunetterie" }
        ];
        this.dateAdapter.setLocale('en-GB');
    }
    SituationDesBonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rapportServ.getPrestation().subscribe(function (data) {
            _this.listPrestation = data;
            //console.log(this.prestatonChoisi,presta.code_prestation)
        });
        console.log(this.typeBons);
    };
    //Prestation Choisi
    SituationDesBonsComponent.prototype.getPrestation = function (presta) {
        console.log(presta);
        this.idpres = presta;
    };
    SituationDesBonsComponent.prototype.getBonsPeriode = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        console.log(this.d1, this.d2, this.typeBons);
        this.d3 = this.typeBons;
        this.rapportServ.getBonByPeriodeBon(this.d1, this.d2, this.typeBons).subscribe(function (result) {
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
            _this.listBonGlobalsPrestation = result;
            console.log(_this.listBonGlobalsPrestation);
            if (_this.listBonGlobalsPrestation.length == 0) {
                _this.showNotification('top', 'center', 3, "<b> Il n'existe pas de  bon dans cette période</b> :");
            }
        });
    };
    //Notification
    SituationDesBonsComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    //Imprimer Situation Annuelle
    SituationDesBonsComponent.prototype.printSituationBons = function () {
        var _a, _b, _c, _d;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Prenom", "Nom", "Prestataire"]];
        var rows = [];
        for (var _i = 0, _e = this.listBonGlobalsPrestation; _i < _e.length; _i++) {
            var situBons = _e[_i];
            var tmp = [(_a = situBons.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = situBons.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = situBons.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, (_d = situBons.ipm_prestataire) === null || _d === void 0 ? void 0 : _d.nom_prestataire];
            rows.push(tmp);
            var nomP = this.d3;
            var datedebut = this.d1;
            var datefin = this.d2;
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
            // foot:f,
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
                doc.setFontSize(20);
                doc.setTextColor("#3A6EA5");
                doc.text("Situation Bon " + nomP, 74, 40);
                // doc.text(''+nomP,106,40)
                //  doc.setTextColor("")
                var date = new Date();
                doc.setFontSize(13);
                doc.setTextColor("");
                doc.text("Institut de Prévoyance Maladie", 50, 10);
                doc.text("du personnel de la Poste", 60, 17);
                doc.text("Dakar, le :", 150, 18);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 18);
                doc.setTextColor("blue");
                doc.setFontSize(15);
                doc.text("Bon de " + nomP + " du " + datedebut + " au " + datefin, 15, 60);
                doc.setFontSize(12);
            }
        });
        doc.output('dataurlnewwindow');
    };
    SituationDesBonsComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SituationDesBonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-des-bons',
            template: _raw_loader_situation_des_bons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_des_bons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SituationDesBonsComponent);
    return SituationDesBonsComponent;
}());



/***/ }),

/***/ "hHNi":
/*!******************************************************************************************!*\
  !*** ./src/app/rapports/situation-par-prestation/situation-par-prestation.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1wYXItcHJlc3RhdGlvbi9zaXR1YXRpb24tcGFyLXByZXN0YXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "hcEB":
/*!************************************************************************!*\
  !*** ./src/app/rapports/creances-gbales/creances-gbales.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL2NyZWFuY2VzLWdiYWxlcy9jcmVhbmNlcy1nYmFsZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "r5eF":
/*!***********************************************************************!*\
  !*** ./src/app/rapports/creances-gbales/creances-gbales.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreancesGbalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreancesGbalesComponent", function() { return CreancesGbalesComponent; });
/* harmony import */ var _raw_loader_creances_gbales_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./creances-gbales.component.html */ "7ZWq");
/* harmony import */ var _creances_gbales_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creances-gbales.component.css */ "hcEB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { EmployeService } from 'src/app/Services/employe.service';

var CreancesGbalesComponent = /** @class */ (function () {
    function CreancesGbalesComponent(dateAdapter, datepipe, rapportServ) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.DesatverBouton = false;
        this.tout = "tout";
        this.dateAdapter.setLocale('en-GB');
    }
    CreancesGbalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rapportServ.getEntity().subscribe(function (data) {
            _this.listEntiy = data;
            console.log(_this.listEntiy);
        });
        // this.getCreanceglobale()
    };
    CreancesGbalesComponent.prototype.getCreanceglobale = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        if (this.enti) {
            this.rapportServ.getGlobaleParEntity(this.d1, this.d2, this.enti.idEntity).subscribe(function (result) {
                _this.listCreanceEntites = result;
                //this.list=this.listCreanceGlobales.length
                console.log(_this.listCreanceEntites.length);
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
            });
            if (this.listCreanceEntites.length == 0) {
                this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
        }
        else
            this.rapportServ.getSituationIndividuel(this.d1, this.d2).subscribe(function (result) {
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
                _this.listCreanceGlobales = result;
                //this.list=this.listCreanceGlobales.length
                console.log(_this.listCreanceGlobales.length);
            });
    };
    CreancesGbalesComponent.prototype.getEntity = function (ent) {
        console.log(ent);
        this.enti = ent;
        this.attente = this.enti.nom_entity;
    };
    CreancesGbalesComponent.prototype.getEntout = function () {
        this.attente = "";
    };
    CreancesGbalesComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _g = this.listCreanceEntites; _i < _g.length; _i++) {
            var liste = _g[_i];
            var tmp = [(_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
        }
        var somme1 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var entite = this.attente;
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "Total ", somme3, somme1, somme2]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 70,
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
                doc.rect(60, 30, 105, 20);
                //doc.setFillColor(240,240,240)
                //doc.rect(13,65,185,23,'F')
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Créance globale périodique ", 85, 40);
                doc.text("de " + entite, 105, 47);
                doc.text("rapport périodique du " + date1 + " au " + date2, 20, 65);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(12);
                doc.text("Dakar, le :", 150, 10);
                doc.setFontSize(12);
                doc.text("Institut de Prévoyance Maladie ", 50, 10);
                doc.text("du personnel de la Poste ", 60, 17);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    CreancesGbalesComponent.prototype.imprimerTout = function () {
        var _a, _b, _c, _d, _e, _f;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _g = this.listCreanceGlobales; _i < _g.length; _i++) {
            var liste = _g[_i];
            var tmp = [(_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
        }
        var somme1 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "Total ", somme3, somme1, somme2]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 70,
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
                doc.rect(60, 30, 105, 20);
                //doc.setFillColor(240,240,240)
                //doc.rect(13,65,185,23,'F')
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("Créance globale périodique ", 85, 42);
                doc.text("rapport périodique du " + date1 + " au " + date2, 20, 60);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(12);
                doc.text("Dakar, le :", 150, 10);
                doc.setFontSize(12);
                doc.text("Institut de Prévoyance Maladie ", 50, 10);
                doc.text("du personnel de la Poste ", 60, 17);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    CreancesGbalesComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    CreancesGbalesComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"] }
    ]; };
    CreancesGbalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-creances-gbales',
            template: _raw_loader_creances_gbales_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_creances_gbales_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"]])
    ], CreancesGbalesComponent);
    return CreancesGbalesComponent;
}());



/***/ }),

/***/ "wPeT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-annuelle/situation-annuelle.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      \r\n  <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\" >\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">search</i>\r\n        </div>\r\n\r\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 60%;\">Rapport annuel des cotisations </h2>\r\n\r\n       \r\n    </div>\r\n      <div class=\"card-body\">\r\n        <form #form=\"ngForm\">\r\n  \r\n          <div class=\"row\">\r\n\r\n       \r\n          <div class=\"col-md-3\" style=\"margin-bottom: 2px;\">\r\n            <mat-form-field>\r\n            <mat-select ([ngModel])=\"selectedY\" placeholder=\"Choisir une année\">\r\n              <mat-option *ngFor=\"let year of years\" [value]=\"year\"  (click)=\"getChoixAnne(year)\">{{ year }} </mat-option> \r\n              \r\n            </mat-select>\r\n    \r\n          </mat-form-field>\r\n          </div>\r\n     >\r\n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n          <button mat-raised-button type=\"submit\" \r\n           (click)=\"getCumulAnnee()\" class=\"btn btn-fill btn-success\"><i\r\n              class=\"material-icons\">search</i>Rechercher</button>\r\n        </div>\r\n          \r\n        </div>\r\n        </form>\r\n        <div class=\"card\" *ngIf=\"desactive\">\r\n          <p style=\"text-align:center; color:red;font-size: 30px;\">Cotisations introuvale pour cette année</p>\r\n      </div> \r\n        </div>\r\n        \r\n        </div>\r\n        \r\n        <!--liste creances-->\r\n  <div class=\"col-md-12\" *ngIf=\" !desactive && detailsCotisations\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header card-header-icon\">\r\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n            <i class=\"material-icons\">list</i>\r\n    \r\n          </div>\r\n          <h2 class=\"text-center\" \r\n          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste Cotisations Globales\r\n          </h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"material-datatable\">\r\n          <table id=\"datatable\" class=\"table table-bordered \" \r\n           #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\r\n    \r\n            <thead style=\"font-weight:bold;\">\r\n    \r\n              <th cope=\"col\">Mois</th>\r\n              <th cope=\"col\">Montants Totals</th>\r\n              <th cope=\"col\">Action</th>\r\n    \r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let element of detailsCotisations; let i=index\">\r\n                <td>{{element.ipm_employe?.justificatif}}<b></b></td>\r\n                <td>{{element.ipm_cotisation?.montant_totals}}<b></b></td>\r\n              \r\n\r\n                \r\n                <td class=\"td_actions\">\r\n              \r\n                  <i class=\"material-icons\" class=\"btn btn-info\" (click)=\"getDetailsCotisation(element)\" data-toggle=\"modal\"\r\n                  data-target=\"#noticeModal\"><span \r\n                      class=\"fa fa-plus fa-fw\"></span> </i>\r\n                </td>\r\n                <!-- <td>\r\n                  <button class=\"btn btn-info btn-block\" \r\n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                  </button></td> -->\r\n    \r\n    \r\n              </tr>\r\n            </tbody>\r\n            <!-- <tfoot style=\"font-weight:bold;\">\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>\r\n                  <h4>TOTAL</h4>\r\n                </td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n    \r\n              </tr>\r\n            </tfoot> -->\r\n    \r\n          </table>\r\n        </div>\r\n         \r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n    <!--fin liste-->\r\n\r\n           <!--modal list service-->\r\n           <div class=\"modal fade\" id=\"noticeModal\" style=\"margin-left: -10%;\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n           aria-hidden=\"true\">\r\n           <div class=\"modal-dialog\" >\r\n               <div class=\"modal-content\"style=\"width: 1000px;\">\r\n                   <div class=\"modal-header\" style=\"background-color: whitesmoke;\">\r\n                       <h3 class=\"modal-title\" id=\"noticeModal\"\r\n                        style=\"font-weight:bold; padding-bottom: 10px;\">Details Cotisations\r\n                       \r\n                       </h3>\r\n                       <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                           <i class=\"material-icons\">close</i>\r\n                       </button>\r\n                   </div>\r\n                   <div class=\"modal-body\" style=\"width: 1000px;\">\r\n\r\n                       <div class=\"row\">\r\n                               <table class=\"table table-hover table-bordered col-md-12\">\r\n                                   <thead>\r\n                                       <tr style=\"background-color:rgb(213, 213, 213);\">\r\n                                           <th style=\"font-weight: 500;\">Matricule</th>\r\n                                           <th  style=\"font-weight: 500;\">Nom</th>\r\n                                           <th  style=\"font-weight: 500;\">Prénom</th>\r\n                                           <th  style=\"font-weight: 500;\">Montant Cotisation</th>\r\n                                           <th  style=\"font-weight: 500;\">Action</th>\r\n                                       </tr>\r\n                                   </thead>\r\n                                   <tbody>\r\n                                       <tr *ngFor=\"let listelement of listCotisations\" style=\"font-weight: 400;\">\r\n                                        <td>{{listelement.ipm_employe?.matricule}}</td>\r\n                                        <td>{{listelement.ipm_employe?.nom}}</td>\r\n                                        <td>{{listelement.ipm_employe?.prenom}}</td>\r\n                                           <td>{{listelement.montant}}</td>\r\n                                           <td class=\"td_actions text-right\">\r\n                                               <button mat-raised-button type=\"button\" class=\"btn btn-warning  btn-round btn-xs\"\r\n                                                   id=\"edit\">\r\n                                                   <i class=\"fa fa-home\"></i></button>\r\n                                           </td>\r\n                                       </tr>\r\n                                   </tbody>\r\n                               </table>\r\n                           </div>\r\n                           <div class=\"modal-footer justify-content-center\">\r\n                            <button mat-raised-button class=\"btn btn-fill btn-success btn-round\" \r\n                                  (click)=\"printSituationAnnuelle()\">imprimer\r\n                                 </button>\r\n                            </div> \r\n                       \r\n                   </div>\r\n                   \r\n               </div>\r\n           </div>\r\n       </div>\r\n\r\n       <!--fin modal-->\r\n    \r\n    \r\n  \r\n  \r\n  \r\n");

/***/ }),

/***/ "wzYM":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-prestation/situation-prestation.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!---->\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      \r\n  <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\" >\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">search</i>\r\n        </div>\r\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Situation individuelle </h2>\r\n    </div>\r\n      <div class=\"card-body\">\r\n        <form #form=\"ngForm\">\r\n  \r\n          <div class=\"row\">\r\n          \r\n  \r\n          <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\r\n            <label for=\"Numéro\"><b>Numéro Facture</b></label>\r\n            \r\n            <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\r\n          </div> -->\r\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n              <!-- <legend>date Facture</legend> -->\r\n              <mat-form-field>\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker startView=\"year\"></mat-datepicker>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n            <!-- <legend>date Facture</legend> -->\r\n            <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Prestation\" name=\"Prestation\"\r\n              >\r\n              <mat-option *ngFor=\"let presta of listPrestation\" [value]=\"presta.code_prestation\" (click)=\"getPrestation(presta)\">\r\n                {{ presta.libelle }} \r\n              </mat-option>\r\n  \r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div> -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\r\n                name=\"Matricule\" [(ngModel)]=\"matricule\" >\r\n            </mat-form-field>\r\n          </div>\r\n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n          <button mat-raised-button type=\"submit\" \r\n           (click)=\"getSituation();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\r\n              class=\"material-icons\">search</i>Rechercher</button>\r\n        </div>\r\n          \r\n        </div>\r\n        </form>\r\n        </div>\r\n        </div>\r\n        \r\n        <!--liste creances-->\r\n  <div class=\"col-md-12\" *ngIf=\"listPrestatio\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\">\r\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n            <i class=\"material-icons\">list</i>\r\n    \r\n          </div>\r\n          <h3 class=\"text-center\" \r\n          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste des prestations de {{prenom}} {{nom}} du {{d1}} au {{d2}}\r\n          </h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"material-datatable\">\r\n          <table id=\"datatable\" class=\"table table-bordered \" \r\n           #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\r\n    \r\n            <thead style=\"font-weight:bold;\">\r\n    \r\n              <th cope=\"col\"> Facture</th>\r\n              <th cope=\"col\">Prestataire</th>\r\n              <th cope=\"col\">Traitement</th>\r\n              <th cope=\"col\">Date Prestation</th>\r\n\r\n              <th cope=\"col\">ChargeIpm</th>\r\n              <th cope=\"col\">ChargeAgent</th>\r\n              <th cope=\"col\">MontantFacture</th>\r\n\r\n          \r\n              <!-- <th cope=\"col\">Action</th> -->\r\n    \r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let element of listPrestatio; let i=index\">\r\n                <td><b>{{element.ipmFacture?.numerofacture}}</b></td>\r\n                <td><b>{{element.ipmFacture?.ipm_prestataire.nom_prestataire}}</b></td>\r\n                \r\n                <td><b>{{element.ipm_prestation?.libelle}}</b></td>\r\n                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n                <td><b>{{element.ipmFacture.dateSaisie | date:'d MMM,y'}}</b></td>\r\n                <td><b>{{element.part_ipm}}</b></td>\r\n                <td><b>{{element.part_patient}}</b></td>\r\n                <td><b>{{element.montant_facture}}</b></td>\r\n\r\n\r\n                \r\n                <!-- <td class=\"td_actions\">\r\n                    <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\" (click)=\"getPrestaton(element)\">\r\n                        <i class=\"material-icons\"\r\n                          >person</i>\r\n                      </button>\r\n                </td> -->\r\n                <!-- <td>\r\n                  <button class=\"btn btn-info btn-block\" \r\n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                  </button></td> -->\r\n    \r\n    \r\n              </tr>\r\n            </tbody>\r\n            <!-- <tfoot style=\"font-weight:bold;\">\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>\r\n                  <h4>TOTAL</h4>\r\n                </td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td>{{}}</td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n    \r\n              </tr>\r\n            </tfoot> -->\r\n    \r\n          </table>\r\n        </div>\r\n          <!-- <div class=\"modal-footer justify-content-center\"></div> -->\r\n            <button class=\"btn btn-raised btn-round btn-success\"  (click)=\"imprimer() \">imprimer\r\n            </button>\r\n            <button class=\"btn btn-raised btn-round btn-info\" style=\"margin-left: 80%; margin-top: -2cm;\"  (click)=\"getremboursement() \">remboursement\r\n            </button>\r\n          \r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n    <!--fin liste-->\r\n    \r\n    \r\n  \r\n  \r\n  ");

/***/ }),

/***/ "xMcM":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-par-prestation/situation-par-prestation.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-icon\" >\r\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n        <i class=\"material-icons\">search</i>\r\n      </div>\r\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 70%;\">Rapport pérodique par prestation </h2>\r\n  </div>\r\n    <div class=\"card-body\">\r\n      <form #form=\"ngForm\">\r\n\r\n        <div class=\"row\">\r\n        \r\n\r\n        \r\n        \r\n        <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\r\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\r\n          \r\n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\r\n        </div> -->\r\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n            <!-- <legend>date Facture</legend> -->\r\n            <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker startView=\"year\"></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n          <!-- <legend>date Facture</legend> -->\r\n          <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n          </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"prestation\" name=\"prestation\" [(ngModel)]=\"prestation\"\r\n          >\r\n            <mat-option *ngFor=\"let presta of listPrestation\" [value]=\"presta.code_prestation\" (click)=\"getprestation(presta)\">\r\n              {{ presta.libelle }} \r\n            </mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <div class=\"col-md-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\r\n              name=\"Matricule\" [(ngModel)]=\"matricule\" >\r\n          </mat-form-field>\r\n        </div> -->\r\n      <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n        <button mat-raised-button type=\"submit\" \r\n         (click)=\"getSituation();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\r\n            class=\"material-icons\">search</i>Rechercher</button>\r\n      </div>\r\n        \r\n      </div>\r\n      </form>\r\n      </div>\r\n      </div>\r\n              <!--liste creances-->\r\n  <div class=\"col-md-12\" *ngIf=\"list\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header card-header-icon\">\r\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n          <i class=\"material-icons\">list</i>\r\n  \r\n        </div>\r\n        <h2 class=\"text-center\" \r\n        style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">la prestation de {{prestationChoisi}} du {{d1}} au {{d2}}\r\n        </h2>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"material-datatable\">\r\n        <table id=\"datatable\" class=\"table table-bordered \" \r\n         #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\r\n  \r\n          <thead style=\"font-weight:bold;\">\r\n            <tr>\r\n  \r\n            <th cope=\"col\"> Facture</th>\r\n            <th cope=\"col\"> Prenom</th>\r\n            <th cope=\"col\"> Nom</th>\r\n            <th cope=\"col\"> matricule</th>\r\n            <th cope=\"col\">Prestataire</th>\r\n            \r\n            <th cope=\"col\">Date Prestation</th>\r\n\r\n            <th cope=\"col\">ChargeIpm</th>\r\n            <th cope=\"col\">ChargeAgent</th>\r\n            <th cope=\"col\">MontantFacture</th>\r\n\r\n        \r\n            \r\n            </tr>\r\n  \r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let element of list; let i=index\">\r\n              <td><b>{{element.ipmFacture?.numerofacture}}</b></td>\r\n              <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n              <td><b>{{element.ipm_employe?.nom}}</b></td>\r\n              <td><b>{{element.ipm_employe?.matricule}}</b></td>\r\n                \r\n\r\n              <td><b>{{element.ipmFacture?.ipm_prestataire.nom_prestataire}}</b></td>\r\n              \r\n              <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n              <td><b>{{element.dateSaisie}}</b></td>\r\n              <td><b>{{element.part_ipm}}</b></td>\r\n              <td><b>{{element.part_patient}}</b></td>\r\n              <td><b>{{element.montant_facture}}</b></td>\r\n\r\n\r\n              \r\n              <!-- <td class=\"td_actions\">\r\n                  <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\" (click)=\"getPrestaton(element)\">\r\n                      <i class=\"material-icons\"\r\n                        >person</i>\r\n                    </button>\r\n              </td> -->\r\n              <!-- <td>\r\n                <button class=\"btn btn-info btn-block\" \r\n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                </button></td> -->\r\n  \r\n  \r\n            </tr>\r\n          </tbody>\r\n          <!-- <tfoot style=\"font-weight:bold;\">\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>\r\n                <h4>TOTAL</h4>\r\n              </td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td>{{}}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n  \r\n            </tr>\r\n          </tfoot> -->\r\n  \r\n        </table>\r\n      </div>\r\n      <button class=\"btn btn-raised btn-round btn-success\"  (click)=\"imprimer() \">imprimer\r\n    </button>\r\n        <!-- <div class=\"modal-footer justify-content-center\">\r\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\r\n          </button>\r\n        </div> -->\r\n      </div>\r\n  \r\n    </div>\r\n  </div>");

/***/ }),

/***/ "yBa3":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-des-bons/situation-des-bons.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-icon\" >\r\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n        <i class=\"material-icons\">search</i>\r\n      </div>\r\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width:   60%;\">Rapport Pérodique par type de Bon</h2>\r\n  </div>\r\n    <div class=\"card-body\">\r\n      <form #form=\"ngForm\">\r\n\r\n        <div class=\"row\">\r\n        \r\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n            <!-- <legend>date Facture</legend> -->\r\n            <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker startView=\"year\"></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n          <!-- <legend>date Facture</legend> -->\r\n          <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n          </mat-form-field>\r\n      </div>\r\n       <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Type Bons\" name=\"typeBons\" [(ngModel)]=\"typeBons\"\r\n            >\r\n            <mat-option *ngFor=\"let typeB of listypeBon\" [value]=\"typeB.value\">\r\n              {{ typeB.value }} \r\n            </mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div> \r\n      <!-- <div class=\"col-md-6\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\r\n              name=\"Matricule\" [(ngModel)]=\"matricule\" >\r\n          </mat-form-field>\r\n        </div> -->\r\n      <div class=\"card-footer\" style=\"padding-left: 40%;\">\r\n        <button mat-raised-button type=\"submit\" \r\n         (click)=\" getBonsPeriode();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\r\n            class=\"material-icons\">search</i>Rechercher</button>\r\n      </div>\r\n        \r\n      </div>\r\n      </form>\r\n      </div>\r\n      </div>\r\n      <!---Liste Bon-->\r\n      <div class=\"col-md-12\" *ngIf=\"listBonGlobalsPrestation\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\">\r\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n              <i class=\"material-icons\">list</i>\r\n      \r\n            </div>\r\n            <h2 class=\"text-center\" \r\n            style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">Bon de {{d3}} du {{d1}} au {{d2}}\r\n            </h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"material-datatable\">\r\n            <table id=\"datatable\" class=\"table table-bordered \" \r\n             #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\r\n      \r\n              <thead style=\"font-weight:bold;\">\r\n           <tr>\r\n                <th cope=\"col\"> Matricule</th>\r\n                <th cope=\"col\">Nom Participant</th>\r\n                <th cope=\"col\">Prenom Participant</th>\r\n                <th cope=\"col\">Prestataire </th>\r\n                <th cope=\"col\">Prestation</th>\r\n      \r\n            \r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let element of listBonGlobalsPrestation; let i=index\">\r\n                  <td><b>{{element.ipm_employe?.matricule}}</b></td>\r\n                  <td><b>{{element.ipm_employe?.nom}}</b></td>\r\n                  <td><b>{{element.ipm_employe?.prenom}}</b></td>\r\n                  <td><b>{{element.ipm_prestataire?.nom_prestataire}}</b></td>\r\n                  <td><b>{{element.ipm_prestation?.libelle}}</b></td>\r\n                  <!-- <td><b>{{element.part_ipm}}</b></td>\r\n                  <td><b>{{element.part_patient}}</b></td> -->\r\n                \r\n                  <!-- <td>\r\n                    <button class=\"btn btn-info btn-block\" \r\n                   data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                    </button></td> -->\r\n      \r\n      \r\n                </tr>\r\n              </tbody>\r\n              <!-- <tfoot style=\"font-weight:bold;\">\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>\r\n                    <h4>TOTAL</h4>\r\n                  </td>\r\n                  <td>{{}}</td>\r\n                  <td>{{}}</td>\r\n                  <td>{{}}</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n      \r\n                </tr>\r\n              </tfoot> -->\r\n      \r\n            </table>\r\n          </div>\r\n          <div class=\"modal-footer justify-content-center\">\r\n            <button mat-raised-button class=\"btn btn-fill btn-success btn-round\" \r\n                  (click)=\"printSituationBons()\">imprimer\r\n                 </button>\r\n            </div> \r\n          </div>\r\n      \r\n        </div>\r\n      </div>\r\n\r\n   <!---Liste Bon-->");

/***/ })

}]);
//# sourceMappingURL=rapports-rapports-module.js.map