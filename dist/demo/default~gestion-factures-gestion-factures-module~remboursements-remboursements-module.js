(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~gestion-factures-gestion-factures-module~remboursements-remboursements-module"],{

/***/ "0WQY":
/*!*********************************************!*\
  !*** ./src/app/Services/facture.service.ts ***!
  \*********************************************/
/*! exports provided: FactureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureService", function() { return FactureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FactureService = /** @class */ (function () {
    function FactureService(http) {
        this.http = http;
    }
    FactureService.prototype.AjoutFacture = function (facture) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture', facture, { responseType: 'text' });
    };
    FactureService.prototype.AjoutDetailsFacture = function (detailfacture) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'adddetailsfacture', detailfacture, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.AjoutRembour = function (Remboursement) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement', Remboursement, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.AjoutdetaRembour = function (listRembourse) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'adddetailsremboursement', listRembourse, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.erroHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'erreur de telechargement de fichier');
    };
    FactureService.prototype.getAllFacture = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'detailsfactures');
    };
    FactureService.prototype.getAllFactureglobale = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'allfacture');
    };
    FactureService.prototype.getAllRemboursementGlobal = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement');
    };
    FactureService.prototype.getAllFactbyfactglobale = function (idfac) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'detailsfacture/' + idfac);
    };
    FactureService.prototype.getAllremboursbyrembourseglobale = function (idremb) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'Detailremboursement/' + idremb);
    };
    FactureService.prototype.Updateremboursement = function (remb) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement', remb);
    };
    FactureService.prototype.UpdateFacture = function (facture) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updatefacture', facture, { responseType: 'text' });
    };
    FactureService.prototype.getFactureById = function (idfac) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'getfacture/' + idfac);
    };
    FactureService.prototype.deleteById = function (idfac) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture/' + idfac);
    };
    FactureService.prototype.deleterembById = function (idfac) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement/' + idfac);
    };
    FactureService.prototype.updateLemploye = function (lEmploye) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateLEmploye', lEmploye, { responseType: 'text' });
    };
    FactureService.prototype.updateLdetailFacture = function (ldetail) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateList', ldetail, { responseType: 'text' });
    };
    FactureService.prototype.updateOnEmploye = function (Employe) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'employe', Employe);
    };
    FactureService.prototype.updateOnglobal = function (Empl) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'upremboursement', Empl);
    };
    FactureService.prototype.getEmployeById = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'employes/' + idemp);
    };
    FactureService.prototype.updateDetailfact = function (ipm_detail) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateDetail', ipm_detail);
    };
    FactureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    FactureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FactureService);
    return FactureService;
}());



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
    numerofacture, date_facture, date_saisie, 
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
        this.date_facture = date_facture;
        this.date_saisie = date_saisie;
        this.part_ipm = part_ipm;
        this.part_patient = part_patient;
        this.ipm_prestataire = ipm_prestataire;
        this.certifier = certifier;
        this.montantTotal = montantTotal;
    }
    return Facture;
}());



/***/ }),

