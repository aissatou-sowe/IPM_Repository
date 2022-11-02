(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remboursements-remboursements-module"],{

/***/ "6w3G":
/*!*************************************************************************************!*\
  !*** ./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AjoutRemboursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutRemboursementComponent", function() { return AjoutRemboursementComponent; });
/* harmony import */ var _raw_loader_ajout_remboursement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-remboursement.component.html */ "Lvuk");
/* harmony import */ var _ajout_remboursement_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-remboursement.component.css */ "rbAY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Models_IPM_DetaRembourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/IPM_DetaRembourse */ "9ew4");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Models/IPM_Remboursement */ "hxs8");
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










var AjoutRemboursementComponent = /** @class */ (function () {
    function AjoutRemboursementComponent(emp_service, datepipe, dateAdapter, factservice) {
        this.emp_service = emp_service;
        this.datepipe = datepipe;
        this.dateAdapter = dateAdapter;
        this.factservice = factservice;
        this.listRembourse = [];
        this.rembGlobal = new _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__["Remboursement"]();
        this.rembouGlobal = new _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__["Remboursement"]();
        this.listEmploye = [];
        this.pani = [];
        this.panier = [];
        this.compte = 0;
        this.desactive = false;
        this.detailremb = { idDetail: null, matricule: null, montant: null, ipm_employe: null, ipmRemboursement: null };
        this.dateAdapter.setLocale('en-GB');
    }
    AjoutRemboursementComponent.prototype.ngOnInit = function () {
        //debugger
    };
    AjoutRemboursementComponent.prototype.getMatricule = function () {
        var _this = this;
        console.log(this.matricule);
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            console.log(_this.message);
        }, function (err) { console.log("error"); });
    };
    AjoutRemboursementComponent.prototype.ajoutRemboursement = function () {
        this.date1 = this.datepipe.transform(this.date, 'dd-MM-yyyy');
        console.log(this.message, this.message.matricule);
        var jsonRembourse = new src_app_Models_IPM_DetaRembourse__WEBPACK_IMPORTED_MODULE_5__["IPM_DetaRembourse"]();
        jsonRembourse.ipm_employe = this.message;
        jsonRembourse.matricule = this.message.matricule;
        jsonRembourse.montant = this.montantR;
        this.listRembourse.push(__assign({}, jsonRembourse));
        this.rembGlobal.dateRemboursement = this.date;
        this.calculemontant();
    };
    AjoutRemboursementComponent.prototype.calculemontant = function () {
        this.totalMont = 0;
        this.cumul = 0;
        for (var _i = 0, _a = this.listRembourse; _i < _a.length; _i++) {
            var total = _a[_i];
            this.totalMont += total.montant;
            this.cumul += total.ipm_employe.cumul_charge;
            this.rembGlobal.montantRemboursement = this.totalMont;
            console.log(this.listRembourse, this.rembGlobal);
        }
    };
    AjoutRemboursementComponent.prototype.deleteDetails = function (index) {
        this.listRembourse.splice(index, 1);
        this.calculemontant();
    };
    AjoutRemboursementComponent.prototype.ajoutRem = function () {
        var _this = this;
        this.factservice.AjoutRembour(this.rembGlobal).subscribe(function (data) {
            _this.rembGlobal.idRemboursement = parseInt(data);
            console.log(_this.rembGlobal);
            for (var _i = 0, _a = _this.listRembourse; _i < _a.length; _i++) {
                var list = _a[_i];
                list.ipmRemboursement = JSON.parse(JSON.stringify(_this.rembGlobal));
            }
            console.log(_this.listRembourse);
            _this.factservice.AjoutdetaRembour(_this.listRembourse).subscribe(function (data) {
            });
        });
    };
    //importation
    AjoutRemboursementComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        this.date11 = this.datepipe.transform(this.dateRemboursement, 'dd-MM-yyyy');
        console.log(this.date11);
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            _this.wb.SheetNames.forEach(function (ele) {
                _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(_this.wb.Sheets[ele]);
                console.log(_this.ws);
            });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
            _this.calculMontant(_this.ws);
            console.log(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    AjoutRemboursementComponent.prototype.deleteDetailrembs = function (index) {
        this.ws.splice(index, 1);
        this.calculMontant(this.ws);
    };
    AjoutRemboursementComponent.prototype.calculMontant = function (fac) {
        this.totalG = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.totalG += element.Montant;
            console.log(this.totalG);
        }
    };
    AjoutRemboursementComponent.prototype.ajoutRemGlobale = function (fac) {
        var _this = this;
        this.rembouGlobal.montantRemboursement = this.totalG;
        this.rembouGlobal.dateRemboursement = this.dateRemboursement;
        this.factservice.AjoutRembour(this.rembouGlobal).subscribe(function (data) {
            _this.rembouGlobal.idRemboursement = parseInt(data);
            console.log(_this.rembouGlobal);
            var _loop_1 = function (index) {
                console.log(fac);
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
                        //for (let i = 0; i <fac.length ; i++ {
                        //console.log(this.listEmploye[0])
                        //}
                        _this.detailremb.montant = index.Montant;
                        _this.detailremb.matricule = index.Matricule;
                        _this.detailremb.ipm_employe = _this.message;
                        _this.detailremb.ipmRemboursement = _this.rembouGlobal;
                        // this.detailFactur.datePrestation = new Date()
                        console.log(_this.detailremb);
                        console.log(_this.detailremb.ipm_employe);
                        console.log(_this.detailremb);
                        _this.panier.push(__assign({}, _this.detailremb));
                        console.log(fac.length, _this.listEmploye.length);
                        // while (this.panier) {
                        if (fac.length == _this.listEmploye.length) {
                            console.log(_this.listEmploye.length);
                            _this.factservice.AjoutdetaRembour(_this.panier).subscribe(function (data) {
                                console.log(data);
                            });
                            for (var index_1 = 0; index_1 < _this.panier.length; index_1++) {
                                _this.objetEmploye = _this.panier[index_1].ipm_employe;
                                console.log(_this.objetEmploye.solde);
                                // this.objetEmploye.solde-=this.panier[index].montant
                                _this.factservice.updateOnEmploye(_this.objetEmploye).subscribe(function (data) {
                                    console.log(_this.objetEmploye.solde);
                                });
                            }
                            _this.showALERTE2('top', 'center');
                            _this.desactive = true;
                        }
                    }
                    else if (!_this.message) {
                        _this.compte++;
                        console.log("Erreur sur le fichier " + index.Matricule, index, _this.compte);
                        _this.indexMatricule = index;
                        console.log(_this.rembouGlobal, _this.compte);
                        if (_this.compte == 1) {
                            _this.factservice.deleterembById(_this.rembouGlobal.idRemboursement).subscribe(function (data) {
                                _this.matri = index.Matricule;
                                _this.desactive = true;
                                _this.showALERTE('top', 'center');
                                console.log(+index.Matricule);
                            });
                        }
                        // this.router.navigate(['/gestion-factures']);
                    }
                });
            };
            // for(let list of this.listRembourse){
            //   list.ipmRemboursement=JSON.parse(JSON.stringify(this.rembouGlobal))
            // }
            // console.log(this.listRembourse)
            // this.factservice.AjoutdetaRembour(this.listRembourse).subscribe((data)=>{
            // })
            for (var _i = 0, fac_2 = fac; _i < fac_2.length; _i++) {
                var index = fac_2[_i];
                _loop_1(index);
            }
        });
    };
    AjoutRemboursementComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b>Veuillez verifer le fichier pour le Matricule :' + this.matri + ' </b> :'
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
    AjoutRemboursementComponent.prototype.showALERTE2 = function (from, align) {
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
    AjoutRemboursementComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__["FactureService"] }
    ]; };
    AjoutRemboursementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ajout-remboursement',
            template: _raw_loader_ajout_remboursement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_remboursement_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__["FactureService"]])
    ], AjoutRemboursementComponent);
    return AjoutRemboursementComponent;
}());



