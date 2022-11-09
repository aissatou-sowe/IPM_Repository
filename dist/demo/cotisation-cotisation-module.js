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
            this.total += element.montant;
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
                        }
                    }
                });
            };
            for (var _i = 0, _a = _this.ws; _i < _a.length; _i++) {
                var elemt = _a[_i];
                _loop_1(elemt);
            }
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_cotisation_routing_module__WEBPACK_IMPORTED_MODULE_5__["routes"]),
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
    function ListeCotisationComponent() {
    }
    ListeCotisationComponent.prototype.ngOnInit = function () {
    };
    ListeCotisationComponent.ctorParameters = function () { return []; };
    ListeCotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-cotisation',
            template: _raw_loader_liste_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ListeCotisationComponent);
    return ListeCotisationComponent;
}());



/***/ }),

/***/ "rp81":
/*!*********************************************************!*\
  !*** ./src/app/cotisation/cotisation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-cotisation/ajout-cotisation.component */ "IyyA");
/* harmony import */ var _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-cotisation/liste-cotisation.component */ "jQda");


var routes = [
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
/* harmony default export */ __webpack_exports__["default"] = ("<p>liste-cotisation works!</p>\r\n");

/***/ })

}]);
//# sourceMappingURL=cotisation-cotisation-module.js.map