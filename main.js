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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 3979);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 7301);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 5755);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 7229);
/* harmony import */ var _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/terminal/terminal.component */ 7659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);









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
  path: 'terminal',
  component: _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__.TerminalComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      enableViewTransitions: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 3066);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/background/background.component */ 7344);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 678);












class AppComponent {
  constructor(titleService, metaService, router, ga) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.router = router;
    this.ga = ga;
    this.title = 'Arun Varghese';
  }
  ngOnInit() {
    document.body.setAttribute('data-theme', localStorage.getItem('av-theme') || _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.theme);
    this.titleService.setTitle("Arun Varghese | Software Engineer");
    this.metaService.addTag({
      name: 'appVersion',
      id: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version
    });
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.ga.sendAnalyticPageView(event.urlAfterRedirects, event.urlAfterRedirects.replace('/', ''));
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-menu")(1, "router-outlet")(2, "app-footer")(3, "app-background");
      }
    },
    dependencies: [_components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_4__.BackgroundComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 3908);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 2864);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-analytics */ 2599);
/* harmony import */ var _components_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/terminal/terminal.module */ 8490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);

















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_5__.TerminalModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_12__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.gaAnalyticID), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, _components_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_5__.TerminalModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_12__.NgxGoogleAnalyticsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('code.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.bg-img[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-overlay-color);\n  opacity: 1;\n  transition: var(--transition);\n}\n\n.bg-animated-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  filter: var(--bg-animated-filter);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation-duration: 20s;\n  animation-delay: 4s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 134px;\n  position: absolute;\n  left: 5vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation-duration: 20s;\n  animation-delay: 6s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 98px;\n  position: absolute;\n  left: 15vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation-duration: 20s;\n  animation-delay: 17s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 122px;\n  position: absolute;\n  left: 25vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  animation-duration: 50s;\n  animation-delay: 5s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 123px;\n  position: absolute;\n  left: 35vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(81, 57, 30);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  animation-duration: 50s;\n  animation-delay: 17s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 150px;\n  position: absolute;\n  left: 45vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(66, 62, 38);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  animation-duration: 40s;\n  animation-delay: 3s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 111px;\n  position: absolute;\n  left: 55vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(77, 33, 47);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\n  animation-duration: 30s;\n  animation-delay: 3s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 139px;\n  position: absolute;\n  left: 65vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\n  animation-duration: 30s;\n  animation-delay: 6s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 108px;\n  position: absolute;\n  left: 75vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(9) {\n  animation-duration: 30s;\n  animation-delay: 15s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 112px;\n  position: absolute;\n  left: 85vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    top: 100vh;\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  95% {\n    top: -10vh;\n  }\n  100% {\n    opacity: 0;\n    top: -15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUFuRUE7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFzRUo7QUFwRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVMsTUFBQTtFQUNULFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUF1RVI7O0FBbkVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBc0VKO0FBbkVRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFvRVo7QUFsRlE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBbUZaO0FBakdRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFrR1o7QUFoSFE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWlIWjtBQS9IUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBZ0laO0FBOUlRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUErSVo7QUE3SlE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQThKWjtBQTVLUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBNktaO0FBM0xRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE0TFo7O0FBdkxBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQTBMTjtFQXhMRTtJQUNJLFVBQUE7RUEwTE47RUF4TEU7SUFDSSxVQUFBO0VBMExOO0VBdkxFO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUF5TE47QUFDRiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAdXNlICdzYXNzOmxpc3QnO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kUGluazogcmdiKDc3IDMzIDQ3KTtcbiRHcmVlbjogcmdiKDYzIDc3IDMxKTtcbiRCbHVlOiByZ2IoNTIgNzMgNzgpO1xuJFdoaXRlOiByZ2IoOTQgOTQgOTEpO1xuJE9yYW5nZTogcmdiKDgxIDU3IDMwKTtcbiRZZWxsb3c6IHJnYig2NiA2MiAzOCk7XG4kQ29sb3JzOiBbJFBpbmssICRHcmVlbiwgJEJsdWUsICRXaGl0ZSwgJE9yYW5nZSwgJFllbGxvd107XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTI7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1vdmVybGF5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbilcbiAgICB9XG59XG5cbi5iZy1hbmltYXRlZC1lbGVtZW50cyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBmaWx0ZXI6IHZhcigtLWJnLWFuaW1hdGVkLWZpbHRlcik7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDkge1xuICAgICAgICBpOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiByYW5kb20oNCkqMTAgKyAxMCtzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiByYW5kb20oMjApK3M7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGw7XG5cbiAgICAgICAgICAgIGZpbHRlcjogYmx1cihyYW5kb20oNCkrMitweCk7XG4gICAgICAgICAgICBmb250LXNpemU6IHJhbmRvbSgxMDApKzUwK3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogJGkqMTAtNSt2dztcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICAgICAgY29sb3I6IGxpc3QubnRoKCRDb2xvcnMsICRpJTYrMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgICAwJSB7XG4gICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTUlIHtcbiAgICAgICAgdG9wOiAtMTB2aDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAtMTV2aDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBbkVBO0VBQ0kscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBc0VKO0FBcEVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFTLE1BQUE7RUFDVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBdUVSOztBQW5FQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQXNFSjtBQW5FUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBb0VaO0FBbEZRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQW1GWjtBQWpHUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBa0daO0FBaEhRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFpSFo7QUEvSFE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWdJWjtBQTlJUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBK0laO0FBN0pRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE4Slo7QUE1S1E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTZLWjtBQTNMUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBNExaOztBQXZMQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUEwTE47RUF4TEU7SUFDSSxVQUFBO0VBMExOO0VBeExFO0lBQ0ksVUFBQTtFQTBMTjtFQXZMRTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBeUxOO0FBQ0Y7QUFDQSx3elRBQXd6VCIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQHVzZSAnc2FzczpsaXN0JztcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJFBpbms6IHJnYig3NyAzMyA0Nyk7XG4kR3JlZW46IHJnYig2MyA3NyAzMSk7XG4kQmx1ZTogcmdiKDUyIDczIDc4KTtcbiRXaGl0ZTogcmdiKDk0IDk0IDkxKTtcbiRPcmFuZ2U6IHJnYig4MSA1NyAzMCk7XG4kWWVsbG93OiByZ2IoNjYgNjIgMzgpO1xuJENvbG9yczogWyRQaW5rLCAkR3JlZW4sICRCbHVlLCAkV2hpdGUsICRPcmFuZ2UsICRZZWxsb3ddO1xuXG4uYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0yO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctb3ZlcmxheS1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pXG4gICAgfVxufVxuXG4uYmctYW5pbWF0ZWQtZWxlbWVudHMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG4gICAgZmlsdGVyOiB2YXIoLS1iZy1hbmltYXRlZC1maWx0ZXIpO1xuXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA5IHtcbiAgICAgICAgaTpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogcmFuZG9tKDQpKjEwICsgMTArcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogcmFuZG9tKDIwKStzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xuXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIocmFuZG9tKDQpKzIrcHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiByYW5kb20oMTAwKSs1MCtweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6ICRpKjEwLTUrdnc7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgICAgIGNvbG9yOiBsaXN0Lm50aCgkQ29sb3JzLCAkaSU2KzEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1JSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDk1JSB7XG4gICAgICAgIHRvcDogLTEwdmg7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRvcDogLTE1dmg7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/theme/theme.service */ 6857);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);







const _c0 = a0 => ({
  "show-scroll-btn": a0
});
function FooterComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_li_2_Template_a_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r2["Label"].toLowerCase() === "email" ? ctx_r2.ga.sendAnalyticEvent("send-email", "footer", "click") : ctx_r2.ga.sendAnalyticPageView(item_r2["Label"].toLowerCase(), item_r2["Label"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, item_r2["Link"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](item_r2["Icon"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2["Label"]);
  }
}
class FooterComponent {
  constructor(themeService, ga) {
    this.themeService = themeService;
    this.ga = ga;
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
    return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    decls: 11,
    vars: 9,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "label"], [1, "scroll-top-btn", 3, "click", "ngClass"], [1, "fas", "fa-chevron-up"], ["target", "_blank", 3, "click", "href"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer")(1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FooterComponent_li_2_Template, 6, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li")(5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_5_listener() {
          ctx.ga.sendAnalyticEvent("change-theme", "footer", "click");
          return ctx.themeService.switchTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Switch Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_9_listener() {
          return ctx.scrollTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "SocialIcons"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("theme-toggle fas ", ctx.themeService.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.scrollPosition > 100));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  transition: var(--transition);\n  cursor: var(--cursor-type);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .theme-toggle[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  margin-left: -2.7px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-left: -5px;\n  transition: var(--transition);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  opacity: 1;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 0.5em 2em;\n  font-size: 20px;\n  line-height: 1;\n  position: fixed;\n  right: 10vw;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n@media (max-width: 1000px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTVFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUErRUo7QUE3RUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQStFUjtBQTNFSTtFQUNJLGdCQUFBO0FBNkVSO0FBMUVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQTRFUjtBQTFFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQTRFWjtBQXpFUTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQTJFWjtBQXpFWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUEyRWhCO0FBeEVZO0VBQ0ksbUJBQUE7QUEwRWhCO0FBdkVZO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUF5RWhCO0FBdEVnQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQXdFcEI7QUFsRUk7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQW9FUjtBQWxFUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFvRVo7O0FBL0RBO0VBQ0k7SUFDSSxhQUFBO0VBa0VOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbmZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwcHggNy41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG5cbiAgICAgICAgICAgIGEgPiAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yLjdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGwtdG9wLWJ0biB7XG4gICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAxMHZ3O1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1idG4tYmctY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTVFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUErRUo7QUE3RUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQStFUjtBQTNFSTtFQUNJLGdCQUFBO0FBNkVSO0FBMUVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQTRFUjtBQTFFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQTRFWjtBQXpFUTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQTJFWjtBQXpFWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUEyRWhCO0FBeEVZO0VBQ0ksbUJBQUE7QUEwRWhCO0FBdkVZO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUF5RWhCO0FBdEVnQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQXdFcEI7QUFsRUk7RUFDSSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQW9FUjtBQWxFUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFvRVo7O0FBL0RBO0VBQ0k7SUFDSSxhQUFBO0VBa0VOO0FBQ0Y7QUFFQSxveFJBQW94UiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG5mb290ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMHB4IDcuNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAtMTZweDtcbiAgICAgICAgbGVmdDogNTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuXG4gICAgICAgICAgICBhID4gLnRoZW1lLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMi43cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Nyb2xsLXRvcC1idG4ge1xuICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDJlbTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMTB2dztcbiAgICAgICAgYm90dG9tOiAtMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00OC41cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNjcm9sbC1idG4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWJnLWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgJi5zaG93LXNjcm9sbC1idG4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.cube-loader[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  box-shadow: var(--box-shadow);\n  margin-bottom: 30px;\n  text-align: center;\n  font-size: 50px;\n  transform-style: preserve-3d;\n  transition: transform 0.5s 0.1s;\n  perspective: 9999px;\n  transform: rotateY(0) rotateX(0) rotateZ(0);\n}\n.cube-loader[_ngcontent-%COMP%]:hover {\n  animation: _ngcontent-%COMP%_spin 5s infinite forwards;\n}\n.cube-loader[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: url('profile-small.png') !important;\n  filter: grayscale(1) !important;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 2px 1px var(--accent-color-opaque), 0 0 1px 1px var(--accent-color-opaque);\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  background-color: var(--cube-face);\n  color: var(--cube-icon-color);\n  filter: blur(1px);\n  transition: var(--transition);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-front[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translate3d(0, 0, 75px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotateY(0) rotateX(0) rotateZ(0);\n  }\n  50% {\n    transform: rotateY(360deg) rotateX(0) rotateZ(0);\n  }\n  100% {\n    transform: rotateY(360deg) rotateX(360deg) rotateZ(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLFlBSE87RUFJUCxhQUpPO0VBS1Asa0JBTE87RUFNUCw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUE2RUo7QUEzRUk7RUFDSSxvQ0FBQTtBQTZFUjtBQTFFSTtFQUNJLHFEQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE0RVI7QUF6RUk7RUFDSSxnR0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQTJFUjtBQXhFSTtFQUNJLGtDQUFBO0FBMEVSO0FBdkVJO0VBQ0ksa0RBQUE7QUF5RVI7QUF0RUk7RUFDSSxrREFBQTtBQXdFUjtBQXJFSTtFQUNJLGlEQUFBO0FBdUVSO0FBcEVJO0VBQ0ksaURBQUE7QUFzRVI7QUFuRUk7RUFDSSxrREFBQTtBQXFFUjs7QUFqRUE7RUFDSTtJQUNJLDJDQUFBO0VBb0VOO0VBakVFO0lBQ0ksZ0RBQUE7RUFtRU47RUFoRUU7SUFDSSxxREFBQTtFQWtFTjtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kQ3ViZVNpemU6IDE1MHB4O1xuXG4uY3ViZS1sb2FkZXIge1xuICAgIHdpZHRoOiAkQ3ViZVNpemU7XG4gICAgaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyAwLjFzO1xuICAgIHBlcnNwZWN0aXZlOiA5OTk5cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMCkgcm90YXRlWigwKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBhbmltYXRpb246IHNwaW4gNXMgaW5maW5pdGUgZm9yd2FyZHM7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSksIDAgMCAxcHggMXB4IHZhcigtLWFjY2VudC1jb2xvci1vcGFxdWUpO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1YmUtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jdWJlLWljb24tY29sb3IpO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1mcm9udCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1sZWZ0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS10b3Age1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYm90dG9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMCkgcm90YXRlWigwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVYKDApIHJvdGF0ZVooMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVaKDApO1xuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURtQko7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEbUJKOztBQTFFQTtFQUNJLFlBSE87RUFJUCxhQUpPO0VBS1Asa0JBTE87RUFNUCw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUE2RUo7QUEzRUk7RUFDSSxvQ0FBQTtBQTZFUjtBQTFFSTtFQUNJLHFEQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE0RVI7QUF6RUk7RUFDSSxnR0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQTJFUjtBQXhFSTtFQUNJLGtDQUFBO0FBMEVSO0FBdkVJO0VBQ0ksa0RBQUE7QUF5RVI7QUF0RUk7RUFDSSxrREFBQTtBQXdFUjtBQXJFSTtFQUNJLGlEQUFBO0FBdUVSO0FBcEVJO0VBQ0ksaURBQUE7QUFzRVI7QUFuRUk7RUFDSSxrREFBQTtBQXFFUjs7QUFqRUE7RUFDSTtJQUNJLDJDQUFBO0VBb0VOO0VBakVFO0lBQ0ksZ0RBQUE7RUFtRU47RUFoRUU7SUFDSSxxREFBQTtFQWtFTjtBQUNGO0FBQ0Esdy9RQUF3L1EiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJEN1YmVTaXplOiAxNTBweDtcblxuLmN1YmUtbG9hZGVyIHtcbiAgICB3aWR0aDogJEN1YmVTaXplO1xuICAgIGhlaWdodDogJEN1YmVTaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgMC4xcztcbiAgICBwZXJzcGVjdGl2ZTogOTk5OXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApIHJvdGF0ZVooMCk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDVzIGluZmluaXRlIGZvcndhcmRzO1xuICAgIH1cblxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggMXB4IHZhcigtLWFjY2VudC1jb2xvci1vcGFxdWUpLCAwIDAgMXB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKTtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWJlLWZhY2UpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY3ViZS1pY29uLWNvbG9yKTtcbiAgICAgICAgZmlsdGVyOiBibHVyKDFweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtZnJvbnQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtbGVmdCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtcmlnaHQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtdG9wIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWJvdHRvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDApIHJvdGF0ZVooMCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZykgcm90YXRlWCgwKSByb3RhdGVaKDApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVYKDM2MGRlZykgcm90YXRlWigwKTtcbiAgICB9XG59XG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 213);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_5_li_2_Template_a_click_1_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigate(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-aos-delay", i_r5 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4["Label"]);
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleOverlayMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_5_li_2_Template, 3, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@hide-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Menu.NavItems"));
  }
}
function MenuComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_8_Template_span_click_1_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigate(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-aos-delay", i_r8 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", item_r7["Label"].toLowerCase() === ctx_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7["Label"]);
  }
}
class MenuComponent {
  constructor(router, languageService, ga) {
    this.router = router;
    this.languageService = languageService;
    this.ga = ga;
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.fileName = '';
    this.route = '';
    this.scrollPosition = 0;
  }
  ngOnInit() {
    this.languageFormControl.setValue(this.languageService.DEFAULT);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.route = event.urlAfterRedirects.split('/')[1] || 'home';
      }
    });
  }
  toggleOverlayMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuOpen ? document.body.classList.add('scroll-lock') : document.body.classList.remove('scroll-lock');
  }
  navigate(item) {
    if (item['Label'] === 'Resume') {
      this.ga.sendAnalyticEvent('view-resume', 'menu', 'click');
      this.downloadResume();
    } else {
      this.router.navigate([item['Link']]);
    }
    this.menuOpen = false;
    document.body.classList.remove('scroll-lock');
  }
  downloadResume() {
    this.languageService.translateService.get("Resume").subscribe(val => {
      window.open(val, "_blank");
    });
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService));
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
    decls: 10,
    vars: 10,
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", 3, "click", 4, "ngIf"], [1, "menu-bar"], [1, "menu-bar-items", 3, "ngClass"], ["class", "menu-bar-item", "data-aos", "fade-down", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], [1, "menu-overlay", 3, "click"], [1, "menu-items"], ["class", "menu-item", "data-aos", "fade-right", "data-aos-duration", "500", "data-aos-offset", "-50", 4, "ngFor", "ngForOf"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "menu-item"], [3, "click"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
          return ctx.toggleOverlayMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx.scrollPosition > 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, "Menu.NavItems"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  display: none;\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  z-index: 3;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  background: var(--bg-color-60);\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  display: block;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.5s ease-in-out;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: transparent;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-225deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(225deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  background: var(--menu-overlay-bg-color);\n  transition: var(--transition);\n  display: none;\n  position: fixed;\n  overflow: scroll;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 2;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  margin: auto;\n  padding-bottom: 100px;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n  font-size: 13px;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 3em;\n  cursor: var(--cursor-type);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50px;\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 2em 1.5em 1.25em;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 560px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--box-shadow);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-size: small;\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 6px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 550px) {\n  .menu-item[_ngcontent-%COMP%] {\n    font-size: 2.5em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibWVudS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQStFSjtBQTdFSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBK0VSO0FBN0VRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBK0VaO0FBNUVRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQThFWjtBQTVFWTtFQUNJLHNDQUFBO0FBOEVoQjtBQTNFWTtFQUNJLDZDQUFBO0FBNkVoQjtBQTFFWTtFQUNJLFVBQUE7QUE0RWhCO0FBekVZO0VBQ0ksNENBQUE7QUEyRWhCOztBQXBFQTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FBdUVKO0FBckVJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUF1RVI7QUFyRVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBdUVaO0FBckVZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUF1RWhCO0FBcEVZO0VBS0ksMEJBQUE7QUFrRWhCO0FBdEVnQjtFQUNJLDJCQUFBO0FBd0VwQjtBQW5FZ0I7RUFDSSxVQUFBO0FBcUVwQjtBQWxFZ0I7RUFDSSxVQUFBO0FBb0VwQjs7QUE3REE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFnRUo7QUE5REk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWdFUjtBQTlEUTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFnRVo7QUE3RFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBK0RaO0FBN0RZO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQStEaEI7QUE1RFk7RUFDSSxXQUFBO0FBOERoQjs7QUF4REE7RUFDSSwwQkFBQTtBQTJESjs7QUF4REE7RUFDSTtJQUNJLGNBQUE7RUEyRE47RUF6REU7SUFDSSxhQUFBO0VBMkROO0VBekRFO0lBQ0ksY0FBQTtFQTJETjtBQUNGO0FBeERBO0VBQ0k7SUFDSSwyQkFBQTtFQTBETjtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB6LWluZGV4OiAzO1xuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItNjApO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJ0bi1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDs7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1bGxldC1jb2xvcik7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVudS1iYXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDU2MHB4O1xuXG4gICAgICAgICYuc2hvdy1tZW51LWJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUErRUo7QUE3RUk7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQStFUjtBQTdFUTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQStFWjtBQTVFUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUE4RVo7QUE1RVk7RUFDSSxzQ0FBQTtBQThFaEI7QUEzRVk7RUFDSSw2Q0FBQTtBQTZFaEI7QUExRVk7RUFDSSxVQUFBO0FBNEVoQjtBQXpFWTtFQUNJLDRDQUFBO0FBMkVoQjs7QUFwRUE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtBQXVFSjtBQXJFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBdUVSO0FBckVRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQXVFWjtBQXJFWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBdUVoQjtBQXBFWTtFQUtJLDBCQUFBO0FBa0VoQjtBQXRFZ0I7RUFDSSwyQkFBQTtBQXdFcEI7QUFuRWdCO0VBQ0ksVUFBQTtBQXFFcEI7QUFsRWdCO0VBQ0ksVUFBQTtBQW9FcEI7O0FBN0RBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBZ0VKO0FBOURJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFnRVI7QUE5RFE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdDQUFBO0FBZ0VaO0FBN0RRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQStEWjtBQTdEWTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUErRGhCO0FBNURZO0VBQ0ksV0FBQTtBQThEaEI7O0FBeERBO0VBQ0ksMEJBQUE7QUEyREo7O0FBeERBO0VBQ0k7SUFDSSxjQUFBO0VBMkROO0VBekRFO0lBQ0ksYUFBQTtFQTJETjtFQXpERTtJQUNJLGNBQUE7RUEyRE47QUFDRjtBQXhEQTtFQUNJO0lBQ0ksMkJBQUE7RUEwRE47QUFDRjtBQUdBLHd0WUFBd3RZIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgei1pbmRleDogMztcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLTYwKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1idG4tY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tZW51LW9wZW4ge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIzIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ubWVudS1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LW92ZXJsYXktYmctY29sb3IpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc+JztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idWxsZXQtY29sb3IpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1lbnUtYmFyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1iYXItaXRlbXMge1xuICAgICAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMS4yNWVtO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiA1NjBweDtcblxuICAgICAgICAmLnNob3ctbWVudS1iZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWJhci1iZy1jb2xvcik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1iYXItaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1lbnUtYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZW51LW92ZXJsYXkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);








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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, item_r1["Link"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
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
    vars: 20,
    consts: [[1, "about"], ["data-aos", "zoom-out", "data-aos-duration", "1000", "cdkDrag", "", "cdkDragHandle", "", "cdkDragBoundary", ".about", 1, "profile-img"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "100", 1, "name"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "200", 1, "role"], [1, "code-highlight"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "300", 1, "about-description"], [3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "400", 1, "social-icons"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "500", "data-aos-offset", "-50", 1, "download-resume"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "main-btn", 3, "click"], ["target", "_blank", 3, "href"]],
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
          ctx.analyticsService.sendAnalyticEvent("view-resume", "about", "click");
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", "translate3d(0, 0, 0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "About.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "About.Name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, "About.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 14, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, "SocialIcons"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 18, "About.ResumeBtn"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  min-height: 650px !important;\n  margin-top: 10em;\n  margin-bottom: 10em;\n}\n.about[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  background: url('profile-small.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 10em;\n  height: 10em;\n  margin-bottom: 25px;\n  filter: grayscale(1);\n  cursor: move;\n  position: relative;\n  z-index: 1;\n  transition: 0.2s linear;\n}\n.about[_ngcontent-%COMP%]   .profile-img.cdk-drag-dragging[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  filter: grayscale(0.2);\n  width: 9em;\n  height: 9em;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 175px;\n}\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: var(--code-font);\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 45px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: none;\n  margin: 1.5em 0 2.5em;\n  font-size: 20px;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 20px 0 0;\n}\n.about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n.about[_ngcontent-%COMP%]   .download-resume[_ngcontent-%COMP%] {\n  margin: 3em 0;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding-left: 5px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 1000px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 27px !important;\n  }\n}\n@media (max-width: 1000px) {\n  .loader[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-left: -35px;\n    margin-bottom: 15vh;\n  }\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUErRUo7QUE3RUk7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBK0VSO0FBN0VRO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUErRVo7QUEzRUk7RUFDSSxpQkFBQTtBQTZFUjtBQTFFSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQTRFUjtBQXpFSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBMkVSO0FBeEVJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUEwRVI7QUF2RUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBeUVSO0FBdEVJO0VBQ0ksZ0JBQUE7QUF3RVI7QUFyRUk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBdUVSO0FBckVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBdUVaO0FBckVZO0VBQ0ksY0FBQTtBQXVFaEI7QUFsRUk7RUFDSSxhQUFBO0FBb0VSOztBQWhFQTtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBQW1FSjtBQWpFSTtFQUNJLHFDQUFBO0FBbUVSOztBQS9EQTtFQUNJLGFBQUE7QUFrRUo7O0FBL0RBO0VBQ0k7SUFDSSxrQkFBQTtFQWtFTjtFQWhFRTtJQUNJLHVDQUFBO0VBa0VOO0FBQ0Y7QUEvREE7RUFDSTtJQUNJLDBCQUFBO0VBaUVOO0VBL0RFO0lBQ0ksMEJBQUE7RUFpRU47QUFDRjtBQTlEQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBZ0VOO0VBN0RFO0lBQ0kseUJBQUE7RUErRE47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uYWJvdXQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWluLWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwZW07XG5cbiAgICAucHJvZmlsZS1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtc21hbGwucG5nJykgbm8tcmVwZWF0O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICBoZWlnaHQ6IDEwZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcblxuICAgICAgICAmLmNkay1kcmFnLWRyYWdnaW5nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoLjIpO1xuICAgICAgICAgICAgd2lkdGg6IDllbTtcbiAgICAgICAgICAgIGhlaWdodDogOWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNzVweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIG1hcmdpbjogMCAwIDIwcHggM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgIH1cblxuICAgIGgyLCBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB9XG5cbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAxLjVlbSAwIDIuNWVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuXG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kb3dubG9hZC1yZXN1bWUge1xuICAgICAgICBtYXJnaW46IDNlbSAwO1xuICAgIH1cbn1cblxuLmNvZGUtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC1jb2xvcik7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuXG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxufVxuXG4ubG9hZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICBmcm9tLCB0byB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubG9hZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQStFSjtBQTdFSTtFQUNJLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUErRVI7QUE3RVE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQStFWjtBQTNFSTtFQUNJLGlCQUFBO0FBNkVSO0FBMUVJO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBNEVSO0FBekVJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUEyRVI7QUF4RUk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQTBFUjtBQXZFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUF5RVI7QUF0RUk7RUFDSSxnQkFBQTtBQXdFUjtBQXJFSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUF1RVI7QUFyRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUF1RVo7QUFyRVk7RUFDSSxjQUFBO0FBdUVoQjtBQWxFSTtFQUNJLGFBQUE7QUFvRVI7O0FBaEVBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBbUVKO0FBakVJO0VBQ0kscUNBQUE7QUFtRVI7O0FBL0RBO0VBQ0ksYUFBQTtBQWtFSjs7QUEvREE7RUFDSTtJQUNJLGtCQUFBO0VBa0VOO0VBaEVFO0lBQ0ksdUNBQUE7RUFrRU47QUFDRjtBQS9EQTtFQUNJO0lBQ0ksMEJBQUE7RUFpRU47RUEvREU7SUFDSSwwQkFBQTtFQWlFTjtBQUNGO0FBOURBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFnRU47RUE3REU7SUFDSSx5QkFBQTtFQStETjtBQUNGO0FBQ0Esd3RUQUF3dFQiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmFib3V0IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1pbi1oZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMGVtO1xuXG4gICAgLnByb2ZpbGUtaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpIG5vLXJlcGVhdDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTBlbTtcbiAgICAgICAgaGVpZ2h0OiAxMGVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBsaW5lYXI7XG5cbiAgICAgICAgJi5jZGstZHJhZy1kcmFnZ2luZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKC4yKTtcbiAgICAgICAgICAgIHdpZHRoOiA5ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDllbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICB9XG5cbiAgICBoMiwgaDMge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMS41ZW0gMCAyLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG93bmxvYWQtcmVzdW1lIHtcbiAgICAgICAgbWFyZ2luOiAzZW0gMDtcbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcblxuICAgIC5ibGlua2luZy1jdXJzb3Ige1xuICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgZnJvbSwgdG8ge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmxvYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXZoO1xuICAgIH1cblxuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);




class ContactComponent {
  constructor(ga) {
    this.ga = ga;
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 13,
    vars: 13,
    consts: [[1, "contact"], ["data-aos", "fade-up", "data-aos-duration", "500"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "click", "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_9_listener() {
          return ctx.ga.sendAnalyticEvent("send-email", "contact", "click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "Contact.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, "Contact.Btn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.contact[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  margin-top: 20em;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: var(--title-color);\n  font-size: 16px;\n  font-family: var(--primary-font);\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n\n@media (max-width: 1000px) {\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBK0VKO0FBN0VJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUErRVI7QUE1RUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUE4RVI7O0FBMUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQTZFSjs7QUExRUE7RUFDSTtJQUNJLHlCQUFBO0VBNkVOO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uY29udGFjdCB7XG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgICBtYXJnaW4tdG9wOiAyMGVtO1xuXG4gICAgLmNvbnRhY3QtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5jb250YWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQStFSjtBQTdFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBK0VSO0FBNUVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBOEVSOztBQTFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUE2RUo7O0FBMUVBO0VBQ0k7SUFDSSx5QkFBQTtFQTZFTjtBQUNGO0FBRUEsZzNOQUFnM04iLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmNvbnRhY3Qge1xuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XG4gICAgbWFyZ2luLXRvcDogMjBlbTtcblxuICAgIC5jb250YWN0LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 852);




class CreditComponent {
  constructor(ga) {
    this.ga = ga;
  }
  static #_ = this.ɵfac = function CreditComponent_Factory(t) {
    return new (t || CreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CreditComponent,
    selectors: [["app-credit"]],
    decls: 7,
    vars: 3,
    consts: [[1, "credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "click", "href"], [1, "fab", "fa-angular"]],
    template: function CreditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreditComponent_Template_a_click_4_listener() {
          return ctx.ga.sendAnalyticEvent("view-source", "credits", "click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
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
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 852);





function ExperienceComponent_div_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperienceComponent_div_6_li_2_Template_li_click_0_listener() {
      const tag_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.scrollTo(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r2.selectedTag === tag_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r4 * 100 + 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, tag_r2), " ");
  }
}
function ExperienceComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExperienceComponent_div_6_li_2_Template, 3, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tags);
  }
}
function ExperienceComponent_div_7_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r8);
  }
}
function ExperienceComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperienceComponent_div_7_div_1_Template_div_click_0_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.scrollTo(ctx_r2.tags[i_r7 + 1] || ctx_r2.tags[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ExperienceComponent_div_7_div_1_span_14_Template, 3, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inactive", ctx_r2.selectedTag !== item_r9["Category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r9["Category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", item_r9["Tab"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r9["Tab"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", item_r9["Tab"])("src", item_r9["Logo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r9["Location"], " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9["Date"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r9["Environment"]);
  }
}
function ExperienceComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ExperienceComponent_div_7_Template_div_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExperienceComponent_div_7_div_1_Template, 15, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.all);
  }
}
class ExperienceComponent {
  constructor(languageService) {
    this.languageService = languageService;
    this.selectedTag = '';
    this.tags = [];
    this.all = [];
  }
  ngOnInit() {
    this.languageService.translateService.get("Experience.Items").subscribe(val => {
      this.all = val;
      this.tags = [...new Set(this.all.map(experience => experience['Category']))];
      this.selectedTag = this.tags[0];
    });
  }
  scrollTo(tag) {
    this.selectedTag = tag;
    document.getElementById(tag)?.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }
  onScroll(event) {
    const width = event.target.getBoundingClientRect().width;
    console.log(event.target.scrollLeft);
    this.selectedTag = this.tags[Math.floor(event.target.scrollLeft / (width - 30))] || this.tags[0];
  }
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    hostBindings: function ExperienceComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ExperienceComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        });
      }
    },
    decls: 8,
    vars: 5,
    consts: [[1, "content"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [4, "ngIf"], ["id", "carousel", 3, "scroll", 4, "ngIf"], [1, "experience-categories"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "active", "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["id", "carousel", 3, "scroll"], ["class", "carousel-item", "data-aos", "fade-up", "data-aos-duration", "500", 3, "id", "title", "inactive", "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "carousel-item", 3, "click", "id", "title"], [1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], [1, "job-description"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "technology"], [1, "highlight"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExperienceComponent_div_6_Template, 3, 1, "div", 3)(7, ExperienceComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.all.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.all.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n#carousel[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  gap: 20px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  cursor: auto;\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90%;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-shrink: 0;\n  background-color: var(--bg-color-30);\n  transition: var(--transition);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 0 15px 10px 15px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n\n.job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n\n.job-description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n\n.job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.collapse[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  height: 30px;\n  overflow: hidden;\n}\n.collapse.open[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n\n.job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--primary-color);\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.experience-categories[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 30px;\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.experience-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n@media (max-width: 1000px) {\n  #carousel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    -webkit-overflow-scrolling: touch;\n  }\n  #carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    cursor: var(--cursor-type);\n  }\n  .experience-categories[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQStFSjtBQTdFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBOEVSOztBQXpFQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUE0RUo7O0FBekVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBNEVKOztBQXpFQTtFQUNJLG1CQUFBO0FBNEVKOztBQXpFQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBNEVKO0FBMUVJO0VBQ0ksWUFBQTtBQTRFUjs7QUF4RUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTJFSjs7QUF4RUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUEyRUo7QUF6RUk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBMkVSO0FBekVRO0VBQ0kscUJBQUE7QUEyRVo7QUF4RVE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTBFWjtBQXZFUTtFQUNJLFdBQUE7QUF5RVo7O0FBbkVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBc0VKO0FBcEVJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFzRVI7QUFwRVE7RUFDSSwwQkFBQTtBQXNFWjtBQW5FUTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBcUVaO0FBbEVRO0VBQ0ksV0FBQTtBQW9FWjs7QUEvREE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsaUNBQUE7RUFrRU47RUFqRU07SUFDSSwwQkFBQTtFQW1FVjtFQWhFRTtJQUNJLGNBQUE7RUFrRU47QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbiNjYXJvdXNlbCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1iYXNpczogOTAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4IDEwcHggMTVweDtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgfVxufVxuXG5cbi5qb2ItdGltZSB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5qb2ItbG9jYXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLm9wZW4ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxufVxuXG4uam9iLWxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5qb2ItZW52aXJvbm1lbnQge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC50ZWNobm9sb2d5IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5leHBlcmllbmNlLWNhdGVnb3JpZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjY2Fyb3VzZWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5leHBlcmllbmNlLWNhdGVnb3JpZXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUErRUo7QUE3RUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBRUEsb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQThFUjs7QUF6RUE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FBNEVKOztBQXpFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQTRFSjs7QUF6RUE7RUFDSSxtQkFBQTtBQTRFSjs7QUF6RUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTRFSjtBQTFFSTtFQUNJLFlBQUE7QUE0RVI7O0FBeEVBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUEyRUo7O0FBeEVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBMkVKO0FBekVJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQTJFUjtBQXpFUTtFQUNJLHFCQUFBO0FBMkVaO0FBeEVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEwRVo7QUF2RVE7RUFDSSxXQUFBO0FBeUVaOztBQW5FQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXNFSjtBQXBFSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBc0VSO0FBcEVRO0VBQ0ksMEJBQUE7QUFzRVo7QUFuRVE7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXFFWjtBQWxFUTtFQUNJLFdBQUE7QUFvRVo7O0FBL0RBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLGlDQUFBO0VBa0VOO0VBakVNO0lBQ0ksMEJBQUE7RUFtRVY7RUFoRUU7SUFDSSxjQUFBO0VBa0VOO0FBQ0Y7QUFFQSxvclRBQW9yVCIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4jY2Fyb3VzZWwge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtYmFzaXM6IDkwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIH1cbn1cblxuXG4uam9iLXRpbWUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5qb2ItZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uam9iLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29sbGFwc2Uge1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuLmpvYi1sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uam9iLWVudmlyb25tZW50IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAudGVjaG5vbG9neSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uZXhwZXJpZW5jZS1jYXRlZ29yaWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgI2Nhcm91c2VsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZXhwZXJpZW5jZS1jYXRlZ29yaWVzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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



function HighlightsComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r2 * 50);
  }
}
function HighlightsComponent_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3);
  }
}
function HighlightsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightsComponent_div_18_span_4_Template, 3, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r5 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4["Category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r4["Elements"]);
  }
}
class HighlightsComponent {
  constructor() {
    this.selectedSection = 'qualifications';
  }
  scrollTo(section) {
    this.selectedSection = section;
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }
  onScroll(event) {
    this.selectedSection = event.target.scrollLeft > event.target.getBoundingClientRect().width ? 'skills' : 'qualifications';
  }
  static #_ = this.ɵfac = function HighlightsComponent_Factory(t) {
    return new (t || HighlightsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HighlightsComponent,
    selectors: [["app-highlights"]],
    hostBindings: function HighlightsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HighlightsComponent_scroll_HostBindingHandler($event) {
          return ctx.onScroll($event);
        });
      }
    },
    decls: 20,
    vars: 13,
    consts: [[1, "content"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "highlight-categories"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-delay", "100", 3, "click"], ["id", "carousel", 3, "scroll"], ["id", "qualifications", 1, "carousel-item", 3, "click"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element bullet", "data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["id", "skills", 1, "carousel-item", 3, "click"], ["class", "skills", "data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "qualifications-element", "bullet", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "skills"], ["class", "skill-element", 4, "ngFor", "ngForOf"], [1, "skill-element"], [1, "highlight"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "ul", 3)(8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighlightsComponent_Template_li_click_8_listener() {
          return ctx.scrollTo("qualifications");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Qualifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighlightsComponent_Template_li_click_10_listener() {
          return ctx.scrollTo("skills");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HighlightsComponent_Template_div_scroll_12_listener($event) {
          return ctx.onScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighlightsComponent_Template_div_click_13_listener() {
          return ctx.scrollTo("skills");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HighlightsComponent_li_15_Template, 1, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighlightsComponent_Template_div_click_17_listener() {
          return ctx.scrollTo("qualifications");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HighlightsComponent_div_18_Template, 5, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "Highlights.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedSection === "qualifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedSection === "skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, "Highlights.Qualifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "Highlights.Skills"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n#carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  flex-wrap: nowrap;\n  gap: 20px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  cursor: auto;\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  align-items: flex-start;\n  flex-shrink: 0;\n}\n\n.highlight-categories[_ngcontent-%COMP%] {\n  display: none;\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.highlight-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.skills[_ngcontent-%COMP%]:first-child {\n  margin-top: 15px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: var(--accent-color);\n  font-family: var(--code-font);\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.accent[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n@media (max-width: 1000px) {\n  #carousel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n  }\n  #carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    cursor: var(--cursor-type);\n  }\n  .highlight-categories[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQStFSjtBQTdFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBK0VSOztBQTNFQTtFQUNJLGFBQUE7QUE4RUo7QUE1RUk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQThFUjtBQTVFUTtFQUNJLDBCQUFBO0FBOEVaO0FBM0VRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE2RVo7QUExRVE7RUFDSSxXQUFBO0FBNEVaOztBQXZFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQTBFSjtBQXhFSTtFQUNJLGNBQUE7QUEwRVI7QUF6RVE7RUFDSSxhQUFBO0FBMkVaOztBQXRFQTtFQUNJLGVBQUE7QUF5RUo7QUF4RUk7RUFDSSxnQkFBQTtBQTBFUjtBQXZFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUF5RVI7QUF2RVE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXlFWjtBQXRFUTtFQUNJLFdBQUE7QUF3RVo7QUFyRVE7RUFDSSxtQkFBQTtBQXVFWjs7QUFsRUE7RUFDSSwwQkFBQTtBQXFFSjs7QUFsRUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQ0FBQTtFQXFFTjtFQW5FTTtJQUNJLGdCQUFBO0lBQ0EsMEJBQUE7RUFxRVY7RUFsRUU7SUFDSSxjQUFBO0VBb0VOO0FBQ0YiLCJmaWxlIjoiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4jY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGdhcDogMjBweDtcblxuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG59XG5cbi5oaWdobGlnaHQtY2F0ZWdvcmllcyB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucXVhbGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5za2lsbHMge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAuc2tpbGwtZWxlbWVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY2NlbnQge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjY2Fyb3VzZWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhdGVnb3JpZXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUErRUo7QUE3RUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQStFUjs7QUEzRUE7RUFDSSxhQUFBO0FBOEVKO0FBNUVJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUE4RVI7QUE1RVE7RUFDSSwwQkFBQTtBQThFWjtBQTNFUTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNkVaO0FBMUVRO0VBQ0ksV0FBQTtBQTRFWjs7QUF2RUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUEwRUo7QUF4RUk7RUFDSSxjQUFBO0FBMEVSO0FBekVRO0VBQ0ksYUFBQTtBQTJFWjs7QUF0RUE7RUFDSSxlQUFBO0FBeUVKO0FBeEVJO0VBQ0ksZ0JBQUE7QUEwRVI7QUF2RUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBeUVSO0FBdkVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF5RVo7QUF0RVE7RUFDSSxXQUFBO0FBd0VaO0FBckVRO0VBQ0ksbUJBQUE7QUF1RVo7O0FBbEVBO0VBQ0ksMEJBQUE7QUFxRUo7O0FBbEVBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUNBQUE7RUFxRU47RUFuRU07SUFDSSxnQkFBQTtJQUNBLDBCQUFBO0VBcUVWO0VBbEVFO0lBQ0ksY0FBQTtFQW9FTjtBQUNGO0FBQ0EsNDFSQUE0MVIiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuI2Nhcm91c2VsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxufVxuXG4uaGlnaGxpZ2h0LWNhdGVnb3JpZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgbGkge1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2tpbGxzIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgLnNraWxsLWVsZW1lbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWNjZW50IHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgI2Nhcm91c2VsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXRlZ29yaWVzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7229);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 7301);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 3979);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 5755);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 2541);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit/credit.component */ 2033);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
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
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__.CreditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, tag_r2 || "All"), " (", ctx_r2.getTagCount(tag_r2), ") ");
  }
}
function ProjectsComponent_div_10_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r7["CompanyLogo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r7["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r7["Link"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_10_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r8);
  }
}
function ProjectsComponent_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_10_div_11_span_1_Template, 3, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r7["Tech"]);
  }
}
function ProjectsComponent_div_10_div_12_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](icon_r9);
  }
}
function ProjectsComponent_div_10_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_10_div_12_i_1_Template, 1, 3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r7["TechIcons"]);
  }
}
function ProjectsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_10_Template_div_click_0_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.scroll(i_r6, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_10_img_6_Template, 1, 1, "img", 10)(7, ProjectsComponent_div_10_a_7_Template, 2, 1, "a", 11)(8, ProjectsComponent_div_10_a_8_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_10_div_11_Template, 2, 1, "div", 13)(12, ProjectsComponent_div_10_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "project-", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@exit-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r7["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r7["CompanyLogo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r7["GithubLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r7["Link"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r7["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r7["Tech"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r7["TechIcons"]);
  }
}
class ProjectsComponent {
  constructor(languageService) {
    this.languageService = languageService;
    this.filtered = [];
    this.all = [];
    this.selectedTag = '';
  }
  ngOnInit() {
    this.languageService.translateService.get("Projects.Projects").subscribe(val => {
      this.all = val;
      this.filterProjects('featured');
    });
  }
  filterProjects(tag) {
    if (this.selectedTag === tag) {
      return;
    }
    this.selectedTag = tag;
    this.filtered = [];
    setTimeout(() => {
      this.filtered = this.all.filter(project => {
        const tags = project['Tags'];
        if (!this.selectedTag) {
          return true;
        }
        return tags ? tags.includes(this.selectedTag) : false;
      });
      this.scrollTo(0);
    }, 500);
  }
  scrollTo(index) {
    document.getElementById(`project-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }
  scroll(index, direction) {
    if (direction === 'right') {
      if (index === this.filtered.length - 1) {
        this.scrollTo(0);
      } else {
        this.scrollTo(index + 1);
      }
    }
    if (direction === 'left') {
      if (index === 0) {
        this.scrollTo(this.filtered.length - 1);
      } else {
        this.scrollTo(index - 1);
      }
    }
  }
  getTagCount(tag) {
    return this.all.filter(project => {
      const tags = project['Tags'];
      return tags ? !tag || tags.includes(tag) : false;
    }).length;
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 11,
    vars: 7,
    consts: [[1, "section-title"], [1, "project-categories"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "carousel"], ["class", "carousel-item", "data-aos", "fade-up", "data-aos-duration", "500", 3, "id", "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "carousel-item", 3, "click", "id"], [1, "header"], [1, "title"], [1, "external-links"], ["class", "project-img", "alt", "CompanyLogo", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "description"], [4, "ngIf"], ["class", "tech-icons", 4, "ngIf"], [1, "next-btn"], [1, "fas", "fa-long-arrow-alt-right"], ["alt", "CompanyLogo", 1, "project-img", 3, "src"], ["target", "_blank", 3, "href"], ["id", "ghLink", 1, "external-link-btn", "fab", "fa-github"], [1, "external-link-btn", "fas", "fa-external-link-alt"], ["class", "tech", 4, "ngFor", "ngForOf"], [1, "tech"], [1, "highlight"], [1, "tech-icons"], [3, "class", 4, "ngFor", "ngForOf"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div")(2, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_li_7_Template, 3, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectsComponent_div_10_Template, 15, 10, "div", 4);
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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.project-categories[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.project-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.show-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n#carousel[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  transition: var(--transition);\n  background-color: var(--bg-color-30);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  cursor: auto;\n  height: 350px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-basis: 45%;\n  flex-shrink: 0;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 90px;\n  bottom: 15px;\n  font-size: 30px;\n  animation: _ngcontent-%COMP%_scroll-right 1.5s infinite ease-in-out;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  float: left;\n  text-align: start;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: end;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-bottom: 10px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  transition: var(--transition);\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 17px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n\n@keyframes _ngcontent-%COMP%_scroll-right {\n  0% {\n    transform: translateX(0);\n    filter: blur(2px);\n    opacity: 0;\n  }\n  50% {\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(65px);\n    filter: blur(2px);\n    opacity: 0;\n  }\n}\n@media (max-width: 1000px) {\n  #carousel[_ngcontent-%COMP%] {\n    -webkit-overflow-scrolling: touch;\n    flex-wrap: nowrap;\n  }\n  #carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    cursor: var(--cursor-type);\n    flex-basis: 91%;\n  }\n  #carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]:first-child   .next-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRG1CSjs7QUNoQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURtQko7O0FBNUVBO0VBQ0ksbUJBQUE7QUErRUo7QUE3RUk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQStFUjtBQTdFUTtFQUNJLDBCQUFBO0FBK0VaO0FBNUVRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE4RVo7QUEzRVE7RUFDSSxXQUFBO0FBNkVaOztBQXhFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQTJFSjs7QUF4RUE7RUFDSSxjQUFBO0FBMkVKOztBQXhFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTJFSjtBQXpFSTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEwRVI7QUF4RVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtBQTBFWjtBQXZFUTtFQUNJLGVBQUE7QUF5RVo7QUF0RVE7RUFDSSxXQUFBO0FBd0VaO0FBdEVZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBd0VoQjtBQXJFWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBdUVoQjtBQW5FUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQXFFWjtBQWxFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBb0VaO0FBakVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFtRVo7QUFoRVE7RUFDSSxlQUFBO0FBa0VaO0FBaEVZO0VBQ0ksWUFBQTtBQWtFaEI7QUE5RFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQWdFWjs7QUEzREE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VBOEROO0VBNURFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7RUE4RE47RUE1REU7SUFDSSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQThETjtBQUNGO0FBM0RBO0VBQ0k7SUFDSSxpQ0FBQTtJQUNBLGlCQUFBO0VBNkROO0VBM0RNO0lBQ0ksMEJBQUE7SUFDQSxlQUFBO0VBNkRWO0VBM0RjO0lBQ0ksY0FBQTtFQTZEbEI7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1jYXRlZ29yaWVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaG93LWJ0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNTBweCAwO1xufVxuXG4uZXh0ZXJuYWwtbGluay1idG4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4jY2Fyb3VzZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGdhcDogMjBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgIC5uZXh0LWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDkwcHg7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHNjcm9sbC1yaWdodCAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5leHRlcm5hbC1saW5rcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0LWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNoLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlY2gge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzY3JvbGwtcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDY1cHgpO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICNjYXJvdXNlbCB7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA5MSU7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAubmV4dC1idG4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlLTkwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDaEJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEbUJKOztBQ2hCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRG1CSjs7QUE1RUE7RUFDSSxtQkFBQTtBQStFSjtBQTdFSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBK0VSO0FBN0VRO0VBQ0ksMEJBQUE7QUErRVo7QUE1RVE7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQThFWjtBQTNFUTtFQUNJLFdBQUE7QUE2RVo7O0FBeEVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBMkVKOztBQXhFQTtFQUNJLGNBQUE7QUEyRUo7O0FBeEVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBMkVKO0FBekVJO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTBFUjtBQXhFUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0FBMEVaO0FBdkVRO0VBQ0ksZUFBQTtBQXlFWjtBQXRFUTtFQUNJLFdBQUE7QUF3RVo7QUF0RVk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUF3RWhCO0FBckVZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUF1RWhCO0FBbkVRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBcUVaO0FBbEVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFvRVo7QUFqRVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQW1FWjtBQWhFUTtFQUNJLGVBQUE7QUFrRVo7QUFoRVk7RUFDSSxZQUFBO0FBa0VoQjtBQTlEUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBZ0VaOztBQTNEQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUE4RE47RUE1REU7SUFDSSxlQUFBO0lBQ0EsVUFBQTtFQThETjtFQTVERTtJQUNJLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VBOEROO0FBQ0Y7QUEzREE7RUFDSTtJQUNJLGlDQUFBO0lBQ0EsaUJBQUE7RUE2RE47RUEzRE07SUFDSSwwQkFBQTtJQUNBLGVBQUE7RUE2RFY7RUEzRGM7SUFDSSxjQUFBO0VBNkRsQjtBQUNGO0FBRUEsNDBWQUE0MFYiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLnByb2plY3QtY2F0ZWdvcmllcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2hvdy1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmV4dGVybmFsLWxpbmstYnRuIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuI2Nhcm91c2VsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAubmV4dC1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwtcmlnaHQgMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXh0ZXJuYWwtbGlua3Mge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdC1pbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGVjaC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNoIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsLXJpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2NXB4KTtcbiAgICAgICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAjY2Fyb3VzZWwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICAgICAgZmxleC1iYXNpczogOTElO1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgLm5leHQtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('exit-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 7659:
/*!***********************************************************!*\
  !*** ./src/app/components/terminal/terminal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TerminalComponent: () => (/* binding */ TerminalComponent)
/* harmony export */ });
/* harmony import */ var _Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/language/language.service */ 9263);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme/theme.service */ 6857);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);














function TerminalComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "li", 16);
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", line_r1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function TerminalComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TerminalComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class TerminalComponent {
  constructor(router, languageService, themeService, ga) {
    this.router = router;
    this.languageService = languageService;
    this.themeService = themeService;
    this.ga = ga;
    this.lines = [];
    this.previousInputList = [];
    this.waitForInput = false;
    this.fullscreen = false;
    this.loading = true;
    this.cursor = 0;
    this.inputMap = {};
    this.wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.terminal) {
        _this.languageService.translateService.get("Terminal").subscribe(val => {
          _this.inputMap = val;
        });
        yield _this.displayLoading(1000);
        _this.lines = JSON.parse(localStorage.getItem('av-terminal-history') || '[] ');
        yield _this.displayInit();
      }
    })();
  }
  click(element) {
    var _this2 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (element.classList.contains('t-view-command')) {
        _this2.input.value = `${element.innerText}`;
        yield _this2.inputActive();
      }
      if (element.classList.contains('t-help-command')) {
        _this2.input.value = `${element.innerText}`;
        yield _this2.inputActive();
      }
      if (element.classList.contains('t-previous-input') && element.classList.contains('t-success')) {
        _this2.input.value = `${element.innerText.replace('$', '').trim()}`;
        yield _this2.inputActive();
      }
      if (element.id === 'terminal-input' && _this2.input?.value?.trim()) {
        yield _this2.executeInput();
      }
    })();
  }
  submitInput(event) {
    var _this3 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.terminal && event.key == 'Enter') {
        yield _this3.executeInput();
      }
      if (_this3.terminal && event.key == 'ArrowUp') {
        _this3.input.value = _this3.cursor > 0 ? _this3.previousInputList[--_this3.cursor] : '';
        yield _this3.inputActive();
      }
      if (_this3.terminal && event.key == 'ArrowDown') {
        _this3.input.value = _this3.cursor < _this3.previousInputList.length ? _this3.previousInputList[_this3.cursor++] : '';
        yield _this3.inputActive();
      }
    })();
  }
  executeInput() {
    var _this4 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.input?.value?.toLowerCase()?.trim()) {
        _this4.previousInputList.push(_this4.input?.value?.toLowerCase()?.trim());
        _this4.cursor = _this4.previousInputList.length;
      }
      yield _this4.checkInputValue(_this4.input?.value?.toLowerCase()?.trim() || '');
      yield _this4.inputActive();
      localStorage.setItem('av-terminal-history', JSON.stringify(_this4.lines));
    })();
  }
  displayInit() {
    var _this5 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.createNewLine();
      yield _this5.createLines([`last login: ${new Date().toLocaleString()}`, 'in /users/arun-varghese', 'executing ~/avarghese.sh', `version: ${_this5.appVersion}`, '<br>', 'type <span class="t-success">help</span> to view available commands']);
      _this5.createNewLine();
      yield _this5.inputActive();
    })();
  }
  displayLoading(delay = 500) {
    var _this6 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.loading = true;
      yield _this6.wait(100);
      _this6.anchor?.scrollIntoView();
      yield _this6.wait(delay);
      _this6.loading = false;
    })();
  }
  clearInput() {
    if (this.input?.value) {
      this.input.value = '';
    }
    this.waitForInput = false;
  }
  inputActive() {
    var _this7 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.loading) {
        return;
      }
      _this7.waitForInput = true;
      yield _this7.wait(100);
      if (_this7.input && _this7.anchor) {
        _this7.input.focus();
        yield _this7.wait(100);
        _this7.anchor?.scrollIntoView();
      }
    })();
  }
  get terminal() {
    return document.getElementById('terminal');
  }
  get input() {
    return document.getElementById('terminal-input');
  }
  get anchor() {
    return document.getElementById('anchor');
  }
  createNewLine() {
    this.lines.push('<br>');
  }
  addLine(line, delay = 50) {
    var _this8 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.wait(delay);
      _this8.lines.push(line);
      _this8.anchor?.scrollIntoView();
    })();
  }
  createLines(input) {
    var _this9 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lines = typeof input === 'string' ? [input] : input;
      for (const line of lines) {
        yield _this9.addLine(line);
      }
    })();
  }
  createHelpLine(commands) {
    var _this10 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const command of commands) {
        yield _this10.addLine(`<span class='t-help-command'>${command[0]}</span>${command[1] || ''}`);
      }
    })();
  }
  createContactLines(lines) {
    var _this11 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const line of lines) {
        yield _this11.addLine(`<a href='${line[0]}' target='_blank'">&nbsp; <i class='${line[1]} white'></i>&nbsp;${line[2]}</a>`);
      }
    })();
  }
  createNavigationLine(views) {
    var _this12 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const view of views) {
        yield _this12.addLine(`<span class='t-view-command'>view ${view}</span>`);
      }
    })();
  }
  createPreviousInput(command, level, delay = 50) {
    var _this13 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.wait(delay);
      _this13.clearInput();
      _this13.lines.push(`$ <span class='${level} t-previous-input'>${command}</span>`);
      _this13.anchor?.scrollIntoView();
    })();
  }
  navigate(item) {
    this.router.navigate([item]);
  }
  clearTerminal() {
    var _this14 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.clearInput();
      _this14.lines = [];
      yield _this14.createLines('type <span class="t-success">help</span> to view available commands');
      _this14.createNewLine();
      yield _this14.inputActive();
    })();
  }
  get appVersion() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.version;
  }
  displayHelp() {
    var _this15 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.createPreviousInput('help', 't-success');
      yield _this15.displayLoading();
      _this15.createNewLine();
      yield _this15.createLines(_this15.inputMap['help.prompt']);
      yield _this15.createHelpLine(_this15.inputMap['help.commands']);
      _this15.createNewLine();
    })();
  }
  displayMore() {
    var _this16 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this16.createPreviousInput('more', 't-success');
      yield _this16.displayLoading();
      _this16.createNewLine();
      yield _this16.createLines(_this16.inputMap['more.prompt']);
      yield _this16.createHelpLine(_this16.inputMap['more.commands']);
      _this16.createNewLine();
    })();
  }
  displayView() {
    var _this17 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this17.createPreviousInput('view', 't-success');
      yield _this17.displayLoading();
      _this17.createNewLine();
      yield _this17.createLines(_this17.inputMap['view.prompt']);
      yield _this17.createNavigationLine(_this17.inputMap['view.pages']);
      _this17.createNewLine();
    })();
  }
  displayAbout() {
    var _this18 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.createPreviousInput('about', 't-success');
      yield _this18.displayLoading();
      _this18.createNewLine();
      yield _this18.createLines(_this18.inputMap['about']);
      _this18.createNewLine();
    })();
  }
  displayContact() {
    var _this19 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this19.createPreviousInput('contact', 't-success');
      yield _this19.displayLoading();
      _this19.createNewLine();
      yield _this19.createContactLines(_this19.inputMap['contact']);
      _this19.createNewLine();
    })();
  }
  checkInputValue(value) {
    var _this20 = this;
    return (0,_Users_avarghese_Workspace_varararun_github_io_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value === 'help') {
        yield _this20.displayHelp();
      } else if (value === 'more') {
        yield _this20.displayMore();
      } else if (value === 'about') {
        yield _this20.displayAbout();
      } else if (value === 'view') {
        yield _this20.displayView();
      } else if (value === 'view highlights') {
        yield _this20.displayLoading();
        _this20.navigate('highlights');
      } else if (value === 'view experience') {
        yield _this20.displayLoading();
        _this20.navigate('experience');
      } else if (value === 'view projects') {
        yield _this20.displayLoading();
        _this20.navigate('projects');
      } else if (value === 'view resume') {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading();
        _this20.languageService.translateService.get("Resume").subscribe(val => {
          window.open(val, "_blank");
        });
        _this20.createNewLine();
      } else if (value === 'source') {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading();
        _this20.languageService.translateService.get("Repo").subscribe(val => {
          window.open(val, "_blank");
        });
        _this20.createNewLine();
      } else if (value === 'contact') {
        yield _this20.displayContact();
      } else if (value.startsWith('exit')) {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading();
        _this20.navigate('home');
      } else if (value.startsWith('clear')) {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.clearTerminal();
      } else if (value === '') {
        yield _this20.createPreviousInput(value, '');
      } else if (value.startsWith('theme')) {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading(1000);
        _this20.createNewLine();
        yield _this20.createLines(`&nbsp; => switched to ${_this20.themeService.theme} theme`);
        _this20.themeService.switchTheme();
        _this20.createNewLine();
      } else if (value.startsWith('fullscreen')) {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading();
        _this20.fullscreen = !_this20.fullscreen;
        _this20.createNewLine();
      } else if (value.startsWith('analytics')) {
        yield _this20.createPreviousInput(value, 't-success');
        yield _this20.displayLoading(1000);
        _this20.createNewLine();
        yield _this20.createLines(['views:', ...Object.entries(_this20.ga.localPageViews).sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0).map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`), 'events:', ...Object.entries(_this20.ga.localEvents).sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0).map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`)]);
        _this20.createNewLine();
      } else if (value.startsWith('version')) {
        yield _this20.createPreviousInput(value, 't-success');
        _this20.createNewLine();
        yield _this20.createLines(`&nbsp; app => ${_this20.appVersion}`);
        yield _this20.createLines(`&nbsp; angular => ${_angular_core__WEBPACK_IMPORTED_MODULE_5__.VERSION.full}`);
        _this20.createNewLine();
      } else if (value.startsWith('ls')) {
        yield _this20.createPreviousInput(value, '');
        yield _this20.createLines(_this20.inputMap['ls']);
      } else if (value.startsWith('pwd')) {
        yield _this20.createPreviousInput(value, '');
        yield _this20.createLines(_this20.inputMap['pwd']);
      } else if (value.startsWith('df')) {
        yield _this20.createPreviousInput(value, '');
        yield _this20.createLines(_this20.inputMap['df']);
      } else if (value.startsWith('echo')) {
        yield _this20.createPreviousInput(value, '');
        yield _this20.createLines(value.split('echo')[1]);
      } else if (value.match(/(mkdir|mkfile|rm|chmod|sudo|cd|vi|cat|touch)/g)) {
        yield _this20.createPreviousInput(value, '');
        yield _this20.createLines('permission denied');
      } else {
        yield _this20.createPreviousInput(value, 't-error');
      }
    })();
  }
  static #_ = this.ɵfac = function TerminalComponent_Factory(t) {
    return new (t || TerminalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TerminalComponent,
    selectors: [["app-terminal"]],
    hostBindings: function TerminalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TerminalComponent_click_HostBindingHandler($event) {
          return ctx.click($event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"])("keyup", function TerminalComponent_keyup_HostBindingHandler($event) {
          return ctx.submitInput($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }
    },
    decls: 22,
    vars: 7,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "t-wrapper"], ["cdkDrag", "", "cdkDragBoundary", ".t-wrapper", 1, "t-container", 3, "click"], ["cdkDragHandle", "", 1, "t-menu"], [1, "t-buttons"], [3, "click"], [1, "t-button", "t-button-red"], [1, "t-button", "t-button-yellow", 3, "click"], [1, "t-button", "t-button-green", 3, "click"], [1, "t-title"], ["href", "https://github.com/vararun", "target", "_blank"], [1, "fab", "fa-github"], ["id", "terminal"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "loading", 4, "ngIf"], ["id", "anchor"], [3, "innerHTML"], ["id", "terminal-input", "autocomplete", "off"], [1, "loading"]],
    template: function TerminalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_1_listener() {
          return ctx.inputActive();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TerminalComponent_Template_a_click_4_listener() {
          return ctx.navigate("home");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_6_listener() {
          return ctx.clearTerminal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_7_listener() {
          return ctx.fullscreen = !ctx.fullscreen;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " ~/arun-varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TerminalComponent_li_15_Template, 1, 1, "li", 12)(16, TerminalComponent_li_16_Template, 3, 0, "li", 13)(17, TerminalComponent_li_17_Template, 3, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("transform", "translate3d(calc(50vw - 50%), calc(50vh - 50%), 0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lines);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.waitForInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDragHandle],
    styles: ["@charset \"UTF-8\";\n#terminal {\n  font-family: var(--code-font);\n  color: var(--primary-color);\n  background-color: var(--bg-color-60);\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 10px 25px 10px 10px;\n  overflow: scroll;\n}\n\n.t-wrapper {\n  transition: var(--transition);\n  position: fixed;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: transparent;\n}\n.t-wrapper.fullscreen {\n  background: var(--bg-color);\n  z-index: 1;\n}\n.t-wrapper.fullscreen .t-container {\n  transform: translate3d(0, 0, 0) !important;\n  margin: 0;\n  width: 99.8vw;\n  height: 100vh;\n  max-width: 100%;\n}\n.t-wrapper.fullscreen .t-container #terminal {\n  height: 90vh;\n}\n\n.t-container {\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  border: var(--terminal-border);\n  position: absolute;\n  width: 90%;\n  max-width: 800px;\n  cursor: text;\n}\n\n.t-menu {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  flex-direction: row;\n  width: 100%;\n  height: 24px;\n  background-color: #424040;\n  cursor: default;\n}\n\n.t-menu .t-button {\n  cursor: var(--cursor-type);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n\n.t-previous-input.t-success, #terminal-input, .t-view-command, .t-help-command {\n  cursor: var(--cursor-type);\n}\n\n.analytics {\n  margin-left: 20px;\n  width: 160px;\n  float: left;\n}\n\n.t-view-command, .t-help-command {\n  margin-left: 20px;\n  width: 160px;\n  float: left;\n}\n.t-view-command:before, .t-help-command:before {\n  content: \"=> \";\n}\n\n.t-button-red {\n  background: #F5544D;\n}\n\n.t-error {\n  color: #F5544D;\n}\n\n.t-button-yellow {\n  background: #FABD2F;\n}\n\n.t-warn {\n  color: #FABD2F;\n}\n\n.t-button-green {\n  background: #07bc7a;\n}\n\n.t-success {\n  color: var(--blue);\n}\n\ndiv.t-title {\n  position: fixed;\n  font-size: small;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.t-menu {\n  color: var(--white-60);\n  font-size: inherit;\n  cursor: move;\n}\n\n.t-buttons {\n  padding: 0 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n.t-text {\n  margin-left: 16px;\n}\n\n.loading:after {\n  content: \"\u280B\";\n  margin-left: 5px;\n  animation: 0.5s loading infinite;\n}\n\n#terminal-input {\n  font-family: var(--code-font);\n  color: var(--primary-color);\n  text-transform: lowercase;\n  font: inherit;\n  padding: 0;\n  border: none;\n  background: none;\n}\n#terminal-input:focus {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background-color: unset;\n}\n\n@keyframes loading {\n  0% {\n    content: \"\u280B\";\n  }\n  10% {\n    content: \"\u2819\";\n  }\n  20% {\n    content: \"\u2839\";\n  }\n  30% {\n    content: \"\u2838\";\n  }\n  40% {\n    content: \"\u283C\";\n  }\n  50% {\n    content: \"\u2834\";\n  }\n  60% {\n    content: \"\u2826\";\n  }\n  70% {\n    content: \"\u2827\";\n  }\n  80% {\n    content: \"\u2807\";\n  }\n  90% {\n    content: \"\u280F\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDSSwyQkFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0ksMENBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRlo7QUFHWTtFQUNJLFlBQUE7QUFEaEI7O0FBT0E7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLDBCQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSko7QUFLSTtFQUNJLGNBQUE7QUFIUjs7QUFPQTtFQUNJLG1CQTdGRTtBQXlGTjs7QUFPQTtFQUNJLGNBakdFO0FBNkZOOztBQU9BO0VBQ0ksbUJBcEdLO0FBZ0dUOztBQU9BO0VBQ0ksY0F4R0s7QUFvR1Q7O0FBT0E7RUFDSSxtQkEzR0k7QUF1R1I7O0FBT0E7RUFDSSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBSko7O0FBT0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7QUFKSjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBTFI7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5KO0FBT0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFMUjs7QUFTQTtFQUNJO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoidGVybWluYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkUmVkOiAjRjU1NDREO1xuJFllbGxvdzogI0ZBQkQyRjtcbiRHcmVlbjogIzA3YmM3YTtcblxuI3Rlcm1pbmFsIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItNjApO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udC13cmFwcGVyIHtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiA5OS44dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgI3Rlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyOiB2YXIoLS10ZXJtaW5hbC1ib3JkZXIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQwNDA7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udC1tZW51IC50LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnQtcHJldmlvdXMtaW5wdXQudC1zdWNjZXNzLCAjdGVybWluYWwtaW5wdXQsIC50LXZpZXctY29tbWFuZCwgLnQtaGVscC1jb21tYW5kIHtcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbn1cblxuLmFuYWx5dGljcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udC12aWV3LWNvbW1hbmQsIC50LWhlbHAtY29tbWFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJz0+ICc7XG4gICAgfVxufVxuXG4udC1idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkUmVkO1xufVxuXG4udC1lcnJvciB7XG4gICAgY29sb3I6ICRSZWQ7XG59XG5cbi50LWJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQ6ICRZZWxsb3c7XG59XG5cbi50LXdhcm4ge1xuICAgIGNvbG9yOiAkWWVsbG93O1xufVxuXG4udC1idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICRHcmVlbjtcbn1cblxuLnQtc3VjY2VzcyB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG5kaXYudC10aXRsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnQtbWVudSB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4udC1idXR0b25zIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udC10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmxvYWRpbmcge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAn4qCLJztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgYW5pbWF0aW9uOiAuNXMgbG9hZGluZyBpbmZpbml0ZTtcbiAgICB9XG59XG5cbiN0ZXJtaW5hbC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfioIsnO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICBjb250ZW50OiAn4qCZJztcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgY29udGVudDogJ+KguSc7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfioLgnO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICBjb250ZW50OiAn4qC8JztcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29udGVudDogJ+KgtCc7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfioKYnO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBjb250ZW50OiAn4qCnJztcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgY29udGVudDogJ+Kghyc7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfioI8nO1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7QUFISjtBQUtJO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0FBSFI7QUFJUTtFQUNJLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZaO0FBR1k7RUFDSSxZQUFBO0FBRGhCOztBQU9BO0VBQ0ksbUNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSwwQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpKO0FBS0k7RUFDSSxjQUFBO0FBSFI7O0FBT0E7RUFDSSxtQkE3RkU7QUF5Rk47O0FBT0E7RUFDSSxjQWpHRTtBQTZGTjs7QUFPQTtFQUNJLG1CQXBHSztBQWdHVDs7QUFPQTtFQUNJLGNBeEdLO0FBb0dUOztBQU9BO0VBQ0ksbUJBM0dJO0FBdUdSOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUpKOztBQU9BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0FBSko7O0FBUUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUxSOztBQVNBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQU9JO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBTFI7O0FBU0E7RUFDSTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtBQUNGO0FBQ0EsbzZNQUFvNk0iLCJzb3VyY2VzQ29udGVudCI6WyIkUmVkOiAjRjU1NDREO1xuJFllbGxvdzogI0ZBQkQyRjtcbiRHcmVlbjogIzA3YmM3YTtcblxuI3Rlcm1pbmFsIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItNjApO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udC13cmFwcGVyIHtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiA5OS44dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgI3Rlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyOiB2YXIoLS10ZXJtaW5hbC1ib3JkZXIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQwNDA7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udC1tZW51IC50LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnQtcHJldmlvdXMtaW5wdXQudC1zdWNjZXNzLCAjdGVybWluYWwtaW5wdXQsIC50LXZpZXctY29tbWFuZCwgLnQtaGVscC1jb21tYW5kIHtcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbn1cblxuLmFuYWx5dGljcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udC12aWV3LWNvbW1hbmQsIC50LWhlbHAtY29tbWFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJz0+ICc7XG4gICAgfVxufVxuXG4udC1idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkUmVkO1xufVxuXG4udC1lcnJvciB7XG4gICAgY29sb3I6ICRSZWQ7XG59XG5cbi50LWJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQ6ICRZZWxsb3c7XG59XG5cbi50LXdhcm4ge1xuICAgIGNvbG9yOiAkWWVsbG93O1xufVxuXG4udC1idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICRHcmVlbjtcbn1cblxuLnQtc3VjY2VzcyB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG5kaXYudC10aXRsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnQtbWVudSB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4udC1idXR0b25zIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udC10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmxvYWRpbmcge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKLJztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgYW5pbWF0aW9uOiAuNXMgbG9hZGluZyBpbmZpbml0ZTtcbiAgICB9XG59XG5cbiN0ZXJtaW5hbC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwosnO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKZJztcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDCuSc7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwrgnO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMK8JztcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDCtCc7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwqYnO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKnJztcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDChyc7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwo8nO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8490:
/*!********************************************************!*\
  !*** ./src/app/components/terminal/terminal.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory),
/* harmony export */   TerminalModule: () => (/* binding */ TerminalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);
/* harmony import */ var _terminal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal.component */ 7659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);









function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class TerminalModule {
  static #_ = this.ɵfac = function TerminalModule_Factory(t) {
    return new (t || TerminalModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TerminalModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
      }
    }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TerminalModule, {
    declarations: [_terminal_component__WEBPACK_IMPORTED_MODULE_0__.TerminalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

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
    const events = this.localEvents;
    events[action] = events[action] || 0;
    ++events[action];
    this.saveLocalEvents(events);
  }
  sendAnalyticPageView(path, title) {
    this.$gaService.pageView(path, title);
    const views = this.localPageViews;
    views[path] = views[path] || 0;
    ++views[path];
    this.saveLocalPageViews(views);
  }
  get localPageViews() {
    const obj = JSON.parse(localStorage.getItem('av-analytics-page-views') || '{}');
    return typeof obj !== 'object' ? {} : obj;
  }
  saveLocalPageViews(views) {
    localStorage.setItem('av-analytics-page-views', JSON.stringify(views));
  }
  get localEvents() {
    const obj = JSON.parse(localStorage.getItem('av-analytics-events') || '{}');
    return typeof obj !== 'object' ? {} : obj;
  }
  saveLocalEvents(events) {
    localStorage.setItem('av-analytics-events', JSON.stringify(events));
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

/***/ 6857:
/*!*************************************************!*\
  !*** ./src/app/services/theme/theme.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ThemeService {
  constructor() {
    this.theme = 'dark';
  }
  switchTheme() {
    this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
    localStorage.setItem('av-theme', this.theme);
    document.body.classList.remove('scroll-lock');
  }
  static #_ = this.ɵfac = function ThemeService_Factory(t) {
    return new (t || ThemeService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
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

module.exports = /*#__PURE__*/JSON.parse('{"name":"ng","version":"1.0.180","engines":{"node":"^18.10.0","yarn":">=1.22.0 <2","npm":"Please use yarn instead of NPM to install dependencies"},"scripts":{"prepare":"husky install","start":"nx serve","test":"nx test","lint":"nx lint","bump":"npm --no-git-tag-version version patch","deploy":"nx build && cp dist/ng/index.html dist/ng/404.html && gh-pages -d dist/ng && exit 1"},"private":true,"dependencies":{"@angular/animations":"17.3.2","@angular/cdk":"^17.3.3","@angular/common":"17.3.2","@angular/compiler":"17.3.2","@angular/core":"17.3.2","@angular/forms":"17.3.2","@angular/localize":"17.3.2","@angular/platform-browser":"17.3.2","@angular/platform-browser-dynamic":"17.3.2","@angular/router":"17.3.2","@angular/service-worker":"17.3.2","@fortawesome/fontawesome-free":"6.5.1","@ngx-translate/core":"15.0.0","@ngx-translate/http-loader":"8.0.0","aos":"2.3.4","ngx-owl-carousel-o":"^17.0.0","rxjs":"7.8.0","tslib":"2.3.0","zone.js":"0.14.3"},"devDependencies":{"@angular-devkit/build-angular":"17.3.2","@angular-devkit/core":"17.3.2","@angular-devkit/schematics":"17.3.2","@angular-eslint/eslint-plugin":"17.3.0","@angular-eslint/eslint-plugin-template":"17.3.0","@angular-eslint/template-parser":"17.3.0","@angular/cli":"17.2.0","@angular/compiler-cli":"17.3.2","@angular/language-service":"17.3.2","@angular/pwa":"17.3.2","@nx/angular":"18.2.1","@nx/cypress":"18.2.1","@nx/eslint":"18.2.1","@nx/eslint-plugin":"18.2.1","@nx/jest":"18.2.1","@nx/js":"18.2.1","@nx/web":"18.2.1","@nx/workspace":"18.2.1","@schematics/angular":"17.3.2","@swc-node/register":"1.8.0","@swc/core":"1.3.85","@swc/helpers":"0.5.2","@swc/types":"0.1.6","@types/jest":"^29.4.0","@types/node":"18.16.9","@typescript-eslint/eslint-plugin":"7.4.0","@typescript-eslint/parser":"7.4.0","cypress":"^13.6.6","eslint":"8.57.0","eslint-config-prettier":"^9.0.0","eslint-plugin-cypress":"^2.13.4","gh-pages":"^6.1.1","husky":"^8.0.0","jest":"^29.4.1","jest-environment-jsdom":"^29.4.1","jest-preset-angular":"14.0.3","ngx-google-analytics":"^14.0.1","nx":"18.2.1","prettier":"^2.6.2","ts-jest":"^29.1.0","ts-node":"10.9.1","typescript":"5.4.3"},"resolutions":{}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map