/***/ }),

/***/ "9ew4":
/*!*********************************************!*\
  !*** ./src/app/Models/IPM_DetaRembourse.ts ***!
  \*********************************************/
/*! exports provided: IPM_DetaRembourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_DetaRembourse", function() { return IPM_DetaRembourse; });
var IPM_DetaRembourse = /** @class */ (function () {
    function IPM_DetaRembourse(idDetail, matricule, montant, ipm_employe, ipmRemboursement) {
        this.idDetail = idDetail;
        this.matricule = matricule;
        this.montant = montant;
        this.ipm_employe = ipm_employe;
        this.ipmRemboursement = ipmRemboursement;
    }
    return IPM_DetaRembourse;
}());



/***/ }),

/***/ "A/My":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/cotisation/cotisation.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card \" style=\"margin-left:8cm;\">\r\n                <div class=\"card-header card-header-icon\">\r\n                    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                        <i class=\"material-icons\">list</i>\r\n                    </div>\r\n                    <h3 style=\"background-color:whitesmoke; \r\n                    font-weight: 400; color: \r\n                    black; pading: 5px; width: 50%;\" class=\"card-title\">Cotisations</h3>\r\n                </div>\r\n                <div class=\"card-body\" style=\"padding-left: 3.5cm;\">\r\n\r\n                    <form [formGroup]=\"uploadForm\">\r\n    \r\n         \r\n                        <!-- <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" class=\"btn btn-outline-success\" /> -->\r\n                  <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"true\"  formControlName=\"myFile\"/>\r\n              \r\n                  <div class=\"modal-footer justify-content-center\">\r\n                  <button  class=\"btn btn-success\" (click)=\"onSubmit()\">\r\n                    <i class=\"material-icons\">checked</i>Ajout Cotisation</button>\r\n                  </div>\r\n                </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "BMGj":
/*!*************************************************************************************!*\
  !*** ./src/app/remboursements/list-remboursements/list-remboursements.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListRemboursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRemboursementsComponent", function() { return ListRemboursementsComponent; });
/* harmony import */ var _raw_loader_list_remboursements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-remboursements.component.html */ "RQ3x");
/* harmony import */ var _list_remboursements_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-remboursements.component.css */ "TYm4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListRemboursementsComponent = /** @class */ (function () {
    function ListRemboursementsComponent(factservice, router) {
        this.factservice = factservice;
        this.router = router;
    }
    ListRemboursementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factservice.getAllRemboursementGlobal().subscribe(function (data) {
            _this.liste = data;
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
            console.log(_this.liste);
        });
    };
    ListRemboursementsComponent.prototype.getDetrembouById = function (fac) {
        //location.reload();
        //(<any>$('#datatable1')).dataTable().fnDestroy();
        console.log(fac.idRemboursement);
        this.router.navigate(['/remboursements/certification/' + fac.idRemboursement]);
    };
    ListRemboursementsComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ListRemboursementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-remboursements',
            template: _raw_loader_list_remboursements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_remboursements_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListRemboursementsComponent);
    return ListRemboursementsComponent;
}());



