"use strict";
(self["webpackChunkng"] = self["webpackChunkng"] || []).push([["main"],{

/***/ 6234
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 343);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 1849);
/* harmony import */ var _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/projects/projects.component */ 5683);
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/contact/contact.component */ 6845);
/* harmony import */ var _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/experience/experience.component */ 2259);
/* harmony import */ var _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/highlights/highlights.component */ 8437);
/* harmony import */ var _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/terminal/terminal.component */ 8883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3044);









const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'highlights',
  component: _components_home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_5__.HighlightsComponent
}, {
  path: 'experience',
  component: _components_home_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent
}, {
  path: 'projects',
  component: _components_home_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent
}, {
  path: 'contact',
  component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: 'terminal',
  component: _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_6__.TerminalComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/'
}];

class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 5812
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 3904);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 9289);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 3880);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7076);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/analytics/analytics.service */ 413);
/* harmony import */ var _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/menu/menu.component */ 3170);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 4942);
/* harmony import */ var _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/background/background.component */ 8872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3044);











class AppComponent {
  constructor() {
    this.title = 'Arun Varghese';
    this.titleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title);
    this.metaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService);
  }
  ngOnInit() {
    document.body.setAttribute('data-theme', localStorage.getItem('av-theme') || _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.theme);
    this.titleService.setTitle("Arun Varghese | Software Engineer");
    this.metaService.addTag({
      name: 'appVersion',
      id: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.version
    });
    aos__WEBPACK_IMPORTED_MODULE_1__.init();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.ga.sendAnalyticPageView(event.urlAfterRedirects, event.urlAfterRedirects.replace('/', ''));
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-menu")(1, "router-outlet")(2, "app-footer")(3, "app-background");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_general_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _components_general_background_background_component__WEBPACK_IMPORTED_MODULE_8__.BackgroundComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 8872
/*!***********************************************************************!*\
  !*** ./src/app/components/general/background/background.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3044);



function BackgroundComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](0, "i");
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinterpolate1"]("fab ", icon_r1));
  }
}
class BackgroundComponent {
  constructor() {
    this.ICON_LIST = ['fa-github', 'fa-angular', 'fa-docker', 'fa-npm', 'fa-java', 'fa-js', 'fa-css3', 'fa-html5', 'fa-codepen'];
  }
  static {
    this.ɵfac = function BackgroundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BackgroundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BackgroundComponent,
      selectors: [["app-background"]],
      decls: 4,
      vars: 0,
      consts: [[1, "bg-animated-elements"], [3, "class"], [1, "bg-img"]],
      template: function BackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, BackgroundComponent_For_2_Template, 1, 3, "i", 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](3, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.ICON_LIST);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('code.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.bg-img[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-overlay-color);\n  opacity: 1;\n  transition: var(--transition);\n}\n\n.bg-animated-elements[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  filter: var(--bg-animated-filter);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  animation-duration: 50s;\n  animation-delay: 6s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 101px;\n  position: absolute;\n  left: 5vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  animation-duration: 30s;\n  animation-delay: 20s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 77px;\n  position: absolute;\n  left: 15vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  animation-duration: 40s;\n  animation-delay: 2s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(5px);\n  font-size: 144px;\n  position: absolute;\n  left: 25vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  animation-duration: 20s;\n  animation-delay: 1s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 115px;\n  position: absolute;\n  left: 35vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(81, 57, 30);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  animation-duration: 50s;\n  animation-delay: 16s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(3px);\n  font-size: 129px;\n  position: absolute;\n  left: 45vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(66, 62, 38);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  animation-duration: 40s;\n  animation-delay: 13s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(6px);\n  font-size: 102px;\n  position: absolute;\n  left: 55vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(77, 33, 47);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\n  animation-duration: 30s;\n  animation-delay: 18s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 140px;\n  position: absolute;\n  left: 65vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(63, 77, 31);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\n  animation-duration: 20s;\n  animation-delay: 14s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 92px;\n  position: absolute;\n  left: 75vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(52, 73, 78);\n}\n.bg-animated-elements[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(9) {\n  animation-duration: 20s;\n  animation-delay: 13s;\n  animation-timing-function: linear;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-name: _ngcontent-%COMP%_scroll;\n  filter: blur(4px);\n  font-size: 65px;\n  position: absolute;\n  left: 85vw;\n  opacity: 0;\n  top: 100vh;\n  color: rgb(94, 94, 91);\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    top: 100vh;\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  95% {\n    top: -10vh;\n  }\n  100% {\n    opacity: 0;\n    top: -15vh;\n  }\n}\n@media (max-width: 1000px) {\n  .bg-animated-elements[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtIQUFBO0FDQ0o7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7QURvQko7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QURvQko7O0FBM0VBO0VBQ0kscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBOEVKO0FBNUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBOEVSOztBQTFFQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQTZFSjtBQTFFUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBMkVaO0FBekZRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQTBGWjtBQXhHUTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBeUdaO0FBdkhRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUF3SFo7QUF0SVE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQXVJWjtBQXJKUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBc0paO0FBcEtRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFxS1o7QUFuTFE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBb0xaO0FBbE1RO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQW1NWjs7QUE5TEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VBaU1OO0VBL0xFO0lBQ0ksVUFBQTtFQWlNTjtFQS9MRTtJQUNJLFVBQUE7RUFpTU47RUE5TEU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQWdNTjtBQUNGO0FBN0xBO0VBQ0k7SUFDSSxhQUFBO0VBK0xOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLWNhcm91c2VsLW1hc2s6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwxKSA0JSwgcmdiYSgwLDAsMCwxKSA5NiUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XG59XG4iLCJAdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIiBhcyAqO1xuXG4kUGluazogcmdiKDc3IDMzIDQ3KTtcbiRHcmVlbjogcmdiKDYzIDc3IDMxKTtcbiRCbHVlOiByZ2IoNTIgNzMgNzgpO1xuJFdoaXRlOiByZ2IoOTQgOTQgOTEpO1xuJE9yYW5nZTogcmdiKDgxIDU3IDMwKTtcbiRZZWxsb3c6IHJnYig2NiA2MiAzOCk7XG4kQ29sb3JzOiBbJFBpbmssICRHcmVlbiwgJEJsdWUsICRXaGl0ZSwgJE9yYW5nZSwgJFllbGxvd107XG5cbi5iZy1pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2NvZGUucG5nJykgbm8tcmVwZWF0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTI7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1vdmVybGF5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbilcbiAgICB9XG59XG5cbi5iZy1hbmltYXRlZC1lbGVtZW50cyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBmaWx0ZXI6IHZhcigtLWJnLWFuaW1hdGVkLWZpbHRlcik7XG5cbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDkge1xuICAgICAgICBpOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBtYXRoLnJhbmRvbSg0KSoxMCArIDEwK3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IG1hdGgucmFuZG9tKDIwKStzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xuXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIobWF0aC5yYW5kb20oNCkrMitweCk7XG4gICAgICAgICAgICBmb250LXNpemU6IG1hdGgucmFuZG9tKDEwMCkrNTArcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAkaSoxMC01K3Z3O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgICAgICBjb2xvcjogbGlzdC5udGgoJENvbG9ycywgJGklNisxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAgIDAlIHtcbiAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5NSUge1xuICAgICAgICB0b3A6IC0xMHZoO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0b3A6IC0xNXZoO1xuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmJnLWFuaW1hdGVkLWVsZW1lbnRzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tbGlzdC10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBncmF5c2NhbGUoMSk7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1ibGFjKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1kaXZpZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBub25lO1xuICAgIC0tc2Nyb2xsLWluZGljYXRvci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 4942
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/theme/theme.service */ 1505);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3044);








const _c0 = a0 => ({
  "show-scroll-btn": a0
});
function FooterComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FooterComponent_For_3_Template_a_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](item_r2["Label"].toLowerCase() === "email" ? ctx_r2.ga.sendAnalyticEvent("send-email", "footer", "click") : ctx_r2.ga.sendAnalyticPageView(item_r2["Label"].toLowerCase(), item_r2["Label"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, item_r2["Link"])), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](item_r2["Icon"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2["Label"]);
  }
}
class FooterComponent {
  constructor() {
    this.scrollPosition = 0;
    this.themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService);
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService);
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
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      hostBindings: function FooterComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
            return ctx.checkScroll();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 8,
      consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "footer-left-bar"], [3, "click"], [1, "label"], [1, "scroll-top-btn", 3, "click", "ngClass"], [1, "fas", "fa-chevron-up"], ["target", "_blank", 3, "click", "href"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer")(1, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](2, FooterComponent_For_3_Template, 6, 7, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_6_listener() {
            ctx.ga.sendAnalyticEvent("change-theme", "footer", "click");
            return ctx.themeService.switchTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Switch Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_10_listener() {
            return ctx.scrollTop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "SocialIcons"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("theme-toggle fas ", ctx.themeService.theme === "light" ? "fa-toggle-on" : "fa-toggle-off"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx.scrollPosition > 100));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\nfooter[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto 0px 7.5px;\n  background-color: var(--border-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: larger;\n  color: var(--primary-color);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  transition: var(--transition);\n  cursor: var(--cursor-type);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > .theme-toggle[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  margin-left: -2.7px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-left: -5px;\n  transition: var(--transition);\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  opacity: 1;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 10px 20px;\n  font-size: larger;\n  line-height: 1;\n  position: fixed;\n  right: 10vw;\n  bottom: -15px;\n  margin-left: -48.5px;\n  width: 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition) !important;\n  color: var(--scroll-btn-color);\n  background-color: var(--scroll-btn-bg-color);\n  box-shadow: var(--box-shadow);\n  opacity: 0;\n}\nfooter[_ngcontent-%COMP%]   .scroll-top-btn.show-scroll-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(-5px);\n  backdrop-filter: blur(2px);\n}\n\n@media (max-width: 1000px) {\n  .footer-left-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwRUFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrSEFBQTtBQ0NKOztBQ2pCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FEb0JKOztBQ2pCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0FEb0JKOztBQXJGQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUF3Rko7QUF0Rkk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtBQXdGUjtBQXBGSTtFQUNJLGdCQUFBO0FBc0ZSO0FBbkZJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQXFGUjtBQW5GUTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7QUFxRlo7QUFsRlE7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUFvRlo7QUFsRlk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FBb0ZoQjtBQWpGWTtFQUNJLG1CQUFBO0FBbUZoQjtBQWhGWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBa0ZoQjtBQS9FZ0I7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFpRnBCO0FBM0VJO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBNkVSO0FBM0VRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUE2RVo7O0FBeEVBO0VBQ0k7SUFDSSxhQUFBO0VBMkVOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLWNhcm91c2VsLW1hc2s6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwxKSA0JSwgcmdiYSgwLDAsMCwxKSA5NiUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XG59XG4iLCJAdXNlIFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCIgYXMgKjtcblxuZm9vdGVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuZm9vdGVyLWxlZnQtYmFyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA3LjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cblxuICAgIC5mb290ZXItbGVmdC1iYXIgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5mb290ZXItbGVmdC1iYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICAgIGxlZnQ6IDUxcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuXG4gICAgICAgICAgICBhID4gLnRoZW1lLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMi43cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Nyb2xsLXRvcC1idG4ge1xuICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMTB2dztcbiAgICAgICAgYm90dG9tOiAtMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00OC41cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNjcm9sbC1idG4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGwtYnRuLWJnLWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgJi5zaG93LXNjcm9sbC1idG4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZm9vdGVyLWxlZnQtYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tbGlzdC10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBncmF5c2NhbGUoMSk7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1ibGFjKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1kaXZpZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBub25lO1xuICAgIC0tc2Nyb2xsLWluZGljYXRvci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 3170
/*!***********************************************************!*\
  !*** ./src/app/components/general/menu/menu.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7076);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 3815);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 343);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language/language.service */ 3959);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3044);













