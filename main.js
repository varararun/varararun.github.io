"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 4044);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 6520);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 2948);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 5884);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 7708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);








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
      scrollPositionRestoration: 'top'
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

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 3808);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 6716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 156);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/background/background.component */ 7216);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 8480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);









class AppComponent {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.title = 'Arun Varghese';
  }
  ngOnInit() {
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.theme);
    this.titleService.setTitle("Arun Varghese | Software Engineer");
    this.metaService.addTags([{
      name: 'keywords',
      content: 'software, engineer, developer'
    }, {
      name: 'description',
      content: '#engineer #husband #traveler'
    }]);
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

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 7376);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 5368);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 7676);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 6716);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-analytics */ 4256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
















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

/***/ 7216:
/*!***********************************************************************!*\
  !*** ./src/app/components/general/background/background.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);


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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('code.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.bg-img[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-overlay-color);\n  opacity: 1;\n  transition: var(--transition);\n}\n\n.bg-animated-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  filter: var(--bg-animated-filter);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation: 20s linear 5s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 62px;\n  position: absolute;\n  left: 10vw;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation: 50s linear 4s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 56px;\n  position: absolute;\n  left: 20vw;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation: 50s linear 2s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 117px;\n  position: absolute;\n  left: 30vw;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  animation: 20s linear 5s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 139px;\n  position: absolute;\n  left: 40vw;\n  top: 100vh;\n  color: rgb(81, 57, 30);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  animation: 40s linear 2s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 149px;\n  position: absolute;\n  left: 50vw;\n  top: 100vh;\n  color: rgb(66, 62, 38);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  animation: 20s linear 5s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 117px;\n  position: absolute;\n  left: 60vw;\n  top: 100vh;\n  color: rgb(77, 33, 47);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\n  animation: 20s linear 4s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 75px;\n  position: absolute;\n  left: 70vw;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\n  animation: 20s linear 10s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 144px;\n  position: absolute;\n  left: 80vw;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(9) {\n  animation: 20s linear 4s infinite forwards _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 65px;\n  position: absolute;\n  left: 90vw;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  95% {\n    top: -10vh;\n  }\n  100% {\n    opacity: 0;\n    top: -15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUE5REE7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFpRUo7QUEvREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVMsTUFBQTtFQUNULFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFrRVI7O0FBOURBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBaUVKO0FBOURRO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFnRVo7QUF2RVE7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQXlFWjtBQWhGUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWtGWjtBQXpGUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTJGWjtBQWxHUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQW9HWjtBQTNHUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTZHWjtBQXBIUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBc0haO0FBN0hRO0VBQ0ksa0RBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBK0haO0FBdElRO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUF3SVo7O0FBbklBO0VBQ0k7SUFDSSxVQUFBO0VBc0lOO0VBbklFO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUFxSU47QUFDRiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQHVzZSAnc2FzczpsaXN0JztcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuJFBpbms6IHJnYig3NyAzMyA0Nyk7XG4kR3JlZW46IHJnYig2MyA3NyAzMSk7XG4kQmx1ZTogcmdiKDUyIDczIDc4KTtcbiRXaGl0ZTogcmdiKDk0IDk0IDkxKTtcbiRPcmFuZ2U6IHJnYig4MSA1NyAzMCk7XG4kWWVsbG93OiByZ2IoNjYgNjIgMzgpO1xuJENvbG9yczogWyRQaW5rLCAkR3JlZW4sICRCbHVlLCAkV2hpdGUsICRPcmFuZ2UsICRZZWxsb3ddO1xuXG4uYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9jb2RlLnBuZycpIG5vLXJlcGVhdDs7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwOyB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLW92ZXJsYXktY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKVxuICAgIH1cbn1cblxuLmJnLWFuaW1hdGVkLWVsZW1lbnRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGZpbHRlcjogdmFyKC0tYmctYW5pbWF0ZWQtZmlsdGVyKTtcblxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggOSB7XG4gICAgICAgIGk6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgICAgICBhbmltYXRpb246IHJhbmRvbSg0KSoxMCArIDEwK3MgbGluZWFyIHJhbmRvbSgxMCkrcyBpbmZpbml0ZSBmb3J3YXJkcyBzY3JvbGw7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIocmFuZG9tKDQpKzIrcHgpO1xuICAgICAgICAgICAgZm9udC1zaXplOiByYW5kb20oMTAwKSs1MCtweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6ICRpKjEwK3Z3O1xuICAgICAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgICAgIGNvbG9yOiBsaXN0Lm50aCgkQ29sb3JzLCAkaSU2KzEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgOTUlIHtcbiAgICAgICAgdG9wOiAtMTB2aDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAtMTV2aDtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBOURBO0VBQ0kscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBaUVKO0FBL0RJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFTLE1BQUE7RUFDVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBa0VSOztBQTlEQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQWlFSjtBQTlEUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBZ0VaO0FBdkVRO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUF5RVo7QUFoRlE7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFrRlo7QUF6RlE7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEyRlo7QUFsR1E7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFvR1o7QUEzR1E7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE2R1o7QUFwSFE7RUFDSSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQXNIWjtBQTdIUTtFQUNJLGtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQStIWjtBQXRJUTtFQUNJLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBd0laOztBQW5JQTtFQUNJO0lBQ0ksVUFBQTtFQXNJTjtFQW5JRTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBcUlOO0FBQ0Y7QUFDQSxndFFBQWd0USIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkB1c2UgJ3Nhc3M6bGlzdCc7XG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbiRQaW5rOiByZ2IoNzcgMzMgNDcpO1xuJEdyZWVuOiByZ2IoNjMgNzcgMzEpO1xuJEJsdWU6IHJnYig1MiA3MyA3OCk7XG4kV2hpdGU6IHJnYig5NCA5NCA5MSk7XG4kT3JhbmdlOiByZ2IoODEgNTcgMzApO1xuJFllbGxvdzogcmdiKDY2IDYyIDM4KTtcbiRDb2xvcnM6IFskUGluaywgJEdyZWVuLCAkQmx1ZSwgJFdoaXRlLCAkT3JhbmdlLCAkWWVsbG93XTtcblxuLmJnLWltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvY29kZS5wbmcnKSBuby1yZXBlYXQ7O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTI7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1vdmVybGF5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbilcbiAgICB9XG59XG5cbi5iZy1hbmltYXRlZC1lbGVtZW50cyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBmaWx0ZXI6IHZhcigtLWJnLWFuaW1hdGVkLWZpbHRlcik7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDkge1xuICAgICAgICBpOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByYW5kb20oNCkqMTAgKyAxMCtzIGxpbmVhciByYW5kb20oMTApK3MgaW5maW5pdGUgZm9yd2FyZHMgc2Nyb2xsO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKHJhbmRvbSg0KSsyK3B4KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogcmFuZG9tKDEwMCkrNTArcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAkaSoxMCt2dztcbiAgICAgICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgICAgICBjb2xvcjogbGlzdC5udGgoJENvbG9ycywgJGklNisxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAgIDk1JSB7XG4gICAgICAgIHRvcDogLTEwdmg7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRvcDogLTE1dmg7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8480:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



const _c0 = a0 => ({
  "show-scroll-btn": a0
});
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
    decls: 20,
    vars: 15,
    consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], ["data-aos", "fade-right", "data-aos-delay", "800", "data-aos-duration", "500"], ["target", "_blank", 3, "href"], [1, "fas", "fa-envelope"], ["data-aos", "fade-right", "data-aos-delay", "700", "data-aos-duration", "500"], [1, "fab", "fa-github"], ["data-aos", "fade-right", "data-aos-delay", "600", "data-aos-duration", "500"], [1, "fab", "fa-linkedin"], ["data-aos", "fade-right", "data-aos-delay", "500", "data-aos-duration", "500"], [1, "fab", "fa-instagram"], [1, "scroll-top-btn", 3, "ngClass", "click"], [1, "fas", "fa-chevron-up"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "ul", 0)(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4)(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_18_listener() {
          return ctx.scrollTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "Github"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "LinkedIn"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "Instagram"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.scrollPosition > 100));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  filter: blur(0.5px);\n  margin: 20px 0px;\n  transition: var(--transition);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  filter: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 0.5em 2em;\n  font-size: 20px;\n  line-height: 1;\n  position: fixed;\n  right: 10vw;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n@media (max-width: 768px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEa0JKOztBQXZFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUEwRUo7QUF4RUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQTBFUjtBQXZFSTtFQUNJLGdCQUFBO0FBeUVSO0FBdEVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQXdFUjtBQXRFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQXdFWjtBQXJFUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXVFWjtBQXRFWTtFQUNJLFlBQUE7QUF3RWhCO0FBdEVZO0VBQ0ksbUJBQUE7QUF3RWhCO0FBbkVJO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFxRVI7QUFuRVE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBcUVaOztBQWhFQTtFQUNJO0lBQ0ksYUFBQTtFQW1FTjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IC0xNnB4O1xuICAgICAgICBsZWZ0OiA1MXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDAuNXB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNjcm9sbC10b3AtYnRuIHtcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDEwdnc7XG4gICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDguNXB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICYuc2hvdy1zY3JvbGwtYnRuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEa0JKOztBQXZFQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUEwRUo7QUF4RUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQTBFUjtBQXZFSTtFQUNJLGdCQUFBO0FBeUVSO0FBdEVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQXdFUjtBQXRFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQXdFWjtBQXJFUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXVFWjtBQXRFWTtFQUNJLFlBQUE7QUF3RWhCO0FBdEVZO0VBQ0ksbUJBQUE7QUF3RWhCO0FBbkVJO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFxRVI7QUFuRVE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBcUVaOztBQWhFQTtFQUNJO0lBQ0ksYUFBQTtFQW1FTjtBQUNGO0FBRUEsNHlQQUE0eVAiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbmZvb3RlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwcHggNy41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAtMTZweDtcbiAgICAgICAgbGVmdDogNTFweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwLjVweCk7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGwtdG9wLWJ0biB7XG4gICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAxMHZ3O1xuICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4LjVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Nyb2xsLWJ0bi1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbC1idG4tYmctY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLnNob3ctc2Nyb2xsLWJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmZvb3Rlci1sZWZ0LWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5368:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralModule: () => (/* binding */ GeneralModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ 7216);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 8480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);