/***/ }),

/***/ "Lvuk":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .btn-group button {\r\n      background-color: #1240d4;\r\n      border: none;\r\n      /* Green border */\r\n      color: white;\r\n      /* White text */\r\n      padding: 10px 100px;\r\n      /* Some padding */\r\n      cursor: pointer;\r\n      /* Pointer/hand icon */\r\n      float: left;\r\n      /* Float the buttons side by side */\r\n\r\n  }\r\n\r\n  /* Clear floats (clearfix hack) */\r\n  .btn-group:after {\r\n      content: \"\";\r\n      clear: both;\r\n      display: table;\r\n  }\r\n\r\n  .btn-group button:not(:last-child) {\r\n      border-right: none;\r\n      /* Prevent double borders */\r\n  }\r\n\r\n</style>\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n      <div class=\"card \" style=\"margin-left:4cm;\">\r\n          <div class=\"card-header card-header-icon\">\r\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                  <i class=\"material-icons\">list</i>\r\n              </div>\r\n              <h4 class=\"card-title\">remboursement</h4>\r\n          </div>\r\n          <div class=\"card-body \">\r\n              <div class=\"btn-group\">\r\n                  <table>\r\n                      <thead>\r\n                          <th></th>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr>\r\n                              <td> <button class=\"w-100\"  data-toggle=\"modal\"\r\n                                      data-target=\"#noticeModal\">Saisissez un remboursement </button></td>\r\n                           <td><button class=\"w-100\"  data-toggle=\"modal\"\r\n                            data-target=\"#noticeModal2\">importez un remboursement</button></td>\r\n                                 \r\n\r\n                          </tr>\r\n                      </tbody>\r\n                  </table>\r\n              </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n          aria-hidden=\"true\">\r\n          <div class=\"modal-dialog\" >\r\n              <div class=\"modal-content\"style=\"width: 900px; margin-left:-3cm;margin-top: 3cm;\">\r\n                  <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\r\n                  >\r\n                      <h2 class=\"modal-title p-2\" id=\"noticeModal\" style=\"font-weight:400;\">Remboursement par participant\r\n                      \r\n                      </h2>\r\n                      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                          <i class=\"material-icons\">close</i>\r\n                      </button>\r\n                  </div>\r\n                  <div class=\"modal-body\" style=\"width: 900px;\">\r\n\r\n                      \r\n                          <form>\r\n                              <div class=\"row bordered\" >\r\n                                <div class=\"input-group col-md-4 bordered \">\r\n                                  <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\r\n                                    [(ngModel)]=\"matricule\">\r\n                                    <button mat-raised-button (click)=\"getMatricule()\" style=\"margin-top: -7px;padding: 4px;\"\r\n                                    class=\"btn btn-fill btn-success\"><i class=\"material-icons\">search</i>Rechercher</button>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                              <form>\r\n\r\n                                \r\n                                \r\n                                \r\n                              <div class=\"row bordered\" >\r\n                              <div class=\"col-md-4 form-group bordered \"  *ngIf=\"message\">\r\n                                  <label for=\"Taux_ipm\"><b>Nom</b></label><br />\r\n                                  {{message.nom}}\r\n                                </div>\r\n                                <div class=\"col-md-4 form-group\"  *ngIf=\"message\">\r\n                                  <label for=\"Prenom\"><b>Prenom</b></label><br />\r\n                                  {{message.prenom}}\r\n                                </div>\r\n                                <div class=\"col-md-4 form-group\"  *ngIf=\"message\">\r\n                                  <label for=\"Numero Carnet\"><b>Numero Carnet</b></label><br />\r\n                                  {{message.numero_carnet}}\r\n                                </div>\r\n                \r\n                              </div>\r\n                              <div class=\"row\" *ngIf=\"message\">\r\n                                  \r\n                                    <div class=\"col-md-4 form-group\">\r\n                                      <label for=\"cumul Charge\"><b>cumul Charge</b></label><br />\r\n                                      {{message.cumul_charge}}\r\n                                    </div>\r\n                                    <div class=\"col-md-4 form-group\">\r\n                                      <label for=\"Montant\"><b>Montant Remboursement</b></label><br />\r\n                                      <input type=\"number\" name=\"montant\" class=\"form-control\" placeholder=\"montant\" id=\"montant\"\r\n                                    [(ngModel)]=\"montantR\">\r\n                                      \r\n                                    </div>\r\n                                    <div class=\"col-md-4\" style=\"margin-top:1cm;\">\r\n                                      <!-- <legend>date Facture</legend> -->\r\n                                      <mat-form-field>\r\n                                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"date\" id=\"dateRemboursement\" name=\"dateRemboursement\" [(ngModel)]=\"date\" (click)=\"picker1.open()\">\r\n                                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                      <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n                                      </mat-form-field>\r\n                                  </div>\r\n\r\n                              </div>\r\n                            </form>\r\n                            <button mat-raised-button (click)=\"ajoutRemboursement()\" *ngIf=\"message\"\r\n                                    class=\"btn btn-fill btn-success\">Ajouter</button>\r\n                              \r\n                          \r\n                                    <hr>\r\n                  </div>\r\n                 \r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\">\r\n                          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                            <i class=\"material-icons\">list</i>\r\n                    \r\n                          </div>\r\n                          <h3  style=\"background-color:whitesmoke; color: black; pading: 5px; width: 40%;\">liste remboursement\r\n                          </h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                    \r\n                          <table class=\"table table-hover table-bordered\">\r\n                    \r\n                            <thead style=\"font-weight:bold;\">\r\n                    \r\n                              <th cope=\"col\"> Matricule</th>\r\n                              <th cope=\"col\">Nom</th>\r\n                              <th cope=\"col\">Prenom</th>\r\n                              <!-- <th cope=\"col\">Code Prestation</th> -->\r\n                              <th cope=\"col\">Numéro Carnet</th>\r\n                              <th cope=\"col\">Cumul charge</th>\r\n                              <th cope=\"col\">Montant Remboursement</th>\r\n                              \r\n                              <th cope=\"col\">Date</th>\r\n                              <th cope=\"col\">Action</th>\r\n                    \r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let element of listRembourse ; let i=index\">\r\n                                <td><b>{{element.matricule}}</b></td>\r\n                                <td><b>{{element.ipm_employe.nom}}</b></td>\r\n                                <td><b>{{element.ipm_employe.prenom}}</b></td>\r\n                                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\r\n                                <td><b>{{element.ipm_employe.numero_carnet}}</b></td>\r\n                                <td><b>{{element.ipm_employe.cumul_charge}}</b></td>\r\n                                <td><b>{{element.montant}}</b></td>\r\n                               \r\n                                <td><b>{{date1}}</b></td>\r\n                                <td class=\"td_actions\">\r\n                                  <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetails(i)><span\r\n                                      class=\"fa fa-trash-o\"></span></i>\r\n                                </td>\r\n                                <!-- <td>\r\n                                  <button class=\"btn btn-info btn-block\" \r\n                                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                                  </button></td> -->\r\n                    \r\n                    \r\n                              </tr>\r\n                            </tbody>\r\n                            <tfoot style=\"font-weight:bold;\">\r\n                              <tr>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td>\r\n                                  <h4>TOTAL</h4>\r\n                                </td>\r\n                                <td>{{cumul}}</td>\r\n                                <td>{{totalMont}}</td>\r\n                                \r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                    \r\n                              </tr>\r\n                            </tfoot>\r\n                    \r\n                          </table>\r\n                          <div class=\"modal-footer justify-content-center\">\r\n                            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"ajoutRem()\">Valider remboursement\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                    \r\n                      </div>\r\n                    </div>\r\n                  \r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <!--import remboursement-->\r\n      <div class=\"modal fade\" id=\"noticeModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n          aria-hidden=\"true\">\r\n          <div class=\"modal-dialog\" >\r\n              <div class=\"modal-content\"style=\"width: 900px; margin-left:-3cm;margin-top: 3cm;\">\r\n                  <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\r\n                  >\r\n                      <h2 class=\"modal-title p-2\" id=\"noticeModal\" style=\"font-weight:400;\">Importation de Remboursement\r\n                      \r\n                      </h2>\r\n                      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                          <i class=\"material-icons\">close</i>\r\n                      </button>\r\n                  </div>\r\n                  <div class=\"modal-body\" style=\"width: 900px;\">\r\n\r\n                      <!---->\r\n<div class=\"card\">\r\n  <div class=\"card-header card-header-icon\" >\r\n    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n      <i class=\"material-icons\">list</i>\r\n    </div>\r\n    <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Remboursement par importation </h2>\r\n</div>\r\n  <div class=\"card-body\">\r\n    <form>\r\n\r\n      <div class=\"row\">\r\n      \r\n\r\n      \r\n      \r\n      <div class=\"col-md-3\" style=\"margin-top: 0px;\">\r\n        <!-- <legend>date Facture</legend> -->\r\n        <mat-form-field>\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"date remboursement\" id=\"dateRemboursement\" name=\"dateRemboursement\" [(ngModel)]=\"dateRemboursement\" (click)=\"picker1.open()\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n      \r\n    </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n                          \r\n                            \r\n                  </div>\r\n                 \r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\">\r\n                          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                            <i class=\"material-icons\">backup</i>\r\n                          </div>\r\n                          <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Importation fichier excel</h2>\r\n                      \r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <form >\r\n                          \r\n                            <input type=\"file\" (change)=\"onFileChange($event)\" />\r\n                          <table class=\"table table-hover table-bordered\">\r\n                    \r\n                            <thead style=\"font-weight:bold;\">\r\n                    \r\n                              <th cope=\"col\"> Matricule</th>\r\n                              <!-- <th cope=\"col\">Nom</th>\r\n                              <th cope=\"col\">Prenom</th>\r\n                              <th cope=\"col\">Numéro Carnet</th>\r\n                              <th cope=\"col\">Cumul charge</th> -->\r\n                              <th cope=\"col\">Montant Remboursement</th>\r\n                              \r\n                              <th cope=\"col\">Date</th>\r\n                              <th cope=\"col\">Action</th>\r\n                    \r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\" let fac of ws ; let i=index\">\r\n                                <td><b>{{fac.Matricule}}</b></td>\r\n                                <!-- <td><b>{{fac.nom}}</b></td>\r\n                                <td><b>{{fac.ipm_employe.prenom}}</b></td>\r\n                                <td><b>{{fac.ipm_employe.numero_carnet}}</b></td>\r\n                                <td><b>{{fac.ipm_employe.cumul_charge}}</b></td> -->\r\n                                <td><b>{{fac.Montant}}</b></td>\r\n                               \r\n                                <td><b>{{date11}}</b></td>\r\n                                <td class=\"td_actions\">\r\n                                  <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetailrembs(i)><span\r\n                                      class=\"fa fa-trash-o\"></span></i>\r\n                                </td>\r\n                                <!-- <td>\r\n                                  <button class=\"btn btn-info btn-block\" \r\n                                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\r\n                                  </button></td> -->\r\n                    \r\n                    \r\n                              </tr>\r\n                            </tbody>\r\n                            <tfoot style=\"font-weight:bold;\">\r\n                              <!-- <tr>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td>\r\n                                  <h4>TOTAL</h4>\r\n                                </td>\r\n                                <td>{{cumul}}</td>\r\n                                <td>{{totalMont}}</td>\r\n                                \r\n                                <td></td>\r\n                                <td></td>\r\n                                <td></td>\r\n                    \r\n                              </tr> -->\r\n                            </tfoot>\r\n                    \r\n                          </table>\r\n                          <div class=\"modal-footer justify-content-center\">\r\n                            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"ajoutRemGlobale(ws)\" [disabled]=\"desactive\">Valider remboursement\r\n                            </button>\r\n                          </div>\r\n                        </form>\r\n                        </div>\r\n                    \r\n                      </div>\r\n                    </div>\r\n                  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     <!--import remboursement--> \r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "MTHE":
/*!*********************************************************!*\
  !*** ./src/app/remboursements/remboursements.module.ts ***!
  \*********************************************************/
/*! exports provided: RemboursementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemboursementsModule", function() { return RemboursementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-remboursement/ajout-remboursement.component */ "6w3G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cotisation/cotisation.component */ "k7XT");
/* harmony import */ var _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-remboursements/list-remboursements.component */ "BMGj");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certification/certification.component */ "XkS0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _remboursements_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remboursements-routing.module */ "bx6n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RemboursementsModule = /** @class */ (function () {
    function RemboursementsModule() {
    }
    RemboursementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_2__["AjoutRemboursementComponent"], _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_5__["CotisationComponent"],
                _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_6__["ListRemboursementsComponent"], _certification_certification_component__WEBPACK_IMPORTED_MODULE_7__["CertificationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_remboursements_routing_module__WEBPACK_IMPORTED_MODULE_10__["rembroutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], RemboursementsModule);
    return RemboursementsModule;
}());