const _c0 = a0 => ({
  "menu-open": a0
});
const _c1 = a0 => ({
  "show-menu-bg": a0
});
function MenuComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MenuComponent_Conditional_5_For_3_Template_a_click_1_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navigate(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-aos-delay", $index_r5 * 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r4["Label"]);
  }
}
function MenuComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MenuComponent_Conditional_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleOverlayMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](2, MenuComponent_Conditional_5_For_3_Template, 3, 2, "li", 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@hide-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "Menu.NavItems"));
  }
}
function MenuComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 8)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MenuComponent_For_9_Template_span_click_1_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navigate(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-aos-delay", $index_r8 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", item_r7["Label"].toLowerCase() === ctx_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r7["Label"]);
  }
}
class MenuComponent {
  constructor() {
    this.menuOpen = false;
    this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.fileName = '';
    this.route = '';
    this.scrollPosition = 0;
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService);
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService);
  }
  ngOnInit() {
    this.languageFormControl.setValue(this.languageService.DEFAULT);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.route = event.urlAfterRedirects.split('/')[1] || 'home';
      }
    });
  }
  toggleOverlayMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
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
  static {
    this.ɵfac = function MenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      hostBindings: function MenuComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function MenuComponent_scroll_HostBindingHandler() {
            return ctx.checkScroll();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
        }
      },
      decls: 11,
      vars: 9,
      consts: [[1, "menu-btn", 3, "click"], [1, "menu-container", 3, "ngClass"], [1, "bar1"], [1, "bar2"], [1, "bar3"], [1, "menu-overlay"], [1, "menu-bar", "w-100v", "h-50"], [1, "menu-bar-items", 3, "ngClass"], ["data-aos", "fade-down", "data-aos-duration", "500", 1, "menu-bar-item"], [1, "menu-overlay", 3, "click"], [1, "menu-items"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "menu-item"], [3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_0_listener() {
            return ctx.toggleOverlayMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](5, MenuComponent_Conditional_5_Template, 5, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6)(7, "ol", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](8, MenuComponent_For_9_Template, 3, 4, "li", 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c0, ctx.menuOpen));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.menuOpen ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx.scrollPosition > 100));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 3, "Menu.NavItems"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  cursor: var(--cursor-type);\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 15px;\n  z-index: 3;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  background: var(--bg-color-60);\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius);\n  transition: var(--transition);\n  display: block;\n  cursor: pointer;\n  padding: 5px;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  width: 35px;\n  height: 2px;\n  background-color: var(--menu-btn-color);\n  margin: 6px 0;\n  transition: 0.5s ease-in-out;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: transparent;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: translate(0, 10px) rotate(-225deg);\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.menu-btn[_ngcontent-%COMP%]   .menu-container.menu-open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: translate(0, -6px) rotate(225deg);\n}\n\n.menu-overlay[_ngcontent-%COMP%] {\n  background: var(--menu-overlay-bg-color);\n  transition: var(--transition);\n  display: none;\n  position: fixed;\n  overflow: scroll;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(3px);\n  z-index: 2;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 0;\n  margin: auto;\n  padding-bottom: 100px;\n  list-style: none;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 40px;\n  cursor: var(--cursor-type);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:before {\n  content: \">\";\n  opacity: 0;\n  margin: 20px 10px;\n  color: var(--bullet-color);\n  transition: var(--transition);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n.menu-overlay[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.menu-bar[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%] {\n  padding: 30px 0 20px 20px;\n  float: left;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius);\n  position: fixed;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: var(--transition);\n  z-index: 1;\n  min-width: 560px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items.show-menu-bg[_ngcontent-%COMP%] {\n  background: var(--menu-bar-bg-color);\n  box-shadow: var(--box-shadow);\n  backdrop-filter: blur(4px);\n  border: var(--border) !important;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  color: var(--primary-color);\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  font-size: small;\n  opacity: 0.7;\n  margin: 6px;\n}\n.menu-bar[_ngcontent-%COMP%]   .menu-bar-items[_ngcontent-%COMP%]   .menu-bar-item[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n@media (max-width: 1000px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu-bar-items[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtIQUFBO0FDQ0o7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7QURvQko7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QURvQko7O0FBckZBO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXdGSjtBQXRGSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBd0ZSO0FBdEZRO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBd0ZaO0FBckZRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQXVGWjtBQXJGWTtFQUNJLHNDQUFBO0FBdUZoQjtBQXBGWTtFQUNJLDZDQUFBO0FBc0ZoQjtBQW5GWTtFQUNJLFVBQUE7QUFxRmhCO0FBbEZZO0VBQ0ksNENBQUE7QUFvRmhCOztBQTdFQTtFQUNJLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQWdGSjtBQTlFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFnRlI7QUE5RVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBZ0ZaO0FBOUVZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFnRmhCO0FBNUVnQjtFQUNJLDJCQUFBO0FBOEVwQjtBQWhGWTtFQUtJLDBCQUFBO0FBOEVoQjtBQTVFZ0I7RUFDSSxVQUFBO0FBOEVwQjtBQTNFZ0I7RUFDSSxVQUFBO0FBNkVwQjs7QUF0RUE7RUFDSSxVQUFBO0FBeUVKO0FBdkVJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUF5RVI7QUF2RVE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQXlFWjtBQXRFUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUF3RVo7QUF0RVk7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXdFaEI7QUFyRVk7RUFDSSxXQUFBO0FBdUVoQjs7QUFqRUE7RUFDSSwwQkFBQTtBQW9FSjs7QUFqRUE7RUFDSTtJQUNJLGNBQUE7RUFvRU47RUFsRUU7SUFDSSxhQUFBO0VBb0VOO0VBbEVFO0lBQ0ksY0FBQTtFQW9FTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1jYXJvdXNlbC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMSkgNCUsIHJnYmEoMCwwLDAsMSkgOTYlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xufVxuIiwiQHVzZSBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiIGFzICo7XG5cbi5tZW51LWJ0biB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB6LWluZGV4OiAzO1xuXG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItNjApO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJ0bi1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDs7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lbnUtb3BlbiB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIC5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFyMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhcjMge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpIHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5tZW51LW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcblxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnPic7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnVsbGV0LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LWJhciB7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMCAyMHB4IDIwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDU2MHB4O1xuXG4gICAgICAgICYuc2hvdy1tZW51LWJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtYmFyLWJnLWNvbG9yKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWJhci1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLm1lbnUtYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tZW51LWJhci1pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZW51LW92ZXJsYXkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IGdyYXlzY2FsZSgxKTtcbiAgICAtLXNjcm9sbC1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWJsYWMpO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWxpc3QtdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IG5vbmU7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('hide-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
          opacity: 1
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
          opacity: 0
        }))])])]
      }
    });
  }
}

/***/ },

/***/ 6165
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7571);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 5226);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/language/language.service */ 3959);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 413);
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/theme/theme.service */ 1505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3044);












function AboutComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, item_r1["Link"])), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](item_r1["Icon"]);
  }
}
class AboutComponent {
  constructor() {
    this.role = '';
    this.typingToken = 0;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService);
    this.analyticsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService);
    this.themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService);
    this.languageService.translateService.stream('About.Role').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)()).subscribe(val => {
      this.type(val);
    });
  }
  downloadResume() {
    this.languageService.translateService.get("Resume").subscribe(val => {
      window.open(val, "_blank");
    });
  }
  wait(ms, token) {
    return new Promise(resolve => {
      setTimeout(() => resolve(token === this.typingToken), ms);
    });
  }
  type(_x) {
    var _this = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (text, delay = 100) {
      const token = ++_this.typingToken;
      _this.role = '';
      _this.cdr.detectChanges();
      if (!(yield _this.wait(500, token))) {
        return;
      }
      for (const letter of text) {
        if (token !== _this.typingToken) {
          return;
        }
        _this.role += letter;
        _this.cdr.detectChanges();
        if (!(yield _this.wait(delay, token))) {
          return;
        }
      }
    }).apply(this, arguments);
  }
  dragEnded(event) {
    event.source._dragRef.reset();
  }
  static {
    this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 26,
      vars: 17,
      consts: [["id", "about", 1, "w-90v"], ["data-aos", "zoom-out", "data-aos-duration", "1000", "cdkDrag", "", "cdkDragHandle", "", 1, "profile-img", "w-160", "h-160", "mb-25", 3, "cdkDragEnded"], ["data-aos", "fade-right", "data-aos-duration", "500"], [1, "title"], [1, "about-title"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "100", 1, "name"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "200", 1, "role"], [1, "code-highlight", 3, "click"], [1, "blinking-cursor"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "300", 1, "about-description"], [1, "mxw-500", 3, "innerHTML"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "400", 1, "social-icons"], ["data-aos", "fade-right", "data-aos-duration", "500", "data-aos-delay", "500", "data-aos-offset", "-50", 1, "download-resume"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "main-btn", 3, "click"], ["target", "_blank", 3, "href"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cdkDragEnded", function AboutComponent_Template_div_cdkDragEnded_1_listener($event) {
            return ctx.dragEnded($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4)(7, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h3", 6)(11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AboutComponent_Template_span_click_11_listener() {
            return ctx.themeService.switchTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "|");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ul", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](19, AboutComponent_For_20_Template, 4, 6, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 12)(23, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_23_listener() {
            ctx.analyticsService.sendAnalyticEvent("view-resume", "about", "click");
            return ctx.downloadResume();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("transform", "translate3d(0, 0, 0)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, "About.Pretitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 9, "About.Name"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 11, "About.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 13, "SocialIcons"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 15, "About.ResumeBtn"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n#about[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  background: url('profile-small.png') no-repeat;\n  transform-origin: center;\n  background-size: cover;\n  filter: var(--profile-img-filters);\n  cursor: move;\n  position: relative;\n  z-index: 1;\n  transition: 0.5s ease-out;\n}\n#about[_ngcontent-%COMP%]   .profile-img.cdk-drag-dragging[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  backdrop-filter: invert(1) grayscale(1);\n  background: rgba(0, 0, 0, 0.5);\n}\n#about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 175px;\n}\n#about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  margin: 0 0 20px 3px;\n  font-family: var(--code-font);\n  font-size: inherit;\n}\n#about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  line-height: 1.1;\n  margin: 0;\n}\n#about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: var(--primary-color);\n  font-family: var(--primary-font);\n}\n#about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 45px;\n  color: var(--primary-color);\n  font-family: var(--code-font);\n}\n#about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: none;\n  margin: 30px 0 40px;\n  font-size: x-large;\n}\n#about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 20px 0 0;\n}\n#about[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n#about[_ngcontent-%COMP%]   .download-resume[_ngcontent-%COMP%] {\n  margin: 48px 0;\n}\n\n.code-highlight[_ngcontent-%COMP%] {\n  background: var(--code-highlight-color);\n  padding-left: 5px;\n  color: var(--code-highlight-text-color);\n}\n.code-highlight[_ngcontent-%COMP%]   .blinking-cursor[_ngcontent-%COMP%] {\n  animation: 1s _ngcontent-%COMP%_blink step-end infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: var(--code-highlight-text-color);\n  }\n}\n@media (max-width: 1000px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n  .role[_ngcontent-%COMP%] {\n    font-size: 27px !important;\n  }\n}\n@media (max-width: 1000px) {\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0hBQUE7QUNDSjs7QUNqQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtBRG9CSjs7QUNqQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBRG9CSjs7QUFwRkk7RUFDSSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUF1RlI7QUFyRlE7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsOEJBQUE7QUF1Rlo7QUFuRkk7RUFDSSxpQkFBQTtBQXFGUjtBQWxGSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBb0ZSO0FBakZJO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FBbUZSO0FBaEZJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFrRlI7QUEvRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBaUZSO0FBOUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFnRlI7QUE5RVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFnRlo7QUE5RVk7RUFDSSxjQUFBO0FBZ0ZoQjtBQTNFSTtFQUNJLGNBQUE7QUE2RVI7O0FBekVBO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBNEVKO0FBMUVJO0VBQ0kscUNBQUE7QUE0RVI7O0FBeEVBO0VBQ0k7SUFDSSxrQkFBQTtFQTJFTjtFQXpFRTtJQUNJLHVDQUFBO0VBMkVOO0FBQ0Y7QUF4RUE7RUFDSTtJQUNJLDBCQUFBO0VBMEVOO0VBeEVFO0lBQ0ksMEJBQUE7RUEwRU47QUFDRjtBQXZFQTtFQUNJO0lBQ0kseUJBQUE7RUF5RU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tY2Fyb3VzZWwtbWFzazogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDEpIDQlLCByZ2JhKDAsMCwwLDEpIDk2JSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbn1cbiIsIkB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIiBhcyAqO1xuXG4jYWJvdXQge1xuICAgIC5wcm9maWxlLWltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUvcHJvZmlsZS1zbWFsbC5wbmcnKSBuby1yZXBlYXQ7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgZmlsdGVyOiB2YXIoLS1wcm9maWxlLWltZy1maWx0ZXJzKTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLW91dDtcblxuICAgICAgICAmLmNkay1kcmFnLWRyYWdnaW5nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogaW52ZXJ0KDEpIGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIC41KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB9XG5cbiAgICBoMiwgaDMge1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMzBweCAwIDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXJlc3VtZSB7XG4gICAgICAgIG1hcmdpbjogNDhweCAwO1xuICAgIH1cbn1cblxuLmNvZGUtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2RlLWhpZ2hsaWdodC1jb2xvcik7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuXG4gICAgLmJsaW5raW5nLWN1cnNvciB7XG4gICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICBmcm9tLCB0byB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgZm9udC1zaXplOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuXG5cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IGdyYXlzY2FsZSgxKTtcbiAgICAtLXNjcm9sbC1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWJsYWMpO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWxpc3QtdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IG5vbmU7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 6845
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3044);






class ContactComponent {
  constructor() {
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService);
  }
  static {
    this.ɵfac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 13,
      vars: 13,
      consts: [[1, "contact", "mnh-40v", "mt-300"], ["data-aos", "fade-up", "data-aos-duration", "500"], [1, "contact-pre-title"], [1, "contact-title"], ["data-aos", "fade-up", "data-aos-delay", "100", "data-aos-duration", "500", 1, "contact-btn"], ["data-aos", "fade-up", "data-aos-duration", "500", "target", "_blank", 1, "main-btn", 3, "click", "href"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](5, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](8, "div", 4)(9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomListener"]("click", function ContactComponent_Template_a_click_9_listener() {
            return ctx.ga.sendAnalyticEvent("send-email", "contact", "click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "Contact.Pretitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, "Contact.Title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomProperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate1"]("mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, "Email")), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, "Contact.Btn"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 50px;\n  color: var(--primary-color);\n  margin: auto;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  margin: 10px 0 25px;\n  width: 100%;\n  display: block;\n  color: var(--title-color);\n  font-family: var(--primary-font);\n  justify-content: center;\n  text-align: center;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n\n@media (max-width: 1000px) {\n  .social-icons[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtIQUFBO0FDQ0o7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7QURvQko7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QURvQko7O0FBcEZJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF1RlI7QUFwRkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBc0ZSOztBQWxGQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFxRko7O0FBbEZBO0VBQ0k7SUFDSSx5QkFBQTtFQXFGTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiAnRE0gU2FucycsIE1vbnRzZXJyYXQsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC0tY29kZS1mb250OiAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgTW9ub3NwYWNlO1xuICAgIC0tYmxhY2s6IGJsYWNrO1xuICAgIC0tYmxhY2stMzA6IHJnYigwIDAgMCAvIDMwJSk7XG4gICAgLS1ibGFjay02MDogcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLXdoaXRlOiB3aGl0ZTtcbiAgICAtLXdoaXRlLTMwOiByZ2IoMjU1IDI1NSAyNTUgLyAzMCUpO1xuICAgIC0td2hpdGUtNjA6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XG4gICAgLS13aGl0ZS05MDogcmdiKDI1NSAyNTUgMjU1IC8gOTAlKTtcbiAgICAtLWJsdWU6ICMwODllZTU7XG4gICAgLS1ibHVlLTYwOiAjMDg5ZWU1Njk7XG4gICAgLS1iZy0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLWRpdmlkZXI6IFwiL1wiO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLS1ib3gtc2hhZG93OiAwIDAgNXB4IDBweCByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0tY3Vyc29yLXR5cGU6IHBvaW50ZXI7XG4gICAgLS1jYXJvdXNlbC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMSkgNCUsIHJnYmEoMCwwLDAsMSkgOTYlLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xufVxuIiwiQHVzZSBcInNyYy9hc3NldHMvc3R5bGVzL3RoZW1lc1wiIGFzICo7XG5cbi5jb250YWN0IHtcbiAgICAuY29udGFjdC10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIC5jb250YWN0LXByZS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5jb250YWN0LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IGdyYXlzY2FsZSgxKTtcbiAgICAtLXNjcm9sbC1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWJsYWMpO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWxpc3QtdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IG5vbmU7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 2457
/*!************************************************************!*\
  !*** ./src/app/components/home/credit/credit.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditComponent: () => (/* binding */ CreditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3044);






class CreditComponent {
  constructor() {
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService);
  }
  static {
    this.ɵfac = function CreditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreditComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CreditComponent,
      selectors: [["app-credit"]],
      decls: 7,
      vars: 4,
      consts: [[1, "credits"], [1, "credit"], ["rel", "nofollow noopener noreferrer", "target", "_blank", 3, "click", "href"], [1, "fab", "fa-angular"]],
      template: function CreditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Designed by Arun Varghese");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](3, "div")(4, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomListener"]("click", function CreditComponent_Template_a_click_4_listener() {
            return ctx.ga.sendAnalyticEvent("view-source", "credits", "click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](6, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomProperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "Repo")), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: [".credits[_ngcontent-%COMP%] {\n  font-size: small;\n  line-height: 1;\n  text-align: center;\n  margin-bottom: 20px;\n  font-family: var(--code-font);\n}\n.credits[_ngcontent-%COMP%]   .credit[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: larger;\n  transition: var(--transition);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHMge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG5cbiAgICAuY3JlZGl0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 2259
/*!********************************************************************!*\
  !*** ./src/app/components/home/experience/experience.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language/language.service */ 3959);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 3815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3044);








function ExperienceComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ExperienceComponent_Conditional_6_For_2_Template_li_click_0_listener() {
      const tag_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollTo(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.selectedTag === tag_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-aos-delay", $index_r4 * 100 + 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, tag_r2), " ");
  }
}
function ExperienceComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, ExperienceComponent_Conditional_6_For_2_Template, 3, 6, "li", 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.tags);
  }
}
function ExperienceComponent_Conditional_7_For_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const technology_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](technology_r8);
  }
}
function ExperienceComponent_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ExperienceComponent_Conditional_7_For_3_Template_div_click_0_listener() {
      const $index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollTo(ctx_r2.tags[$index_r7 + 1] || ctx_r2.tags[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](1, "div", 12)(2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](7, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](14, ExperienceComponent_Conditional_7_For_3_For_15_Template, 2, 1, "span", 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("inactive", ctx_r2.selectedTag !== item_r9["Category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate"](item_r9["Category"]))("title", item_r9["Tab"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r9["Tab"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("alt", item_r9["Tab"])("src", item_r9["Logo"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r9["Location"], " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9["Date"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r9["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.getEnvironment(item_r9));
  }
}
function ExperienceComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("scroll", function ExperienceComponent_Conditional_7_Template_div_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](2, ExperienceComponent_Conditional_7_For_3_Template, 16, 12, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.all);
  }
}
function ExperienceComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ExperienceComponent_Conditional_8_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollTo(ctx_r2.tags[1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, ">>");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@exit-animation", undefined);
  }
}
class ExperienceComponent {
  constructor() {
    this.selectedTag = '';
    this.tags = [];
    this.all = [];
    this.scrolled = false;
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService);
  }
  ngOnInit() {
    this.languageService.translateService.get('Experience.Items').subscribe(val => {
      this.all = val;
      this.tags = [...new Set(this.all.map(experience => experience['Category']))];
      this.selectedTag = this.tags[0];
    });
  }
  scrollTo(tag) {
    document.getElementById(tag)?.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'start'
    });
  }
  onScroll(event) {
    if (this.selectedTag === this.tags[1]) {
      this.scrolled = true;
    }
    this.selectedTag = this.tags[Math.floor(event.target.scrollLeft / (event.target.getBoundingClientRect().width - 30))] || this.tags[0];
  }
  getEnvironment(item) {
    return item['Environment'] || [];
  }
  static {
    this.ɵfac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExperienceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      hostBindings: function ExperienceComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function ExperienceComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          });
        }
      },
      decls: 9,
      vars: 6,
      consts: [[1, "content"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title"], [1, "section-title"], [1, "experience-categories", "mb-30", "ml-15"], ["id", "experience-carousel", 1, "carousel", "mt-30"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "scroll-indicator"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "active"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["id", "experience-carousel", 1, "carousel", "mt-30", 3, "scroll"], [1, "carousel-item-spacer"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "carousel-item", 3, "id", "title", "inactive"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "carousel-item", 3, "click", "id", "title"], [1, "w-100p"], [1, "job-tag"], [1, "job-logo", 3, "alt", "src"], [1, "job-location"], [1, "job-time"], [1, "job-description"], [1, "job-environment"], [1, "technology"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "scroll-indicator", 3, "click"], [1, "fas", "fa-mouse"], [1, "right"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, ExperienceComponent_Conditional_6_Template, 3, 0, "ul", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, ExperienceComponent_Conditional_7_Template, 5, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, ExperienceComponent_Conditional_8_Template, 5, 1, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, "Experience.Title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.all.length ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.all.length ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.scrolled ? 8 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n#experience-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  backdrop-filter: blur(5px);\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90%;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 375px;\n  margin: 5px;\n  padding: 0 15px 10px 15px;\n}\n\n.job-tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.job-time[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  margin-bottom: 30px;\n}\n\n.job-description[_ngcontent-%COMP%] {\n  font-size: smaller;\n  margin-bottom: 20px;\n}\n\n.job-location[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.collapse[_ngcontent-%COMP%] {\n  transition: var(--transition);\n  height: 30px;\n  overflow: hidden;\n}\n.collapse.open[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.job-logo[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-left: 5px;\n  height: 25px;\n}\n\n.job-environment[_ngcontent-%COMP%] {\n  font-size: x-small;\n  list-style: none;\n  padding: 0;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  color: var(--list-text-color);\n  font-family: var(--code-font);\n  display: inline-block;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--divider-color);\n  opacity: 0.7;\n  margin: 0 5px;\n}\n.job-environment[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.experience-categories[_ngcontent-%COMP%] {\n  display: none;\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.experience-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  opacity: 0.7;\n  margin: 5px;\n}\n.experience-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n@media (max-width: 1000px) {\n  .experience-categories[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtIQUFBO0FDQ0o7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7QURvQko7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QURvQko7O0FBbkZJO0VFSEEsb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFRkVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQXlGUjs7QUFyRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBd0ZKOztBQXJGQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUF3Rko7O0FBckZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXdGSjs7QUFyRkE7RUFDSSxtQkFBQTtBQXdGSjs7QUFyRkE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXdGSjtBQXRGSTtFQUNJLFlBQUE7QUF3RlI7O0FBcEZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF1Rko7O0FBcEZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF1Rko7QUFyRkk7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUF1RlI7QUFyRlE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF1Rlo7QUFwRlE7RUFDSSxXQUFBO0FBc0ZaOztBQWpGQTtFQUNJLGFBQUE7QUFvRko7QUFsRkk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQW9GUjtBQWxGUTtFQUNJLDBCQUFBO0FBb0ZaO0FBakZRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBbUZaO0FBaEZRO0VBQ0ksV0FBQTtBQWtGWjs7QUE3RUE7RUFDSTtJQUNJLGNBQUE7RUFnRk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tY2Fyb3VzZWwtbWFzazogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDEpIDQlLCByZ2JhKDAsMCwwLDEpIDk2JSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbn1cbiIsIkB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIiBhcyAqO1xuQHVzZSBcInNyYy9hc3NldHMvc3R5bGVzL21peGluc1wiIGFzICo7XG5cbiNleHBlcmllbmNlLWNhcm91c2VsIHtcbiAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIEBpbmNsdWRlIGNhcmQ7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1iYXNpczogOTAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBoZWlnaHQ6IDM3NXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4IDEwcHggMTVweDtcbiAgICB9XG59XG5cbi5qb2ItdGFnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmpvYi10aW1lIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uam9iLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmpvYi1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbGxhcHNlIHtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYub3BlbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi5qb2ItbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmpvYi1lbnZpcm9ubWVudCB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC50ZWNobm9sb2d5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWxpc3QtdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZXhwZXJpZW5jZS1jYXRlZ29yaWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmV4cGVyaWVuY2UtY2F0ZWdvcmllcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IGdyYXlzY2FsZSgxKTtcbiAgICAtLXNjcm9sbC1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWJsYWMpO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWxpc3QtdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IG5vbmU7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4iLCJAbWl4aW4gY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('exit-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 1
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0
        }))])])]
      }
    });
  }
}

