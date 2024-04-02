"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 3979);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 7301);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 5755);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'highlights',
  component: _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__.HighlightsComponent
}, {
  path: 'experience',
  component: _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent
}, {
  path: 'projects',
  component: _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
}, {
  path: 'contact',
  component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      enableViewTransitions: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 3066);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/background/background.component */ 7344);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 678);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);









class AppComponent {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.title = 'Arun Varghese';
  }
  ngOnInit() {
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.theme);
    this.titleService.setTitle("Arun Varghese | Software Engineer");
    this.metaService.addTag({
      name: 'appVersion',
      id: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version
    });
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-menu")(1, "router-outlet")(2, "app-footer")(3, "app-background");
      }
    },
    dependencies: [_components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_3__.BackgroundComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-analytics */ 2599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.gaAnalyticID), _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.NgxGoogleAnalyticsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule]
  });
})();

/***/ }),

/***/ 7344:
/*!***********************************************************************!*\
  !*** ./src/app/components/general/background/background.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function BackgroundComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fab ", icon_r1, "");
  }
}
class BackgroundComponent {
  constructor() {
    this.ICON_LIST = ['fa-github', 'fa-angular', 'fa-docker', 'fa-npm', 'fa-java', 'fa-js', 'fa-css3', 'fa-html5', 'fa-codepen'];
  }
  static #_ = this.ɵfac = function BackgroundComponent_Factory(t) {
    return new (t || BackgroundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackgroundComponent,
    selectors: [["app-background"]],
    decls: 3,
    vars: 1,
    consts: [[1, "bg-animated-elements"], [3, "class", 4, "ngFor", "ngForOf"], [1, "bg-img"]],
    template: function BackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BackgroundComponent_i_1_Template, 1, 3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ICON_LIST);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('code.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.bg-img[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-overlay-color);\n  opacity: 1;\n  transition: var(--transition);\n}\n\n.bg-animated-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  filter: var(--bg-animated-filter);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation-duration: 50s;\n  animation-delay: 13s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 80px;\n  position: absolute;\n  left: 5vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation-duration: 20s;\n  animation-delay: 20s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 140px;\n  position: absolute;\n  left: 15vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation-duration: 40s;\n  animation-delay: 5s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 58px;\n  position: absolute;\n  left: 25vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  animation-duration: 30s;\n  animation-delay: 16s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 126px;\n  position: absolute;\n  left: 35vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(81, 57, 30);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  animation-duration: 20s;\n  animation-delay: 9s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 108px;\n  position: absolute;\n  left: 45vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(66, 62, 38);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  animation-duration: 20s;\n  animation-delay: 20s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 78px;\n  position: absolute;\n  left: 55vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(77, 33, 47);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\n  animation-duration: 30s;\n  animation-delay: 1s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 58px;\n  position: absolute;\n  left: 65vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\n  animation-duration: 20s;\n  animation-delay: 3s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 129px;\n  position: absolute;\n  left: 75vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(9) {\n  animation-duration: 20s;\n  animation-delay: 20s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 119px;\n  position: absolute;\n  left: 85vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    top: 100vh;\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  95% {\n    top: -10vh;\n  }\n  100% {\n    opacity: 0;\n    top: -15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQWpFQTtFQUNJLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQW9FSjtBQWxFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxNQUFBO0VBQ1QsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQXFFUjs7QUFqRUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFvRUo7QUFqRVE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBa0VaO0FBaEZRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFpRlo7QUEvRlE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBZ0daO0FBOUdRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUErR1o7QUE3SFE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQThIWjtBQTVJUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE2SVo7QUEzSlE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBNEpaO0FBMUtRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEyS1o7QUF6TFE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTBMWjs7QUFyTEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBd0xOO0VBdExFO0lBQ0ksVUFBQTtFQXdMTjtFQXRMRTtJQUNJLFVBQUE7RUF3TE47RUFyTEU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXVMTjtBQUNGIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkB1c2UgJ3Nhc3M6bGlzdCc7XG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbiRQaW5rOiByZ2IoNzcgMzMgNDcpO1xuJEdyZWVuOiByZ2IoNjMgNzcgMzEpO1xuJEJsdWU6IHJnYig1MiA3MyA3OCk7XG4kV2hpdGU6IHJnYig5NCA5NCA5MSk7XG4kT3JhbmdlOiByZ2IoODEgNTcgMzApO1xuJFllbGxvdzogcmdiKDY2IDYyIDM4KTtcbiRDb2xvcnM6IFskUGluaywgJEdyZWVuLCAkQmx1ZSwgJFdoaXRlLCAkT3JhbmdlLCAkWWVsbG93XTtcblxuLmJnLWltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwOyB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLW92ZXJsYXktY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKVxuICAgIH1cbn1cblxuLmJnLWFuaW1hdGVkLWVsZW1lbnRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGZpbHRlcjogdmFyKC0tYmctYW5pbWF0ZWQtZmlsdGVyKTtcblxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XG4gICAgICAgIGk6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHJhbmRvbSg0KSoxMCArIDEwK3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IHJhbmRvbSgyMCkrcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcblxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKHJhbmRvbSg0KSsyK3B4KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogcmFuZG9tKDEwMCkrNTArcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAkaSoxMC01K3Z3O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgICAgICBjb2xvcjogbGlzdC5udGgoJENvbG9ycywgJGklNisxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAgIDAlIHtcbiAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5NSUge1xuICAgICAgICB0b3A6IC0xMHZoO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0b3A6IC0xNXZoO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUFqRUE7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFvRUo7QUFsRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVMsTUFBQTtFQUNULFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFxRVI7O0FBakVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBb0VKO0FBakVRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWtFWjtBQWhGUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBaUZaO0FBL0ZRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWdHWjtBQTlHUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBK0daO0FBN0hRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE4SFo7QUE1SVE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBNklaO0FBM0pRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTRKWjtBQTFLUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBMktaO0FBekxRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEwTFo7O0FBckxBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQXdMTjtFQXRMRTtJQUNJLFVBQUE7RUF3TE47RUF0TEU7SUFDSSxVQUFBO0VBd0xOO0VBckxFO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUF1TE47QUFDRjtBQUNBLDRvVEFBNG9UIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAdXNlICdzYXNzOmxpc3QnO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kUGluazogcmdiKDc3IDMzIDQ3KTtcbiRHcmVlbjogcmdiKDYzIDc3IDMxKTtcbiRCbHVlOiByZ2IoNTIgNzMgNzgpO1xuJFdoaXRlOiByZ2IoOTQgOTQgOTEpO1xuJE9yYW5nZTogcmdiKDgxIDU3IDMwKTtcbiRZZWxsb3c6IHJnYig2NiA2MiAzOCk7XG4kQ29sb3JzOiBbJFBpbmssICRHcmVlbiwgJEJsdWUsICRXaGl0ZSwgJE9yYW5nZSwgJFllbGxvd107XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTI7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1vdmVybGF5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbilcbiAgICB9XG59XG5cbi5iZy1hbmltYXRlZC1lbGVtZW50cyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBmaWx0ZXI6IHZhcigtLWJnLWFuaW1hdGVkLWZpbHRlcik7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDkge1xuICAgICAgICBpOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiByYW5kb20oNCkqMTAgKyAxMCtzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiByYW5kb20oMjApK3M7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGw7XG5cbiAgICAgICAgICAgIGZpbHRlcjogYmx1cihyYW5kb20oNCkrMitweCk7XG4gICAgICAgICAgICBmb250LXNpemU6IHJhbmRvbSgxMDApKzUwK3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogJGkqMTAtNSt2dztcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICAgICAgY29sb3I6IGxpc3QubnRoKCRDb2xvcnMsICRpJTYrMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgICAwJSB7XG4gICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTUlIHtcbiAgICAgICAgdG9wOiAtMTB2aDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAtMTV2aDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 678:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



const _c0 = a0 => ({
  "show-scroll-btn": a0
});
function FooterComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, item_r1["link"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1["Icon"]);
  }
}
class FooterComponent {
  constructor() {
    this.scrollPosition = 0;
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 6,
    vars: 6,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], [4, "ngFor", "ngForOf"], [1, "scroll-top-btn", 3, "click", "ngClass"], [1, "fas", "fa-chevron-up"], ["target", "_blank", 3, "href"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_li_2_Template, 4, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_4_listener() {
          return ctx.scrollTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "SocialIcons"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.scrollPosition > 100));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  transition: var(--transition);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 0.5em 2em;\n  font-size: 20px;\n  line-height: 1;\n  position: fixed;\n  right: 10vw;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n@media (max-width: 1000px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBMUVBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQTZFSjtBQTNFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0FBNkVSO0FBekVJO0VBQ0ksZ0JBQUE7QUEyRVI7QUF4RUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBMEVSO0FBeEVRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBMEVaO0FBdkVRO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQXlFWjtBQXZFWTtFQUNJLG1CQUFBO0FBeUVoQjtBQXBFSTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBc0VSO0FBcEVRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQXNFWjs7QUFqRUE7RUFDSTtJQUNJLGFBQUE7RUFvRU47QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cblxuICAgIC5mb290ZXItbGVmdC1iYXIgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNjcm9sbC10b3AtYnRuIHtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDEwdnc7XG4gICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDguNXB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICYuc2hvdy1zY3JvbGwtYnRuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBMUVBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQTZFSjtBQTNFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0FBNkVSO0FBekVJO0VBQ0ksZ0JBQUE7QUEyRVI7QUF4RUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBMEVSO0FBeEVRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBMEVaO0FBdkVRO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQXlFWjtBQXZFWTtFQUNJLG1CQUFBO0FBeUVoQjtBQXBFSTtFQUNJLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBc0VSO0FBcEVRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQXNFWjs7QUFqRUE7RUFDSTtJQUNJLGFBQUE7RUFvRU47QUFDRjtBQUVBLHcwUEFBdzBQIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbmZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwcHggNy41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGwtdG9wLWJ0biB7XG4gICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAxMHZ3O1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1idG4tYmctY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2864:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 3066);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ 7344);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 678);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ 8046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);












function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
    exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent]
  });
})();

/***/ }),

