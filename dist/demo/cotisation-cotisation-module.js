(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cotisation-cotisation-module"],{

/***/ "EYER":
/*!****************************************************************************!*\
  !*** ./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdGlzYXRpb24vYWpvdXQtY290aXNhdGlvbi9ham91dC1jb3Rpc2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "IyyA":
/*!***************************************************************************!*\
  !*** ./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.ts ***!
  \***************************************************************************/
/*! exports provided: AjoutCotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutCotisationComponent", function() { return AjoutCotisationComponent; });
/* harmony import */ var _raw_loader_ajout_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-cotisation.component.html */ "MpH/");
/* harmony import */ var _ajout_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-cotisation.component.css */ "EYER");
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












var AjoutCotisationComponent = /** @class */ (function () {
    function AjoutCotisationComponent(router, emp_service, route, toastr, formbuild, httpClient, dateAdapter, datepipe) {
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
    AjoutCotisationComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formbuild.group({
            // evenement: ['', Validators.required],
            myFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            montant: [''],
            matricule: [''],
        });
    };
    AjoutCotisationComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // @ts-ignore
            //this.uploadForm.get('myFile').setValue();
        }
    };
    ///////////////////////RELOAD
    AjoutCotisationComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    ///////////////////// 
    AjoutCotisationComponent.prototype.onFileChange = function (evt) {
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
    AjoutCotisationComponent.prototype.calculemontant = function (fac) {
        this.total = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.total += element.Montant;
            console.log(element);
        }
    };
    AjoutCotisationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cotisaGlobal.montant_totals = this.total;
        this.cotisaGlobal.date = new Date();
        console.log(this.cotisaGlobal);
        this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(function (data) {
            console.log(data);
            _this.cotisaGlobal.idCotisation = parseInt(data);
            var _loop_1 = function (elemt) {
                _this.total += elemt.Montant;
                _this.emp_service.getEmployeByMatricule(elemt.Matricule).subscribe(
                //() => console.log("Processing Complete."),
                function (data) {
                    _this.message = data;
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(_this.listEmploye);
                        _this.detailCotisation.montant = elemt.Montant;
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
                        }
                    }
                });
            };
            for (var _i = 0, _a = _this.ws; _i < _a.length; _i++) {
                var elemt = _a[_i];
                _loop_1(elemt);
            }
            _this.showNotification('top', 'center', 1, '<b>cotisation ajouté avec succées!!!</b> :');
        }, function (error) {
            console.log(error);
            _this.showNotification('top', 'center', 3, '<b>Erreur au niveau du fichier!!!</b> :');
        });
    };
    ////////////fonction  Alerte
    AjoutCotisationComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    AjoutCotisationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    AjoutCotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-ajout-cotisation',
            template: _raw_loader_ajout_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], AjoutCotisationComponent);
    return AjoutCotisationComponent;
}());



/***/ }),

/***/ "MpH/":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card \" style=\"margin-left:8cm;\">\r\n                <div class=\"card-header card-header-icon\">\r\n                    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\r\n                        <i class=\"material-icons\">list</i>\r\n                    </div>\r\n                    <h3 style=\"background-color:whitesmoke; \r\n                    font-weight: 400; color: \r\n                    black; pading: 5px; width: 50%;\" class=\"card-title\">Cotisations</h3>\r\n                </div>\r\n                <div class=\"card-body\" style=\"padding-left: 3.5cm;\">\r\n\r\n                    <form [formGroup]=\"uploadForm\">\r\n    \r\n         \r\n                        <!-- <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" class=\"btn btn-outline-success\" /> -->\r\n                  <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"true\"  formControlName=\"myFile\"/>\r\n              \r\n                  <div class=\"modal-footer justify-content-center\">\r\n                  <button  class=\"btn btn-success\" (click)=\"onSubmit()\">\r\n                    <i class=\"material-icons\">checked</i>Ajout Cotisation</button>\r\n                  </div>\r\n                </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "ZyaY":
/*!****************************************************************************!*\
  !*** ./src/app/cotisation/liste-cotisation/liste-cotisation.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdGlzYXRpb24vbGlzdGUtY290aXNhdGlvbi9saXN0ZS1jb3Rpc2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "bnfn":
/*!*************************************************!*\
  !*** ./src/app/cotisation/cotisation.module.ts ***!
  \*************************************************/