function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
  static #_ = this.ɵfac = function GeneralModule_Factory(t) {
    return new (t || GeneralModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GeneralModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
    exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _background_background_component__WEBPACK_IMPORTED_MODULE_1__.BackgroundComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent]
  });
})();

/***/ }),

/***/ 156:
/*!***********************************************************!*\
  !*** ./src/app/components/general/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/language/language.service */ 9928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 2584);









function MenuComponent_div_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_5_li_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r5.navigate(item_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.menuOpen = !ctx_r5.menuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_div_5_li_2_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.switchTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@HideAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Menu.NavItems"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", ctx_r0.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
  }
}
function MenuComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_8_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.navigate(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos-delay", i_r10 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r9.label.toLowerCase() === ctx_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.label);
  }
}
const _c0 = a0 => ({
  "menu-open": a0
});
const _c1 = a0 => ({
  "show-menu-bg": a0
});
class MenuComponent {
  constructor(router, languageService) {
    this.router = router;
    this.languageService = languageService;
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.fileName = '';
    this.route = '';
    this.scrollPosition = 0;
  }
  ngOnInit() {
    this.theme = document.body.getAttribute('data-theme') || 'dark';
    this.languageFormControl.setValue(this.languageService.DEFAULT);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
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
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      this.fileName = val;
      window.open(window.location.href + "/../assets/resume/" + this.fileName, "_blank");
    });
  }
  switchTheme() {
    this.theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    hostBindings: function MenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MenuComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 12,
    vars: 13,
    consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["class", "menu-overlay", "data-aos", "fade-out", 4, "ngIf"], [1, "menu-bar"], [1, "menu-bar-items", 3, "ngClass"], ["class", "menu-bar-item", "data-aos", "fade-down", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-duration", "500", "data-aos-delay", "700", 1, "menu-bar-item", "theme-toggle", 3, "click"], ["data-aos", "fade-out", 1, "menu-overlay"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "menu-items"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "overlay-theme-toggle", 3, "click"], [1, "menu-item"], [3, "click"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
          return ctx.toggleOverlayMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_10_listener() {
          return ctx.switchTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.scrollPosition > 100));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "Menu.NavItems"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", ctx.theme === "light" ? "fa-toggle-on" : "fa-toggle-off", "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 35px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  z-index: 2;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  display: block;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-45deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(45deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: var(--menu-overlay-bg-color);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  width: 100vw;\n  margin: auto;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 3em;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50px;\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 2em 1.5em 1.25em;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 560px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--box-shadow);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 10px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.menu-bar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.overlay-theme-toggle[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-left: 50px;\n  cursor: pointer;\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--primary-color);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibWVudS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQTBFSjtBQXhFSTtFQUNJLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUEwRVI7QUF4RVE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUEwRVo7QUF0RVk7RUFDSSxzQ0FBQTtBQXdFaEI7QUFyRVk7RUFDSSw0Q0FBQTtBQXVFaEI7QUFwRVk7RUFDSSxVQUFBO0FBc0VoQjtBQW5FWTtFQUNJLDJDQUFBO0FBcUVoQjs7QUE5REE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FBaUVKO0FBL0RJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FBaUVSO0FBL0RRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBaUVaO0FBL0RZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFpRWhCO0FBOURZO0VBS0ksMEJBQUE7QUE0RGhCO0FBaEVnQjtFQUNJLDJCQUFBO0FBa0VwQjtBQTdEZ0I7RUFDSSxVQUFBO0FBK0RwQjtBQTVEZ0I7RUFDSSxVQUFBO0FBOERwQjs7QUF2REE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUEwREo7QUF4REk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQTBEUjtBQXhEUTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7QUEwRFo7QUF2RFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBeURaO0FBdkRZO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF5RGhCO0FBdERZO0VBQ0ksV0FBQTtBQXdEaEI7O0FBbERBO0VBQ0ksMEJBQUE7QUFxREo7O0FBaERRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBbURaOztBQTlDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFpREo7O0FBOUNBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBaURKOztBQTdDQTtFQUNJO0lBQ0ksY0FBQTtFQWdETjtFQTlDRTtJQUNJLGFBQUE7RUFnRE47RUE5Q0U7SUFDSSxjQUFBO0VBZ0ROO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLm1lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJ0bi1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVudS1vcGVuIHtcbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYXIyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ubWVudS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LW92ZXJsYXktYmctY29sb3IpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuXG4gICAgICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnPic7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnVsbGV0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LWJhciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgcGFkZGluZzogMmVtIDEuNWVtIDEuMjVlbTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTYwcHg7XG5cbiAgICAgICAgJi5zaG93LW1lbnUtYmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1iYXItYmctY29sb3IpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtYmFyLWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudS1iYXItaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICAgIC50aGVtZS10b2dnbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ub3ZlcmxheS10aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aGVtZS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5tZW51LWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubWVudS1iYXItaXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubWVudS1vdmVybGF5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUEwRUo7QUF4RUk7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBMEVSO0FBeEVRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBMEVaO0FBdEVZO0VBQ0ksc0NBQUE7QUF3RWhCO0FBckVZO0VBQ0ksNENBQUE7QUF1RWhCO0FBcEVZO0VBQ0ksVUFBQTtBQXNFaEI7QUFuRVk7RUFDSSwyQ0FBQTtBQXFFaEI7O0FBOURBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtBQWlFSjtBQS9ESTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQWlFUjtBQS9EUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQWlFWjtBQS9EWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBaUVoQjtBQTlEWTtFQUtJLDBCQUFBO0FBNERoQjtBQWhFZ0I7RUFDSSwyQkFBQTtBQWtFcEI7QUE3RGdCO0VBQ0ksVUFBQTtBQStEcEI7QUE1RGdCO0VBQ0ksVUFBQTtBQThEcEI7O0FBdkRBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBMERKO0FBeERJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUEwRFI7QUF4RFE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdDQUFBO0FBMERaO0FBdkRRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQXlEWjtBQXZEWTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeURoQjtBQXREWTtFQUNJLFdBQUE7QUF3RGhCOztBQWxEQTtFQUNJLDBCQUFBO0FBcURKOztBQWhEUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQW1EWjs7QUE5Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBaURKOztBQTlDQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQWlESjs7QUE3Q0E7RUFDSTtJQUNJLGNBQUE7RUFnRE47RUE5Q0U7SUFDSSxhQUFBO0VBZ0ROO0VBOUNFO0lBQ0ksY0FBQTtFQWdETjtBQUNGO0FBR0Esd3pYQUF3elgiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgei1pbmRleDogMjtcblxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1idG4tY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAgICAgICAuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjEge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLm1lbnUtb3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1vdmVybGF5LWJnLWNvbG9yKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJz4nO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1bGxldC1jb2xvcik7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVudS1iYXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAxLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDU2MHB4O1xuXG4gICAgICAgICYuc2hvdy1tZW51LWJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm1lbnUtYmFyLWl0ZW0ge1xuICAgIHNwYW4ge1xuICAgICAgICAudGhlbWUtdG9nZ2xlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXktdGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtdG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubWVudS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1lbnUtYmFyLWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('HideAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 1412:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9928);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 3076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.component */ 7308);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 2584);







class AboutComponent {
  constructor(languageService, analyticsService) {
    this.languageService = languageService;
    this.analyticsService = analyticsService;
  }
  downloadResume() {
    this.languageService.translateService.get("ResumeFileName").subscribe(val => {
      window.open(window.location.href + "/../assets/resume/" + val, "_blank");
    });
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 25,
    vars: 15,
    consts: [[1, "about"], [1, "container"], [1, "section-box-about"], [1, "content"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "loader"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-delay", "100", "data-aos-duration", "500", 1, "name"], ["data-aos", "fade-right", "data-aos-delay", "200", "data-aos-duration", "500", 1, "role"], [1, "code-highlight"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-delay", "300", "data-aos-duration", "500", 1, "about-description"], [1, "mt-4", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "main-btn", 3, "click"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-loader", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 9)(14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_22_listener() {
          ctx.analyticsService.sendAnalyticEvent("download_resume", "about", "click");
          return ctx.downloadResume();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, "About.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, "About.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 9, "About.Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 11, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 13, "About.ResumeBtn"), " ");
      }
    },
    dependencies: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.about[_ngcontent-%COMP%] {\n  min-height: 35vw;\n}\n\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 175px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1.1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 40px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .section-box-about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding: 0 0px 0px 10px;\n  margin-left: -10px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 480px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n  }\n}\n@media (max-width: 1000px) {\n  .loader[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-left: -35px;\n    margin-bottom: 15vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksZ0JBQUE7QUEwRUo7O0FBdEVJO0VBQ0ksc0JBQUE7QUF5RVI7QUF2RVE7RUFDSSxpQkFBQTtBQXlFWjtBQXRFUTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQXdFWjtBQXJFUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBdUVaO0FBcEVRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFzRVo7QUFuRVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBcUVaO0FBbEVRO0VBQ0ksbUJBQUE7QUFvRVo7QUFqRVE7RUFDSSxnQkFBQTtBQW1FWjs7QUE5REE7RUFDSSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQWlFSjtBQWhFSTtFQUNJLHFDQUFBO0FBa0VSOztBQTlEQTtFQUNJLGFBQUE7QUFpRUo7O0FBOURBO0VBQ0k7SUFDSSxrQkFBQTtFQWlFTjtFQS9ERTtJQUNJLHVDQUFBO0VBaUVOO0FBQ0Y7QUE5REE7RUFDSTtJQUNJLDBCQUFBO0VBZ0VOO0VBOURFO0lBQ0ksMEJBQUE7RUFnRU47QUFDRjtBQTdEQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBK0ROO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5hYm91dCB7XG4gICAgbWluLWhlaWdodDogMzV2dztcbn1cbi5jb250YWluZXIge1xuXG4gICAgLnNlY3Rpb24tYm94LWFib3V0IHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb2RlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29kZS1oaWdobGlnaHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDAgMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcik7XG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxufVxuXG4ubG9hZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICBmcm9tLCB0byB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJvbGUge1xuICAgICAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5sb2FkZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcbiAgICB9XG59XG5cblxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxnQkFBQTtBQTBFSjs7QUF0RUk7RUFDSSxzQkFBQTtBQXlFUjtBQXZFUTtFQUNJLGlCQUFBO0FBeUVaO0FBdEVRO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBd0VaO0FBckVRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUF1RVo7QUFwRVE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQXNFWjtBQW5FUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFxRVo7QUFsRVE7RUFDSSxtQkFBQTtBQW9FWjtBQWpFUTtFQUNJLGdCQUFBO0FBbUVaOztBQTlEQTtFQUNJLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBaUVKO0FBaEVJO0VBQ0kscUNBQUE7QUFrRVI7O0FBOURBO0VBQ0ksYUFBQTtBQWlFSjs7QUE5REE7RUFDSTtJQUNJLGtCQUFBO0VBaUVOO0VBL0RFO0lBQ0ksdUNBQUE7RUFpRU47QUFDRjtBQTlEQTtFQUNJO0lBQ0ksMEJBQUE7RUFnRU47RUE5REU7SUFDSSwwQkFBQTtFQWdFTjtBQUNGO0FBN0RBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUErRE47QUFDRjtBQUNBLDQyUEFBNDJQIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uYWJvdXQge1xuICAgIG1pbi1oZWlnaHQ6IDM1dnc7XG59XG4uY29udGFpbmVyIHtcblxuICAgIC5zZWN0aW9uLWJveC1hYm91dCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgICAgIH1cblxuICAgICAgICBoMiwgaDMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29kZS1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAwIDBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuICAgIC5ibGlua2luZy1jdXJzb3Ige1xuICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuICAgIH1cbn1cblxuLmxvYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgZnJvbSwgdG8ge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAubG9hZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gICAgfVxufVxuXG5cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2948:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);


class ContactComponent {
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 13,
    vars: 12,
    consts: [[1, "contact-box"], ["data-aos", "fade-up", "data-aos-duration", "500"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "href"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "Contact.Pretitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "Email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "Contact.Btn"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.contact-box[_ngcontent-%COMP%] {\n  margin: 20vh auto 30vh;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 50px;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact-box[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  white-space: nowrap;\n  display: block;\n  color: var(--title-color);\n  font-size: 16px;\n  font-family: var(--primary-font);\n  font-weight: normal;\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxzQkFBQTtBQTBFSjtBQXhFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBMEVSO0FBdkVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBeUVSOztBQXJFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUF3RUoiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmNvbnRhY3QtYm94IHtcbiAgICBtYXJnaW46IDIwdmggYXV0byAzMHZoO1xuXG4gICAgLmNvbnRhY3QtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1wcmUtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5jb250YWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksc0JBQUE7QUEwRUo7QUF4RUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQTBFUjtBQXZFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXlFUjs7QUFyRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBd0VKO0FBRUEsZ3pNQUFnek0iLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5jb250YWN0LWJveCB7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG8gMzB2aDtcblxuICAgIC5jb250YWN0LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGFjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4440:
/*!************************************************************!*\
  !*** ./src/app/components/home/credit/credit.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditComponent: () => (/* binding */ CreditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);


class CreditComponent {
  static #_ = this.ɵfac = function CreditComponent_Factory(t) {
    return new (t || CreditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreditComponent,
    selectors: [["app-credit"]],
    decls: 8,
    vars: 6,
    consts: [[1, "credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"], ["alt", "Angular", 1, "logo", 3, "src"]],
    template: function CreditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Designed by Arun Varghese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "Repo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "Footer.Logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: [".credits[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  height: 15vh;\n  font-family: var(--code-font);\n}\n.credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  transition: var(--transition);\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: var(--accent-color);\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: -5px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUVJO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQUFSO0FBRVE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRFoiLCJmaWxlIjoiY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgIFxuICAgIC5jcmVkaXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUVRO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQUFaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURaO0FBQ0EsNHBDQUE0cEMiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGl0cyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgXG4gICAgLmNyZWRpdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5884:
/*!********************************************************************!*\
  !*** ./src/app/components/home/experience/experience.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



function ExperienceComponent_li_8_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const jobDescriptionParagraph_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ExperienceComponent_li_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r7);
  }
}
function ExperienceComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceComponent_li_8_li_11_Template, 2, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_li_8_span_13_Template, 3, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r1.Tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r2 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Tab, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", item_r1.Tab)("src", item_r1.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Location, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.Environment);
  }
}
class ExperienceComponent {
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 10,
    vars: 6,
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title", "mb-5"], [1, "e-font", "section-title"], [1, "jobs"], ["class", "job", "data-aos", "fade-up", "data-aos-duration", "500", 3, "title", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "job", 3, "title"], [1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], [1, "job-descriptions"], ["class", "job-description bullet", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-environment"], ["class", "technology", 4, "ngFor", "ngForOf"], [1, "job-description", "bullet", 3, "innerHTML"], [1, "technology"], [1, "highlight"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_li_8_Template, 14, 10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "Experience.Items"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.job[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n  transition: var(--transition);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  padding: 25px;\n  margin-bottom: 25px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0.9;\n}\n.job[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 0%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.job[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.job[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.job[_ngcontent-%COMP%]   .job-descriptions[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.job[_ngcontent-%COMP%]   .job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.job[_ngcontent-%COMP%]   .job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary-color);\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.job[_ngcontent-%COMP%]   .job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7QUEwRUo7QUF4RUk7RUFDSSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsUUFBQTtBQTBFUjtBQXZFSTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBeUVSO0FBdEVJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQXdFUjtBQXJFSTtFQUNJLG1CQUFBO0FBdUVSO0FBdEVRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBd0VaO0FBcEVJO0VBQ0ksbUJBQUE7QUFzRVI7QUFuRUk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXFFUjtBQWxFSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQW9FUjtBQWxFUTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFvRVo7QUFsRVk7RUFDSSxxQkFBQTtBQW9FaEI7QUFqRVk7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW1FaEI7QUFoRVk7RUFDSSxXQUFBO0FBa0VoQiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uam9iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5qb2ItdGltZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5qb2ItZGVzY3JpcHRpb25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmpvYi1sb2NhdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmpvYi1sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5qb2ItZW52aXJvbm1lbnQge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC50ZWNobm9sb2d5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzLjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDp2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FBMEVKO0FBeEVJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUEwRVI7QUF2RUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQXlFUjtBQXRFSTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUF3RVI7QUFyRUk7RUFDSSxtQkFBQTtBQXVFUjtBQXRFUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQXdFWjtBQXBFSTtFQUNJLG1CQUFBO0FBc0VSO0FBbkVJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFxRVI7QUFsRUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFvRVI7QUFsRVE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBb0VaO0FBbEVZO0VBQ0kscUJBQUE7QUFvRWhCO0FBakVZO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFtRWhCO0FBaEVZO0VBQ0ksV0FBQTtBQWtFaEI7QUFFQSxnL1BBQWcvUCIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIjtcblxuLmpvYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgb3BhY2l0eTogMC45O1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuam9iLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAuam9iLWRlc2NyaXB0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qb2ItbG9jYXRpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5qb2ItbG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuam9iLWVudmlyb25tZW50IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7708:
/*!********************************************************************!*\
  !*** ./src/app/components/home/highlights/highlights.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



function HighlightsComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 8);
  }
  if (rf & 2) {
    const text_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function HighlightsComponent_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", i_r6 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r5);
  }
}
function HighlightsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightsComponent_div_12_span_4_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", skill_r3.Elements);
  }
}
class HighlightsComponent {
  static #_ = this.ɵfac = function HighlightsComponent_Factory(t) {
    return new (t || HighlightsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HighlightsComponent,
    selectors: [["app-highlights"]],
    decls: 14,
    vars: 9,
    consts: [[1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "title"], [1, "section-title"], [1, "description"], ["data-aos", "fade-up", 1, "qualifications-list"], ["class", "qualifications-element bullet", "data-aos", "fade-up", "data-aos-duration", "500", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "skills", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "qualifications-element", "bullet", 3, "innerHTML"], [1, "skills"], ["data-aos", "fade-up"], ["class", "skill-element", "data-aos", "zoom-out", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-out", "data-aos-duration", "500", 1, "skill-element"], [1, "highlight"]],
    template: function HighlightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div", 4)(9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HighlightsComponent_li_10_Template, 1, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HighlightsComponent_div_12_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "Highlights.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "Highlights.Qualifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "Highlights.Skills"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 50px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 12px;\n  color: var(--accent-color);\n  font-family: var(--code-font);\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxnQkFBQTtBQTBFSjs7QUF2RUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUEwRUo7QUF4RUk7RUFDSSxjQUFBO0FBMEVSOztBQXRFQTtFQUNJLGdCQUFBO0FBeUVKO0FBdkVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQXlFUjtBQXZFUTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeUVaO0FBdEVRO0VBQ0ksV0FBQTtBQXdFWjtBQXJFUTtFQUNJLG1CQUFBO0FBdUVaIiwiZmlsZSI6ImhpZ2hsaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnF1YWxpZmljYXRpb25zLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgfVxufVxuXG4uc2tpbGxzIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuXG4gICAgLnNraWxsLWVsZW1lbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksZ0JBQUE7QUEwRUo7O0FBdkVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBMEVKO0FBeEVJO0VBQ0ksY0FBQTtBQTBFUjs7QUF0RUE7RUFDSSxnQkFBQTtBQXlFSjtBQXZFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUF5RVI7QUF2RVE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXlFWjtBQXRFUTtFQUNJLFdBQUE7QUF3RVo7QUFyRVE7RUFDSSxtQkFBQTtBQXVFWjtBQUNBLG9tTUFBb21NIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5xdWFsaWZpY2F0aW9ucy1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIC5za2lsbC1lbGVtZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4044:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 2948);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit/credit.component */ 4440);







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

/***/ 7376:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 4044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 2584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlights/highlights.component */ 7708);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 2948);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ 6520);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5531);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ 5884);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 1412);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ 7308);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit/credit.component */ 4440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4280);














function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_1__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_7__.CreditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule]
  });
})();