/***/ 8046:
/*!***************************************************************!*\
  !*** ./src/app/components/general/loader/loader.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 12,
    vars: 0,
    consts: [[1, "cube-loader"], [1, "cube-face", "cube-face-front", "profile"], [1, "cube-face", "cube-face-back"], [1, "fab", "fa-npm"], [1, "cube-face", "cube-face-left"], [1, "fab", "fa-docker"], [1, "cube-face", "cube-face-right"], [1, "fab", "fa-angular"], [1, "cube-face", "cube-face-bottom"], [1, "fab", "fa-github"], [1, "cube-face", "cube-face-top"], [1, "fab", "fa-java"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.cube-loader[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  box-shadow: var(--box-shadow);\n  margin-bottom: 30px;\n  text-align: center;\n  font-size: 50px;\n  transform-style: preserve-3d;\n  transition: transform 0.5s 0.1s;\n  perspective: 9999px;\n  transform: rotateY(0) rotateX(0) rotateZ(0);\n}\n.cube-loader[_ngcontent-%COMP%]:hover {\n  animation: _ngcontent-%COMP%_spin 5s infinite forwards;\n}\n.cube-loader[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: url('profile-small.png') !important;\n  filter: grayscale(1) !important;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 2px 1px var(--accent-color-opaque), 0 0 1px 1px var(--accent-color-opaque);\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  background-color: var(--cube-face);\n  color: var(--cube-icon-color);\n  filter: blur(1px);\n  transition: var(--transition);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-front[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translate3d(0, 0, 75px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotateY(0) rotateX(0) rotateZ(0);\n  }\n  50% {\n    transform: rotateY(360deg) rotateX(0) rotateZ(0);\n  }\n  100% {\n    transform: rotateY(360deg) rotateX(360deg) rotateZ(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBeEVBO0VBQ0ksWUFITztFQUlQLGFBSk87RUFLUCxrQkFMTztFQU1QLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQTJFSjtBQXpFSTtFQUNJLG9DQUFBO0FBMkVSO0FBeEVJO0VBQ0kscURBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTBFUjtBQXZFSTtFQUNJLGdHQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBeUVSO0FBdEVJO0VBQ0ksa0NBQUE7QUF3RVI7QUFyRUk7RUFDSSxrREFBQTtBQXVFUjtBQXBFSTtFQUNJLGtEQUFBO0FBc0VSO0FBbkVJO0VBQ0ksaURBQUE7QUFxRVI7QUFsRUk7RUFDSSxpREFBQTtBQW9FUjtBQWpFSTtFQUNJLGtEQUFBO0FBbUVSOztBQS9EQTtFQUNJO0lBQ0ksMkNBQUE7RUFrRU47RUEvREU7SUFDSSxnREFBQTtFQWlFTjtFQTlERTtJQUNJLHFEQUFBO0VBZ0VOO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbiRDdWJlU2l6ZTogMTUwcHg7XG5cbi5jdWJlLWxvYWRlciB7XG4gICAgd2lkdGg6ICRDdWJlU2l6ZTtcbiAgICBoZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJEN1YmVTaXplO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIDAuMXM7XG4gICAgcGVyc3BlY3RpdmU6IDk5OTlweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwKSByb3RhdGVaKDApO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAucHJvZmlsZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtc21hbGwucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2Uge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKSwgMCAwIDFweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3ViZS1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWN1YmUtaWNvbi1jb2xvcik7XG4gICAgICAgIGZpbHRlcjogYmx1cigxcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWZyb250IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWxlZnQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXJpZ2h0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXRvcCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1ib3R0b20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwKSByb3RhdGVaKDApO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVgoMCkgcm90YXRlWigwKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZykgcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVooMCk7XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBeEVBO0VBQ0ksWUFITztFQUlQLGFBSk87RUFLUCxrQkFMTztFQU1QLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQTJFSjtBQXpFSTtFQUNJLG9DQUFBO0FBMkVSO0FBeEVJO0VBQ0kscURBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTBFUjtBQXZFSTtFQUNJLGdHQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBeUVSO0FBdEVJO0VBQ0ksa0NBQUE7QUF3RVI7QUFyRUk7RUFDSSxrREFBQTtBQXVFUjtBQXBFSTtFQUNJLGtEQUFBO0FBc0VSO0FBbkVJO0VBQ0ksaURBQUE7QUFxRVI7QUFsRUk7RUFDSSxpREFBQTtBQW9FUjtBQWpFSTtFQUNJLGtEQUFBO0FBbUVSOztBQS9EQTtFQUNJO0lBQ0ksMkNBQUE7RUFrRU47RUEvREU7SUFDSSxnREFBQTtFQWlFTjtFQTlERTtJQUNJLHFEQUFBO0VBZ0VOO0FBQ0Y7QUFDQSxnMVFBQWcxUSIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kQ3ViZVNpemU6IDE1MHB4O1xuXG4uY3ViZS1sb2FkZXIge1xuICAgIHdpZHRoOiAkQ3ViZVNpemU7XG4gICAgaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyAwLjFzO1xuICAgIHBlcnNwZWN0aXZlOiA5OTk5cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMCkgcm90YXRlWigwKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBhbmltYXRpb246IHNwaW4gNXMgaW5maW5pdGUgZm9yd2FyZHM7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSksIDAgMCAxcHggMXB4IHZhcigtLWFjY2VudC1jb2xvci1vcGFxdWUpO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1YmUtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jdWJlLWljb24tY29sb3IpO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1mcm9udCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS10b3Age1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYm90dG9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMCkgcm90YXRlWigwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVYKDApIHJvdGF0ZVooMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVaKDApO1xuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3066:
/*!***********************************************************!*\
  !*** ./src/app/components/general/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/language/language.service */ 9263);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);