/***/ }),

/***/ "RQ3x":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/list-remboursements/list-remboursements.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--liste facture-->\r\n<style>\r\n    tr{font-weight: bold;}\r\n</style>\r\n<div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n        <div class=\"material-datatable\">\r\n            <div class=\"card-header card-header-icon\" >\r\n                <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                  <i class=\"material-icons\">list</i>\r\n                </div>\r\n                <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 50%;\">Liste des remboursement </h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\r\n                    width=\"100%\" style=\"width:100%\">\r\n                    <div *ngFor=\"let item of pageOfItems\">{{item.nom}}</div>\r\n                    <thead style=\"background-color: whitesmoke; \">\r\n\r\n                        <tr>\r\n                            \r\n                            <th  style=\"font-weight:bold;\" cope=\"col\"> Numero </th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\" >Date</th>\r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Montant remboursement</th>\r\n                            \r\n                    \r\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Action</th>\r\n                    \r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\" let fac of liste\">\r\n                            <td ><b>{{fac.idRemboursement}}</b></td>\r\n                        <td ><b>{{fac.dateRemboursement | date}}</b></td>\r\n                        <td class=\"text-center\"><b>{{fac.montantRemboursement}}</b></td>\r\n\r\n                      \r\n                            <td class=\"td_actions text-right\">\r\n                                \r\n                                <button mat-raised-button (click)=\"getDetrembouById(fac)\" type=\"button\" class=\"btn btn-round btn-xs\" id=\"edit\">\r\n                                    <i class=\"material-icons\" >help</i></button>\r\n                                        \r\n                            </td>\r\n               \r\n                        </tr>\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n\r\n\r\n\r\n                <!-- <thead class=\"text-primary\">\r\n\r\n            \r\n         \r\n          <tfoot class=\"text-primary\">\r\n            <tr>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td><h4>TOTAL<p><div></div>{{montantTotals}}<p></h4></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              <td></td>\r\n              \r\n            </tr>\r\n          </tfoot> -->\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- modal modification -->\r\n\r\n        \r\n    \r\n\r\n");