/***/ }),

/***/ 7308:
/*!************************************************************!*\
  !*** ./src/app/components/home/loader/loader.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

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
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.cube-loader[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  line-height: 150px;\n  text-align: center;\n  font-size: 50px;\n  transform-style: preserve-3d;\n  transition: transform 0.5s 0.1s;\n  perspective: 9999px;\n  color: #333;\n  margin: -50px 0 0 -50px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  animation: _ngcontent-%COMP%_spin 5s infinite forwards;\n}\n.cube-loader[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  background-image: url('profile-small.png') !important;\n  filter: grayscale(1) !important;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 2px 1px var(--accent-color-opaque), 0 0 1px 1px var(--accent-color-opaque);\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  background-color: var(--cube-face);\n  color: var(--cube-icon-color);\n  filter: blur(1px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-front[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translate3d(0, 0, 75px);\n}\n.cube-loader[_ngcontent-%COMP%]   .cube-face-bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translate3d(0, 0, 75px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotateY(0deg) rotateZ(0deg);\n  }\n  15% {\n    transform: rotateY(90deg) rotateZ(0deg);\n  }\n  30% {\n    transform: rotateX(45deg) rotateZ(45deg);\n  }\n  45% {\n    transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);\n  }\n  60% {\n    transform: rotateX(310deg) rotateZ(230deg);\n  }\n  75% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n  100% {\n    transform: rotateX(360deg) rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEa0JKOztBQXJFQTtFQUNJLFlBSE87RUFJUCxhQUpPO0VBS1Asa0JBTE87RUFNUCxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUF3RUo7QUF0RUk7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0VSO0FBckVJO0VBQ0ksZ0dBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBdUVSO0FBcEVJO0VBQ0ksa0NBQUE7QUFzRVI7QUFuRUk7RUFDSSxrREFBQTtBQXFFUjtBQWxFSTtFQUNJLGtEQUFBO0FBb0VSO0FBakVJO0VBQ0ksaURBQUE7QUFtRVI7QUFoRUk7RUFDSSxpREFBQTtBQWtFUjtBQS9ESTtFQUNJLGtEQUFBO0FBaUVSOztBQTdEQTtFQUNJO0lBQ0ksc0NBQUE7RUFnRU47RUE3REU7SUFDSSx1Q0FBQTtFQStETjtFQTVERTtJQUNJLHdDQUFBO0VBOEROO0VBM0RFO0lBQ0ksd0RBQUE7RUE2RE47RUExREU7SUFDSSwwQ0FBQTtFQTRETjtFQXpERTtJQUNJLDBDQUFBO0VBMkROO0VBeERFO0lBQ0ksMENBQUE7RUEwRE47QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbiRDdWJlU2l6ZTogMTUwcHg7XG5cbi5jdWJlLWxvYWRlciB7XG4gICAgd2lkdGg6ICRDdWJlU2l6ZTtcbiAgICBoZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJEN1YmVTaXplO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyAwLjFzO1xuICAgIHBlcnNwZWN0aXZlOiA5OTk5cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAtNTBweCAwIDAgLTUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gNXMgaW5maW5pdGUgZm9yd2FyZHM7XG5cbiAgICAucHJvZmlsZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtc21hbGwucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2Uge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3Itb3BhcXVlKSwgMCAwIDFweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSk7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3ViZS1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWN1YmUtaWNvbi1jb2xvcik7XG4gICAgICAgIGZpbHRlcjogYmx1cigxcHgpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtZnJvbnQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtbGVmdCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtcmlnaHQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoJEN1YmVTaXplIC8gMikpO1xuICAgIH1cblxuICAgIC5jdWJlLWZhY2UtdG9wIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWJvdHRvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIGNhbGMoY2FsYygkQ3ViZVNpemUgLyAyKSkpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cblxuICAgIDE1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgcm90YXRlWigwZGVnKTtcbiAgICB9XG5cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDVkZWcpIHJvdGF0ZVooNDVkZWcpO1xuICAgIH1cblxuICAgIDQ1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIH1cblxuICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzMTBkZWcpIHJvdGF0ZVooMjMwZGVnKTtcbiAgICB9XG5cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgICB9XG59XG5cblxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5bZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJnLWNvbG9yLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmctY29sb3ItMCk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS02MCk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBub25lO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBRGtCSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FEa0JKOztBQXJFQTtFQUNJLFlBSE87RUFJUCxhQUpPO0VBS1Asa0JBTE87RUFNUCxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUF3RUo7QUF0RUk7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0VSO0FBckVJO0VBQ0ksZ0dBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBdUVSO0FBcEVJO0VBQ0ksa0NBQUE7QUFzRVI7QUFuRUk7RUFDSSxrREFBQTtBQXFFUjtBQWxFSTtFQUNJLGtEQUFBO0FBb0VSO0FBakVJO0VBQ0ksaURBQUE7QUFtRVI7QUFoRUk7RUFDSSxpREFBQTtBQWtFUjtBQS9ESTtFQUNJLGtEQUFBO0FBaUVSOztBQTdEQTtFQUNJO0lBQ0ksc0NBQUE7RUFnRU47RUE3REU7SUFDSSx1Q0FBQTtFQStETjtFQTVERTtJQUNJLHdDQUFBO0VBOEROO0VBM0RFO0lBQ0ksd0RBQUE7RUE2RE47RUExREU7SUFDSSwwQ0FBQTtFQTRETjtFQXpERTtJQUNJLDBDQUFBO0VBMkROO0VBeERFO0lBQ0ksMENBQUE7RUEwRE47QUFDRjtBQUNBLGdoUkFBZ2hSIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4kQ3ViZVNpemU6IDE1MHB4O1xuXG4uY3ViZS1sb2FkZXIge1xuICAgIHdpZHRoOiAkQ3ViZVNpemU7XG4gICAgaGVpZ2h0OiAkQ3ViZVNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRDdWJlU2l6ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgMC4xcztcbiAgICBwZXJzcGVjdGl2ZTogOTk5OXB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogLTUwcHggMCAwIC01MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDVzIGluZmluaXRlIGZvcndhcmRzO1xuXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLXNtYWxsLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAxcHggdmFyKC0tYWNjZW50LWNvbG9yLW9wYXF1ZSksIDAgMCAxcHggMXB4IHZhcigtLWFjY2VudC1jb2xvci1vcGFxdWUpO1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1YmUtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jdWJlLWljb24tY29sb3IpO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWZyb250IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLWxlZnQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXJpZ2h0IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKCRDdWJlU2l6ZSAvIDIpKTtcbiAgICB9XG5cbiAgICAuY3ViZS1mYWNlLXRvcCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgY2FsYygkQ3ViZVNpemUgLyAyKSk7XG4gICAgfVxuXG4gICAgLmN1YmUtZmFjZS1ib3R0b20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCBjYWxjKGNhbGMoJEN1YmVTaXplIC8gMikpKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKTtcbiAgICB9XG5cbiAgICAxNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZyk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKSByb3RhdGVaKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICA0NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDkwZGVnKTtcbiAgICB9XG5cbiAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzEwZGVnKSByb3RhdGVaKDIzMGRlZyk7XG4gICAgfVxuXG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZykgcm90YXRlWigzNjBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gICAgfVxufVxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6520:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/language/language.service */ 9928);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 2584);






function ProjectsComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r5);
  }
}
function ProjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectsComponent_div_8_span_10_Template, 3, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@ExitAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r2["CompanyLogo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r2["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r2["Technologies"]);
  }
}
function ProjectsComponent_div_20_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r6["DemoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_20_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r6["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_div_20_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const technology_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r13);
  }
}
function ProjectsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_div_20_a_6_Template, 2, 1, "a", 18)(7, ProjectsComponent_div_20_a_7_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_20_span_11_Template, 3, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@ExitAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r6["Title"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r6["DemoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r6["GithubLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r6["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r6["Technologies"]);
  }
}
class ProjectsComponent {
  constructor(languageService) {
    this.languageService = languageService;
    this.personal = [];
    this.allPersonal = [];
    this.featured = [];
    this.allFeatured = [];
  }
  ngOnInit() {
    this.languageService.translateService.get("FeatureProjects.Projects").subscribe(val => {
      this.allFeatured = val;
      this.featured = this.allFeatured.slice(0, 3);
    });
    this.languageService.translateService.get("PersonalProjects.Projects").subscribe(val => {
      this.allPersonal = val;
      this.personal = this.allPersonal.slice(0, 3);
    });
  }
  toggleFeatured() {
    this.featured = this.featured.length < this.allFeatured.length ? this.allFeatured : this.allFeatured.slice(0, 3);
  }
  togglePersonal() {
    this.personal = this.personal.length < this.allPersonal.length ? this.allPersonal : this.allPersonal.slice(0, 3);
  }
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 26,
    vars: 18,
    consts: [[1, "container"], [1, "section-box"], [1, "section-title"], [1, "grid"], ["class", "grid-item project-box", "data-aos", "fade-up", "data-aos-duration", "500", 4, "ngFor", "ngForOf"], [1, "show-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "main-btn", 3, "click"], [1, ""], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "grid-item", "project-box"], [1, "header"], [1, "title"], [1, "project-img"], ["alt", "CompanyLogo", 3, "src"], [1, "description"], ["class", "skills", 4, "ngFor", "ngForOf"], [1, "skills"], [1, "highlight"], [1, "external-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "external-link-btn", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "external-link-btn", "fab", "fa-github"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_10_listener() {
          return ctx.toggleFeatured();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1)(15, "div", 7)(16, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProjectsComponent_div_20_Template, 12, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_22_listener() {
          return ctx.togglePersonal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featured);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.featured.length < ctx.allFeatured.length ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Projects.ShowMoreBtn") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "Projects.ShowLessBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, "PersonalProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.personal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.personal.length < ctx.allPersonal.length ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "Projects.ShowMoreBtn") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 16, "Projects.ShowLessBtn"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: \"DM Sans\", Montserrat, \"Helvetica Neue\", Arial, sans-serif;\n  --code-font: \"Fira Code\", \"Fira Mono\", \"Roboto Mono\", \"Lucida Console\", Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-30);\n  --code-highlight-text-color: var(--white);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n}\n\n.project-box[_ngcontent-%COMP%] {\n  height: 350px;\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  transition: var(--transition);\n  background-color: var(--bg-color-30);\n  border-radius: var(--border-radius);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 1.5rem;\n}\n.project-box[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0px;\n  content: \"\";\n  display: block;\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  background: var(--accent-color);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.project-box[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  float: left;\n  text-align: start;\n}\n.project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%], .project-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.project-box[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 10px;\n}\n.project-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  transition: var(--transition);\n}\n.project-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 17px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.75;\n  font-family: var(--code-font);\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--primary-color);\n  font-weight: 600;\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-box[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  grid-template-rows: auto;\n  gap: 15px 15px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n}\n\n.show-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n@media (max-width: 1400px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto;\n    grid-template-areas: \". .\" \". .\" \". .\";\n  }\n}\n@media (max-width: 1000px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n    grid-template-areas: \".\" \".\" \".\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QUNmQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FEa0JKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7QURrQko7O0FBdkVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTBFSjtBQXZFSTtFQUNJLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaURBQUE7RUFDQSxRQUFBO0FBeUVSO0FBdEVJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUF3RVI7QUFyRUk7RUFDSSxXQUFBO0FBdUVSO0FBdEVRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBd0VaO0FBdEVRO0VBQ0ksZUFBQTtBQXdFWjtBQW5FUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQXFFWjtBQWpFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBbUVSO0FBaEVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFrRVI7QUEvREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQWlFUjtBQS9EUTtFQUNJLHFCQUFBO0FBaUVaO0FBOURRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnRVo7QUE3RFE7RUFDSSxXQUFBO0FBK0RaOztBQTFEQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUNBO0FBNERKO0FBeERJO0VBQ0ksb0NBQUE7QUEwRFI7O0FBdERBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBeURKOztBQXREQTtFQUNJLGNBQUE7QUF5REo7O0FBdERBO0VBQ0k7SUFDSSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0NBQ0o7RUF3REY7QUFDRjtBQW5EQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSx3QkFBQTtJQUNBLGdDQUNKO0VBb0RGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG59XG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCI7XG5cbi5wcm9qZWN0LWJveCB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgfVxuICAgICAgICAuZXh0ZXJuYWwtbGlua3MsIC5wcm9qZWN0LWltZyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvamVjdC1pbWcge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG5cbiAgICAuc2tpbGxzIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6dmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBnYXA6IDE1cHggMTVweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIlxuICAgIFwiLiAuIC5cIjtcblxuICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zMCk7XG4gICAgfVxufVxuXG4uc2hvdy1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmV4dGVybmFsLWxpbmstYnRuIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLiAuXCJcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIjtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCIuXCJcbiAgICBcIi5cIlxuICAgIFwiLlwiO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stNjApO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG59XG5cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYmctY29sb3ItMDogdmFyKC0tYmctMCk7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0NKOztBQ2ZBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QURrQko7O0FDZkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBRGtCSjs7QUF2RUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBMEVKO0FBdkVJO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpREFBQTtFQUNBLFFBQUE7QUF5RVI7QUF0RUk7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQXdFUjtBQXJFSTtFQUNJLFdBQUE7QUF1RVI7QUF0RVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUF3RVo7QUF0RVE7RUFDSSxlQUFBO0FBd0VaO0FBbkVRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBcUVaO0FBakVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFtRVI7QUFoRUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWtFUjtBQS9ESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBaUVSO0FBL0RRO0VBQ0kscUJBQUE7QUFpRVo7QUE5RFE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWdFWjtBQTdEUTtFQUNJLFdBQUE7QUErRFo7O0FBMURBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQ0E7QUE0REo7QUF4REk7RUFDSSxvQ0FBQTtBQTBEUjs7QUF0REE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUF5REo7O0FBdERBO0VBQ0ksY0FBQTtBQXlESjs7QUF0REE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQ0FDSjtFQXdERjtBQUNGO0FBbkRBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0NBQ0o7RUFvREY7QUFDRjtBQUVBLDQ1U0FBNDVTIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xufVxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiO1xuXG4ucHJvamVjdC1ib3gge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dGVybmFsLWxpbmtzLCAucHJvamVjdC1pbWcge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgLnNraWxscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OnZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgZ2FwOiAxNXB4IDE1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCJcbiAgICBcIi4gLiAuXCI7XG5cbiAgICAuZ3JpZC1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIH1cbn1cblxuLnNob3ctYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5leHRlcm5hbC1saW5rLWJ0biB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcIi4gLlwiXG4gICAgXCIuIC5cIlxuICAgIFwiLiAuXCI7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiLlwiXG4gICAgXCIuXCJcbiAgICBcIi5cIjtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4taG92ZXItYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLW1lbnUtYmFyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LW92ZXJsYXktYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWN1YmUtZmFjZTogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idWxsZXQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogZ3JheXNjYWxlKDEpIHNhdHVyYXRlKDApO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLWJnLTApO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('ExitAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('.5s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(100px)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 3076:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 4256);



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

/***/ 9928:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 2584);



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

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  theme: 'dark',
  production: false,
  gaAnalyticID: "UA-88384820-1"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map