/***/ },

/***/ 8437
/*!********************************************************************!*\
  !*** ./src/app/components/home/highlights/highlights.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsComponent: () => (/* binding */ HighlightsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3044);




function HighlightsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](0, "li", 6);
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function HighlightsComponent_For_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](s_r2);
  }
}
function HighlightsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 7)(1, "div")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](4, HighlightsComponent_For_14_For_5_Template, 2, 1, "span", 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r3["Category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](skill_r3["Elements"]);
  }
}
class HighlightsComponent {
  static {
    this.ɵfac = function HighlightsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighlightsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HighlightsComponent,
      selectors: [["app-highlights"]],
      decls: 16,
      vars: 7,
      consts: [["id", "highlights", 1, "w-90v", "mnh-600", "mb-160"], [1, "content"], ["data-aos", "fade-up", "data-aos-duration", "500", 1, "title"], [1, "section-title"], [1, "highlights"], ["data-aos", "fade-up", 1, "qualifications-list"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "qualifications-element", "bullet", 3, "innerHTML"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "skills", "mb-15"], [1, "skill-element"]],
      template: function HighlightsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](6, "div", 4)(7, "div")(8, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](9, HighlightsComponent_For_10_Template, 1, 1, "li", 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](13, HighlightsComponent_For_14_Template, 6, 1, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, "Highlights.Title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 3, "Highlights.Qualifications"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, "Highlights.Skills"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n.highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 20px;\n}\n\n.highlight-categories[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 25px;\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.highlight-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  opacity: 0.7;\n  margin: 5px;\n}\n.highlight-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.qualifications-list[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-left: 15px;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.qualifications-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n.skills[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.skills[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  color: var(--list-text-color);\n  font-family: var(--code-font);\n  position: relative;\n  font-size: smaller;\n  display: inline-block;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--divider-color);\n  opacity: 0.7;\n  margin: 5px;\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n.skills[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n@media (max-width: 1000px) {\n  .qualifications-list[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .highlight-categories[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .bullet[_ngcontent-%COMP%]::marker {\n    content: \"\";\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL190aGVtZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBFQUFBO0VBQ0EseUZBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtIQUFBO0FDQ0o7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7QURvQko7O0FDakJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QURvQko7O0FBcEZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUF1Rko7O0FBcEZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdUZKO0FBckZJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUF1RlI7QUFyRlE7RUFDSSwwQkFBQTtBQXVGWjtBQXBGUTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXNGWjtBQW5GUTtFQUNJLFdBQUE7QUFxRlo7O0FBaEZBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBbUZKO0FBakZJO0VBQ0ksY0FBQTtBQW1GUjtBQWpGUTtFQUNJLGFBQUE7QUFtRlo7O0FBOUVBO0VBQ0ksZUFBQTtBQWlGSjtBQS9FSTtFQUNJLGFBQUE7QUFpRlI7QUE5RUk7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBZ0ZSO0FBOUVRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZ0ZaO0FBN0VRO0VBQ0ksV0FBQTtBQStFWjtBQTVFUTtFQUNJLG1CQUFBO0FBOEVaOztBQXpFQTtFQUNJO0lBQ0ksY0FBQTtFQTRFTjtFQTFFRTtJQUNJLGNBQUE7RUE0RU47RUExRUU7SUFDSSxXQUFBO0VBNEVOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6ICdETSBTYW5zJywgTW9udHNlcnJhdCwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLS1jb2RlLWZvbnQ6ICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBNb25vc3BhY2U7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay0zMDogcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAtLWJsYWNrLTYwOiByZ2IoMCAwIDAgLyA2MCUpO1xuICAgIC0td2hpdGU6IHdoaXRlO1xuICAgIC0td2hpdGUtMzA6IHJnYigyNTUgMjU1IDI1NSAvIDMwJSk7XG4gICAgLS13aGl0ZS02MDogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcbiAgICAtLXdoaXRlLTkwOiByZ2IoMjU1IDI1NSAyNTUgLyA5MCUpO1xuICAgIC0tYmx1ZTogIzA4OWVlNTtcbiAgICAtLWJsdWUtNjA6ICMwODllZTU2OTtcbiAgICAtLWJnLTA6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC0tZGl2aWRlcjogXCIvXCI7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS1jdXJzb3ItdHlwZTogcG9pbnRlcjtcbiAgICAtLWNhcm91c2VsLW1hc2s6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwxKSA0JSwgcmdiYSgwLDAsMCwxKSA5NiUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XG59XG4iLCJAdXNlIFwic3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWVzXCIgYXMgKjtcbkB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy9taXhpbnNcIiBhcyAqO1xuXG4uaGlnaGxpZ2h0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmhpZ2hsaWdodC1jYXRlZ29yaWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB2YXIoLS1kaXZpZGVyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucXVhbGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2tpbGxzIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAuc2tpbGwtZWxlbWVudCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXN0LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tY29kZS1mb250KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLWRpdmlkZXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAucXVhbGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhdGVnb3JpZXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmJ1bGxldDo6bWFya2VyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgfVxufVxuXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbltkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHdoaXRlO1xuICAgIC0tYmctY29sb3ItMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iZy1jb2xvci0zMDogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tYmctY29sb3ItNjA6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJnLW92ZXJsYXktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tdGVybWluYWwtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1zY3JvbGwtYnRuLWJnLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1tZW51LWJ0bi1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tbGlzdC10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0td2hpdGUtOTApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tYW5pbWF0ZWQtaWNvbi1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tYmctYW5pbWF0ZWQtZmlsdGVyOiBncmF5c2NhbGUoMSkgc2F0dXJhdGUoMCk7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBncmF5c2NhbGUoMSk7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1ibGFjKTtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgICAtLXByaW1hcnktY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWFjY2VudC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hY2NlbnQtY29sb3Itb3BhcXVlOiB2YXIoLS1ibHVlLTYwKTtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1iZy1jb2xvci0wOiB2YXIoLS1iZy0wKTtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0tYmctMCk7XG4gICAgLS10aXRsZS1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLS1zY3JvbGwtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1kaXZpZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYnRuLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0wKTtcbiAgICAtLWJ0bi1ob3Zlci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1iYXItYmctY29sb3I6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLW1lbnUtb3ZlcmxheS1iZy1jb2xvcjogdmFyKC0tYmxhY2stNjApO1xuICAgIC0tY3ViZS1mYWNlOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICAtLWJ1bGxldC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IG5vbmU7XG4gICAgLS1wcm9maWxlLWltZy1maWx0ZXJzOiBub25lO1xuICAgIC0tc2Nyb2xsLWluZGljYXRvci1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 1849
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6165);
/* harmony import */ var _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlights/highlights.component */ 8437);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ 2259);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 5683);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 6845);
/* harmony import */ var _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit/credit.component */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3044);








