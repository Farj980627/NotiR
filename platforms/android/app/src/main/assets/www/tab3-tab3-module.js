(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Fuentes de Información\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n  <ion-item color=\"dark\">\n    <ion-label>Fuente:</ion-label>\n    <ion-select   interface=\"popover\" [value]=\"fuente\" (ionChange)=\"cambioFuente( $event )\">\n    <ion-select-option  *ngFor=\"let fuente of fuentes\" selected>  {{fuente}} </ion-select-option>\n      \n    </ion-select>\n  </ion-item>\n  <app-noticias [articulos]=\"noticias\"></app-noticias>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/noticias.service */ "./src/app/services/noticias.service.ts");




var Tab3Page = /** @class */ (function () {
    function Tab3Page(noticiasService) {
        this.noticiasService = noticiasService;
        this.fuentes = ['abc-news', 'bloomberg', 'bbc-sport', 'cbc-news', 'cnbc', 'cnn', 'cnn-es', 'el-mundo', 'focus', 'globo', 'ign', 'la-gaceta', 'mirror', 'time', 'wired'];
        this.noticias = [];
        this.sources = [];
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.select.value = this.fuentes[0];
        this.cargarFuentes(this.select.value);
    };
    Tab3Page.prototype.cambioFuente = function (event) {
        this.noticias = [];
        console.log(event.detail.value);
        this.cargarFuentes(event.detail.value);
    };
    Tab3Page.prototype.cargarFuentes = function (font) {
        var _this = this;
        this.noticiasService.getNoticiasSources(font)
            .subscribe(function (resp) {
            var _a;
            console.log(resp);
            (_a = _this.noticias).push.apply(_a, resp.articles);
        });
    };
    Tab3Page.prototype.fetchSources = function () {
        var _this = this;
        this.noticiasService.getSources()
            .subscribe(function (providers) {
            var _a;
            console.log("Cagadas...", providers);
            (_a = _this.sources).push.apply(_a, providers.sources);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"])
    ], Tab3Page.prototype, "select", void 0);
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_noticias_service__WEBPACK_IMPORTED_MODULE_3__["NoticiasService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map