/*! exports provided: CotisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotisationModule", function() { return CotisationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-cotisation/ajout-cotisation.component */ "IyyA");
/* harmony import */ var _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-cotisation/liste-cotisation.component */ "jQda");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cotisation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cotisation-routing.module */ "rp81");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CotisationModule = /** @class */ (function () {
    function CotisationModule() {
    }
    CotisationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_2__["AjoutCotisationComponent"], _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_3__["ListeCotisationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_cotisation_routing_module__WEBPACK_IMPORTED_MODULE_5__["routesCotisation"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], CotisationModule);
    return CotisationModule;
}());



/***/ }),

/***/ "jQda":
/*!***************************************************************************!*\
  !*** ./src/app/cotisation/liste-cotisation/liste-cotisation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListeCotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeCotisationComponent", function() { return ListeCotisationComponent; });
/* harmony import */ var _raw_loader_liste_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-cotisation.component.html */ "tiVp");
/* harmony import */ var _liste_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-cotisation.component.css */ "ZyaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListeCotisationComponent = /** @class */ (function () {
    function ListeCotisationComponent(emp_service) {
        this.emp_service = emp_service;
    }
    ListeCotisationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categories = cat;
            console.log(_this.categories);
            //console.log(this.categorie)
        });
        this.emp_service.getEmploye().subscribe(function (data) {
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
            _this.employe = data;
            //      for (let index = 0; index < this.listFacture.length; index++) {
            //       //  if(this.listFacture[0].ipm_facture.certifier!=true){
            //       //    this.liste.push(this.listFacture[index].ipm_facture)
            //console.log(this.employe)
            //console.log((<any>$('#datatable')).dataTable())
            //       //  }
            //      }
            // console.log(this.date1)
            //     console.log(this.listFacture);
        });
    };
    ListeCotisationComponent.prototype.getnomCategorie = function (prest) {
        console.log(this.categorie, this.montant);
        //console.log(prest);
        this.modifCategorie = prest;
    };
    ListeCotisationComponent.prototype.Enregistrer = function () {
        var _this = this;
        this.modifCategorie.montant = this.montant;
        this.emp_service.ModifierCategorie(this.modifCategorie).subscribe(function (data) {
            console.log(data);
            _this.ngOnInit();
        });
    };
    ListeCotisationComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"] }
    ]; };
    ListeCotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-cotisation',
            template: _raw_loader_liste_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"]])
    ], ListeCotisationComponent);
    return ListeCotisationComponent;
}());



/***/ }),

/***/ "rp81":
/*!*********************************************************!*\
  !*** ./src/app/cotisation/cotisation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routesCotisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routesCotisation", function() { return routesCotisation; });
/* harmony import */ var _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-cotisation/ajout-cotisation.component */ "IyyA");
/* harmony import */ var _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-cotisation/liste-cotisation.component */ "jQda");


