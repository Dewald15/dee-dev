(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/components/ui/src/index.ts":
/*!**************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: UiModule, ShellComponent, LandingComponent, VideoOverlayComponent, ListItemsComponent, HomeComponent, AboutComponent, SkillsComponent, CodeComponent, ContactComponent, wwwUiActionTypes, ShowSpinner, HideSpinner, Reset, WwwUiEffects, wwwUiInitialState, wwwUiReducer, uiState, showToolbar, showSpinner, WWW_BRAND_CONFIG_TOKEN, WWW_IMAGES_CONFIG_TOKEN, WWW_ENVIRONMENT_TOKEN, MainMenuNavService, VideoOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui.module */ "../../../libs/components/ui/src/lib/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"]; });

/* harmony import */ var _lib_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state */ "../../../libs/components/ui/src/lib/+state/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiActionTypes", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["wwwUiActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSpinner", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["ShowSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideSpinner", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["HideSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["Reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WwwUiEffects", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["WwwUiEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiInitialState", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["wwwUiInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiReducer", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["wwwUiReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiState", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["uiState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToolbar", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["showToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSpinner", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_1__["showSpinner"]; });

/* harmony import */ var _lib_containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/containers */ "../../../libs/components/ui/src/lib/containers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["VideoOverlayComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemsComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["ListItemsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return _lib_containers__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]; });

/* harmony import */ var _lib_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_BRAND_CONFIG_TOKEN", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_3__["WWW_BRAND_CONFIG_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_IMAGES_CONFIG_TOKEN", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_3__["WWW_IMAGES_CONFIG_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_ENVIRONMENT_TOKEN", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_3__["WWW_ENVIRONMENT_TOKEN"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../../libs/components/ui/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainMenuNavService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["MainMenuNavService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["VideoOverlayService"]; });








/***/ }),

/***/ "../../../libs/components/ui/src/lib/+state/index.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/+state/index.ts ***!
  \*************************************************************************************/
/*! exports provided: wwwUiActionTypes, ShowSpinner, HideSpinner, Reset, WwwUiEffects, wwwUiInitialState, wwwUiReducer, uiState, showToolbar, showSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ "../../../libs/components/ui/src/lib/+state/ui.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiActionTypes", function() { return _ui_actions__WEBPACK_IMPORTED_MODULE_0__["wwwUiActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSpinner", function() { return _ui_actions__WEBPACK_IMPORTED_MODULE_0__["ShowSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideSpinner", function() { return _ui_actions__WEBPACK_IMPORTED_MODULE_0__["HideSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _ui_actions__WEBPACK_IMPORTED_MODULE_0__["Reset"]; });

/* harmony import */ var _ui_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.effects */ "../../../libs/components/ui/src/lib/+state/ui.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WwwUiEffects", function() { return _ui_effects__WEBPACK_IMPORTED_MODULE_1__["WwwUiEffects"]; });

/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.reducer */ "../../../libs/components/ui/src/lib/+state/ui.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiInitialState", function() { return _ui_reducer__WEBPACK_IMPORTED_MODULE_2__["wwwUiInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwUiReducer", function() { return _ui_reducer__WEBPACK_IMPORTED_MODULE_2__["wwwUiReducer"]; });

/* harmony import */ var _ui_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.selectors */ "../../../libs/components/ui/src/lib/+state/ui.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiState", function() { return _ui_selectors__WEBPACK_IMPORTED_MODULE_3__["uiState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToolbar", function() { return _ui_selectors__WEBPACK_IMPORTED_MODULE_3__["showToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSpinner", function() { return _ui_selectors__WEBPACK_IMPORTED_MODULE_3__["showSpinner"]; });







/***/ }),

/***/ "../../../libs/components/ui/src/lib/+state/ui.actions.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/+state/ui.actions.ts ***!
  \******************************************************************************************/
/*! exports provided: wwwUiActionTypes, ShowSpinner, HideSpinner, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wwwUiActionTypes", function() { return wwwUiActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSpinner", function() { return ShowSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideSpinner", function() { return HideSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
var wwwUiActionTypes;
(function (wwwUiActionTypes) {
    wwwUiActionTypes["DisplaySnackbar"] = "[www-Ui] Display snackbar";
    wwwUiActionTypes["ShowSpinner"] = "[www-Ui] Show spinner";
    wwwUiActionTypes["HideSpinner"] = "[www-Ui] Hide spinner";
    wwwUiActionTypes["Reset"] = "[www-Ui] Reset";
})(wwwUiActionTypes || (wwwUiActionTypes = {}));
var ShowSpinner = /** @class */ (function () {
    function ShowSpinner() {
        this.type = wwwUiActionTypes.ShowSpinner;
    }
    return ShowSpinner;
}());

var HideSpinner = /** @class */ (function () {
    function HideSpinner() {
        this.type = wwwUiActionTypes.HideSpinner;
    }
    return HideSpinner;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = wwwUiActionTypes.Reset;
    }
    return Reset;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/+state/ui.effects.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/+state/ui.effects.ts ***!
  \******************************************************************************************/
/*! exports provided: WwwUiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WwwUiEffects", function() { return WwwUiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "../../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.actions */ "../../../libs/components/ui/src/lib/+state/ui.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WwwUiEffects = /** @class */ (function () {
    function WwwUiEffects(actions$, _snack, _store) {
        var _this = this;
        this.actions$ = actions$;
        this._snack = _snack;
        this._store = _store;
        this.navigateStart$ = this.actions$.ofType(_dee_dev_core_router__WEBPACK_IMPORTED_MODULE_6__["store"].RouterActionTypes.Go).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._store.dispatch(new _ui_actions__WEBPACK_IMPORTED_MODULE_7__["ShowSpinner"]()); }));
        this.onNgrxRouterNavigation$ = this.actions$.ofType(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["ROUTER_NAVIGATION"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._store.dispatch(new _ui_actions__WEBPACK_IMPORTED_MODULE_7__["HideSpinner"]()); }));
    }
    WwwUiEffects.prototype._setSnackbarClasses = function (type) {
        switch (type) {
            case 'success':
                return ['dee-snackbar', 'dee-snackbar-success'];
            case 'info':
                return ['dee-snackbar', 'dee-snackbar-info'];
            case 'error':
                return ['dee-snackbar', 'dee-snackbar-error'];
            default:
                return ['dee-snackbar'];
        }
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], WwwUiEffects.prototype, "navigateStart$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], WwwUiEffects.prototype, "onNgrxRouterNavigation$", void 0);
    WwwUiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WwwUiEffects);
    return WwwUiEffects;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/+state/ui.reducer.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/+state/ui.reducer.ts ***!
  \******************************************************************************************/
/*! exports provided: wwwUiInitialState, wwwUiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wwwUiInitialState", function() { return wwwUiInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wwwUiReducer", function() { return wwwUiReducer; });
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ "../../../libs/components/ui/src/lib/+state/ui.actions.ts");
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

var wwwUiInitialState = {
    showspinner: false
};
function wwwUiReducer(state, action) {
    if (state === void 0) { state = wwwUiInitialState; }
    switch (action.type) {
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["wwwUiActionTypes"].ShowSpinner:
            return __assign({}, state, { showspinner: true });
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["wwwUiActionTypes"].HideSpinner:
            return __assign({}, state, { showspinner: false });
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["wwwUiActionTypes"].Reset:
            return __assign({}, wwwUiInitialState);
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../libs/components/ui/src/lib/+state/ui.selectors.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/+state/ui.selectors.ts ***!
  \********************************************************************************************/
/*! exports provided: uiState, showToolbar, showSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiState", function() { return uiState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToolbar", function() { return showToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSpinner", function() { return showSpinner; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");


var uiState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('www-ui');
var showToolbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_dee_dev_core_router__WEBPACK_IMPORTED_MODULE_1__["store"].segments, function (segments) { return segments; });
var showSpinner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(uiState, function (state) { return state.showspinner; });


/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/about/about.component.css":
/*!**********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/about/about.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toad-fullscreen {\n   position: relative;\n   width   : 95%;\n   overflow: hidden;\n}\n\n.main-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   height               : 100%;\n   justify-content      : flex-start;\n   align-items          : center;\n   align-self           : center;\n   width                : 93vw;\n   overflow-y           : scroll;\n   overflow-x           : hidden;\n}\n\n.about-title {\n   position         : relative;\n   display          : flex;\n   align-items      : flex-end;\n   /* margin-left   : calc(5 * var(--fontSize)); */\n   width            : calc(75 * var(--fontSize));\n   height           : 10%;\n   padding-bottom   : 1%;\n   padding-top      : 7%;\n   padding-left     : calc(1.5 * var(--fontSize));\n   font-size        : calc(2.5 * var(--fontSize));\n   border-bottom    : 0.6px var(--line-black) solid;\n   z-index          : 200;\n   margin-bottom    : 3%;\n}\n\n.about-title-two {\n   padding-top: 2%;\n   height     : 5%;\n   font-size  : calc(0 * var(--fontSize));\n}\n\n.content-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   height               : -webkit-max-content;\n   height               : -moz-max-content;\n   height               : max-content;\n}\n\n.competencies-container {\n   height: calc(30 * var(--fontSize));\n}\n\n.titles-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   align-content        : center;\n   justify-content      : center;\n   justify-items        : center;\n   flex-direction       : column;\n   width                : calc(20 * var(--fontSize));\n   height               : inherit;\n   text-align           : center;\n   padding-left         : calc(5 * var(--fontSize));\n   opacity              : 1;\n   font-size            : calc(1.6 * var(--fontSize));\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.biography-title {\n   position        : relative;\n   width           : 100%;\n   background-color: var(--front-black);\n   height          : 100%;\n   /* padding-left : 10%; */\n   padding-top     : 15px;\n   border-radius   : 10px;\n}\n\n.about-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   justify-content      : center;\n   flex-direction       : column;\n   width                : calc(65 * var(--fontSize));\n   height               : inherit;\n   /* padding-left      : calc(5 * var(--fontSize)); */\n   padding-right        : calc(5 * var(--fontSize));\n   opacity              : 0;\n   z-index              : 0;\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.bio-container {\n   height: inherit;\n}\n\n.about-page .about-container {\n   opacity           : 1;\n   z-index           : 100;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.about-image {\n   position          : fixed;\n   display           : flex;\n   left              : 25%;\n   width             : calc(40 * var(--fontSize));\n   opacity           : 1;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.about-page .about-image {\n   opacity           : 0;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* bio ========================== */\n\n.bio-text {\n   margin-left     : calc(3 * var(--fontSize));\n   padding-left    : calc(3 * var(--fontSize));\n   padding-right   : calc(2.5 * var(--fontSize));\n   background-color: var(--front-black);\n   height          : -webkit-max-content;\n   height          : -moz-max-content;\n   height          : max-content;\n   border-radius   : 10px;\n   z-index         : 100;\n}\n\n/* graph ========================== */\n\n.component {\n   position             : relative;\n   color                : white;\n   background-color     : var(--front-black);\n   border-radius        : 10px;\n   display              : flex;\n   height               : inherit;\n   flex-direction       : column;\n   width                : 95%;\n   left                 : 2.5%;\n}\n\n/* @media (min-width: 300px) {\n   .component {\n      flex-direction: row;\n   }\n} */\n\n.component:before,\n.component:after {\n   content         : '';\n   background-color: transparent;\n   position        : absolute;\n   z-index         : -1;\n   border-radius   : 50%;\n}\n\n.component aside {\n   position               : relative;\n   display                : block;\n   background             : #373641;\n   border-top-left-radius : 10px;\n   border-top-right-radius: 10px;\n}\n\n.component aside .preamp {\n   height           : 70px;\n   display          : flex;\n   justify-content  : center;\n   align-items      : center;\n}\n\n/* @media (min-width: 300px) {\n   .component aside .preamp {\n      height: 100px;\n   }\n} */\n\n.component aside .preamp>label {\n   position   : relative;\n   display    : block;\n   left       : 3px;\n   font-weight: 700;\n}\n\n.component main {\n   position         : relative;\n   display          : block;\n   padding-bottom   : 30px;\n   padding          : 20px;\n   display          : flex;\n   justify-content  : center;\n   align-items      : center;\n   height           : inherit;\n}\n\n/* @media (min-width: 300px) {\n   .component main {\n      padding-left : 20px;\n      padding-right: 20px;\n   }\n} */\n\n.component main .presets {\n   display           : flex;\n   align-items       : center;\n   /* justify-content: center; */\n   justify-content   : flex-start;\n   padding           : 10px;\n   /* padding-left   : calc(40px/2 - .5em); */\n   padding-left      : calc(80px/2 - .5em);\n   height            : 100px;\n   color             : #8e8e9b;\n   font-weight       : 700;\n   border-color      : #4F4F62;\n   background        : transparent;\n}\n\n/* @media (min-width: 300px) {\n   .component main .presets {\n      padding-left   : calc(80px/2 - .5em);\n      justify-content: flex-start;\n   }\n} */\n\n.component main .presets>label {\n   display     : inline-block;\n   margin-right: 20px;\n}\n\n/* .component main .presets>select {\n   -webkit-appearance: none;\n   border-radius     : 8px;\n   border            : 2px solid currentColor;\n   max-width         : 200px;\n   padding           : 4px;\n   color             : inherit;\n   background        : transparent;\n   border-color      : inherit;\n   height            : 30px;\n   margin-right      : 10px;\n} */\n\n/* @media (min-width: 300px) {\n   .component main .presets>select {\n      min-width   : 200px;\n      padding-left: 10px;\n   }\n} */\n\n/* .component main .presets>select option {\n   background-color: #3D3D4A;\n} */\n\n/* .component main .presets>button {\n   height       : 30px;\n   border-radius: 8px;\n   background   : transparent;\n   color        : inherit;\n   border       : 2px solid currentColor;\n   border-color : inherit;\n   padding      : 4px 10px;\n   cursor       : pointer;\n   outline      : none;\n}\n\n@media (min-width: 300px) {\n   .component main .presets>button {\n      min-width: 80px;\n   }\n} */\n\n.component main .sliders {\n   position: relative;\n   display : inline-block;\n}\n\n.component main .sliders .range-slider {\n   position: relative;\n   height  : calc(20 * var(--fontSize));\n   width   : calc(5.33 * var(--fontSize));\n   float   : left;\n}\n\n/* @media (min-width: 300px) {\n   .component main .sliders .range-slider {\n      width: 80px;\n   }\n} */\n\n.component main .sliders .range-slider::after {\n   position  : absolute;\n   top       : calc(21 * var(--fontSize));\n   left      : calc(50% - 2em);\n   font-size : 80%;\n   color     : #8e8e9b;\n   content   : '';\n   width     : 4em;\n   text-align: center;\n}\n\n.component main .sliders .range-slider:nth-child(2)::after {\n   content: 'Team worker';\n}\n\n.component main .sliders .range-slider:nth-child(3)::after {\n   content: 'Quick learner';\n}\n\n.component main .sliders .range-slider:nth-child(4)::after {\n   content: 'Organized';\n}\n\n.component main .sliders .range-slider:nth-child(5)::after {\n   content: 'Innovative';\n}\n\n.component main .sliders .range-slider:nth-child(6)::after {\n   content: 'Self motivated';\n}\n\n.component main .sliders .range-slider:nth-child(7)::after {\n   content: 'Eager to learn';\n}\n\n.component main .sliders .range-slider:nth-child(8)::after {\n   content: 'Working under pressure';\n}\n\n.component main .sliders .range-slider__thumb {\n   opacity           : 1;\n   position          : absolute;\n   left              : calc(2.05 * var(--fontSize));\n   width             : calc(1.2 * var(--fontSize));\n   height            : calc(1.2 * var(--fontSize));\n   line-height       : calc(1.2 * var(--fontSize));\n   background-color  : white;\n   color             : #8376FF;\n   text-align        : center;\n   font-size         : 40%;\n   box-shadow        : 0 0 2px #373641;\n   border-radius     : 50%;\n   pointer-events    : none;\n   cursor            : pointer;\n   z-index           : 2;\n}\n\n/*\n@media (min-width: 300px) {\n   .component main .sliders .range-slider__thumb {\n      left: 30px;\n   }\n} */\n\n.component main .sliders .range-slider__bar {\n   left          : calc(2.53 * var(--fontSize));\n   bottom        : 0;\n   position      : absolute;\n   background    : linear-gradient(var(--light-purple), var(--dark-purple));\n   pointer-events: none;\n   width         : calc(0.25 * var(--fontSize));\n   border-radius : 10px;\n   opacity       : 1;\n}\n\n/* @media (min-width: 300px) {\n   .component main .sliders .range-slider__bar {\n      left: 38px;\n   }\n} */\n\n.component main .sliders .range-slider input[type=range][orient=vertical] {\n   position            : relative;\n   margin              : 0;\n   height              : 100%;\n   width               : 100%;\n   display             : inline-block;\n   position            : relative;\n   -webkit-writing-mode: bt-lr;\n   -ms-writing-mode    : bt-lr;\n   writing-mode        : bt-lr;\n   -webkit-appearance  : slider-vertical;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-webkit-slider-runnable-track,\n.component main .sliders .range-slider input[type=range][orient=vertical]::-webkit-slider-thumb {\n   -webkit-appearance: none;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-webkit-slider-runnable-track {\n   border            : none;\n   background        : #343440;\n   width             : calc(0.26 * var(--fontSize));\n   border-color      : #343440;\n   border-radius     : 10px;\n   box-shadow        : 0 0 0 2px #3D3D4A;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-moz-range-track {\n   border       : none;\n   background   : #343440;\n   width        : calc(0.26 * var(--fontSize));\n   border-color : #343440;\n   border-radius: 10px;\n   box-shadow   : 0 0 0 2px #3D3D4A;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-ms-track {\n   border       : none;\n   background   : #343440;\n   width        : calc(0.26 * var(--fontSize));\n   border-color : #343440;\n   border-radius: 10px;\n   box-shadow   : 0 0 0 2px #3D3D4A;\n   color        : transparent;\n   height       : 100%;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-ms-fill-lower,\n.component main .sliders .range-slider input[type=range][orient=vertical]::-ms-fill-upper,\n.component main .sliders .range-slider input[type=range][orient=vertical]::-ms-tooltip {\n   display: none;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-webkit-slider-thumb {\n   left    : -20px;\n   position: relative;\n   width   : 40px;\n   height  : 40px;\n   opacity : 0;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-moz-range-thumb {\n   position: relative;\n   width   : 40px;\n   height  : 40px;\n   opacity : 0;\n}\n\n.component main .sliders .range-slider input[type=range][orient=vertical]::-ms-thumb {\n   position: relative;\n   width   : 40px;\n   height  : 40px;\n   opacity : 0;\n}\n\n.component main .sliders svg {\n   z-index       : 1;\n   overflow      : visible;\n   pointer-events: none;\n   position      : absolute;\n   top           : 0;\n   left          : 0;\n   width         : 100%;\n   height        : 100%;\n   fill          : none;\n   stroke-width  : 1;\n}\n\n.component main .sliders svg .line {\n   stroke: var(--lighter-purple);\n}\n\n.component main .sliders svg .line-shadow {\n   z-index     : 1;\n   stroke-width: 1.5;\n   stroke      : #ffffff;\n   opacity     : 0;\n   display     : none;\n}\n\n/* @media (min-width: 300px) {\n   .component main .sliders svg .line-shadow {\n      display: block;\n   } */\n\n/* } */\n\n/* .design-reference {\n   position : fixed;\n   bottom   : 6px;\n   right    : 6px;\n   color    : #8e8e9b;\n   font-size: 70%;\n   display  : none;\n} */\n\n/*\n@media (min-height: 600px) {\n   .design-reference {\n      display: block;\n   }\n} */\n\n/* education and employment ====================================================== */\n\n.edu-emp-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   flex-wrap            : nowrap;\n   justify-content      : center;\n   align-items          : stretch;\n   align-content        : center;\n   height               : -webkit-max-content;\n   height               : -moz-max-content;\n   height               : max-content;\n   /* height            : calc(45 * var(--fontSize)); */\n}\n\n.titles-container.edu-and-emp-title-main {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   flex-wrap            : nowrap;\n   justify-content      : center;\n   align-items          : stretch;\n   align-content        : center;\n   height               : unset;\n   width                : calc(20 * var(--fontSize));\n   text-align           : center;\n   padding-left         : calc(5 * var(--fontSize));\n   opacity              : 1;\n   font-size            : calc(1.6 * var(--fontSize));\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.edu-and-emp-title {\n   position        : relative;\n   width           : 100%;\n   background-color: var(--front-black);\n   height          : inherit;\n   /* padding-left : 10%; */\n   padding-top     : 15px;\n   border-radius   : 10px;\n}\n\n.cd-container {\n   /* max-width    : 1080px; */\n   margin          : 0 auto;\n   background      : var(--front-black);\n   padding         : 0 10%;\n   border-radius   : 10px;\n   width           : 95%;\n   left            : 2.5%;\n}\n\n.cd-container::after {\n   content: '';\n   display: table;\n   clear  : both;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\n#cd-timeline {\n   position        : relative;\n   height          : inherit;\n   /* padding      : 2em 0; */\n   /* margin-top   : 3em;\n   margin-bottom   : 3em; */\n}\n\n#cd-timeline::before {\n   content      : '';\n   position     : absolute;\n   top          : 0;\n   /* left      : 25px; */\n   height       : 100%;\n   width        : 4px;\n   background   : #7E57C2;\n   left         : 50%;\n   margin-left  : -2px;\n}\n\n/* @media only screen and (min-width: 1170px) {\n   #cd-timeline {\n      margin-top   : 3em;\n      margin-bottom: 3em;\n   }\n\n   #cd-timeline::before {\n      left       : 50%;\n      margin-left: -2px;\n   }\n} */\n\n.cd-timeline-block {\n   position   : relative;\n   /* margin  : 2em 0; */\n   margin     : 4em 0;\n}\n\n.cd-timeline-block:after {\n   content: \"\";\n   display: table;\n   clear  : both;\n}\n\n.cd-timeline-block:first-child {\n   margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n   margin-bottom: 0;\n}\n\n.cd-timeline-img {\n   position     : absolute;\n   top          : calc(0.1 * var(--fontSize));\n   left         : 50%;\n   width        : calc(2 * var(--fontSize));\n   height       : calc(2 * var(--fontSize));\n   margin-left  : calc(-1 * var(--fontSize));\n   margin-top   : calc(1.1 * var(--fontSize));\n   border-radius: 50%;\n   background   : #673AB7;\n   box-shadow: 0 0 0 4px #7E57C2,\n      inset 0 2px 0 rgba(0, 0, 0, 0.08),\n      0 3px 0 4px rgba(0, 0, 0, 0.05);\n   transform                  : translateZ(0);\n   -webkit-transform          : translateZ(0);\n   backface-visibility        : hidden;\n   -webkit-backface-visibility: hidden;\n}\n\n.cd-timeline-content {\n   position     : relative;\n   background   : var(--middle-black);\n   border-radius: 2px;\n   margin-left  : 0;\n   padding      : 1.6em;\n   width        : 46%;\n   margin       : 0 -5%;\n}\n\n.cd-timeline-content-one {\n   margin-top: 5%;\n}\n\n.cd-timeline-content-two {\n   margin-top   : 5%;\n   margin-bottom: 5%;\n}\n\n.cd-timeline-content .timeline-content-info {\n   background        : var(--line-black);\n   padding           : 5px 10px;\n   color             : rgba(255, 255, 255, 0.7);\n   font-size         : calc(0.7 * var(--fontSize));\n   box-shadow        : inset 0 2px 0 rgba(0, 0, 0, 0.08);\n   border-radius     : 2px;\n}\n\n.cd-timeline-content .timeline-content-info-role {\n   margin-bottom: calc(0.4 * var(--fontSize));\n}\n\n.cd-timeline-content .timeline-content-info i {\n   margin-right: calc(0.4 * var(--fontSize));\n}\n\n.cd-timeline-content .timeline-content-info .timeline-content-info-title,\n.cd-timeline-content .timeline-content-info .timeline-content-info-date {\n   width     : 100%;\n   display   : inline-block;\n   text-align: center;\n}\n\n/* @media (max-width: 500px) {\n\n   .cd-timeline-content .timeline-content-info .timeline-content-info-title,\n   .cd-timeline-content .timeline-content-info .timeline-content-info-date {\n      display: block;\n      width  : 100%;\n   }\n} */\n\n.cd-timeline-content .content-skills {\n   font-size       : calc(0.6 * var(--fontSize));\n   padding         : 0;\n   margin-bottom   : 0;\n   display         : flex;\n   flex-wrap       : wrap;\n   justify-content : center;\n}\n\n.cd-timeline-content .content-skills li {\n   background       : var(--line-black);\n   border-radius    : 2px;\n   display          : inline-block;\n   padding          : calc(0.3 * var(--fontSize));\n   color            : rgba(255, 255, 255, 0.7);\n   margin           : 3px 2px;\n   text-align       : center;\n   flex-grow        : 1;\n}\n\n.cd-timeline-content:after {\n   content: \"\";\n   display: table;\n   clear  : both;\n}\n\n.cd-timeline-content h2 {\n   color        : rgba(255, 255, 255, 0.9);\n   margin-top   : 0;\n   margin-bottom: 10px;\n   text-align   : center;\n   font-size    : calc(1.1 * var(--fontSize));\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-date {\n   color    : rgba(255, 255, 255, 0.7);\n   font-size: calc(0.8 * var(--fontSize));\n}\n\n.cd-timeline-content .cd-date {\n   display  : inline-block;\n   font-size: calc(0.8 * var(--fontSize));\n}\n\n.cd-timeline-content p {\n   margin   : 1em 0;\n   font-size: calc(0.9 * var(--fontSize));\n}\n\n.cd-timeline-content::before {\n   content          : '';\n   position         : absolute;\n   top              : calc(1.6 * var(--fontSize));\n   left             : 100%;\n   right            : 100%;\n   height           : 0;\n   width            : 0;\n   border           : 7px solid transparent;\n   border-right     : 7px solid var(--middle-black);\n   border-color     : transparent;\n   border-left-color: var(--middle-black);\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n   font-size: calc(0.8 * var(--fontSize));\n}\n\n.cd-timeline-content .cd-date {\n   position : absolute;\n   width    : 100%;\n   left     : 150%;\n   top      : 7%;\n   font-size: calc(1 * var(--fontSize));\n}\n\n.date-right {\n   right: 150%;\n   top  : 15%;\n}\n\n.cd-timeline-block:nth-child(even) .cd-timeline-content {\n   float     : right;\n   margin-top: 0;\n}\n\n.cd-timeline-block:nth-child(even) .cd-timeline-content::before {\n   top               : calc(1.6 * var(--fontSize));\n   left              : auto;\n   right             : 100%;\n   border-color      : transparent;\n   border-right-color: var(--middle-black);\n}\n\n.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {\n   float: right;\n}\n\n.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {\n   left      : auto;\n   right     : 150%;\n   top       : 15%;\n   text-align: right;\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n   .about-title {\n      position         : relative;\n      display          : flex;\n      align-items      : flex-end;\n      width            : calc(24.5 * var(--fontSize));\n      height           : 10%;\n      padding-bottom   : 1%;\n      padding-top      : 7%;\n      padding-left     : calc(1 * var(--fontSize));\n      font-size        : calc(2.5 * var(--fontSize));\n      margin-left      : calc(2 * var(--fontSize));\n      margin-right     : calc(0.5 * var(--fontSize));\n      border-bottom    : 0.6px var(--line-black) solid;\n      z-index          : 200;\n      margin-bottom    : 3%;\n   }\n\n   .about-title-two {\n      font-size: calc(1.5 * var(--fontSize));\n   }\n\n   .content-container {\n      position             : relative;\n      display              : flex;\n      flex-direction       : row;\n      height               : -webkit-max-content;\n      height               : -moz-max-content;\n      height               : max-content;\n   }\n\n   .titles-container {\n      position             : relative;\n      display              : none;\n      align-items          : center;\n      align-content        : center;\n      justify-content      : center;\n      justify-items        : center;\n      flex-direction       : column;\n      width                : calc(20 * var(--fontSize));\n      height               : inherit;\n      text-align           : center;\n      padding-left         : calc(5 * var(--fontSize));\n      opacity              : 1;\n      font-size            : calc(1.6 * var(--fontSize));\n      transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   }\n\n   .about-container {\n      position             : relative;\n      display              : flex;\n      align-items          : center;\n      justify-content      : center;\n      flex-direction       : column;\n      width                : calc(30 * var(--fontSize));\n      height               : inherit;\n      padding-right        : calc(1.5 * var(--fontSize));\n      opacity              : 0;\n      z-index              : 0;\n      transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   }\n\n   .component {\n      position             : relative;\n      color                : white;\n      background-color     : var(--front-black);\n      border-radius        : 10px;\n      display              : flex;\n      height               : inherit;\n      flex-direction       : column;\n      /* width             : 95%; */\n      /* left              : 2.5%; */\n      margin-left          : calc(3 * var(--fontSize));\n      padding-right        : calc(0.6 * var(--fontSize));\n      padding-left         : calc(0.6 * var(--fontSize));\n      /* padding-left      : calc(3 * var(--fontSize));\n      padding-right        : calc(2.5 * var(--fontSize)); */\n      width                : unset;\n      left                 : unset;\n   }\n\n   .component main .sliders .range-slider {\n      position: relative;\n      height  : calc(20 * var(--fontSize));\n      width   : calc(3 * var(--fontSize));\n      float   : left;\n   }\n\n   .component main .sliders .range-slider__bar {\n      left          : calc(1.34 * var(--fontSize));\n      bottom        : 0;\n      position      : absolute;\n      background    : linear-gradient(var(--light-purple), var(--dark-purple));\n      pointer-events: none;\n      width         : calc(0.25 * var(--fontSize));\n      border-radius : 10px;\n      opacity       : 1;\n   }\n\n   .component main .sliders .range-slider__thumb {\n      opacity           : 1;\n      position          : absolute;\n      left              : calc(0.9 * var(--fontSize));\n      width             : calc(1.2 * var(--fontSize));\n      height            : calc(1.2 * var(--fontSize));\n      line-height       : calc(1.2 * var(--fontSize));\n      background-color  : white;\n      color             : #8376FF;\n      text-align        : center;\n      font-size         : 40%;\n      box-shadow        : 0 0 2px #373641;\n      border-radius     : 50%;\n      pointer-events    : none;\n      cursor            : pointer;\n      z-index           : 2;\n   }\n\n   .component main .sliders .range-slider::after {\n      position         : absolute;\n      top              : calc(23 * var(--fontSize));\n      left             : calc(0 * var(--fontSize));\n      font-size        : calc(0.6 * var(--fontSize));\n      color            : #8e8e9b;\n      content          : '';\n      /* width         : 4em; */\n      text-align       : center;\n      -webkit-transform: rotate(-90deg);\n      transform        : rotate(-90deg);\n   }\n\n   .competencies-container {\n      height: calc(28.5 * var(--fontSize));\n   }\n\n   .component main {\n      position         : relative;\n      display          : block;\n      padding-bottom   : 30px;\n      padding          : 20px;\n      display          : flex;\n      justify-content  : center;\n      align-items      : flex-start;\n      /* transform     : scale(0.5); */\n      height           : inherit;\n   }\n\n   .titles-container.edu-and-emp-title-main {\n      display: none !important;\n   }\n\n   .cd-container {\n      margin       : 0 auto;\n      background   : var(--front-black);\n      padding      : 0 10%;\n      border-radius: 10px;\n      width        : 90%;\n      margin-left  : calc(2.2 * var(--fontSize));\n   }\n\n   .cd-timeline-content {\n      position     : relative;\n      background   : var(--middle-black);\n      border-radius: 2px;\n      margin-left  : 0;\n      padding      : 1.6em;\n      width        : 46%;\n      margin       : 0 -8%;\n   }\n\n   .edu-emp-container {\n      height: -webkit-max-content;\n      height: -moz-max-content;\n      height: max-content;\n   }\n\n   .main-container {\n      position             : relative;\n      display              : flex;\n      flex-direction       : column;\n      height               : 100%;\n      justify-content      : flex-start;\n      align-items          : center;\n      align-self           : center;\n      padding-bottom       : calc(6 * var(--fontSize));\n   }\n\n   #cd-timeline {\n      position: relative;\n      height  : inherit;\n      padding : 5px;\n   }\n\n   .cd-timeline-block {\n      padding: 0 20px;\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csK0JBQStCO0dBRy9CLDJCQUEyQjtHQUkzQiw2QkFBNkI7R0FDN0IsMkJBQTJCO0dBRzNCLGlDQUFpQztHQUdqQyw2QkFBNkI7R0FFN0IsNkJBQTZCO0dBQzdCLDJCQUEyQjtHQUMzQiw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBO0dBQ0csMkJBQTJCO0dBRzNCLHVCQUF1QjtHQUd2QiwyQkFBMkI7R0FDM0IsK0NBQStDO0dBQy9DLDZDQUE2QztHQUM3QyxzQkFBc0I7R0FDdEIscUJBQXFCO0dBQ3JCLHFCQUFxQjtHQUNyQiw4Q0FBOEM7R0FDOUMsOENBQThDO0dBQzlDLGdEQUFnRDtHQUNoRCxzQkFBc0I7R0FDdEIscUJBQXFCO0FBQ3hCOztBQUVBO0dBQ0csZUFBZTtHQUNmLGVBQWU7R0FDZixzQ0FBc0M7QUFDekM7O0FBRUE7R0FDRywrQkFBK0I7R0FHL0IsMkJBQTJCO0dBSTNCLDBCQUEwQjtHQUMxQiwwQ0FBMEM7R0FDMUMsdUNBQXVDO0dBQ3ZDLGtDQUFrQztBQUNyQzs7QUFFQTtHQUNHLGtDQUFrQztBQUNyQzs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7R0FHM0IsNkJBQTZCO0dBRTdCLDZCQUE2QjtHQUc3Qiw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBSTdCLDZCQUE2QjtHQUM3QixpREFBaUQ7R0FDakQsOEJBQThCO0dBQzlCLDZCQUE2QjtHQUM3QixnREFBZ0Q7R0FDaEQsd0JBQXdCO0dBQ3hCLGtEQUFrRDtHQUVsRCxvRkFBb0Y7QUFDdkY7O0FBRUE7R0FDRywwQkFBMEI7R0FDMUIsc0JBQXNCO0dBQ3RCLG9DQUFvQztHQUNwQyxzQkFBc0I7R0FDdEIsd0JBQXdC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RUE7TUFDRyx1QkFBdUI7TUFDdkIsa0NBQWtDO01BQ2xDLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQixvQkFBb0I7R0FDdkI7O0dBRUE7TUFDRywyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLG1CQUFtQjtHQUN0Qjs7R0FFQTtNQUNHLCtCQUErQjtNQUcvQiwyQkFBMkI7TUFJM0IsNkJBQTZCO01BQzdCLDJCQUEyQjtNQUczQixpQ0FBaUM7TUFHakMsNkJBQTZCO01BRTdCLDZCQUE2QjtNQUM3QixnREFBZ0Q7R0FDbkQ7O0dBRUE7TUFDRyxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGFBQWE7R0FDaEI7O0dBRUE7TUFDRyxlQUFlO0dBQ2xCO0FBQ0giLCJmaWxlIjoibGlicy9jb21wb25lbnRzL3VpL3NyYy9saWIvY29udGFpbmVycy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYWQtZnVsbHNjcmVlbiB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aCAgIDogOTUlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IDEwMCU7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IHN0YXJ0O1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBzdGFydDtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogZmxleC1zdGFydDtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWl0ZW0tYWxpZ24gIDogY2VudGVyO1xuICAgYWxpZ24tc2VsZiAgICAgICAgICAgOiBjZW50ZXI7XG4gICB3aWR0aCAgICAgICAgICAgICAgICA6IDkzdnc7XG4gICBvdmVyZmxvdy15ICAgICAgICAgICA6IHNjcm9sbDtcbiAgIG92ZXJmbG93LXggICAgICAgICAgIDogaGlkZGVuO1xufVxuXG4uYWJvdXQtdGl0bGUge1xuICAgcG9zaXRpb24gICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xuICAgLW1zLWZsZXgtYWxpZ24gICA6IGVuZDtcbiAgIGFsaWduLWl0ZW1zICAgICAgOiBmbGV4LWVuZDtcbiAgIC8qIG1hcmdpbi1sZWZ0ICAgOiBjYWxjKDUgKiB2YXIoLS1mb250U2l6ZSkpOyAqL1xuICAgd2lkdGggICAgICAgICAgICA6IGNhbGMoNzUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgaGVpZ2h0ICAgICAgICAgICA6IDEwJTtcbiAgIHBhZGRpbmctYm90dG9tICAgOiAxJTtcbiAgIHBhZGRpbmctdG9wICAgICAgOiA3JTtcbiAgIHBhZGRpbmctbGVmdCAgICAgOiBjYWxjKDEuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBmb250LXNpemUgICAgICAgIDogY2FsYygyLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYm9yZGVyLWJvdHRvbSAgICA6IDAuNnB4IHZhcigtLWxpbmUtYmxhY2spIHNvbGlkO1xuICAgei1pbmRleCAgICAgICAgICA6IDIwMDtcbiAgIG1hcmdpbi1ib3R0b20gICAgOiAzJTtcbn1cblxuLmFib3V0LXRpdGxlLXR3byB7XG4gICBwYWRkaW5nLXRvcDogMiU7XG4gICBoZWlnaHQgICAgIDogNSU7XG4gICBmb250LXNpemUgIDogY2FsYygwICogdmFyKC0tZm9udFNpemUpKTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogaG9yaXpvbnRhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiByb3c7XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IHJvdztcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogLW1vei1tYXgtY29udGVudDtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogbWF4LWNvbnRlbnQ7XG59XG5cbi5jb21wZXRlbmNpZXMtY29udGFpbmVyIHtcbiAgIGhlaWdodDogY2FsYygzMCAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi50aXRsZXMtY29udGFpbmVyIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWxpbmUtcGFjayAgIDogY2VudGVyO1xuICAgYWxpZ24tY29udGVudCAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICAgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWl0ZW1zICAgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICB3aWR0aCAgICAgICAgICAgICAgICA6IGNhbGMoMjAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBjZW50ZXI7XG4gICBwYWRkaW5nLWxlZnQgICAgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvcGFjaXR5ICAgICAgICAgICAgICA6IDE7XG4gICBmb250LXNpemUgICAgICAgICAgICA6IGNhbGMoMS42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbiAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLmJpb2dyYXBoeS10aXRsZSB7XG4gICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcbiAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcm9udC1ibGFjayk7XG4gICBoZWlnaHQgICAgICAgICAgOiAxMDAlO1xuICAgLyogcGFkZGluZy1sZWZ0IDogMTAlOyAqL1xuICAgcGFkZGluZy10b3AgICAgIDogMTVweDtcbiAgIGJvcmRlci1yYWRpdXMgICA6IDEwcHg7XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIHdpZHRoICAgICAgICAgICAgICAgIDogY2FsYyg2NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IGluaGVyaXQ7XG4gICAvKiBwYWRkaW5nLWxlZnQgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICBwYWRkaW5nLXJpZ2h0ICAgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvcGFjaXR5ICAgICAgICAgICAgICA6IDA7XG4gICB6LWluZGV4ICAgICAgICAgICAgICA6IDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5iaW8tY29udGFpbmVyIHtcbiAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmFib3V0LXBhZ2UgLmFib3V0LWNvbnRhaW5lciB7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDE7XG4gICB6LWluZGV4ICAgICAgICAgICA6IDEwMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLmFib3V0LWltYWdlIHtcbiAgIHBvc2l0aW9uICAgICAgICAgIDogZml4ZWQ7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogZmxleDtcbiAgIGxlZnQgICAgICAgICAgICAgIDogMjUlO1xuICAgd2lkdGggICAgICAgICAgICAgOiBjYWxjKDQwICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLmFib3V0LXBhZ2UgLmFib3V0LWltYWdlIHtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLyogYmlvID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYmlvLXRleHQge1xuICAgbWFyZ2luLWxlZnQgICAgIDogY2FsYygzICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHBhZGRpbmctbGVmdCAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLXJpZ2h0ICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcm9udC1ibGFjayk7XG4gICBoZWlnaHQgICAgICAgICAgOiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgaGVpZ2h0ICAgICAgICAgIDogLW1vei1tYXgtY29udGVudDtcbiAgIGhlaWdodCAgICAgICAgICA6IG1heC1jb250ZW50O1xuICAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcbiAgIHotaW5kZXggICAgICAgICA6IDEwMDtcbn1cblxuLyogZ3JhcGggPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmNvbXBvbmVudCB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgY29sb3IgICAgICAgICAgICAgICAgOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3IgICAgIDogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiAxMHB4O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IGluaGVyaXQ7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiA5NSU7XG4gICBsZWZ0ICAgICAgICAgICAgICAgICA6IDIuNSU7XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkge1xuICAgLmNvbXBvbmVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgfVxufSAqL1xuXG4uY29tcG9uZW50OmJlZm9yZSxcbi5jb21wb25lbnQ6YWZ0ZXIge1xuICAgY29udGVudCAgICAgICAgIDogJyc7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xuICAgei1pbmRleCAgICAgICAgIDogLTE7XG4gICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG59XG5cbi5jb21wb25lbnQgYXNpZGUge1xuICAgcG9zaXRpb24gICAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgICA6IGJsb2NrO1xuICAgYmFja2dyb3VuZCAgICAgICAgICAgICA6ICMzNzM2NDE7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDogMTBweDtcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29tcG9uZW50IGFzaWRlIC5wcmVhbXAge1xuICAgaGVpZ2h0ICAgICAgICAgICA6IDcwcHg7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LXBhY2sgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gICAuY29tcG9uZW50IGFzaWRlIC5wcmVhbXAge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgIH1cbn0gKi9cblxuLmNvbXBvbmVudCBhc2lkZSAucHJlYW1wPmxhYmVsIHtcbiAgIHBvc2l0aW9uICAgOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXkgICAgOiBibG9jaztcbiAgIGxlZnQgICAgICAgOiAzcHg7XG4gICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY29tcG9uZW50IG1haW4ge1xuICAgcG9zaXRpb24gICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICA6IGJsb2NrO1xuICAgcGFkZGluZy1ib3R0b20gICA6IDMwcHg7XG4gICBwYWRkaW5nICAgICAgICAgIDogMjBweDtcbiAgIGRpc3BsYXkgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtcGFjayA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LXBhY2sgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuICAgaGVpZ2h0ICAgICAgICAgICA6IGluaGVyaXQ7XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkge1xuICAgLmNvbXBvbmVudCBtYWluIHtcbiAgICAgIHBhZGRpbmctbGVmdCA6IDIwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgfVxufSAqL1xuXG4uY29tcG9uZW50IG1haW4gLnByZXNldHMge1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbiA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgOiBjZW50ZXI7XG4gICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgIC13ZWJraXQtYm94LXBhY2sgIDogc3RhcnQ7XG4gICAtbXMtZmxleC1wYWNrICAgICA6IHN0YXJ0O1xuICAganVzdGlmeS1jb250ZW50ICAgOiBmbGV4LXN0YXJ0O1xuICAgcGFkZGluZyAgICAgICAgICAgOiAxMHB4O1xuICAgLyogcGFkZGluZy1sZWZ0ICAgOiBjYWxjKDQwcHgvMiAtIC41ZW0pOyAqL1xuICAgcGFkZGluZy1sZWZ0ICAgICAgOiBjYWxjKDgwcHgvMiAtIC41ZW0pO1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiAxMDBweDtcbiAgIGNvbG9yICAgICAgICAgICAgIDogIzhlOGU5YjtcbiAgIGZvbnQtd2VpZ2h0ICAgICAgIDogNzAwO1xuICAgYm9yZGVyLWNvbG9yICAgICAgOiAjNEY0RjYyO1xuICAgYmFja2dyb3VuZCAgICAgICAgOiB0cmFuc3BhcmVudDtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gICAuY29tcG9uZW50IG1haW4gLnByZXNldHMge1xuICAgICAgcGFkZGluZy1sZWZ0ICAgOiBjYWxjKDgwcHgvMiAtIC41ZW0pO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgfVxufSAqL1xuXG4uY29tcG9uZW50IG1haW4gLnByZXNldHM+bGFiZWwge1xuICAgZGlzcGxheSAgICAgOiBpbmxpbmUtYmxvY2s7XG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi8qIC5jb21wb25lbnQgbWFpbiAucHJlc2V0cz5zZWxlY3Qge1xuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgYm9yZGVyLXJhZGl1cyAgICAgOiA4cHg7XG4gICBib3JkZXIgICAgICAgICAgICA6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICBtYXgtd2lkdGggICAgICAgICA6IDIwMHB4O1xuICAgcGFkZGluZyAgICAgICAgICAgOiA0cHg7XG4gICBjb2xvciAgICAgICAgICAgICA6IGluaGVyaXQ7XG4gICBiYWNrZ3JvdW5kICAgICAgICA6IHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLWNvbG9yICAgICAgOiBpbmhlcml0O1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiAzMHB4O1xuICAgbWFyZ2luLXJpZ2h0ICAgICAgOiAxMHB4O1xufSAqL1xuXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIHtcbiAgIC5jb21wb25lbnQgbWFpbiAucHJlc2V0cz5zZWxlY3Qge1xuICAgICAgbWluLXdpZHRoICAgOiAyMDBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgIH1cbn0gKi9cblxuLyogLmNvbXBvbmVudCBtYWluIC5wcmVzZXRzPnNlbGVjdCBvcHRpb24ge1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzNEM0Q0QTtcbn0gKi9cblxuLyogLmNvbXBvbmVudCBtYWluIC5wcmVzZXRzPmJ1dHRvbiB7XG4gICBoZWlnaHQgICAgICAgOiAzMHB4O1xuICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgYmFja2dyb3VuZCAgIDogdHJhbnNwYXJlbnQ7XG4gICBjb2xvciAgICAgICAgOiBpbmhlcml0O1xuICAgYm9yZGVyICAgICAgIDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgIGJvcmRlci1jb2xvciA6IGluaGVyaXQ7XG4gICBwYWRkaW5nICAgICAgOiA0cHggMTBweDtcbiAgIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4gICBvdXRsaW5lICAgICAgOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIHtcbiAgIC5jb21wb25lbnQgbWFpbiAucHJlc2V0cz5idXR0b24ge1xuICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgfVxufSAqL1xuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXIge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgaGVpZ2h0ICA6IGNhbGMoMjAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgd2lkdGggICA6IGNhbGMoNS4zMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBmbG9hdCAgIDogbGVmdDtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlciB7XG4gICAgICB3aWR0aDogODBweDtcbiAgIH1cbn0gKi9cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXI6OmFmdGVyIHtcbiAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgdG9wICAgICAgIDogY2FsYygyMSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBsZWZ0ICAgICAgOiBjYWxjKDUwJSAtIDJlbSk7XG4gICBmb250LXNpemUgOiA4MCU7XG4gICBjb2xvciAgICAgOiAjOGU4ZTliO1xuICAgY29udGVudCAgIDogJyc7XG4gICB3aWR0aCAgICAgOiA0ZW07XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICAgY29udGVudDogJ1RlYW0gd29ya2VyJztcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXI6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gICBjb250ZW50OiAnUXVpY2sgbGVhcm5lcic7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyOm50aC1jaGlsZCg0KTo6YWZ0ZXIge1xuICAgY29udGVudDogJ09yZ2FuaXplZCc7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyOm50aC1jaGlsZCg1KTo6YWZ0ZXIge1xuICAgY29udGVudDogJ0lubm92YXRpdmUnO1xufVxuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlcjpudGgtY2hpbGQoNik6OmFmdGVyIHtcbiAgIGNvbnRlbnQ6ICdTZWxmIG1vdGl2YXRlZCc7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyOm50aC1jaGlsZCg3KTo6YWZ0ZXIge1xuICAgY29udGVudDogJ0VhZ2VyIHRvIGxlYXJuJztcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXI6bnRoLWNoaWxkKDgpOjphZnRlciB7XG4gICBjb250ZW50OiAnV29ya2luZyB1bmRlciBwcmVzc3VyZSc7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyX190aHVtYiB7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDE7XG4gICBwb3NpdGlvbiAgICAgICAgICA6IGFic29sdXRlO1xuICAgbGVmdCAgICAgICAgICAgICAgOiBjYWxjKDIuMDUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgd2lkdGggICAgICAgICAgICAgOiBjYWxjKDEuMiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgICA6IGNhbGMoMS4yICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGxpbmUtaGVpZ2h0ICAgICAgIDogY2FsYygxLjIgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYmFja2dyb3VuZC1jb2xvciAgOiB3aGl0ZTtcbiAgIGNvbG9yICAgICAgICAgICAgIDogIzgzNzZGRjtcbiAgIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xuICAgZm9udC1zaXplICAgICAgICAgOiA0MCU7XG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggIzM3MzY0MTtcbiAgIGJveC1zaGFkb3cgICAgICAgIDogMCAwIDJweCAjMzczNjQxO1xuICAgYm9yZGVyLXJhZGl1cyAgICAgOiA1MCU7XG4gICBwb2ludGVyLWV2ZW50cyAgICA6IG5vbmU7XG4gICBjdXJzb3IgICAgICAgICAgICA6IHBvaW50ZXI7XG4gICB6LWluZGV4ICAgICAgICAgICA6IDI7XG59XG5cbi8qXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIHtcbiAgIC5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyX190aHVtYiB7XG4gICAgICBsZWZ0OiAzMHB4O1xuICAgfVxufSAqL1xuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlcl9fYmFyIHtcbiAgIGxlZnQgICAgICAgICAgOiBjYWxjKDIuNTMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYm90dG9tICAgICAgICA6IDA7XG4gICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XG4gICBiYWNrZ3JvdW5kICAgIDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh2YXIoLS1saWdodC1wdXJwbGUpKSwgdG8odmFyKC0tZGFyay1wdXJwbGUpKSk7XG4gICBiYWNrZ3JvdW5kICAgIDogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXB1cnBsZSksIHZhcigtLWRhcmstcHVycGxlKSk7XG4gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgIHdpZHRoICAgICAgICAgOiBjYWxjKDAuMjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XG4gICBvcGFjaXR5ICAgICAgIDogMTtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlcl9fYmFyIHtcbiAgICAgIGxlZnQ6IDM4cHg7XG4gICB9XG59ICovXG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF0ge1xuICAgcG9zaXRpb24gICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgbWFyZ2luICAgICAgICAgICAgICA6IDA7XG4gICBoZWlnaHQgICAgICAgICAgICAgIDogMTAwJTtcbiAgIHdpZHRoICAgICAgICAgICAgICAgOiAxMDAlO1xuICAgZGlzcGxheSAgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcbiAgIHBvc2l0aW9uICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIC13ZWJraXQtd3JpdGluZy1tb2RlOiBidC1scjtcbiAgIC1tcy13cml0aW5nLW1vZGUgICAgOiBidC1scjtcbiAgIHdyaXRpbmctbW9kZSAgICAgICAgOiBidC1scjtcbiAgIC13ZWJraXQtYXBwZWFyYW5jZSAgOiBzbGlkZXItdmVydGljYWw7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrLFxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV1bb3JpZW50PXZlcnRpY2FsXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlciBpbnB1dFt0eXBlPXJhbmdlXVtvcmllbnQ9dmVydGljYWxdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICBib3JkZXIgICAgICAgICAgICA6IG5vbmU7XG4gICBiYWNrZ3JvdW5kICAgICAgICA6ICMzNDM0NDA7XG4gICB3aWR0aCAgICAgICAgICAgICA6IGNhbGMoMC4yNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXItY29sb3IgICAgICA6ICMzNDM0NDA7XG4gICBib3JkZXItcmFkaXVzICAgICA6IDEwcHg7XG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDJweCAjM0QzRDRBO1xuICAgYm94LXNoYWRvdyAgICAgICAgOiAwIDAgMCAycHggIzNEM0Q0QTtcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV1bb3JpZW50PXZlcnRpY2FsXTo6LW1vei1yYW5nZS10cmFjayB7XG4gICBib3JkZXIgICAgICAgOiBub25lO1xuICAgYmFja2dyb3VuZCAgIDogIzM0MzQ0MDtcbiAgIHdpZHRoICAgICAgICA6IGNhbGMoMC4yNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXItY29sb3IgOiAjMzQzNDQwO1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIGJveC1zaGFkb3cgICA6IDAgMCAwIDJweCAjM0QzRDRBO1xufVxuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlciBpbnB1dFt0eXBlPXJhbmdlXVtvcmllbnQ9dmVydGljYWxdOjotbXMtdHJhY2sge1xuICAgYm9yZGVyICAgICAgIDogbm9uZTtcbiAgIGJhY2tncm91bmQgICA6ICMzNDM0NDA7XG4gICB3aWR0aCAgICAgICAgOiBjYWxjKDAuMjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYm9yZGVyLWNvbG9yIDogIzM0MzQ0MDtcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICBib3gtc2hhZG93ICAgOiAwIDAgMCAycHggIzNEM0Q0QTtcbiAgIGNvbG9yICAgICAgICA6IHRyYW5zcGFyZW50O1xuICAgaGVpZ2h0ICAgICAgIDogMTAwJTtcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV1bb3JpZW50PXZlcnRpY2FsXTo6LW1zLWZpbGwtbG93ZXIsXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlciBpbnB1dFt0eXBlPXJhbmdlXVtvcmllbnQ9dmVydGljYWxdOjotbXMtZmlsbC11cHBlcixcbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF06Oi1tcy10b29sdGlwIHtcbiAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgIGxlZnQgICAgOiAtMjBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHdpZHRoICAgOiA0MHB4O1xuICAgaGVpZ2h0ICA6IDQwcHg7XG4gICBvcGFjaXR5IDogMDtcbn1cblxuLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV1bb3JpZW50PXZlcnRpY2FsXTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aCAgIDogNDBweDtcbiAgIGhlaWdodCAgOiA0MHB4O1xuICAgb3BhY2l0eSA6IDA7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyAucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF06Oi1tcy10aHVtYiB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aCAgIDogNDBweDtcbiAgIGhlaWdodCAgOiA0MHB4O1xuICAgb3BhY2l0eSA6IDA7XG59XG5cbi5jb21wb25lbnQgbWFpbiAuc2xpZGVycyBzdmcge1xuICAgei1pbmRleCAgICAgICA6IDE7XG4gICBvdmVyZmxvdyAgICAgIDogdmlzaWJsZTtcbiAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xuICAgdG9wICAgICAgICAgICA6IDA7XG4gICBsZWZ0ICAgICAgICAgIDogMDtcbiAgIHdpZHRoICAgICAgICAgOiAxMDAlO1xuICAgaGVpZ2h0ICAgICAgICA6IDEwMCU7XG4gICBmaWxsICAgICAgICAgIDogbm9uZTtcbiAgIHN0cm9rZS13aWR0aCAgOiAxO1xufVxuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgc3ZnIC5saW5lIHtcbiAgIHN0cm9rZTogdmFyKC0tbGlnaHRlci1wdXJwbGUpO1xufVxuXG4uY29tcG9uZW50IG1haW4gLnNsaWRlcnMgc3ZnIC5saW5lLXNoYWRvdyB7XG4gICB6LWluZGV4ICAgICA6IDE7XG4gICBzdHJva2Utd2lkdGg6IDEuNTtcbiAgIHN0cm9rZSAgICAgIDogI2ZmZmZmZjtcbiAgIG9wYWNpdHkgICAgIDogMDtcbiAgIGRpc3BsYXkgICAgIDogbm9uZTtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgc3ZnIC5saW5lLXNoYWRvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgIH0gKi9cbi8qIH0gKi9cblxuLyogLmRlc2lnbi1yZWZlcmVuY2Uge1xuICAgcG9zaXRpb24gOiBmaXhlZDtcbiAgIGJvdHRvbSAgIDogNnB4O1xuICAgcmlnaHQgICAgOiA2cHg7XG4gICBjb2xvciAgICA6ICM4ZThlOWI7XG4gICBmb250LXNpemU6IDcwJTtcbiAgIGRpc3BsYXkgIDogbm9uZTtcbn0gKi9cblxuLypcbkBtZWRpYSAobWluLWhlaWdodDogNjAwcHgpIHtcbiAgIC5kZXNpZ24tcmVmZXJlbmNlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgfVxufSAqL1xuXG5cbi8qIGVkdWNhdGlvbiBhbmQgZW1wbG95bWVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5lZHUtZW1wLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IGhvcml6b250YWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogcm93O1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiByb3c7XG4gICAtbXMtZmxleC13cmFwICAgICAgICA6IG5vd3JhcDtcbiAgIGZsZXgtd3JhcCAgICAgICAgICAgIDogbm93cmFwO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBzdHJldGNoO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBzdHJldGNoO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBzdHJldGNoO1xuICAgLW1zLWZsZXgtbGluZS1wYWNrICAgOiBjZW50ZXI7XG4gICBhbGlnbi1jb250ZW50ICAgICAgICA6IGNlbnRlcjtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogLW1vei1tYXgtY29udGVudDtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogbWF4LWNvbnRlbnQ7XG4gICAvKiBoZWlnaHQgICAgICAgICAgICA6IGNhbGMoNDUgKiB2YXIoLS1mb250U2l6ZSkpOyAqL1xufVxuXG4udGl0bGVzLWNvbnRhaW5lci5lZHUtYW5kLWVtcC10aXRsZS1tYWluIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogaG9yaXpvbnRhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiByb3c7XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IHJvdztcbiAgIC1tcy1mbGV4LXdyYXAgICAgICAgIDogbm93cmFwO1xuICAgZmxleC13cmFwICAgICAgICAgICAgOiBub3dyYXA7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IHN0cmV0Y2g7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IHN0cmV0Y2g7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IHN0cmV0Y2g7XG4gICAtbXMtZmxleC1saW5lLXBhY2sgICA6IGNlbnRlcjtcbiAgIGFsaWduLWNvbnRlbnQgICAgICAgIDogY2VudGVyO1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiB1bnNldDtcbiAgIHdpZHRoICAgICAgICAgICAgICAgIDogY2FsYygyMCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB0ZXh0LWFsaWduICAgICAgICAgICA6IGNlbnRlcjtcbiAgIHBhZGRpbmctbGVmdCAgICAgICAgIDogY2FsYyg1ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogY2FsYygxLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uZWR1LWFuZC1lbXAtdGl0bGUge1xuICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XG4gICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgIDogaW5oZXJpdDtcbiAgIC8qIHBhZGRpbmctbGVmdCA6IDEwJTsgKi9cbiAgIHBhZGRpbmctdG9wICAgICA6IDE1cHg7XG4gICBib3JkZXItcmFkaXVzICAgOiAxMHB4O1xufVxuXG4uY2QtY29udGFpbmVyIHtcbiAgIC8qIG1heC13aWR0aCAgICA6IDEwODBweDsgKi9cbiAgIG1hcmdpbiAgICAgICAgICA6IDAgYXV0bztcbiAgIGJhY2tncm91bmQgICAgICA6IHZhcigtLWZyb250LWJsYWNrKTtcbiAgIHBhZGRpbmcgICAgICAgICA6IDAgMTAlO1xuICAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcbiAgIHdpZHRoICAgICAgICAgICA6IDk1JTtcbiAgIGxlZnQgICAgICAgICAgICA6IDIuNSU7XG59XG5cbi5jZC1jb250YWluZXI6OmFmdGVyIHtcbiAgIGNvbnRlbnQ6ICcnO1xuICAgZGlzcGxheTogdGFibGU7XG4gICBjbGVhciAgOiBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NYWluIGNvbXBvbmVudHNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiNjZC10aW1lbGluZSB7XG4gICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcbiAgIGhlaWdodCAgICAgICAgICA6IGluaGVyaXQ7XG4gICAvKiBwYWRkaW5nICAgICAgOiAyZW0gMDsgKi9cbiAgIC8qIG1hcmdpbi10b3AgICA6IDNlbTtcbiAgIG1hcmdpbi1ib3R0b20gICA6IDNlbTsgKi9cbn1cblxuI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xuICAgY29udGVudCAgICAgIDogJyc7XG4gICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbiAgIHRvcCAgICAgICAgICA6IDA7XG4gICAvKiBsZWZ0ICAgICAgOiAyNXB4OyAqL1xuICAgaGVpZ2h0ICAgICAgIDogMTAwJTtcbiAgIHdpZHRoICAgICAgICA6IDRweDtcbiAgIGJhY2tncm91bmQgICA6ICM3RTU3QzI7XG4gICBsZWZ0ICAgICAgICAgOiA1MCU7XG4gICBtYXJnaW4tbGVmdCAgOiAtMnB4O1xufVxuXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzBweCkge1xuICAgI2NkLXRpbWVsaW5lIHtcbiAgICAgIG1hcmdpbi10b3AgICA6IDNlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgIH1cblxuICAgI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xuICAgICAgbGVmdCAgICAgICA6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgfVxufSAqL1xuXG4uY2QtdGltZWxpbmUtYmxvY2sge1xuICAgcG9zaXRpb24gICA6IHJlbGF0aXZlO1xuICAgLyogbWFyZ2luICA6IDJlbSAwOyAqL1xuICAgbWFyZ2luICAgICA6IDRlbSAwO1xufVxuXG4uY2QtdGltZWxpbmUtYmxvY2s6YWZ0ZXIge1xuICAgY29udGVudDogXCJcIjtcbiAgIGRpc3BsYXk6IHRhYmxlO1xuICAgY2xlYXIgIDogYm90aDtcbn1cblxuLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcbiAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jZC10aW1lbGluZS1pbWcge1xuICAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XG4gICB0b3AgICAgICAgICAgOiBjYWxjKDAuMSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBsZWZ0ICAgICAgICAgOiA1MCU7XG4gICB3aWR0aCAgICAgICAgOiBjYWxjKDIgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgaGVpZ2h0ICAgICAgIDogY2FsYygyICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG1hcmdpbi1sZWZ0ICA6IGNhbGMoLTEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgbWFyZ2luLXRvcCAgIDogY2FsYygxLjEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgYmFja2dyb3VuZCAgIDogIzY3M0FCNztcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNHB4ICM3RTU3QzIsXG4gICAgICBpbnNldCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgICAwIDNweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICM3RTU3QzIsXG4gICAgICBpbnNldCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgICAwIDNweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgICAgOiB0cmFuc2xhdGVaKDApO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgICAgOiB0cmFuc2xhdGVaKDApO1xuICAgYmFja2ZhY2UtdmlzaWJpbGl0eSAgICAgICAgOiBoaWRkZW47XG4gICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xuICAgcG9zaXRpb24gICAgIDogcmVsYXRpdmU7XG4gICBiYWNrZ3JvdW5kICAgOiB2YXIoLS1taWRkbGUtYmxhY2spO1xuICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgbWFyZ2luLWxlZnQgIDogMDtcbiAgIHBhZGRpbmcgICAgICA6IDEuNmVtO1xuICAgd2lkdGggICAgICAgIDogNDYlO1xuICAgbWFyZ2luICAgICAgIDogMCAtNSU7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50LW9uZSB7XG4gICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNkLXRpbWVsaW5lLWNvbnRlbnQtdHdvIHtcbiAgIG1hcmdpbi10b3AgICA6IDUlO1xuICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50IC50aW1lbGluZS1jb250ZW50LWluZm8ge1xuICAgYmFja2dyb3VuZCAgICAgICAgOiB2YXIoLS1saW5lLWJsYWNrKTtcbiAgIHBhZGRpbmcgICAgICAgICAgIDogNXB4IDEwcHg7XG4gICBjb2xvciAgICAgICAgICAgICA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgIDogY2FsYygwLjcgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICBib3gtc2hhZG93ICAgICAgICA6IGluc2V0IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgIGJvcmRlci1yYWRpdXMgICAgIDogMnB4O1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudCAudGltZWxpbmUtY29udGVudC1pbmZvLXJvbGUge1xuICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjQgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudCAudGltZWxpbmUtY29udGVudC1pbmZvIGkge1xuICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuNCAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50IC50aW1lbGluZS1jb250ZW50LWluZm8gLnRpbWVsaW5lLWNvbnRlbnQtaW5mby10aXRsZSxcbi5jZC10aW1lbGluZS1jb250ZW50IC50aW1lbGluZS1jb250ZW50LWluZm8gLnRpbWVsaW5lLWNvbnRlbnQtaW5mby1kYXRlIHtcbiAgIHdpZHRoICAgICA6IDEwMCU7XG4gICBkaXNwbGF5ICAgOiBpbmxpbmUtYmxvY2s7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAuY2QtdGltZWxpbmUtY29udGVudCAudGltZWxpbmUtY29udGVudC1pbmZvIC50aW1lbGluZS1jb250ZW50LWluZm8tdGl0bGUsXG4gICAuY2QtdGltZWxpbmUtY29udGVudCAudGltZWxpbmUtY29udGVudC1pbmZvIC50aW1lbGluZS1jb250ZW50LWluZm8tZGF0ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoICA6IDEwMCU7XG4gICB9XG59ICovXG5cbi5jZC10aW1lbGluZS1jb250ZW50IC5jb250ZW50LXNraWxscyB7XG4gICBmb250LXNpemUgICAgICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nICAgICAgICAgOiAwO1xuICAgbWFyZ2luLWJvdHRvbSAgIDogMDtcbiAgIGRpc3BsYXkgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xuICAgLW1zLWZsZXgtd3JhcCAgIDogd3JhcDtcbiAgIGZsZXgtd3JhcCAgICAgICA6IHdyYXA7XG4gICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50IC5jb250ZW50LXNraWxscyBsaSB7XG4gICBiYWNrZ3JvdW5kICAgICAgIDogdmFyKC0tbGluZS1ibGFjayk7XG4gICBib3JkZXItcmFkaXVzICAgIDogMnB4O1xuICAgZGlzcGxheSAgICAgICAgICA6IGlubGluZS1ibG9jaztcbiAgIHBhZGRpbmcgICAgICAgICAgOiBjYWxjKDAuMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBjb2xvciAgICAgICAgICAgIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgbWFyZ2luICAgICAgICAgICA6IDNweCAycHg7XG4gICB0ZXh0LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtZmxleCA6IDE7XG4gICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgIGZsZXgtZ3JvdyAgICAgICAgOiAxO1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudDphZnRlciB7XG4gICBjb250ZW50OiBcIlwiO1xuICAgZGlzcGxheTogdGFibGU7XG4gICBjbGVhciAgOiBib3RoO1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudCBoMiB7XG4gICBjb2xvciAgICAgICAgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICBtYXJnaW4tdG9wICAgOiAwO1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIHRleHQtYWxpZ24gICA6IGNlbnRlcjtcbiAgIGZvbnQtc2l6ZSAgICA6IGNhbGMoMS4xICogdmFyKC0tZm9udFNpemUpKTtcbn1cblxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCxcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcbiAgIGNvbG9yICAgIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgZm9udC1zaXplOiBjYWxjKDAuOCAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcbiAgIGRpc3BsYXkgIDogaW5saW5lLWJsb2NrO1xuICAgZm9udC1zaXplOiBjYWxjKDAuOCAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5jZC10aW1lbGluZS1jb250ZW50IHAge1xuICAgbWFyZ2luICAgOiAxZW0gMDtcbiAgIGZvbnQtc2l6ZTogY2FsYygwLjkgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcbiAgIGNvbnRlbnQgICAgICAgICAgOiAnJztcbiAgIHBvc2l0aW9uICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgIHRvcCAgICAgICAgICAgICAgOiBjYWxjKDEuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBsZWZ0ICAgICAgICAgICAgIDogMTAwJTtcbiAgIHJpZ2h0ICAgICAgICAgICAgOiAxMDAlO1xuICAgaGVpZ2h0ICAgICAgICAgICA6IDA7XG4gICB3aWR0aCAgICAgICAgICAgIDogMDtcbiAgIGJvcmRlciAgICAgICAgICAgOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItcmlnaHQgICAgIDogN3B4IHNvbGlkIHZhcigtLW1pZGRsZS1ibGFjayk7XG4gICBib3JkZXItY29sb3IgICAgIDogdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsYWNrKTtcbn1cblxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcbi5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcbiAgIGZvbnQtc2l6ZTogY2FsYygwLjggKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XG4gICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgd2lkdGggICAgOiAxMDAlO1xuICAgbGVmdCAgICAgOiAxNTAlO1xuICAgdG9wICAgICAgOiA3JTtcbiAgIGZvbnQtc2l6ZTogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbn1cblxuLmRhdGUtcmlnaHQge1xuICAgcmlnaHQ6IDE1MCU7XG4gICB0b3AgIDogMTUlO1xufVxuXG4uY2QtdGltZWxpbmUtYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIC5jZC10aW1lbGluZS1jb250ZW50IHtcbiAgIGZsb2F0ICAgICA6IHJpZ2h0O1xuICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNkLXRpbWVsaW5lLWJsb2NrOm50aC1jaGlsZChldmVuKSAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcbiAgIHRvcCAgICAgICAgICAgICAgIDogY2FsYygxLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgbGVmdCAgICAgICAgICAgICAgOiBhdXRvO1xuICAgcmlnaHQgICAgICAgICAgICAgOiAxMDAlO1xuICAgYm9yZGVyLWNvbG9yICAgICAgOiB0cmFuc3BhcmVudDtcbiAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsYWNrKTtcbn1cblxuLmNkLXRpbWVsaW5lLWJsb2NrOm50aC1jaGlsZChldmVuKSAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlIHtcbiAgIGZsb2F0OiByaWdodDtcbn1cblxuLmNkLXRpbWVsaW5lLWJsb2NrOm50aC1jaGlsZChldmVuKSAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XG4gICBsZWZ0ICAgICAgOiBhdXRvO1xuICAgcmlnaHQgICAgIDogMTUwJTtcbiAgIHRvcCAgICAgICA6IDE1JTtcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBwb3J0cmFpdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgLmFib3V0LXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uICAgICAgICAgOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduICAgOiBlbmQ7XG4gICAgICBhbGlnbi1pdGVtcyAgICAgIDogZmxleC1lbmQ7XG4gICAgICB3aWR0aCAgICAgICAgICAgIDogY2FsYygyNC41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIGhlaWdodCAgICAgICAgICAgOiAxMCU7XG4gICAgICBwYWRkaW5nLWJvdHRvbSAgIDogMSU7XG4gICAgICBwYWRkaW5nLXRvcCAgICAgIDogNyU7XG4gICAgICBwYWRkaW5nLWxlZnQgICAgIDogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIGZvbnQtc2l6ZSAgICAgICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBtYXJnaW4tbGVmdCAgICAgIDogY2FsYygyICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIG1hcmdpbi1yaWdodCAgICAgOiBjYWxjKDAuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBib3JkZXItYm90dG9tICAgIDogMC42cHggdmFyKC0tbGluZS1ibGFjaykgc29saWQ7XG4gICAgICB6LWluZGV4ICAgICAgICAgIDogMjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbSAgICA6IDMlO1xuICAgfVxuXG4gICAuYWJvdXQtdGl0bGUtdHdvIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgfVxuXG4gICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiBob3Jpem9udGFsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IHJvdztcbiAgICAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogcm93O1xuICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiAtbW96LW1heC1jb250ZW50O1xuICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBtYXgtY29udGVudDtcbiAgIH1cblxuICAgLnRpdGxlcy1jb250YWluZXIge1xuICAgICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogbm9uZTtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWxpbmUtcGFjayAgIDogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudCAgICAgICAgOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWJveC1wYWNrICAgICA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50ICAgICAgOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWl0ZW1zICAgICAgICA6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAgICB3aWR0aCAgICAgICAgICAgICAgICA6IGNhbGMoMjAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQgICAgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBvcGFjaXR5ICAgICAgICAgICAgICA6IDE7XG4gICAgICBmb250LXNpemUgICAgICAgICAgICA6IGNhbGMoMS42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbiAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIH1cblxuICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWJveC1wYWNrICAgICA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50ICAgICAgOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgICAgd2lkdGggICAgICAgICAgICAgICAgOiBjYWxjKDMwICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIGhlaWdodCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgICAgIHBhZGRpbmctcmlnaHQgICAgICAgIDogY2FsYygxLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgb3BhY2l0eSAgICAgICAgICAgICAgOiAwO1xuICAgICAgei1pbmRleCAgICAgICAgICAgICAgOiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgfVxuXG4gICAuY29tcG9uZW50IHtcbiAgICAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICAgICBjb2xvciAgICAgICAgICAgICAgICA6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB2YXIoLS1mcm9udC1ibGFjayk7XG4gICAgICBib3JkZXItcmFkaXVzICAgICAgICA6IDEwcHg7XG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgICAgIGhlaWdodCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAgICAvKiB3aWR0aCAgICAgICAgICAgICA6IDk1JTsgKi9cbiAgICAgIC8qIGxlZnQgICAgICAgICAgICAgIDogMi41JTsgKi9cbiAgICAgIG1hcmdpbi1sZWZ0ICAgICAgICAgIDogY2FsYygzICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIHBhZGRpbmctcmlnaHQgICAgICAgIDogY2FsYygwLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgcGFkZGluZy1sZWZ0ICAgICAgICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICAvKiBwYWRkaW5nLWxlZnQgICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBwYWRkaW5nLXJpZ2h0ICAgICAgICA6IGNhbGMoMi41ICogdmFyKC0tZm9udFNpemUpKTsgKi9cbiAgICAgIHdpZHRoICAgICAgICAgICAgICAgIDogdW5zZXQ7XG4gICAgICBsZWZ0ICAgICAgICAgICAgICAgICA6IHVuc2V0O1xuICAgfVxuXG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQgIDogY2FsYygyMCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICB3aWR0aCAgIDogY2FsYygzICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIGZsb2F0ICAgOiBsZWZ0O1xuICAgfVxuXG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlcl9fYmFyIHtcbiAgICAgIGxlZnQgICAgICAgICAgOiBjYWxjKDEuMzQgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgYm90dG9tICAgICAgICA6IDA7XG4gICAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kICAgIDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh2YXIoLS1saWdodC1wdXJwbGUpKSwgdG8odmFyKC0tZGFyay1wdXJwbGUpKSk7XG4gICAgICBiYWNrZ3JvdW5kICAgIDogbGluZWFyLWdyYWRpZW50KHZhcigtLWxpZ2h0LXB1cnBsZSksIHZhcigtLWRhcmstcHVycGxlKSk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHdpZHRoICAgICAgICAgOiBjYWxjKDAuMjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgYm9yZGVyLXJhZGl1cyA6IDEwcHg7XG4gICAgICBvcGFjaXR5ICAgICAgIDogMTtcbiAgIH1cblxuICAgLmNvbXBvbmVudCBtYWluIC5zbGlkZXJzIC5yYW5nZS1zbGlkZXJfX3RodW1iIHtcbiAgICAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgICAgIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XG4gICAgICBsZWZ0ICAgICAgICAgICAgICA6IGNhbGMoMC45ICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIHdpZHRoICAgICAgICAgICAgIDogY2FsYygxLjIgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgaGVpZ2h0ICAgICAgICAgICAgOiBjYWxjKDEuMiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBsaW5lLWhlaWdodCAgICAgICA6IGNhbGMoMS4yICogdmFyKC0tZm9udFNpemUpKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3IgIDogd2hpdGU7XG4gICAgICBjb2xvciAgICAgICAgICAgICA6ICM4Mzc2RkY7XG4gICAgICB0ZXh0LWFsaWduICAgICAgICA6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZSAgICAgICAgIDogNDAlO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMnB4ICMzNzM2NDE7XG4gICAgICBib3gtc2hhZG93ICAgICAgICA6IDAgMCAycHggIzM3MzY0MTtcbiAgICAgIGJvcmRlci1yYWRpdXMgICAgIDogNTAlO1xuICAgICAgcG9pbnRlci1ldmVudHMgICAgOiBub25lO1xuICAgICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyO1xuICAgICAgei1pbmRleCAgICAgICAgICAgOiAyO1xuICAgfVxuXG4gICAuY29tcG9uZW50IG1haW4gLnNsaWRlcnMgLnJhbmdlLXNsaWRlcjo6YWZ0ZXIge1xuICAgICAgcG9zaXRpb24gICAgICAgICA6IGFic29sdXRlO1xuICAgICAgdG9wICAgICAgICAgICAgICA6IGNhbGMoMjMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgbGVmdCAgICAgICAgICAgICA6IGNhbGMoMCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAgICBmb250LXNpemUgICAgICAgIDogY2FsYygwLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgY29sb3IgICAgICAgICAgICA6ICM4ZThlOWI7XG4gICAgICBjb250ZW50ICAgICAgICAgIDogJyc7XG4gICAgICAvKiB3aWR0aCAgICAgICAgIDogNGVtOyAqL1xuICAgICAgdGV4dC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGUoLTkwZGVnKTtcbiAgIH1cblxuICAgLmNvbXBldGVuY2llcy1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDI4LjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgfVxuXG4gICAuY29tcG9uZW50IG1haW4ge1xuICAgICAgcG9zaXRpb24gICAgICAgICA6IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheSAgICAgICAgICA6IGJsb2NrO1xuICAgICAgcGFkZGluZy1ib3R0b20gICA6IDMwcHg7XG4gICAgICBwYWRkaW5nICAgICAgICAgIDogMjBweDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgOiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtcGFjayA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2sgICAgOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQgIDogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtYWxpZ24gICA6IHN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXMgICAgICA6IGZsZXgtc3RhcnQ7XG4gICAgICAvKiB0cmFuc2Zvcm0gICAgIDogc2NhbGUoMC41KTsgKi9cbiAgICAgIGhlaWdodCAgICAgICAgICAgOiBpbmhlcml0O1xuICAgfVxuXG4gICAudGl0bGVzLWNvbnRhaW5lci5lZHUtYW5kLWVtcC10aXRsZS1tYWluIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cblxuICAgLmNkLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4gICAgICAgOiAwIGF1dG87XG4gICAgICBiYWNrZ3JvdW5kICAgOiB2YXIoLS1mcm9udC1ibGFjayk7XG4gICAgICBwYWRkaW5nICAgICAgOiAwIDEwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB3aWR0aCAgICAgICAgOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdCAgOiBjYWxjKDIuMiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB9XG5cbiAgIC5jZC10aW1lbGluZS1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZCAgIDogdmFyKC0tbWlkZGxlLWJsYWNrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG1hcmdpbi1sZWZ0ICA6IDA7XG4gICAgICBwYWRkaW5nICAgICAgOiAxLjZlbTtcbiAgICAgIHdpZHRoICAgICAgICA6IDQ2JTtcbiAgICAgIG1hcmdpbiAgICAgICA6IDAgLTglO1xuICAgfVxuXG4gICAuZWR1LWVtcC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgICAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xuICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgIH1cblxuICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAgICBoZWlnaHQgICAgICAgICAgICAgICA6IDEwMCU7XG4gICAgICAtd2Via2l0LWJveC1wYWNrICAgICA6IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBzdGFydDtcbiAgICAgIGp1c3RpZnktY29udGVudCAgICAgIDogZmxleC1zdGFydDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ24gIDogY2VudGVyO1xuICAgICAgYWxpZ24tc2VsZiAgICAgICAgICAgOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbSAgICAgICA6IGNhbGMoNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB9XG5cbiAgICNjZC10aW1lbGluZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQgIDogaW5oZXJpdDtcbiAgICAgIHBhZGRpbmcgOiA1cHg7XG4gICB9XG5cbiAgIC5jZC10aW1lbGluZS1ibG9jayB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICB9XG59Il19 */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/about/about.component.html":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/about/about.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"toad-fullscreen\">\n\n    <div class=\"main-container\">\n\n        <div class=\"about-title\">\n            About Me\n        </div>\n\n        <div class=\"content-container\">\n\n            <div class=\"titles-container bio-title-main\">\n\n                <div class=\"biography-title\">\n                    Biography\n                </div>\n            </div>\n\n            <div class=\"page about-container bio-container\">\n\n                <img *ngIf=\"aboutImage\" class=\"menu-icon about-image image image-black\" [src]=\"aboutImage\"\n                    alt=\"about-image\" />\n\n                <div class=\"bio-text\">\n                    <p>I am a JavaScript Developer who has a passion to create good looking and well performing web-apps with the most up \n                        to date Javascript framework stacks.</p>\n                   \n                        <p>I have completed an Information Systems Software Development Certificate, \n                        a Project Management Higher National Diploma, and a BSc Computer Systems Degree. </p>\n\n                    <p>I am looking for an opportunity to continue my career in a team environment where my skills, \n                        talents and knowledge can be fully utilized as I learn and improve.</p>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"about-title about-title-two\">Competencies\n        </div>\n\n        <!-- test ============================================== -->\n\n        <div class=\"content-container competencies-container\">\n\n            <div class=\"titles-container\">\n\n                <div class=\"biography-title\">\n                    Competencies\n                </div>\n            </div>\n\n            <div class=\"page about-container\">\n\n                <img *ngIf=\"aboutImage\" class=\"menu-icon about-image image image-black\" [src]=\"aboutImage\"\n                    alt=\"about-image\" />\n\n                <div class=\"component\">\n\n                    <!-- <aside>\n            <div class=\"preamp\">\n              <label>preamp</label>\n            </div>\n          </aside> -->\n\n                    <main>\n\n                        <!-- <div class=\"presets\"> -->\n                        <!-- <label>Presets:</label> -->\n                        <!-- <select name=\"Custom\" onchange=\"app.selectPreset(this)\">\n                <option value=\"custom\">Custom</option>\n                <option value=\"rock\">Rock</option>\n                <option value=\"pop\">Pop</option>\n                <option value=\"pop\">Classical</option>\n                <option value=\"pop\">Disco</option>\n              </select>\n              <button class=\"reset\" onclick=\"app.reset()\">Reset</button> -->\n                        <!-- </div> -->\n\n                        <div class=\"sliders\">\n\n                            <svg preserveAspectRatio=\"none\" viewBox=\"0 0 140 100\">\n                                <path d=\"\" class=\"line-shadow\"></path>\n                                <path d=\"\" class=\"line\"></path>\n                            </svg>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"6\" max=\"6\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"37\" max=\"37\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"12\" max=\"12\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"6\" max=\"6\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"22\" max=\"22\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"32\" max=\"32\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                            <div class=\"range-slider\">\n                                <input type=\"range\" orient=\"vertical\" min=\"17\" max=\"17\" />\n\n                                <div class=\"range-slider__bar\"></div>\n\n                                <div class=\"range-slider__thumb\"></div>\n                            </div>\n\n                        </div>\n                    </main>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"about-title about-title-two\">Education & Employment\n        </div>\n\n        <!-- education and employment =========================================================================== -->\n\n        <div class=\"content-container edu-emp-container\">\n\n            <div class=\"titles-container edu-and-emp-title-main\">\n\n                <div class=\"biography-title edu-and-emp-title\">\n                    Education & Employment\n                </div>\n            </div>\n\n            <div class=\"page about-container education-and-employment-container\">\n\n                <img *ngIf=\"aboutImage\" class=\"menu-icon about-image image image-black\" [src]=\"aboutImage\"\n                    alt=\"about-image\" />\n\n                <section id=\"cd-timeline\" class=\"cd-container\">\n\n                    <div class=\"cd-timeline-block\">\n\n                        <div class=\"cd-timeline-img cd-picture\">\n                        </div>\n\n                        <div class=\"cd-timeline-content cd-timeline-content-one\">\n                            <h2>Cti Education Group</h2>\n\n                            <div class=\"timeline-content-info timeline-content-info-role\">\n\n                                <span class=\"timeline-content-info-title\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                    Information Systems Software Development\n                                </span>\n                            </div>\n\n                            <div class=\"timeline-content-info timeline-content-info-date\">\n\n                                <span class=\"timeline-content-info-date\">\n                                    <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                                    Dec 2012\n                                </span>\n                            </div>\n                            <ul class=\"content-skills\">\n                                <li>PLC</li>\n                                <li>Program Design</li>\n                                <li>Software Engineering</li>\n                                <li>Database Design</li>\n                                <li>Database Management</li>\n                                <li>HTML</li>\n                                <li>C#</li>\n                                <li>Linux</li>\n                                <li>Perl</li>\n                                <li>Java</li>\n                            </ul>\n                        </div> <!-- cd-timeline-content -->\n                    </div> <!-- cd-timeline-block -->\n\n                    <div class=\"cd-timeline-block\">\n\n                        <div class=\"cd-timeline-img cd-picture\">\n                        </div>\n\n                        <div class=\"cd-timeline-content cd-timeline-content-one\">\n                            <h2>Cti Education Group</h2>\n\n                            <div class=\"timeline-content-info timeline-content-info-role\">\n\n                                <span class=\"timeline-content-info-title\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                    Project Management\n                                </span>\n                            </div>\n\n                            <div class=\"timeline-content-info timeline-content-info-date\">\n\n                                <span class=\"timeline-content-info-date\">\n                                    <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                                    Jun 2013\n                                </span>\n                            </div>\n                            <ul class=\"content-skills\">\n                                <li>Project Management</li>\n                            </ul>\n                        </div> <!-- cd-timeline-content -->\n                    </div> <!-- cd-timeline-block -->\n\n                    <div class=\"cd-timeline-block\">\n\n                        <div class=\"cd-timeline-img cd-picture\">\n                        </div>\n\n                        <div class=\"cd-timeline-content cd-timeline-content-one\">\n                            <h2>Heriot-Watt University</h2>\n\n                            <div class=\"timeline-content-info timeline-content-info-role\">\n\n                                <span class=\"timeline-content-info-title\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                    BSc Computer Science\n                                </span>\n                            </div>\n\n                            <div class=\"timeline-content-info timeline-content-info-date\">\n\n                                <span class=\"timeline-content-info-date\">\n                                    <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                                    Jun 2014\n                                </span>\n                            </div>\n                            <ul class=\"content-skills\">\n                                <li>Computer Graphics</li>\n                                <li>Software Engineering</li>\n                                <li>Operations Management</li>\n                                <li>Emerging Technologies</li>\n                                <li>Knowledge Management</li>\n                                <li>Interactive Design</li>\n                                <li>Professional Development</li>\n                            </ul>\n                        </div> <!-- cd-timeline-content -->\n                    </div> <!-- cd-timeline-block -->\n\n                    <div class=\"cd-timeline-block\">\n\n                        <div class=\"cd-timeline-img cd-picture\">\n                        </div>\n\n                        <div class=\"cd-timeline-content cd-timeline-content-one\">\n                            <h2>Knowledge Objects Solutions</h2>\n\n                            <div class=\"timeline-content-info timeline-content-info-role\">\n\n                                <span class=\"timeline-content-info-title\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                    Java Developer\n                                </span>\n                            </div>\n\n                            <div class=\"timeline-content-info timeline-content-info-date\">\n\n                                <span class=\"timeline-content-info-date\">\n                                    <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                                    Aug 2014 - Jun 2017\n                                </span>\n                            </div>\n                            <p>Worked alongside a senior developer building a large scale medical aid system (Rt Health\n                                Fund).</p>\n                            <ul class=\"content-skills\">\n                                <li>REST</li>\n                                <li>Spring</li>\n                                <li>EJB</li>\n                                <li>MySQL</li>\n                                <li>AngularJS</li>\n                                <li>HTML</li>\n                                <li>CSS</li>\n                            </ul>\n                        </div> <!-- cd-timeline-content -->\n                    </div> <!-- cd-timeline-block -->\n\n                    <div class=\"cd-timeline-block\">\n\n                        <div class=\"cd-timeline-img cd-picture\">\n                        </div>\n\n                        <div class=\"cd-timeline-content cd-timeline-content-two\">\n                            <h2>Interact RDT</h2>\n\n                            <div class=\"timeline-content-info timeline-content-info-role\">\n\n                                <span class=\"timeline-content-info-title\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                    Full-Stack JS Developer\n                                </span>\n                            </div>\n\n                            <div class=\"timeline-content-info timeline-content-info-date\">\n\n                                <span class=\"timeline-content-info-date\">\n                                    <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n                                    Nov 2017 - Apr 2019\n                                </span>\n                            </div>\n                            <p>Worked alongside the CEO while starting up another software company\n                                where I had to solve problems, design and implement systems from ui/ux design, to the\n                                front and backend architectures\n                                while constantly improving my skills.</p>\n                            <ul class=\"content-skills\">\n                                <li>Express</li>\n                                <li>Angular</li>\n                                <li>Redux</li>\n                                <li>Node</li>\n                                <li>HTML</li>\n                                <li>CSS</li>\n                                <li>JavaScript/TypeScript</li>\n                                <li>Firebase</li>\n                            </ul>\n                        </div> <!-- cd-timeline-content -->\n                    </div> <!-- cd-timeline-block -->\n                </section> <!-- cd-timeline -->\n            </div>\n        </div>\n\n        <div class=\"about-title about-title-two\">\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/about/about.component.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/about/about.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AboutComponent = /** @class */ (function () {
    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();
    function AboutComponent(images, brand) {
        this.images = images;
        this.brand = brand;
        this.localCount = 0;
        this.competenciesArray = [90, 78, 85, 90, 75, 78, 80];
        this.competenciesMapArray = [6, 19, 12, 6, 22, 19, 17];
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.aboutImage = images.icons.about;
        if (this.landingState)
            this.localState = this.landingState;
        if (!String.prototype['format']) {
            String.prototype['format'] = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
            };
        }
    }
    AboutComponent.prototype.ngOnInit = function () {
        // window.addEventListener( 'scroll', this.scroll, true );
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    };
    AboutComponent.prototype.ngOnChanges = function () {
        this.localState = this.landingState;
        this.state.emit(__assign({}, this.localState));
        this.aboutContainer = document.querySelector(".main-container");
        if (this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 1) {
            if (this.aboutContainer)
                this.aboutContainer.classList.add('about-page');
        }
        else {
            if (this.aboutContainer)
                this.aboutContainer.classList.remove('about-page');
        }
        this.localState = this.landingState;
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        this.$svgLine = document.querySelector('svg .line');
        this.$svgLineShadow = document.querySelector('svg .line-shadow');
        this.sliderThumbSize = 20;
        this.sliderHeight = 300;
        this.svgViewBoxHeight = 100;
        this.svgViewBoxThumbLimit = this.sliderThumbSize / 2 * (this.svgViewBoxHeight / this.sliderHeight);
        this.svgViewBoxGraphMax = this.svgViewBoxHeight - this.svgViewBoxThumbLimit;
        this.svgViewBoxGraphMin = this.svgViewBoxThumbLimit;
        this.ranges = {
            range1: null,
            range2: null,
            range3: null,
            range4: null,
            range5: null,
            range6: null,
            range7: null
        };
        // Only the y values changes
        this.points = {
            begin: {
                x: 10,
                y: 0
            },
            point1: {
                x: 10,
                y: 0
            },
            control1: {
                x: 20,
                y: 10
            },
            control2: {
                x: 20,
                y: 0
            },
            point2: {
                x: 30,
                y: 0
            },
            control3: {
                x: 40,
                y: 0
            },
            point3: {
                x: 50,
                y: 0
            },
            control4: {
                x: 60,
                y: 0
            },
            point4: {
                x: 70,
                y: 0
            },
            control5: {
                x: 80,
                y: 0
            },
            point5: {
                x: 90,
                y: 0
            },
            control6: {
                x: 100,
                y: 0
            },
            point6: {
                x: 110,
                y: 0
            },
            control7: {
                x: 120,
                y: 0
            },
            point7: {
                x: 130,
                y: 0
            }
        };
        this.initAndSetupTheSliders();
        this.setTitleContainerHeight();
    };
    AboutComponent.prototype.setTitleContainerHeight = function () {
        var eduEmpContainer = document.querySelector('.edu-emp-container');
        var eduAndEmpTitle = document.querySelector('.edu-and-emp-title-main');
        eduAndEmpTitle['style'].height = eduEmpContainer['offsetHeight'] + 'px';
        var contentContainer = document.querySelector('.content-container');
        var bioTitle = document.querySelector('.bio-title-main');
        bioTitle['style'].height = contentContainer['offsetHeight'] + 'px';
    };
    AboutComponent.prototype.updateSlider = function ($element) {
        if ($element) {
            var rangeIndex = $element.getAttribute('data-slider-index'), range = this.ranges[rangeIndex], value = $element.value;
            if (range === value) {
                return; // No value change, no need to update then
            }
            // Update state
            this.ranges[rangeIndex] = value;
            var pct = void 0;
            var parent_1 = $element.parentElement;
            var $thumb = parent_1.querySelector('.range-slider__thumb');
            var $bar = parent_1.querySelector('.range-slider__bar');
            // pct = value * ( ( this.sliderHeight - this.sliderThumbSize ) / this.sliderHeight );
            switch (this.localCount) {
                case 0:
                    pct = this.competenciesArray[0];
                    break;
                case 1:
                    pct = this.competenciesArray[1];
                    break;
                case 2:
                    pct = this.competenciesArray[2];
                    break;
                case 3:
                    pct = this.competenciesArray[3];
                    break;
                case 4:
                    pct = this.competenciesArray[4];
                    break;
                case 5:
                    pct = this.competenciesArray[5];
                    break;
                case 6:
                    pct = this.competenciesArray[6];
                    break;
            }
            if (this.localCount !== 6) {
                this.localCount++;
            }
            else {
                this.localCount = 0;
            }
            // pct = value * ( ( this.sliderHeight - this.sliderThumbSize ) / this.sliderHeight );
            $thumb.style.bottom = pct + "%";
            // $bar.style.height = `calc(${ pct }% + ${ this.sliderThumbSize / 2 }px)`;
            $bar.style.height = "calc(" + pct + "%)";
            //$thumb.textContent = `${value}%`;
            this.renderSliderGraph();
        }
    };
    AboutComponent.prototype.updatePoints = function () {
        // Convert from percentage to coordinate values
        // Calculate and floor the values
        this.points.point1.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range1 / 100 | 0;
        this.points.point2.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range2 / 100 | 0;
        this.points.point3.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range3 / 100 | 0;
        this.points.point4.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range4 / 100 | 0;
        this.points.point5.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range5 / 100 | 0;
        this.points.point6.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range6 / 100 | 0;
        this.points.point7.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range7 / 100 | 0;
        var max = this.svgViewBoxGraphMax;
        var min = this.svgViewBoxGraphMin;
        this.points.point1.y = this.mapDataRange(this.points.point1.y);
        this.points.point2.y = this.mapDataRange(this.points.point2.y);
        this.points.point3.y = this.mapDataRange(this.points.point3.y);
        this.points.point4.y = this.mapDataRange(this.points.point4.y);
        this.points.point5.y = this.mapDataRange(this.points.point5.y);
        this.points.point6.y = this.mapDataRange(this.points.point6.y);
        this.points.point7.y = this.mapDataRange(this.points.point7.y);
        // Update Y for the other this.points
        this.points.begin.y = this.points.point1.y;
        this.points.control1.y = this.points.point1.y;
        this.points.control2.y = this.points.point2.y;
        this.points.control3.y = this.points.point3.y;
        this.points.control4.y = this.points.point4.y;
        this.points.control5.y = this.points.point5.y;
        this.points.control6.y = this.points.point6.y;
        this.points.control7.y = this.points.point7.y;
    };
    AboutComponent.prototype.mapDataRange = function (value) {
        // stackoverflow.com/a/929107/5707008
        // return (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        return (value - 0) * (this.svgViewBoxGraphMax - this.svgViewBoxGraphMin) / (this.svgViewBoxHeight - 0) + this.svgViewBoxGraphMin;
    };
    AboutComponent.prototype.getInterpolatedLine = function (type) {
        var shadowOffset = 0;
        if (type === 'shadow') {
            shadowOffset = 10; // simple simulation, no fancy shadow algorithm
        }
        return 'M {0},{1} L {2},{3} C {4},{5} {6},{7} {8},{9} S {10} {11}, {12} {13} S {14} {15}, {16} {17} S {18} {19}, {20} {21} S {22} {23}, {24} {25} S {26} {27}, {28} {29}'['format'](
        // M
        // this.points.begin.x, this.points.begin.y,
        this.points.begin.x, this.competenciesMapArray[0], 
        // L
        // this.points.point1.x, this.points.point1.y,
        this.points.point1.x, this.competenciesMapArray[0], 
        // C
        // this.points.control1.x, this.points.control1.y,
        this.points.control1.x, this.competenciesMapArray[0], 
        // this.points.control2.x, this.points.control2.y + shadowOffset,
        // this.points.point2.x, this.points.point2.y + shadowOffset,
        this.points.control2.x, this.competenciesMapArray[1], this.points.point2.x, this.competenciesMapArray[1], 
        // S
        this.points.control3.x, this.competenciesMapArray[2], this.points.point3.x, this.competenciesMapArray[2], 
        // S
        // this.points.control4.x, this.points.control4.y + shadowOffset,
        // this.points.control4.x, this.points.control4.y + shadowOffset,
        this.points.point4.x, this.competenciesMapArray[3], this.points.point4.x, this.competenciesMapArray[3], 
        // S
        // this.points.control5.x, this.points.control5.y,
        // this.points.point5.x, this.points.point5.y,
        this.points.control5.x, this.competenciesMapArray[4], this.points.point5.x, this.competenciesMapArray[4], 
        // S
        // this.points.control6.x, this.points.control6.y + shadowOffset,
        // this.points.point6.x, this.points.point6.y + shadowOffset,
        this.points.control6.x, this.competenciesMapArray[5], this.points.point6.x, this.competenciesMapArray[5], 
        // S
        // this.points.control7.x, this.points.control7.y,
        // this.points.point7.x, this.points.point7.y );
        this.points.control7.x, this.competenciesMapArray[6], this.points.point7.x, this.competenciesMapArray[6]);
    };
    AboutComponent.prototype.formatString = function (values) {
        var args = values;
        return args.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
    ;
    AboutComponent.prototype.reset = function () {
        var _this = this;
        var inputs = [].slice.call(document.querySelectorAll('.sliders input'));
        inputs.forEach(function (input) { return input.value = 50; });
        inputs.forEach(function (input) { return _this.updateSlider(input); });
    };
    AboutComponent.prototype.renderSliderGraph = function () {
        this.updatePoints();
        this.$svgLine.setAttribute('d', this.getInterpolatedLine());
        this.$svgLineShadow.setAttribute('d', this.getInterpolatedLine('shadow'));
    };
    AboutComponent.prototype.selectPreset = function (type) {
        var _this = this;
        // Generate random graph
        var inputs = [].slice.call(document.querySelectorAll('.sliders input'));
        inputs.forEach(function (input) { return input.value = Math.random() * 100 | 0; });
        inputs.forEach(function (input) { return _this.updateSlider(input); });
    };
    AboutComponent.prototype.initAndSetupTheSliders = function () {
        var _this = this;
        var inputs = [].slice.call(document.querySelectorAll('.sliders input'));
        var index = 1;
        inputs.forEach(function (input) { return input.setAttribute('data-slider-index', 'range' + index++); });
        inputs.forEach(function (input) { return input.value = 50; });
        inputs.forEach(function (input) { return _this.updateSlider(input); });
        // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
        inputs.forEach(function (input) { return input.addEventListener('input', function (element) { return _this.updateSlider(input); }); });
        inputs.forEach(function (input) { return input.addEventListener('change', function (element) { return _this.updateSlider(input); }); });
        this.selectPreset('custom');
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AboutComponent.prototype, "state", void 0);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "../../../libs/components/ui/src/lib/containers/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "../../../libs/components/ui/src/lib/containers/about/about.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object, Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/code/code.component.css":
/*!********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/code/code.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toad-fullscreen {\n   position: relative;\n   width   : 95%;\n   overflow: hidden;\n}\n\n.main-container-code {\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   height               : 100%;\n   justify-content      : flex-start;\n   align-items          : center;\n   align-self           : center;\n   width                : 93vw;\n   overflow-y           : scroll;\n   overflow-x           : hidden;\n}\n\n.code-title {\n   position         : relative;\n   display          : flex;\n   align-items      : flex-end;\n   /* margin-left   : calc(5 * var(--fontSize)); */\n   width            : calc(75 * var(--fontSize));\n   height           : 10%;\n   padding-bottom   : 1%;\n   padding-top      : 7%;\n   padding-left     : calc(1.5 * var(--fontSize));\n   font-size        : calc(2.5 * var(--fontSize));\n   border-bottom    : 0.6px var(--line-black) solid;\n   z-index          : 200;\n   margin-bottom    : 3%;\n}\n\n.code-title-two {\n   padding-top: 2%;\n   height     : 5%;\n}\n\n.code-content-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   height               : calc(25 * var(--fontSize));\n}\n\n.titles-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   align-content        : center;\n   justify-content      : center;\n   justify-items        : center;\n   flex-direction       : column;\n   width                : calc(20 * var(--fontSize));\n   height               : inherit;\n   text-align           : center;\n   padding-left         : calc(5 * var(--fontSize));\n   opacity              : 1;\n   font-size            : calc(1.6 * var(--fontSize));\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.biography-title {\n   position        : relative;\n   width           : 100%;\n   background-color: var(--front-black);\n   height          : 100%;\n   /* padding-left : 10%; */\n   padding-top     : 15px;\n   border-radius   : calc(0.6 * var(--fontSize));\n}\n\n.code-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   justify-content      : center;\n   flex-direction       : column;\n   width                : calc(65 * var(--fontSize));\n   height               : calc(30 * var(--fontSize));\n   /* padding-left      : calc(5 * var(--fontSize)); */\n   padding-right        : calc(5 * var(--fontSize));\n   opacity              : 0;\n   z-index              : 0;\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.bio-container {\n   height: inherit;\n}\n\n.code-page .code-container {\n   opacity           : 1;\n   z-index           : 100;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.code-image {\n   position          : fixed;\n   display           : flex;\n   left              : 25%;\n   width             : calc(40 * var(--fontSize));\n   opacity           : 1;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.code-page .code-image {\n   opacity           : 0;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* bio ========================== */\n\n/* .bio-text {\n   margin-left     : calc(3 * var(--fontSize));\n   padding-left    : calc(3 * var(--fontSize));\n   padding-right   : calc(2.5 * var(--fontSize));\n   background-color: var(--front-black);\n   height          : inherit;\n   border-radius   : calc(0.6 * var(--fontSize));\n   z-index         : 100;\n} */\n\n/* -===================================== */\n\n.page {\n   z-index: 0;\n}\n\n.code-page .page {\n   z-index: 100;\n}\n\n/* .code-container {\n   position              : absolute;\n   display               : flex;\n   align-items           : center;\n   justify-content       : center;\n   flex-direction        : column;\n   width                 : 60%;\n   height                : 100%;\n   margin-left           : 17%;\n   opacity               : 0;\n   transition            : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.code-title {\n   left          : 0;\n   position      : relative;\n   display       : flex;\n   width         : calc(50 * var(--fontSize));\n   align-items   : flex-end;\n   height        : 10%;\n   margin-left   : vw;\n   padding-bottom: 1%;\n   padding-top   : 3%;\n   font-size     : calc(2.5 * var(--fontSize));\n   border-bottom : 1px #555555 solid;\n   z-index       : 200;\n   margin-bottom : 3%;\n} */\n\n/* .code-page .code-container {\n   opacity   : 0.8;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n} */\n\n/* .code-image {\n   position  : fixed;\n   display   : flex;\n   left      : 25%;\n   width     : calc(40 * var(--fontSize));\n   opacity   : 1;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.code-page .code-image {\n   opacity   : 0;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n} */\n\n/* graph ========================== */\n\n.code-list {\n   /* animation-name : code; */\n   margin-left       : calc(3 * var(--fontSize));\n   padding-left      : calc(3 * var(--fontSize));\n   padding-right     : calc(2.5 * var(--fontSize));\n   background-color  : var(--front-black);\n   height            : inherit;\n   border-radius     : calc(0.6 * var(--fontSize));\n   z-index           : 100;\n   transition        : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity           : 0;\n}\n\n.code-page .code-list {\n   transition           : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity              : 1;\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   align-items          : center;\n   justify-content      : space-evenly;\n}\n\n/* section {\n   background: #5aa8e8;\n} */\n\nsection article.code-list {\n   width : 95%;\n   height: inherit;\n}\n\narticle div {\n   width: 100%;\n}\n\n/*showcase-container  =========================== */\n\n.showcase-container-one,\n.showcase-container-two {\n   position          : relative;\n   display           : flex;\n   justify-content   : space-evenly;\n   align-items       : center;\n   justify-items     : center;\n   /* left           : -40%; */\n   /* top            : calc(1 * var(--fontSize)); */\n   /* margin-top     : calc(-10 * var(--fontSize)); */\n   /* font-family    : 'Varela Round', */\n   /* sans-serif; */\n   flex-direction       : row;\n   opacity              : 0;\n   transition           : all 0.2s ease-in-out;\n   z-index              : -1;\n}\n\n.showcase-container-one.active,\n.showcase-container-two.active {\n   opacity           : 1;\n   transition        : all 0.2s ease-in-out;\n   z-index           : 500;\n}\n\n.showcase-container-one .showcase-one,\n.showcase-container-two .showcase-one {\n   position              : relative;\n   display               : flex;\n   flex-direction        : column;\n   /* top                : calc(1 * var(--fontSize)); */\n   /* left               : 40%; */\n   width                 : -webkit-max-content;\n   width                 : -moz-max-content;\n   width                 : max-content;\n   padding               : 10px;\n   cursor                : pointer;\n   border: 0px solid white;\n   border-radius         : 10px;\n   background-color      : var(--middle-black);\n   font-size             : calc(1 * var(--fontSize));\n   z-index               : 500;\n   transition            : all 0.2s ease-in-out;\n}\n\n.showcase-container-one .showcase-two,\n.showcase-container-two .showcase-two {\n   position              : relative;\n   display               : flex;\n   flex-direction        : column;\n   /* top                : calc(1 * var(--fontSize)); */\n   /* left               : 40%; */\n   width                 : -webkit-max-content;\n   width                 : -moz-max-content;\n   width                 : max-content;\n   padding               : 10px;\n   cursor                : pointer;\n   border-radius         : 10px;\n   background-color      : var(--middle-black);\n   font-size             : calc(1 * var(--fontSize));\n   z-index               : 500;\n   transition            : all 0.2s ease-in-out;\n}\n\n.showcase-container-one .showcase-one:hover,\n.showcase-container-two .showcase-one:hover,\n.showcase-container-one .showcase-two:hover,\n.showcase-container-two .showcase-two:hover {\n   box-shadow: 0 0 2px 1.5px rgba(255, 255, 255, 0.5);\n   transition            : all 0.25s ease-in-out;\n}\n\n.resume-p.active {\n   opacity           : 0.85 !important;\n   transition        : all 0.2s ease-in-out !important;\n}\n\n.pdf-image {\n   position          : relative;\n   width             : calc(7 * var(--fontSize));\n   top               : 0;\n   left              : 20%;\n   opacity           : 0;\n   z-index           : 0;\n   cursor            : none;\n   transition        : all 0.2s ease-in-out;\n}\n\n.cxfi-old-image,\n.papill-image,\n.dee-dev-image {\n   position          : relative;\n   width             : calc(14.5 * var(--fontSize));\n   top               : 0;\n   opacity           : 0;\n   z-index           : 0;\n   cursor            : none;\n   transition        : all 0.2s ease-in-out;\n}\n\n.active>.pdf-image,\n.active>.detail-info-sub-p>.cxfi-old-image,\n.active>.detail-info-sub-p>.papill-image,\n.active>.detail-info-sub-p>.dee-dev-image {\n   z-index           : 500 !important;\n   opacity           : 1 !important;\n   cursor            : pointer !important;\n   transition        : all 0.2s ease-in-out !important;\n}\n\n.showcase-description {\n   display          : flex;\n   position         : relative;\n   padding-top      : 1.5vh;\n   justify-content  : center;\n   align-items      : center;\n}\n\n.resume-description {\n   display          : flex;\n   position         : relative;\n   padding-top      : 1.5vh;\n   justify-content  : center;\n   align-items      : center;\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n   .titles-container {\n      display: none;\n   }\n\n   .showcase-container-one,\n   .showcase-container-two {\n      flex-direction       : column;\n   }\n\n   .code-content-container {\n      height: calc(38 * var(--fontSize));\n   }\n\n   .main-container-code {\n      width: 100%;\n   }\n\n   .toad-fullscreen {\n      padding-left : calc(1.5 * var(--fontSize));\n      padding-right: calc(1 * var(--fontSize));\n   }\n\n   .code-title {\n      width: 100%;\n   }\n\n   .code-container {\n      width        : 100%;\n      padding-right: calc(3 * var(--fontSize));\n   }\n\n   .showcase-one,\n   .showcase-two\n    {\n      margin-bottom: calc(1 * var(--fontSize));\n   }\n\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvY29kZS9jb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQkFBa0I7R0FDbEIsYUFBYTtHQUNiLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7R0FJM0IsNkJBQTZCO0dBQzdCLDJCQUEyQjtHQUczQixpQ0FBaUM7R0FHakMsNkJBQTZCO0dBRTdCLDZCQUE2QjtHQUM3QiwyQkFBMkI7R0FDM0IsNkJBQTZCO0dBQzdCLDZCQUE2QjtBQUNoQzs7QUFFQTtHQUNHLDJCQUEyQjtHQUczQix1QkFBdUI7R0FHdkIsMkJBQTJCO0dBQzNCLCtDQUErQztHQUMvQyw2Q0FBNkM7R0FDN0Msc0JBQXNCO0dBQ3RCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsOENBQThDO0dBQzlDLDhDQUE4QztHQUM5QyxnREFBZ0Q7R0FDaEQsc0JBQXNCO0dBQ3RCLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLGVBQWU7R0FDZixlQUFlO0FBQ2xCOztBQUVBO0dBQ0csK0JBQStCO0dBRy9CLDJCQUEyQjtHQUkzQiwwQkFBMEI7R0FDMUIsaURBQWlEO0FBQ3BEOztBQUVBO0dBQ0csK0JBQStCO0dBRy9CLDJCQUEyQjtHQUczQiw2QkFBNkI7R0FFN0IsNkJBQTZCO0dBRzdCLDZCQUE2QjtHQUM3Qiw2QkFBNkI7R0FJN0IsNkJBQTZCO0dBQzdCLGlEQUFpRDtHQUNqRCw4QkFBOEI7R0FDOUIsNkJBQTZCO0dBQzdCLGdEQUFnRDtHQUNoRCx3QkFBd0I7R0FDeEIsa0RBQWtEO0dBRWxELG9GQUFvRjtBQUN2Rjs7QUFFQTtHQUNHLDBCQUEwQjtHQUMxQixzQkFBc0I7R0FDdEIsb0NBQW9DO0dBQ3BDLHNCQUFzQjtHQUN0Qix3QkFBd0I7R0FDeEIsc0JBQXNCO0dBQ3RCLDZDQUE2QztBQUNoRDs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7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QUFFQTs7OztHQUlHLGtDQUFrQztHQUNsQyxnQ0FBZ0M7R0FDaEMsc0NBQXNDO0dBRXRDLG1EQUFtRDtBQUN0RDs7QUFFQTtHQUdHLHVCQUF1QjtHQUN2QiwyQkFBMkI7R0FDM0Isd0JBQXdCO0dBR3hCLHlCQUF5QjtHQUd6Qix5QkFBeUI7QUFDNUI7O0FBRUE7R0FHRyx1QkFBdUI7R0FDdkIsMkJBQTJCO0dBQzNCLHdCQUF3QjtHQUd4Qix5QkFBeUI7R0FHekIseUJBQXlCO0FBQzVCOztBQUVBLG9EQUFvRDs7QUFFcEQ7R0FDRztNQUNHLGFBQWE7R0FDaEI7O0dBRUE7O01BS0csNkJBQTZCO0dBQ2hDOztHQUVBO01BQ0csa0NBQWtDO0dBQ3JDOztHQUVBO01BQ0csV0FBVztHQUNkOztHQUVBO01BQ0csMENBQTBDO01BQzFDLHdDQUF3QztHQUMzQzs7R0FFQTtNQUNHLFdBQVc7R0FDZDs7R0FFQTtNQUNHLG1CQUFtQjtNQUNuQix3Q0FBd0M7R0FDM0M7O0dBRUE7OztNQUdHLHdDQUF3QztHQUMzQzs7O0FBR0giLCJmaWxlIjoibGlicy9jb21wb25lbnRzL3VpL3NyYy9saWIvY29udGFpbmVycy9jb2RlL2NvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2FkLWZ1bGxzY3JlZW4ge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgd2lkdGggICA6IDk1JTtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRhaW5lci1jb2RlIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IDEwMCU7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IHN0YXJ0O1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBzdGFydDtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogZmxleC1zdGFydDtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWl0ZW0tYWxpZ24gIDogY2VudGVyO1xuICAgYWxpZ24tc2VsZiAgICAgICAgICAgOiBjZW50ZXI7XG4gICB3aWR0aCAgICAgICAgICAgICAgICA6IDkzdnc7XG4gICBvdmVyZmxvdy15ICAgICAgICAgICA6IHNjcm9sbDtcbiAgIG92ZXJmbG93LXggICAgICAgICAgIDogaGlkZGVuO1xufVxuXG4uY29kZS10aXRsZSB7XG4gICBwb3NpdGlvbiAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogZW5kO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGZsZXgtZW5kO1xuICAgLyogbWFyZ2luLWxlZnQgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICB3aWR0aCAgICAgICAgICAgIDogY2FsYyg3NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgIDogMTAlO1xuICAgcGFkZGluZy1ib3R0b20gICA6IDElO1xuICAgcGFkZGluZy10b3AgICAgICA6IDclO1xuICAgcGFkZGluZy1sZWZ0ICAgICA6IGNhbGMoMS41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXItYm90dG9tICAgIDogMC42cHggdmFyKC0tbGluZS1ibGFjaykgc29saWQ7XG4gICB6LWluZGV4ICAgICAgICAgIDogMjAwO1xuICAgbWFyZ2luLWJvdHRvbSAgICA6IDMlO1xufVxuXG4uY29kZS10aXRsZS10d28ge1xuICAgcGFkZGluZy10b3A6IDIlO1xuICAgaGVpZ2h0ICAgICA6IDUlO1xufVxuXG4uY29kZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IGhvcml6b250YWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogcm93O1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiByb3c7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IGNhbGMoMjUgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4udGl0bGVzLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1saW5lLXBhY2sgICA6IGNlbnRlcjtcbiAgIGFsaWduLWNvbnRlbnQgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1pdGVtcyAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiBjYWxjKDIwICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgIHRleHQtYWxpZ24gICAgICAgICAgIDogY2VudGVyO1xuICAgcGFkZGluZy1sZWZ0ICAgICAgICAgOiBjYWxjKDUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgICAgICAgICAgICAgOiAxO1xuICAgZm9udC1zaXplICAgICAgICAgICAgOiBjYWxjKDEuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5iaW9ncmFwaHktdGl0bGUge1xuICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XG4gICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgIC8qIHBhZGRpbmctbGVmdCA6IDEwJTsgKi9cbiAgIHBhZGRpbmctdG9wICAgICA6IDE1cHg7XG4gICBib3JkZXItcmFkaXVzICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5jb2RlLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiBjYWxjKDY1ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogY2FsYygzMCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAvKiBwYWRkaW5nLWxlZnQgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICBwYWRkaW5nLXJpZ2h0ICAgICAgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvcGFjaXR5ICAgICAgICAgICAgICA6IDA7XG4gICB6LWluZGV4ICAgICAgICAgICAgICA6IDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5iaW8tY29udGFpbmVyIHtcbiAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmNvZGUtcGFnZSAuY29kZS1jb250YWluZXIge1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAxO1xuICAgei1pbmRleCAgICAgICAgICAgOiAxMDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb2RlLWltYWdlIHtcbiAgIHBvc2l0aW9uICAgICAgICAgIDogZml4ZWQ7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogZmxleDtcbiAgIGxlZnQgICAgICAgICAgICAgIDogMjUlO1xuICAgd2lkdGggICAgICAgICAgICAgOiBjYWxjKDQwICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLmNvZGUtcGFnZSAuY29kZS1pbWFnZSB7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIGJpbyA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogLmJpby10ZXh0IHtcbiAgIG1hcmdpbi1sZWZ0ICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLWxlZnQgICAgOiBjYWxjKDMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgcGFkZGluZy1yaWdodCAgIDogY2FsYygyLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgIDogaW5oZXJpdDtcbiAgIGJvcmRlci1yYWRpdXMgICA6IGNhbGMoMC42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHotaW5kZXggICAgICAgICA6IDEwMDtcbn0gKi9cblxuLyogLT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnBhZ2Uge1xuICAgei1pbmRleDogMDtcbn1cblxuLmNvZGUtcGFnZSAucGFnZSB7XG4gICB6LWluZGV4OiAxMDA7XG59XG5cbi8qIC5jb2RlLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgICA6IGZsZXg7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgICAgOiBjZW50ZXI7XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICAgOiBjb2x1bW47XG4gICB3aWR0aCAgICAgICAgICAgICAgICAgOiA2MCU7XG4gICBoZWlnaHQgICAgICAgICAgICAgICAgOiAxMDAlO1xuICAgbWFyZ2luLWxlZnQgICAgICAgICAgIDogMTclO1xuICAgb3BhY2l0eSAgICAgICAgICAgICAgIDogMDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb2RlLXRpdGxlIHtcbiAgIGxlZnQgICAgICAgICAgOiAwO1xuICAgcG9zaXRpb24gICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICA6IGZsZXg7XG4gICB3aWR0aCAgICAgICAgIDogY2FsYyg1MCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBhbGlnbi1pdGVtcyAgIDogZmxleC1lbmQ7XG4gICBoZWlnaHQgICAgICAgIDogMTAlO1xuICAgbWFyZ2luLWxlZnQgICA6IHZ3O1xuICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgcGFkZGluZy10b3AgICA6IDMlO1xuICAgZm9udC1zaXplICAgICA6IGNhbGMoMi41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGJvcmRlci1ib3R0b20gOiAxcHggIzU1NTU1NSBzb2xpZDtcbiAgIHotaW5kZXggICAgICAgOiAyMDA7XG4gICBtYXJnaW4tYm90dG9tIDogMyU7XG59ICovXG5cbi8qIC5jb2RlLXBhZ2UgLmNvZGUtY29udGFpbmVyIHtcbiAgIG9wYWNpdHkgICA6IDAuODtcbiAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59ICovXG5cbi8qIC5jb2RlLWltYWdlIHtcbiAgIHBvc2l0aW9uICA6IGZpeGVkO1xuICAgZGlzcGxheSAgIDogZmxleDtcbiAgIGxlZnQgICAgICA6IDI1JTtcbiAgIHdpZHRoICAgICA6IGNhbGMoNDAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgIDogMTtcbiAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb2RlLXBhZ2UgLmNvZGUtaW1hZ2Uge1xuICAgb3BhY2l0eSAgIDogMDtcbiAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59ICovXG5cbi8qIGdyYXBoID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jb2RlLWxpc3Qge1xuICAgLyogYW5pbWF0aW9uLW5hbWUgOiBjb2RlOyAqL1xuICAgbWFyZ2luLWxlZnQgICAgICAgOiBjYWxjKDMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgcGFkZGluZy1sZWZ0ICAgICAgOiBjYWxjKDMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgcGFkZGluZy1yaWdodCAgICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBiYWNrZ3JvdW5kLWNvbG9yICA6IHZhcigtLWZyb250LWJsYWNrKTtcbiAgIGhlaWdodCAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgIGJvcmRlci1yYWRpdXMgICAgIDogY2FsYygwLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgei1pbmRleCAgICAgICAgICAgOiAxMDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAwO1xufVxuXG4uY29kZS1wYWdlIC5jb2RlLWxpc3Qge1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMTtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IHNwYWNlLWV2ZW5seTtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogc3BhY2UtZXZlbmx5O1xuICAganVzdGlmeS1jb250ZW50ICAgICAgOiBzcGFjZS1ldmVubHk7XG59XG5cbi8qIHNlY3Rpb24ge1xuICAgYmFja2dyb3VuZDogIzVhYThlODtcbn0gKi9cblxuc2VjdGlvbiBhcnRpY2xlLmNvZGUtbGlzdCB7XG4gICB3aWR0aCA6IDk1JTtcbiAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuYXJ0aWNsZSBkaXYge1xuICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLypzaG93Y2FzZS1jb250YWluZXIgID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uc2hvd2Nhc2UtY29udGFpbmVyLW9uZSxcbi5zaG93Y2FzZS1jb250YWluZXItdHdvIHtcbiAgIHBvc2l0aW9uICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LXBhY2sgIDogc3BhY2UtZXZlbmx5O1xuICAgLW1zLWZsZXgtcGFjayAgICAgOiBzcGFjZS1ldmVubHk7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICA6IHNwYWNlLWV2ZW5seTtcbiAgIC13ZWJraXQtYm94LWFsaWduIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktaXRlbXMgICAgIDogY2VudGVyO1xuICAgLyogbGVmdCAgICAgICAgICAgOiAtNDAlOyAqL1xuICAgLyogdG9wICAgICAgICAgICAgOiBjYWxjKDEgKiB2YXIoLS1mb250U2l6ZSkpOyAqL1xuICAgLyogbWFyZ2luLXRvcCAgICAgOiBjYWxjKC0xMCAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICAvKiBmb250LWZhbWlseSAgICA6ICdWYXJlbGEgUm91bmQnLCAqL1xuICAgLyogc2Fucy1zZXJpZjsgKi9cbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogaG9yaXpvbnRhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiByb3c7XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IHJvdztcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbiAgIDogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgei1pbmRleCAgICAgICAgICAgICAgOiAtMTtcbn1cblxuLnNob3djYXNlLWNvbnRhaW5lci1vbmUuYWN0aXZlLFxuLnNob3djYXNlLWNvbnRhaW5lci10d28uYWN0aXZlIHtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgei1pbmRleCAgICAgICAgICAgOiA1MDA7XG59XG5cbi5zaG93Y2FzZS1jb250YWluZXItb25lIC5zaG93Y2FzZS1vbmUsXG4uc2hvd2Nhc2UtY29udGFpbmVyLXR3byAuc2hvd2Nhc2Utb25lIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbiA6IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgICA6IGNvbHVtbjtcbiAgIC8qIHRvcCAgICAgICAgICAgICAgICA6IGNhbGMoMSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICAvKiBsZWZ0ICAgICAgICAgICAgICAgOiA0MCU7ICovXG4gICB3aWR0aCAgICAgICAgICAgICAgICAgOiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgd2lkdGggICAgICAgICAgICAgICAgIDogLW1vei1tYXgtY29udGVudDtcbiAgIHdpZHRoICAgICAgICAgICAgICAgICA6IG1heC1jb250ZW50O1xuICAgcGFkZGluZyAgICAgICAgICAgICAgIDogMTBweDtcbiAgIGN1cnNvciAgICAgICAgICAgICAgICA6IHBvaW50ZXI7XG4gICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcbiAgIGJvcmRlci1yYWRpdXMgICAgICAgICA6IDEwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yICAgICAgOiB2YXIoLS1taWRkbGUtYmxhY2spO1xuICAgZm9udC1zaXplICAgICAgICAgICAgIDogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHotaW5kZXggICAgICAgICAgICAgICA6IDUwMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbiAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgdHJhbnNpdGlvbiAgICAgICAgICAgIDogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaG93Y2FzZS1jb250YWluZXItb25lIC5zaG93Y2FzZS10d28sXG4uc2hvd2Nhc2UtY29udGFpbmVyLXR3byAuc2hvd2Nhc2UtdHdvIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbiA6IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgICA6IGNvbHVtbjtcbiAgIC8qIHRvcCAgICAgICAgICAgICAgICA6IGNhbGMoMSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICAvKiBsZWZ0ICAgICAgICAgICAgICAgOiA0MCU7ICovXG4gICB3aWR0aCAgICAgICAgICAgICAgICAgOiAtd2Via2l0LW1heC1jb250ZW50O1xuICAgd2lkdGggICAgICAgICAgICAgICAgIDogLW1vei1tYXgtY29udGVudDtcbiAgIHdpZHRoICAgICAgICAgICAgICAgICA6IG1heC1jb250ZW50O1xuICAgcGFkZGluZyAgICAgICAgICAgICAgIDogMTBweDtcbiAgIGN1cnNvciAgICAgICAgICAgICAgICA6IHBvaW50ZXI7XG4gICBib3JkZXItcmFkaXVzICAgICAgICAgOiAxMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvciAgICAgIDogdmFyKC0tbWlkZGxlLWJsYWNrKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgICAgICA6IGNhbGMoMSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB6LWluZGV4ICAgICAgICAgICAgICAgOiA1MDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICAgOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvd2Nhc2UtY29udGFpbmVyLW9uZSAuc2hvd2Nhc2Utb25lOmhvdmVyLFxuLnNob3djYXNlLWNvbnRhaW5lci10d28gLnNob3djYXNlLW9uZTpob3Zlcixcbi5zaG93Y2FzZS1jb250YWluZXItb25lIC5zaG93Y2FzZS10d286aG92ZXIsXG4uc2hvd2Nhc2UtY29udGFpbmVyLXR3byAuc2hvd2Nhc2UtdHdvOmhvdmVyIHtcbiAgIGJveC1zaGFkb3c6IDAgMCAycHggMS41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgIDogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICAgdHJhbnNpdGlvbiAgICAgICAgICAgIDogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmVzdW1lLXAuYWN0aXZlIHtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMC44NSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC4ycyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG4ucGRmLWltYWdlIHtcbiAgIHBvc2l0aW9uICAgICAgICAgIDogcmVsYXRpdmU7XG4gICB3aWR0aCAgICAgICAgICAgICA6IGNhbGMoNyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB0b3AgICAgICAgICAgICAgICA6IDA7XG4gICBsZWZ0ICAgICAgICAgICAgICA6IDIwJTtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMDtcbiAgIHotaW5kZXggICAgICAgICAgIDogMDtcbiAgIGN1cnNvciAgICAgICAgICAgIDogbm9uZTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY3hmaS1vbGQtaW1hZ2UsXG4ucGFwaWxsLWltYWdlLFxuLmRlZS1kZXYtaW1hZ2Uge1xuICAgcG9zaXRpb24gICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIHdpZHRoICAgICAgICAgICAgIDogY2FsYygxNC41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHRvcCAgICAgICAgICAgICAgIDogMDtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMDtcbiAgIHotaW5kZXggICAgICAgICAgIDogMDtcbiAgIGN1cnNvciAgICAgICAgICAgIDogbm9uZTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWN0aXZlPi5wZGYtaW1hZ2UsXG4uYWN0aXZlPi5kZXRhaWwtaW5mby1zdWItcD4uY3hmaS1vbGQtaW1hZ2UsXG4uYWN0aXZlPi5kZXRhaWwtaW5mby1zdWItcD4ucGFwaWxsLWltYWdlLFxuLmFjdGl2ZT4uZGV0YWlsLWluZm8tc3ViLXA+LmRlZS1kZXYtaW1hZ2Uge1xuICAgei1pbmRleCAgICAgICAgICAgOiA1MDAgIWltcG9ydGFudDtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMSAhaW1wb3J0YW50O1xuICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93Y2FzZS1kZXNjcmlwdGlvbiB7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIHBvc2l0aW9uICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIHBhZGRpbmctdG9wICAgICAgOiAxLjV2aDtcbiAgIC13ZWJraXQtYm94LXBhY2sgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcbn1cblxuLnJlc3VtZS1kZXNjcmlwdGlvbiB7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIHBvc2l0aW9uICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIHBhZGRpbmctdG9wICAgICAgOiAxLjV2aDtcbiAgIC13ZWJraXQtYm94LXBhY2sgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcbn1cblxuLyogcG9ydHJhaXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgIC50aXRsZXMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG5cbiAgIC5zaG93Y2FzZS1jb250YWluZXItb25lLFxuICAgLnNob3djYXNlLWNvbnRhaW5lci10d28ge1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIH1cblxuICAgLmNvZGUtY29udGVudC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDM4ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIH1cblxuICAgLm1haW4tY29udGFpbmVyLWNvZGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIC50b2FkLWZ1bGxzY3JlZW4ge1xuICAgICAgcGFkZGluZy1sZWZ0IDogY2FsYygxLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgIH1cblxuICAgLmNvZGUtdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIC5jb2RlLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aCAgICAgICAgOiAxMDAlO1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzICogdmFyKC0tZm9udFNpemUpKTtcbiAgIH1cblxuICAgLnNob3djYXNlLW9uZSxcbiAgIC5zaG93Y2FzZS10d29cbiAgICB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgfVxuXG5cbn1cblxuIl19 */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/code/code.component.html":
/*!*********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/code/code.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"code\" class=\"toad-fullscreen\">\n\n    <div class=\"main-container-code\">\n\n        <div class=\"code-title\">\n            Code Laboratory\n        </div>\n\n        <div class=\"code-content-container\">\n\n            <div class=\"titles-container bio-title-main\">\n\n                <div class=\"biography-title\">\n                    Showcase\n                </div>\n            </div>\n\n            <div class=\"page code-container bio-container\">\n\n                <img *ngIf=\"codeImage\" class=\"menu-icon code-image image image-black\" [src]=\"codeImage\"\n                    alt=\"code-image\" />\n                <article class=\"code-list\">\n\n                <div class=\"showcase-container-one\">\n\n                    <div class='detail-info-sub-p showcase-one' (click)=\"onNavigate('.showcase-one','showcase-one')\">\n                        <img *ngIf=\"cxfiOldImage\" class=\"cxfi-old-image image\" [src]=\"cxfiOldImage\" alt=\"cxfi-old-image\" />\n\n                        <div class='showcase-description'>cxfi</div>\n                    </div>\n\n                    <div class='detail-info-sub-p showcase-two' (click)=\"onNavigate('.showcase-two','showcase-two')\">\n                        <img *ngIf=\"papillImage\" class=\"papill-image image\" [src]=\"papillImage\" alt=\"papill-image\" />\n\n                        <div class='showcase-description'>papill</div>\n                    </div>\n                </div>\n                <div class=\"showcase-container-two\">\n\n                    <div class='detail-info-sub-p showcase-one' (click)=\"onNavigate('.showcase-one','showcase-three')\">\n                        <img *ngIf=\"deeDevImage\" class=\"dee-dev-image image\" [src]=\"deeDevImage\" alt=\"deeDev-image\" />\n\n                        <div class='showcase-description'>git - dee-dev (portfolio code)</div>\n                    </div>\n                </div>\n                </article>\n\n            </div>\n        </div>\n\n        <div class=\"code-title code-title-two\">\n        </div>\n    </div>\n</section>\n<!--\n<section id=\"code\" class=\"toad-fullscreen\">\n\n    <div class=\"page code-container\">\n\n        <div class=\"code-title\">\n            My code\n        </div>\n\n\n    </div>\n</section> -->\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/code/code.component.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/code/code.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CodeComponent = /** @class */ (function () {
    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();
    function CodeComponent(_store, images, brand) {
        this._store = _store;
        this.images = images;
        this.brand = brand;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.codeImage = images.icons.showcase;
        this.pdfImage = images.icons.pdf;
        this.cxfiOldImage = images.showcase.cxfiOld;
        this.papillImage = images.showcase.papill;
        this.deeDevImage = images.showcase.deeDev;
        if (this.landingState)
            this.localState = this.landingState;
    }
    CodeComponent.prototype.ngOnInit = function () {
        // window.addEventListener( 'scroll', this.scroll, true );
    };
    CodeComponent.prototype.ngOnDestroy = function () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    };
    CodeComponent.prototype.ngOnChanges = function () {
        this.localState = this.landingState;
        this.state.emit(__assign({}, this.localState));
        this.codeContainer = document.querySelector(".main-container-code");
        this.showcaseContainerOne = document.querySelector('.showcase-container-one');
        this.showcaseContainerTwo = document.querySelector('.showcase-container-two');
        if (this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 3) {
            if (this.codeContainer)
                this.codeContainer.classList.add('code-page');
            if (this.showcaseContainerOne)
                this.showcaseContainerOne.classList.add('active');
            if (this.showcaseContainerTwo)
                this.showcaseContainerTwo.classList.add('active');
        }
        else {
            if (this.codeContainer)
                this.codeContainer.classList.remove('code-page');
            if (this.showcaseContainerOne)
                this.showcaseContainerOne.classList.remove('active');
            if (this.showcaseContainerTwo)
                this.showcaseContainerTwo.classList.remove('active');
        }
        this.localState = this.landingState;
    };
    CodeComponent.prototype.ngAfterViewInit = function () {
        this.resume = document.querySelector('.resume-p');
        this.showcaseContainerOne = document.querySelector('.showcase-container-one');
        this.showcaseContainerTwo = document.querySelector('.showcase-container-two');
    };
    CodeComponent.prototype.onNavigate = function (className, path) {
        var _this = this;
        var buttonElement = document.querySelector(className);
        buttonElement.classList.add('clicked');
        setTimeout(function () {
            buttonElement.classList.remove('clicked');
        }, 400);
        setTimeout(function () {
            path === 'resume-p'
                ? _this._store.dispatch(new _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].OpenUrl("https://drive.google.com/open?id=1xqgH1AeK1g9sFunbOq0bX8aU4uaZ2oYp"))
                : path === 'showcase-one'
                    ? _this._store.dispatch(new _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].OpenUrl("https://cxfi-old.firebaseapp.com"))
                    : path === 'showcase-two'
                        ? _this._store.dispatch(new _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].OpenUrl("https://papill.firebaseapp.com"))
                        : path === 'showcase-three'
                            ? _this._store.dispatch(new _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].OpenUrl("https://github.com/Dewald15/dee-dev"))
                            : path === 'demo'
                                ? console.log('demo action required')
                                : console.log('error in list-items-detail.component.ts: onNavigate()');
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CodeComponent.prototype, "state", void 0);
    CodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'code-lab',
            template: __webpack_require__(/*! ./code.component.html */ "../../../libs/components/ui/src/lib/containers/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.css */ "../../../libs/components/ui/src/lib/containers/code/code.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], Object, Object])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/contact/contact.component.css":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/contact/contact.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toad-fullscreen {\n   position: relative;\n   width   : 95%;\n   overflow: hidden;\n}\n\n.main-container-contact {\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   height               : 100%;\n   justify-content      : flex-start;\n   align-items          : center;\n   align-self           : center;\n   width                : 93vw;\n   overflow-y           : scroll;\n   overflow-x           : hidden;\n}\n\n.contact-title {\n   position         : relative;\n   display          : flex;\n   align-items      : flex-end;\n   /* margin-left   : calc(5 * var(--fontSize)); */\n   width            : calc(75 * var(--fontSize));\n   height           : 10%;\n   padding-bottom   : 1%;\n   padding-top      : 7%;\n   padding-left     : calc(1.5 * var(--fontSize));\n   font-size        : calc(2.5 * var(--fontSize));\n   border-bottom    : 0.6px var(--line-black) solid;\n   z-index          : 200;\n   margin-bottom    : 3%;\n}\n\n.contact-title-two {\n   padding-top: 2%;\n   height     : 5%;\n}\n\n.contact-content-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   height               : -webkit-max-content;\n   height               : -moz-max-content;\n   height               : max-content;\n}\n\n.contact-form-title-main {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   align-content        : center;\n   justify-content      : center;\n   justify-items        : center;\n   flex-direction       : column;\n   width                : calc(20 * var(--fontSize));\n   /* height            : inherit; */\n   text-align           : center;\n   padding-left         : calc(5 * var(--fontSize));\n   opacity              : 1;\n   font-size            : calc(1.6 * var(--fontSize));\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.contact-form-title {\n   position        : relative;\n   width           : 100%;\n   background-color: var(--front-black);\n   height          : 100%;\n   /* padding-left : 10%; */\n   padding-top     : 15px;\n   border-radius   : calc(0.6 * var(--fontSize));\n}\n\n.contact-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   justify-content      : center;\n   flex-direction       : column;\n   width                : calc(65 * var(--fontSize));\n   height               : calc(30 * var(--fontSize));\n   /* padding-left      : calc(5 * var(--fontSize)); */\n   padding-right        : calc(5 * var(--fontSize));\n   opacity              : 0;\n   z-index              : 0;\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.bio-container {\n   height: inherit;\n}\n\n.contact-page .contact-container {\n   opacity           : 1;\n   z-index           : 100;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.contact-image {\n   position          : fixed;\n   display           : flex;\n   left              : 25%;\n   width             : calc(40 * var(--fontSize));\n   opacity           : 1;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.contact-page .contact-image {\n   opacity           : 0;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.page {\n   z-index: 0;\n}\n\n.contact-page .page {\n   z-index: 100;\n}\n\n.contact-list {\n   margin-left       : calc(3 * var(--fontSize));\n   padding-left      : calc(3 * var(--fontSize));\n   padding-top       : calc(1.5 * var(--fontSize));\n   background-color  : var(--front-black);\n   height            : inherit;\n   border-radius     : calc(0.6 * var(--fontSize));\n   z-index           : 100;\n   transition        : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity           : 0;\n}\n\n.contact-page .contact-list {\n   transition           : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity              : 1;\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   align-items          : center;\n   justify-content      : space-evenly;\n}\n\n/* section {\n   background: #5aa8e8;\n} */\n\nsection article.contact-list {\n   width : 95%;\n   height: inherit;\n}\n\narticle div {\n   width: 90%;\n}\n\n/*contact-form-container  =========================== */\n\n.contactForm {\n   border-radius     : 4px;\n   box-sizing        : border-box;\n   margin            : auto;\n   margin            : calc(1 * var(--fontSize));\n   /* max-width      : 450px; */\n   overflow          : hidden;\n}\n\n/* .contactForm .formHeader {\n   background   : #54428E;\n   border-bottom: 4px solid #463776;\n   color        : #fff;\n   text-align   : center;\n   overflow     : hidden;\n   transition   : all 0.5s ease;\n}\n\n.contactForm .formHeader h1 {\n   line-height: 1em;\n} */\n\n.contactForm .formBody {\n   /* background: #fff; */\n   position     : relative;\n   padding      : calc(1.25 * var(--fontSize)) calc(0.75 * var(--fontSize));\n   overflow     : hidden;\n   /*TRANSITION*/\n   transition        : all 0.2s ease;\n   /* height         : calc(22 * var(--fontSize));\n   max-height        : calc(25.8 * var(--fontSize)) !important; */\n}\n\n.contactForm .inputContainer {\n   border          : 1px solid var(--black);\n   background-color: var(--middle-black);\n   border-radius   : 3px;\n   position        : relative;\n   margin-bottom   : calc(0.3 * var(--fontSize));\n   overflow        : hidden;\n   width           : 100%;\n}\n\n/* .fa-fw {\n   color    : white;\n   font-size: calc(1 * var(--fontSize));\n}\n\ninput, textarea {\n   background-color: var(--middle-black);\n   color           : white;\n} */\n\n.contactForm .inputContainer .message {\n   color             : #FF5C5C;\n   background        : #ffb8b8;\n   position          : absolute;\n   top               : 0;\n   bottom            : 0;\n   width             : 0;\n   margin            : 0;\n   line-height       : 2.5em;\n   text-align        : center;\n   overflow          : hidden;\n   transition        : all 0.1s ease;\n}\n\n.contactForm .inputContainer label,\n.contactForm .inputContainer input,\n.contactForm .inputContainer textarea {\n   box-sizing        : border-box;\n   padding           : calc(0.6 * var(--fontSize));\n   font-size         : 14px;\n   line-height       : 1em;\n   border            : none;\n   font              : inherit;\n}\n\n.fa-fw {\n   font-size: calc(1.3 * var(--fontSize));\n}\n\n.contactForm .inputContainer label {\n   display         : inline-block;\n   font-size       : .7em;\n   background-color: var(--middle-black);\n   color           : rgb(255, 255, 255);\n   line-height     : 1.75em;\n   border-right    : 1px solid var(--black);\n   /*POSITION*/\n   position          : absolute;\n   left              : 0;\n   top               : 0;\n   bottom            : 0;\n   transition        : all 0.5s ease;\n}\n\n.contactForm .inputContainer textarea,\n.contactForm .inputContainer input {\n   width             : 100%;\n   max-width         : 100%;\n   background-color  : var(--middle-black);\n   color             : white;\n   outline           : unset;\n   transition        : all 0.1s ease;\n}\n\n.contactForm .inputContainer textarea:hover,\n.contactForm .inputContainer input:hover {\n   background-color  : var(--front-black);\n   transition        : all 0.5s ease;\n}\n\n.contactForm .inputContainer textarea {\n   margin-bottom: calc(-0.3 * var(--fontSize));\n   resize       : none;\n}\n\n.contactForm .inputContainer input {\n   padding-left: calc(3.8 * var(--fontSize));\n}\n\n/* .contactForm .submitBtn {\n   background   : #1e62ff;\n   color        : #fff;\n   border       : none;\n   border-radius: 3px;\n   font         : inherit;\n   padding      : calc(0.6 * var(--fontSize)) calc(1 * var(--fontSize));\n   margin-top   : calc(0.6 * var(--fontSize));\n   float        : right;\n   width        : auto;\n   cursor       : pointer;\n   transition   : background 0.5s ease;\n} */\n\n/* .contactForm .submitBtn:hover {\n   background: #598bff;\n} */\n\n.contactForm.success {\n   overflow: hidden;\n}\n\n.contactForm.success .formHeader {\n   background  : #0A8754;\n   border-color: #087146;\n   font-size   : .75em;\n}\n\n.contactForm.success .formBody {\n   height        : 0;\n   padding-top   : 0;\n   padding-bottom: 0;\n}\n\n.contactForm.success .formBody form {\n   /*TRANSITION*/\n   transition        : opacity 0.5s ease;\n   opacity           : 0;\n}\n\n.contactForm .inputContainer.success {\n   border-color: var(--green);\n}\n\n.contactForm .inputContainer.success:after {\n   font    : 1.25em/2em FontAwesome;\n   color   : var(--green);\n   position: absolute;\n   top     : 0;\n   right   : calc(0.6 * var(--fontSize));\n   content : \"\\f00c\";\n}\n\n.contactForm .inputContainer.success label {\n   background  : var(--green);\n   border-color: var(--green);\n}\n\n.contactForm .inputContainer.success input,\n.contactForm .inputContainer.success textarea {\n   color: #0A8754;\n}\n\n.contactForm .inputContainer.error {\n   border-color: #e85454;\n}\n\n.contactForm .inputContainer.error .message {\n   width: 100%;\n}\n\n.contactForm .inputContainer.error:after {\n   font    : 1.25em/2em FontAwesome;\n   color   : #FF5C5C;\n   position: absolute;\n   top     : 0;\n   right   : calc(0.6 * var(--fontSize));\n   content : \"\\f00d\";\n}\n\n.contactForm .inputContainer.error label {\n   background  : #FF5C5C;\n   border-color: #e85454;\n}\n\n.contactForm .inputContainer.error input,\n.contactForm .inputContainer.error textarea {\n   color: #FF5C5C;\n}\n\n/* send button ======================================= */\n\n.wrap {\n   position         : relative;\n   display          : flex;\n   align-items      : center;\n   justify-content  : center;\n   margin           : auto;\n   margin-top       : 2%;\n   width            : 191px;\n   text-align       : center;\n}\n\n.wrap input {\n   display           : block;\n   padding           : 0;\n   width             : calc(7 * var(--fontSize));\n   height            : calc(3 * var(--fontSize));\n   background        : var(--blue);\n   margin            : auto;\n   border            : 1px solid var(--blue);\n   font-size         : calc(1.1 * var(--fontSize));\n   color             : white;\n   cursor            : pointer;\n   outline           : none;\n   text-align        : center;\n   box-sizing        : border-box;\n   border-radius     : 5px;\n   transition        : all 0.4s ease;\n}\n\n/* .wrap .filled {\n   background : #1ECD97;\n   color      : white;\n   line-height: 60px;\n   font-size  : 160%;\n} */\n\n.wrap input:hover {\n   background: var(--light-blue);\n   border    : 1px solid var(--light-blue);\n   color     : white !important;\n}\n\n.wrap img {\n   position         : absolute;\n   top              : 11px;\n   display          : none;\n   left             : 71.5px;\n   -webkit-transform: scale(0.6, 0.6);\n   transform        : scale(0.6, 0.6);\n}\n\n.wrap svg {\n   -webkit-transform: rotate(270deg);\n   transform        : rotate(270deg);\n   /* @include rotate(270deg); */\n   position   : absolute;\n   top        : -2px;\n   /* left    : 62px; */\n   display    : none;\n}\n\n.wrap svg .circle_2 {\n   stroke-dasharray: 0 200;\n   stroke          : var(--green);\n}\n\n.wrap svg .fill_circle {\n   -webkit-animation: fill-stroke 2s 0.4s linear forwards;\n   animation        : fill-stroke 2s 0.4s linear forwards;\n}\n\n.wrap .circle {\n   width        : 45px;\n   border       : 3px solid #0000002d;\n   border-radius: 30px;\n   background   : none;\n   /* border    : none; */\n}\n\n.wrap .circleTwo {\n   width        : calc(7 * var(--fontSize));\n   border       : 1px solid var(--green);\n   border-radius: 10px;\n   background   : var(--middle-black) !important;\n   /* border    : none; */\n}\n\n.wrap .circleTwo:hover {\n   background   : none !important;\n   color        : var(--green) !important;\n   /* border    : none; */\n}\n\n.wrap .circle:hover {\n   background: none;\n}\n\n@-webkit-keyframes fill-stroke {\n   0% {\n      stroke-dasharray: 0 200;\n   }\n\n   20% {\n      stroke-dasharray: 20 200;\n   }\n\n   40% {\n      stroke-dasharray: 30 200;\n   }\n\n   50% {\n      stroke-dasharray: 90 200;\n   }\n\n   70% {\n      stroke-dasharray: 120 200;\n   }\n\n   90% {\n      stroke-dasharray: 140 200;\n   }\n\n   100% {\n      stroke-dasharray: 182 200;\n   }\n}\n\n@keyframes fill-stroke {\n   0% {\n      stroke-dasharray: 0 200;\n   }\n\n   20% {\n      stroke-dasharray: 20 200;\n   }\n\n   40% {\n      stroke-dasharray: 30 200;\n   }\n\n   50% {\n      stroke-dasharray: 90 200;\n   }\n\n   70% {\n      stroke-dasharray: 120 200;\n   }\n\n   90% {\n      stroke-dasharray: 140 200;\n   }\n\n   100% {\n      stroke-dasharray: 182 200;\n   }\n}\n\na,\np {\n   line-height: 1.6em;\n}\n\na {\n   color: #738087;\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n   .contact-form-title-main {\n      display: none;\n   }\n\n   .contact-title {\n      width: 95%;\n   }\n\n   .contact-container {\n      width: inherit;\n   }\n\n   section article.contact-list {\n      width: 100%;\n   }\n\n   .contact-list {\n      margin-left : calc(1.5 * var(--fontSize));\n      padding-left: calc(1 * var(--fontSize));\n   }\n\n   .contact-container {\n      padding-right: unset;\n   }\n\n   .main-container-contact {\n      width: 100%;\n   }\n\n   element.style {\n      width        : inherit;\n      padding-right: calc(1.5 * var(--fontSize));\n   }\n\n   article div {\n      width: 95%;\n   }\n\n   .contact-content-container {\n      width        : inherit;\n      padding-right: calc(1.5 * var(--fontSize));\n   }\n\n   .main-container-contact {\n      width       : 100%;\n      padding-left: calc(1 * var(--fontSize));\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQkFBa0I7R0FDbEIsYUFBYTtHQUNiLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7R0FJM0IsNkJBQTZCO0dBQzdCLDJCQUEyQjtHQUczQixpQ0FBaUM7R0FHakMsNkJBQTZCO0dBRTdCLDZCQUE2QjtHQUM3QiwyQkFBMkI7R0FDM0IsNkJBQTZCO0dBQzdCLDZCQUE2QjtBQUNoQzs7QUFFQTtHQUNHLDJCQUEyQjtHQUczQix1QkFBdUI7R0FHdkIsMkJBQTJCO0dBQzNCLCtDQUErQztHQUMvQyw2Q0FBNkM7R0FDN0Msc0JBQXNCO0dBQ3RCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsOENBQThDO0dBQzlDLDhDQUE4QztHQUM5QyxnREFBZ0Q7R0FDaEQsc0JBQXNCO0dBQ3RCLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLGVBQWU7R0FDZixlQUFlO0FBQ2xCOztBQUVBO0dBQ0csK0JBQStCO0dBRy9CLDJCQUEyQjtHQUkzQiwwQkFBMEI7R0FDMUIsMENBQTBDO0dBQzFDLHVDQUF1QztHQUN2QyxrQ0FBa0M7QUFDckM7O0FBRUE7R0FDRywrQkFBK0I7R0FHL0IsMkJBQTJCO0dBRzNCLDZCQUE2QjtHQUU3Qiw2QkFBNkI7R0FHN0IsNkJBQTZCO0dBQzdCLDZCQUE2QjtHQUk3Qiw2QkFBNkI7R0FDN0IsaURBQWlEO0dBQ2pELGlDQUFpQztHQUNqQyw2QkFBNkI7R0FDN0IsZ0RBQWdEO0dBQ2hELHdCQUF3QjtHQUN4QixrREFBa0Q7R0FFbEQsb0ZBQW9GO0FBQ3ZGOztBQUVBO0dBQ0csMEJBQTBCO0dBQzFCLHNCQUFzQjtHQUN0QixvQ0FBb0M7R0FDcEMsc0JBQXNCO0dBQ3RCLHdCQUF3QjtHQUN4QixzQkFBc0I7R0FDdEIsNkNBQTZDO0FBQ2hE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LGNBQWM7R0FDakI7O0dBRUE7TUFDRyxXQUFXO0dBQ2Q7O0dBRUE7TUFDRyx5Q0FBeUM7TUFDekMsdUNBQXVDO0dBQzFDOztHQUVBO01BQ0csb0JBQW9CO0dBQ3ZCOztHQUVBO01BQ0csV0FBVztHQUNkOztHQUVBO01BQ0csc0JBQXNCO01BQ3RCLDBDQUEwQztHQUM3Qzs7R0FFQTtNQUNHLFVBQVU7R0FDYjs7R0FFQTtNQUNHLHNCQUFzQjtNQUN0QiwwQ0FBMEM7R0FDN0M7O0dBRUE7TUFDRyxrQkFBa0I7TUFDbEIsdUNBQXVDO0dBQzFDO0FBQ0giLCJmaWxlIjoibGlicy9jb21wb25lbnRzL3VpL3NyYy9saWIvY29udGFpbmVycy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2FkLWZ1bGxzY3JlZW4ge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgd2lkdGggICA6IDk1JTtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRhaW5lci1jb250YWN0IHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IDEwMCU7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IHN0YXJ0O1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBzdGFydDtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogZmxleC1zdGFydDtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWl0ZW0tYWxpZ24gIDogY2VudGVyO1xuICAgYWxpZ24tc2VsZiAgICAgICAgICAgOiBjZW50ZXI7XG4gICB3aWR0aCAgICAgICAgICAgICAgICA6IDkzdnc7XG4gICBvdmVyZmxvdy15ICAgICAgICAgICA6IHNjcm9sbDtcbiAgIG92ZXJmbG93LXggICAgICAgICAgIDogaGlkZGVuO1xufVxuXG4uY29udGFjdC10aXRsZSB7XG4gICBwb3NpdGlvbiAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogZW5kO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGZsZXgtZW5kO1xuICAgLyogbWFyZ2luLWxlZnQgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICB3aWR0aCAgICAgICAgICAgIDogY2FsYyg3NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgIDogMTAlO1xuICAgcGFkZGluZy1ib3R0b20gICA6IDElO1xuICAgcGFkZGluZy10b3AgICAgICA6IDclO1xuICAgcGFkZGluZy1sZWZ0ICAgICA6IGNhbGMoMS41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXItYm90dG9tICAgIDogMC42cHggdmFyKC0tbGluZS1ibGFjaykgc29saWQ7XG4gICB6LWluZGV4ICAgICAgICAgIDogMjAwO1xuICAgbWFyZ2luLWJvdHRvbSAgICA6IDMlO1xufVxuXG4uY29udGFjdC10aXRsZS10d28ge1xuICAgcGFkZGluZy10b3A6IDIlO1xuICAgaGVpZ2h0ICAgICA6IDUlO1xufVxuXG4uY29udGFjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IGhvcml6b250YWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogcm93O1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiByb3c7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IC1tb3otbWF4LWNvbnRlbnQ7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IG1heC1jb250ZW50O1xufVxuXG4uY29udGFjdC1mb3JtLXRpdGxlLW1haW4ge1xuICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtbGluZS1wYWNrICAgOiBjZW50ZXI7XG4gICBhbGlnbi1jb250ZW50ICAgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LXBhY2sgICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktaXRlbXMgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIHdpZHRoICAgICAgICAgICAgICAgIDogY2FsYygyMCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAvKiBoZWlnaHQgICAgICAgICAgICA6IGluaGVyaXQ7ICovXG4gICB0ZXh0LWFsaWduICAgICAgICAgICA6IGNlbnRlcjtcbiAgIHBhZGRpbmctbGVmdCAgICAgICAgIDogY2FsYyg1ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogY2FsYygxLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC1mb3JtLXRpdGxlIHtcbiAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xuICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZyb250LWJsYWNrKTtcbiAgIGhlaWdodCAgICAgICAgICA6IDEwMCU7XG4gICAvKiBwYWRkaW5nLWxlZnQgOiAxMCU7ICovXG4gICBwYWRkaW5nLXRvcCAgICAgOiAxNXB4O1xuICAgYm9yZGVyLXJhZGl1cyAgIDogY2FsYygwLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIHdpZHRoICAgICAgICAgICAgICAgIDogY2FsYyg2NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IGNhbGMoMzAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgLyogcGFkZGluZy1sZWZ0ICAgICAgOiBjYWxjKDUgKiB2YXIoLS1mb250U2l6ZSkpOyAqL1xuICAgcGFkZGluZy1yaWdodCAgICAgICAgOiBjYWxjKDUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgICAgICAgICAgICAgOiAwO1xuICAgei1pbmRleCAgICAgICAgICAgICAgOiAwO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uYmlvLWNvbnRhaW5lciB7XG4gICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgIHotaW5kZXggICAgICAgICAgIDogMTAwO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC1pbWFnZSB7XG4gICBwb3NpdGlvbiAgICAgICAgICA6IGZpeGVkO1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IGZsZXg7XG4gICBsZWZ0ICAgICAgICAgICAgICA6IDI1JTtcbiAgIHdpZHRoICAgICAgICAgICAgIDogY2FsYyg0MCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDE7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtaW1hZ2Uge1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAwO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4ucGFnZSB7XG4gICB6LWluZGV4OiAwO1xufVxuXG4uY29udGFjdC1wYWdlIC5wYWdlIHtcbiAgIHotaW5kZXg6IDEwMDtcbn1cblxuLmNvbnRhY3QtbGlzdCB7XG4gICBtYXJnaW4tbGVmdCAgICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLWxlZnQgICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLXRvcCAgICAgICA6IGNhbGMoMS41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgYm9yZGVyLXJhZGl1cyAgICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB6LWluZGV4ICAgICAgICAgICA6IDEwMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG59XG5cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtbGlzdCB7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgb3BhY2l0eSAgICAgICAgICAgICAgOiAxO1xuICAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LXBhY2sgICAgIDogc3BhY2UtZXZlbmx5O1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBzcGFjZS1ldmVubHk7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgICA6IHNwYWNlLWV2ZW5seTtcbn1cblxuLyogc2VjdGlvbiB7XG4gICBiYWNrZ3JvdW5kOiAjNWFhOGU4O1xufSAqL1xuXG5zZWN0aW9uIGFydGljbGUuY29udGFjdC1saXN0IHtcbiAgIHdpZHRoIDogOTUlO1xuICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5hcnRpY2xlIGRpdiB7XG4gICB3aWR0aDogOTAlO1xufVxuXG5cbi8qY29udGFjdC1mb3JtLWNvbnRhaW5lciAgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jb250YWN0Rm9ybSB7XG4gICBib3JkZXItcmFkaXVzICAgICA6IDRweDtcbiAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGJveC1zaXppbmcgICAgICAgIDogYm9yZGVyLWJveDtcbiAgIG1hcmdpbiAgICAgICAgICAgIDogYXV0bztcbiAgIG1hcmdpbiAgICAgICAgICAgIDogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgIC8qIG1heC13aWR0aCAgICAgIDogNDUwcHg7ICovXG4gICBvdmVyZmxvdyAgICAgICAgICA6IGhpZGRlbjtcbn1cblxuLyogLmNvbnRhY3RGb3JtIC5mb3JtSGVhZGVyIHtcbiAgIGJhY2tncm91bmQgICA6ICM1NDQyOEU7XG4gICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzQ2Mzc3NjtcbiAgIGNvbG9yICAgICAgICA6ICNmZmY7XG4gICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICB0cmFuc2l0aW9uICAgOiBhbGwgMC41cyBlYXNlO1xufVxuXG4uY29udGFjdEZvcm0gLmZvcm1IZWFkZXIgaDEge1xuICAgbGluZS1oZWlnaHQ6IDFlbTtcbn0gKi9cblxuLmNvbnRhY3RGb3JtIC5mb3JtQm9keSB7XG4gICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xuICAgcG9zaXRpb24gICAgIDogcmVsYXRpdmU7XG4gICBwYWRkaW5nICAgICAgOiBjYWxjKDEuMjUgKiB2YXIoLS1mb250U2l6ZSkpIGNhbGMoMC43NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAvKlRSQU5TSVRJT04qL1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC4ycyBlYXNlO1xuICAgLyogaGVpZ2h0ICAgICAgICAgOiBjYWxjKDIyICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG1heC1oZWlnaHQgICAgICAgIDogY2FsYygyNS44ICogdmFyKC0tZm9udFNpemUpKSAhaW1wb3J0YW50OyAqL1xufVxuXG4uY29udGFjdEZvcm0gLmlucHV0Q29udGFpbmVyIHtcbiAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmxhY2spO1xuICAgYm9yZGVyLXJhZGl1cyAgIDogM3B4O1xuICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XG4gICBtYXJnaW4tYm90dG9tICAgOiBjYWxjKDAuMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBvdmVyZmxvdyAgICAgICAgOiBoaWRkZW47XG4gICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xufVxuXG4vKiAuZmEtZncge1xuICAgY29sb3IgICAgOiB3aGl0ZTtcbiAgIGZvbnQtc2l6ZTogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGRsZS1ibGFjayk7XG4gICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcbn0gKi9cblxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lciAubWVzc2FnZSB7XG4gICBjb2xvciAgICAgICAgICAgICA6ICNGRjVDNUM7XG4gICBiYWNrZ3JvdW5kICAgICAgICA6ICNmZmI4Yjg7XG4gICBwb3NpdGlvbiAgICAgICAgICA6IGFic29sdXRlO1xuICAgdG9wICAgICAgICAgICAgICAgOiAwO1xuICAgYm90dG9tICAgICAgICAgICAgOiAwO1xuICAgd2lkdGggICAgICAgICAgICAgOiAwO1xuICAgbWFyZ2luICAgICAgICAgICAgOiAwO1xuICAgbGluZS1oZWlnaHQgICAgICAgOiAyLjVlbTtcbiAgIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xuICAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjFzIGVhc2U7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIgbGFiZWwsXG4uY29udGFjdEZvcm0gLmlucHV0Q29udGFpbmVyIGlucHV0LFxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3gtc2l6aW5nICAgICAgICA6IGJvcmRlci1ib3g7XG4gICBwYWRkaW5nICAgICAgICAgICA6IGNhbGMoMC42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgIDogMTRweDtcbiAgIGxpbmUtaGVpZ2h0ICAgICAgIDogMWVtO1xuICAgYm9yZGVyICAgICAgICAgICAgOiBub25lO1xuICAgZm9udCAgICAgICAgICAgICAgOiBpbmhlcml0O1xufVxuXG4uZmEtZncge1xuICAgZm9udC1zaXplOiBjYWxjKDEuMyAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIgbGFiZWwge1xuICAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWJsb2NrO1xuICAgZm9udC1zaXplICAgICAgIDogLjdlbTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pZGRsZS1ibGFjayk7XG4gICBjb2xvciAgICAgICAgICAgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICBsaW5lLWhlaWdodCAgICAgOiAxLjc1ZW07XG4gICBib3JkZXItcmlnaHQgICAgOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgLypQT1NJVElPTiovXG4gICBwb3NpdGlvbiAgICAgICAgICA6IGFic29sdXRlO1xuICAgbGVmdCAgICAgICAgICAgICAgOiAwO1xuICAgdG9wICAgICAgICAgICAgICAgOiAwO1xuICAgYm90dG9tICAgICAgICAgICAgOiAwO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC41cyBlYXNlO1xufVxuXG4uY29udGFjdEZvcm0gLmlucHV0Q29udGFpbmVyIHRleHRhcmVhLFxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDEwMCU7XG4gICBtYXgtd2lkdGggICAgICAgICA6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yICA6IHZhcigtLW1pZGRsZS1ibGFjayk7XG4gICBjb2xvciAgICAgICAgICAgICA6IHdoaXRlO1xuICAgb3V0bGluZSAgICAgICAgICAgOiB1bnNldDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDAuMXMgZWFzZTtcbn1cblxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpob3Zlcixcbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIgaW5wdXQ6aG92ZXIge1xuICAgYmFja2dyb3VuZC1jb2xvciAgOiB2YXIoLS1mcm9udC1ibGFjayk7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIgdGV4dGFyZWEge1xuICAgbWFyZ2luLWJvdHRvbTogY2FsYygtMC4zICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHJlc2l6ZSAgICAgICA6IG5vbmU7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgcGFkZGluZy1sZWZ0OiBjYWxjKDMuOCAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi8qIC5jb250YWN0Rm9ybSAuc3VibWl0QnRuIHtcbiAgIGJhY2tncm91bmQgICA6ICMxZTYyZmY7XG4gICBjb2xvciAgICAgICAgOiAjZmZmO1xuICAgYm9yZGVyICAgICAgIDogbm9uZTtcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgIGZvbnQgICAgICAgICA6IGluaGVyaXQ7XG4gICBwYWRkaW5nICAgICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSkgY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG1hcmdpbi10b3AgICA6IGNhbGMoMC42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGZsb2F0ICAgICAgICA6IHJpZ2h0O1xuICAgd2lkdGggICAgICAgIDogYXV0bztcbiAgIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XG4gICB0cmFuc2l0aW9uICAgOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcbn0gKi9cblxuLyogLmNvbnRhY3RGb3JtIC5zdWJtaXRCdG46aG92ZXIge1xuICAgYmFja2dyb3VuZDogIzU5OGJmZjtcbn0gKi9cblxuLmNvbnRhY3RGb3JtLnN1Y2Nlc3Mge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhY3RGb3JtLnN1Y2Nlc3MgLmZvcm1IZWFkZXIge1xuICAgYmFja2dyb3VuZCAgOiAjMEE4NzU0O1xuICAgYm9yZGVyLWNvbG9yOiAjMDg3MTQ2O1xuICAgZm9udC1zaXplICAgOiAuNzVlbTtcbn1cblxuLmNvbnRhY3RGb3JtLnN1Y2Nlc3MgLmZvcm1Cb2R5IHtcbiAgIGhlaWdodCAgICAgICAgOiAwO1xuICAgcGFkZGluZy10b3AgICA6IDA7XG4gICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmNvbnRhY3RGb3JtLnN1Y2Nlc3MgLmZvcm1Cb2R5IGZvcm0ge1xuICAgLypUUkFOU0lUSU9OKi9cbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IG9wYWNpdHkgMC41cyBlYXNlO1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAwO1xufVxuXG4uY29udGFjdEZvcm0gLmlucHV0Q29udGFpbmVyLnN1Y2Nlc3Mge1xuICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuc3VjY2VzczphZnRlciB7XG4gICBmb250ICAgIDogMS4yNWVtLzJlbSBGb250QXdlc29tZTtcbiAgIGNvbG9yICAgOiB2YXIoLS1ncmVlbik7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3AgICAgIDogMDtcbiAgIHJpZ2h0ICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBjb250ZW50IDogXCJcXGYwMGNcIjtcbn1cblxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lci5zdWNjZXNzIGxhYmVsIHtcbiAgIGJhY2tncm91bmQgIDogdmFyKC0tZ3JlZW4pO1xuICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuc3VjY2VzcyBpbnB1dCxcbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuc3VjY2VzcyB0ZXh0YXJlYSB7XG4gICBjb2xvcjogIzBBODc1NDtcbn1cblxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lci5lcnJvciB7XG4gICBib3JkZXItY29sb3I6ICNlODU0NTQ7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuZXJyb3IgLm1lc3NhZ2Uge1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuZXJyb3I6YWZ0ZXIge1xuICAgZm9udCAgICA6IDEuMjVlbS8yZW0gRm9udEF3ZXNvbWU7XG4gICBjb2xvciAgIDogI0ZGNUM1QztcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcCAgICAgOiAwO1xuICAgcmlnaHQgICA6IGNhbGMoMC42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGNvbnRlbnQgOiBcIlxcZjAwZFwiO1xufVxuXG4uY29udGFjdEZvcm0gLmlucHV0Q29udGFpbmVyLmVycm9yIGxhYmVsIHtcbiAgIGJhY2tncm91bmQgIDogI0ZGNUM1QztcbiAgIGJvcmRlci1jb2xvcjogI2U4NTQ1NDtcbn1cblxuLmNvbnRhY3RGb3JtIC5pbnB1dENvbnRhaW5lci5lcnJvciBpbnB1dCxcbi5jb250YWN0Rm9ybSAuaW5wdXRDb250YWluZXIuZXJyb3IgdGV4dGFyZWEge1xuICAgY29sb3I6ICNGRjVDNUM7XG59XG5cbi8qIHNlbmQgYnV0dG9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ud3JhcCB7XG4gICBwb3NpdGlvbiAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LXBhY2sgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICA6IGNlbnRlcjtcbiAgIG1hcmdpbiAgICAgICAgICAgOiBhdXRvO1xuICAgbWFyZ2luLXRvcCAgICAgICA6IDIlO1xuICAgd2lkdGggICAgICAgICAgICA6IDE5MXB4O1xuICAgdGV4dC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbn1cblxuLndyYXAgaW5wdXQge1xuICAgZGlzcGxheSAgICAgICAgICAgOiBibG9jaztcbiAgIHBhZGRpbmcgICAgICAgICAgIDogMDtcbiAgIHdpZHRoICAgICAgICAgICAgIDogY2FsYyg3ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGhlaWdodCAgICAgICAgICAgIDogY2FsYygzICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGJhY2tncm91bmQgICAgICAgIDogdmFyKC0tYmx1ZSk7XG4gICBtYXJnaW4gICAgICAgICAgICA6IGF1dG87XG4gICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgIDogY2FsYygxLjEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgY29sb3IgICAgICAgICAgICAgOiB3aGl0ZTtcbiAgIGN1cnNvciAgICAgICAgICAgIDogcG9pbnRlcjtcbiAgIG91dGxpbmUgICAgICAgICAgIDogbm9uZTtcbiAgIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgYm94LXNpemluZyAgICAgICAgOiBib3JkZXItYm94O1xuICAgYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjRzIGVhc2U7XG59XG5cbi8qIC53cmFwIC5maWxsZWQge1xuICAgYmFja2dyb3VuZCA6ICMxRUNEOTc7XG4gICBjb2xvciAgICAgIDogd2hpdGU7XG4gICBsaW5lLWhlaWdodDogNjBweDtcbiAgIGZvbnQtc2l6ZSAgOiAxNjAlO1xufSAqL1xuXG4ud3JhcCBpbnB1dDpob3ZlciB7XG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgIGJvcmRlciAgICA6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcbiAgIGNvbG9yICAgICA6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwIGltZyB7XG4gICBwb3NpdGlvbiAgICAgICAgIDogYWJzb2x1dGU7XG4gICB0b3AgICAgICAgICAgICAgIDogMTFweDtcbiAgIGRpc3BsYXkgICAgICAgICAgOiBub25lO1xuICAgbGVmdCAgICAgICAgICAgICA6IDcxLjVweDtcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XG4gICB0cmFuc2Zvcm0gICAgICAgIDogc2NhbGUoMC42LCAwLjYpO1xufVxuXG4ud3JhcCBzdmcge1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZSgyNzBkZWcpO1xuICAgLyogQGluY2x1ZGUgcm90YXRlKDI3MGRlZyk7ICovXG4gICBwb3NpdGlvbiAgIDogYWJzb2x1dGU7XG4gICB0b3AgICAgICAgIDogLTJweDtcbiAgIC8qIGxlZnQgICAgOiA2MnB4OyAqL1xuICAgZGlzcGxheSAgICA6IG5vbmU7XG59XG5cbi53cmFwIHN2ZyAuY2lyY2xlXzIge1xuICAgc3Ryb2tlLWRhc2hhcnJheTogMCAyMDA7XG4gICBzdHJva2UgICAgICAgICAgOiB2YXIoLS1ncmVlbik7XG59XG5cbi53cmFwIHN2ZyAuZmlsbF9jaXJjbGUge1xuICAgLXdlYmtpdC1hbmltYXRpb246IGZpbGwtc3Ryb2tlIDJzIDAuNHMgbGluZWFyIGZvcndhcmRzO1xuICAgYW5pbWF0aW9uICAgICAgICA6IGZpbGwtc3Ryb2tlIDJzIDAuNHMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4ud3JhcCAuY2lyY2xlIHtcbiAgIHdpZHRoICAgICAgICA6IDQ1cHg7XG4gICBib3JkZXIgICAgICAgOiAzcHggc29saWQgIzAwMDAwMDJkO1xuICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgIGJhY2tncm91bmQgICA6IG5vbmU7XG4gICAvKiBib3JkZXIgICAgOiBub25lOyAqL1xufVxuXG4ud3JhcCAuY2lyY2xlVHdvIHtcbiAgIHdpZHRoICAgICAgICA6IGNhbGMoNyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdmFyKC0tZ3JlZW4pO1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIGJhY2tncm91bmQgICA6IHZhcigtLW1pZGRsZS1ibGFjaykgIWltcG9ydGFudDtcbiAgIC8qIGJvcmRlciAgICA6IG5vbmU7ICovXG59XG5cbi53cmFwIC5jaXJjbGVUd286aG92ZXIge1xuICAgYmFja2dyb3VuZCAgIDogbm9uZSAhaW1wb3J0YW50O1xuICAgY29sb3IgICAgICAgIDogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7XG4gICAvKiBib3JkZXIgICAgOiBub25lOyAqL1xufVxuXG4ud3JhcCAuY2lyY2xlOmhvdmVyIHtcbiAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmaWxsLXN0cm9rZSB7XG4gICAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDIwMDtcbiAgIH1cblxuICAgMjAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIwIDIwMDtcbiAgIH1cblxuICAgNDAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMwIDIwMDtcbiAgIH1cblxuICAgNTAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwMDtcbiAgIH1cblxuICAgNzAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEyMCAyMDA7XG4gICB9XG5cbiAgIDkwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxNDAgMjAwO1xuICAgfVxuXG4gICAxMDAlIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4MiAyMDA7XG4gICB9XG59XG5cbkBrZXlmcmFtZXMgZmlsbC1zdHJva2Uge1xuICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAyMDA7XG4gICB9XG5cbiAgIDIwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAyMCAyMDA7XG4gICB9XG5cbiAgIDQwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAzMCAyMDA7XG4gICB9XG5cbiAgIDUwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDA7XG4gICB9XG5cbiAgIDcwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxMjAgMjAwO1xuICAgfVxuXG4gICA5MCUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTQwIDIwMDtcbiAgIH1cblxuICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxODIgMjAwO1xuICAgfVxufVxuXG5hLFxucCB7XG4gICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbmEge1xuICAgY29sb3I6ICM3MzgwODc7XG59XG5cbi8qIHBvcnRyYWl0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAuY29udGFjdC1mb3JtLXRpdGxlLW1haW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cblxuICAgLmNvbnRhY3QtdGl0bGUge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgIH1cblxuICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgfVxuXG4gICBzZWN0aW9uIGFydGljbGUuY29udGFjdC1saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuXG4gICAuY29udGFjdC1saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0IDogY2FsYygxLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgfVxuXG4gICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICB9XG5cbiAgIC5tYWluLWNvbnRhaW5lci1jb250YWN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuXG4gICBlbGVtZW50LnN0eWxlIHtcbiAgICAgIHdpZHRoICAgICAgICA6IGluaGVyaXQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB9XG5cbiAgIGFydGljbGUgZGl2IHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICB9XG5cbiAgIC5jb250YWN0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoICAgICAgICA6IGluaGVyaXQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB9XG5cbiAgIC5tYWluLWNvbnRhaW5lci1jb250YWN0IHtcbiAgICAgIHdpZHRoICAgICAgIDogMTAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxICogdmFyKC0tZm9udFNpemUpKTtcbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/contact/contact.component.html":
/*!***************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/contact/contact.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"toad-fullscreen\">\n\n    <div class=\"main-container-contact\">\n\n        <div class=\"contact-title\">\n            Talk To Me\n        </div>\n\n        <div class=\"contact-content-container\">\n\n            <div class=\"titles-container contact-form-title-main\">\n\n                <div class=\"contact-form-title\">\n                    Contact Form\n                </div>\n            </div>\n\n            <div class=\"page contact-container bio-container\">\n\n                <img *ngIf=\"contactImage\" class=\"menu-icon contact-image image image-black\" [src]=\"contactImage\"\n                    alt=\"contact-image\" />\n                <article class=\"contact-list\">\n\n                    <div id=\"contactForm\" class=\"contactForm\">\n\n                        <!-- <div id=\"formHeader\" class=\"formHeader\">\n                            <h1 id=\"message\">Contact Me</h1>\n                        </div> -->\n\n                        <div id=\"formBody\" class=\"formBody\">\n                            <form action=\"https://script.google.com/macros/s/AKfycbzXXnwTVGQioVqTBiPqRTYhZDcU5CtcvvK50JKw/exec\" method=\"POST\" class='gform' name=\"contactForm\">\n\n                                <div class=\"inputContainer\">\n                                    <label for=\"userName\">\n                                        <i class=\"fa fa-lg fa-fw fa-user\"></i>\n                                    </label>\n                                    <input name=\"name\" id=\"userName\" type=\"text\" placeholder=\"John Smith\">\n                                </div>\n\n                                <div class=\"inputContainer\">\n                                    <label for=\"userEmail\">\n                                        <i class=\"fa fa-lg fa-fw fa-envelope\"></i>\n                                    </label>\n                                    <input name=\"email\" id=\"userEmail\" type=\"email\" placeholder=\"jsmith@domain.com\">\n                                </div>\n\n                                <div class=\"inputContainer\">\n                                    <textarea name=\"feedback\" id=\"userMessage\" rows=\"10\" placeholder=\"Enter your message\"></textarea>\n                                </div>\n\n                                <!-- <input id=\"submitBtn\" class=\"submitBtn\" type=\"submit\" value=\"Send\"> -->\n                                <div class=\"wrap\">\n                                    <input  id=\"submitBtn\" class=\"submitBtn\" type=\"submit\" value=\"Send\">\n                                    <img src=\"https://www.dropbox.com/s/qfu4871umzhlcfo/check_arrow_2.svg?dl=1\" alt=\"\">\n                                    <svg class='circle-svg' width=\"50px\" height=\"50px\">\n                                        <circle class=\"circle_2\" stroke-position=\"outside\" stroke-width=\"3\" fill=\"none\" cx=\"25\" cy=\"25\" r=\"22\">\n\n                                        </circle>\n                                    </svg>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </article>\n\n            </div>\n        </div>\n\n        <div class=\"contact-title contact-title-two\">\n        </div>\n    </div>\n</section>\n<!--\n<section id=\"contact\" class=\"toad-fullscreen\">\n\n    <div class=\"page contact-container\">\n\n        <div class=\"contact-title\">\n            My contact\n        </div>\n\n\n    </div>\n</section> -->\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/contact/contact.component.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/contact/contact.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ContactComponent = /** @class */ (function () {
    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();
    function ContactComponent(images, brand) {
        this.images = images;
        this.brand = brand;
        this.classSuccess = "success";
        this.classError = "error";
        this.clicked = false;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactImage = images.icons.contact;
        if (this.landingState)
            this.localState = this.landingState;
    }
    ContactComponent.prototype.ngOnInit = function () {
        // window.addEventListener( 'scroll', this.scroll, true );
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    };
    ContactComponent.prototype.ngOnChanges = function () {
        this.localState = this.landingState;
        this.state.emit(__assign({}, this.localState));
        this.contactContainer = document.querySelector(".main-container-contact");
        if (this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 4) {
            if (this.contactContainer)
                this.contactContainer.classList.add('contact-page');
        }
        else {
            if (this.contactContainer)
                this.contactContainer.classList.remove('contact-page');
        }
        this.localState = this.landingState;
        this.setTitleContainerHeight();
    };
    ContactComponent.prototype.setTitleContainerHeight = function () {
        var contentContainer = document.querySelector('.contact-content-container');
        var bioTitle = document.querySelector('.contact-form-title-main');
        bioTitle['style'].height = contentContainer['offsetHeight'] + 'px';
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    ContactComponent.prototype.init = function () {
        this.cacheDom();
        this.bindEvents();
    };
    ContactComponent.prototype.cacheDom = function () {
        //MAIN PARENT ELEMENT
        this.contactForm = document.getElementById("contactForm");
        //MAIN FORM ELEMENTS
        this.formHeader = document.querySelector("#formHeader h1");
        this.formBody = document.getElementById("formBody");
        this.inputContainer = document.getElementsByClassName("inputContainer");
        //USER INPUT ELEMENTS
        //INPUT FIELDS
        this.fields = {
            userName: document.getElementById("userName"),
            userEmail: document.getElementById("userEmail"),
            userMessage: document.getElementById("userMessage")
        };
        this.submitBtn = document.getElementById("submitBtn");
    };
    ContactComponent.prototype.bindEvents = function () {
        var i;
        //RUN RULES ON SUBMIT BUTTON CLICK
        this.submitBtn.onclick = this.runRules.bind(this);
        //BIND EVENTS TO EACH INPUT FIELD
        for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
                //VARIABLES
                this.input = this.fields[i];
                this.container = this.input.parentElement;
                //RUN RULES WHEN INPUT HAS FOCUS
                this.input.onfocus = this.runRules.bind(this);
                //RESET ERRORS WHEN CONTAINER IS CLICKED
                this.container.onclick = this.resetErrors.bind(this, this.input);
            }
        }
    };
    ContactComponent.prototype.runRules = function (evnt) {
        var target = evnt.target;
        var type = evnt.type;
        //IF EVENT ON SUBMIT BUTTON
        if (type === "focus") {
            //RESET CLASSLIST
            this.resetClassList(target.parentElement);
            //RESET ERRORS
            this.resetErrors(target);
            return false;
        }
        //RESET CLASSLIST
        this.resetClassList(null);
        //CHECK FIELDS
        this.checkFields(evnt);
    };
    ContactComponent.prototype.preventDefault = function (evnt) {
        //PREVENT DEFUALT
        evnt.preventDefault();
    };
    ContactComponent.prototype.checkFields = function (event) {
        var i;
        var validCount = 0, 
        //EMAIL FILTER
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //CYLCE THROUGH INPUTS
        for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
                this.input = this.fields[i];
                //CHECK IF FIELD IS EMPTY
                if (this.input.value === "") {
                    //ADD ERROR CLASS
                    this.addClass(this.input, this.classError);
                    //CHECK IF EMAIL IS VALID
                }
                else if (i === "userEmail" && !filter.test(this.input.value)) {
                    //ADD ERROR CLASS
                    this.addClass(this.input, this.classError);
                }
                else {
                    //FIELD IS VALID
                    this.addClass(this.input, this.classSuccess);
                    validCount += 1;
                }
            }
        }
        //IF ALL FEILDS ARE VALID
        if (validCount === 3) {
            //SUBMIT FORM
            this.submitForm();
        }
        else {
            this.preventDefault(event);
        }
    };
    ContactComponent.prototype.addClass = function (input, clss) {
        this.container = input.parentElement;
        //IF INPUT HAS ERROR
        if (clss === this.classError) {
            //SHOW ERROR MESSAGE
            this.errorMessage(input);
        }
        //ADD CLASS
        input.parentElement.classList.add(clss);
    };
    ContactComponent.prototype.errorMessage = function (input) {
        var message;
        //IF USERNAME HAS ERROR
        if (input === this.fields.userName) {
            message = "Please enter your name";
            //ELSE IF USEREMAIL HAS ERROR
        }
        else if (input === this.fields.userEmail) {
            message = "Please enter a valid email";
            //ELSE IF USERMESSAGE HAS ERROR
        }
        else if (input === this.fields.userMessage) {
            message = "Please enter your feedback";
        }
        this.renderError(input, message);
    };
    ContactComponent.prototype.renderError = function (input, message) {
        var html;
        //GET INPUT CONTAINER
        this.container = input.parentElement;
        //RENDER HTML
        html = document.createElement("div");
        html.setAttribute("class", "message");
        html.innerHTML = message;
        //IF MESSAGE ELEMENT DOESN'T EXIST
        if (!this.container.getElementsByClassName("message")[0]) {
            //INSERT MESSAGE TO INPUT CONTAINER
            this.container.insertBefore(html, this.container.firstElementChild);
            html.setAttribute('style', "\n                color      : #FF5C5C;\n                background : #ffb8b8;\n                position   : absolute;\n                top        : 0;\n                bottom     : 0;\n                width      : 0;\n                margin     : 0;\n                line-height: 2.5em;\n                text-align : center;\n                overflow   : hidden;\n                transition: all 0.1s ease;\n            ");
        }
    };
    ContactComponent.prototype.resetClassList = function (input) {
        var i;
        //IF TARGETING SPECIFIC INPUT
        if (input) {
            //GET INPUT CONTAINER
            this.container = input.parentElement;
            //REMOVE CLASSES
            this.container.classList.remove(this.classError, this.classSuccess);
            //FOCUS ON INPUT FIELD
            input.focus();
        }
        else {
            for (i in this.fields) {
                if (this.fields.hasOwnProperty(i)) {
                    //REMOVE CLASSES FROM ALL FIELDS
                    this.fields[i].parentElement.classList.remove(this.classError, this.classSuccess);
                }
            }
        }
    };
    ContactComponent.prototype.resetErrors = function (input) {
        //GET INPUT CONTAINER
        this.container = input.parentElement;
        //IF CONTAINER CONTAINS ERROR
        if (this.container.classList.contains(this.classError)) {
            //RESET CLASSES
            this.resetClassList(input);
        }
    };
    ContactComponent.prototype.submitForm = function () {
        var _this = this;
        var btnIcon = document.querySelector('.wrap img');
        var svg = document.querySelector('.circle-svg');
        var circleTwo = document.querySelector('.circle_2');
        this.submitBtn.classList.add("circle");
        this.submitBtn.setAttribute("style", "color: var(--green);");
        this.submitBtn.setAttribute("value", "");
        svg.setAttribute("style", "display: block;");
        circleTwo.classList.add("fill_circle");
        setTimeout(function () {
            svg.setAttribute("style", "display: none;");
            _this.submitBtn.classList.remove("circle");
            _this.submitBtn.classList.add("circleTwo");
            _this.submitBtn.setAttribute("value", "Done!");
            // self.html("b");
            btnIcon.setAttribute("style", "display: block;");
        }, 2500);
        setTimeout(function () {
            for (var i = 0; i < _this.inputContainer.length; i++) {
                _this.inputContainer[i].classList.remove('success');
                _this.inputContainer[i].classList.remove('error');
            }
            ;
            _this.submitBtn.setAttribute("style", "color: white");
            _this.submitBtn.classList.remove("circleTwo");
            _this.submitBtn.setAttribute("value", "Send");
        }, 5000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContactComponent.prototype, "state", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "../../../libs/components/ui/src/lib/containers/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "../../../libs/components/ui/src/lib/containers/contact/contact.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object, Object])
    ], ContactComponent);
    return ContactComponent;
}());

;


/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/home/home.component.css":
/*!********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/home/home.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container.landscape,\n.home-container {\n   position          : absolute;\n   width             : 100%;\n   height            : 100%;\n   display           : flex;\n   align-items       : center;\n   justify-content   : center;\n   opacity           : 0;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.home-container.home-container.landscape.home,\n.home-container.home {\n   opacity           : 1;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* .home-image {\n   position: fixed;\ndisplay    : flex;\nwidth      : 200%;\nopacity    : 0.3;\n} */\n\n.home-container.landscape .home-text-container,\n.home-text-container {\n   position             : relative;\n   width                : inherit;\n   height               : inherit;\n   flex-direction       : column;\n   display              : flex;\n   align-items          : center;\n   justify-content      : center;\n}\n\n/* welcome ===================== */\n\n/* translate(-30%, 7%) scale(0.8) */\n\n.home-container.landscape svg.intro,\nsvg.intro {\n   position             : relative;\n   display              : flex;\n   width                : inherit;\n   height               : inherit;\n   flex-direction       : column;\n   flex-wrap            : nowrap;\n   justify-content      : center;\n   align-items          : center;\n   align-content        : center;\n   overflow             : visible;\n}\n\n.home-container.landscape svg.intro .text,\nsvg.intro .text {\n   display: none;\n   fill   : none;\n}\n\n.home-container.landscape svg.intro.go .text,\nsvg.intro.go .text {\n   position         : absolute;\n   display          : block;\n   font-size        : calc(1 * var(--fontSize));\n   width            : inherit;\n   /* height        : 100%; */\n   fill             : none;\n   stroke           : #ffffff63;\n   stroke-width     : 2.8px;\n   stroke-dashoffset: -900;\n   stroke-dasharray : 900;\n   stroke-linecap   : round;\n   stroke-linejoin  : round;\n   -webkit-animation: dash 2.5s ease-in-out forwards;\n   animation        : dash 2.5s ease-in-out forwards;\n}\n\n/* .home-container.landscape svg.intro.go .text,\nsvg.intro.go .text {\n   fill             : white;\n   transition       : all 0.05s 7.5s ease-in-out;\n} */\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(1),\nsvg.intro.go .text-stroke:nth-child(1) {\n   -webkit-animation: dash 1.5s ease-in-out forwards;\n   animation        : dash 1.5s ease-in-out forwards;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(2),\nsvg.intro.go .text-stroke:nth-child(2) {\n   -webkit-animation-delay: 1.2s;\n   animation-delay        : 1.2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(3),\nsvg.intro.go .text-stroke:nth-child(3) {\n   -webkit-animation-delay: 1.4s;\n   animation-delay        : 1.4s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(4),\nsvg.intro.go .text-stroke:nth-child(4) {\n   -webkit-animation-delay: 4.4s;\n   animation-delay        : 4.4s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(5),\nsvg.intro.go .text-stroke:nth-child(5) {\n   -webkit-animation-delay: 4.6s;\n   animation-delay        : 4.6s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(6),\nsvg.intro.go .text-stroke:nth-child(6) {\n   -webkit-animation-delay: 5s;\n   animation-delay        : 5s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(7),\nsvg.intro.go .text-stroke:nth-child(7) {\n   -webkit-animation-delay: 5.2s;\n   animation-delay        : 5.2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke:nth-child(8),\nsvg.intro.go .text-stroke:nth-child(8) {\n   -webkit-animation-delay: 6.2s;\n   animation-delay        : 6.2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-one,\nsvg.intro.go .text-stroke-one {\n   stroke                    : #ffffff;\n   /* animation-delay        : 0.6s; */\n   -webkit-animation-duration: 2.5s;\n   animation-duration        : 2.5s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-two,\nsvg.intro.go .text-stroke-two {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 2s;\n   animation-delay        : 2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-three,\nsvg.intro.go .text-stroke-three {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 2.2s;\n   animation-delay        : 2.2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-four,\nsvg.intro.go .text-stroke-four {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 5.2s;\n   animation-delay        : 5.2s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-five,\nsvg.intro.go .text-stroke-five {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 5.4s;\n   animation-delay        : 5.4s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-six,\nsvg.intro.go .text-stroke-six {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 5.8s;\n   animation-delay        : 5.8s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-seven,\nsvg.intro.go .text-stroke-seven {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 6s;\n   animation-delay        : 6s;\n}\n\n.home-container.landscape svg.intro.go .text-stroke-eight,\nsvg.intro.go .text-stroke-eight {\n   stroke                 : #ffffff;\n   -webkit-animation-delay: 7s;\n   animation-delay        : 7s;\n}\n\n/* commented out as of issue when loading this css before parent container created so size is unknown. \n   Have set this in ts file in the ngAfterViewInit() method */\n\n/* .home-container.landscape svg.intro.go .text.text-one,\nsvg.intro.go .text.text-one,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-one,\nsvg.intro.go .text-stroke.text-stroke-one {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(3.5) translate(50%, 2.5%);\n   transform               : scale(3.5) translate(50%, 2.5%);\n} */\n\n.home-container.landscape svg.intro.go .text.text-two,\nsvg.intro.go .text.text-two,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-two,\nsvg.intro.go .text-stroke.text-stroke-two {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.8) translate(50%, 9%);\n   transform               : scale(1.8) translate(50%, 9%);\n}\n\n.home-container.landscape svg.intro.go .text.text-three,\nsvg.intro.go .text.text-three,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-three,\nsvg.intro.go .text-stroke.text-stroke-three {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.8) translate(50%, 12%);\n   transform               : scale(1.8) translate(50%, 12%);\n}\n\n.home-container.landscape svg.intro.go .text.text-four,\nsvg.intro.go .text.text-four,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-four,\nsvg.intro.go .text-stroke.text-stroke-four {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.7) translate(50%, 42%);\n   transform               : scale(1.7) translate(50%, 42%);\n}\n\n.home-container.landscape svg.intro.go .text.text-five,\nsvg.intro.go .text.text-five,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-five,\nsvg.intro.go .text-stroke.text-stroke-five {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.6) translate(50%, 47.5%);\n   transform               : scale(1.6) translate(50%, 47.5%);\n}\n\n.home-container.landscape svg.intro.go .text.text-six,\nsvg.intro.go .text.text-six,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-six,\nsvg.intro.go .text-stroke.text-stroke-six {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.5) translate(50%, 55.5%);\n   transform               : scale(1.5) translate(50%, 55.5%);\n}\n\n.home-container.landscape svg.intro.go .text.text-seven,\nsvg.intro.go .text.text-seven,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-seven,\nsvg.intro.go .text-stroke.text-stroke-seven {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(1.5) translate(50%, 58%);\n   transform               : scale(1.5) translate(50%, 58%);\n}\n\n.home-container.landscape svg.intro.go .text.text-eight,\nsvg.intro.go .text.text-eight,\n.home-container.landscape svg.intro.go .text-stroke.text-stroke-eight,\nsvg.intro.go .text-stroke.text-stroke-eight {\n   -webkit-transform-origin: top;\n   transform-origin        : top;\n   -webkit-transform       : scale(2) translate(50%, 47.5%);\n   transform               : scale(2) translate(50%, 47.5%);\n}\n\n@-webkit-keyframes dash {\n   100% {\n      stroke-dashoffset: 0;\n   }\n}\n\n@keyframes dash {\n   100% {\n      stroke-dashoffset: 0;\n   }\n}\n\n.home-container.landscape .reload,\n.reload {\n   position          : absolute;\n   bottom            : 15px;\n   right             : 15px;\n   background        : #fff;\n   border            : none;\n   border-radius     : 20px;\n   outline           : none !important;\n   font-size         : 11px;\n   line-height       : 1.5;\n   padding           : 8px 12px;\n   /* text-transform : uppercase; */\n   z-index           : 10;\n   cursor            : pointer;\n   box-shadow        : 0 6px 7px #350e4c;\n   transition        : all 0.1s cubic-bezier(0.67, 0.13, 0.1, 0.81);\n}\n\n.home-container.landscape .reload:hover,\n.reload:hover {\n   box-shadow        : 0 4px 4px #350e4c;\n   -webkit-transform : translateY(1px);\n   transform         : translateY(1px);\n}\n\n.home-container.landscape .reload:active,\n.reload:active {\n   box-shadow        : 0 1px 2px #244B94;\n   -webkit-transform : translateY(2px);\n   transform         : translateY(2px);\n}\n\n.home-container.landscape .reload svg,\n.reload svg {\n   vertical-align: middle;\n   position      : relative;\n   top           : -2px;\n}\n\n/* I am a ================================================================================ */\n\n.home-container.landscape .rotating-text,\n.rotating-text {\n   display            : flex;\n   position           : absolute;\n   width              : 100vw;\n   height             : 100%;\n   font-size          : calc(1.5 * var(--fontSize));\n   justify-content    : center;\n   align-items        : center;\n   align-self         : center;\n   -webkit-transform  : translate(-7%, 10%) scale(0);\n   transform          : translate(-7%, 10%) scale(0);\n   transition         : all 100ms ease-in-out;\n}\n\n.home-container.landscape .rotating-text.rotating-active,\n.rotating-text.rotating-active {\n   -webkit-transform : translate(-7%, 10%) scale(1);\n   transform         : translate(-7%, 10%) scale(1);\n   transition        : all 600ms 5.4s ease-in-out;\n}\n\n.home-container.landscape .rotating-text-one,\n.rotating-text-one {\n   position: relative;\n   height  : 1em;\n}\n\n.home-container.landscape div,\ndiv {\n   display       : inline-block;\n   vertical-align: top;\n   margin        : 0;\n}\n\n.home-container.landscape .word,\n.word {\n   position: absolute;\n   width   : -webkit-max-content;\n   width   : -moz-max-content;\n   width   : max-content;\n   opacity : 0;\n}\n\n.home-container.landscape .letter,\n.letter {\n   -webkit-transform-origin: 50% 50% 25px;\n   transform-origin        : 50% 50% 25px;\n   position                : relative;\n   display                 : inline-block;\n   -webkit-transform       : translateZ(25px) !important;\n   transform               : translateZ(25px) !important;\n}\n\n.home-container.landscape .letter.out,\n.letter.out {\n   -webkit-transform : rotateX(90deg) !important;\n   transform         : rotateX(90deg) !important;\n   transition        : all 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19) !important;\n}\n\n.home-container.landscape .letter.behind,\n.letter.behind {\n   -webkit-transform: rotateX(-90deg) !important;\n   transform        : rotateX(-90deg) !important;\n}\n\n.home-container.landscape .letter.in,\n.letter.in {\n   -webkit-transform : rotateX(0deg) !important;\n   transform         : rotateX(0deg) !important;\n   transition        : all 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;\n}\n\n.home-container.landscape .wisteria,\n.wisteria {\n   color: var(--light-purple);\n}\n\n.home-container.landscape .belize,\n.belize {\n   color: var(--magenta);\n}\n\n.home-container.landscape .pomegranate,\n.pomegranate {\n   color: var(--blue);\n}\n\n.home-container.landscape .green,\n.green {\n   color: #16a085;\n}\n\n.home-container.landscape .midnight,\n.midnight {\n   color: #2c3e50;\n}\n\n/* headshot ====================================== */\n\n.home-container.landscape .headshot-image,\n.headshot-image {\n   -webkit-transform-origin: center;\n   transform-origin        : center;\n   position                : absolute;\n   width                   : calc(0* var(--fontSize));\n   -webkit-transform       : scale(1) translate(0, -25%);\n   transform               : scale(1) translate(0, -25%);\n   transition              : all 100ms ease-in-out;\n}\n\n.home-container.landscape .headshot-image.image-active,\n.headshot-image.image-active {\n   width             : calc(11 * var(--fontSize)) !important;\n   transition        : all 600ms 5s ease-in-out;\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n\n   .home-container.portrait .headshot-image {\n      -webkit-transform: scale(0.8) translate(0, -45%);\n      transform        : scale(0.8) translate(0, -45%);\n   }\n\n   .home-container.portrait .rotating-text {\n      -webkit-transform : translate(-25%, 4%) scale(0);\n      transform         : translate(-25%, 4%) scale(0);\n      transition        : all 100ms ease-in-out;\n   }\n\n   .home-container.portrait .rotating-text.rotating-active {\n      -webkit-transform : translate(-25%, 4%) scale(1);\n      transform         : translate(-25%, 4%) scale(1);\n      transition        : all 600ms 5.4s ease-in-out;\n   }\n\n   .home-container.portrait svg.intro.go .text.text-four,\n   .home-container.portrait svg.intro.go .text-stroke.text-stroke-four {\n      -webkit-transform-origin: top;\n      transform-origin        : top;\n      -webkit-transform       : scale(1.5) translate(50%, 42%);\n      transform               : scale(1.5) translate(50%, 42%);\n   }\n\n\n   .home-container.portrait svg.intro.go .text.text-five,\n   .home-container.portrait svg.intro.go .text-stroke.text-stroke-five {\n      -webkit-transform-origin: top;\n      transform-origin        : top;\n      -webkit-transform       : scale(1.45) translate(50%, 46%);\n      transform               : scale(1.45) translate(50%, 46%);\n   }\n\n   .home-container.portrait svg.intro.go .text.text-six,\n   .home-container.portrait svg.intro.go .text-stroke.text-stroke-six {\n      -webkit-transform-origin: top;\n      transform-origin        : top;\n      -webkit-transform       : scale(1) translate(50%, 75%);\n      transform               : scale(1) translate(50%, 75%);\n   }\n\n\n   .home-container.portrait svg.intro.go .text.text-seven,\n   .home-container.portrait svg.intro.go .text-stroke.text-stroke-seven {\n      -webkit-transform-origin: top;\n      transform-origin        : top;\n      -webkit-transform       : scale(1) translate(50%, 78%);\n      transform               : scale(1) translate(50%, 78%);\n   }\n\n   .home-container.portrait svg.intro.go .text.text-eight,\n   .home-container.portrait svg.intro.go .text-stroke.text-stroke-eight {\n      -webkit-transform-origin: top;\n      transform-origin        : top;\n      -webkit-transform       : scale(1.5) translate(50%, 57%);\n      transform               : scale(1.5) translate(50%, 57%);\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsNEJBQTRCO0dBQzVCLHdCQUF3QjtHQUN4Qix3QkFBd0I7R0FHeEIsd0JBQXdCO0dBR3hCLDBCQUEwQjtHQUcxQiwwQkFBMEI7R0FDMUIscUJBQXFCO0dBRXJCLGlGQUFpRjtBQUNwRjs7QUFFQTs7R0FFRyxxQkFBcUI7R0FFckIsaUZBQWlGO0FBQ3BGOztBQUVBOzs7OztHQUtHOztBQUVIOztHQUVHLCtCQUErQjtHQUMvQiw4QkFBOEI7R0FDOUIsOEJBQThCO0dBSTlCLDZCQUE2QjtHQUc3QiwyQkFBMkI7R0FHM0IsNkJBQTZCO0dBRzdCLDZCQUE2QjtBQUNoQzs7QUFHQSxrQ0FBa0M7O0FBQ2xDLG1DQUFtQzs7QUFDbkM7O0dBRUcsK0JBQStCO0dBRy9CLDJCQUEyQjtHQUMzQiw4QkFBOEI7R0FDOUIsOEJBQThCO0dBSTlCLDZCQUE2QjtHQUU3Qiw2QkFBNkI7R0FHN0IsNkJBQTZCO0dBRzdCLDZCQUE2QjtHQUU3Qiw2QkFBNkI7R0FDN0IsOEJBQThCO0FBQ2pDOztBQUVBOztHQUVHLGFBQWE7R0FDYixhQUFhO0FBQ2hCOztBQUVBOztHQUVHLDJCQUEyQjtHQUMzQix3QkFBd0I7R0FDeEIsNENBQTRDO0dBQzVDLDBCQUEwQjtHQUMxQiwwQkFBMEI7R0FDMUIsdUJBQXVCO0dBQ3ZCLDRCQUE0QjtHQUM1Qix3QkFBd0I7R0FDeEIsdUJBQXVCO0dBQ3ZCLHNCQUFzQjtHQUN0Qix3QkFBd0I7R0FDeEIsd0JBQXdCO0dBQ3hCLGlEQUFpRDtHQUNqRCxpREFBaUQ7QUFDcEQ7O0FBRUE7Ozs7R0FJRzs7QUFFSDs7R0FFRyxpREFBaUQ7R0FDakQsaURBQWlEO0FBQ3BEOztBQUVBOztHQUVHLDZCQUE2QjtHQUM3Qiw2QkFBNkI7QUFDaEM7O0FBRUE7O0dBRUcsNkJBQTZCO0dBQzdCLDZCQUE2QjtBQUNoQzs7QUFFQTs7R0FFRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLDZCQUE2QjtHQUM3Qiw2QkFBNkI7QUFDaEM7O0FBRUE7O0dBRUcsMkJBQTJCO0dBQzNCLDJCQUEyQjtBQUM5Qjs7QUFFQTs7R0FFRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLDZCQUE2QjtHQUM3Qiw2QkFBNkI7QUFDaEM7O0FBRUE7O0dBRUcsbUNBQW1DO0dBQ25DLG1DQUFtQztHQUNuQyxnQ0FBZ0M7R0FDaEMsZ0NBQWdDO0FBQ25DOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQywyQkFBMkI7R0FDM0IsMkJBQTJCO0FBQzlCOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQyw2QkFBNkI7R0FDN0IsNkJBQTZCO0FBQ2hDOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQywyQkFBMkI7R0FDM0IsMkJBQTJCO0FBQzlCOztBQUVBOztHQUVHLGdDQUFnQztHQUNoQywyQkFBMkI7R0FDM0IsMkJBQTJCO0FBQzlCOztBQUNBOzZEQUM2RDs7QUFFN0Q7Ozs7Ozs7O0dBUUc7O0FBRUg7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLHVEQUF1RDtHQUN2RCx1REFBdUQ7QUFDMUQ7O0FBRUE7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLHdEQUF3RDtHQUN4RCx3REFBd0Q7QUFDM0Q7O0FBRUE7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLHdEQUF3RDtHQUN4RCx3REFBd0Q7QUFDM0Q7O0FBR0E7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLDBEQUEwRDtHQUMxRCwwREFBMEQ7QUFDN0Q7O0FBRUE7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLDBEQUEwRDtHQUMxRCwwREFBMEQ7QUFDN0Q7O0FBR0E7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLHdEQUF3RDtHQUN4RCx3REFBd0Q7QUFDM0Q7O0FBRUE7Ozs7R0FJRyw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBQzdCLHdEQUF3RDtHQUN4RCx3REFBd0Q7QUFDM0Q7O0FBRUE7R0FDRztNQUNHLG9CQUFvQjtHQUN2QjtBQUNIOztBQUVBO0dBQ0c7TUFDRyxvQkFBb0I7R0FDdkI7QUFDSDs7QUFFQTs7R0FFRyw0QkFBNEI7R0FDNUIsd0JBQXdCO0dBQ3hCLHdCQUF3QjtHQUN4Qix3QkFBd0I7R0FDeEIsd0JBQXdCO0dBQ3hCLHdCQUF3QjtHQUN4QixtQ0FBbUM7R0FDbkMsd0JBQXdCO0dBQ3hCLHVCQUF1QjtHQUN2Qiw0QkFBNEI7R0FDNUIsZ0NBQWdDO0dBQ2hDLHNCQUFzQjtHQUN0QiwyQkFBMkI7R0FFM0IscUNBQXFDO0dBRXJDLGdFQUFnRTtBQUNuRTs7QUFFQTs7R0FHRyxxQ0FBcUM7R0FDckMsbUNBQW1DO0dBQ25DLG1DQUFtQztBQUN0Qzs7QUFFQTs7R0FHRyxxQ0FBcUM7R0FDckMsbUNBQW1DO0dBQ25DLG1DQUFtQztBQUN0Qzs7QUFFQTs7R0FFRyxzQkFBc0I7R0FDdEIsd0JBQXdCO0dBQ3hCLG9CQUFvQjtBQUN2Qjs7QUFFQSw0RkFBNEY7O0FBQzVGOztHQUlHLHlCQUF5QjtHQUN6Qiw2QkFBNkI7R0FDN0IsMEJBQTBCO0dBQzFCLHlCQUF5QjtHQUN6QixnREFBZ0Q7R0FHaEQsMkJBQTJCO0dBRzNCLDJCQUEyQjtHQUUzQiwyQkFBMkI7R0FDM0IsaURBQWlEO0dBQ2pELGlEQUFpRDtHQUVqRCwwQ0FBMEM7QUFDN0M7O0FBRUE7O0dBRUcsZ0RBQWdEO0dBQ2hELGdEQUFnRDtHQUVoRCw4Q0FBOEM7QUFDakQ7O0FBRUE7O0dBRUcsa0JBQWtCO0dBQ2xCLGFBQWE7QUFDaEI7O0FBRUE7O0dBRUcsNEJBQTRCO0dBQzVCLG1CQUFtQjtHQUNuQixpQkFBaUI7QUFDcEI7O0FBRUE7O0dBRUcsa0JBQWtCO0dBQ2xCLDZCQUE2QjtHQUM3QiwwQkFBMEI7R0FDMUIscUJBQXFCO0dBQ3JCLFdBQVc7QUFDZDs7QUFFQTs7R0FFRyxzQ0FBc0M7R0FDdEMsc0NBQXNDO0dBQ3RDLGtDQUFrQztHQUNsQyxzQ0FBc0M7R0FDdEMscURBQXFEO0dBQ3JELHFEQUFxRDtBQUN4RDs7QUFFQTs7R0FFRyw2Q0FBNkM7R0FDN0MsNkNBQTZDO0dBRTdDLCtFQUErRTtBQUNsRjs7QUFFQTs7R0FFRyw2Q0FBNkM7R0FDN0MsNkNBQTZDO0FBQ2hEOztBQUVBOztHQUVHLDRDQUE0QztHQUM1Qyw0Q0FBNEM7R0FFNUMsZ0ZBQWdGO0FBQ25GOztBQUVBOztHQUVHLDBCQUEwQjtBQUM3Qjs7QUFFQTs7R0FFRyxxQkFBcUI7QUFDeEI7O0FBRUE7O0dBRUcsa0JBQWtCO0FBQ3JCOztBQUVBOztHQUVHLGNBQWM7QUFDakI7O0FBRUE7O0dBRUcsY0FBYztBQUNqQjs7QUFFQSxvREFBb0Q7O0FBRXBEOztHQUVHLGdDQUFnQztHQUNoQyxnQ0FBZ0M7R0FDaEMsa0NBQWtDO0dBQ2xDLGtEQUFrRDtHQUNsRCxxREFBcUQ7R0FDckQscURBQXFEO0dBRXJELCtDQUErQztBQUNsRDs7QUFFQTs7R0FFRyx5REFBeUQ7R0FFekQsNENBQTRDO0FBQy9DOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0dBRUc7TUFDRyxnREFBZ0Q7TUFDaEQsZ0RBQWdEO0dBQ25EOztHQUVBO01BQ0csZ0RBQWdEO01BQ2hELGdEQUFnRDtNQUVoRCx5Q0FBeUM7R0FDNUM7O0dBRUE7TUFDRyxnREFBZ0Q7TUFDaEQsZ0RBQWdEO01BRWhELDhDQUE4QztHQUNqRDs7R0FFQTs7TUFFRyw2QkFBNkI7TUFDN0IsNkJBQTZCO01BQzdCLHdEQUF3RDtNQUN4RCx3REFBd0Q7R0FDM0Q7OztHQUdBOztNQUVHLDZCQUE2QjtNQUM3Qiw2QkFBNkI7TUFDN0IseURBQXlEO01BQ3pELHlEQUF5RDtHQUM1RDs7R0FFQTs7TUFFRyw2QkFBNkI7TUFDN0IsNkJBQTZCO01BQzdCLHNEQUFzRDtNQUN0RCxzREFBc0Q7R0FDekQ7OztHQUdBOztNQUVHLDZCQUE2QjtNQUM3Qiw2QkFBNkI7TUFDN0Isc0RBQXNEO01BQ3RELHNEQUFzRDtHQUN6RDs7R0FFQTs7TUFFRyw2QkFBNkI7TUFDN0IsNkJBQTZCO01BQzdCLHdEQUF3RDtNQUN4RCx3REFBd0Q7R0FDM0Q7QUFDSCIsImZpbGUiOiJsaWJzL2NvbXBvbmVudHMvdWkvc3JjL2xpYi9jb250YWluZXJzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSxcbi5ob21lLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICA6IGFic29sdXRlO1xuICAgd2lkdGggICAgICAgICAgICAgOiAxMDAlO1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiAxMDAlO1xuICAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbiA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1wYWNrICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LXBhY2sgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICAgOiBjZW50ZXI7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNvbnRhaW5lci5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUuaG9tZSxcbi5ob21lLWNvbnRhaW5lci5ob21lIHtcbiAgIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLyogLmhvbWUtaW1hZ2Uge1xuICAgcG9zaXRpb246IGZpeGVkO1xuZGlzcGxheSAgICA6IGZsZXg7XG53aWR0aCAgICAgIDogMjAwJTtcbm9wYWNpdHkgICAgOiAwLjM7XG59ICovXG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLmhvbWUtdGV4dC1jb250YWluZXIsXG4uaG9tZS10ZXh0LWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgLW1zLWZsZXgtZGlyZWN0aW9uICAgOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xufVxuXG5cbi8qIHdlbGNvbWUgPT09PT09PT09PT09PT09PT09PT09ICovXG4vKiB0cmFuc2xhdGUoLTMwJSwgNyUpIHNjYWxlKDAuOCkgKi9cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLFxuc3ZnLmludHJvIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIHdpZHRoICAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAtbXMtZmxleC13cmFwICAgICAgICA6IG5vd3JhcDtcbiAgIGZsZXgtd3JhcCAgICAgICAgICAgIDogbm93cmFwO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgICA6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtbGluZS1wYWNrICAgOiBjZW50ZXI7XG4gICBhbGlnbi1jb250ZW50ICAgICAgICA6IGNlbnRlcjtcbiAgIG92ZXJmbG93ICAgICAgICAgICAgIDogdmlzaWJsZTtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8gLnRleHQsXG5zdmcuaW50cm8gLnRleHQge1xuICAgZGlzcGxheTogbm9uZTtcbiAgIGZpbGwgICA6IG5vbmU7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LFxuc3ZnLmludHJvLmdvIC50ZXh0IHtcbiAgIHBvc2l0aW9uICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgIGRpc3BsYXkgICAgICAgICAgOiBibG9jaztcbiAgIGZvbnQtc2l6ZSAgICAgICAgOiBjYWxjKDEgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgd2lkdGggICAgICAgICAgICA6IGluaGVyaXQ7XG4gICAvKiBoZWlnaHQgICAgICAgIDogMTAwJTsgKi9cbiAgIGZpbGwgICAgICAgICAgICAgOiBub25lO1xuICAgc3Ryb2tlICAgICAgICAgICA6ICNmZmZmZmY2MztcbiAgIHN0cm9rZS13aWR0aCAgICAgOiAyLjhweDtcbiAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtOTAwO1xuICAgc3Ryb2tlLWRhc2hhcnJheSA6IDkwMDtcbiAgIHN0cm9rZS1saW5lY2FwICAgOiByb3VuZDtcbiAgIHN0cm9rZS1saW5lam9pbiAgOiByb3VuZDtcbiAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDIuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICBhbmltYXRpb24gICAgICAgIDogZGFzaCAyLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG4vKiAuaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dCxcbnN2Zy5pbnRyby5nbyAudGV4dCB7XG4gICBmaWxsICAgICAgICAgICAgIDogd2hpdGU7XG4gICB0cmFuc2l0aW9uICAgICAgIDogYWxsIDAuMDVzIDcuNXMgZWFzZS1pbi1vdXQ7XG59ICovXG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoMSksXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCgxKSB7XG4gICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgYW5pbWF0aW9uICAgICAgICA6IGRhc2ggMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCgyKSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2U6bnRoLWNoaWxkKDIpIHtcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xuICAgYW5pbWF0aW9uLWRlbGF5ICAgICAgICA6IDEuMnM7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoMyksXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCgzKSB7XG4gICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS40cztcbiAgIGFuaW1hdGlvbi1kZWxheSAgICAgICAgOiAxLjRzO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2U6bnRoLWNoaWxkKDQpLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoNCkge1xuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQuNHM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogNC40cztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCg1KSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2U6bnRoLWNoaWxkKDUpIHtcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0LjZzO1xuICAgYW5pbWF0aW9uLWRlbGF5ICAgICAgICA6IDQuNnM7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoNiksXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCg2KSB7XG4gICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogNXM7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoNyksXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlOm50aC1jaGlsZCg3KSB7XG4gICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNS4ycztcbiAgIGFuaW1hdGlvbi1kZWxheSAgICAgICAgOiA1LjJzO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2U6bnRoLWNoaWxkKDgpLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZTpudGgtY2hpbGQoOCkge1xuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDYuMnM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogNi4ycztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLW9uZSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2Utb25lIHtcbiAgIHN0cm9rZSAgICAgICAgICAgICAgICAgICAgOiAjZmZmZmZmO1xuICAgLyogYW5pbWF0aW9uLWRlbGF5ICAgICAgICA6IDAuNnM7ICovXG4gICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcbiAgIGFuaW1hdGlvbi1kdXJhdGlvbiAgICAgICAgOiAyLjVzO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UtdHdvLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS10d28ge1xuICAgc3Ryb2tlICAgICAgICAgICAgICAgICA6ICNmZmZmZmY7XG4gICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogMnM7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS10aHJlZSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UtdGhyZWUge1xuICAgc3Ryb2tlICAgICAgICAgICAgICAgICA6ICNmZmZmZmY7XG4gICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4ycztcbiAgIGFuaW1hdGlvbi1kZWxheSAgICAgICAgOiAyLjJzO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UtZm91cixcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UtZm91ciB7XG4gICBzdHJva2UgICAgICAgICAgICAgICAgIDogI2ZmZmZmZjtcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1LjJzO1xuICAgYW5pbWF0aW9uLWRlbGF5ICAgICAgICA6IDUuMnM7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS1maXZlLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS1maXZlIHtcbiAgIHN0cm9rZSAgICAgICAgICAgICAgICAgOiAjZmZmZmZmO1xuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUuNHM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogNS40cztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLXNpeCxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2Utc2l4IHtcbiAgIHN0cm9rZSAgICAgICAgICAgICAgICAgOiAjZmZmZmZmO1xuICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUuOHM7XG4gICBhbmltYXRpb24tZGVsYXkgICAgICAgIDogNS44cztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLXNldmVuLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS1zZXZlbiB7XG4gICBzdHJva2UgICAgICAgICAgICAgICAgIDogI2ZmZmZmZjtcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA2cztcbiAgIGFuaW1hdGlvbi1kZWxheSAgICAgICAgOiA2cztcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLWVpZ2h0LFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS1laWdodCB7XG4gICBzdHJva2UgICAgICAgICAgICAgICAgIDogI2ZmZmZmZjtcbiAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3cztcbiAgIGFuaW1hdGlvbi1kZWxheSAgICAgICAgOiA3cztcbn1cbi8qIGNvbW1lbnRlZCBvdXQgYXMgb2YgaXNzdWUgd2hlbiBsb2FkaW5nIHRoaXMgY3NzIGJlZm9yZSBwYXJlbnQgY29udGFpbmVyIGNyZWF0ZWQgc28gc2l6ZSBpcyB1bmtub3duLiBcbiAgIEhhdmUgc2V0IHRoaXMgaW4gdHMgZmlsZSBpbiB0aGUgbmdBZnRlclZpZXdJbml0KCkgbWV0aG9kICovXG4gICBcbi8qIC5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LnRleHQtb25lLFxuc3ZnLmludHJvLmdvIC50ZXh0LnRleHQtb25lLFxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLW9uZSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2Utb25lIHtcbiAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgdHJhbnNmb3JtLW9yaWdpbiAgICAgICAgOiB0b3A7XG4gICAtd2Via2l0LXRyYW5zZm9ybSAgICAgICA6IHNjYWxlKDMuNSkgdHJhbnNsYXRlKDUwJSwgMi41JSk7XG4gICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDMuNSkgdHJhbnNsYXRlKDUwJSwgMi41JSk7XG59ICovIFxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXR3byxcbnN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXR3byxcbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS10d28sXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLXR3byB7XG4gICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgxLjgpIHRyYW5zbGF0ZSg1MCUsIDklKTtcbiAgIHRyYW5zZm9ybSAgICAgICAgICAgICAgIDogc2NhbGUoMS44KSB0cmFuc2xhdGUoNTAlLCA5JSk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LnRleHQtdGhyZWUsXG5zdmcuaW50cm8uZ28gLnRleHQudGV4dC10aHJlZSxcbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS10aHJlZSxcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2UtdGhyZWUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IHRvcDtcbiAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMS44KSB0cmFuc2xhdGUoNTAlLCAxMiUpO1xuICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgOiBzY2FsZSgxLjgpIHRyYW5zbGF0ZSg1MCUsIDEyJSk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LnRleHQtZm91cixcbnN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LWZvdXIsXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2UtZm91cixcbnN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2UtZm91ciB7XG4gICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgxLjcpIHRyYW5zbGF0ZSg1MCUsIDQyJSk7XG4gICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDEuNykgdHJhbnNsYXRlKDUwJSwgNDIlKTtcbn1cblxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LWZpdmUsXG5zdmcuaW50cm8uZ28gLnRleHQudGV4dC1maXZlLFxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLWZpdmUsXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLWZpdmUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IHRvcDtcbiAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMS42KSB0cmFuc2xhdGUoNTAlLCA0Ny41JSk7XG4gICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDEuNikgdHJhbnNsYXRlKDUwJSwgNDcuNSUpO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXNpeCxcbnN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXNpeCxcbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS1zaXgsXG5zdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLXNpeCB7XG4gICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZSg1MCUsIDU1LjUlKTtcbiAgIHRyYW5zZm9ybSAgICAgICAgICAgICAgIDogc2NhbGUoMS41KSB0cmFuc2xhdGUoNTAlLCA1NS41JSk7XG59XG5cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQudGV4dC1zZXZlbixcbnN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXNldmVuLFxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLXNldmVuLFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS1zZXZlbiB7XG4gICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZSg1MCUsIDU4JSk7XG4gICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDEuNSkgdHJhbnNsYXRlKDUwJSwgNTglKTtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQudGV4dC1laWdodCxcbnN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LWVpZ2h0LFxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSBzdmcuaW50cm8uZ28gLnRleHQtc3Ryb2tlLnRleHQtc3Ryb2tlLWVpZ2h0LFxuc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS1laWdodCB7XG4gICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgyKSB0cmFuc2xhdGUoNTAlLCA0Ny41JSk7XG4gICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDIpIHRyYW5zbGF0ZSg1MCUsIDQ3LjUlKTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xuICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICB9XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLnJlbG9hZCxcbi5yZWxvYWQge1xuICAgcG9zaXRpb24gICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbSAgICAgICAgICAgIDogMTVweDtcbiAgIHJpZ2h0ICAgICAgICAgICAgIDogMTVweDtcbiAgIGJhY2tncm91bmQgICAgICAgIDogI2ZmZjtcbiAgIGJvcmRlciAgICAgICAgICAgIDogbm9uZTtcbiAgIGJvcmRlci1yYWRpdXMgICAgIDogMjBweDtcbiAgIG91dGxpbmUgICAgICAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xuICAgZm9udC1zaXplICAgICAgICAgOiAxMXB4O1xuICAgbGluZS1oZWlnaHQgICAgICAgOiAxLjU7XG4gICBwYWRkaW5nICAgICAgICAgICA6IDhweCAxMnB4O1xuICAgLyogdGV4dC10cmFuc2Zvcm0gOiB1cHBlcmNhc2U7ICovXG4gICB6LWluZGV4ICAgICAgICAgICA6IDEwO1xuICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyO1xuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA3cHggIzM1MGU0YztcbiAgIGJveC1zaGFkb3cgICAgICAgIDogMCA2cHggN3B4ICMzNTBlNGM7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGN1YmljLWJlemllcigwLjY3LCAwLjEzLCAwLjEsIDAuODEpO1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC4xcyBjdWJpYy1iZXppZXIoMC42NywgMC4xMywgMC4xLCAwLjgxKTtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAucmVsb2FkOmhvdmVyLFxuLnJlbG9hZDpob3ZlciB7XG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCAjMzUwZTRjO1xuICAgYm94LXNoYWRvdyAgICAgICAgOiAwIDRweCA0cHggIzM1MGU0YztcbiAgIC13ZWJraXQtdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgxcHgpO1xuICAgdHJhbnNmb3JtICAgICAgICAgOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLnJlbG9hZDphY3RpdmUsXG4ucmVsb2FkOmFjdGl2ZSB7XG4gICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCAjMjQ0Qjk0O1xuICAgYm94LXNoYWRvdyAgICAgICAgOiAwIDFweCAycHggIzI0NEI5NDtcbiAgIC13ZWJraXQtdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgycHgpO1xuICAgdHJhbnNmb3JtICAgICAgICAgOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLnJlbG9hZCBzdmcsXG4ucmVsb2FkIHN2ZyB7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgcG9zaXRpb24gICAgICA6IHJlbGF0aXZlO1xuICAgdG9wICAgICAgICAgICA6IC0ycHg7XG59XG5cbi8qIEkgYW0gYSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAucm90YXRpbmctdGV4dCxcbi5yb3RhdGluZy10ZXh0IHtcbiAgIGRpc3BsYXkgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4O1xuICAgcG9zaXRpb24gICAgICAgICAgIDogYWJzb2x1dGU7XG4gICB3aWR0aCAgICAgICAgICAgICAgOiAxMDB2dztcbiAgIGhlaWdodCAgICAgICAgICAgICA6IDEwMCU7XG4gICBmb250LXNpemUgICAgICAgICAgOiBjYWxjKDEuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAtd2Via2l0LWJveC1wYWNrICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1hbGlnbiAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICBhbGlnbi1zZWxmICAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LXRyYW5zZm9ybSAgOiB0cmFuc2xhdGUoLTclLCAxMCUpIHNjYWxlKDApO1xuICAgdHJhbnNmb3JtICAgICAgICAgIDogdHJhbnNsYXRlKC03JSwgMTAlKSBzY2FsZSgwKTtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbiA6IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcbiAgIHRyYW5zaXRpb24gICAgICAgICA6IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAucm90YXRpbmctdGV4dC5yb3RhdGluZy1hY3RpdmUsXG4ucm90YXRpbmctdGV4dC5yb3RhdGluZy1hY3RpdmUge1xuICAgLXdlYmtpdC10cmFuc2Zvcm0gOiB0cmFuc2xhdGUoLTclLCAxMCUpIHNjYWxlKDEpO1xuICAgdHJhbnNmb3JtICAgICAgICAgOiB0cmFuc2xhdGUoLTclLCAxMCUpIHNjYWxlKDEpO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNjAwbXMgNS40cyBlYXNlLWluLW91dDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDYwMG1zIDUuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLnJvdGF0aW5nLXRleHQtb25lLFxuLnJvdGF0aW5nLXRleHQtb25lIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGhlaWdodCAgOiAxZW07XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgZGl2LFxuZGl2IHtcbiAgIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XG4gICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgbWFyZ2luICAgICAgICA6IDA7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLndvcmQsXG4ud29yZCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB3aWR0aCAgIDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgIHdpZHRoICAgOiAtbW96LW1heC1jb250ZW50O1xuICAgd2lkdGggICA6IG1heC1jb250ZW50O1xuICAgb3BhY2l0eSA6IDA7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLmxldHRlcixcbi5sZXR0ZXIge1xuICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDI1cHg7XG4gICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IDUwJSA1MCUgMjVweDtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcbiAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogdHJhbnNsYXRlWigyNXB4KSAhaW1wb3J0YW50O1xuICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgOiB0cmFuc2xhdGVaKDI1cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLmxldHRlci5vdXQsXG4ubGV0dGVyLm91dCB7XG4gICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2Zvcm0gICAgICAgICA6IHJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC4zMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAubGV0dGVyLmJlaGluZCxcbi5sZXR0ZXIuYmVoaW5kIHtcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgIWltcG9ydGFudDtcbiAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVYKC05MGRlZykgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAubGV0dGVyLmluLFxuLmxldHRlci5pbiB7XG4gICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZVgoMGRlZykgIWltcG9ydGFudDtcbiAgIHRyYW5zZm9ybSAgICAgICAgIDogcm90YXRlWCgwZGVnKSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zOHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjM4cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgIWltcG9ydGFudDtcbn1cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAud2lzdGVyaWEsXG4ud2lzdGVyaWEge1xuICAgY29sb3I6IHZhcigtLWxpZ2h0LXB1cnBsZSk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLmJlbGl6ZSxcbi5iZWxpemUge1xuICAgY29sb3I6IHZhcigtLW1hZ2VudGEpO1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIC5wb21lZ3JhbmF0ZSxcbi5wb21lZ3JhbmF0ZSB7XG4gICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5cbi5ob21lLWNvbnRhaW5lci5sYW5kc2NhcGUgLmdyZWVuLFxuLmdyZWVuIHtcbiAgIGNvbG9yOiAjMTZhMDg1O1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIC5taWRuaWdodCxcbi5taWRuaWdodCB7XG4gICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLyogaGVhZHNob3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmhvbWUtY29udGFpbmVyLmxhbmRzY2FwZSAuaGVhZHNob3QtaW1hZ2UsXG4uaGVhZHNob3QtaW1hZ2Uge1xuICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IGNlbnRlcjtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgICAgIDogYWJzb2x1dGU7XG4gICB3aWR0aCAgICAgICAgICAgICAgICAgICA6IGNhbGMoMCogdmFyKC0tZm9udFNpemUpKTtcbiAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICAgICA6IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgICAgIDogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZS1jb250YWluZXIubGFuZHNjYXBlIC5oZWFkc2hvdC1pbWFnZS5pbWFnZS1hY3RpdmUsXG4uaGVhZHNob3QtaW1hZ2UuaW1hZ2UtYWN0aXZlIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogY2FsYygxMSAqIHZhcigtLWZvbnRTaXplKSkgIWltcG9ydGFudDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDYwMG1zIDVzIGVhc2UtaW4tb3V0O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNjAwbXMgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIHBvcnRyYWl0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgIC5ob21lLWNvbnRhaW5lci5wb3J0cmFpdCAuaGVhZHNob3QtaW1hZ2Uge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC00NSUpO1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC00NSUpO1xuICAgfVxuXG4gICAuaG9tZS1jb250YWluZXIucG9ydHJhaXQgLnJvdGF0aW5nLXRleHQge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gOiB0cmFuc2xhdGUoLTI1JSwgNCUpIHNjYWxlKDApO1xuICAgICAgdHJhbnNmb3JtICAgICAgICAgOiB0cmFuc2xhdGUoLTI1JSwgNCUpIHNjYWxlKDApO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcbiAgIH1cblxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IC5yb3RhdGluZy10ZXh0LnJvdGF0aW5nLWFjdGl2ZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgtMjUlLCA0JSkgc2NhbGUoMSk7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgICA6IHRyYW5zbGF0ZSgtMjUlLCA0JSkgc2NhbGUoMSk7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcyA1LjRzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNjAwbXMgNS40cyBlYXNlLWluLW91dDtcbiAgIH1cblxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LWZvdXIsXG4gICAuaG9tZS1jb250YWluZXIucG9ydHJhaXQgc3ZnLmludHJvLmdvIC50ZXh0LXN0cm9rZS50ZXh0LXN0cm9rZS1mb3VyIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbiAgICAgICAgOiB0b3A7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybSAgICAgICA6IHNjYWxlKDEuNSkgdHJhbnNsYXRlKDUwJSwgNDIlKTtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgICAgICAgIDogc2NhbGUoMS41KSB0cmFuc2xhdGUoNTAlLCA0MiUpO1xuICAgfVxuXG5cbiAgIC5ob21lLWNvbnRhaW5lci5wb3J0cmFpdCBzdmcuaW50cm8uZ28gLnRleHQudGV4dC1maXZlLFxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2UtZml2ZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogdG9wO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gICAgICAgOiBzY2FsZSgxLjQ1KSB0cmFuc2xhdGUoNTAlLCA0NiUpO1xuICAgICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgOiBzY2FsZSgxLjQ1KSB0cmFuc2xhdGUoNTAlLCA0NiUpO1xuICAgfVxuXG4gICAuaG9tZS1jb250YWluZXIucG9ydHJhaXQgc3ZnLmludHJvLmdvIC50ZXh0LnRleHQtc2l4LFxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2Utc2l4IHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbiAgICAgICAgOiB0b3A7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybSAgICAgICA6IHNjYWxlKDEpIHRyYW5zbGF0ZSg1MCUsIDc1JSk7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDEpIHRyYW5zbGF0ZSg1MCUsIDc1JSk7XG4gICB9XG5cblxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LXNldmVuLFxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2Utc2V2ZW4ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IHRvcDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMSkgdHJhbnNsYXRlKDUwJSwgNzglKTtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgICAgICAgIDogc2NhbGUoMSkgdHJhbnNsYXRlKDUwJSwgNzglKTtcbiAgIH1cblxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC50ZXh0LWVpZ2h0LFxuICAgLmhvbWUtY29udGFpbmVyLnBvcnRyYWl0IHN2Zy5pbnRyby5nbyAudGV4dC1zdHJva2UudGV4dC1zdHJva2UtZWlnaHQge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luICAgICAgICA6IHRvcDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMS41KSB0cmFuc2xhdGUoNTAlLCA1NyUpO1xuICAgICAgdHJhbnNmb3JtICAgICAgICAgICAgICAgOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZSg1MCUsIDU3JSk7XG4gICB9XG59Il19 */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/home/home.component.html":
/*!*********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/home/home.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page home-container home\">\n    <!-- <img *ngIf=\"homeImage\" class=\"menu-icon home-image image\" [src]=\"homeImage\" alt=\"home-image\" /> -->\n\n    <div class=\"home-text-container\">\n        <svg class=\"intro\">\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-one\"\n                clip-path=\"url(#text1)\">Hello.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-two\" clip-path=\"url(#text2)\">My name\n                is</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-three\" clip-path=\"url(#text3)\">Dewald\n                van den Berg.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-four\" clip-path=\"url(#text4)\">Feel free to learn more about me,</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-five\" clip-path=\"url(#text5)\">review my skills, and see what I've done.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-six\" clip-path=\"url(#text6)\">What would you do if you had a</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-seven\" clip-path=\"url(#text7)\">software expert available at your fingertips?</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-eight\" clip-path=\"url(#text8)\">Talk to me if you like what you see.</text>\n\n\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-one\"\n                clip-path=\"url(#text1)\">Hello.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-two\"\n                clip-path=\"url(#text2)\">My\n                name is</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-three\"\n                clip-path=\"url(#text3)\">\n                Dewald van den Berg.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-four\"\n                clip-path=\"url(#text4)\">\n                Feel free to learn more about me,</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-five\"\n                clip-path=\"url(#text5)\">\n                review my skills, and see what I've done.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-six\"\n                clip-path=\"url(#text6)\">\n                I like to create good looking and well performing web-apps</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-seven\"\n                clip-path=\"url(#text7)\">\n                with the most up to date Javascript framework stacks.</text>\n            <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-stroke text-stroke-eight\"\n                clip-path=\"url(#text8)\">\n                Talk to me if you like what you see.</text>\n\n            <defs>\n                <clipPath id=\"text1\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-one\">Hello.</text>\n                </clipPath>\n                <clipPath id=\"text2\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-two\">My name is</text>\n                </clipPath>\n                <clipPath id=\"text3\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-three\">Dewald van den Berg.</text>\n                </clipPath>\n                <clipPath id=\"text4\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-four\">Feel free to learn more about me,</text>\n                </clipPath>\n                <clipPath id=\"text5\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-five\">review my skills, and see what I've done.</text>\n                </clipPath>\n                <clipPath id=\"text6\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-six\">I like to create good looking and well performing web-apps</text>\n                </clipPath>\n                <clipPath id=\"text7\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-seven\">with the most up to date Javascript framework stacks.</text>\n                </clipPath>\n                <clipPath id=\"text8\">\n                    <text text-anchor=\"middle\" x=\"0\" y=\"0\" class=\"text text-two-eight\">Talk to me if you like what you see.</text>\n                </clipPath>\n            </defs>\n        </svg>\n        <div class=\"rotating-text\">\n            <div class=\"rotating-text-one\">I'm a</div>\n            <div class=\"rotating-text-one\">\n                <span class=\"word wisteria\"> Front-end Engineer.</span>\n\n                <span class=\"word belize\"> Javascript specialist.</span>\n\n                <span class=\"word pomegranate\"> Full-stack Engineer.</span>\n\n            </div>\n        </div>\n        <img *ngIf=\"headShot\" class=\"headshot-image image\" [src]=\"headShot\" alt=\"headshot-image\" />\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/home/home.component.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/home/home.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


window.addEventListener("orientationchange", function () {
    var orientation = screen.orientation.angle;
    var homeContainer = document.querySelector('.home-container');
    if (orientation === 90) {
        // landscape
        homeContainer.classList.remove('portrait');
        homeContainer.classList.add('landscape');
    }
    else if (orientation === 0) {
        // portrait
        homeContainer.classList.remove('landscape');
        homeContainer.classList.add('portrait');
    }
});
var HomeComponent = /** @class */ (function () {
    function HomeComponent(images, brand) {
        this.images = images;
        this.brand = brand;
        this.wordArray = [];
        this.currentWord = 0;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headShot = images.headShot;
        this.localState = __assign({}, this.landingState);
    }
    HomeComponent.prototype.ngOnInit = function () {
        // window.addEventListener( 'scroll', this.scroll, true );
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    };
    HomeComponent.prototype.ngOnChanges = function () {
        this.localState = this.landingState;
        this.state.emit(__assign({}, this.localState));
        this.homeContainer = document.querySelector(".home-container");
        var intro = document.querySelector('.intro');
        var headshotImage = document.querySelector('.headshot-image');
        var rotatingText = document.querySelector('.rotating-text');
        if (this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 0) {
            if (this.homeContainer)
                this.homeContainer.classList.add('home');
            // setTimeout( () => {
            intro.classList.add('go');
            headshotImage.classList.add('image-active');
            rotatingText.classList.add('rotating-active');
            // }, 1000 );
        }
        else {
            if (this.landingState) {
                if (this.homeContainer)
                    this.homeContainer.classList.remove('home');
                intro.classList.remove('go');
                headshotImage.classList.remove('image-active');
                rotatingText.classList.remove('rotating-active');
            }
        }
        this.localState = this.landingState;
        this.screenOrientationChange();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var textTextOne = document.querySelector('.text.text-one');
        var textStrokeTextStrokeOne = document.querySelector('.text-stroke.text-stroke-one');
        textTextOne.setAttribute('style', "\n            -webkit-transform-origin: top;\n            transform-origin        : top;\n            -webkit-transform       : scale(3.5) translate(50%, 2.5%);\n            transform               : scale(3.5) translate(50%, 2.5%);\n        ");
        textStrokeTextStrokeOne.setAttribute('style', "\n            -webkit-transform-origin: top;\n            transform-origin        : top;\n            -webkit-transform       : scale(3.5) translate(50%, 2.5%);\n            transform               : scale(3.5) translate(50%, 2.5%);\n        ");
        console.log(textTextOne);
        console.log(textStrokeTextStrokeOne);
        var headshotImage = document.querySelector('.headshot-image');
        var rotatingText = document.querySelector('.rotating-text');
        var intro = document.querySelector('.intro');
        setTimeout(function () {
            intro.classList.add('go');
            headshotImage.classList.add('image-active');
            rotatingText.classList.add('rotating-active');
        }, 200);
        // I am a ================================================
        var words = document.getElementsByClassName('word');
        var wordArray = [];
        var currentWord = 0;
        words[currentWord]['style'].opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }
        var letter = document.getElementsByClassName('letter');
        for (var i = 0; i < letter.length; i++) {
            letter[i]['style'].transformOrigin = '50% 50% 25px';
            letter[i]['style'].position = 'relative';
            letter[i]['style'].display = 'inline-block';
            letter[i]['style'].transform = 'translateZ(25px)';
        }
        function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }
            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                nw[i].style.transform = 'rotateX(90deg)';
                animateLetterIn(nw, i);
            }
            currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
        }
        function animateLetterOut(cw, i) {
            setTimeout(function () {
                cw[i].className = 'letter out';
                cw[i].style.transform = 'rotateX(90deg)';
                cw[i].style.transition = 'all 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
            }, i * 80);
        }
        function animateLetterIn(nw, i) {
            setTimeout(function () {
                nw[i].className = 'letter in';
                nw[i].style.transform = 'rotateX(0deg)';
                nw[i].style.transition = 'all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
            }, 340 + (i * 80));
        }
        function splitLetters(word) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                if (letter.innerHTML === " ") {
                    letter.innerHTML = '&nbsp';
                }
                word.appendChild(letter);
                letters.push(letter);
            }
            wordArray.push(letters);
        }
        changeWord();
        setInterval(changeWord, 4000);
        this.screenOrientationChange();
    };
    HomeComponent.prototype.screenOrientationChange = function () {
        var orientation = screen.orientation.angle;
        this.homeContainer = document.querySelector('.home-container');
        if (orientation === 90) {
            // landscape
            this.homeContainer.classList.remove('portrait');
            this.homeContainer.classList.add('landscape');
        }
        else if (orientation === 0) {
            // portrait
            this.homeContainer.classList.remove('landscape');
            this.homeContainer.classList.add('portrait');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HomeComponent.prototype, "state", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "../../../libs/components/ui/src/lib/containers/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "../../../libs/components/ui/src/lib/containers/home/home.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object, Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/index.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShellComponent, LandingComponent, VideoOverlayComponent, ListItemsComponent, HomeComponent, AboutComponent, SkillsComponent, CodeComponent, ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell/shell.component */ "../../../libs/components/ui/src/lib/containers/shell/shell.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return _shell_shell_component__WEBPACK_IMPORTED_MODULE_0__["ShellComponent"]; });

/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "../../../libs/components/ui/src/lib/containers/landing/landing.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]; });

/* harmony import */ var _video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-overlay/video-overlay.component */ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayComponent", function() { return _video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_2__["VideoOverlayComponent"]; });

/* harmony import */ var _list_items_list_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-items/list-items.component */ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItemsComponent", function() { return _list_items_list_items_component__WEBPACK_IMPORTED_MODULE_3__["ListItemsComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "../../../libs/components/ui/src/lib/containers/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "../../../libs/components/ui/src/lib/containers/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]; });

/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "../../../libs/components/ui/src/lib/containers/skills/skills.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"]; });

/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code/code.component */ "../../../libs/components/ui/src/lib/containers/code/code.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return _code_code_component__WEBPACK_IMPORTED_MODULE_7__["CodeComponent"]; });

/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "../../../libs/components/ui/src/lib/containers/contact/contact.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]; });












/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/landing/landing.component.css":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/landing/landing.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-shell {\n    position             : relative;\n    box-sizing           : border-box;\n    display              : flex;\n    flex-flow            : row;\n    top                  : 0;\n    left                 : 0;\n    width                : inherit;\n    height               : inherit;\n    color                : rgb(255, 255, 255, 0.8);\n    background-color     : var(--back-black);\n    /*background-image   : var(--black-deepBlue);*/\n    z-index              : 0;\n    overflow             : hidden;\n    transition           : all ease-in-out 2s;\n    -webkit-transition   : all ease-in-out 2s;\n    -moz-transition      : all ease-in-out 2s;\n    -ms-transition       : all ease-in-out 2s;\n    -o-transition        : all ease-in-out 2s;\n}\n\n.page {\n    position: absolute;\n    display : flex;\n    width   : 95vw;\n    height  : inherit;\n    z-index : 0;\n    opacity : 0;\n    overflow: hidden;\n}\n\n.home-page-active .home-page {\n    /* display: flex; */\n    z-index   : 10;\n    opacity   : 1;\n}\n\n.about-page-active .about-page {\n    /* display: flex; */\n    z-index   : 10;\n    opacity   : 1;\n}\n\n.skills-page-active .skills-page {\n    /* display: flex; */\n    z-index   : 10;\n    opacity   : 1;\n}\n\n.code-page-active .code-page {\n    /* display: flex; */\n    z-index   : 10;\n    opacity   : 1;\n}\n\n.contact-page-active .contact-page {\n    /* display: flex; */\n    z-index   : 10;\n    opacity   : 1;\n}\n\n.list-item {\n    position         : absolute;\n    display          : flex;\n    align-items      : unset;\n    right            : 0;\n    bottom           : unset;\n    width            : 18vw;\n    height           : unset;\n    z-index          : 10;\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n    .portrait .list-item {\n        bottom           : 0;\n        width            : 100%;\n        height           : -webkit-min-content !important;\n        height           : -moz-min-content !important;\n        height           : min-content !important;\n        align-items      : flex-end;\n    }\n\n    .portrait>.page {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFFL0IsaUNBQWlDO0lBR2pDLDJCQUEyQjtJQUkzQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsOENBQThDO0lBQzlDLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUdsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUczQix1QkFBdUI7SUFHdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUEsb0RBQW9EOztBQUVwRDtJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixpREFBaUQ7UUFDakQsOENBQThDO1FBQzlDLHlDQUF5QztRQUd6QywyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJsaWJzL2NvbXBvbmVudHMvdWkvc3JjL2xpYi9jb250YWluZXJzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc2hlbGwge1xuICAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nICAgOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmcgICAgICAgICAgIDogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogaG9yaXpvbnRhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1mbG93ICAgICAgICA6IHJvdztcbiAgICBmbGV4LWZsb3cgICAgICAgICAgICA6IHJvdztcbiAgICB0b3AgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgbGVmdCAgICAgICAgICAgICAgICAgOiAwO1xuICAgIHdpZHRoICAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgICBoZWlnaHQgICAgICAgICAgICAgICA6IGluaGVyaXQ7XG4gICAgY29sb3IgICAgICAgICAgICAgICAgOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICAgICA6IHZhcigtLWJhY2stYmxhY2spO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZSAgIDogdmFyKC0tYmxhY2stZGVlcEJsdWUpOyovXG4gICAgei1pbmRleCAgICAgICAgICAgICAgOiAwO1xuICAgIG92ZXJmbG93ICAgICAgICAgICAgIDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDJzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbiAgIDogYWxsIGVhc2UtaW4tb3V0IDJzO1xuICAgIC1tb3otdHJhbnNpdGlvbiAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDJzO1xuICAgIC1tcy10cmFuc2l0aW9uICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDJzO1xuICAgIC1vLXRyYW5zaXRpb24gICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDJzO1xufVxuXG4ucGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXkgOiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5IDogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheSA6IGZsZXg7XG4gICAgd2lkdGggICA6IDk1dnc7XG4gICAgaGVpZ2h0ICA6IGluaGVyaXQ7XG4gICAgei1pbmRleCA6IDA7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtcGFnZS1hY3RpdmUgLmhvbWUtcGFnZSB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICB6LWluZGV4ICAgOiAxMDtcbiAgICBvcGFjaXR5ICAgOiAxO1xufVxuXG4uYWJvdXQtcGFnZS1hY3RpdmUgLmFib3V0LXBhZ2Uge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgei1pbmRleCAgIDogMTA7XG4gICAgb3BhY2l0eSAgIDogMTtcbn1cblxuLnNraWxscy1wYWdlLWFjdGl2ZSAuc2tpbGxzLXBhZ2Uge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgei1pbmRleCAgIDogMTA7XG4gICAgb3BhY2l0eSAgIDogMTtcbn1cblxuLmNvZGUtcGFnZS1hY3RpdmUgLmNvZGUtcGFnZSB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICB6LWluZGV4ICAgOiAxMDtcbiAgICBvcGFjaXR5ICAgOiAxO1xufVxuXG4uY29udGFjdC1wYWdlLWFjdGl2ZSAuY29udGFjdC1wYWdlIHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIHotaW5kZXggICA6IDEwO1xuICAgIG9wYWNpdHkgICA6IDE7XG59XG5cbi5saXN0LWl0ZW0ge1xuICAgIHBvc2l0aW9uICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheSAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXkgICAgICAgICAgOiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiB1bnNldDtcbiAgICAtbXMtZmxleC1hbGlnbiAgIDogdW5zZXQ7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IHVuc2V0O1xuICAgIHJpZ2h0ICAgICAgICAgICAgOiAwO1xuICAgIGJvdHRvbSAgICAgICAgICAgOiB1bnNldDtcbiAgICB3aWR0aCAgICAgICAgICAgIDogMTh2dztcbiAgICBoZWlnaHQgICAgICAgICAgIDogdW5zZXQ7XG4gICAgei1pbmRleCAgICAgICAgICA6IDEwO1xufVxuXG4vKiBwb3J0cmFpdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC5wb3J0cmFpdCAubGlzdC1pdGVtIHtcbiAgICAgICAgYm90dG9tICAgICAgICAgICA6IDA7XG4gICAgICAgIHdpZHRoICAgICAgICAgICAgOiAxMDAlO1xuICAgICAgICBoZWlnaHQgICAgICAgICAgIDogLXdlYmtpdC1taW4tY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQgICAgICAgICAgIDogLW1vei1taW4tY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQgICAgICAgICAgIDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ24gICA6IGVuZDtcbiAgICAgICAgYWxpZ24taXRlbXMgICAgICA6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5wb3J0cmFpdD4ucGFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/landing/landing.component.html":
/*!***************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/landing/landing.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-shell\" id='section-shell' (mousemove)=\"showCoords($event)\">\n    <!-- <img *ngIf=\"mainBackground\" class=\"main-background-image image image-white\" [src]=\"mainBackground\"\n        alt=\"mainBackground-image\" />\n    <img *ngIf=\"logo\" class=\"logo-image image\" [src]=\"logo\" alt=\"logo-image\" (click)='dee-devClick()'/> -->\n\n    <!-- (listItemInfodee-devState)=\"changedee-devState($event)\"\n    (listItemInfoListItemState)=\"changeListItemState($event)\"\n    (listItemInfoListItemInfoState)=\"changeListItemInfoState($event)\"\n    (listItemInfoListItemDetailState)=\"changeListItemDetailState($event)\"\n    [landingListItemState]='landingListItemState | async'\n    [landingdee-devState]='landingdee-devState | async'\n    [landingListItemInfoState]='landingListItemInfoState | async'\n    [landingListItemDetailState]='landingListItemDetailState | async'> -->\n    <!-- <div class=\"landing-left\"> -->\n    <!-- <dee-dev-list-items-info class=\"list-items-info\" (scrolling)='scrolling()'></dee-dev-list-items-info> -->\n    <!-- </div> -->\n\n    <!-- <div class=\"landing-right\"> -->\n    <!-- <img *ngIf=\"backImage\" class=\"back-image image image-white\" [src]=\"backImage\" alt=\"back-image\"\n            (click)='onBackClick()' /> -->\n\n    <!-- <dee-dev-home class=\"main-home\"></dee-dev-home>\n        <dee-dev-about-me class=\"main-about-me\"></dee-dev-about-me>\n        <dee-dev-skills class=\"main-skills\"></dee-dev-skills>\n        <dee-dev-code-lab class=\"main-code-lab\"></dee-dev-code-lab>\n        <dee-dev-talk-to-me class=\"main-talk-to-me\"></dee-dev-talk-to-me> -->\n    <home class=\"page home-page\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n    </home>\n    <about class=\"page about-page\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n    </about>\n    <skills class=\"page skills-page\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n    </skills>\n    <code-lab class=\"page code-page\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n        </code-lab>\n    <contact class=\"page contact-page\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n    </contact>\n\n    <dee-dev-list-items class=\"list-item\" (state)=\"changeState($event)\" [landingState]='landingState | async'>\n    </dee-dev-list-items>\n    <!-- </div> -->\n</section>\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/landing/landing.component.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/landing/landing.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



window.addEventListener("orientationchange", function () {
    var orientation = screen.orientation.angle;
    var sectionShell = document.querySelector('.section-shell');
    if (orientation === 90) {
        // landscape
        sectionShell.classList.remove('portrait');
        sectionShell.classList.add('landscape');
    }
    else if (orientation === 0) {
        // portrait
        sectionShell.classList.remove('landscape');
        sectionShell.classList.add('portrait');
    }
});
var LandingComponent = /** @class */ (function () {
    // @HostListener( 'click', ['$event.target'] )
    // landingClicked ( target ) {
    //     this.landingListItemState.subscribe( object => this.localdee-devCurrentState = object );
    //     this.sectionLanding = document.querySelector( '.section-landing' );
    //     this.dee-devInner = document.querySelector( '.dee-dev-inner' );
    //     if ( target && this.sectionLanding && this.dee-devInner && this.sectionLanding !== undefined && this.dee-devInner !== undefined ) {
    //         if ( target.classList.contains( 'dee-devState' ) ) {
    //             if ( this.localdee-devCurrentState.state === 'none' ) {
    //                 this.sectionLanding.classList.remove( 'clicked' );
    //                 this.dee-devInner.classList.remove( 'clicked' );
    //             } else if ( this.localdee-devCurrentState.state === 'one' ) {
    //                 this.sectionLanding.classList.add( 'clicked' );
    //                 this.dee-devInner.classList.add( 'clicked' );
    //             }
    //         }
    //     }
    // }
    function LandingComponent(images, brand) {
        this.images = images;
        this.brand = brand;
        this.logo = brand.image.logo;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.ngOnChanges = function () {
        this.screenOrientationChange();
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.toolbarElement = document.querySelector('.toolbar');
        this.changeState(__assign({}, this.landingState, { menu: { activeMenu: 0, lastMenuClicked: 0 } }));
        this.screenOrientationChange();
    };
    LandingComponent.prototype.screenOrientationChange = function () {
        var orientation = screen.orientation.angle;
        this.sectionShell = document.querySelector('.section-shell');
        if (orientation === 90) {
            // landscape
            this.sectionShell.classList.remove('portrait');
            this.sectionShell.classList.add('landscape');
        }
        else if (orientation === 0) {
            // portrait
            this.sectionShell.classList.remove('landscape');
            this.sectionShell.classList.add('portrait');
        }
    };
    LandingComponent.prototype.showCoords = function (event) {
        if (this.toolbarElement) {
            this.x = event.clientX / window.innerWidth * 100;
            this.x >= 80
                ? (this.toolbarElement.classList.remove('small'),
                    this.toolbarElement.classList.add('large'))
                : (this.toolbarElement.classList.remove('large'),
                    this.toolbarElement.classList.add('small'));
        }
    };
    LandingComponent.prototype.changeState = function (event) {
        var currentActive = document.querySelector('.section-shell');
        this.landingState = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(event);
        if (currentActive)
            this.removeClasses();
        if (event && event.menu) {
            switch (event.menu.activeMenu) {
                case 0:
                    currentActive.classList.add('home-page-active');
                    break;
                case 1:
                    currentActive.classList.add('about-page-active');
                    break;
                case 2:
                    currentActive.classList.add('skills-page-active');
                    break;
                case 3:
                    currentActive.classList.add('code-page-active');
                    break;
                case 4:
                    currentActive.classList.add('contact-page-active');
                    break;
            }
        }
    };
    LandingComponent.prototype.removeClasses = function () {
        var currentActive = document.querySelector('.section-shell');
        currentActive.classList.remove('home-page-active');
        currentActive.classList.remove('about-page-active');
        currentActive.classList.remove('skills-page-active');
        currentActive.classList.remove('code-page-active');
        currentActive.classList.remove('contact-page-active');
    };
    LandingComponent.prototype.scrolling = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dee-dev-ui-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "../../../libs/components/ui/src/lib/containers/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "../../../libs/components/ui/src/lib/containers/landing/landing.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object, Object])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.css":
/*!********************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/list-items/list-items.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar,\n.toolbar.landscape {\n  position             : relative;\n  display              : flex;\n  flex-direction       : column;\n  flex-wrap            : nowrap;\n  justify-content      : space-around;\n  align-items          : center;\n  align-content        : center;\n  height               : 100%;\n  width                : 100%;\n  transition           : all 400ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.large,\n.toolbar.landscape.large {\n  margin-left       : 0;\n  transition        : all 400ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.landscape.small,\n.toolbar.small {\n  margin-left       : 65%;\n  transition        : all 600ms 150ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.landscape .menu-item,\n.menu-item {\n  position             : relative;\n  display              : flex;\n  flex-wrap            : nowrap;\n  flex-flow            : row;\n  align-items          : center;\n  align-content        : center;\n  justify-content      : space-between;\n  align-self           : flex-end;\n  width                : 18vw;\n  height               : 20%;\n  background-color     : var(--opacity-black);\n  cursor               : pointer;\n  border-radius        : 4px;\n  border-top           : 0.5px solid #090909;\n  border-left          : 0.5px solid #090909;\n  border-right         : 0.5px solid #090909;\n  padding              : 2vw 0 2vw 0;\n  box-shadow           : inset 0 0 2px 0.1px #45454555;\n  transition           : all ease-in-out 500ms;\n}\n\n.menu-item:last-of-type,\n.toolbar.landscape .menu-item:last-of-type {\n  border-bottom: 0.5px solid #090909;\n}\n\n.toolbar.landscape .menu-item.hovering,\n.toolbar.landscape .menu-item.active,\n.menu-item.hovering,\n.menu-item.active {\n  background-color  : #222222bb;\n  box-shadow        : inset 0 0 0.3px 0.15px #222222;\n  transition        : all ease-in-out 200ms;\n}\n\n.toolbar.landscape .icon-container,\n.icon-container {\n  position          : relative;\n  display           : flex;\n  align-items       : center;\n  justify-content   : center;\n  width             : calc(4 * var(--fontSize));\n  height            : calc(4 * var(--fontSize));\n  border-radius     : 50%;\n  box-shadow        : 0 0 0 2px rgba(255, 255, 255, 0);\n  background        : rgba(255, 255, 255, 0);\n  overflow          : hidden;\n  left              : 6%;\n  transition: background 0.3s,\n    box-shadow 0.3s;\n}\n\n.toolbar.landscape .icon-container::after,\n.icon-container::after {\n  content           : '';\n  position          : absolute;\n  width             : calc(4 * var(--fontSize));\n  height            : calc(4 * var(--fontSize));\n  overflow          : visible;\n  border-radius     : 50%;\n  opacity           : 0;\n  pointer-events    : none;\n  margin            : 0;\n  box-shadow        : inset 0 0 0 35px rgba(255, 255, 255, 0);\n}\n\n.toolbar.landscape .clicked .icon-container::after,\n.clicked .icon-container::after {\n  -webkit-animation: anim-effect-radomir 0.5s ease-out forwards;\n  animation        : anim-effect-radomir 0.5s ease-out forwards;\n}\n\n.toolbar.landscape .hovering .icon-container,\n.hovering .icon-container {\n  background        : rgba(255, 255, 255, 1);\n  box-shadow        : 0 0 0 5px rgba(184, 184, 184, 0.3);\n  transition        : box-shadow 0.5s;\n}\n\n.toolbar.landscape .menu-icon,\n.toolbar.landscape .menu-icon-two,\n.menu-icon,\n.menu-icon-two {\n  position          : absolute;\n  display           : flex;\n  align-items       : center;\n  justify-content   : center;\n  width             : calc(3.2 * var(--fontSize));\n  height            : calc(3.2 * var(--fontSize));\n  transition        : background 0.3s, box-shadow 0.3s;\n}\n\n.toolbar.landscape .home-image,\n.toolbar.landscape .home-image-two,\n.home-image,\n.home-image-two {\n  width         : calc(2.7 * var(--fontSize));\n  height        : calc(2.7 * var(--fontSize));\n  padding-bottom: 10%;\n}\n\n.toolbar.landscape .contact-image,\n.toolbar.landscape .contact-image-two,\n.contact-image,\n.contact-image-two {\n  width : calc(4.5 * var(--fontSize));\n  height: calc(4.5 * var(--fontSize));\n}\n\n.toolbar.landscape .menu-icon-two,\n.menu-icon-two {\n  opacity           : 0;\n  transition        : all ease-in-out 50ms;\n}\n\n.toolbar.landscape .hovering .menu-icon-two,\n.hovering .menu-icon-two {\n  -webkit-animation : toBottomFromTop 0.3s forwards;\n  animation         : toBottomFromTop 0.3s forwards;\n  opacity           : 1;\n  transition        : all ease-in-out 400ms;\n}\n\n.toolbar.landscape .icon-container::after,\n.toolbar.landscape .home-image,\n.toolbar.landscape .home-image-two,\n.toolbar.landscape .about-image,\n.toolbar.landscape .about-image-two,\n.toolbar.landscape .skills-image,\n.toolbar.landscape .skills-image-two,\n.toolbar.landscape .showcase-image,\n.toolbar.landscape .showcase-image-two,\n.toolbar.landscape .contact-image,\n.toolbar.landscape .contact-image-two,\n.icon-container::after,\n.home-image,\n.home-image-two,\n.about-image,\n.about-image-two,\n.skills-image,\n.skills-image-two,\n.showcase-image,\n.showcase-image-two,\n.contact-image,\n.contact-image-two {\n  /* width        : calc(4.5 * var(--fontSize));\n    height        : calc(4.5 * var(--fontSize)); */\n  margin-left     : 0;\n}\n\n/* icon-text ========================================*/\n\n.toolbar.landscape .icon-text,\n.icon-text {\n  position          : relative;\n  display           : flex;\n  width             : 65%;\n  outline           : none;\n  text-decoration   : none;\n  justify-content   : center;\n  text-align        : center;\n  align-items       : center;\n  color             : rgb(200, 200, 200);\n  text-shadow       : 0 0 1px rgba(111, 134, 134, 0.3);\n  font-size         : 1.15em;\n  padding-right     : 8%;\n  transition        : all 400ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.landscape .large .icon-text,\n.large .icon-text {\n  -webkit-transform : translateX(0);\n  transform         : translateX(0);\n  transition        : all 600ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.landscape .small .icon-text,\n.small .icon-text {\n  -webkit-transform : translateX(100%);\n  transform         : translateX(100%);\n  transition        : all 600ms 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.toolbar.landscape .icon-text::before,\n.icon-text::before {\n  color             : #fff;\n  content           : attr(data-hover);\n  position          : absolute;\n  opacity           : 0;\n  text-shadow       : 0 0 1px rgba(255, 255, 255, 0.3);\n  -webkit-transform : scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);\n  transform         : scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);\n  transition        : opacity 0.3s, -webkit-transform 0.3s;\n  transition        : transform 0.3s, opacity 0.3s;\n  transition        : transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n  pointer-events    : none;\n}\n\n.toolbar.landscape .hovering .icon-text::before,\n.hovering .icon-text::before {\n  -webkit-transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);\n  transform        : scale(1) translateX(0px) translateY(0px) rotate(0deg);\n  opacity          : 1;\n}\n\n/* animations====================================== */\n\n@-webkit-keyframes toBottomFromTop {\n  49% {\n    -webkit-transform: translateY(100%);\n    transform        : translateY(100%);\n  }\n\n  50% {\n    opacity          : 0;\n    -webkit-transform: translateY(-100%);\n    transform        : translateY(-100%);\n  }\n\n  51% {\n    opacity: 1;\n  }\n}\n\n@keyframes toBottomFromTop {\n  49% {\n    -webkit-transform: translateY(100%);\n    transform        : translateY(100%);\n  }\n\n  50% {\n    opacity          : 0;\n    -webkit-transform: translateY(-100%);\n    transform        : translateY(-100%);\n  }\n\n  51% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes anim-effect-radomir {\n  0% {\n    opacity          : 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform        : scale3d(1, 1, 1);\n  }\n\n  80% {\n    box-shadow        : inset 0 0 0 2px rgba(255, 255, 255, 0.8);\n    opacity           : 0.1;\n  }\n\n  100% {\n    box-shadow        : inset 0 0 0 2px rgba(255, 255, 255, 0.8);\n    opacity           : 0;\n    -webkit-transform : scale3d(2, 2, 1);\n    transform         : scale3d(2, 2, 1);\n  }\n}\n\n@keyframes anim-effect-radomir {\n  0% {\n    opacity          : 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform        : scale3d(1, 1, 1);\n  }\n\n  80% {\n    box-shadow        : inset 0 0 0 2px rgba(255, 255, 255, 0.8);\n    opacity           : 0.1;\n  }\n\n  100% {\n    box-shadow        : inset 0 0 0 2px rgba(255, 255, 255, 0.8);\n    opacity           : 0;\n    -webkit-transform : scale3d(2, 2, 1);\n    transform         : scale3d(2, 2, 1);\n  }\n}\n\n/* portrait =======================================*/\n\n@media (orientation: portrait) {\n  .toolbar.portrait {\n    flex-direction       : row;\n    height               : -webkit-min-content;\n    height               : -moz-min-content;\n    height               : min-content;\n  }\n\n  .toolbar.portrait.small {\n    margin-left       : 0;\n    transition        : all 600ms 150ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n  }\n\n  .toolbar.portrait .menu-item {\n    width : 20%;\n    height: 9%;\n  }\n\n  .toolbar.portrait .icon-text {\n    display: none;\n  }\n\n  .toolbar.portrait .icon-container::after,\n  .toolbar.portrait .home-image,\n  .toolbar.portrait .home-image-two,\n  .toolbar.portrait .about-image,\n  .toolbar.portrait .about-image-two,\n  .toolbar.portrait .skills-image,\n  .toolbar.portrait .skills-image-two,\n  .toolbar.portrait .showcase-image,\n  .toolbar.portrait .showcase-image-two,\n  .toolbar.portrait .contact-image,\n  .toolbar.portrait .contact-image-two {\n    /* width      : calc(4.5 * var(--fontSize));\n    height        : calc(4.5 * var(--fontSize)); */\n    margin-left   : calc(0.4 * var(--fontSize)) !important;\n  }\n\n  .toolbar.portrait .hovering .icon-container {\n    background        : inherit;\n    box-shadow        : 0 0 0 5px rgba(184, 184, 184, 0.3);\n    transition        : box-shadow 0.5s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1pdGVtcy9saXN0LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsK0JBQStCO0VBRy9CLDJCQUEyQjtFQUkzQiw2QkFBNkI7RUFFN0IsNkJBQTZCO0VBRTdCLG1DQUFtQztFQUduQyw2QkFBNkI7RUFFN0IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFFM0Isb0ZBQW9GO0FBQ3RGOztBQUVBOztFQUVFLHFCQUFxQjtFQUVyQixpRkFBaUY7QUFDbkY7O0FBRUE7O0VBRUUsdUJBQXVCO0VBRXZCLHVGQUF1RjtBQUN6Rjs7QUFFQTs7RUFFRSwrQkFBK0I7RUFHL0IsMkJBQTJCO0VBRTNCLDZCQUE2QjtFQUk3QiwwQkFBMEI7RUFHMUIsNkJBQTZCO0VBRTdCLDZCQUE2QjtFQUc3QixvQ0FBb0M7RUFFcEMsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsMENBQTBDO0VBQzFDLDBDQUEwQztFQUMxQywwQ0FBMEM7RUFDMUMsa0NBQWtDO0VBRWxDLG9EQUFvRDtFQUVwRCw0Q0FBNEM7QUFDOUM7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBOzs7O0VBSUUsNkJBQTZCO0VBRTdCLGtEQUFrRDtFQUVsRCx5Q0FBeUM7QUFDM0M7O0FBRUE7O0VBRUUsNEJBQTRCO0VBRzVCLHdCQUF3QjtFQUd4QiwwQkFBMEI7RUFHMUIsMEJBQTBCO0VBQzFCLDZDQUE2QztFQUM3Qyw2Q0FBNkM7RUFDN0MsdUJBQXVCO0VBRXZCLG9EQUFvRDtFQUNwRCwwQ0FBMEM7RUFDMUMsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUt0QjttQkFDaUI7QUFJbkI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw2Q0FBNkM7RUFDN0MsNkNBQTZDO0VBQzdDLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFFckIsMkRBQTJEO0FBQzdEOztBQUVBOztFQUVFLDZEQUE2RDtFQUM3RCw2REFBNkQ7QUFDL0Q7O0FBRUE7O0VBRUUsMENBQTBDO0VBRTFDLHNEQUFzRDtFQUd0RCxtQ0FBbUM7QUFFckM7O0FBRUE7Ozs7RUFJRSw0QkFBNEI7RUFHNUIsd0JBQXdCO0VBR3hCLDBCQUEwQjtFQUcxQiwwQkFBMEI7RUFDMUIsK0NBQStDO0VBQy9DLCtDQUErQztFQUcvQyxvREFBb0Q7QUFFdEQ7O0FBRUE7Ozs7RUFJRSwyQ0FBMkM7RUFDM0MsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLG1DQUFtQztFQUNuQyxtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUscUJBQXFCO0VBRXJCLHdDQUF3QztBQUMxQzs7QUFFQTs7RUFFRSxpREFBaUQ7RUFDakQsaURBQWlEO0VBQ2pELHFCQUFxQjtFQUVyQix5Q0FBeUM7QUFDM0M7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQkU7a0RBQ2dEO0VBQ2hELG1CQUFtQjtBQUNyQjs7QUFFQSxzREFBc0Q7O0FBRXREOztFQUVFLDRCQUE0QjtFQUc1Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFHeEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUcxQiwwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLG9EQUFvRDtFQUNwRCwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBRXRCLGlGQUFpRjtBQUNuRjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBRWpDLGlGQUFpRjtBQUNuRjs7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBRXBDLHNGQUFzRjtBQUN4Rjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsb0RBQW9EO0VBQ3BELDhFQUE4RTtFQUM5RSw4RUFBOEU7RUFHOUUsd0RBQXdEO0VBQ3hELGdEQUFnRDtFQUNoRCx3RUFBd0U7RUFDeEUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHdFQUF3RTtFQUN4RSx3RUFBd0U7RUFDeEUsb0JBQW9CO0FBQ3RCOztBQUVBLHFEQUFxRDs7QUFFckQ7RUFDRTtJQUNFLG1DQUFtQztJQUNuQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFFRSw0REFBNEQ7SUFDNUQsdUJBQXVCO0VBQ3pCOztFQUVBO0lBRUUsNERBQTREO0lBQzVELHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBRUUsNERBQTREO0lBQzVELHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUVFLDREQUE0RDtJQUM1RCxxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLG9DQUFvQztFQUN0QztBQUNGOztBQUVBLG9EQUFvRDs7QUFFcEQ7RUFDRTtJQUlFLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLHFCQUFxQjtJQUVyQix1RkFBdUY7RUFDekY7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBOzs7Ozs7Ozs7OztJQVdFO2tEQUM4QztJQUM5QyxzREFBc0Q7RUFDeEQ7O0VBRUE7SUFDRSwyQkFBMkI7SUFFM0Isc0RBQXNEO0lBR3RELG1DQUFtQztFQUVyQztBQUNGIiwiZmlsZSI6ImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1pdGVtcy9saXN0LWl0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcixcbi50b29sYmFyLmxhbmRzY2FwZSB7XG4gIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbiAgICAgICA6IGNvbHVtbjtcbiAgLW1zLWZsZXgtd3JhcCAgICAgICAgOiBub3dyYXA7XG4gIGZsZXgtd3JhcCAgICAgICAgICAgIDogbm93cmFwO1xuICAtbXMtZmxleC1wYWNrICAgICAgICA6IGRpc3RyaWJ1dGU7XG4gIGp1c3RpZnktY29udGVudCAgICAgIDogc3BhY2UtYXJvdW5kO1xuICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zICAgICAgICAgIDogY2VudGVyO1xuICAtbXMtZmxleC1saW5lLXBhY2sgICA6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudCAgICAgICAgOiBjZW50ZXI7XG4gIGhlaWdodCAgICAgICAgICAgICAgIDogMTAwJTtcbiAgd2lkdGggICAgICAgICAgICAgICAgOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXIubGFyZ2UsXG4udG9vbGJhci5sYW5kc2NhcGUubGFyZ2Uge1xuICBtYXJnaW4tbGVmdCAgICAgICA6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUuc21hbGwsXG4udG9vbGJhci5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0ICAgICAgIDogNjUlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcyAxNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDYwMG1zIDE1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5tZW51LWl0ZW0sXG4ubWVudS1pdGVtIHtcbiAgcG9zaXRpb24gICAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSAgICAgICAgICAgICAgOiBmbGV4O1xuICAtbXMtZmxleC13cmFwICAgICAgICA6IG5vd3JhcDtcbiAgZmxleC13cmFwICAgICAgICAgICAgOiBub3dyYXA7XG4gIC13ZWJraXQtYm94LW9yaWVudCAgIDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWZsb3cgICAgICAgIDogcm93O1xuICBmbGV4LWZsb3cgICAgICAgICAgICA6IHJvdztcbiAgLXdlYmtpdC1ib3gtYWxpZ24gICAgOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtbGluZS1wYWNrICAgOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQgICAgICAgIDogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrICAgICA6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2sgICAgICAgIDoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50ICAgICAgOiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtZmxleC1pdGVtLWFsaWduICA6IGVuZDtcbiAgYWxpZ24tc2VsZiAgICAgICAgICAgOiBmbGV4LWVuZDtcbiAgd2lkdGggICAgICAgICAgICAgICAgOiAxOHZ3O1xuICBoZWlnaHQgICAgICAgICAgICAgICA6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB2YXIoLS1vcGFjaXR5LWJsYWNrKTtcbiAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzICAgICAgICA6IDRweDtcbiAgYm9yZGVyLXRvcCAgICAgICAgICAgOiAwLjVweCBzb2xpZCAjMDkwOTA5O1xuICBib3JkZXItbGVmdCAgICAgICAgICA6IDAuNXB4IHNvbGlkICMwOTA5MDk7XG4gIGJvcmRlci1yaWdodCAgICAgICAgIDogMC41cHggc29saWQgIzA5MDkwOTtcbiAgcGFkZGluZyAgICAgICAgICAgICAgOiAydncgMCAydncgMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93ICAgOiBpbnNldCAwIDAgMnB4IDAuMXB4ICM0NTQ1NDU1NTtcbiAgYm94LXNoYWRvdyAgICAgICAgICAgOiBpbnNldCAwIDAgMnB4IDAuMXB4ICM0NTQ1NDU1NTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgZWFzZS1pbi1vdXQgNTAwbXM7XG4gIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDUwMG1zO1xufVxuXG4ubWVudS1pdGVtOmxhc3Qtb2YtdHlwZSxcbi50b29sYmFyLmxhbmRzY2FwZSAubWVudS1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwOTA5MDk7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAubWVudS1pdGVtLmhvdmVyaW5nLFxuLnRvb2xiYXIubGFuZHNjYXBlIC5tZW51LWl0ZW0uYWN0aXZlLFxuLm1lbnUtaXRlbS5ob3ZlcmluZyxcbi5tZW51LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvciAgOiAjMjIyMjIyYmI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuM3B4IDAuMTVweCAjMjIyMjIyO1xuICBib3gtc2hhZG93ICAgICAgICA6IGluc2V0IDAgMCAwLjNweCAwLjE1cHggIzIyMjIyMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMjAwbXM7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUgLmljb24tY29udGFpbmVyLFxuLmljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb24gICAgICAgICAgOiByZWxhdGl2ZTtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbiA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24gICAgOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zICAgICAgIDogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrICA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjayAgICAgOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudCAgIDogY2VudGVyO1xuICB3aWR0aCAgICAgICAgICAgICA6IGNhbGMoNCAqIHZhcigtLWZvbnRTaXplKSk7XG4gIGhlaWdodCAgICAgICAgICAgIDogY2FsYyg0ICogdmFyKC0tZm9udFNpemUpKTtcbiAgYm9yZGVyLXJhZGl1cyAgICAgOiA1MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJveC1zaGFkb3cgICAgICAgIDogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJhY2tncm91bmQgICAgICAgIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XG4gIGxlZnQgICAgICAgICAgICAgIDogNiU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLFxuICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MsXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyxcbiAgICBib3gtc2hhZG93IDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyxcbiAgICBib3gtc2hhZG93IDAuM3MsXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuM3M7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAuaWNvbi1jb250YWluZXI6OmFmdGVyLFxuLmljb24tY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQgICAgICAgICAgIDogJyc7XG4gIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XG4gIHdpZHRoICAgICAgICAgICAgIDogY2FsYyg0ICogdmFyKC0tZm9udFNpemUpKTtcbiAgaGVpZ2h0ICAgICAgICAgICAgOiBjYWxjKDQgKiB2YXIoLS1mb250U2l6ZSkpO1xuICBvdmVyZmxvdyAgICAgICAgICA6IHZpc2libGU7XG4gIGJvcmRlci1yYWRpdXMgICAgIDogNTAlO1xuICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG4gIHBvaW50ZXItZXZlbnRzICAgIDogbm9uZTtcbiAgbWFyZ2luICAgICAgICAgICAgOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDM1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm94LXNoYWRvdyAgICAgICAgOiBpbnNldCAwIDAgMCAzNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAuY2xpY2tlZCAuaWNvbi1jb250YWluZXI6OmFmdGVyLFxuLmNsaWNrZWQgLmljb24tY29udGFpbmVyOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltLWVmZmVjdC1yYWRvbWlyIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbiAgICAgICAgOiBhbmltLWVmZmVjdC1yYWRvbWlyIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAuaG92ZXJpbmcgLmljb24tY29udGFpbmVyLFxuLmhvdmVyaW5nIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQgICAgICAgIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgxODQsIDE4NCwgMTg0LCAwLjMpO1xuICBib3gtc2hhZG93ICAgICAgICA6IDAgMCAwIDVweCByZ2JhKDE4NCwgMTg0LCAxODQsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuNXM7XG4gIHRyYW5zaXRpb24gICAgICAgIDogLXdlYmtpdC1ib3gtc2hhZG93IDAuNXM7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYm94LXNoYWRvdyAwLjVzO1xuICB0cmFuc2l0aW9uICAgICAgICA6IGJveC1zaGFkb3cgMC41cywgLXdlYmtpdC1ib3gtc2hhZG93IDAuNXM7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAubWVudS1pY29uLFxuLnRvb2xiYXIubGFuZHNjYXBlIC5tZW51LWljb24tdHdvLFxuLm1lbnUtaWNvbixcbi5tZW51LWljb24tdHdvIHtcbiAgcG9zaXRpb24gICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbiA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24gICAgOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zICAgICAgIDogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrICA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjayAgICAgOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudCAgIDogY2VudGVyO1xuICB3aWR0aCAgICAgICAgICAgICA6IGNhbGMoMy4yICogdmFyKC0tZm9udFNpemUpKTtcbiAgaGVpZ2h0ICAgICAgICAgICAgOiBjYWxjKDMuMiAqIHZhcigtLWZvbnRTaXplKSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgMC4zcztcbiAgdHJhbnNpdGlvbiAgICAgICAgOiBiYWNrZ3JvdW5kIDAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAwLjNzO1xuICB0cmFuc2l0aW9uICAgICAgICA6IGJhY2tncm91bmQgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICB0cmFuc2l0aW9uICAgICAgICA6IGJhY2tncm91bmQgMC4zcywgYm94LXNoYWRvdyAwLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgMC4zcztcbn1cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5ob21lLWltYWdlLFxuLnRvb2xiYXIubGFuZHNjYXBlIC5ob21lLWltYWdlLXR3byxcbi5ob21lLWltYWdlLFxuLmhvbWUtaW1hZ2UtdHdvIHtcbiAgd2lkdGggICAgICAgICA6IGNhbGMoMi43ICogdmFyKC0tZm9udFNpemUpKTtcbiAgaGVpZ2h0ICAgICAgICA6IGNhbGMoMi43ICogdmFyKC0tZm9udFNpemUpKTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5jb250YWN0LWltYWdlLFxuLnRvb2xiYXIubGFuZHNjYXBlIC5jb250YWN0LWltYWdlLXR3byxcbi5jb250YWN0LWltYWdlLFxuLmNvbnRhY3QtaW1hZ2UtdHdvIHtcbiAgd2lkdGggOiBjYWxjKDQuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gIGhlaWdodDogY2FsYyg0LjUgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUgLm1lbnUtaWNvbi10d28sXG4ubWVudS1pY29uLXR3byB7XG4gIG9wYWNpdHkgICAgICAgICAgIDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNTBtcztcbiAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgZWFzZS1pbi1vdXQgNTBtcztcbn1cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5ob3ZlcmluZyAubWVudS1pY29uLXR3byxcbi5ob3ZlcmluZyAubWVudS1pY29uLXR3byB7XG4gIC13ZWJraXQtYW5pbWF0aW9uIDogdG9Cb3R0b21Gcm9tVG9wIDAuM3MgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogdG9Cb3R0b21Gcm9tVG9wIDAuM3MgZm9yd2FyZHM7XG4gIG9wYWNpdHkgICAgICAgICAgIDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUgLmljb24tY29udGFpbmVyOjphZnRlcixcbi50b29sYmFyLmxhbmRzY2FwZSAuaG9tZS1pbWFnZSxcbi50b29sYmFyLmxhbmRzY2FwZSAuaG9tZS1pbWFnZS10d28sXG4udG9vbGJhci5sYW5kc2NhcGUgLmFib3V0LWltYWdlLFxuLnRvb2xiYXIubGFuZHNjYXBlIC5hYm91dC1pbWFnZS10d28sXG4udG9vbGJhci5sYW5kc2NhcGUgLnNraWxscy1pbWFnZSxcbi50b29sYmFyLmxhbmRzY2FwZSAuc2tpbGxzLWltYWdlLXR3byxcbi50b29sYmFyLmxhbmRzY2FwZSAuc2hvd2Nhc2UtaW1hZ2UsXG4udG9vbGJhci5sYW5kc2NhcGUgLnNob3djYXNlLWltYWdlLXR3byxcbi50b29sYmFyLmxhbmRzY2FwZSAuY29udGFjdC1pbWFnZSxcbi50b29sYmFyLmxhbmRzY2FwZSAuY29udGFjdC1pbWFnZS10d28sXG4uaWNvbi1jb250YWluZXI6OmFmdGVyLFxuLmhvbWUtaW1hZ2UsXG4uaG9tZS1pbWFnZS10d28sXG4uYWJvdXQtaW1hZ2UsXG4uYWJvdXQtaW1hZ2UtdHdvLFxuLnNraWxscy1pbWFnZSxcbi5za2lsbHMtaW1hZ2UtdHdvLFxuLnNob3djYXNlLWltYWdlLFxuLnNob3djYXNlLWltYWdlLXR3byxcbi5jb250YWN0LWltYWdlLFxuLmNvbnRhY3QtaW1hZ2UtdHdvIHtcbiAgLyogd2lkdGggICAgICAgIDogY2FsYyg0LjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgIGhlaWdodCAgICAgICAgOiBjYWxjKDQuNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDA7XG59XG5cbi8qIGljb24tdGV4dCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5pY29uLXRleHQsXG4uaWNvbi10ZXh0IHtcbiAgcG9zaXRpb24gICAgICAgICAgOiByZWxhdGl2ZTtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSAgICAgICAgICAgOiBmbGV4O1xuICB3aWR0aCAgICAgICAgICAgICA6IDY1JTtcbiAgb3V0bGluZSAgICAgICAgICAgOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb24gICA6IG5vbmU7XG4gIC13ZWJraXQtYm94LXBhY2sgIDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrICAgICA6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50ICAgOiBjZW50ZXI7XG4gIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbiA6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24gICAgOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zICAgICAgIDogY2VudGVyO1xuICBjb2xvciAgICAgICAgICAgICA6IHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgdGV4dC1zaGFkb3cgICAgICAgOiAwIDAgMXB4IHJnYmEoMTExLCAxMzQsIDEzNCwgMC4zKTtcbiAgZm9udC1zaXplICAgICAgICAgOiAxLjE1ZW07XG4gIHBhZGRpbmctcmlnaHQgICAgIDogOCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUgLmxhcmdlIC5pY29uLXRleHQsXG4ubGFyZ2UgLmljb24tdGV4dCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtIDogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtICAgICAgICAgOiB0cmFuc2xhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDYwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXIubGFuZHNjYXBlIC5zbWFsbCAuaWNvbi10ZXh0LFxuLnNtYWxsIC5pY29uLXRleHQge1xuICAtd2Via2l0LXRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybSAgICAgICAgIDogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNjAwbXMgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDYwMG1zIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci5sYW5kc2NhcGUgLmljb24tdGV4dDo6YmVmb3JlLFxuLmljb24tdGV4dDo6YmVmb3JlIHtcbiAgY29sb3IgICAgICAgICAgICAgOiAjZmZmO1xuICBjb250ZW50ICAgICAgICAgICA6IGF0dHIoZGF0YS1ob3Zlcik7XG4gIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XG4gIG9wYWNpdHkgICAgICAgICAgIDogMDtcbiAgdGV4dC1zaGFkb3cgICAgICAgOiAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0gOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZVgoMTBweCkgdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKDRkZWcpO1xuICB0cmFuc2Zvcm0gICAgICAgICA6IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgxMHB4KSB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoNGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbiAgICAgICAgOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb24gICAgICAgIDogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgdHJhbnNpdGlvbiAgICAgICAgOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICBwb2ludGVyLWV2ZW50cyAgICA6IG5vbmU7XG59XG5cbi50b29sYmFyLmxhbmRzY2FwZSAuaG92ZXJpbmcgLmljb24tdGV4dDo6YmVmb3JlLFxuLmhvdmVyaW5nIC5pY29uLXRleHQ6OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtICAgICAgICA6IHNjYWxlKDEpIHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5ICAgICAgICAgIDogMTtcbn1cblxuLyogYW5pbWF0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyB0b0JvdHRvbUZyb21Ub3Age1xuICA0OSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5ICAgICAgICAgIDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG5cbiAgNTElIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdG9Cb3R0b21Gcm9tVG9wIHtcbiAgNDklIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eSAgICAgICAgICA6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuXG4gIDUxJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbS1lZmZlY3QtcmFkb21pciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5ICAgICAgICAgIDogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJveC1zaGFkb3cgICAgICAgIDogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBvcGFjaXR5ICAgICAgICAgICA6IDAuMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBib3gtc2hhZG93ICAgICAgICA6IGluc2V0IDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgb3BhY2l0eSAgICAgICAgICAgOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtIDogc2NhbGUzZCgyLCAyLCAxKTtcbiAgICB0cmFuc2Zvcm0gICAgICAgICA6IHNjYWxlM2QoMiwgMiwgMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltLWVmZmVjdC1yYWRvbWlyIHtcbiAgMCUge1xuICAgIG9wYWNpdHkgICAgICAgICAgOiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm94LXNoYWRvdyAgICAgICAgOiBpbnNldCAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIG9wYWNpdHkgICAgICAgICAgIDogMC4xO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJveC1zaGFkb3cgICAgICAgIDogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0gOiBzY2FsZTNkKDIsIDIsIDEpO1xuICAgIHRyYW5zZm9ybSAgICAgICAgIDogc2NhbGUzZCgyLCAyLCAxKTtcbiAgfVxufVxuXG4vKiBwb3J0cmFpdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudG9vbGJhci5wb3J0cmFpdCB7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiBob3Jpem9udGFsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogcm93O1xuICAgIGhlaWdodCAgICAgICAgICAgICAgIDogLXdlYmtpdC1taW4tY29udGVudDtcbiAgICBoZWlnaHQgICAgICAgICAgICAgICA6IC1tb3otbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBtaW4tY29udGVudDtcbiAgfVxuXG4gIC50b29sYmFyLnBvcnRyYWl0LnNtYWxsIHtcbiAgICBtYXJnaW4tbGVmdCAgICAgICA6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNjAwbXMgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDYwMG1zIDE1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b29sYmFyLnBvcnRyYWl0IC5tZW51LWl0ZW0ge1xuICAgIHdpZHRoIDogMjAlO1xuICAgIGhlaWdodDogOSU7XG4gIH1cblxuICAudG9vbGJhci5wb3J0cmFpdCAuaWNvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvb2xiYXIucG9ydHJhaXQgLmljb24tY29udGFpbmVyOjphZnRlcixcbiAgLnRvb2xiYXIucG9ydHJhaXQgLmhvbWUtaW1hZ2UsXG4gIC50b29sYmFyLnBvcnRyYWl0IC5ob21lLWltYWdlLXR3byxcbiAgLnRvb2xiYXIucG9ydHJhaXQgLmFib3V0LWltYWdlLFxuICAudG9vbGJhci5wb3J0cmFpdCAuYWJvdXQtaW1hZ2UtdHdvLFxuICAudG9vbGJhci5wb3J0cmFpdCAuc2tpbGxzLWltYWdlLFxuICAudG9vbGJhci5wb3J0cmFpdCAuc2tpbGxzLWltYWdlLXR3byxcbiAgLnRvb2xiYXIucG9ydHJhaXQgLnNob3djYXNlLWltYWdlLFxuICAudG9vbGJhci5wb3J0cmFpdCAuc2hvd2Nhc2UtaW1hZ2UtdHdvLFxuICAudG9vbGJhci5wb3J0cmFpdCAuY29udGFjdC1pbWFnZSxcbiAgLnRvb2xiYXIucG9ydHJhaXQgLmNvbnRhY3QtaW1hZ2UtdHdvIHtcbiAgICAvKiB3aWR0aCAgICAgIDogY2FsYyg0LjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgIGhlaWdodCAgICAgICAgOiBjYWxjKDQuNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICAgbWFyZ2luLWxlZnQgICA6IGNhbGMoMC40ICogdmFyKC0tZm9udFNpemUpKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRvb2xiYXIucG9ydHJhaXQgLmhvdmVyaW5nIC5pY29uLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZCAgICAgICAgOiBpbmhlcml0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMTg0LCAxODQsIDE4NCwgMC4zKTtcbiAgICBib3gtc2hhZG93ICAgICAgICA6IDAgMCAwIDVweCByZ2JhKDE4NCwgMTg0LCAxODQsIDAuMyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC41cztcbiAgICB0cmFuc2l0aW9uICAgICAgICA6IC13ZWJraXQtYm94LXNoYWRvdyAwLjVzO1xuICAgIHRyYW5zaXRpb24gICAgICAgIDogYm94LXNoYWRvdyAwLjVzO1xuICAgIHRyYW5zaXRpb24gICAgICAgIDogYm94LXNoYWRvdyAwLjVzLCAtd2Via2l0LWJveC1zaGFkb3cgMC41cztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.html":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/list-items/list-items.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <div class=\"menu-item home active\"\n    (click)='click(\".home\", 0)'\n    (mouseenter)='mouseenter(\".home\")'\n        (mouseleave)='mouseleave(\".home\")'>\n\n        <div class=\"icon-container home-icon-container\">\n            <img *ngIf=\"homeImage\" class=\"menu-icon home-image image image-white\" [src]=\"homeImage\" alt=\"home-image\" />\n            <img *ngIf=\"homeImage\" class=\"menu-icon-two home-image-two image image-light-grey\" [src]=\"homeImage\"\n                alt=\"home-image\" />\n        </div>\n        <a class='icon-text' data-hover=\"Home\">Home</a>\n    </div>\n    <div class=\"menu-item about\"\n    (click)='click(\".about\", 1)'\n        (mouseenter)='mouseenter(\".about\")'\n        (mouseleave)='mouseleave(\".about\")'>\n        <div class=\"icon-container about-icon-container\">\n            <img *ngIf=\"aboutImage\" class=\"menu-icon about-image image image-white\"\n            [src]=\"aboutImage\" alt=\"about-image\" />\n            <img *ngIf=\"aboutImage\" class=\"menu-icon-two about-image-two image image-light-grey\"\n            [src]=\"aboutImage\" alt=\"about-image\" />\n        </div>\n        <a class='icon-text' data-hover=\"About Me\">About Me</a>\n    </div>\n    <div class=\"menu-item my-skills\"\n        (click)='click(\".my-skills\", 2)'\n        (mouseenter)='mouseenter(\".my-skills\")'\n        (mouseleave)='mouseleave(\".my-skills\")'>\n        <div class=\"icon-container my-skills-icon-container\">\n            <img *ngIf=\"skillsImage\" class=\"menu-icon skills-image image image-white\"\n            [src]=\"skillsImage\" alt=\"skills-image\" />\n            <img *ngIf=\"skillsImage\" class=\"menu-icon-two skills-image-two image image-light-grey\"\n            [src]=\"skillsImage\" alt=\"skills-image\" />\n        </div>\n        <a class='icon-text' data-hover=\"My Skills\">My Skills</a>\n    </div>\n    <div class=\"menu-item  my-showcase\"\n        (click)='click(\".my-showcase\", 3)'\n        (mouseenter)='mouseenter(\".my-showcase\")'\n        (mouseleave)='mouseleave(\".my-showcase\")'>\n        <div class=\"icon-container my-showcase-icon-container\">\n            <img *ngIf=\"showcaseImage\" class=\"menu-icon showcase-image image image-white\"\n            [src]=\"showcaseImage\" alt=\"showcase-image\" />\n            <img *ngIf=\"showcaseImage\" class=\"menu-icon-two showcase-image-two image image-light-grey\"\n            [src]=\"showcaseImage\" alt=\"showcase-image\" />\n        </div>\n        <a class='icon-text' data-hover=\"Code Laboratory\">Code Laboratory</a>\n    </div>\n    <div class=\"menu-item talk-to-me\" (click)='click(\".talk-to-me\", 4)' (mouseenter)='mouseenter(\".talk-to-me\")'\n        (mouseleave)='mouseleave(\".talk-to-me\")'>\n\n        <div class=\"icon-container talk-to-me-icon-container\">\n            <img *ngIf=\"contactImage\" class=\"menu-icon contact-image image image-white\" [src]=\"contactImage\"\n                alt=\"contact-image\" />\n            <img *ngIf=\"contactImage\" class=\"menu-icon-two contact-image-two image image-light-grey\" [src]=\"contactImage\"\n                alt=\"contact-image\" />\n        </div>\n        <a class='icon-text' data-hover=\"Talk To Me\">Talk To Me</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.ts":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/list-items/list-items.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemsComponent", function() { return ListItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


window.addEventListener("orientationchange", function () {
    var orientation = screen.orientation.angle;
    var toolbar = document.querySelector('.toolbar');
    if (orientation === 90) {
        // landscape
        toolbar.classList.remove('portrait');
        toolbar.classList.add('landscape');
    }
    else if (orientation === 0) {
        // portrait
        toolbar.classList.remove('landscape');
        toolbar.classList.add('portrait');
    }
});
var ListItemsComponent = /** @class */ (function () {
    function ListItemsComponent(el, images, brand) {
        this.el = el;
        this.images = images;
        this.brand = brand;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.aboutImage = images.icons.about;
        this.contactImage = images.icons.contact;
        this.skillsImage = images.icons.skills;
        this.showcaseImage = images.icons.showcase;
        this.homeImage = images.icons.home;
        this.localState = this.landingState;
    }
    ListItemsComponent.prototype.ngOnInit = function () {
    };
    ListItemsComponent.prototype.ngOnDestroy = function () {
    };
    ListItemsComponent.prototype.ngOnChanges = function () {
        if (this.landingState !== this.localState) {
            this.changeState();
        }
        this.screenOrientationChange();
    };
    ListItemsComponent.prototype.ngAfterViewInit = function () {
        this.screenOrientationChange();
    };
    ListItemsComponent.prototype.screenOrientationChange = function () {
        var orientation = screen.orientation.angle;
        this.toolbar = document.querySelector('.toolbar');
        if (orientation === 90) {
            // landscape
            this.toolbar.classList.remove('portrait');
            this.toolbar.classList.add('landscape');
        }
        else if (orientation === 0) {
            // portrait
            this.toolbar.classList.remove('landscape');
            this.toolbar.classList.add('portrait');
        }
    };
    ListItemsComponent.prototype.changeState = function () {
        this.localState = this.landingState;
    };
    ListItemsComponent.prototype.mouseenter = function (item) {
        this.activeMenuItem = document.querySelector(".menu-item" + item);
        this.activeMenuItem.classList.add('hovering');
        this.activeHover = item;
    };
    ListItemsComponent.prototype.mouseleave = function (item) {
        this.activeMenuItem = document.querySelector(".menu-item" + item);
        this.activeMenuItem.classList.remove('hovering');
        this.activeHover = null;
    };
    ListItemsComponent.prototype.click = function (item, index) {
        var _this = this;
        var iconContainer;
        var temp = document.querySelectorAll('.active');
        for (var x = 0; x < temp.length; x++) {
            if (temp[x])
                temp[x].classList.remove('active');
        }
        this.activeMenuItem = document.querySelector("" + item);
        this.activeMenuItem.classList.add('clicked');
        iconContainer = document.querySelector(item + "-icon-container");
        iconContainer.style.overflow = 'visible';
        for (var i = 0; i < 5; i++) {
            if (index === i) {
                this.localState = __assign({}, this.landingState, { menu: { activeMenu: i, lastMenuClicked: i } });
                this.state.emit(__assign({}, this.localState));
            }
        }
        this.activeMenuItem.classList.remove('hovering');
        this.activeMenuItem.classList.add('active');
        setTimeout(function () {
            iconContainer.style.overflow = 'hidden';
            _this.activeMenuItem.classList.remove('clicked');
            // if ( this.activeHover ) this.mouseleave( this.activeHover );
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListItemsComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListItemsComponent.prototype, "state", void 0);
    ListItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dee-dev-list-items',
            template: __webpack_require__(/*! ./list-items.component.html */ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.html"),
            styles: [__webpack_require__(/*! ./list-items.component.css */ "../../../libs/components/ui/src/lib/containers/list-items/list-items.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object, Object])
    ], ListItemsComponent);
    return ListItemsComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/shell/shell.component.css":
/*!**********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/shell/shell.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-global {\n    position             : absolute;\n    display              : flex;\n    flex-flow            : column;\n    /* background-image  : var(--black-deepBlue); */\n    top                  : 0;\n    left                 : 0;\n    /* width             : inherit;\n    height               : inherit; */\n    font-weight          : 100;\n    overflow             : hidden;\n}\n\n.container-landing {\n    position: relative;\n    overflow: hidden;\n    width   : inherit;\n    height  : inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvc2hlbGwvc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUcvQiwyQkFBMkI7SUFJM0IsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCO3FDQUNpQztJQUNqQywwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvc2hlbGwvc2hlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZ2xvYmFsIHtcbiAgICBwb3NpdGlvbiAgICAgICAgICAgICA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1mbG93ICAgICAgICA6IGNvbHVtbjtcbiAgICBmbGV4LWZsb3cgICAgICAgICAgICA6IGNvbHVtbjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlICA6IHZhcigtLWJsYWNrLWRlZXBCbHVlKTsgKi9cbiAgICB0b3AgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgbGVmdCAgICAgICAgICAgICAgICAgOiAwO1xuICAgIC8qIHdpZHRoICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgICBoZWlnaHQgICAgICAgICAgICAgICA6IGluaGVyaXQ7ICovXG4gICAgZm9udC13ZWlnaHQgICAgICAgICAgOiAxMDA7XG4gICAgb3ZlcmZsb3cgICAgICAgICAgICAgOiBoaWRkZW47XG59XG5cbi5jb250YWluZXItbGFuZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGggICA6IGluaGVyaXQ7XG4gICAgaGVpZ2h0ICA6IGluaGVyaXQ7XG59Il19 */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/shell/shell.component.html":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/shell/shell.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-global\">\n    <!-- <dee-dev-ui-toolbar class=\"toolbar\"></dee-dev-ui-toolbar> -->\n    <!-- <dee-dev-ui-video-overlay></dee-dev-ui-video-overlay> -->\n\n    <div class=\"container-landing\">\n            <dee-dev-ui-landing style=\"width: inherit; height:inherit;\"></dee-dev-ui-landing>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/shell/shell.component.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/shell/shell.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ShellComponent = /** @class */ (function () {
    function ShellComponent(_store, images, brand) {
        this._store = _store;
        this.images = images;
        this.brand = brand;
        this.currentDotPos = 0;
        this.route$ = this._store.select(_dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].segments).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (segments) { return !!segments; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (segments) { return segments[0]; }));
        this.logo = brand.image.logo;
    }
    ShellComponent.prototype.onRresize = function () {
        this.onDeviceScreenSizeChange();
        this.onScroll();
        this.setClientHeight();
    };
    ShellComponent.prototype.handleScroll = function () {
        this.onScroll();
    };
    ShellComponent.prototype.handleOrientationChange = function () {
        location.reload();
    };
    ShellComponent.prototype.ngOnInit = function () {
        this.onDeviceScreenSizeChange();
    };
    ShellComponent.prototype.ngOnChanges = function () { };
    ShellComponent.prototype.ngAfterViewInit = function () {
        this.setClientHeight();
        this.onDeviceScreenSizeChange();
        // this.setKeypressListener();
    };
    // setKeypressListener () {
    //     document.addEventListener( "keydown",  event  => {
    //         let handled = false;
    //         if ( event.defaultPrevented ) {
    //             return; // Should do nothing if the default action has been cancelled
    //         }
    //         if ( event.key && event.which ) {
    //             handled = true;
    //             switch ( event.key ) {
    //                 case '38':
    //                     return;
    //                 case '40':
    //                     return;
    //             }
    //         }
    //         if ( handled ) {
    //             // Suppress "double action" if event handled
    //             event.preventDefault();
    //         }
    //     }, true );
    // }
    ShellComponent.prototype.onScroll = function () {
        var bodyRect = document.body.getBoundingClientRect();
        var containerLanding = document.querySelector('.container-landing');
        var landingCenterPosition = ((containerLanding.getBoundingClientRect().bottom - bodyRect.top) / 2);
        var listItemContainerOne = document.querySelector('.list-item-container-one');
        // const listItemContainerOneTop = listItemContainerOne.getBoundingClientRect().top;
        // const listItemContainerOneBottom = listItemContainerOne.getBoundingClientRect().bottom;
        var scaleCoordsOneTop = (landingCenterPosition - (4 * 16));
        var scaleCoordsOneBottom = (landingCenterPosition + (4 * 16));
        var scaleCoordsTwoTop = (landingCenterPosition - (3 * 16));
        var scaleCoordsTwoBottom = (landingCenterPosition + (3 * 16));
        var scaleCoordsThreeTop = (landingCenterPosition - (2 * 16));
        var scaleCoordsThreeBottom = (landingCenterPosition + (2 * 16));
        // if ( listItemContainerOneTop > scaleCoordsOneTop && listItemContainerOneBottom < scaleCoordsOneBottom) {
        //     listItemContainerOne.classList.remove( 'scale-2' );
        //     listItemContainerOne.classList.remove( 'scale-3' );
        //     listItemContainerOne.classList.add( 'scale-1' );
        // } if  ( listItemContainerOneTop > scaleCoordsTwoTop && listItemContainerOneBottom < scaleCoordsTwoBottom) {
        //     listItemContainerOne.classList.remove( 'scale-1' );
        //     listItemContainerOne.classList.add( 'scale-2' );
        // } if ( listItemContainerOneTop > scaleCoordsThreeTop && listItemContainerOneBottom < scaleCoordsThreeBottom ) {
        //     listItemContainerOne.classList.remove( 'scale-2' );
        //     listItemContainerOne.classList.add( 'scale-3' );
        // }
    };
    ShellComponent.prototype.setClientHeight = function () {
        var body = document.querySelector('body');
        var sectionLanding = document.querySelector('.section-landing');
        var sectionVideoModal = document.querySelector('.video-modal');
        var clientWidth = (window.innerWidth / 100) + 'px';
        var clientHeightpx = window.innerHeight + 'px';
        if (body) {
            body.setAttribute('style', "\n                --variableX: " + clientWidth + ";\n            ");
        }
        if (sectionLanding) {
            sectionLanding['style']['height'] = clientHeightpx;
        }
        if (sectionVideoModal) {
            sectionVideoModal['style']['height'] = clientHeightpx;
        }
    };
    ShellComponent.prototype.onNavigate = function (path) {
        this._store.select(_dee_dev_core_router__WEBPACK_IMPORTED_MODULE_3__["store"].url(path));
    };
    ShellComponent.prototype.onDeviceScreenSizeChange = function () {
        var deviceScreenWidth = window.innerWidth;
        var deviceScreenHeight = window.innerHeight;
        this.setGlobalProperties(devicePixelRatio, deviceScreenWidth, deviceScreenHeight);
    };
    ShellComponent.prototype.scrollToTarget = function (target) {
        var srollToTarget = document.querySelector(target);
        srollToTarget.scrollIntoView({
            behavior: 'smooth'
        });
    };
    ShellComponent.prototype.setGlobalProperties = function (devicePixelRatio, deviceScreenWidth, deviceScreenHeight) {
        var bodyNode = document.querySelector('body');
        var containerGlobal = document.querySelector('.container-global');
        var listItems = document.querySelector('.list-item');
        bodyNode.style.width = deviceScreenWidth + 'px';
        bodyNode.style.height = deviceScreenHeight + 'px';
        containerGlobal['style'].width = deviceScreenWidth + 'px';
        containerGlobal['style'].height = deviceScreenHeight + 'px';
        listItems['style'].height = deviceScreenHeight + 'px';
        bodyNode.style.margin = 0 + 'px';
        bodyNode.style['--devicePixelRatio'] = devicePixelRatio;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShellComponent.prototype, "onRresize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShellComponent.prototype, "handleScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:orientationchange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShellComponent.prototype, "handleOrientationChange", null);
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dee-dev-ui-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "../../../libs/components/ui/src/lib/containers/shell/shell.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./shell.component.css */ "../../../libs/components/ui/src/lib/containers/shell/shell.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_4__["WWW_IMAGES_CONFIG_TOKEN"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_4__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], Object, Object])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/skills/skills.component.css":
/*!************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/skills/skills.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toad-fullscreen {\n   position: relative;\n   width   : 95%;\n   overflow: hidden;\n}\n\n.main-container-skills {\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   height               : 100%;\n   justify-content      : flex-start;\n   align-items          : center;\n   align-self           : center;\n   width                : 93vw;\n   overflow-y           : scroll;\n   overflow-x           : hidden;\n}\n\n.skills-title {\n   position         : relative;\n   display          : flex;\n   align-items      : flex-end;\n   /* margin-left   : calc(5 * var(--fontSize)); */\n   width            : calc(75 * var(--fontSize));\n   height           : 10%;\n   padding-bottom   : 1%;\n   padding-top      : 7%;\n   padding-left     : calc(1.5 * var(--fontSize));\n   font-size        : calc(2.5 * var(--fontSize));\n   border-bottom    : 0.6px var(--line-black) solid;\n   z-index          : 200;\n   margin-bottom    : 3%;\n}\n\n.skills-title-two {\n   padding-top: 2%;\n   height     : 5%;\n}\n\n.content-container {\n   position             : relative;\n   display              : flex;\n   flex-direction       : row;\n   height               : calc(29 * var(--fontSize));\n}\n\n.titles-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   align-content        : center;\n   justify-content      : center;\n   justify-items        : center;\n   flex-direction       : column;\n   width                : calc(20 * var(--fontSize));\n   height               : inherit;\n   text-align           : center;\n   padding-left         : calc(5 * var(--fontSize));\n   opacity              : 1;\n   font-size            : calc(1.6 * var(--fontSize));\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.biography-title {\n   position        : relative;\n   width           : 100%;\n   background-color: var(--front-black);\n   height          : 100%;\n   /* padding-left : 10%; */\n   padding-top     : 15px;\n   border-radius   : calc(0.6 * var(--fontSize));\n}\n\n.skills-container {\n   position             : relative;\n   display              : flex;\n   align-items          : center;\n   justify-content      : center;\n   flex-direction       : column;\n   width                : calc(65 * var(--fontSize));\n   height               : calc(29 * var(--fontSize));\n   /* padding-left      : calc(5 * var(--fontSize)); */\n   padding-right        : calc(5 * var(--fontSize));\n   opacity              : 0;\n   z-index              : 0;\n   transition           : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.bio-container {\n   height: inherit;\n}\n\n.skills-page .skills-container {\n   opacity           : 1;\n   z-index           : 100;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.skills-image {\n   position          : fixed;\n   display           : flex;\n   left              : 25%;\n   width             : calc(40 * var(--fontSize));\n   opacity           : 1;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.skills-page .skills-image {\n   opacity           : 0;\n   transition        : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* bio ========================== */\n\n/* .bio-text {\n   margin-left     : calc(3 * var(--fontSize));\n   padding-left    : calc(3 * var(--fontSize));\n   padding-right   : calc(2.5 * var(--fontSize));\n   background-color: var(--front-black);\n   height          : inherit;\n   border-radius   : calc(0.6 * var(--fontSize));\n   z-index         : 100;\n} */\n\n/* -===================================== */\n\n.page {\n   z-index: 0;\n}\n\n.skills-page .page {\n   z-index: 100;\n}\n\n/* .skills-container {\n   position              : absolute;\n   display               : flex;\n   align-items           : center;\n   justify-content       : center;\n   flex-direction        : column;\n   width                 : 60%;\n   height                : 100%;\n   margin-left           : 17%;\n   opacity               : 0;\n   transition            : all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.skills-title {\n   left          : 0;\n   position      : relative;\n   display       : flex;\n   width         : calc(50 * var(--fontSize));\n   align-items   : flex-end;\n   height        : 10%;\n   margin-left   : vw;\n   padding-bottom: 1%;\n   padding-top   : 3%;\n   font-size     : calc(2.5 * var(--fontSize));\n   border-bottom : 1px #555555 solid;\n   z-index       : 200;\n   margin-bottom : 3%;\n} */\n\n/* .skills-page .skills-container {\n   opacity   : 0.8;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n} */\n\n/* .skills-image {\n   position  : fixed;\n   display   : flex;\n   left      : 25%;\n   width     : calc(40 * var(--fontSize));\n   opacity   : 1;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n.skills-page .skills-image {\n   opacity   : 0;\n   transition: all 200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n} */\n\n/* graph ========================== */\n\n.skills-list {\n   /* animation-name : skills; */\n   margin-left       : calc(3 * var(--fontSize));\n   padding-left      : calc(3 * var(--fontSize));\n   padding-right     : calc(2.5 * var(--fontSize));\n   background-color  : var(--front-black);\n   height            : inherit;\n   border-radius     : calc(0.6 * var(--fontSize));\n   z-index           : 100;\n   transition        : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity           : 0;\n}\n\n.skills-page .skills-list {\n   transition           : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n   opacity              : 1;\n   position             : relative;\n   display              : flex;\n   flex-direction       : column;\n   align-items          : center;\n   justify-content      : space-evenly;\n}\n\n/* section {\n   background: #5aa8e8;\n} */\n\nsection article.skills-list {\n   width : 95%;\n   height: inherit;\n}\n\narticle div {\n   width: 100%;\n}\n\nsection article.skills-list p {\n   position          : relative;\n   /* height         : calc(2.64 * var(--fontSize)); */\n   box-sizing        : border-box;\n   color             : #fff;\n   padding           : calc(0.6 * var(--fontSize));\n   overflow          : hidden;\n   z-index           : 2;\n   margin            : 0 !important;\n}\n\nsection article.skills-list div span:nth-child(1) {\n   z-index   : -2;\n   position  : absolute;\n   top       : 0;\n   bottom    : 0;\n   left      : 0;\n   right     : 0;\n   margin    : auto;\n   background: #fff;\n   height    : 100%;\n   width     : 100%;\n}\n\nsection article.skills-list div span:nth-child(2) {\n   z-index           : -1;\n   position          : absolute;\n   top               : 0;\n   bottom            : 0;\n   left              : 0;\n   right             : 0;\n   background        : rgb(224, 51, 255);\n   height            : 100%;\n   cursor            : pointer;\n   opacity           : 1;\n   transition        : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(1) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(2) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(3) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(4) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(5) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(6) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(7) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection article.skills-list div:nth-child(8) span:nth-child(2) {\n   width             : 0%;\n   transition        : all 0.15s cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* page skills ========================================== */\n\nsection .skills-page article.skills-list div span:nth-child(1) {\n   z-index   : -2;\n   position  : absolute;\n   top       : 0;\n   bottom    : 0;\n   left      : 0;\n   right     : 0;\n   margin    : auto;\n   background: #fff;\n   height    : 100%;\n   width     : 100%;\n}\n\nsection .skills-page article.skills-list div span:nth-child(2) {\n   z-index           : -1;\n   position          : absolute;\n   top               : 0;\n   bottom            : 0;\n   left              : 0;\n   right             : 0;\n   background        : var(--magenta);\n   height            : 100%;\n   opacity           : 1;\n   transition        : all 50ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(1) span:nth-child(2) {\n   width             : 60% !important;\n   transition        : all 2200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(2) span:nth-child(2) {\n   width             : 85% !important;\n   transition        : all 2500ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(3) span:nth-child(2) {\n   width             : 80% !important;\n   transition        : all 2700ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(4) span:nth-child(2) {\n   width             : 70% !important;\n   transition        : all 2800ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(5) span:nth-child(2) {\n   width             : 85% !important;\n   transition        : all 2900ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(6) span:nth-child(2) {\n   width             : 95% !important;\n   transition        : all 3200ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(7) span:nth-child(2) {\n   width             : 90% !important;\n   transition        : all 3400ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\nsection .skills-page article.skills-list div:nth-child(8) span:nth-child(2) {\n   width             : 70% !important;\n   transition        : all 3700ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* section:before {\n   position  : absolute;\n   top       : -250px;\n   left      : -350px;\n   width     : 500px;\n   height    : 500px;\n   content   : '';\n   background: rgba(108, 90, 232, 0.25);\n   transform : rotate(30deg);\n} */\n\n/* section:after {\n   position  : absolute;\n   bottom    : -250px;\n   right     : -350px;\n   width     : 500px;\n   height    : 500px;\n   content   : '';\n   background: rgba(108, 90, 232, 0.25);\n   transform : rotate(30deg);\n} */\n\n/*hover =======================================================  */\n\nsection .skills-page article.skills-list div span:nth-child(2):hover {\n   opacity           : 0.85;\n   transition        : all 100ms cubic-bezier(0.415, 0.145, 0.065, 0.915) !important;\n}\n\n/* portrait =================================== */\n\n@media (orientation: portrait) {\n   .skills-title {\n      width: 90%;\n   }\n\n   .main-container-skills {\n      width: 100%;\n   }\n\n   .skills-container {\n      position             : relative;\n      display              : flex;\n      align-items          : center;\n      justify-content      : center;\n      flex-direction       : column;\n      width                : 90%;\n   }\n\n   .titles-container {\n      display: none;\n   }\n\n   .skills-container {\n      width        : 100%;\n      padding-right: unset;\n   }\n\n   .skills-list {\n      margin-left: unset;\n   }\n\n   .content-container {\n      width: 95%;\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRywrQkFBK0I7R0FHL0IsMkJBQTJCO0dBSTNCLDZCQUE2QjtHQUM3QiwyQkFBMkI7R0FHM0IsaUNBQWlDO0dBR2pDLDZCQUE2QjtHQUU3Qiw2QkFBNkI7R0FDN0IsMkJBQTJCO0dBQzNCLDZCQUE2QjtHQUM3Qiw2QkFBNkI7QUFDaEM7O0FBRUE7R0FDRywyQkFBMkI7R0FHM0IsdUJBQXVCO0dBR3ZCLDJCQUEyQjtHQUMzQiwrQ0FBK0M7R0FDL0MsNkNBQTZDO0dBQzdDLHNCQUFzQjtHQUN0QixxQkFBcUI7R0FDckIscUJBQXFCO0dBQ3JCLDhDQUE4QztHQUM5Qyw4Q0FBOEM7R0FDOUMsZ0RBQWdEO0dBQ2hELHNCQUFzQjtHQUN0QixxQkFBcUI7QUFDeEI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7R0FJM0IsMEJBQTBCO0dBQzFCLGlEQUFpRDtBQUNwRDs7QUFFQTtHQUNHLCtCQUErQjtHQUcvQiwyQkFBMkI7R0FHM0IsNkJBQTZCO0dBRTdCLDZCQUE2QjtHQUc3Qiw2QkFBNkI7R0FDN0IsNkJBQTZCO0dBSTdCLDZCQUE2QjtHQUM3QixpREFBaUQ7R0FDakQsOEJBQThCO0dBQzlCLDZCQUE2QjtHQUM3QixnREFBZ0Q7R0FDaEQsd0JBQXdCO0dBQ3hCLGtEQUFrRDtHQUVsRCxvRkFBb0Y7QUFDdkY7O0FBRUE7R0FDRywwQkFBMEI7R0FDMUIsc0JBQXNCO0dBQ3RCLG9DQUFvQztHQUNwQyxzQkFBc0I7R0FDdEIsd0JBQXdCO0dBQ3hCLHNCQUFzQjtHQUN0Qiw2Q0FBNkM7QUFDaEQ7O0FBRUE7R0FDRywrQkFBK0I7R0FHL0IsMkJB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QUNHLGtDQUFrQztHQUVsQyxrRkFBa0Y7QUFDckY7O0FBRUE7R0FDRyxrQ0FBa0M7R0FFbEMsa0ZBQWtGO0FBQ3JGOztBQUVBO0dBQ0csa0NBQWtDO0dBRWxDLGtGQUFrRjtBQUNyRjs7QUFFQTtHQUNHLGtDQUFrQztHQUVsQyxrRkFBa0Y7QUFDckY7O0FBRUE7R0FDRyxrQ0FBa0M7R0FFbEMsa0ZBQWtGO0FBQ3JGOztBQUVBO0dBQ0csa0NBQWtDO0dBRWxDLGtGQUFrRjtBQUNyRjs7QUFFQTtHQUNHLGtDQUFrQztHQUVsQyxrRkFBa0Y7QUFDckY7O0FBRUE7R0FDRyxrQ0FBa0M7R0FFbEMsa0ZBQWtGO0FBQ3JGOztBQUVBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7Ozs7Ozs7O0dBU0c7O0FBR0gsa0VBQWtFOztBQUNsRTtHQUNHLHdCQUF3QjtHQUV4QixpRkFBaUY7QUFDcEY7O0FBR0EsaURBQWlEOztBQUVqRDtHQUNHO01BQ0csVUFBVTtHQUNiOztHQUVBO01BQ0csV0FBVztHQUNkOztHQUVBO01BQ0csK0JBQStCO01BRy9CLDJCQUEyQjtNQUczQiw2QkFBNkI7TUFHN0IsNkJBQTZCO01BSTdCLDZCQUE2QjtNQUM3QiwwQkFBMEI7R0FDN0I7O0dBRUE7TUFDRyxhQUFhO0dBQ2hCOztHQUVBO01BQ0csbUJBQW1CO01BQ25CLG9CQUFvQjtHQUN2Qjs7R0FFQTtNQUNHLGtCQUFrQjtHQUNyQjs7R0FFQTtNQUNHLFVBQVU7R0FDYjtBQUNIIiwiZmlsZSI6ImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYWQtZnVsbHNjcmVlbiB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aCAgIDogOTUlO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1haW4tY29udGFpbmVyLXNraWxscyB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiAxMDAlO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBzdGFydDtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogc3RhcnQ7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgICA6IGZsZXgtc3RhcnQ7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1pdGVtLWFsaWduICA6IGNlbnRlcjtcbiAgIGFsaWduLXNlbGYgICAgICAgICAgIDogY2VudGVyO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiA5M3Z3O1xuICAgb3ZlcmZsb3cteSAgICAgICAgICAgOiBzY3JvbGw7XG4gICBvdmVyZmxvdy14ICAgICAgICAgICA6IGhpZGRlbjtcbn1cblxuLnNraWxscy10aXRsZSB7XG4gICBwb3NpdGlvbiAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAtbXMtZmxleC1hbGlnbiAgIDogZW5kO1xuICAgYWxpZ24taXRlbXMgICAgICA6IGZsZXgtZW5kO1xuICAgLyogbWFyZ2luLWxlZnQgICA6IGNhbGMoNSAqIHZhcigtLWZvbnRTaXplKSk7ICovXG4gICB3aWR0aCAgICAgICAgICAgIDogY2FsYyg3NSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBoZWlnaHQgICAgICAgICAgIDogMTAlO1xuICAgcGFkZGluZy1ib3R0b20gICA6IDElO1xuICAgcGFkZGluZy10b3AgICAgICA6IDclO1xuICAgcGFkZGluZy1sZWZ0ICAgICA6IGNhbGMoMS41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGZvbnQtc2l6ZSAgICAgICAgOiBjYWxjKDIuNSAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBib3JkZXItYm90dG9tICAgIDogMC42cHggdmFyKC0tbGluZS1ibGFjaykgc29saWQ7XG4gICB6LWluZGV4ICAgICAgICAgIDogMjAwO1xuICAgbWFyZ2luLWJvdHRvbSAgICA6IDMlO1xufVxuXG4uc2tpbGxzLXRpdGxlLXR3byB7XG4gICBwYWRkaW5nLXRvcDogMiU7XG4gICBoZWlnaHQgICAgIDogNSU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IGhvcml6b250YWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogcm93O1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiByb3c7XG4gICBoZWlnaHQgICAgICAgICAgICAgICA6IGNhbGMoMjkgKiB2YXIoLS1mb250U2l6ZSkpO1xufVxuXG4udGl0bGVzLWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbiAgICAgICAgICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtd2Via2l0LWJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogLW1zLWZsZXhib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IGZsZXg7XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1saW5lLXBhY2sgICA6IGNlbnRlcjtcbiAgIGFsaWduLWNvbnRlbnQgICAgICAgIDogY2VudGVyO1xuICAgLXdlYmtpdC1ib3gtcGFjayAgICAgOiBjZW50ZXI7XG4gICAtbXMtZmxleC1wYWNrICAgICAgICA6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudCAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1pdGVtcyAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb24gICA6IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uICAgICAgIDogY29sdW1uO1xuICAgd2lkdGggICAgICAgICAgICAgICAgOiBjYWxjKDIwICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGhlaWdodCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcbiAgIHRleHQtYWxpZ24gICAgICAgICAgIDogY2VudGVyO1xuICAgcGFkZGluZy1sZWZ0ICAgICAgICAgOiBjYWxjKDUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgICAgICAgICAgICAgOiAxO1xuICAgZm9udC1zaXplICAgICAgICAgICAgOiBjYWxjKDEuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICAtd2Via2l0LXRyYW5zaXRpb24gICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5iaW9ncmFwaHktdGl0bGUge1xuICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XG4gICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgIC8qIHBhZGRpbmctbGVmdCA6IDEwJTsgKi9cbiAgIHBhZGRpbmctdG9wICAgICA6IDE1cHg7XG4gICBib3JkZXItcmFkaXVzICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG59XG5cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LXBhY2sgICAgIDogY2VudGVyO1xuICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQgICAgICA6IGNlbnRlcjtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICB3aWR0aCAgICAgICAgICAgICAgICA6IGNhbGMoNjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiBjYWxjKDI5ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIC8qIHBhZGRpbmctbGVmdCAgICAgIDogY2FsYyg1ICogdmFyKC0tZm9udFNpemUpKTsgKi9cbiAgIHBhZGRpbmctcmlnaHQgICAgICAgIDogY2FsYyg1ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMDtcbiAgIHotaW5kZXggICAgICAgICAgICAgIDogMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbiAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgICAgIDogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuLmJpby1jb250YWluZXIge1xuICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uc2tpbGxzLXBhZ2UgLnNraWxscy1jb250YWluZXIge1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAxO1xuICAgei1pbmRleCAgICAgICAgICAgOiAxMDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbHMtaW1hZ2Uge1xuICAgcG9zaXRpb24gICAgICAgICAgOiBmaXhlZDtcbiAgIGRpc3BsYXkgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5ICAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgZGlzcGxheSAgICAgICAgICAgOiBmbGV4O1xuICAgbGVmdCAgICAgICAgICAgICAgOiAyNSU7XG4gICB3aWR0aCAgICAgICAgICAgICA6IGNhbGMoNDAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAxO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGxzLXBhZ2UgLnNraWxscy1pbWFnZSB7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIGJpbyA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogLmJpby10ZXh0IHtcbiAgIG1hcmdpbi1sZWZ0ICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLWxlZnQgICAgOiBjYWxjKDMgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgcGFkZGluZy1yaWdodCAgIDogY2FsYygyLjUgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgIDogaW5oZXJpdDtcbiAgIGJvcmRlci1yYWRpdXMgICA6IGNhbGMoMC42ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIHotaW5kZXggICAgICAgICA6IDEwMDtcbn0gKi9cblxuLyogLT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnBhZ2Uge1xuICAgei1pbmRleDogMDtcbn1cblxuLnNraWxscy1wYWdlIC5wYWdlIHtcbiAgIHotaW5kZXg6IDEwMDtcbn1cblxuLyogLnNraWxscy1jb250YWluZXIge1xuICAgcG9zaXRpb24gICAgICAgICAgICAgIDogYWJzb2x1dGU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBmbGV4O1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgIDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50ICAgICAgIDogY2VudGVyO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgIDogY29sdW1uO1xuICAgd2lkdGggICAgICAgICAgICAgICAgIDogNjAlO1xuICAgaGVpZ2h0ICAgICAgICAgICAgICAgIDogMTAwJTtcbiAgIG1hcmdpbi1sZWZ0ICAgICAgICAgICA6IDE3JTtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgICA6IDA7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICAgOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGxzLXRpdGxlIHtcbiAgIGxlZnQgICAgICAgICAgOiAwO1xuICAgcG9zaXRpb24gICAgICA6IHJlbGF0aXZlO1xuICAgZGlzcGxheSAgICAgICA6IGZsZXg7XG4gICB3aWR0aCAgICAgICAgIDogY2FsYyg1MCAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBhbGlnbi1pdGVtcyAgIDogZmxleC1lbmQ7XG4gICBoZWlnaHQgICAgICAgIDogMTAlO1xuICAgbWFyZ2luLWxlZnQgICA6IHZ3O1xuICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgcGFkZGluZy10b3AgICA6IDMlO1xuICAgZm9udC1zaXplICAgICA6IGNhbGMoMi41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGJvcmRlci1ib3R0b20gOiAxcHggIzU1NTU1NSBzb2xpZDtcbiAgIHotaW5kZXggICAgICAgOiAyMDA7XG4gICBtYXJnaW4tYm90dG9tIDogMyU7XG59ICovXG5cbi8qIC5za2lsbHMtcGFnZSAuc2tpbGxzLWNvbnRhaW5lciB7XG4gICBvcGFjaXR5ICAgOiAwLjg7XG4gICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufSAqL1xuXG4vKiAuc2tpbGxzLWltYWdlIHtcbiAgIHBvc2l0aW9uICA6IGZpeGVkO1xuICAgZGlzcGxheSAgIDogZmxleDtcbiAgIGxlZnQgICAgICA6IDI1JTtcbiAgIHdpZHRoICAgICA6IGNhbGMoNDAgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3BhY2l0eSAgIDogMTtcbiAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbHMtcGFnZSAuc2tpbGxzLWltYWdlIHtcbiAgIG9wYWNpdHkgICA6IDA7XG4gICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufSAqL1xuXG4vKiBncmFwaCA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uc2tpbGxzLWxpc3Qge1xuICAgLyogYW5pbWF0aW9uLW5hbWUgOiBza2lsbHM7ICovXG4gICBtYXJnaW4tbGVmdCAgICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLWxlZnQgICAgICA6IGNhbGMoMyAqIHZhcigtLWZvbnRTaXplKSk7XG4gICBwYWRkaW5nLXJpZ2h0ICAgICA6IGNhbGMoMi41ICogdmFyKC0tZm9udFNpemUpKTtcbiAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tZnJvbnQtYmxhY2spO1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiBpbmhlcml0O1xuICAgYm9yZGVyLXJhZGl1cyAgICAgOiBjYWxjKDAuNiAqIHZhcigtLWZvbnRTaXplKSk7XG4gICB6LWluZGV4ICAgICAgICAgICA6IDEwMDtcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDA7XG59XG5cbi5za2lsbHMtcGFnZSAuc2tpbGxzLWxpc3Qge1xuICAgLXdlYmtpdC10cmFuc2l0aW9uICAgOiBhbGwgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICAgICA6IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIG9wYWNpdHkgICAgICAgICAgICAgIDogMTtcbiAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAtd2Via2l0LWJveC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgIC1tcy1mbGV4LWFsaWduICAgICAgIDogY2VudGVyO1xuICAgYWxpZ24taXRlbXMgICAgICAgICAgOiBjZW50ZXI7XG4gICAtd2Via2l0LWJveC1wYWNrICAgICA6IHNwYWNlLWV2ZW5seTtcbiAgIC1tcy1mbGV4LXBhY2sgICAgICAgIDogc3BhY2UtZXZlbmx5O1xuICAganVzdGlmeS1jb250ZW50ICAgICAgOiBzcGFjZS1ldmVubHk7XG59XG5cbi8qIHNlY3Rpb24ge1xuICAgYmFja2dyb3VuZDogIzVhYThlODtcbn0gKi9cblxuc2VjdGlvbiBhcnRpY2xlLnNraWxscy1saXN0IHtcbiAgIHdpZHRoIDogOTUlO1xuICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5hcnRpY2xlIGRpdiB7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiBhcnRpY2xlLnNraWxscy1saXN0IHAge1xuICAgcG9zaXRpb24gICAgICAgICAgOiByZWxhdGl2ZTtcbiAgIC8qIGhlaWdodCAgICAgICAgIDogY2FsYygyLjY0ICogdmFyKC0tZm9udFNpemUpKTsgKi9cbiAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGJveC1zaXppbmcgICAgICAgIDogYm9yZGVyLWJveDtcbiAgIGNvbG9yICAgICAgICAgICAgIDogI2ZmZjtcbiAgIHBhZGRpbmcgICAgICAgICAgIDogY2FsYygwLjYgKiB2YXIoLS1mb250U2l6ZSkpO1xuICAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XG4gICB6LWluZGV4ICAgICAgICAgICA6IDI7XG4gICBtYXJnaW4gICAgICAgICAgICA6IDAgIWltcG9ydGFudDtcbn1cblxuc2VjdGlvbiBhcnRpY2xlLnNraWxscy1saXN0IGRpdiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICB6LWluZGV4ICAgOiAtMjtcbiAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgdG9wICAgICAgIDogMDtcbiAgIGJvdHRvbSAgICA6IDA7XG4gICBsZWZ0ICAgICAgOiAwO1xuICAgcmlnaHQgICAgIDogMDtcbiAgIG1hcmdpbiAgICA6IGF1dG87XG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgaGVpZ2h0ICAgIDogMTAwJTtcbiAgIHdpZHRoICAgICA6IDEwMCU7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICAgei1pbmRleCAgICAgICAgICAgOiAtMTtcbiAgIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XG4gICB0b3AgICAgICAgICAgICAgICA6IDA7XG4gICBib3R0b20gICAgICAgICAgICA6IDA7XG4gICBsZWZ0ICAgICAgICAgICAgICA6IDA7XG4gICByaWdodCAgICAgICAgICAgICA6IDA7XG4gICBiYWNrZ3JvdW5kICAgICAgICA6IHJnYigyMjQsIDUxLCAyNTUpO1xuICAgaGVpZ2h0ICAgICAgICAgICAgOiAxMDAlO1xuICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyO1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAxO1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbn1cblxuXG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDEpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDIpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDMpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDQpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDUpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDYpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDcpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXY6bnRoLWNoaWxkKDgpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgIHdpZHRoICAgICAgICAgICAgIDogMCU7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIHBhZ2Ugc2tpbGxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuc2VjdGlvbiAuc2tpbGxzLXBhZ2UgYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXYgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgei1pbmRleCAgIDogLTI7XG4gICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgIHRvcCAgICAgICA6IDA7XG4gICBib3R0b20gICAgOiAwO1xuICAgbGVmdCAgICAgIDogMDtcbiAgIHJpZ2h0ICAgICA6IDA7XG4gICBtYXJnaW4gICAgOiBhdXRvO1xuICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgIGhlaWdodCAgICA6IDEwMCU7XG4gICB3aWR0aCAgICAgOiAxMDAlO1xufVxuXG5zZWN0aW9uIC5za2lsbHMtcGFnZSBhcnRpY2xlLnNraWxscy1saXN0IGRpdiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB6LWluZGV4ICAgICAgICAgICA6IC0xO1xuICAgcG9zaXRpb24gICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgIHRvcCAgICAgICAgICAgICAgIDogMDtcbiAgIGJvdHRvbSAgICAgICAgICAgIDogMDtcbiAgIGxlZnQgICAgICAgICAgICAgIDogMDtcbiAgIHJpZ2h0ICAgICAgICAgICAgIDogMDtcbiAgIGJhY2tncm91bmQgICAgICAgIDogdmFyKC0tbWFnZW50YSk7XG4gICBoZWlnaHQgICAgICAgICAgICA6IDEwMCU7XG4gICBvcGFjaXR5ICAgICAgICAgICA6IDE7XG4gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDUwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCgxKSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDYwJSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDIyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCgyKSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDg1JSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDI1MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCgzKSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDgwJSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjcwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDI3MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCg0KSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDcwJSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjgwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDI4MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCg1KSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDg1JSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjkwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDI5MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCg2KSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDk1JSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzIwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDMyMDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCg3KSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDkwJSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzQwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDM0MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbnNlY3Rpb24gLnNraWxscy1wYWdlIGFydGljbGUuc2tpbGxzLWxpc3QgZGl2Om50aC1jaGlsZCg4KSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICB3aWR0aCAgICAgICAgICAgICA6IDcwJSAhaW1wb3J0YW50O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzcwMG1zIGN1YmljLWJlemllcigwLjQxNSwgMC4xNDUsIDAuMDY1LCAwLjkxNSkgIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb24gICAgICAgIDogYWxsIDM3MDBtcyBjdWJpYy1iZXppZXIoMC40MTUsIDAuMTQ1LCAwLjA2NSwgMC45MTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIHNlY3Rpb246YmVmb3JlIHtcbiAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgdG9wICAgICAgIDogLTI1MHB4O1xuICAgbGVmdCAgICAgIDogLTM1MHB4O1xuICAgd2lkdGggICAgIDogNTAwcHg7XG4gICBoZWlnaHQgICAgOiA1MDBweDtcbiAgIGNvbnRlbnQgICA6ICcnO1xuICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDkwLCAyMzIsIDAuMjUpO1xuICAgdHJhbnNmb3JtIDogcm90YXRlKDMwZGVnKTtcbn0gKi9cblxuLyogc2VjdGlvbjphZnRlciB7XG4gICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgIGJvdHRvbSAgICA6IC0yNTBweDtcbiAgIHJpZ2h0ICAgICA6IC0zNTBweDtcbiAgIHdpZHRoICAgICA6IDUwMHB4O1xuICAgaGVpZ2h0ICAgIDogNTAwcHg7XG4gICBjb250ZW50ICAgOiAnJztcbiAgIGJhY2tncm91bmQ6IHJnYmEoMTA4LCA5MCwgMjMyLCAwLjI1KTtcbiAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgzMGRlZyk7XG59ICovXG5cblxuLypob3ZlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xuc2VjdGlvbiAuc2tpbGxzLXBhZ2UgYXJ0aWNsZS5za2lsbHMtbGlzdCBkaXYgc3BhbjpudGgtY2hpbGQoMik6aG92ZXIge1xuICAgb3BhY2l0eSAgICAgICAgICAgOiAwLjg1O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNDE1LCAwLjE0NSwgMC4wNjUsIDAuOTE1KSAhaW1wb3J0YW50O1xufVxuXG5cbi8qIHBvcnRyYWl0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAuc2tpbGxzLXRpdGxlIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICB9XG5cbiAgIC5tYWluLWNvbnRhaW5lci1za2lsbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uICAgICAgICAgICAgIDogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduICAgIDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ24gICAgICAgOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtcyAgICAgICAgICA6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXBhY2sgICAgIDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjayAgICAgICAgOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQgICAgICA6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudCAgIDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbiAgIDogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb24gICAgICAgOiBjb2x1bW47XG4gICAgICB3aWR0aCAgICAgICAgICAgICAgICA6IDkwJTtcbiAgIH1cblxuICAgLnRpdGxlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cblxuICAgLnNraWxscy1jb250YWluZXIge1xuICAgICAgd2lkdGggICAgICAgIDogMTAwJTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgfVxuXG4gICAuc2tpbGxzLWxpc3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgfVxuXG4gICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/skills/skills.component.html":
/*!*************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/skills/skills.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"toad-fullscreen\">\n\n    <div class=\"main-container-skills\">\n\n        <div class=\"skills-title\">\n            My Skills\n        </div>\n\n        <div class=\"content-container\">\n\n            <div class=\"titles-container bio-title-main\">\n\n                <div class=\"biography-title\">\n                    Skills\n                </div>\n            </div>\n\n            <div class=\"page skills-container bio-container\">\n\n                <img *ngIf=\"skillsImage\" class=\"menu-icon skills-image image image-black\" [src]=\"skillsImage\"\n                    alt=\"skills-image\" />\n                <article class=\"skills-list\">\n\n                    <div class=\"t-6\">\n                        <p>Express\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>Angular\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>Redux\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>Node\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>HTML\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>CSS\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>JavaScript/TypeScript\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n\n                    <div class=\"t-6\">\n                        <p>Firebase\n\n                            <span></span>\n\n                            <span class=\"skills\"></span></p>\n                    </div>\n                </article>\n\n            </div>\n        </div>\n\n        <div class=\"skills-title skills-title-two\">\n        </div>\n    </div>\n</section>\n<!--\n<section id=\"skills\" class=\"toad-fullscreen\">\n\n    <div class=\"page skills-container\">\n\n        <div class=\"skills-title\">\n            My Skills\n        </div>\n\n\n    </div>\n</section> -->\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/skills/skills.component.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/skills/skills.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "../../../libs/components/ui/src/lib/tokens/index.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SkillsComponent = /** @class */ (function () {
    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();
    function SkillsComponent(images, brand) {
        this.images = images;
        this.brand = brand;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.skillsImage = images.icons.skills;
        if (this.landingState)
            this.localState = this.landingState;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        // window.addEventListener( 'scroll', this.scroll, true );
    };
    SkillsComponent.prototype.ngOnDestroy = function () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    };
    SkillsComponent.prototype.ngOnChanges = function () {
        this.localState = this.landingState;
        this.state.emit(__assign({}, this.localState));
        this.skillsContainer = document.querySelector(".main-container-skills");
        if (this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 2) {
            if (this.skillsContainer)
                this.skillsContainer.classList.add('skills-page');
        }
        else {
            if (this.skillsContainer)
                this.skillsContainer.classList.remove('skills-page');
        }
        this.localState = this.landingState;
    };
    SkillsComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SkillsComponent.prototype, "landingState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SkillsComponent.prototype, "state", void 0);
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skills',
            template: __webpack_require__(/*! ./skills.component.html */ "../../../libs/components/ui/src/lib/containers/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "../../../libs/components/ui/src/lib/containers/skills/skills.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_1__["WWW_BRAND_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object, Object])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.css":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    transition        : all 350ms ease-in-out;\n}\n\n.video-modal,\n.overlay {\n    position: absolute;\n    top     : 0;\n    right   : 0;\n    bottom  : 0;\n    left    : 0;\n    z-index : -100;\n}\n\n.video-modal-content * {\n    opacity: 0;\n    z-index: -100;\n}\n\n.video-modal {\n    display          : flex;\n    position         : fixed;\n    align-items      : center;\n}\n\n.video-modal .overlay {\n    background: var(--back-black)e3;\n    opacity   : 0;\n}\n\n.video-modal-content {\n    position   : relative;\n    top        : auto;\n    right      : auto;\n    bottom     : auto;\n    left       : auto;\n    width      : calc(100% - 12em);\n    height     : 0;\n    background : rgba(255, 255, 255, 0.9);\n    margin     : 0 auto;\n    padding-top: calc((100% - 12em) * 0.5);\n    overflow-y : visible;\n}\n\n@media (min-aspect-ratio: 16/9) {\n    .video-modal-content {\n        width       : 0;\n        height      : calc(var(--deviceScreenHeight) - 10em);\n        padding-top : 0;\n        padding-left: calc((var(--deviceScreenHeight) - 10em) * 1.8);\n    }\n}\n\n@media (max-width: 640px) {\n    .video-modal-content {\n        width      : calc(100% - 1em);\n        padding-top: calc((100% - 1em) * 0.5);\n    }\n}\n\n/* ======================================================================== */\n\n.video-modal * {\n    -webkit-transform: scale(0, 0);\n    transform        : scale(0, 0);\n    background-color : var(--back-black)e3;\n}\n\n.show .video-modal * {\n    -webkit-transform: scale(1, 1);\n    transform        : scale(1, 1);\n}\n\n.show .close-video-modal * {\n    cursor: pointer;\n}\n\n.show .close-video-modal {\n    display        : block;\n    position       : absolute;\n    right          : 0;\n    top            : -40px;\n    text-decoration: none;\n    font-size      : 20px;\n    font-weight    : bold;\n    cursor         : pointer;\n    z-index        : 500;\n}\n\n.show .close-video-modal>svg>#icon-x-close>path {\n    -webkit-transform-origin: center;\n    transform-origin        : center;\n    fill                    : rgba(255, 255, 255, 0.836);\n    cursor                  : pointer;\n    -webkit-transform       : scale(0.9);\n    transform               : scale(0.9);\n}\n\n.show .close-video-modal>svg:hover>#icon-x-close>path {\n    fill             : var(--purple);\n    -webkit-transform: scale(1);\n    transform        : scale(1);\n}\n\n.show #youtube {\n    position          : absolute;\n    top               : 0;\n    right             : 0;\n    bottom            : 0;\n    left              : 0;\n    box-shadow        : 0px 2px 16px rgba(0, 0, 0, 0.5);\n    z-index           : 510;\n}\n\n.show .overlay {\n    opacity: 1;\n}\n\n.show .video-modal,\n.show .video-modal-content * {\n    opacity         : 1;\n    background-color: transparent;\n    z-index         : 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy91aS9zcmMvbGliL2NvbnRhaW5lcnMvdmlkZW8tb3ZlcmxheS92aWRlby1vdmVybGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFHSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBR3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLG9EQUFvRDtRQUNwRCxlQUFlO1FBQ2YsNERBQTREO0lBQ2hFO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QixxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQSw2RUFBNkU7O0FBRTdFO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxvREFBb0Q7SUFDcEQsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFFckIsbURBQW1EO0lBQ25ELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJsaWJzL2NvbXBvbmVudHMvdWkvc3JjL2xpYi9jb250YWluZXJzL3ZpZGVvLW92ZXJsYXkvdmlkZW8tb3ZlcmxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi52aWRlby1tb2RhbCxcbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wICAgICA6IDA7XG4gICAgcmlnaHQgICA6IDA7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgei1pbmRleCA6IC0xMDA7XG59XG5cbi52aWRlby1tb2RhbC1jb250ZW50ICoge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTEwMDtcbn1cblxuLnZpZGVvLW1vZGFsIHtcbiAgICBkaXNwbGF5ICAgICAgICAgIDogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheSAgICAgICAgICA6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXkgICAgICAgICAgOiBmbGV4O1xuICAgIHBvc2l0aW9uICAgICAgICAgOiBmaXhlZDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgICA6IGNlbnRlcjtcbn1cblxuLnZpZGVvLW1vZGFsIC5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrLWJsYWNrKWUzO1xuICAgIG9wYWNpdHkgICA6IDA7XG59XG5cbi52aWRlby1tb2RhbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbiAgIDogcmVsYXRpdmU7XG4gICAgdG9wICAgICAgICA6IGF1dG87XG4gICAgcmlnaHQgICAgICA6IGF1dG87XG4gICAgYm90dG9tICAgICA6IGF1dG87XG4gICAgbGVmdCAgICAgICA6IGF1dG87XG4gICAgd2lkdGggICAgICA6IGNhbGMoMTAwJSAtIDEyZW0pO1xuICAgIGhlaWdodCAgICAgOiAwO1xuICAgIGJhY2tncm91bmQgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgbWFyZ2luICAgICA6IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogY2FsYygoMTAwJSAtIDEyZW0pICogMC41KTtcbiAgICBvdmVyZmxvdy15IDogdmlzaWJsZTtcbn1cblxuQG1lZGlhIChtaW4tYXNwZWN0LXJhdGlvOiAxNi85KSB7XG4gICAgLnZpZGVvLW1vZGFsLWNvbnRlbnQge1xuICAgICAgICB3aWR0aCAgICAgICA6IDA7XG4gICAgICAgIGhlaWdodCAgICAgIDogY2FsYyh2YXIoLS1kZXZpY2VTY3JlZW5IZWlnaHQpIC0gMTBlbSk7XG4gICAgICAgIHBhZGRpbmctdG9wIDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1kZXZpY2VTY3JlZW5IZWlnaHQpIC0gMTBlbSkgKiAxLjgpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLnZpZGVvLW1vZGFsLWNvbnRlbnQge1xuICAgICAgICB3aWR0aCAgICAgIDogY2FsYygxMDAlIC0gMWVtKTtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoKDEwMCUgLSAxZW0pICogMC41KTtcbiAgICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4udmlkZW8tbW9kYWwgKiB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiBzY2FsZSgwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tYmFjay1ibGFjayllMztcbn1cblxuLnNob3cgLnZpZGVvLW1vZGFsICoge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogc2NhbGUoMSwgMSk7XG59XG5cbi5zaG93IC5jbG9zZS12aWRlby1tb2RhbCAqIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaG93IC5jbG9zZS12aWRlby1tb2RhbCB7XG4gICAgZGlzcGxheSAgICAgICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgICAgICA6IGFic29sdXRlO1xuICAgIHJpZ2h0ICAgICAgICAgIDogMDtcbiAgICB0b3AgICAgICAgICAgICA6IC00MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemUgICAgICA6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQgICAgOiBib2xkO1xuICAgIGN1cnNvciAgICAgICAgIDogcG9pbnRlcjtcbiAgICB6LWluZGV4ICAgICAgICA6IDUwMDtcbn1cblxuLnNob3cgLmNsb3NlLXZpZGVvLW1vZGFsPnN2Zz4jaWNvbi14LWNsb3NlPnBhdGgge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogY2VudGVyO1xuICAgIGZpbGwgICAgICAgICAgICAgICAgICAgIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzNik7XG4gICAgY3Vyc29yICAgICAgICAgICAgICAgICAgOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtICAgICAgIDogc2NhbGUoMC45KTtcbiAgICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHNjYWxlKDAuOSk7XG59XG5cbi5zaG93IC5jbG9zZS12aWRlby1tb2RhbD5zdmc6aG92ZXI+I2ljb24teC1jbG9zZT5wYXRoIHtcbiAgICBmaWxsICAgICAgICAgICAgIDogdmFyKC0tcHVycGxlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHNjYWxlKDEpO1xufVxuXG4uc2hvdyAjeW91dHViZSB7XG4gICAgcG9zaXRpb24gICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICAgICAgICAgICA6IDA7XG4gICAgcmlnaHQgICAgICAgICAgICAgOiAwO1xuICAgIGJvdHRvbSAgICAgICAgICAgIDogMDtcbiAgICBsZWZ0ICAgICAgICAgICAgICA6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJveC1zaGFkb3cgICAgICAgIDogMHB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB6LWluZGV4ICAgICAgICAgICA6IDUxMDtcbn1cblxuLnNob3cgLm92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zaG93IC52aWRlby1tb2RhbCxcbi5zaG93IC52aWRlby1tb2RhbC1jb250ZW50ICoge1xuICAgIG9wYWNpdHkgICAgICAgICA6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleCAgICAgICAgIDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.html":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-video-overlay\">\n    <!--\n        <main>\n          <section class=\"video-container\">\n            <img class=\"play-video-icon js-trigger-video-modal\" data-id=\"jssO8-5qmag\" alt=\"Play Video\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyAKCXZlcnNpb249IjEuMSIgCgl4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIAoJeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCgl4PSIwIgoJeT0iMCIKCXZpZXdCb3g9IjAgMCA3MiA3MiIgCglzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MiA3MjsiIAoJeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgCgl3aWR0aD0iIiAKCWhlaWdodD0iIiAKPgogICAgICAgIDxwYXRoIGQ9Ik0zNiw3MiBDNTUuOSw3MiA3Miw1NS45IDcyLDM2IEM3MiwxNi4xIDU1LjksMCAzNiwwIEMxNi4xLDAgMCwxNi4xIDAsMzYgQzAsNTUuOSAxNi4xLDcyIDM2LDcyIFogTTM2LDggQzUxLjQsOCA2NCwyMC42IDY0LDM2IEM2NCw1MS40IDUxLjQsNjQgMzYsNjQgQzIwLjYsNjQgOCw1MS40IDgsMzYgQzgsMjAuNiAyMC42LDggMzYsOCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNiw1MS43IEMyNi4zLDUxLjkgMjYuNyw1MiAyNyw1MiBDMjcuMyw1MiAyNy43LDUxLjkgMjgsNTEuNyBMNTIsMzcuNyBDNTIuNiwzNy4zIDUzLDM2LjcgNTMsMzYgQzUzLDM1LjMgNTIuNiwzNC42IDUyLDM0LjMgTDI4LDIwLjMgQzI3LjQsMTkuOSAyNi42LDE5LjkgMjYsMjAuMyBDMjUuNCwyMC43IDI1LDIxLjMgMjUsMjIgTDI1LDUwIEMyNSw1MC43IDI1LjQsNTEuNCAyNiw1MS43IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+Cjwvc3ZnPg==\" />\n          </section>\n        </main>\n    -->\n    <section class=\"video-modal\">\n        <div class=\"overlay\"></div>\n        <div id=\"video-modal-content\" class=\"video-modal-content\">\n            <iframe id=\"youtube\" width=\"100%\" height=\"100%\" frameborder=\"0\" src=\"\" allowfullscreen=\"\"></iframe>\n            <div class=\"close-video-modal\" (click)=\"closeVideoOverlay()\">\n                <svg\n                    version=\"1.1\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    x=\"0\"\n                    y=\"0\"\n                    viewBox=\"0 0 32 32\"\n                    style=\"enable-background:new 0 0 32 32;\"\n                    xml:space=\"preserve\"\n                    width=\"24\"\n                    height=\"24\"\n                >\n                    <g id=\"icon-x-close\">\n                        <path\n                            d=\"M30.3448276,31.4576271 C29.9059965,31.4572473 29.4852797,31.2855701 29.1751724,30.980339 L0.485517241,2.77694915 C-0.122171278,2.13584324 -0.104240278,1.13679247 0.52607603,0.517159487 C1.15639234,-0.102473494 2.17266813,-0.120100579 2.82482759,0.477288136 L31.5144828,28.680678 C31.9872448,29.1460053 32.1285698,29.8453523 31.8726333,30.4529866 C31.6166968,31.0606209 31.0138299,31.4570487 30.3448276,31.4576271 Z\"\n                            id=\"Shape\"\n                        ></path>\n                        <path\n                            d=\"M1.65517241,31.4576271 C0.986170142,31.4570487 0.383303157,31.0606209 0.127366673,30.4529866 C-0.12856981,29.8453523 0.0127551942,29.1460053 0.485517241,28.680678 L29.1751724,0.477288136 C29.8273319,-0.120100579 30.8436077,-0.102473494 31.473924,0.517159487 C32.1042403,1.13679247 32.1221713,2.13584324 31.5144828,2.77694915 L2.82482759,30.980339 C2.51472031,31.2855701 2.09400353,31.4572473 1.65517241,31.4576271 Z\"\n                            id=\"Shape\"\n                        ></path>\n                    </g>\n                </svg>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: VideoOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayComponent", function() { return VideoOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "../../../libs/components/ui/src/lib/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoOverlayComponent = /** @class */ (function () {
    function VideoOverlayComponent(_videoOverlayService) {
        this._videoOverlayService = _videoOverlayService;
    }
    VideoOverlayComponent.prototype.onKeydownHandler = function (event) {
        if (event.key === '27' || event.key === 'Escape')
            this._videoOverlayService.closeVideoModal();
    };
    VideoOverlayComponent.prototype.ngOnInit = function () { };
    VideoOverlayComponent.prototype.ngOnChanges = function () { };
    VideoOverlayComponent.prototype.closeVideoOverlay = function () {
        this._videoOverlayService.closeVideoModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], VideoOverlayComponent.prototype, "onKeydownHandler", null);
    VideoOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dee-dev-ui-video-overlay',
            template: __webpack_require__(/*! ./video-overlay.component.html */ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.html"),
            styles: [__webpack_require__(/*! ./video-overlay.component.css */ "../../../libs/components/ui/src/lib/containers/video-overlay/video-overlay.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["VideoOverlayService"]])
    ], VideoOverlayComponent);
    return VideoOverlayComponent;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/services/index.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/services/index.ts ***!
  \***************************************************************************************/
/*! exports provided: MainMenuNavService, VideoOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_menu_nav_main_menu_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-menu-nav/main-menu-nav.service */ "../../../libs/components/ui/src/lib/services/main-menu-nav/main-menu-nav.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainMenuNavService", function() { return _main_menu_nav_main_menu_nav_service__WEBPACK_IMPORTED_MODULE_0__["MainMenuNavService"]; });

/* harmony import */ var _video_overlay_video_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-overlay/video-overlay.service */ "../../../libs/components/ui/src/lib/services/video-overlay/video-overlay.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayService", function() { return _video_overlay_video_overlay_service__WEBPACK_IMPORTED_MODULE_1__["VideoOverlayService"]; });





/***/ }),

/***/ "../../../libs/components/ui/src/lib/services/main-menu-nav/main-menu-nav.service.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/services/main-menu-nav/main-menu-nav.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MainMenuNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuNavService", function() { return MainMenuNavService; });
var MainMenuNavService = /** @class */ (function () {
    function MainMenuNavService() {
    }
    MainMenuNavService.prototype.hideParticleClasses = function () {
        this.particleCanvas = document.getElementById('particle-canvas');
        this.removeEvents(this.particleCanvas);
        this.particleCanvas.style.height = '0';
        this.particleCanvas.style.display = 'none';
        this.particleCanvas.style.zIndex = '-50';
        // width = "1920" height = "1080" style = "display: block; height: var(--deviceScreenHeight); z-index: 150;"
        // canvas.setAttribute( 'height', '0' );
        // canvas.setAttribute( 'style', "display: none; height: 0; z-index: -50;" );
    };
    MainMenuNavService.prototype.displayParticleClasses = function () {
        this.particleCanvas = document.getElementById('particle-canvas');
        this.particleCanvas.style.display = 'block';
        this.particleCanvas.style.height = 'var(--deviceScreenHeight)';
        this.particleCanvas.style.zIndex = '150';
    };
    MainMenuNavService.prototype.removeEvents = function (el) {
        var newEl = el.cloneNode(false);
        while (el.hasChildNodes())
            newEl.appendChild(el.firstChild);
        el.parentNode.replaceChild(newEl, el);
    };
    MainMenuNavService.prototype.toggleHamClass = function () {
        var htmlScrolling = document.querySelector('html');
        var hamMenu = document.querySelector('.ham-menu');
        if (document.querySelector('.ham-menu.cross')) {
            hamMenu.classList.add('lines');
            hamMenu.classList.remove('cross');
            document.getElementById('container-toolbar-id').classList.remove('cross');
            document.getElementById('side-nav').style.zIndex = '30';
            document.querySelector('.arrow-up')['style'].zIndex = '30';
            document.getElementById('myNav').style.height = '0%';
            htmlScrolling.style.overflowY = 'scroll';
            // below is for the particleBackground on the main menu page
            this.hideParticleClasses();
        }
        else {
            hamMenu.classList.remove('lines');
            hamMenu.classList.add('cross');
            document.getElementById('container-toolbar-id').classList.add('cross');
            document.getElementById('side-nav').style.zIndex = '20';
            document.querySelector('.arrow-up')['style'].zIndex = '20';
            document.getElementById('myNav').style.height = '100%';
            htmlScrolling.style.overflowY = 'hidden';
            // below is for the particleBackground on the main menu page
            this.displayParticleClasses();
        }
        this.resize = function () {
            var bodyNode = document.querySelector('body');
            bodyNode.style.marginTop = " ~~(0) + \"px\"";
        };
        this.resize();
    };
    return MainMenuNavService;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/services/video-overlay/video-overlay.service.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/services/video-overlay/video-overlay.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: VideoOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayService", function() { return VideoOverlayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoOverlayService = /** @class */ (function () {
    function VideoOverlayService() {
    }
    VideoOverlayService.prototype.toggleVideoModal = function (id) {
        var videoOverlay = document.querySelector('.section-video-overlay');
        var htmlNode = document.querySelector('html');
        var youtube = document.querySelector('#youtube');
        var autoplay = '?autoplay=1';
        var related_no = '&rel=0';
        var src = 'https://www.youtube.com/embed/' + id + autoplay + related_no;
        youtube.setAttribute('src', src);
        videoOverlay.classList.add('show');
        htmlNode.style.overflowY = 'hidden';
    };
    VideoOverlayService.prototype.closeVideoModal = function () {
        var videoOverlay = document.querySelector('.section-video-overlay');
        var youtube = document.querySelector('#youtube');
        var htmlNode = document.querySelector('html');
        videoOverlay.classList.remove('show');
        youtube.setAttribute('src', '');
        htmlNode.style.overflowY = 'scroll';
    };
    VideoOverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], VideoOverlayService);
    return VideoOverlayService;
}());



/***/ }),

/***/ "../../../libs/components/ui/src/lib/tokens/brand-config.token.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/tokens/brand-config.token.ts ***!
  \**************************************************************************************************/
/*! exports provided: WWW_BRAND_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WWW_BRAND_CONFIG_TOKEN", function() { return WWW_BRAND_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");

var WWW_BRAND_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WWW_BRAND_CONFIG_TOKEN');


/***/ }),

/***/ "../../../libs/components/ui/src/lib/tokens/environment-config.token.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/tokens/environment-config.token.ts ***!
  \********************************************************************************************************/
/*! exports provided: WWW_ENVIRONMENT_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WWW_ENVIRONMENT_TOKEN", function() { return WWW_ENVIRONMENT_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");

var WWW_ENVIRONMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WWW_ENVIRONMENT_TOKEN');


/***/ }),

/***/ "../../../libs/components/ui/src/lib/tokens/images-config.token.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/tokens/images-config.token.ts ***!
  \***************************************************************************************************/
/*! exports provided: WWW_IMAGES_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WWW_IMAGES_CONFIG_TOKEN", function() { return WWW_IMAGES_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");

var WWW_IMAGES_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WWW_IMAGES_CONFIG_TOKEN');


/***/ }),

/***/ "../../../libs/components/ui/src/lib/tokens/index.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/tokens/index.ts ***!
  \*************************************************************************************/
/*! exports provided: WWW_BRAND_CONFIG_TOKEN, WWW_IMAGES_CONFIG_TOKEN, WWW_ENVIRONMENT_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brand_config_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand-config.token */ "../../../libs/components/ui/src/lib/tokens/brand-config.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_BRAND_CONFIG_TOKEN", function() { return _brand_config_token__WEBPACK_IMPORTED_MODULE_0__["WWW_BRAND_CONFIG_TOKEN"]; });

/* harmony import */ var _images_config_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images-config.token */ "../../../libs/components/ui/src/lib/tokens/images-config.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_IMAGES_CONFIG_TOKEN", function() { return _images_config_token__WEBPACK_IMPORTED_MODULE_1__["WWW_IMAGES_CONFIG_TOKEN"]; });

/* harmony import */ var _environment_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment-config.token */ "../../../libs/components/ui/src/lib/tokens/environment-config.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WWW_ENVIRONMENT_TOKEN", function() { return _environment_config_token__WEBPACK_IMPORTED_MODULE_2__["WWW_ENVIRONMENT_TOKEN"]; });






/***/ }),

/***/ "../../../libs/components/ui/src/lib/ui.module.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/components/ui/src/lib/ui.module.ts ***!
  \**********************************************************************************/
/*! exports provided: shellRoutes, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shellRoutes", function() { return shellRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state */ "../../../libs/components/ui/src/lib/+state/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "../../../libs/components/ui/src/lib/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var shellRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: _containers__WEBPACK_IMPORTED_MODULE_8__["ShellComponent"]
    }
];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // ANGULAR
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                // NGRX
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('www-ui', _state__WEBPACK_IMPORTED_MODULE_7__["wwwUiReducer"], { initialState: _state__WEBPACK_IMPORTED_MODULE_7__["wwwUiInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state__WEBPACK_IMPORTED_MODULE_7__["WwwUiEffects"]]),
                // SPAWNTECH CORE
                _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(shellRoutes)
            ],
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_8__["ShellComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["ListItemsComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["CodeComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["VideoOverlayComponent"]
            ],
            entryComponents: [_containers__WEBPACK_IMPORTED_MODULE_8__["ShellComponent"]],
            exports: [
                // ANGULAR
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                // SPAWNTECH WWW
                _containers__WEBPACK_IMPORTED_MODULE_8__["ShellComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../../libs/core/main/src/index.ts":
/*!**********************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/main/src/index.ts ***!
  \**********************************************************************/
/*! exports provided: MainModule, MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_main_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/main.module */ "../../../libs/core/main/src/lib/main.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return _lib_main_module__WEBPACK_IMPORTED_MODULE_0__["MainModule"]; });

/* harmony import */ var _lib_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/main.component */ "../../../libs/core/main/src/lib/main.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return _lib_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]; });





/***/ }),

/***/ "../../../libs/core/main/src/lib/main.component.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/main/src/lib/main.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'redCloud',
            template: '<router-outlet style="width: inherit; height:inherit;"></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../libs/core/main/src/lib/main.module.ts":
/*!********************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/main/src/lib/main.module.ts ***!
  \********************************************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dee-dev/core/router */ "../../../libs/core/router/src/index.ts");
/* harmony import */ var _dee_dev_components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dee-dev/components/ui */ "../../../libs/components/ui/src/index.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.component */ "../../../libs/core/main/src/lib/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WwwChangeManagerRoutes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        loadChildren: '@dee-dev/components/ui#UiModule',
        data: { pageTitle: 'cxfi' }
    }
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule_1 = MainModule;
    MainModule.forRoot = function (brand, environment) {
        return {
            ngModule: MainModule_1,
            providers: [
                {
                    provide: _dee_dev_components_ui__WEBPACK_IMPORTED_MODULE_5__["WWW_ENVIRONMENT_TOKEN"],
                    useValue: environment.production ? environment.appRoot : environment.appRoot
                },
                { provide: _dee_dev_components_ui__WEBPACK_IMPORTED_MODULE_5__["WWW_IMAGES_CONFIG_TOKEN"], useValue: brand.images },
                { provide: _dee_dev_components_ui__WEBPACK_IMPORTED_MODULE_5__["WWW_BRAND_CONFIG_TOKEN"], useValue: brand }
            ]
        };
    };
    var MainModule_1;
    MainModule = MainModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]), _dee_dev_core_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(WwwChangeManagerRoutes), _dee_dev_components_ui__WEBPACK_IMPORTED_MODULE_5__["UiModule"]],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
            exports: [_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../libs/core/router/src/index.ts":
/*!************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/index.ts ***!
  \************************************************************************/
/*! exports provided: RouterModule, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/config */ "../../../libs/core/router/src/lib/config/index.ts");
/* harmony import */ var _lib_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state */ "../../../libs/core/router/src/lib/+state/index.ts");
/* harmony import */ var _lib_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/router.module */ "../../../libs/core/router/src/lib/router.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _lib_router_module__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]; });




var store = {
    RouterActionTypes: _lib_state__WEBPACK_IMPORTED_MODULE_1__["RouterActionTypes"],
    Go: _lib_state__WEBPACK_IMPORTED_MODULE_1__["Go"],
    Back: _lib_state__WEBPACK_IMPORTED_MODULE_1__["Back"],
    Forward: _lib_state__WEBPACK_IMPORTED_MODULE_1__["Forward"],
    OpenUrl: _lib_state__WEBPACK_IMPORTED_MODULE_1__["OpenUrl"],
    Download: _lib_state__WEBPACK_IMPORTED_MODULE_1__["Download"],
    state: _lib_state__WEBPACK_IMPORTED_MODULE_1__["state"],
    url: _lib_state__WEBPACK_IMPORTED_MODULE_1__["url"],
    segments: _lib_state__WEBPACK_IMPORTED_MODULE_1__["segments"],
    params: _lib_state__WEBPACK_IMPORTED_MODULE_1__["params"],
    queryParams: _lib_state__WEBPACK_IMPORTED_MODULE_1__["queryParams"],
    data: _lib_state__WEBPACK_IMPORTED_MODULE_1__["data"],
    pageTitle: _lib_state__WEBPACK_IMPORTED_MODULE_1__["pageTitle"],
    mockRouter: _lib_config__WEBPACK_IMPORTED_MODULE_0__["mockRouter"]
};


/***/ }),

/***/ "../../../libs/core/router/src/lib/+state/index.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/+state/index.ts ***!
  \***********************************************************************************/
/*! exports provided: RouterActionTypes, Go, Back, Forward, Download, OpenUrl, RouterEffects, state, url, segments, params, queryParams, data, pageTitle, CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.actions */ "../../../libs/core/router/src/lib/+state/router.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterActionTypes", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["RouterActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Download"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenUrl", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["OpenUrl"]; });

/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.effects */ "../../../libs/core/router/src/lib/+state/router.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_1__["RouterEffects"]; });

/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.selectors */ "../../../libs/core/router/src/lib/+state/router.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "state", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["state"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "url", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["url"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "segments", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["segments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "params", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["params"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["queryParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "data", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["data"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageTitle", function() { return _router_selectors__WEBPACK_IMPORTED_MODULE_2__["pageTitle"]; });

/* harmony import */ var _router_serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.serializer */ "../../../libs/core/router/src/lib/+state/router.serializer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return _router_serializer__WEBPACK_IMPORTED_MODULE_3__["CustomRouterStateSerializer"]; });







/***/ }),

/***/ "../../../libs/core/router/src/lib/+state/router.actions.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/+state/router.actions.ts ***!
  \********************************************************************************************/
/*! exports provided: RouterActionTypes, Go, Back, Forward, Download, OpenUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterActionTypes", function() { return RouterActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenUrl", function() { return OpenUrl; });
var RouterActionTypes;
(function (RouterActionTypes) {
    RouterActionTypes["Go"] = "[Router] Go";
    RouterActionTypes["Back"] = "[Router] Back";
    RouterActionTypes["Forward"] = "[Router] Forward";
    RouterActionTypes["Download"] = "[Router] Download";
    RouterActionTypes["OpenUrl"] = "[Router] Open url";
})(RouterActionTypes || (RouterActionTypes = {}));
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = RouterActionTypes.Go;
    }
    return Go;
}());

var Back = /** @class */ (function () {
    function Back() {
        this.type = RouterActionTypes.Back;
    }
    return Back;
}());

var Forward = /** @class */ (function () {
    function Forward() {
        this.type = RouterActionTypes.Forward;
    }
    return Forward;
}());

var Download = /** @class */ (function () {
    function Download(url) {
        this.url = url;
        this.type = RouterActionTypes.Download;
    }
    return Download;
}());

var OpenUrl = /** @class */ (function () {
    function OpenUrl(url) {
        this.url = url;
        this.type = RouterActionTypes.OpenUrl;
    }
    return OpenUrl;
}());



/***/ }),

/***/ "../../../libs/core/router/src/lib/+state/router.effects.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/+state/router.effects.ts ***!
  \********************************************************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router.actions */ "../../../libs/core/router/src/lib/+state/router.actions.ts");
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







var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, _store, _router, _location) {
        var _this = this;
        this.actions$ = actions$;
        this._store = _store;
        this._router = _router;
        this._location = _location;
        this.go$ = this.actions$.ofType(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionTypes"].Go).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            return _this._router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.back$ = this.actions$.ofType(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionTypes"].Back).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._location.back(); }));
        this.forward$ = this.actions$.ofType(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionTypes"].Forward).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._location.forward(); }));
        this.download$ = this.actions$.ofType(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionTypes"].Download).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.url; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (url) { return window.open(url); }));
        this.open$ = this.actions$.ofType(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionTypes"].OpenUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.url; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (url) { return window.open(url, '_blank'); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "go$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "back$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "forward$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "download$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "open$", void 0);
    RouterEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "../../../libs/core/router/src/lib/+state/router.selectors.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/+state/router.selectors.ts ***!
  \**********************************************************************************************/
/*! exports provided: state, url, segments, params, queryParams, data, pageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segments", function() { return segments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return queryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTitle", function() { return pageTitle; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");

var state = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
var url = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state, function (router) { return router.state && router.state.url; });
var segments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state, function (router) { return router && router.state && router.state.segments; });
var params = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state, function (router) { return router && router.state && router.state.params; });
var queryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state, function (router) { return router && router.state && router.state.queryParams; });
var data = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(state, function (router) { return router && router.state && router.state.data; });
var pageTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(data, function (routerData) { return routerData.pageTitle; });


/***/ }),

/***/ "../../../libs/core/router/src/lib/+state/router.serializer.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/+state/router.serializer.ts ***!
  \***********************************************************************************************/
/*! exports provided: CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var segments = url
            .split('/')
            .splice(1)
            .map(function (segment) { return segment.split('?')[0]; });
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params, data = state.data;
        return { url: url, segments: segments, data: data, queryParams: queryParams, params: params };
    };
    return CustomRouterStateSerializer;
}());



/***/ }),

/***/ "../../../libs/core/router/src/lib/config/index.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/config/index.ts ***!
  \***********************************************************************************/
/*! exports provided: mockRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.mock */ "../../../libs/core/router/src/lib/config/router.mock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockRouter", function() { return _router_mock__WEBPACK_IMPORTED_MODULE_0__["mockRouter"]; });




/***/ }),

/***/ "../../../libs/core/router/src/lib/config/router.mock.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/config/router.mock.ts ***!
  \*****************************************************************************************/
/*! exports provided: mockRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockRouter", function() { return mockRouter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var mockRouterStateData = {
    url: 'route1',
    data: {
        pageTitle: 'pageTitle'
    },
    queryParams: { queryParams: 'queryParamsValue' },
    params: { id: '1' },
    segments: ['route1', 'route2']
};
var mockRouterReducerState = {
    state: mockRouterStateData,
    navigationId: 1
};
// dummy components
var RoutingComponent = /** @class */ (function () {
    function RoutingComponent() {
    }
    RoutingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<router-outlet></router-outlet>'
        })
    ], RoutingComponent);
    return RoutingComponent;
}());
var DummyComponent = /** @class */ (function () {
    function DummyComponent() {
    }
    DummyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: ''
        })
    ], DummyComponent);
    return DummyComponent;
}());
var mockRouter = {
    mockRouterStateData: mockRouterStateData,
    mockRouterReducerState: mockRouterReducerState,
    RoutingComponent: RoutingComponent,
    DummyComponent: DummyComponent
};


/***/ }),

/***/ "../../../libs/core/router/src/lib/router.module.ts":
/*!************************************************************************************!*\
  !*** C:/Users/Dewald/Desktop/dev/dee-nx/libs/core/router/src/lib/router.module.ts ***!
  \************************************************************************************/
/*! exports provided: RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return RouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "../../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state */ "../../../libs/core/router/src/lib/+state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Sets up Angular router forRoot and enables appRoutes.
 * Also adds StoreRouterConnectingModule to deliver NGRX router state.
 *
 * This module should be imported to AppModule as forRoot in place of Angular's RouterModule.
 * Required for:
 * - ModelsModule
 * - UiModule
 * - AuthModule (lazy feature)
 *
 */
var RouterModule = /** @class */ (function () {
    function RouterModule() {
    }
    RouterModule_1 = RouterModule;
    RouterModule.forRoot = function (appRoutes) {
        return [
            // ANGULAR
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { initialNavigation: 'enabled' }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot(),
            { ngModule: RouterModule_1, providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStateSerializer"], useClass: _state__WEBPACK_IMPORTED_MODULE_5__["CustomRouterStateSerializer"] }] }
        ];
    };
    RouterModule.forChild = function (routes) {
        return [
            // ANGULAR
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ];
    };
    var RouterModule_1;
    RouterModule = RouterModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // NGRX
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('router', _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state__WEBPACK_IMPORTED_MODULE_5__["RouterEffects"]])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouterModule);
    return RouterModule;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@dee-dev/components/ui": [
		"../../../libs/components/ui/src/lib/ui.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.loaded.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AppComponent.prototype, "loaded", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redCloud',
            template: '<redCloud></redCloud>'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-freeze */ "../../../node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dee_dev_core_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dee-dev/core/main */ "../../../libs/core/main/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({}, { metaReducers: !_config__WEBPACK_IMPORTED_MODULE_6__["wwwEnvironment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__["storeFreeze"]] : [] }),
                !_config__WEBPACK_IMPORTED_MODULE_6__["wwwEnvironment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({ name: 'dee-dev', maxAge: 250 }) : [],
                _dee_dev_core_main__WEBPACK_IMPORTED_MODULE_4__["MainModule"].forRoot(_config__WEBPACK_IMPORTED_MODULE_6__["brandConfig"], _config__WEBPACK_IMPORTED_MODULE_6__["wwwEnvironment"])
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/brand-config.ts":
/*!****************************************!*\
  !*** ./src/app/config/brand-config.ts ***!
  \****************************************/
/*! exports provided: brandConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brandConfig", function() { return brandConfig; });
/* harmony import */ var _images_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images-config */ "./src/app/config/images-config.ts");

var brandConfig = {
    name: 'dee-dev',
    image: {
        logo: '../assets/images/logo/blue-circle-name-logo.png'
    },
    images: _images_config__WEBPACK_IMPORTED_MODULE_0__["imagesConfig"]
};


/***/ }),

/***/ "./src/app/config/environment-config.ts":
/*!**********************************************!*\
  !*** ./src/app/config/environment-config.ts ***!
  \**********************************************/
/*! exports provided: wwwEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wwwEnvironment", function() { return wwwEnvironment; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var wwwEnvironment = {
    production: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production,
    appRoot: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appRoot,
    whiteList: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].whiteList
};


/***/ }),

/***/ "./src/app/config/images-config.ts":
/*!*****************************************!*\
  !*** ./src/app/config/images-config.ts ***!
  \*****************************************/
/*! exports provided: imagesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesConfig", function() { return imagesConfig; });
var imagesConfig = {
    background: {
        particles: '../assets/images/background/particles.svg',
        main: '../assets/images/background/main-background.jpg',
        devicesBackground: '../assets/images/background/devices-background.png'
    },
    icons: {
        home: "../assets/images/icons/home.png",
        about: "../assets/images/icons/about.png",
        contact: "../assets/images/icons/contact.png",
        email: "../assets/images/icons/email.png",
        skills: "../assets/images/icons/skills.png",
        showcase: "../assets/images/icons/showcase.png",
        pdf: "../assets/images/icons/pdf.png"
    },
    showcase: {
        cxfiOld: '../assets/images/info/showcase/cxfi-old.png',
        papill: '../assets/images/info/showcase/papill.png',
        deeDev: '../assets/images/info/showcase/dee-dev.png'
    },
    headShot: '../assets/images/info/my-headshot.png'
};


/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: imagesConfig, brandConfig, wwwEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images-config */ "./src/app/config/images-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imagesConfig", function() { return _images_config__WEBPACK_IMPORTED_MODULE_0__["imagesConfig"]; });

/* harmony import */ var _brand_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand-config */ "./src/app/config/brand-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brandConfig", function() { return _brand_config__WEBPACK_IMPORTED_MODULE_1__["brandConfig"]; });

/* harmony import */ var _environment_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment-config */ "./src/app/config/environment-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wwwEnvironment", function() { return _environment_config__WEBPACK_IMPORTED_MODULE_2__["wwwEnvironment"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    appRoot: 'http://localhost:4200',
    whiteList: ['spawntech.io', 'interactrdt.com']
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dewald\Desktop\dev\dee-nx\apps\dee-dev\dee-dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map