const _c0 = a0 => ({
  "menu-open": a0
});
const _c1 = a0 => ({
  "show-menu-bg": a0
});
function MenuComponent_div_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_5_li_2_Template_a_click_1_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r1.navigate(item_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.menuOpen = !ctx_r1.menuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.label);
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleOverlayMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_5_li_2_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.switchTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@hide-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "Menu.NavItems"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fas ", ctx_r1.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("v", ctx_r1.appVersion, "");
  }
}
function MenuComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_8_Template_span_click_1_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigate(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-aos-delay", i_r7 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", item_r6.label.toLowerCase() === ctx_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.label);
  }
}
class MenuComponent {
  constructor(router, languageService) {
    this.router = router;
    this.languageService = languageService;
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.fileName = '';
    this.route = '';
    this.scrollPosition = 0;
  }
  ngOnInit() {
    this.theme = document.body.getAttribute('data-theme') || 'dark';
    this.languageFormControl.setValue(this.languageService.DEFAULT);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.route = event.url.split('/')[1] || 'home';
      }
    });
  }
  toggleOverlayMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuOpen ? document.body.classList.add('scroll-lock') : document.body.classList.remove('scroll-lock');
  }
  navigate(item) {
    if (item.label === 'Resume') {
      this.downloadResume();
    }
    this.router.navigate([item.link]);
    document.body.classList.remove('scroll-lock');
  }
  downloadResume() {
    this.languageService.translateService.get("Resume").subscribe(val => {
      window.open(val, "_blank");
    });
  }
  switchTheme() {
    this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
    document.body.classList.remove('scroll-lock');
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  get appVersion() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    hostBindings: function MenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function MenuComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 12,
    vars: 13,
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", "data-aos", "fade-out", 3, "click", 4, "ngIf"], [1, "menu-bar"], [1, "menu-bar-items", 3, "ngClass"], ["class", "menu-bar-item", "data-aos", "fade-down", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-duration", "500", "data-aos-delay", "700", 1, "menu-bar-item", "theme-toggle", 3, "click"], ["data-aos", "fade-out", 1, "menu-overlay", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "menu-items"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "overlay-theme-toggle", 3, "click"], [1, "version"], [1, "menu-item"], [3, "click"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
          return ctx.toggleOverlayMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 8, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_10_listener() {
          return ctx.switchTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, ctx.scrollPosition > 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, "Menu.NavItems"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fas ", ctx.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  display: none;\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  z-index: 2;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  background: var(--bg-color-60);\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  display: block;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: var(--menu-overlay-bg-color);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  margin: auto;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n  font-size: 13px;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 3em;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50px;\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 2em 1.5em 1.25em;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 560px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--box-shadow);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 10px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.menu-bar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.overlay-theme-toggle[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-left: 45px;\n  cursor: pointer;\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\n\n.version[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: var(--code-font);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 1em 1em 0.5em;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibWVudS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBNkVKO0FBM0VJO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUE2RVI7QUEzRVE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUE2RVo7QUExRVE7RUFDSSxnQkFBQTtBQTRFWjtBQTFFWTtFQUNJLHNDQUFBO0FBNEVoQjtBQXpFWTtFQUNJLDRDQUFBO0FBMkVoQjtBQXhFWTtFQUNJLFVBQUE7QUEwRWhCO0FBdkVZO0VBQ0ksMkNBQUE7QUF5RWhCOztBQWxFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7QUFxRUo7QUFuRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFxRVI7QUFuRVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFxRVo7QUFuRVk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQXFFaEI7QUFsRVk7RUFLSSwwQkFBQTtBQWdFaEI7QUFwRWdCO0VBQ0ksMkJBQUE7QUFzRXBCO0FBakVnQjtFQUNJLFVBQUE7QUFtRXBCO0FBaEVnQjtFQUNJLFVBQUE7QUFrRXBCOztBQTNEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQThESjtBQTVESTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBOERSO0FBNURRO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxnQ0FBQTtBQThEWjtBQTNEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUE2RFo7QUEzRFk7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTZEaEI7QUExRFk7RUFDSSxXQUFBO0FBNERoQjs7QUF0REE7RUFDSSwwQkFBQTtBQXlESjs7QUFwRFE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUF1RFo7O0FBbERBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXFESjs7QUFsREE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFxREo7O0FBbERBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtBQXFESjs7QUFsREE7RUFDSTtJQUNJLGNBQUE7RUFxRE47RUFuREU7SUFDSSxhQUFBO0VBcUROO0VBbkRFO0lBQ0ksY0FBQTtFQXFETjtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItNjApO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJ0bi1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVudS1vcGVuIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ubWVudS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LW92ZXJsYXktYmctY29sb3IpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnPic7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnVsbGV0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LWJhciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgcGFkZGluZzogMmVtIDEuNWVtIDEuMjVlbTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTYwcHg7XG5cbiAgICAgICAgJi5zaG93LW1lbnUtYmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1iYXItYmctY29sb3IpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtYmFyLWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudS1iYXItaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICAgIC50aGVtZS10b2dnbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3ZlcmxheS10aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi52ZXJzaW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiAxZW0gMWVtIC41ZW07XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbikgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTZFSjtBQTNFSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBNkVSO0FBM0VRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBNkVaO0FBMUVRO0VBQ0ksZ0JBQUE7QUE0RVo7QUExRVk7RUFDSSxzQ0FBQTtBQTRFaEI7QUF6RVk7RUFDSSw0Q0FBQTtBQTJFaEI7QUF4RVk7RUFDSSxVQUFBO0FBMEVoQjtBQXZFWTtFQUNJLDJDQUFBO0FBeUVoQjs7QUFsRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FBcUVKO0FBbkVJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBcUVSO0FBbkVRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBcUVaO0FBbkVZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFxRWhCO0FBbEVZO0VBS0ksMEJBQUE7QUFnRWhCO0FBcEVnQjtFQUNJLDJCQUFBO0FBc0VwQjtBQWpFZ0I7RUFDSSxVQUFBO0FBbUVwQjtBQWhFZ0I7RUFDSSxVQUFBO0FBa0VwQjs7QUEzREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUE4REo7QUE1REk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQThEUjtBQTVEUTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7QUE4RFo7QUEzRFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBNkRaO0FBM0RZO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE2RGhCO0FBMURZO0VBQ0ksV0FBQTtBQTREaEI7O0FBdERBO0VBQ0ksMEJBQUE7QUF5REo7O0FBcERRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBdURaOztBQWxEQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFxREo7O0FBbERBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBcURKOztBQWxEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7QUFxREo7O0FBbERBO0VBQ0k7SUFDSSxjQUFBO0VBcUROO0VBbkRFO0lBQ0ksYUFBQTtFQXFETjtFQW5ERTtJQUNJLGNBQUE7RUFxRE47QUFDRjtBQUdBLHc4WkFBdzhaIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLTYwKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1idG4tY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm1lbnUtb3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1vdmVybGF5LWJnLWNvbG9yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1bGxldC1jb2xvcik7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVudS1iYXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDU2MHB4O1xuXG4gICAgICAgICYuc2hvdy1tZW51LWJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnUtYmFyLWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgICAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXktdGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4udmVyc2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogMWVtIDFlbSAuNWVtO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLXNjcm9sbC1idG4tY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1idG4tYmctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1lbnUtYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZW51LW92ZXJsYXkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('hide-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 2541:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9263);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);







function AboutComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1["link"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](item_r1["Icon"]);
  }
}
class AboutComponent {
  constructor(languageService, analyticsService) {
    this.languageService = languageService;
    this.analyticsService = analyticsService;
    window.matchMedia('(display-mode: standalone)').matches;
  }
  downloadResume() {
    this.languageService.translateService.get("Resume").subscribe(val => {
      window.open(val, "_blank");
    });
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 26,
    vars: 18,
    consts: [[1, "about"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "profile-img"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "100", 1, "name"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "200", 1, "role"], [1, "code-highlight"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "300", 1, "about-description"], [3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "400", 1, "social-icons"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "500", 1, "download-resume"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "main-btn", 3, "click"], ["target", "_blank", 3, "href"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 6)(11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AboutComponent_li_20_Template, 4, 6, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_23_listener() {
          ctx.analyticsService.sendAnalyticEvent("download_resume", "about", "click");
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "About.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "About.Name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, "About.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 12, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 14, "SocialIcons"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, "About.ResumeBtn"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  min-height: 80vw;\n  margin-top: 10em;\n  margin-bottom: 10em;\n}\n.about[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  background: url('profile-small.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 10em;\n  height: 10em;\n  margin-bottom: 25px;\n  border-radius: var(--border-radius);\n  filter: grayscale(1);\n  box-shadow: var(--box-shadow);\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 175px;\n}\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: var(--code-font);\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 45px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: none;\n  margin: 1.5em 0 2.5em;\n  font-size: 20px;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 20px 0 0;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n.about[_ngcontent-%COMP%]   .download-resume[_ngcontent-%COMP%] {\n  margin: 3em 0;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding-left: 5px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 1000px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 27px !important;\n  }\n}\n@media (max-width: 1000px) {\n  .loader[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-left: -35px;\n    margin-bottom: 15vh;\n  }\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTZFSjtBQTNFSTtFQUNJLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUE2RVI7QUExRUk7RUFDSSxpQkFBQTtBQTRFUjtBQXpFSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQTJFUjtBQXhFSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBMEVSO0FBdkVJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUF5RVI7QUF0RUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBd0VSO0FBckVJO0VBQ0ksZ0JBQUE7QUF1RVI7QUFwRUk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBc0VSO0FBcEVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBc0VaO0FBcEVZO0VBQ0ksY0FBQTtBQXNFaEI7QUFqRUk7RUFDSSxhQUFBO0FBbUVSOztBQS9EQTtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBQWtFSjtBQWhFSTtFQUNJLHFDQUFBO0FBa0VSOztBQTlEQTtFQUNJLGFBQUE7QUFpRUo7O0FBOURBO0VBQ0k7SUFDSSxrQkFBQTtFQWlFTjtFQS9ERTtJQUNJLHVDQUFBO0VBaUVOO0FBQ0Y7QUE5REE7RUFDSTtJQUNJLDBCQUFBO0VBZ0VOO0VBOURFO0lBQ0ksMEJBQUE7RUFnRU47QUFDRjtBQTdEQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBK0ROO0VBNURFO0lBQ0kseUJBQUE7RUE4RE47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uYWJvdXQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWluLWhlaWdodDogODB2dztcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwZW07XG5cbiAgICAucHJvZmlsZS1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpIG5vLXJlcGVhdDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTBlbTtcbiAgICAgICAgaGVpZ2h0OiAxMGVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICB9XG5cbiAgICBoMiwgaDMge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMS41ZW0gMCAyLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG93bmxvYWQtcmVzdW1lIHtcbiAgICAgICAgbWFyZ2luOiAzZW0gMDtcbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcblxuICAgIC5ibGlua2luZy1jdXJzb3Ige1xuICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgZnJvbSwgdG8ge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmxvYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xuICAgIH1cblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBNkVKO0FBM0VJO0VBQ0ksOENBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQTZFUjtBQTFFSTtFQUNJLGlCQUFBO0FBNEVSO0FBekVJO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBMkVSO0FBeEVJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUEwRVI7QUF2RUk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQXlFUjtBQXRFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUF3RVI7QUFyRUk7RUFDSSxnQkFBQTtBQXVFUjtBQXBFSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFzRVI7QUFwRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFzRVo7QUFwRVk7RUFDSSxjQUFBO0FBc0VoQjtBQWpFSTtFQUNJLGFBQUE7QUFtRVI7O0FBL0RBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBa0VKO0FBaEVJO0VBQ0kscUNBQUE7QUFrRVI7O0FBOURBO0VBQ0ksYUFBQTtBQWlFSjs7QUE5REE7RUFDSTtJQUNJLGtCQUFBO0VBaUVOO0VBL0RFO0lBQ0ksdUNBQUE7RUFpRU47QUFDRjtBQTlEQTtFQUNJO0lBQ0ksMEJBQUE7RUFnRU47RUE5REU7SUFDSSwwQkFBQTtFQWdFTjtBQUNGO0FBN0RBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUErRE47RUE1REU7SUFDSSx5QkFBQTtFQThETjtBQUNGO0FBQ0Esb2tTQUFva1MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmFib3V0IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1pbi1oZWlnaHQ6IDgwdnc7XG4gICAgbWFyZ2luLXRvcDogMTBlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMGVtO1xuXG4gICAgLnByb2ZpbGUtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSBuby1yZXBlYXQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE3NXB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgfVxuXG4gICAgaDIsIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW46IDEuNWVtIDAgMi41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXJlc3VtZSB7XG4gICAgICAgIG1hcmdpbjogM2VtIDA7XG4gICAgfVxufVxuXG4uY29kZS1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG5cbiAgICAuYmxpbmtpbmctY3Vyc29yIHtcbiAgICAgICAgYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgICB9XG59XG5cbi5sb2FkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIGZyb20sIHRvIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJvbGUge1xuICAgICAgICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5sb2FkZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcbiAgICB9XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7301:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



function ContactComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, item_r1["link"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1["Icon"]);
  }
}
class ContactComponent {
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 16,
    vars: 16,
    consts: [[1, "contact"], ["data-aos", "fade-up", "data-aos-duration", "500"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "href"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-delay", "200", 1, "social-icons"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactComponent_li_14_Template, 4, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "Contact.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "Contact.Btn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "SocialIcons"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.contact[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  margin-top: 20em;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: var(--title-color);\n  font-size: 16px;\n  font-family: var(--primary-font);\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n.contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: none;\n  text-align: center;\n  margin: 2.5em 0;\n  font-size: 20px;\n}\n.contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 10px;\n}\n.contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n\n@media (max-width: 1000px) {\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUE2RUo7QUEzRUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQTZFUjtBQTFFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTRFUjtBQXpFSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMkVSO0FBekVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUEyRVo7QUF6RVk7RUFDSSxjQUFBO0FBMkVoQjs7QUFyRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBd0VKOztBQXJFQTtFQUNJO0lBQ0kseUJBQUE7RUF3RU47QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWN0IHtcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgIG1hcmdpbi10b3A6IDIwZW07XG5cbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5jb250YWN0LXByZS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMi41ZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRhY3QtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBNkVKO0FBM0VJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUE2RVI7QUExRUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUE0RVI7QUF6RUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTJFUjtBQXpFUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBMkVaO0FBekVZO0VBQ0ksY0FBQTtBQTJFaEI7O0FBckVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXdFSjs7QUFyRUE7RUFDSTtJQUNJLHlCQUFBO0VBd0VOO0FBQ0Y7QUFFQSxvdU9BQW91TyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uY29udGFjdCB7XG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgICBtYXJnaW4tdG9wOiAyMGVtO1xuXG4gICAgLmNvbnRhY3QtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIuNWVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250YWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2033:
/*!************************************************************!*\
  !*** ./src/app/components/home/credit/credit.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditComponent: () => (/* binding */ CreditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);


class CreditComponent {
  static #_ = this.ɵfac = function CreditComponent_Factory(t) {
    return new (t || CreditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreditComponent,
    selectors: [["app-credit"]],
    decls: 7,
    vars: 3,
    consts: [[1, "credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"], [1, "fab", "fa-angular"]],
    template: function CreditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".credits[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  margin-bottom: 20px;\n  font-family: var(--code-font);\n}\n.credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: var(--transition);\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: var(--accent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQUFSO0FBRVE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBQVoiLCJmaWxlIjoiY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgIC5jcmVkaXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUVRO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQUFaO0FBQ0EsdzdCQUF3N0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgLmNyZWRpdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5755:
/*!********************************************************************!*\
  !*** ./src/app/components/home/experience/experience.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



function ExperienceComponent_li_7_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ExperienceComponent_li_7_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r2);
  }
}
function ExperienceComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceComponent_li_7_li_11_Template, 2, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_li_7_span_13_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r3.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r4 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.Tab, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", item_r3.Tab)("src", item_r3.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.Location, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.Environment);
  }
}
class ExperienceComponent {
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 9,
    vars: 6,
    consts: [[1, "content"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [1, "jobs"], ["class", "job", "data-aos", "fade-up", "data-aos-duration", "500", 3, "title", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "job", 3, "title"], [1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], [1, "job-descriptions"], ["class", "job-description bullet", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "job-description", "bullet", 3, "innerHTML"], [1, "technology"], [1, "highlight"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_li_7_Template, 14, 10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "Experience.Items"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.job[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n  transition: var(--transition);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 25px;\n  margin-bottom: 25px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n.job[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.job[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary-color);\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBNkVKO0FBM0VJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUE2RVI7QUExRUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQTRFUjtBQXpFSTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUEyRVI7QUF4RUk7RUFDSSxtQkFBQTtBQTBFUjtBQXpFUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQTJFWjtBQXZFSTtFQUNJLG1CQUFBO0FBeUVSO0FBdEVJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF3RVI7QUFyRUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUF1RVI7QUFyRVE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBdUVaO0FBckVZO0VBQ0kscUJBQUE7QUF1RWhCO0FBcEVZO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFzRWhCO0FBbkVZO0VBQ0ksV0FBQTtBQXFFaEIiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uam9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmpvYi10aW1lIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLmpvYi1kZXNjcmlwdGlvbnMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAuam9iLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuam9iLWxvY2F0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuam9iLWxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmpvYi1lbnZpcm9ubWVudCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLnRlY2hub2xvZ3kge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OnZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQTZFSjtBQTNFSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBNkVSO0FBMUVJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUE0RVI7QUF6RUk7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FBMkVSO0FBeEVJO0VBQ0ksbUJBQUE7QUEwRVI7QUF6RVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUEyRVo7QUF2RUk7RUFDSSxtQkFBQTtBQXlFUjtBQXRFSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBd0VSO0FBckVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBdUVSO0FBckVRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQXVFWjtBQXJFWTtFQUNJLHFCQUFBO0FBdUVoQjtBQXBFWTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBc0VoQjtBQW5FWTtFQUNJLFdBQUE7QUFxRWhCO0FBRUEsd3BRQUF3cFEiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmpvYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5qb2ItdGltZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmpvYi1sb2NhdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmpvYi1sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5qb2ItZW52aXJvbm1lbnQge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC50ZWNobm9sb2d5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7229:
/*!********************************************************************!*\
  !*** ./src/app/components/home/highlights/highlights.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);



function HighlightsComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 7);
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function HighlightsComponent_div_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r3 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2);
  }
}
function HighlightsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightsComponent_div_11_span_4_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r4.Elements);
  }
}
class HighlightsComponent {
  static #_ = this.ɵfac = function HighlightsComponent_Factory(t) {
    return new (t || HighlightsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HighlightsComponent,
    selectors: [["app-highlights"]],
    decls: 13,
    vars: 9,
    consts: [[1, "content"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "description"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element bullet", "data-aos", "fade-up", "data-aos-duration", "500", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "skills", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "qualifications-element", "bullet", 3, "innerHTML"], [1, "skills"], ["data-aos", "fade-up"], ["class", "skill-element", "data-aos", "zoom-out", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "skill-element"], [1, "highlight"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "div", 3)(8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HighlightsComponent_li_9_Template, 1, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HighlightsComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "Highlights.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "Highlights.Qualifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "Highlights.Skills"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: var(--accent-color);\n  font-family: var(--code-font);\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLGdCQUFBO0FBNkVKOztBQTFFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQTZFSjtBQTNFSTtFQUNJLGNBQUE7QUE2RVI7O0FBekVBO0VBQ0ksZ0JBQUE7QUE0RUo7QUExRUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBNEVSO0FBMUVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE0RVo7QUF6RVE7RUFDSSxXQUFBO0FBMkVaO0FBeEVRO0VBQ0ksbUJBQUE7QUEwRVoiLCJmaWxlIjoiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSxnQkFBQTtBQTZFSjs7QUExRUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUE2RUo7QUEzRUk7RUFDSSxjQUFBO0FBNkVSOztBQXpFQTtFQUNJLGdCQUFBO0FBNEVKO0FBMUVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQTRFUjtBQTFFUTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNEVaO0FBekVRO0VBQ0ksV0FBQTtBQTJFWjtBQXhFUTtFQUNJLG1CQUFBO0FBMEVaO0FBQ0EsZ3pNQUFnek0iLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucXVhbGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG59XG5cbi5za2lsbHMge1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG5cbiAgICAuc2tpbGwtZWxlbWVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7229);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 5755);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 3979);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit/credit.component */ 2033);







class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 6,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-about")(1, "app-highlights")(2, "app-experience")(3, "app-projects")(4, "app-contact")(5, "app-credit");
      }
    },
    dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_5__.CreditComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3908:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7229);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 3979);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 5755);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit/credit.component */ 2033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__.CreditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule]
  });
})();