/***/ }),

/***/ "T9vw":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/certification/certification.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n    tr{font-weight: bold;}\r\n</style>\r\n<div class=\"col-md-12 mt-5\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-icon\" >\r\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n            <h2 style=\"background-color:whitesmoke; color: black; pading: 2px; width: 100%;\">  \r\n                <button mat-raised-button  style=\"float: right;\" class=\"btn btn-fill btn-success\" data-dismiss=\"modal\" (click)=\"CertifierEmploye()\"\r\n                *ngIf=\"certifier!= true else test\">Certifier\r\n                </button>\r\n            \r\n            </h2>\r\n            \r\n            <ng-template #test>\r\n                <h4 class=\" text-white text-center bg-success p-2\" style=\"float: right; font-size: 20px;\">\r\n                    <i class=\"material-icons\">checked</i>\r\n                    la facture est déja certfiée\r\n                </h4>\r\n            </ng-template> \r\n\r\n            \r\n          </div>\r\n        <div class=\"material-datatable\">\r\n            <div class=\"card-body\">\r\n\r\n\r\n\r\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\r\n                    width=\"100%\" style=\"width:100%\">\r\n\r\n                    <thead>\r\n\r\n                        <tr style=\"background-color: whitesmoke\">\r\n                            \r\n                            <th class=\"text-center\" cope=\"col\" ><b>Matricule</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Prenom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Nom</b></th>\r\n                            <th class=\"text-center\" cope=\"col\"><b>Solde</b></th>\r\n                            \r\n                            <th class=\"text-center\" cope=\"col\"><b>Montant </b></th>\r\n                            \r\n                         <!-- <th class=\"text-center\" cope=\"col\"><b>Date</b></th> -->\r\n                            <th class=\"text-center\" cope=\"col\"><b>Action</b></th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr *ngFor=\"let fact of listRembourse\">\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.matricule}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.prenom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.nom}}</td>\r\n                            <td class=\"text-center\">{{fact.ipm_employe?.solde}}</td>\r\n\r\n                            \r\n                            <td class=\"text-center\">{{fact.montant | number:'.2'}}</td>\r\n                            \r\n                            <td class=\"td_actions text-right\">\r\n                                <button mat-raised-button (click)=\"getRembById(fact)\" type=\"button\"\r\n                                    class=\"btn btn-round btn-xs\" id=\"edit\">\r\n                                    <i class=\"material-icons\" data-toggle=\"modal\"\r\n                                        data-target=\"#Modal2\">help</i></button>\r\n                            </td>\r\n                            <!-- <td>\r\n                            <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\r\n                                <div *ngSwitchCase=\"true\">\r\n                                    \r\n                                  <mat-checkbox checked=\"true\"></mat-checkbox>\r\n                                </div>\r\n                                \r\n                                <div *ngSwitchDefault>\r\n                                    \r\n                                  <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                          \r\n                        </td> -->\r\n\r\n                        </tr>\r\n                    </tbody>\r\n\r\n\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<button mat-raised-button class=\"btn btn-fill btn-danger\"  style=\"margin-left: 28.5cm;\" (click)=\"retourner()\"\r\n    >retour\r\n</button>\r\n\r\n\r\n\r\n<!--formulaire-->\r\n<div class=\"modal fade\" id=\"Modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-success\">\r\n                <h4 class=\"modal-title text-white\" id=\"Modal2\" style=\"font-weight:bold;\">Detail\r\n                </h4>\r\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-sm-offset-2\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"nom\">nom :{{nom}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"prenom\">prenom :\r\n                                        {{prenom}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Matricule\">Matricule\r\n                                        :{{matricule}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestation\">Prestation :\r\n                                        {{prestation}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Prestataire\">Prestataire\r\n                                        {{prestataire}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date de Facture\">Date de\r\n                                        Facture : {{dateFacture}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Date d'enregistrement\">Date\r\n                                        d'enregistremen: {{dateEnregistrement}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Montant\">Montant\r\n                                        :{{montant}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part IPM\">Part IPM\r\n                                        :{{part_ipm}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Part Patient\">Part Patient\r\n                                        :{{part_patient}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Solde\">SOLDE\r\n                                        :{{solde}}</label>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\"></div>\r\n                                <div class=\"form-group col-md-5\">\r\n                                    <label style=\"font-weight:bold;\" for=\"Cumul Charge\">Cumul Charge\r\n                                        :{{cumulCharge}}</label>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--end formulaire-->\r\n");