/***/ "oqW8":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-factures/certification/certification.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n    tr{font-weight: bold;}\r\n</style>\r\n<div class=\"col-md-12 mt-5\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\" >\r\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n            <h2 style=\"background-color:whitesmoke; color: black; pading: 2px; width: 100%;\"> Facture numero :{{numero}} \r\n                <button mat-raised-button  style=\"float: right;\" class=\"btn btn-fill btn-success\" data-dismiss=\"modal\" (click)=\"CertifierEmploye()\"\r\n                *ngIf=\"certifier!=true else test\">Certifier\r\n                </button>\r\n            \r\n            \r\n            \r\n            <ng-template #test>\r\n                <h4 class=\" text-white text-center bg-success p-2\" style=\"float: right; font-size: 20px;\">\r\n                    <i class=\"material-icons\">checked</i>\r\n                    la facture est déja certfiée\r\n                </h4>\r\n            </ng-template> </h2>\r\n\r\n            \r\n          </div>\r\n        <div class=\"material-datatable\">\r\n            <div class=\"card-body\">\r\n\r\n\r\n\r\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\r\n                    width=\"100%\" style=\"width:100%\">\r\n\r\n                    <thead>\r\n\r\n                        <tr style=\"background-color: whitesmoke\">\r\n                            \r\n                            <th class=\"text-center\" cope=\"col\" ><b>Matricule</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Prenom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Nom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Prestation</b></th>\r\n                            <!-- <th cope=\"col\">Code Prestation</th> -->\r\n\r\n                            <th class=\"text-center\" cope=\"col\"><b>Montant Facture</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Charge_ipm</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Charge_agent</b></th>\r\n                         <!-- <th class=\"text-center\" cope=\"col\"><b>Date</b></th> -->\r\n                            <th class=\"text-center\" cope=\"col\"><b>Action</b></th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let fact of listFactures\">\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.matricule}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.prenom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.nom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_prestation?.libelle}}</td>\r\n                            <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>\r\n                         -->\r\n                            <td class=\"text-center\">{{fact.montant_facture | number:'.2'}}</td>\r\n                            <td class=\"text-center\">{{fact.part_ipm | number:'.2'}}</td>\r\n                            <td class=\"text-center\">{{fact.part_patient | number:'.2'}}</td>\r\n                            <!-- <td class=\"text-center\">{{fact.date_facture}}</td> -->\r\n                            <td class=\"td_actions text-right\">\r\n                                <button mat-raised-button (click)=\"getFactureById(fact)\" type=\"button\"\r\n                                    class=\"btn btn-round btn-xs\" id=\"edit\">\r\n                                    <i class=\"material-icons\" data-toggle=\"modal\"\r\n                                        data-target=\"#Modal2\">help</i></button>\r\n                            </td>\r\n                            <!-- <td>\r\n                            <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\r\n                                <div *ngSwitchCase=\"true\">\r\n                                    \r\n                                  <mat-checkbox checked=\"true\"></mat-checkbox>\r\n                                </div>\r\n                                \r\n                                <div *ngSwitchDefault>\r\n                                    \r\n                                  <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                          \r\n                        </td> -->\r\n\r\n                        </tr>\r\n                    </tbody>\r\n\r\n\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<button mat-raised-button class=\"btn btn-fill btn-danger\"  style=\"margin-left: 28.5cm;\" (click)=\"retourner()\"\r\n    >retour\r\n</button>\r\n\r\n\r\n\r\n<!--formulaire-->\r\n<div class=\"modal fade\" id=\"Modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-success\">\r\n                <h4 class=\"modal-title text-white\" id=\"Modal2\" style=\"font-weight:bold;\">Detail\r\n                </h4>\r\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-sm-offset-2\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"nom\">nom :{{nom}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"prenom\">prenom :\r\n                                        {{prenom}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Matricule\">Matricule\r\n                                        :{{matricule}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestation\">Prestation :\r\n                                        {{prestation}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestataire\">Prestataire\r\n                                        {{prestataire}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date de Facture\">Date de\r\n                                        Facture : {{dateFacture}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date d'enregistrement\">Date\r\n                                        d'enregistremen: {{dateEnregistrement}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Montant\">Montant\r\n                                        :{{montant}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part IPM\">Part IPM\r\n                                        :{{part_ipm}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part Patient\">Part Patient\r\n                                        :{{part_patient}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Solde\">SOLDE\r\n                                        :{{solde}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Cumul Charge\">Cumul Charge\r\n                                        :{{cumulCharge}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--end formulaire-->");

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
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/IPM_Facture */ "Uzns");
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
        this.facture = new _Models_IPM_Facture__WEBPACK_IMPORTED_MODULE_5__["Facture"]();
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
        //this.fact_service.UpdateFacture(this.facture).subscribe(
        //  (data)=>{}
        // )
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
                // //this.chargeEmploie.push({...index.ipm_employe})
                // //console.log(this.chargeEmploie);
                _this.update = _this.objetEmploye;
                console.log(_this.update, _this.update.solde);
                // console.log(this.objetEmploye,this.objetEmploye.solde,this.update);
                // debugger
                _this.fact_service.updateOnEmploye(_this.update).subscribe(function (data) { _this.showALERTE("top", "center"); }, function (err) { _this.showALERTE2("top", "center"); });
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
    CertificationComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CertificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-certification',
            template: _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_certification_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CertificationComponent);
    return CertificationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~gestion-factures-gestion-factures-module~remboursements-remboursements-module.js.map