class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-about")(1, "app-highlights")(2, "app-experience")(3, "app-projects")(4, "app-contact")(5, "app-credit");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _highlights_highlights_component__WEBPACK_IMPORTED_MODULE_2__.HighlightsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _credit_credit_component__WEBPACK_IMPORTED_MODULE_6__.CreditComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 5683
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language/language.service */ 3959);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 3815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3044);








function ProjectsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ProjectsComponent_For_8_Template_li_click_0_listener() {
      const tag_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.filterProjects(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.isSelectedTag(tag_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-aos-delay", $index_r4 * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, tag_r2 || "All"), " ");
  }
}
function ProjectsComponent_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](0, "img", 13);
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("src", project_r7["CompanyLogo"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_For_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("href", project_r7["GithubLink"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("href", project_r7["Link"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProjectsComponent_For_13_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "span", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const technology_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](technology_r8);
  }
}
function ProjectsComponent_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, ProjectsComponent_For_13_Conditional_11_For_2_Template, 3, 1, "span", 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.getTech(project_r7));
  }
}
function ProjectsComponent_For_13_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](0, "i");
  }
  if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](icon_r9);
  }
}
function ProjectsComponent_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, ProjectsComponent_For_13_Conditional_12_For_2_Template, 1, 2, "i", 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.getTechIcons(project_r7));
  }
}
function ProjectsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ProjectsComponent_For_13_Template_div_click_0_listener() {
      const $index_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scroll($index_r6, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](1, "div")(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, ProjectsComponent_For_13_Conditional_6_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, ProjectsComponent_For_13_Conditional_7_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, ProjectsComponent_For_13_Conditional_8_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](11, ProjectsComponent_For_13_Conditional_11_Template, 3, 0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](12, ProjectsComponent_For_13_Conditional_12_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("project-", $index_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@exit-animation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r7["Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](project_r7["CompanyLogo"] ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](project_r7["GithubLink"] ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](project_r7["Link"] ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", project_r7["Description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](project_r7["Tech"] ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](project_r7["TechIcons"] ? 12 : -1);
  }
}
function ProjectsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ProjectsComponent_Conditional_15_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scroll(0, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, ">>");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@exit-animation", undefined);
  }
}
class ProjectsComponent {
  constructor() {
    this.filtered = [];
    this.all = [];
    this.selectedTag = '';
    this.scrolled = false;
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService);
  }
  ngOnInit() {
    this.languageService.translateService.get("Projects.Projects").subscribe(val => {
      this.all = Array.isArray(val) ? val : [];
      this.filterProjects('featured');
    });
  }
  filterProjects(tag) {
    const normalizedTag = this.normalizeTag(tag);
    if (this.selectedTag === normalizedTag) {
      return;
    }
    this.selectedTag = normalizedTag;
    this.filtered = this.all.filter(project => {
      const tags = this.getTags(project);
      if (!this.selectedTag) {
        return true;
      }
      return tags.some(tagItem => this.normalizeTag(tagItem) === this.selectedTag);
    });
  }
  isSelectedTag(tag) {
    return this.selectedTag === this.normalizeTag(tag);
  }
  normalizeTag(tag) {
    return typeof tag === 'string' ? tag.trim().toLowerCase() : '';
  }
  getTags(project) {
    const tags = project['Tags'];
    return Array.isArray(tags) ? tags.filter(tag => typeof tag === 'string') : [];
  }
  getTech(project) {
    const tech = project['Tech'];
    return Array.isArray(tech) ? tech.filter(item => typeof item === 'string') : [];
  }
  getTechIcons(project) {
    const icons = project['TechIcons'];
    return Array.isArray(icons) ? icons.filter(item => typeof item === 'string') : [];
  }
  scrollTo(index) {
    this.scrolled = true;
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
  onScroll(event) {
    if (event.target.scrollLeft > event.target.getBoundingClientRect().width - 50) {
      this.scrolled = true;
    }
  }
  static {
    this.ɵfac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      hostBindings: function ProjectsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function ProjectsComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          });
        }
      },
      decls: 16,
      vars: 6,
      consts: [["data-aos", "fade-up", "data-aos-duration", "500"], [1, "section-title"], [1, "project-categories", "mb-30", "ml-15"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "active"], ["id", "projects-carousel", 1, "carousel", 3, "scroll"], [1, "carousel-item-spacer"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-25", 1, "carousel-item", 3, "id"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "scroll-indicator"], ["data-aos", "fade-up", "data-aos-duration", "500", 3, "click"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-25", 1, "carousel-item", 3, "click", "id"], [1, "header"], [1, "title"], [1, "external-links"], ["alt", "CompanyLogo", 1, "project-img", 3, "src"], ["target", "_blank", 3, "href"], [1, "description"], [1, "tech-icons"], ["id", "ghLink", 1, "external-link-btn", "fab", "fa-github"], [1, "external-link-btn", "fas", "fa-external-link-alt"], [1, "tech"], [1, "highlight"], [3, "class"], ["data-aos", "fade-up", "data-aos-duration", "500", "data-aos-offset", "-50", 1, "scroll-indicator", 3, "click"], [1, "fas", "fa-mouse"], [1, "right"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "section")(1, "div", 0)(2, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "div")(6, "ul", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](7, ProjectsComponent_For_8_Template, 3, 6, "li", 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("scroll", function ProjectsComponent_Template_div_scroll_10_listener($event) {
            return ctx.onScroll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](12, ProjectsComponent_For_13_Template, 13, 10, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](14, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](15, ProjectsComponent_Conditional_15_Template, 5, 1, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "Projects.Title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, "Projects.Tags"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.filtered);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.filtered.length && !ctx.scrolled ? 15 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-font: 'DM Sans', Montserrat, 'Helvetica Neue', Arial, sans-serif;\n  --code-font: 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, Monospace;\n  --black: black;\n  --black-30: rgb(0 0 0 / 30%);\n  --black-60: rgb(0 0 0 / 60%);\n  --white: white;\n  --white-30: rgb(255 255 255 / 30%);\n  --white-60: rgb(255 255 255 / 60%);\n  --white-90: rgb(255 255 255 / 90%);\n  --blue: #089ee5;\n  --blue-60: #089ee569;\n  --bg-0: transparent;\n  --border-radius: 3px;\n  --divider: \"/\";\n  --transition: all 0.2s ease-in-out;\n  --box-shadow: 0 0 5px 0px rgb(0 0 0 / 60%);\n  --cursor-type: pointer;\n  --carousel-mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, rgba(0,0,0,0) 100%);\n}\n\n[data-theme=light][_ngcontent-%COMP%] {\n  --primary-color: var(--black);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: white;\n  --bg-color-0: transparent;\n  --bg-color-30: var(--white-30);\n  --bg-color-60: var(--white-60);\n  --bg-overlay-color: var(--white);\n  --title-color: var(--black);\n  --btn-text-color: var(--black);\n  --terminal-border: 1px solid var(--black-30);\n  --border-color: var(--black-60);\n  --border: 1px solid var(--black-60);\n  --scroll-btn-color: var(--black);\n  --scroll-btn-bg-color: var(--white-30);\n  --menu-btn-color: var(--black);\n  --code-highlight-color: var(--black);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--blue);\n  --list-text-color: var(--black);\n  --btn-bg-color: var(--white);\n  --btn-hover-bg-color: var(--white);\n  --menu-bar-bg-color: var(--white-30);\n  --menu-overlay-bg-color: var(--white-90);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white);\n  --bullet-color: var(--black);\n  --animated-icon-color: var(--black-30);\n  --bg-animated-filter: grayscale(1) saturate(0);\n  --profile-img-filters: grayscale(1);\n  --scroll-indicator-color: var(--blac);\n}\n\n[data-theme=dark][_ngcontent-%COMP%] {\n  --primary-color: var(--white);\n  --accent-color: var(--blue);\n  --accent-color-opaque: var(--blue-60);\n  --bg-color: var(--black);\n  --bg-color-0: var(--bg-0);\n  --bg-color-30: var(--black-30);\n  --bg-color-60: var(--black-60);\n  --bg-overlay-color: var(--bg-0);\n  --title-color: var(--blue);\n  --btn-text-color: var(--blue);\n  --terminal-border: 1px solid var(--white-30);\n  --border-color: var(--blue);\n  --border: 1px solid var(--blue);\n  --scroll-btn-color: var(--blue);\n  --scroll-btn-bg-color: var(--black-30);\n  --menu-btn-color: var(--blue);\n  --code-highlight-color: var(--black-60);\n  --code-highlight-text-color: var(--white);\n  --divider-color: var(--white);\n  --list-text-color: var(--blue);\n  --btn-bg-color: var(--bg-color-0);\n  --btn-hover-bg-color: var(--black-30);\n  --menu-bar-bg-color: var(--black-30);\n  --menu-overlay-bg-color: var(--black-60);\n  --cube-face: var(--black-60);\n  --cube-icon-color: var(--white-60);\n  --bullet-color: var(--blue);\n  --animated-icon-color: var(--white-30);\n  --bg-animated-filter: none;\n  --profile-img-filters: none;\n  --scroll-indicator-color: var(--white);\n}\n\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  cursor: var(--cursor-type);\n  transition: var(--transition);\n}\n.project-categories[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: var(--divider);\n  color: var(--accent-color);\n  opacity: 0.7;\n  margin: 5px;\n}\n.project-categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n\n.show-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\n\n.external-link-btn[_ngcontent-%COMP%] {\n  margin: 5px 10px;\n}\n\n#projects-carousel[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-color-30);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  backdrop-filter: blur(5px);\n  height: 350px;\n  backdrop-filter: blur(5px);\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-basis: 45%;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  float: left;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .external-links[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: large;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-bottom: 10px;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: x-large;\n  transition: var(--transition);\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  float: left;\n  font-size: larger;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n#projects-carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n  line-height: 1.75;\n  font-size: small;\n  font-family: var(--code-font);\n}\n\n@keyframes _ngcontent-%COMP%_scroll-right {\n  0% {\n    transform: translateX(0);\n    filter: blur(2px);\n    opacity: 0;\n  }\n  50% {\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(65px);\n    filter: blur(2px);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX3RoZW1lcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEVBQUE7RUFDQSx5RkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0hBQUE7QUNDSjs7QUNqQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtBRG9CSjs7QUNqQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBRG9CSjs7QUFsRkk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQXFGUjtBQW5GUTtFQUNJLDBCQUFBO0FBcUZaO0FBbEZRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBb0ZaO0FBakZRO0VBQ0ksV0FBQTtBQW1GWjs7QUE5RUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFpRko7O0FBOUVBO0VBQ0ksZ0JBQUE7QUFpRko7O0FBOUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBaUZKO0FBL0VJO0VFdkNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUZzQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBbUZSO0FBakZRO0VBQ0ksV0FBQTtBQW1GWjtBQWpGWTtFQUNJLFdBQUE7QUFtRmhCO0FBaEZZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBa0ZoQjtBQTlFUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWdGWjtBQTdFUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQStFWjtBQTVFUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQThFWjtBQTNFUTtFQUNJLGtCQUFBO0FBNkVaO0FBM0VZO0VBQ0ksWUFBQTtBQTZFaEI7QUF6RVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUEyRVo7O0FBdEVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQXlFTjtFQXZFRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VBeUVOO0VBdkVFO0lBQ0ksMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUF5RU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLXByaW1hcnktZm9udDogJ0RNIFNhbnMnLCBNb250c2VycmF0LCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAtLWNvZGUtZm9udDogJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLTMwOiByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIC0tYmxhY2stNjA6IHJnYigwIDAgMCAvIDYwJSk7XG4gICAgLS13aGl0ZTogd2hpdGU7XG4gICAgLS13aGl0ZS0zMDogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcbiAgICAtLXdoaXRlLTYwOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xuICAgIC0td2hpdGUtOTA6IHJnYigyNTUgMjU1IDI1NSAvIDkwJSk7XG4gICAgLS1ibHVlOiAjMDg5ZWU1O1xuICAgIC0tYmx1ZS02MDogIzA4OWVlNTY5O1xuICAgIC0tYmctMDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1kaXZpZGVyOiBcIi9cIjtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC0tYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiKDAgMCAwIC8gNjAlKTtcbiAgICAtLWN1cnNvci10eXBlOiBwb2ludGVyO1xuICAgIC0tY2Fyb3VzZWwtbWFzazogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDEpIDQlLCByZ2JhKDAsMCwwLDEpIDk2JSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbn1cbiIsIkB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy90aGVtZXNcIiBhcyAqO1xuQHVzZSBcInNyYy9hc3NldHMvc3R5bGVzL21peGluc1wiIGFzICo7XG5cbi5wcm9qZWN0LWNhdGVnb3JpZXMge1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGN1cnNvcjogdmFyKC0tY3Vyc29yLXR5cGUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogdmFyKC0tZGl2aWRlcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNob3ctYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5leHRlcm5hbC1saW5rLWJ0biB7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbn1cblxuI3Byb2plY3RzLWNhcm91c2VsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICBAaW5jbHVkZSBjYXJkO1xuXG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXh0ZXJuYWwtbGlua3Mge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2plY3QtaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGVjaC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZWNoIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbC1yaWdodCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIGZpbHRlcjogYmx1cigycHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjVweCk7XG4gICAgICAgIGZpbHRlcjogYmx1cigycHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuW2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hY2NlbnQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tYWNjZW50LWNvbG9yLW9wYXF1ZTogdmFyKC0tYmx1ZS02MCk7XG4gICAgLS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1iZy1jb2xvci0wOiB0cmFuc3BhcmVudDtcbiAgICAtLWJnLWNvbG9yLTMwOiB2YXIoLS13aGl0ZS0zMCk7XG4gICAgLS1iZy1jb2xvci02MDogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYmctb3ZlcmxheS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tdGl0bGUtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS10ZXJtaW5hbC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLXNjcm9sbC1idG4tYmctY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLW1lbnUtYnRuLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1jb2RlLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIC0tY29kZS1oaWdobGlnaHQtdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tZGl2aWRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1saXN0LXRleHQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJ0bi1iZy1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0td2hpdGUtMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS13aGl0ZS05MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgLS1hbmltYXRlZC1pY29uLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1iZy1hbmltYXRlZC1maWx0ZXI6IGdyYXlzY2FsZSgxKSBzYXR1cmF0ZSgwKTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IGdyYXlzY2FsZSgxKTtcbiAgICAtLXNjcm9sbC1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWJsYWMpO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAgIC0tcHJpbWFyeS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFjY2VudC1jb2xvci1vcGFxdWU6IHZhcigtLWJsdWUtNjApO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAtLWJnLWNvbG9yLTA6IHZhcigtLWJnLTApO1xuICAgIC0tYmctY29sb3ItMzA6IHZhcigtLWJsYWNrLTMwKTtcbiAgICAtLWJnLWNvbG9yLTYwOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1iZy1vdmVybGF5LWNvbG9yOiB2YXIoLS1iZy0wKTtcbiAgICAtLXRpdGxlLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWJ0bi10ZXh0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLXRlcm1pbmFsLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAtLXNjcm9sbC1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tc2Nyb2xsLWJ0bi1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1idG4tY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIC0tY29kZS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWNvZGUtaGlnaGxpZ2h0LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWRpdmlkZXItY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWxpc3QtdGV4dC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgLS1idG4tYmctY29sb3I6IHZhcigtLWJnLWNvbG9yLTApO1xuICAgIC0tYnRuLWhvdmVyLWJnLWNvbG9yOiB2YXIoLS1ibGFjay0zMCk7XG4gICAgLS1tZW51LWJhci1iZy1jb2xvcjogdmFyKC0tYmxhY2stMzApO1xuICAgIC0tbWVudS1vdmVybGF5LWJnLWNvbG9yOiB2YXIoLS1ibGFjay02MCk7XG4gICAgLS1jdWJlLWZhY2U6IHZhcigtLWJsYWNrLTYwKTtcbiAgICAtLWN1YmUtaWNvbi1jb2xvcjogdmFyKC0td2hpdGUtNjApO1xuICAgIC0tYnVsbGV0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAtLWFuaW1hdGVkLWljb24tY29sb3I6IHZhcigtLXdoaXRlLTMwKTtcbiAgICAtLWJnLWFuaW1hdGVkLWZpbHRlcjogbm9uZTtcbiAgICAtLXByb2ZpbGUtaW1nLWZpbHRlcnM6IG5vbmU7XG4gICAgLS1zY3JvbGwtaW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4iLCJAbWl4aW4gY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMzApO1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('exit-animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 1
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0
        }))])])]
      }
    });
  }
}