/***/ }),

/***/ "TYm4":
/*!**************************************************************************************!*\
  !*** ./src/app/remboursements/list-remboursements/list-remboursements.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2xpc3QtcmVtYm91cnNlbWVudHMvbGlzdC1yZW1ib3Vyc2VtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "W5SN":
/*!********************************************************************!*\
  !*** ./src/app/remboursements/cotisation/cotisation.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2NvdGlzYXRpb24vY290aXNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XkS0":
/*!*************************************************************************!*\
  !*** ./src/app/remboursements/certification/certification.component.ts ***!
  \*************************************************************************/
/*! exports provided: CertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationComponent", function() { return CertificationComponent; });
/* harmony import */ var _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./certification.component.html */ "T9vw");
/* harmony import */ var _certification_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification.component.css */ "p66G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
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
    function CertificationComponent(factservice, route, router) {
        this.factservice = factservice;
        this.route = route;
        this.router = router;
    }
    CertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idremb = this.route.snapshot.params['id'];
        this.factservice.getAllremboursbyrembourseglobale(this.idremb).subscribe(function (data) {
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
            _this.listRembourse = data;
            console.log(_this.listRembourse);
            console.log(_this.listRembourse);
            for (var _i = 0, _a = _this.listRembourse; _i < _a.length; _i++) {
                var lf = _a[_i];
                _this.certifier = lf.ipmRemboursement.certifier;
                _this.global = lf.ipmRemboursement;
                //this.numero =lf.ipmFacture.numerofacture
            }
        });
    };
    CertificationComponent.prototype.CertifierEmploye = function () {
        var _this = this;
        console.log(this.certifier);
        this.listeCertif = this.listRembourse;
        this.global.certifier = true;
        console.log(this.global);
        this.factservice.updateOnglobal(this.global).subscribe(function (data) { });
        // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
        //  (data)=>{
        console.log(this.listeCertif);
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
        // }                                                                            
        for (var index = 0; index < this.listeCertif.length; index++) {
            this.objetEmploye = this.listeCertif[index].ipm_employe;
            // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
            // this.listFactureCertif[index]
            console.log(this.objetEmploye.solde);
            this.objetEmploye.solde -= this.listeCertif[index].montant;
            // this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
            // //this.chargeEmploie.push({...index.ipm_employe})
            // //console.log(this.chargeEmploie);
            this.update = this.objetEmploye;
            console.log(this.update, this.update.solde);
            // console.log(this.objetEmploye,this.objetEmploye.solde,this.update);
            // debugger
            this.factservice.updateOnEmploye(this.update).subscribe(function (data) { _this.showALERTE("top", "center"); }, function (err) { _this.showALERTE2("top", "center"); });
            //this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>{this. showALERTE("top","center")},
            //err=>{this. showALERTE2("top","center")})
            //  (data)=>{
            //this.elements.push(element);
        }
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



/***/ }),