var routesCotisation = [
    {
        path: '',
        children: [{
                path: 'AjoutCotisation',
                component: _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_0__["AjoutCotisationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ListeCotisation',
                component: _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_1__["ListeCotisationComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CotisationRoutingModule { }


/***/ }),

/***/ "tiVp":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotisation/liste-cotisation/liste-cotisation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"bare\"  role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n      <!--Content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Prise en Compte des Cotisations</h4>\r\n          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n            <i class=\"material-icons\">clear</i>\r\n          </button>\r\n        </div>\r\n        <!--Modal cascading tabs-->\r\n        <div class=\"modal-c-tabs\">\r\n          <!-- Tab panels -->\r\n          <div class=\"tab-content\">\r\n              <!--Body-->\r\n              <div class=\"modal-body mb-1\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\" style=\"margin-top: -35px;\">\r\n                            <!--*ngIf=\"agree\" -->\r\n                            <mat-form-field>\r\n                              <!-- <label for=\"Categorie\"><b>Categorie</b> </label> -->\r\n                              <mat-select name=\"categorie\"  id=\"categorie\" placeholder=\"Selectionner cat\" [(ngModel)]=\"categorie\">\r\n                                <mat-option  *ngFor=\"let prest of categories\" [value]=\"prest.code_categorie\" \r\n                                (click)=\"getnomCategorie(prest)\">{{ prest.libelle }}\r\n                                  \r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                      <div class=\" col-md-5\" style=\"margin-top: -20px;\">\r\n                        <!-- <label for=\"Montant\"><b>Montant</b> </label> -->\r\n                        <input type=\"text\" name=\"montant\" class=\"form-control\" id=\"montant\" [(ngModel)]=\"montant\">                      </div>\r\n                      \r\n                    </div>\r\n                </form>\r\n                \r\n                \r\n                \r\n                \r\n                <div class=\"text-center mt-2\">\r\n                  <button class=\"btn btn-info btn-round\" data-dismiss=\"modal\"  (click)=\"Enregistrer()\"\r\n                >Enregistrer<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\r\n                </div>\r\n              </div>\r\n              <!--Footer-->\r\n              <div class=\"modal-footer\">\r\n                \r\n        <button mat-raised-button type=\"button\" class=\"btn btn-outline-info waves-effect ml-auto\"\r\n         data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Modal: Login / Register Form-->\r\n  <!--Fin-->\r\n  <div class=\"main-content\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                      <div class=\"card-header card-header-icon card-header-rose\">\r\n                          <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">assignment</i>\r\n                          </div>\r\n                          <!-- <button mat-raised-button type=\"button\" class=\"btn btn-success\">\r\n                            <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#bareme\"\r\n                            >add_circle</i>\r\n                        </button>   -->\r\n                        <button mat-raised-button type=\"button\" style=\"float:right;margin-top:1cm; \r\n                        font-size: 16px;\" data-toggle=\"modal\" data-target=\"#bare\" class=\"btn btn-success\">\r\n                            <i class=\"material-icons\" >add_circle</i> Ajouter Ctoisations\r\n                          </button>\r\n                          <h4 class=\"card-title\">Liste prévisionnelle Des Cotisations</h4>\r\n                          \r\n                         \r\n                      </div>\r\n                          <div class=\"card-body table-full-width\">\r\n                            <div class=\"material-datatable\">\r\n                                <table id=\"datatable\" class=\"table table-hover table-bordered text-black\"\r\n                                    cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                              \r\n                                    <thead style=\"background-color: whitesmoke;\">\r\n                              \r\n                                        <tr>\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\"> Matricule</th>\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Prenom</th>\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom</th>\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Catégorie</th>\r\n                                            <!-- <th cope=\"col\">Code Prestation</th> -->\r\n                              \r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde</th>\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant à cotiser</th>\r\n\r\n                                            <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero carnet</th>\r\n                                            <!-- <th class=\"text-center\" cope=\"col\">Action</th>\r\n                                            <th class=\"text-center\" cope=\"col\"></th> -->\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let employ of employe\">\r\n                                            <td class=\"text-center\">{{employ.matricule}}</td>\r\n                                            <td class=\"text-center\">{{employ.prenom}}</td>\r\n                                            <td class=\"text-center\">{{employ.nom}}</td>\r\n                                            <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\r\n                                            <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>\r\n                              -->\r\n                                            <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\r\n                                            <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\r\n\r\n                                            <td class=\"text-center\">{{employ.numero_carnet}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                              </div>\r\n                          </div>\r\n  \r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <!----------Modification des Barèmes------------>\r\n\r\n              <div class=\"modal fade\" id=\"modifbareme\"  role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n                  <!--Content-->\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">Modification des Cotisations</h4>\r\n                      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                        <i class=\"material-icons\">clear</i>\r\n                      </button>\r\n                    </div>\r\n                    <!--Modal cascading tabs-->\r\n                    <div class=\"modal-c-tabs\">\r\n                      <!-- Tab panels -->\r\n                      <div class=\"tab-content\">\r\n                          <!--Body-->\r\n                          <div class=\"modal-body mb-1\">\r\n                            <div class=\"col-md-6 form-group\">     \r\n                                    \r\n                              <input type=\"text\" id=\"min\" name=\"min\"\r\n                                class=\"form-control\" placeholder=\"Categorie\">\r\n                         \r\n                            </div>\r\n                            <div class=\"col-md-6 form-group\">   \r\n                           \r\n                              <input type=\"text\" id=\"max\" \r\n                               name=\"max\"  class=\"form-control\"\r\n                                placeholder=\"Maximum\">\r\n                      \r\n                            </div>\r\n                            <div class=\"col-md-6 form-group\">     \r\n                           \r\n                              <input type=\"text\" id=\"montant\" \r\n                               name=\"montant\"  class=\"form-control\" placeholder=\"Montant\">\r\n                \r\n                            </div>\r\n                            \r\n                            <div class=\"text-center mt-2\">\r\n                              <button class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\r\n                              >Modifer<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\r\n                            </div>\r\n                          </div>\r\n                          <!--Footer-->\r\n                          <div class=\"modal-footer\">\r\n                            \r\n                    <button mat-raised-button type=\"button\" class=\"btn btn-outline-info waves-effect ml-auto\" \r\n                     data-dismiss=\"modal\">Close</button>\r\n                          </div>\r\n                      </div>\r\n              \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--Modal: Login / Register Form-->\r\n");

/***/ })

}]);
//# sourceMappingURL=cotisation-cotisation-module.js.map