/***/ },

/***/ 8883
/*!***********************************************************!*\
  !*** ./src/app/components/terminal/terminal.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TerminalComponent: () => (/* binding */ TerminalComponent)
/* harmony export */ });
/* harmony import */ var _Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 2573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 343);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7076);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/language/language.service */ 3959);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ 3880);
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/theme/theme.service */ 1505);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3044);













function TerminalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", line_r1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
  }
}
function TerminalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function TerminalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
class TerminalComponent {
  constructor() {
    this.lines = [];
    this.previousInputList = [];
    this.waitForInput = false;
    this.fullscreen = false;
    this.loading = true;
    this.cursor = 0;
    this.inputMap = {};
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.languageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_language_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService);
    this.themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_10__.ThemeService);
    this.ga = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_11__.AnalyticsService);
    this.wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  click(target) {
    var _this2 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const element = target instanceof HTMLElement ? target : null;
      if (!element) return;
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
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.createNewLine();
      yield _this5.createLines([`last login: ${new Date().toLocaleString()}`, 'in /users/arun-varghese', 'executing ~/avarghese.sh', `version: ${_this5.appVersion}`, '<br>', 'type <span class="t-success">help</span> to view available commands']);
      _this5.createNewLine();
      yield _this5.inputActive();
    })();
  }
  displayLoading() {
    var _this6 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delay = 500) {
      _this6.loading = true;
      _this6.cdr.detectChanges();
      yield _this6.wait(100);
      _this6.anchor?.scrollIntoView();
      yield _this6.wait(delay);
      _this6.loading = false;
      _this6.cdr.detectChanges();
    }).apply(this, arguments);
  }
  clearInput() {
    if (this.input?.value) {
      this.input.value = '';
    }
    this.waitForInput = false;
    this.cdr.detectChanges();
  }
  inputActive() {
    var _this7 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.loading) {
        return;
      }
      _this7.waitForInput = true;
      _this7.cdr.detectChanges();
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
    this.cdr.detectChanges();
  }
  addLine(_x) {
    var _this8 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (line, delay = 50) {
      yield _this8.wait(delay);
      _this8.lines.push(line);
      _this8.cdr.detectChanges();
      _this8.anchor?.scrollIntoView();
    }).apply(this, arguments);
  }
  createLines(input) {
    var _this9 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lines = typeof input === 'string' ? [input] : input;
      for (const line of lines) {
        yield _this9.addLine(line);
      }
    })();
  }
  createHelpLine(commands) {
    var _this0 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const command of commands) {
        yield _this0.addLine(`<span class='t-help-command'>${command[0]}</span>${command[1] || ''}`);
      }
    })();
  }
  createContactLines(lines) {
    var _this1 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const line of lines) {
        yield _this1.addLine(`<a href='${line[0]}' target='_blank'">&nbsp; <i class='${line[1]} white'></i>&nbsp;${line[2]}</a>`);
      }
    })();
  }
  createNavigationLine(views) {
    var _this10 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const view of views) {
        yield _this10.addLine(`<span class='t-view-command'>view ${view}</span>`);
      }
    })();
  }
  createPreviousInput(_x2, _x3) {
    var _this11 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (command, level, delay = 50) {
      yield _this11.wait(delay);
      _this11.clearInput();
      _this11.lines.push(`$ <span class='${level} t-previous-input'>${command}</span>`);
      _this11.cdr.detectChanges();
      _this11.anchor?.scrollIntoView();
    }).apply(this, arguments);
  }
  navigate(item) {
    this.router.navigate([item]);
  }
  clearTerminal() {
    var _this12 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.clearInput();
      _this12.lines = [];
      _this12.cdr.detectChanges();
      yield _this12.createLines('type <span class="t-success">help</span> to view available commands');
      _this12.createNewLine();
      yield _this12.inputActive();
    })();
  }
  get appVersion() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.version;
  }
  displayHelp() {
    var _this13 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.createPreviousInput('help', 't-success');
      yield _this13.displayLoading();
      _this13.createNewLine();
      yield _this13.createLines(_this13.inputMap['help.prompt']);
      yield _this13.createHelpLine(_this13.inputMap['help.commands']);
      _this13.createNewLine();
    })();
  }
  displayMore() {
    var _this14 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this14.createPreviousInput('more', 't-success');
      yield _this14.displayLoading();
      _this14.createNewLine();
      yield _this14.createLines(_this14.inputMap['more.prompt']);
      yield _this14.createHelpLine(_this14.inputMap['more.commands']);
      _this14.createNewLine();
    })();
  }
  displayView() {
    var _this15 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.createPreviousInput('view', 't-success');
      yield _this15.displayLoading();
      _this15.createNewLine();
      yield _this15.createLines(_this15.inputMap['view.prompt']);
      yield _this15.createNavigationLine(_this15.inputMap['view.pages']);
      _this15.createNewLine();
    })();
  }
  displayAbout() {
    var _this16 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this16.createPreviousInput('about', 't-success');
      yield _this16.displayLoading();
      _this16.createNewLine();
      yield _this16.createLines(_this16.inputMap['about']);
      _this16.createNewLine();
    })();
  }
  displayContact() {
    var _this17 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this17.createPreviousInput('contact', 't-success');
      yield _this17.displayLoading();
      _this17.createNewLine();
      yield _this17.createContactLines(_this17.inputMap['contact']);
      _this17.createNewLine();
    })();
  }
  checkInputValue(value) {
    var _this18 = this;
    return (0,_Users_avarghese_Developer_portfolio_varararun_github_io_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value.match(/help/g)) {
        yield _this18.displayHelp();
      } else if (value === 'more') {
        yield _this18.displayMore();
      } else if (value === 'about') {
        yield _this18.displayAbout();
      } else if (value === 'view') {
        yield _this18.displayView();
      } else if (value === 'view highlights') {
        yield _this18.displayLoading();
        _this18.navigate('highlights');
      } else if (value === 'view experience') {
        yield _this18.displayLoading();
        _this18.navigate('experience');
      } else if (value === 'view projects') {
        yield _this18.displayLoading();
        _this18.navigate('projects');
      } else if (value === 'view resume') {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading();
        _this18.languageService.translateService.get("Resume").subscribe(val => {
          window.open(val, "_blank");
        });
        _this18.createNewLine();
      } else if (value === 'source') {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading();
        _this18.languageService.translateService.get("Repo").subscribe(val => {
          window.open(val, "_blank");
        });
        _this18.createNewLine();
      } else if (value === 'contact') {
        yield _this18.displayContact();
      } else if (value.startsWith('exit')) {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading();
        _this18.navigate('home');
      } else if (value.startsWith('clear')) {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.clearTerminal();
      } else if (value === '') {
        yield _this18.createPreviousInput(value, '');
      } else if (value.startsWith('theme')) {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading(1000);
        _this18.createNewLine();
        yield _this18.createLines(`&nbsp; => switched to ${_this18.themeService.theme} theme`);
        _this18.themeService.switchTheme();
        _this18.createNewLine();
      } else if (value.startsWith('fullscreen')) {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading();
        _this18.fullscreen = !_this18.fullscreen;
        _this18.createNewLine();
      } else if (value.startsWith('analytics')) {
        yield _this18.createPreviousInput(value, 't-success');
        yield _this18.displayLoading(1000);
        _this18.createNewLine();
        yield _this18.createLines(['views:', ...Object.entries(_this18.ga.localPageViews).sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0).map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`), 'events:', ...Object.entries(_this18.ga.localEvents).sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0).map(entry => `<span class="analytics">${entry[0]}</span> => ${entry[1] || 0}`)]);
        _this18.createNewLine();
      } else if (value.startsWith('version')) {
        yield _this18.createPreviousInput(value, 't-success');
        _this18.createNewLine();
        yield _this18.createLines(`&nbsp; app => ${_this18.appVersion}`);
        yield _this18.createLines(`&nbsp; angular => ${_angular_core__WEBPACK_IMPORTED_MODULE_2__.VERSION.full}`);
        _this18.createNewLine();
      } else if (value.startsWith('ls')) {
        yield _this18.createPreviousInput(value, '');
        yield _this18.createLines(_this18.inputMap['ls']);
      } else if (value.startsWith('pwd')) {
        yield _this18.createPreviousInput(value, '');
        yield _this18.createLines(_this18.inputMap['pwd']);
      } else if (value.startsWith('df')) {
        yield _this18.createPreviousInput(value, '');
        yield _this18.createLines(_this18.inputMap['df']);
      } else if (value.startsWith('echo ')) {
        yield _this18.createPreviousInput(value, '');
        yield _this18.createLines(value.split('echo')[1]);
      } else if (value.match(/(mkdir|mkfile|rm|chmod|sudo|cd|vi|cat|touch)/g)) {
        yield _this18.createPreviousInput(value, '');
        yield _this18.createLines('permission denied');
      } else {
        yield _this18.createPreviousInput(value, 't-error');
      }
    })();
  }
  static {
    this.ɵfac = function TerminalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TerminalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: TerminalComponent,
      selectors: [["app-terminal"]],
      hostBindings: function TerminalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TerminalComponent_click_HostBindingHandler($event) {
            return ctx.click($event.target);
          }, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"])("keyup", function TerminalComponent_keyup_HostBindingHandler($event) {
            return ctx.submitInput($event);
          }, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
        }
      },
      decls: 23,
      vars: 6,
      consts: [["data-aos", "fade-up", "data-aos-duration", "500", 1, "t-wrapper"], ["cdkDrag", "", "cdkDragBoundary", ".t-wrapper", 1, "t-container", 3, "click"], ["cdkDragHandle", "", 1, "t-menu"], [1, "t-buttons"], [3, "click"], [1, "t-button", "t-button-red"], [1, "t-button", "t-button-yellow", 3, "click"], [1, "t-button", "t-button-green", 3, "click"], [1, "t-title"], ["href", "https://github.com/vararun", "target", "_blank"], [1, "fab", "fa-github"], ["id", "terminal"], [3, "innerHTML"], [1, "loading"], ["id", "anchor"], ["id", "terminal-input", "autocomplete", "off"]],
      template: function TerminalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_1_listener() {
            return ctx.inputActive();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TerminalComponent_Template_a_click_4_listener() {
            return ctx.navigate("home");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_6_listener() {
            return ctx.clearTerminal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TerminalComponent_Template_div_click_7_listener() {
            return ctx.fullscreen = !ctx.fullscreen;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " ~/arun-varghese");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 11)(13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](15, TerminalComponent_For_16_Template, 1, 1, "li", 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](17, TerminalComponent_Conditional_17_Template, 3, 0, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditionalCreate"](18, TerminalComponent_Conditional_18_Template, 3, 0, "li", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("transform", "translate3d(calc(50vw - 50%), calc(50vh - 50%), 0)");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx.lines);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.waitForInput ? 17 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.loading ? 18 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDragHandle],
      styles: ["@charset \"UTF-8\";\n#terminal {\n  font-family: var(--code-font);\n  color: var(--primary-color);\n  background-color: var(--bg-color-60);\n  display: flex;\n  flex-direction: column;\n  font-size: small;\n  height: 50vh;\n  padding: 10px 25px 10px 10px;\n  overflow: scroll;\n}\n\n.t-wrapper {\n  transition: var(--transition);\n  position: fixed;\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: transparent;\n  overflow-y: scroll;\n}\n.t-wrapper.fullscreen {\n  background: var(--bg-color);\n  z-index: 1;\n}\n.t-wrapper.fullscreen .t-container {\n  transform: translate3d(0, 0, 0) !important;\n  margin: 0;\n  width: 99.8vw;\n  height: 100vh;\n  max-width: 100%;\n}\n.t-wrapper.fullscreen .t-container #terminal {\n  height: 90vh;\n}\n\n.t-container {\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  border: var(--terminal-border);\n  position: absolute;\n  width: 90%;\n  max-width: 800px;\n  cursor: text;\n}\n\n.t-menu {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  flex-direction: row;\n  width: 100%;\n  height: 24px;\n  background-color: #424040;\n  cursor: default;\n}\n\n.t-menu .t-button {\n  cursor: var(--cursor-type);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n\n.t-previous-input.t-success, #terminal-input, .t-view-command, .t-help-command {\n  cursor: var(--cursor-type);\n}\n\n.analytics {\n  margin-left: 20px;\n  width: 160px;\n  float: left;\n}\n\n.t-view-command, .t-help-command {\n  margin-left: 20px;\n  width: 160px;\n  float: left;\n}\n.t-view-command:before, .t-help-command:before {\n  content: \"=> \";\n}\n\n.t-button-red {\n  background: #F5544D;\n}\n\n.t-error {\n  color: #F5544D;\n}\n\n.t-button-yellow {\n  background: #FABD2F;\n}\n\n.t-warn {\n  color: #FABD2F;\n}\n\n.t-button-green {\n  background: #07bc7a;\n}\n\n.t-success {\n  color: var(--blue);\n}\n\ndiv.t-title {\n  position: fixed;\n  font-size: small;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.t-menu {\n  color: var(--white-60);\n  font-size: inherit;\n  cursor: move;\n}\n\n.t-buttons {\n  padding: 0 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n.t-text {\n  margin-left: 16px;\n}\n\n.loading:after {\n  content: \"\u280B\";\n  margin-left: 5px;\n  animation: 0.5s loading infinite;\n}\n\n#terminal-input {\n  font-family: var(--code-font);\n  color: var(--primary-color);\n  text-transform: lowercase;\n  font: inherit;\n  padding: 0;\n  border: none;\n  background: none;\n}\n#terminal-input:focus {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background-color: unset;\n}\n\n@keyframes loading {\n  0% {\n    content: \"\u280B\";\n  }\n  10% {\n    content: \"\u2819\";\n  }\n  20% {\n    content: \"\u2839\";\n  }\n  30% {\n    content: \"\u2838\";\n  }\n  40% {\n    content: \"\u283C\";\n  }\n  50% {\n    content: \"\u2834\";\n  }\n  60% {\n    content: \"\u2826\";\n  }\n  70% {\n    content: \"\u2827\";\n  }\n  80% {\n    content: \"\u2807\";\n  }\n  90% {\n    content: \"\u280F\";\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNJLDJCQUFBO0VBQ0EsVUFBQTtBQUhSO0FBSVE7RUFDSSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGWjtBQUdZO0VBQ0ksWUFBQTtBQURoQjs7QUFPQTtFQUNJLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksMEJBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKSjtBQUtJO0VBQ0ksY0FBQTtBQUhSOztBQU9BO0VBQ0ksbUJBN0ZFO0FBeUZOOztBQU9BO0VBQ0ksY0FqR0U7QUE2Rk47O0FBT0E7RUFDSSxtQkFwR0s7QUFnR1Q7O0FBT0E7RUFDSSxjQXhHSztBQW9HVDs7QUFPQTtFQUNJLG1CQTNHSTtBQXVHUjs7QUFPQTtFQUNJLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtBQUpKOztBQVFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFMUjs7QUFTQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTko7QUFPSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUxSOztBQVNBO0VBQ0k7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47RUFRRTtJQUNJLFlBQUE7RUFOTjtFQVFFO0lBQ0ksWUFBQTtFQU5OO0VBUUU7SUFDSSxZQUFBO0VBTk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiRSZWQ6ICNGNTU0NEQ7XG4kWWVsbG93OiAjRkFCRDJGO1xuJEdyZWVuOiAjMDdiYzdhO1xuXG4jdGVybWluYWwge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1jb2RlLWZvbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci02MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiA5OS44dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgI3Rlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gICAgYm9yZGVyOiB2YXIoLS10ZXJtaW5hbC1ib3JkZXIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQwNDA7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udC1tZW51IC50LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiB2YXIoLS1jdXJzb3ItdHlwZSk7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnQtcHJldmlvdXMtaW5wdXQudC1zdWNjZXNzLCAjdGVybWluYWwtaW5wdXQsIC50LXZpZXctY29tbWFuZCwgLnQtaGVscC1jb21tYW5kIHtcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvci10eXBlKTtcbn1cblxuLmFuYWx5dGljcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udC12aWV3LWNvbW1hbmQsIC50LWhlbHAtY29tbWFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJz0+ICc7XG4gICAgfVxufVxuXG4udC1idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkUmVkO1xufVxuXG4udC1lcnJvciB7XG4gICAgY29sb3I6ICRSZWQ7XG59XG5cbi50LWJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQ6ICRZZWxsb3c7XG59XG5cbi50LXdhcm4ge1xuICAgIGNvbG9yOiAkWWVsbG93O1xufVxuXG4udC1idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICRHcmVlbjtcbn1cblxuLnQtc3VjY2VzcyB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG5kaXYudC10aXRsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnQtbWVudSB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLTYwKTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4udC1idXR0b25zIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udC10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmxvYWRpbmcge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKLJztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgYW5pbWF0aW9uOiAuNXMgbG9hZGluZyBpbmZpbml0ZTtcbiAgICB9XG59XG5cbiN0ZXJtaW5hbC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvZGUtZm9udCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwosnO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKZJztcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDCuSc7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwrgnO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMK8JztcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDCtCc7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwqYnO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBjb250ZW50OiAnw6LCoMKnJztcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgY29udGVudDogJ8OiwqDChyc7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKgwo8nO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 413
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 5777);



class AnalyticsService {
  constructor() {
    this.$gaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService);
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
  static {
    this.ɵfac = function AnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyticsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3959
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1376);



class LanguageService {
  constructor() {
    this.DEFAULT = "en";
    this.translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService);
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LanguageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 1505
/*!*************************************************!*\
  !*** ./src/app/services/theme/theme.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9937);

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
  static {
    this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3880
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 8805
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 343);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8210);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3284);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-analytics */ 5777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9937);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1376);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 3583);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/app.component */ 5812);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/app-routing.module */ 6234);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./environments/environment */ 3880);













function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.provideRouter)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_10__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_2__.withInMemoryScrolling)({
    scrollPositionRestoration: 'top'
  })), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(ngx_google_analytics__WEBPACK_IMPORTED_MODULE_5__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.gaAnalyticID), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
    }
  }))]
}).catch(err => console.error(err));

/***/ },

/***/ 8330
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"ng","version":"1.0.64","engines":{"node":">=20.0.0","pnpm":">=8.0.0","npm":"Please use pnpm instead of NPM to install dependencies"},"scripts":{"prepare":"husky install","start":"nx serve","test":"nx test","lint":"nx lint","bump":"npm --no-git-tag-version version patch","deploy":"nx build && cp dist/ng/index.html dist/ng/404.html && gh-pages -d dist/ng && exit 1"},"private":true,"dependencies":{"@angular/animations":"21.1.5","@angular/cdk":"21.1.5","@angular/common":"21.1.5","@angular/compiler":"21.1.5","@angular/core":"21.1.5","@angular/forms":"21.1.5","@angular/localize":"21.1.5","@angular/platform-browser":"21.1.5","@angular/platform-browser-dynamic":"21.1.5","@angular/router":"21.1.5","@angular/service-worker":"21.1.5","@fortawesome/fontawesome-free":"6.5.1","@ngx-translate/core":"15.0.0","@ngx-translate/http-loader":"8.0.0","aos":"2.3.4","ngx-owl-carousel-o":"^17.0.0","rxjs":"7.8.0","tslib":"2.3.0","zone.js":"0.16.1"},"devDependencies":{"@angular-devkit/build-angular":"21.1.4","@angular-devkit/core":"21.1.4","@angular-devkit/schematics":"21.1.4","@angular-eslint/eslint-plugin":"21.2.0","@angular-eslint/eslint-plugin-template":"21.2.0","@angular-eslint/template-parser":"21.2.0","@angular/cli":"21.1.4","@angular/compiler-cli":"21.1.5","@angular/language-service":"21.1.5","@angular/pwa":"21.1.4","@nx/angular":"22.5.2","@nx/cypress":"22.5.2","@nx/eslint":"22.5.2","@nx/eslint-plugin":"22.5.2","@nx/jest":"22.5.2","@nx/js":"22.5.2","@nx/web":"22.5.2","@nx/workspace":"22.5.2","@schematics/angular":"21.1.4","@swc-node/register":"1.11.1","@swc/core":"1.15.8","@swc/helpers":"0.5.18","@swc/types":"0.1.6","@types/jest":"30.0.0","@types/node":"18.16.9","@typescript-eslint/eslint-plugin":"^8.0.0","@typescript-eslint/parser":"^8.0.0","@typescript-eslint/utils":"^8.0.0","cypress":"15.9.0","eslint":"8.57.0","eslint-config-prettier":"10.1.8","eslint-plugin-cypress":"^2.13.4","gh-pages":"^6.1.1","husky":"^8.0.0","jest":"30.0.5","jest-environment-jsdom":"30.0.5","jest-preset-angular":"16.0.0","jest-util":"30.0.5","ngx-google-analytics":"^14.0.1","nx":"22.5.2","prettier":"^2.6.2","ts-jest":"29.4.6","ts-node":"10.9.1","typescript":"5.9.3"},"resolutions":{"@typescript-eslint/eslint-plugin":"^8.0.0","@typescript-eslint/parser":"^8.0.0"}}');

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8805)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map