/***/ "bx6n":
/*!*****************************************************************!*\
  !*** ./src/app/remboursements/remboursements-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: rembroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rembroutes", function() { return rembroutes; });
/* harmony import */ var _gestion_factures_certification_certification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestion-factures/certification/certification.component */ "sk9U");
/* harmony import */ var _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-remboursement/ajout-remboursement.component */ "6w3G");
/* harmony import */ var _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotisation/cotisation.component */ "k7XT");
/* harmony import */ var _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-remboursements/list-remboursements.component */ "BMGj");




var rembroutes = [
    {
        path: '',
        children: [{
                path: 'AjoutRemboursement',
                component: _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_1__["AjoutRemboursementComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'certification/:id',
                component: _gestion_factures_certification_certification_component__WEBPACK_IMPORTED_MODULE_0__["CertificationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Listremboursements',
                component: _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_3__["ListRemboursementsComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Cotisation',
                component: _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_2__["CotisationComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RemboursementsRoutingModule { }


/***/ }),

/***/ "hxs8":
/*!*********************************************!*\
  !*** ./src/app/Models/IPM_Remboursement.ts ***!
  \*********************************************/
/*! exports provided: Remboursement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remboursement", function() { return Remboursement; });
var Remboursement = /** @class */ (function () {
    function Remboursement(idRemboursement, montantRemboursement, dateRemboursement, certifier) {
        this.idRemboursement = idRemboursement;
        this.montantRemboursement = montantRemboursement;
        this.dateRemboursement = dateRemboursement;
        this.certifier = certifier;
    }
    return Remboursement;
}());



/***/ }),

/***/ "k7XT":
/*!*******************************************************************!*\
  !*** ./src/app/remboursements/cotisation/cotisation.component.ts ***!
  \*******************************************************************/
/*! exports provided: CotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotisationComponent", function() { return CotisationComponent; });
/* harmony import */ var _raw_loader_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cotisation.component.html */ "A/My");
/* harmony import */ var _cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotisation.component.css */ "W5SN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/CotisatonGlobal */ "IeU+");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "JcrP");
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










//import { Cotisation, DetailCotisation } from 'src/app/Models/IPM_Cotisation';


//import { CotisationGlobal } from '../../Models/CotisatonGlobal';
var CotisationComponent = /** @class */ (function () {
    function CotisationComponent(router, emp_service, route, toastr, formbuild, httpClient, dateAdapter, datepipe) {
        this.router = router;
        this.emp_service = emp_service;
        this.route = route;
        this.toastr = toastr;
        this.formbuild = formbuild;
        this.httpClient = httpClient;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.listEmploye = [];
        this.cotisation = [];
        this.panier = [];
        this.detailCotisation = { id_Det_Coti: null, montant: null, ipm_employe: null, ipm_cotisation: null };
        this.cotisaGlobal = new src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__["Cotisation"]();
        this.dateAdapter.setLocale('en-GB');
    }
    CotisationComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formbuild.group({
            // evenement: ['', Validators.required],
            myFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            montant: [''],
            matricule: [''],
        });
    };
    CotisationComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // @ts-ignore
            //this.uploadForm.get('myFile').setValue();
        }
    };
    ///////////////////////RELOAD
    CotisationComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    ///////////////////// 
    CotisationComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            _this.wb.SheetNames.forEach(function (ele) {
                _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].sheet_to_json(_this.wb.Sheets[ele]);
                console.log(_this.ws);
            });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
            _this.calculemontant(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    CotisationComponent.prototype.calculemontant = function (fac) {
        this.total = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.total += element.montant;
            console.log(element);
        }
    };
    CotisationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cotisaGlobal.montant_totals = this.total;
        this.cotisaGlobal.date = new Date();
        console.log(this.cotisaGlobal);
        this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(function (data) {
            console.log(data);
            _this.cotisaGlobal.idCotisation = parseInt(data);
            var _loop_1 = function (elemt) {
                _this.total += elemt.montant;
                _this.emp_service.getEmployeByMatricule(elemt.matricule).subscribe(
                //() => console.log("Processing Complete."),
                function (data) {
                    _this.message = data;
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(_this.listEmploye);
                        _this.detailCotisation.montant = elemt.montant;
                        // this.detailCotisation.matricule=elemt.matricule
                        _this.detailCotisation.ipm_employe = _this.message;
                        _this.detailCotisation.ipm_cotisation = _this.cotisaGlobal;
                        _this.panier.push(__assign({}, _this.detailCotisation));
                        console.log(_this.ws.length, _this.listEmploye.length);
                        if (_this.ws.length == _this.listEmploye.length) {
                            console.log(_this.listEmploye.length);
                            _this.emp_service.AjoutDetaCotisation(_this.panier).subscribe(function (data) {
                                console.log(data);
                            });
                            // this.fact_service.UpdateFacture(this.factureglobal).subscribe
                            //   (
                            //     (data) => {
                            //       console.log(data)
                            //     }
                            //   );
                            // this.showALERTE2('top', 'center')
                            // this.desactive=true
                        }
                    }
                    // else if (!this.message && this.cotisaGlobal.) {
                    //   //this.compte++
                    //   console.log("Erreur sur le fichier " +index.Matricule, index, this.compte);
                    //   this.indexMatricule=this.compte
                    //     console.log(this.factureglobal)
                    //     this.fact_service.deleteById(this.factureglobal.idfacture).subscribe(
                    //       (data) => {
                    //         this.matri = index.Matricule
                    //         this.showALERTE('top', 'center')
                    //         console.log(+index.Matricule)
                    //       }
                    //     )
                    //    // this.router.navigate(['/gestion-factures']);
                    // }
                });
            };
            for (var _i = 0, _a = _this.ws; _i < _a.length; _i++) {
                var elemt = _a[_i];
                _loop_1(elemt);
            }
        });
        //   const formData = new FormData();
        //   // @ts-ignore
        //   formData.append('file', this.uploadForm.get('myFile').value);
        //   console.log(this.uploadForm.get('myFile').value);
        //   // @ts-ignore
        //   // formData.append('field', this.uploadForm.get('evenement').value);
        //  console.log(formData);
        //   this.httpClient.post<Cotisation>(environment.URL+'uploadCotisation', formData).subscribe(response => {
        //     console.log(response);
        //     this.toastr.info("Fichier chargé avec succès");
        //     let that = this;
        //     setTimeout(function () {
        //       that.reloadComponent();
        //     }, 5000);
        //   }, err => {
        //     console.log(err);
        //     this.toastr.error("Fichier non chargé")
        //     let that = this;
        //     setTimeout(function () {
        //       that.reloadComponent();
        //     }, 15000);
        //   });
    };
    CotisationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    CotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-cotisation',
            template: _raw_loader_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], CotisationComponent);
    return CotisationComponent;
}());



/***/ }),

/***/ "p66G":
/*!**************************************************************************!*\
  !*** ./src/app/remboursements/certification/certification.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2NlcnRpZmljYXRpb24vY2VydGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "rbAY":
/*!**************************************************************************************!*\
  !*** ./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Modal1 {\r\n    max-width: 1200px;\r\n    margin: 1.\r\n    75rem auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtYm91cnNlbWVudHMvYWpvdXQtcmVtYm91cnNlbWVudC9ham91dC1yZW1ib3Vyc2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakI7Y0FDVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVtYm91cnNlbWVudHMvYWpvdXQtcmVtYm91cnNlbWVudC9ham91dC1yZW1ib3Vyc2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTW9kYWwxIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAxLlxyXG4gICAgNzVyZW0gYXV0bztcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=remboursements-remboursements-module.js.map