/***/ }),

/***/ 3979:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9263);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);






function ProjectsComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_li_7_Template_li_click_0_listener() {
      const tag_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.filterProjects(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.selectedTag === tag_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r4 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, tag_r2 || "All"), " ");
  }
}
function ProjectsComponent_div_10_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r5["CompanyLogo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r5["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r5["Link"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r6);
  }
}
function ProjectsComponent_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_10_div_11_span_1_Template, 3, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r5["Tech"]);
  }
}
function ProjectsComponent_div_10_div_12_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const icon_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r7);
  }
}
function ProjectsComponent_div_10_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_10_div_12_i_1_Template, 1, 3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r5["TechIcons"]);
  }
}
function ProjectsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_10_img_6_Template, 1, 1, "img", 10)(7, ProjectsComponent_div_10_a_7_Template, 2, 1, "a", 11)(8, ProjectsComponent_div_10_a_8_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_10_div_11_Template, 2, 1, "div", 13)(12, ProjectsComponent_div_10_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@exit-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r5["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r5["CompanyLogo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r5["GithubLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r5["Link"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r5["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r5["Tech"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r5["TechIcons"]);
  }
}
class ProjectsComponent {
  constructor(languageService) {
    this.languageService = languageService;
    this.filtered = [];
    this.all = [];
    this.selectedTag = 'featured';
  }
  ngOnInit() {
    this.languageService.translateService.get("Projects.Projects").subscribe(val => {
      this.all = val;
      this.filterProjects(this.selectedTag);
    });
  }
  filterProjects(tag) {
    this.selectedTag = tag;
    this.filtered = this.all.filter(project => {
      const tags = project['Tags'];
      if (!this.selectedTag) {
        return true;
      }
      return tags ? tags.includes(this.selectedTag) : false;
    });
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 11,
    vars: 7,
    consts: [[1, "section-title"], [1, "project-categories"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "grid"], ["class", "grid-item project-box", "data-aos", "fade-up", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "grid-item", "project-box"], [1, "header"], [1, "title"], [1, "external-links"], ["class", "project-img", "alt", "CompanyLogo", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "description"], [4, "ngIf"], ["class", "tech-icons", 4, "ngIf"], ["alt", "CompanyLogo", 1, "project-img", 3, "src"], ["target", "_blank", 3, "href"], ["id", "ghLink", 1, "external-link-btn", "fab", "fa-github"], [1, "external-link-btn", "fas", "fa-external-link-alt"], ["class", "tech", 4, "ngFor", "ngForOf"], [1, "tech"], [1, "highlight"], [1, "tech-icons"], [3, "class", 4, "ngFor", "ngForOf"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div")(2, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_li_7_Template, 3, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectsComponent_div_10_Template, 13, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "Projects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "Projects.Tags"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filtered);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  transition: var(--transition);\n  background-color: var(--bg-color-30);\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 1.5rem;\n}\n.project-box[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.project-box[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  float: left;\n  text-align: start;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-bottom: 10px;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  transition: var(--transition);\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.project-box[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.project-box[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n\n.project-categories[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n}\n.project-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 10px;\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px 15px;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: auto auto;\n  grid-template-areas: \". .\" \". .\" \". .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n}\n\n.show-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUExRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBNkVKO0FBMUVJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUE0RVI7QUF6RUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQTJFUjtBQXhFSTtFQUNJLFdBQUE7QUEwRVI7QUF4RVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUEwRVo7QUF2RVE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQXlFWjtBQXJFSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQXVFUjtBQXBFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBc0VSO0FBbkVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFxRVI7QUFsRUk7RUFDSSxlQUFBO0FBb0VSO0FBbkVRO0VBQ0ksWUFBQTtBQXFFWjtBQWpFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBbUVSOztBQS9EQTtFQUNJLG1CQUFBO0FBa0VKO0FBaEVJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBa0VSO0FBaEVRO0VBQ0ksMEJBQUE7QUFrRVo7QUEvRFE7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWlFWjtBQTlEUTtFQUNJLFdBQUE7QUFnRVo7O0FBM0RBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQ0E7QUE2REo7QUF6REk7RUFDSSxvQ0FBQTtBQTJEUjs7QUF2REE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUEwREo7O0FBdkRBO0VBQ0ksY0FBQTtBQTBESjs7QUF2REE7RUFDSTtJQUNJLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FDSjtFQXlERjtBQUNGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5wcm9qZWN0LWJveCB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4dGVybmFsLWxpbmtzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9qZWN0LWltZyB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgLnRlY2gtaWNvbnMge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRlY2gge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICB9XG59XG5cbi5wcm9qZWN0LWNhdGVnb3JpZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxNXB4IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiO1xuXG4gICAgLmdyaWQtaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMwKTtcbiAgICB9XG59XG5cbi5zaG93LWJ0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNTBweCAwO1xufVxuXG4uZXh0ZXJuYWwtbGluay1idG4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLlwiXG4gICAgXCIuXCJcbiAgICBcIi5cIjtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE2RUo7QUExRUk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQTRFUjtBQXpFSTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBMkVSO0FBeEVJO0VBQ0ksV0FBQTtBQTBFUjtBQXhFUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQTBFWjtBQXZFUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBeUVaO0FBckVJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBdUVSO0FBcEVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFzRVI7QUFuRUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQXFFUjtBQWxFSTtFQUNJLGVBQUE7QUFvRVI7QUFuRVE7RUFDSSxZQUFBO0FBcUVaO0FBakVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFtRVI7O0FBL0RBO0VBQ0ksbUJBQUE7QUFrRUo7QUFoRUk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUFrRVI7QUFoRVE7RUFDSSwwQkFBQTtBQWtFWjtBQS9EUTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBaUVaO0FBOURRO0VBQ0ksV0FBQTtBQWdFWjs7QUEzREE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FDQTtBQTZESjtBQXpESTtFQUNJLG9DQUFBO0FBMkRSOztBQXZEQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQTBESjs7QUF2REE7RUFDSSxjQUFBO0FBMERKOztBQXZEQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSx3QkFBQTtJQUNBLGdDQUNKO0VBeURGO0FBQ0Y7QUFFQSw0c1RBQTRzVCIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1ib3gge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5leHRlcm5hbC1saW5rcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvamVjdC1pbWcge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIC50ZWNoLWljb25zIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZWNoIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgfVxufVxuXG4ucHJvamVjdC1jYXRlZ29yaWVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTVweCAxNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIjtcblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgfVxufVxuXG4uc2hvdy1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmV4dGVybmFsLWxpbmstYnRuIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi5cIlxuICAgIFwiLlwiXG4gICAgXCIuXCI7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('exit-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('.5s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(100px)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 213:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 2599);



class AnalyticsService {
  constructor($gaService) {
    this.$gaService = $gaService;
  }
  sendAnalyticEvent(action, category, label) {
    this.$gaService.event(action, category, label);
  }
  sendAnalyticPageView(path, title) {
    this.$gaService.pageView(path, title);
  }
  static #_ = this.ɵfac = function AnalyticsService_Factory(t) {
    return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnalyticsService,
    factory: AnalyticsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9263:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 852);



class LanguageService {
  constructor(translateService) {
    this.translateService = translateService;
    this.DEFAULT = "en";
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 8330);

const environment = {
  version: _package_json__WEBPACK_IMPORTED_MODULE_0__.version,
  theme: 'dark',
  production: false,
  gaAnalyticID: "UA-88384820-1"
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"ng","version":"1.0.47","engines":{"node":"^18.10.0","yarn":">=1.22.0 <2","npm":"Please use yarn instead of NPM to install dependencies"},"scripts":{"prepare":"husky install","start":"nx serve","test":"nx test","lint":"nx lint","bump":"npm --no-git-tag-version version patch","deploy":"nx build && cp dist/ng/index.html dist/ng/404.html && gh-pages -d dist/ng && exit 1"},"private":true,"dependencies":{"@angular/animations":"17.3.2","@angular/common":"17.3.2","@angular/compiler":"17.3.2","@angular/core":"17.3.2","@angular/forms":"17.3.2","@angular/localize":"17.3.2","@angular/platform-browser":"17.3.2","@angular/platform-browser-dynamic":"17.3.2","@angular/router":"17.3.2","@angular/service-worker":"17.3.2","@fortawesome/fontawesome-free":"6.5.1","@ngx-translate/core":"15.0.0","@ngx-translate/http-loader":"8.0.0","aos":"2.3.4","rxjs":"7.8.0","tslib":"2.3.0","zone.js":"0.14.3"},"devDependencies":{"@angular-devkit/build-angular":"17.3.2","@angular-devkit/core":"17.3.2","@angular-devkit/schematics":"17.3.2","@angular-eslint/eslint-plugin":"17.3.0","@angular-eslint/eslint-plugin-template":"17.3.0","@angular-eslint/template-parser":"17.3.0","@angular/cli":"17.2.0","@angular/compiler-cli":"17.3.2","@angular/language-service":"17.3.2","@angular/pwa":"17.3.2","@nx/angular":"18.2.1","@nx/cypress":"18.2.1","@nx/eslint":"18.2.1","@nx/eslint-plugin":"18.2.1","@nx/jest":"18.2.1","@nx/js":"18.2.1","@nx/web":"18.2.1","@nx/workspace":"18.2.1","@schematics/angular":"17.3.2","@swc-node/register":"1.8.0","@swc/core":"1.3.85","@swc/helpers":"0.5.2","@swc/types":"0.1.6","@types/jest":"^29.4.0","@types/node":"18.16.9","@typescript-eslint/eslint-plugin":"7.4.0","@typescript-eslint/parser":"7.4.0","cypress":"^13.6.6","eslint":"8.57.0","eslint-config-prettier":"^9.0.0","eslint-plugin-cypress":"^2.13.4","gh-pages":"^6.1.1","husky":"^8.0.0","jest":"^29.4.1","jest-environment-jsdom":"^29.4.1","jest-preset-angular":"14.0.3","ngx-google-analytics":"^14.0.1","nx":"18.2.1","prettier":"^2.6.2","ts-jest":"^29.1.0","ts-node":"10.9.1","typescript":"5.4.3"},"resolutions":{}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map