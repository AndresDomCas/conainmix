"use strict";
(self["webpackChunkapzie_ng"] = self["webpackChunkapzie_ng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 6217);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 8140);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 5500);
/* harmony import */ var _components_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/blog-page/blog-page.component */ 1140);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
}, {
  path: 'home-two',
  component: _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent
}, {
  path: 'home-three',
  component: _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent
}, {
  path: 'blog',
  component: _components_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__.BlogPageComponent
}, {
  path: 'single-blog',
  component: _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_4__.BlogDetailsComponent
}];
let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {}
  AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
  return AppRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);








let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(router) {
      this.router = router;
    }
    ngOnInit() {
      this.recallJsFuntions();
    }
    recallJsFuntions() {
      this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
          $('.preloader').fadeIn('slow');
        }
      });
      this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel)).subscribe(event => {
        $.getScript('../assets/js/main.js');
        $('.preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
    }
  }
  AppComponent.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.PathLocationStrategy
    }])],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-preloader")(1, "app-navbar")(2, "router-outlet")(3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return AppComponent;
})();

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 6217);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 8140);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 5500);
/* harmony import */ var _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/contact/contact.component */ 7524);
/* harmony import */ var _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/blog/blog.component */ 3635);
/* harmony import */ var _components_common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/app-download/app-download.component */ 5610);
/* harmony import */ var _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/team/team.component */ 6278);
/* harmony import */ var _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/faq/faq.component */ 2631);
/* harmony import */ var _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/pricing/pricing.component */ 2019);
/* harmony import */ var _components_common_overview_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/overview/overview.component */ 2833);
/* harmony import */ var _components_common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/testimonials/testimonials.component */ 2454);
/* harmony import */ var _components_common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/app-screenshots/app-screenshots.component */ 4127);
/* harmony import */ var _components_common_features_features_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/common/features/features.component */ 8820);
/* harmony import */ var _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/about/about.component */ 7042);
/* harmony import */ var _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _components_common_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/common/how-it-works/how-it-works.component */ 1337);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _components_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/blog-page/blog-page.component */ 1140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);


























let AppModule = /*#__PURE__*/(() => {
  class AppModule {}
  AppModule.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__.PreloaderComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__.SubscribeComponent, _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_6__.HomeOneComponent, _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_7__.HomeTwoComponent, _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_8__.HomeThreeComponent, _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__.BlogComponent, _components_common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_11__.AppDownloadComponent, _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_12__.TeamComponent, _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__.PricingComponent, _components_common_overview_overview_component__WEBPACK_IMPORTED_MODULE_15__.OverviewComponent, _components_common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__.TestimonialsComponent, _components_common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_17__.AppScreenshotsComponent, _components_common_features_features_component__WEBPACK_IMPORTED_MODULE_18__.FeaturesComponent, _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_19__.AboutComponent, _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_20__.FunfactsComponent, _components_common_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_21__.HowItWorksComponent, _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_22__.BlogDetailsComponent, _components_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_23__.BlogPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7042:
/*!************************************************************!*\
  !*** ./src/app/components/common/about/about.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let AboutComponent = /*#__PURE__*/(() => {
  class AboutComponent {
    constructor() {}
    ngOnInit() {}
  }
  AboutComponent.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 22,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-content"], [1, "about-btn"], ["routerLink", "/", 1, "default-btn"], [1, "about-image"], ["src", "assets/img/about.png", "alt", "image"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Acerca de nuestra aplicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Agiliza de forma f\u00E1cil y r\u00E1pido un pr\u00E9stamo para emprendimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nuestro proceso es simple, nuestra aplicaci\u00F3n es poderosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Esta aplicaci\u00F3n est\u00E1 pensada como un apoyo para empezar tu emprendimiento o crecimiento de tu negocio, con una taza de inter\u00E9s baja y pagos de acuerdo a tus necesidades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descarga ahora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4)(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return AboutComponent;
})();

/***/ }),

/***/ 5610:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/app-download/app-download.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDownloadComponent": () => (/* binding */ AppDownloadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let AppDownloadComponent = /*#__PURE__*/(() => {
  class AppDownloadComponent {
    constructor() {}
    ngOnInit() {}
  }
  AppDownloadComponent.ɵfac = function AppDownloadComponent_Factory(t) {
    return new (t || AppDownloadComponent)();
  };
  AppDownloadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppDownloadComponent,
    selectors: [["app-app-download"]],
    decls: 13,
    vars: 0,
    consts: [[1, "app-download", "ptb-100"], [1, "container"], [1, "app-download-content"], [1, "bar"], [1, "app-holder"], ["routerLink", "/"], ["src", "assets/img/store/1.png", "alt", "image"], ["src", "assets/img/store/2.png", "alt", "image"]],
    template: function AppDownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download Our Apps Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account the system and expound the actual teachings of the great explore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return AppDownloadComponent;
})();

/***/ }),

/***/ 4127:
/*!********************************************************************************!*\
  !*** ./src/app/components/common/app-screenshots/app-screenshots.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppScreenshotsComponent": () => (/* binding */ AppScreenshotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let AppScreenshotsComponent = /*#__PURE__*/(() => {
  class AppScreenshotsComponent {
    constructor() {}
    ngOnInit() {}
  }
  AppScreenshotsComponent.ɵfac = function AppScreenshotsComponent_Factory(t) {
    return new (t || AppScreenshotsComponent)();
  };
  AppScreenshotsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppScreenshotsComponent,
    selectors: [["app-app-screenshots"]],
    decls: 43,
    vars: 0,
    consts: [["id", "screenshots", 1, "screenshot-area", "ptb-100"], [1, "container-fluid"], [1, "section-title"], [1, "bar"], [1, "screenshot-slider", "owl-carousel", "owl-theme"], [1, "screenshot-item"], [1, "image"], ["src", "assets/img/screenshot/1.png", "alt", "image"], ["src", "assets/img/screenshot/2.png", "alt", "image"], ["src", "assets/img/screenshot/3.png", "alt", "image"], ["src", "assets/img/screenshot/4.png", "alt", "image"], ["src", "assets/img/screenshot/5.png", "alt", "image"], ["src", "assets/img/screenshot/6.png", "alt", "image"]],
    template: function AppScreenshotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Captura de pantalla de la aplicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5)(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5)(26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5)(32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5)(35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5)(38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5)(41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return AppScreenshotsComponent;
})();

/***/ }),

/***/ 3635:
/*!**********************************************************!*\
  !*** ./src/app/components/common/blog/blog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let BlogComponent = /*#__PURE__*/(() => {
  class BlogComponent {
    constructor() {}
    ngOnInit() {}
  }
  BlogComponent.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)();
  };
  BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 80,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-blog-post"], [1, "image"], ["routerLink", "/single-blog"], ["src", "assets/img/blog/image1.jpg", "alt", "image"], [1, "category-btn"], ["routerLink", "/blog"], [1, "content"], [1, "post-meta"], [1, "fa", "fa-calendar"], [1, "fa", "fa-comments"], ["routerLink", "/single-blog", 1, "read-more"], ["src", "assets/img/blog/image2.jpg", "alt", "image"], ["src", "assets/img/blog/image3.jpg", "alt", "image"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Latest Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "ul", 12)(18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 12 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3")(26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The Most Popular New Business Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "div", 6)(35, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9)(38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11)(41, "ul", 12)(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 18 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "6 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3")(50, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "The Most Popular New Apps in 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4)(57, "div", 5)(58, "div", 6)(59, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9)(62, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11)(65, "ul", 12)(66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 28 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "0 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3")(74, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The Best Marketing Management Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return BlogComponent;
})();

/***/ }),

/***/ 7524:
/*!****************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let ContactComponent = /*#__PURE__*/(() => {
  class ContactComponent {
    constructor() {}
    ngOnInit() {}
  }
  ContactComponent.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 55,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Tu nombre", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Tu correo electr\u00F3nico", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Tu tel\u00E9fono", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Tu asunto", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "message", "id", "message", "cols", "30", "rows", "6", "required", "", "placeholder", "Tu mensaje", 1, "form-control"], [1, "send-btn"], ["type", "submit", 1, "default-btn"], [1, "contact-info"], [1, "contact-info-content"], ["href", "tel:+1-485-456-0102"], ["href", "mailto:hello@apzie.com"], [1, "social"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contacta con nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8)(17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14)(23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 16)(27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enviar mensaje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4)(31, "div", 18)(32, "div", 19)(33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "P\u00F3ngase en contacto con nosotros por su n\u00FAmero de tel\u00E9fono o direcci\u00F3n de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2")(36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+1-485-456-0102");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "hello@conainmix.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 22)(43, "li")(44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return ContactComponent;
})();

/***/ }),

/***/ 2631:
/*!********************************************************!*\
  !*** ./src/app/components/common/faq/faq.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let FaqComponent = /*#__PURE__*/(() => {
  class FaqComponent {
    constructor() {}
    ngOnInit() {}
  }
  FaqComponent.ɵfac = function FaqComponent_Factory(t) {
    return new (t || FaqComponent)();
  };
  FaqComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    decls: 48,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "faq-accordion-content"], ["id", "faqAccordion", 1, "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], [1, "fa", "fa-chevron-down"], ["id", "collapseOne", "data-bs-parent", "#faqAccordion", 1, "collapse", "show"], [1, "card-body"], ["id", "headingTwo", 1, "card-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "data-bs-parent", "#faqAccordion", 1, "collapse"], ["id", "headingThree", 1, "card-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "data-bs-parent", "#faqAccordion", 1, "collapse"], ["id", "headingFour", 1, "card-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "data-bs-parent", "#faqAccordion", 1, "collapse"], [1, "faq-image"], ["src", "assets/img/faq-mobile.png", "alt", "image"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preguntas frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00BFHasta cu\u00E1nto me pueden prestar? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Te podemos prestar hasta el $100,000.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "div", 13)(20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00BFCu\u00E1nto se cobra de interes? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15)(24, "div", 12)(25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Se cobrar\u00E1 del 10%-20% de intereses o sin intereses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7)(28, "div", 16)(29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00BFEn cu\u00E1nto tiempo me entregan mi dinero? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18)(33, "div", 12)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "En tan solo 3 d\u00EDas, una vez que recibamos la documentaci\u00F3n completa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7)(37, "div", 19)(38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00BFQu\u00E9 certeza tengo de que me autoricen mi cr\u00E9dito? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21)(42, "div", 12)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Si tu documentaci\u00F3n est\u00E1 completa, es muy probable que autoricemos tu pr\u00E9stamo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4)(46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return FaqComponent;
})();

/***/ }),

/***/ 8820:
/*!******************************************************************!*\
  !*** ./src/app/components/common/features/features.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let FeaturesComponent = /*#__PURE__*/(() => {
  class FeaturesComponent {
    constructor() {}
    ngOnInit() {}
  }
  FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
    return new (t || FeaturesComponent)();
  };
  FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeaturesComponent,
    selectors: [["app-features"]],
    decls: 38,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-features"], [1, "icon"], [1, "fa", "fa-sun"], [1, "fa", "fa-lightbulb"], [1, "fa", "fa-desktop"], [1, "col-lg-4", "col-md-6", "mx-auto"], [1, "fa", "fa-code"]],
    template: function FeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Caracter\u00EDsticas impresionantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tu dinero en 24 horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Realiza tu aplicaci\u00F3n sin ning\u00FAn costo, no olvides tener a la mano tu INE y comprobante de ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4)(15, "div", 5)(16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00DAsalo como l\u00EDnea de cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Usa, paga y vuelve a disponer de tu dinero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4)(23, "div", 5)(24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nos adaptamos a ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Haz tus pagos quincenales o liquida antes para ahorrar intereses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10)(31, "div", 5)(32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Al pagar a tiempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Accede a mejoras en tasa y aumentos en tu l\u00EDnea de cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return FeaturesComponent;
})();

/***/ }),

/***/ 1823:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    constructor() {}
    ngOnInit() {}
  }
  FooterComponent.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 0,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {},
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return FooterComponent;
})();

/***/ }),

/***/ 5357:
/*!******************************************************************!*\
  !*** ./src/app/components/common/funfacts/funfacts.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunfactsComponent": () => (/* binding */ FunfactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let FunfactsComponent = /*#__PURE__*/(() => {
  class FunfactsComponent {
    constructor() {}
    ngOnInit() {}
  }
  FunfactsComponent.ɵfac = function FunfactsComponent_Factory(t) {
    return new (t || FunfactsComponent)();
  };
  FunfactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FunfactsComponent,
    selectors: [["app-funfacts"]],
    decls: 38,
    vars: 0,
    consts: [[1, "container"], [1, "row", "align-items-center"], [1, "col-lg-3", "col-sm-6"], [1, "single-fun-fact"], [1, "icon"], [1, "fa", "fa-users"], [1, "fa", "fa-heart"], [1, "fa", "fa-star"], [1, "fa", "fa-download"]],
    template: function FunfactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "10M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3")(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clientes felices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3")(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Rese\u00F1as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2)(30, "div", 3)(31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3")(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "11M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Descarga de la app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return FunfactsComponent;
})();

/***/ }),

/***/ 1337:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/how-it-works/how-it-works.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorksComponent": () => (/* binding */ HowItWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let HowItWorksComponent = /*#__PURE__*/(() => {
  class HowItWorksComponent {
    constructor() {}
    ngOnInit() {}
  }
  HowItWorksComponent.ɵfac = function HowItWorksComponent_Factory(t) {
    return new (t || HowItWorksComponent)();
  };
  HowItWorksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HowItWorksComponent,
    selectors: [["app-how-it-works"]],
    decls: 6,
    vars: 0,
    consts: [[1, "container"], [1, "video-content"], ["href", "https://www.youtube.com/watch?v=wKCsprWTN70", 1, "video-btn", "popup-youtube"], [1, "fas", "fa-play"]],
    template: function HowItWorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How it Works?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return HowItWorksComponent;
})();

/***/ }),

/***/ 4173:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let NavbarComponent = /*#__PURE__*/(() => {
  class NavbarComponent {
    constructor() {}
    ngOnInit() {}
  }
  NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 34,
    vars: 0,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "logo"], ["routerLink", "/"], [1, "text-uppercase"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#home", 1, "nav-link"], ["href", "#about", 1, "nav-link"], ["href", "#features", 1, "nav-link"], ["href", "#screenshots", 1, "nav-link"], ["href", "#faq", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "others-option"], [1, "d-flex", "align-items-center"], [1, "option-item"], ["routerLink", "/", 1, "default-btn"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Conainmix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9)(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Caracteristicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Capturas de pantalla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9)(23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9)(26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return NavbarComponent;
})();

/***/ }),

/***/ 2833:
/*!******************************************************************!*\
  !*** ./src/app/components/common/overview/overview.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let OverviewComponent = /*#__PURE__*/(() => {
  class OverviewComponent {
    constructor() {}
    ngOnInit() {}
  }
  OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)();
  };
  OverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["app-overview"]],
    decls: 16,
    vars: 0,
    consts: [[1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "overview-content"], [1, "bar"], [1, "overview-btn"], ["routerLink", "/", 1, "default-btn"], [1, "overview-image"], ["src", "assets/img/overview.png", "alt", "image"]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overall 400k+ Our Users Please Get Download Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Get It Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return OverviewComponent;
})();

/***/ }),

/***/ 4425:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let PreloaderComponent = /*#__PURE__*/(() => {
  class PreloaderComponent {
    constructor() {}
    ngOnInit() {}
  }
  PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) {
    return new (t || PreloaderComponent)();
  };
  PreloaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PreloaderComponent,
    selectors: [["app-preloader"]],
    decls: 4,
    vars: 0,
    consts: [[1, "preloader"]],
    template: function PreloaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return PreloaderComponent;
})();

/***/ }),

/***/ 2019:
/*!****************************************************************!*\
  !*** ./src/app/components/common/pricing/pricing.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let PricingComponent = /*#__PURE__*/(() => {
  class PricingComponent {
    constructor() {}
    ngOnInit() {}
  }
  PricingComponent.ɵfac = function PricingComponent_Factory(t) {
    return new (t || PricingComponent)();
  };
  PricingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PricingComponent,
    selectors: [["app-pricing"]],
    decls: 242,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "tab", "pricing-list-tab"], [1, "tabs"], ["href", "#"], [1, "tab_content"], [1, "tabs_item"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-pricing-table"], [1, "pricing-header"], [1, "price"], [1, "pricing-features"], [1, "fas", "fa-check"], [1, "fa", "fa-times"], [1, "pricing-btn"], ["routerLink", "/", 1, "default-btn"]],
    template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "ul", 4)(9, "li")(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "33 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "/ monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 13)(30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16)(52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9)(56, "div", 10)(57, "div", 11)(58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12)(61, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "69 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "/ monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 13)(67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16)(89, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9)(93, "div", 10)(94, "div", 11)(95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12)(98, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "/ monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul", 13)(104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16)(126, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 7)(130, "div", 8)(131, "div", 9)(132, "div", 10)(133, "div", 11)(134, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 12)(137, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "33 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "/ yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul", 13)(143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 16)(165, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 9)(169, "div", 10)(170, "div", 11)(171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 12)(174, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "69 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "/ yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "ul", 13)(180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 16)(202, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 9)(206, "div", 10)(207, "div", 11)(208, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 12)(211, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "/ yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul", 13)(217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Extra features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Lifetime free support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Upgrate options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Full access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " App design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Web developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 16)(239, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Purchase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return PricingComponent;
})();

/***/ }),

/***/ 9495:
/*!********************************************************************!*\
  !*** ./src/app/components/common/subscribe/subscribe.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeComponent": () => (/* binding */ SubscribeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let SubscribeComponent = /*#__PURE__*/(() => {
  class SubscribeComponent {
    constructor() {}
    ngOnInit() {}
  }
  SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) {
    return new (t || SubscribeComponent)();
  };
  SubscribeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SubscribeComponent,
    selectors: [["app-subscribe"]],
    decls: 12,
    vars: 0,
    consts: [[1, "subscribe-area", "ptb-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "subscribe-content"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your Email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "input-newsletter"], ["type", "submit"]],
    template: function SubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subscribe for our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subscribe Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return SubscribeComponent;
})();

/***/ }),

/***/ 6278:
/*!**********************************************************!*\
  !*** ./src/app/components/common/team/team.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let TeamComponent = /*#__PURE__*/(() => {
  class TeamComponent {
    constructor() {}
    ngOnInit() {}
  }
  TeamComponent.ɵfac = function TeamComponent_Factory(t) {
    return new (t || TeamComponent)();
  };
  TeamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TeamComponent,
    selectors: [["app-team"]],
    decls: 74,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-team"], [1, "image"], ["src", "assets/img/team/image1.jpg", "alt", "image"], [1, "social"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "content"], ["src", "assets/img/team/image2.jpg", "alt", "image"], ["src", "assets/img/team/image3.jpg", "alt", "image"]],
    template: function TeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Expert Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8)(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Justin Roberto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Founder & CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4)(31, "div", 5)(32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 8)(35, "li")(36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14)(48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Louis Agassiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Co-Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4)(53, "div", 5)(54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 8)(57, "li")(58, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li")(61, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li")(64, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14)(70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Carl Anderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return TeamComponent;
})();

/***/ }),

/***/ 2454:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/testimonials/testimonials.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

let TestimonialsComponent = /*#__PURE__*/(() => {
  class TestimonialsComponent {
    constructor() {}
    ngOnInit() {}
  }
  TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
    return new (t || TestimonialsComponent)();
  };
  TestimonialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestimonialsComponent,
    selectors: [["app-testimonials"]],
    decls: 90,
    vars: 0,
    consts: [[1, "container"], [1, "section-title"], [1, "bar"], [1, "testimonials-slides"], [1, "client-feedback"], [1, "item"], [1, "single-feedback"], [1, "icon"], [1, "fa", "fa-quote-left"], [1, "prev-arrow", "slick-arrow"], [1, "fa", "fa-chevron-left"], [1, "next-arrow", "slick-arrow"], [1, "fa", "fa-chevron-right"], [1, "client-thumbnails"], [1, "img-fill"], ["src", "./assets/img/client/1.jpg", "alt", "client"], [1, "title"], ["src", "assets/img/client/2.jpg", "alt", "client"], ["src", "assets/img/client/3.jpg", "alt", "client"], ["src", "assets/img/client/4.jpg", "alt", "client"], ["src", "assets/img/client/5.jpg", "alt", "client"], ["src", "assets/img/client/6.jpg", "alt", "client"]],
    template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Testimonios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div")(8, "div", 5)(9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tu pr\u00E9stamo inmediato sin salir de casa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Realizar tu aplicaci\u00F3n te toma menos de 10 minutos. Puedes realizarlo desde cualquier dispositivo y obtener tu dinero HOY mismo.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "div", 6)(18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"Pr\u00E9stamo confiable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sin comisi\u00F3n por apertura, retiros o manejo de cuenta.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5)(25, "div", 6)(26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\"No s\u00E9 como lo hacen, pero saqu\u00E9 2 pr\u00E9stamos usando esta p\u00E1gina y me los otorgaron sin ning\u00FAn problema. Excelente servicio.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5)(31, "div", 6)(32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u201CSolo entre para conocerlos y ya les ped\u00ED una tarjeta por el excelente servicio que ofrecen. Me gusta que me comparten opciones a las cuales tengo acceso.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5)(37, "div", 6)(38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u201CEstoy muy agradecido con el pr\u00E9stamo ya que hice mi sue\u00F1o realidad de poder poner mi negocio. Estoy muy contento.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5)(43, "div", 6)(44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Soy cliente desde hace 8 a\u00F1os. Lo utilic\u00E9 para impulsar mi negocio.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13)(53, "div")(54, "div", 5)(55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16)(58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jonus Nathan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5)(61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16)(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sadio Finn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5)(67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16)(70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tom Olivar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5)(73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16)(76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "James Finn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5)(79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16)(82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "John Lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5)(85, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 16)(88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sarah Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return TestimonialsComponent;
})();

/***/ }),

/***/ 2338:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/blog-details/blog-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/subscribe/subscribe.component */ 9495);



let BlogDetailsComponent = /*#__PURE__*/(() => {
  class BlogDetailsComponent {
    constructor() {}
    ngOnInit() {}
  }
  BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) {
    return new (t || BlogDetailsComponent)();
  };
  BlogDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlogDetailsComponent,
    selectors: [["app-blog-details"]],
    decls: 424,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "default-shape"], [1, "shape-1"], ["src", "assets/img/shape/1.png", "alt", "image"], [1, "shape-2", "rotateme"], ["src", "assets/img/shape/2.png", "alt", "image"], [1, "shape-3"], ["src", "assets/img/shape/3.svg", "alt", "image"], [1, "shape-4"], ["src", "assets/img/shape/4.svg", "alt", "image"], [1, "shape-5"], ["src", "assets/img/shape/5.png", "alt", "image"], [1, "single-blog-area", "pt-100", "pb-100"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "blog-details-desc"], [1, "article-image"], ["src", "assets/img/blog-details.jpg", "alt", "image"], [1, "article-content"], [1, "entry-meta"], [1, "wp-block-quote"], [1, "wp-block-gallery", "columns-3"], [1, "blocks-gallery-item"], ["src", "assets/img/blog/image1.jpg", "alt", "image"], ["src", "assets/img/blog/image2.jpg", "alt", "image"], ["src", "assets/img/blog/image3.jpg", "alt", "image"], [1, "features-list"], [1, "fa", "fa-check"], [1, "article-footer"], [1, "article-tags"], [1, "fa", "fa-bookmark"], [1, "article-share"], [1, "social"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "post-navigation"], [1, "navigation-links"], [1, "nav-previous"], ["routerLink", "/single-blog"], [1, "flaticon-left"], [1, "nav-next"], [1, "flaticon-right"], [1, "comments-area"], [1, "comments-title"], [1, "comment-list"], [1, "comment"], [1, "comment-body"], [1, "comment-meta"], [1, "comment-author", "vcard"], ["src", "assets/img/client/1.jpg", "alt", "image", 1, "avatar"], [1, "fn"], [1, "says"], [1, "comment-metadata"], [1, "comment-content"], [1, "reply"], ["routerLink", "/single-blog", 1, "comment-reply-link"], [1, "children"], ["src", "assets/img/client/2.jpg", "alt", "image", 1, "avatar"], ["src", "assets/img/client/3.jpg", "alt", "image", 1, "avatar"], ["src", "assets/img/client/4.jpg", "alt", "image", 1, "avatar"], [1, "comment-respond"], [1, "comment-reply-title"], [1, "comment-form"], [1, "comment-notes"], ["id", "email-notes"], [1, "required"], [1, "comment-form-comment"], ["name", "comment", "id", "comment", "cols", "45", "rows", "5", "maxlength", "65525", "required", "required"], [1, "comment-form-author"], ["type", "text", "id", "author", "name", "author", "required", "required"], [1, "comment-form-email"], ["type", "email", "id", "email", "name", "email", "required", "required"], [1, "comment-form-url"], ["type", "url", "id", "url", "name", "url"], [1, "comment-form-cookies-consent"], ["type", "checkbox", "value", "yes", "name", "wp-comment-cookies-consent", "id", "wp-comment-cookies-consent"], ["for", "wp-comment-cookies-consent"], [1, "form-submit"], ["type", "submit", "name", "submit", "id", "submit", "value", "Post A Comment", 1, "submit"], [1, "col-lg-4", "col-md-12"], ["id", "secondary", 1, "widget-area"], [1, "widget", "widget_search"], [1, "search-form", "search-top"], [1, "screen-reader-text"], ["type", "search", "placeholder", "Search...", 1, "search-field"], ["type", "submit"], [1, "fa", "fa-search"], [1, "widget", "widget_apzie_posts_thumb"], [1, "widget-title"], [1, "item"], ["routerLink", "/single-blog", 1, "thumb"], ["role", "img", 1, "fullimage", "cover", "bg1"], [1, "info"], [1, "2020-06-30"], [1, "title", "usmall"], ["role", "img", 1, "fullimage", "cover", "bg2"], ["role", "img", 1, "fullimage", "cover", "bg3"], [1, "widget", "widget_categories"], ["routerLink", "/blog"], [1, "widget", "widget_recent_comments"], [1, "comment-author-link"], [1, "widget", "widget_recent_entries"], [1, "widget", "widget_meta"], ["title", "Really Simple Syndication"], [1, "widget", "widget_archive"], [1, "widget", "widget_tag_cloud"], [1, "tagcloud", "section-bottom"], [1, "tag-link-count"]],
    template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 17)(25, "div", 3)(26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23)(32, "div", 24)(33, "ul")(34, "li")(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Posted On:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "September 31, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Posted By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "John Anderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Weather Evident Smiling Bed Against");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "blockquote", 25)(51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "cite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Tom Cruise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ul", 26)(58, "li", 27)(59, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 27)(62, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 27)(65, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Four major elements that we offer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 31)(70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Scientific Skills For getting a better result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Communication Skills to getting in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " A Career Overview opportunity Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " A good Work Environment For work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Setting the mood with incense");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "The Rise Of Marketing And Why You Need It");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 33)(91, "div", 34)(92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 36)(100, "ul", 37)(101, "li")(102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Share:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li")(108, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li")(111, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 42)(114, "div", 43)(115, "div", 44)(116, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Prev Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 47)(120, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Next Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 49)(124, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "4 Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "ol", 51)(127, "li", 52)(128, "article", 53)(129, "footer", 54)(130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "John Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 59)(137, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "April 24, 2020 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 60)(140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 61)(143, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ol", 63)(146, "li", 52)(147, "article", 53)(148, "footer", 54)(149, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Steven Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 59)(156, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "April 24, 2020 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 60)(159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 61)(162, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "ol", 63)(165, "li", 52)(166, "article", 53)(167, "footer", 54)(168, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Sarah Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 59)(175, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "April 24, 2020 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 60)(178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 61)(181, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "li", 52)(184, "article", 53)(185, "footer", 54)(186, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "James Anderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 59)(193, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "April 24, 2020 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 60)(196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 61)(199, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 67)(202, "h3", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Leave a Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "form", 69)(205, "p", 70)(206, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Your email address will not be published.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " Required fields are marked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 73)(212, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "textarea", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p", 75)(216, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "p", 77)(222, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "p", 79)(228, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Save my name, email, and website in this browser for the next time I comment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 86)(238, "aside", 87)(239, "section", 88)(240, "form", 89)(241, "label")(242, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Search for:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "section", 94)(248, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Popular Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "article", 96)(251, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 99)(254, "time", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "June 10, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "h4", 101)(257, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Making Peace With The Feast Or Famine Of Freelancing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "article", 96)(260, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 99)(263, "time", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "June 21, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "h4", 101)(266, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Be healthy, Enjoy life with Trifles organic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "article", 96)(269, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 99)(272, "time", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "June 30, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "h4", 101)(275, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Buy organic food online and be healthy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "section", 104)(278, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "ul")(281, "li")(282, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "li")(285, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li")(288, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "li")(291, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "li")(294, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Uncategorized");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "section", 106)(297, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Recent Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "ul")(300, "li")(301, "span", 107)(302, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "A WordPress Commenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "li")(308, "span", 107)(309, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Apzie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "li")(315, "span", 107)(316, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "li")(322, "span", 107)(323, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "A WordPress Commenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "li")(329, "span", 107)(330, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Apzie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Hello world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "section", 108)(336, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "ul")(339, "li")(340, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "How to Become a Successful Entry Level UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li")(343, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "How to start your business as an entrepreneur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "li")(346, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "How to be a successful entrepreneur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li")(349, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "10 Building Mobile Apps With Ionic And React");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "li")(352, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Protect your workplace from cyber attacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "section", 109)(355, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "ul")(358, "li")(359, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "li")(362, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "abbr", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "RSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "li")(367, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "abbr", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "RSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "li")(372, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "WordPress.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "section", 111)(375, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Archives");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "ul")(378, "li")(379, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "li")(382, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "li")(385, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "section", 112)(388, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 113)(391, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "IT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Apzie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, " (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Fashion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, " (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, " (1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Smart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, " (1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, " (1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "Tips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, " (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "app-subscribe");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__.SubscribeComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return BlogDetailsComponent;
})();

/***/ }),

/***/ 1140:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/blog-page/blog-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageComponent": () => (/* binding */ BlogPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


let BlogPageComponent = /*#__PURE__*/(() => {
  class BlogPageComponent {
    constructor() {}
    ngOnInit() {}
  }
  BlogPageComponent.ɵfac = function BlogPageComponent_Factory(t) {
    return new (t || BlogPageComponent)();
  };
  BlogPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlogPageComponent,
    selectors: [["app-blog-page"]],
    decls: 196,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "default-shape"], [1, "shape-1"], ["src", "assets/img/shape/1.png", "alt", "image"], [1, "shape-2", "rotateme"], ["src", "assets/img/shape/2.png", "alt", "image"], [1, "shape-3"], ["src", "assets/img/shape/3.svg", "alt", "image"], [1, "shape-4"], ["src", "assets/img/shape/4.svg", "alt", "image"], [1, "shape-5"], ["src", "assets/img/shape/5.png", "alt", "image"], [1, "blog-area", "ptb-100"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-blog-post"], [1, "image"], ["routerLink", "/single-blog"], ["src", "assets/img/blog/image1.jpg", "alt", "image"], [1, "category-btn"], ["routerLink", "/blog"], [1, "content"], [1, "post-meta"], [1, "fa", "fa-calendar"], [1, "fa", "fa-comments"], ["routerLink", "/single-blog", 1, "read-more"], ["src", "assets/img/blog/image2.jpg", "alt", "image"], ["src", "assets/img/blog/image3.jpg", "alt", "image"], ["src", "assets/img/blog/image4.jpg", "alt", "image"], ["src", "assets/img/blog/image5.jpg", "alt", "image"], ["src", "assets/img/blog/image6.jpg", "alt", "image"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area"], ["routerLink", "/blog", 1, "prev", "page-numbers"], [1, "fa", "fa-chevron-left"], ["routerLink", "/blog", 1, "page-numbers"], ["aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/blog", 1, "next", "page-numbers"], [1, "fa", "fa-chevron-right"]],
    template: function BlogPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 17)(25, "div", 3)(26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24)(33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26)(36, "ul", 27)(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 12 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3")(45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "The Most Popular New Business Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19)(52, "div", 20)(53, "div", 21)(54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24)(57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26)(60, "ul", 27)(61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 18 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "6 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3")(69, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "The Most Popular New Apps in 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19)(76, "div", 20)(77, "div", 21)(78, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24)(81, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Design Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26)(84, "ul", 27)(85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 28 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "0 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3")(93, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "The Best Marketing Management Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 19)(100, "div", 20)(101, "div", 21)(102, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 24)(105, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26)(108, "ul", 27)(109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " 12 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "3 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3")(117, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "It\u2019s Time To Think Differently About App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 19)(124, "div", 20)(125, "div", 21)(126, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 24)(129, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 26)(132, "ul", 27)(133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " 18 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "6 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3")(141, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "The Most Popular New Business Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 19)(148, "div", 20)(149, "div", 21)(150, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 24)(153, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Design Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 26)(156, "ul", 27)(157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " 28 March 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "0 Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3")(165, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "3 WooCommerce Plugins to Boost Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Water plan dolor sit amet consturisi velised quiLorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 36)(172, "div", 37)(173, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6)(186, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return BlogPageComponent;
})();

/***/ }),

/***/ 6217:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-one/home-one.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeOneComponent": () => (/* binding */ HomeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/contact/contact.component */ 7524);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/faq/faq.component */ 2631);
/* harmony import */ var _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/testimonials/testimonials.component */ 2454);
/* harmony import */ var _common_features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/features/features.component */ 8820);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/about/about.component */ 7042);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/funfacts/funfacts.component */ 5357);








let HomeOneComponent = /*#__PURE__*/(() => {
  class HomeOneComponent {
    constructor() {}
    ngOnInit() {}
  }
  HomeOneComponent.ɵfac = function HomeOneComponent_Factory(t) {
    return new (t || HomeOneComponent)();
  };
  HomeOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HomeOneComponent,
    selectors: [["app-home-one"]],
    decls: 97,
    vars: 0,
    consts: [[1, "main-banner"], [1, "d-table"], [1, "d-table-cell"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "banner-content"], [1, "banner-holder"], ["routerLink", "/"], ["src", "assets/img/store/1.png", "alt", "image"], ["src", "assets/img/store/2.png", "alt", "image"], [1, "banner-image"], ["src", "assets/img/mobile.png", "alt", "image"], [1, "default-shape"], [1, "shape-1"], ["src", "assets/img/shape/1.png", "alt", "image"], [1, "shape-2", "rotateme"], ["src", "assets/img/shape/2.png", "alt", "image"], [1, "shape-3"], ["src", "assets/img/shape/3.svg", "alt", "image"], [1, "shape-4"], ["src", "assets/img/shape/4.svg", "alt", "image"], [1, "shape-5"], ["src", "assets/img/shape/5.png", "alt", "image"], [1, "fun-facts-area", "pt-100", "pb-70"], ["id", "about", 1, "about-area", "pb-100"], ["id", "feat  ures", 1, "features-area", "pb-70"], [1, "testimonials-area", "ptb-100"], ["id", "faq", 1, "faq-area", "ptb-100"], ["id", "contact", 1, "contact-area", "ptb-100"]],
    template: function HomeOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "La mejor aplicaci\u00F3n para solicitar tu pr\u00E9stamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "El cual te ayudar\u00E1 a emprender tu propio negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13)(20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 13)(35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 13)(48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "app-testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 13)(61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 13)(74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 13)(87, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent, _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialsComponent, _common_features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__.FunfactsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return HomeOneComponent;
})();

/***/ }),

/***/ 5500:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/home-three/home-three.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThreeComponent": () => (/* binding */ HomeThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/contact/contact.component */ 7524);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/blog/blog.component */ 3635);
/* harmony import */ var _common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-download/app-download.component */ 5610);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/team/team.component */ 6278);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/faq/faq.component */ 2631);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/overview/overview.component */ 2833);
/* harmony import */ var _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/testimonials/testimonials.component */ 2454);
/* harmony import */ var _common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/app-screenshots/app-screenshots.component */ 4127);
/* harmony import */ var _common_features_features_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/features/features.component */ 8820);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/about/about.component */ 7042);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/funfacts/funfacts.component */ 5357);















let HomeThreeComponent = /*#__PURE__*/(() => {
  class HomeThreeComponent {
    constructor() {}
    ngOnInit() {}
  }
  HomeThreeComponent.ɵfac = function HomeThreeComponent_Factory(t) {
    return new (t || HomeThreeComponent)();
  };
  HomeThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: HomeThreeComponent,
    selectors: [["app-home-three"]],
    decls: 130,
    vars: 0,
    consts: [[1, "main-banner"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "banner-content"], [1, "banner-btn"], ["routerLink", "/", 1, "default-btn"], [1, "banner-form"], [1, "form-group", "mb-3"], ["type", "text", "placeholder", "Name", 1, "form-control"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "placeholder", "Subjects", 1, "form-control"], ["cols", "30", "rows", "6", "placeholder", "Message", 1, "form-control"], ["type", "submit"], [1, "default-shape"], [1, "shape-1"], ["src", "assets/img/shape/1.png", "alt", "image"], [1, "shape-2", "rotateme"], ["src", "assets/img/shape/2.png", "alt", "image"], [1, "shape-3"], ["src", "assets/img/shape/3.svg", "alt", "image"], [1, "shape-4"], ["src", "assets/img/shape/4.svg", "alt", "image"], [1, "shape-5"], ["src", "assets/img/shape/5.png", "alt", "image"], [1, "fun-facts-area", "pt-100", "pb-70"], ["id", "about", 1, "about-area", "pb-100"], ["id", "features", 1, "features-area", "pb-70"], [1, "testimonials-area", "ptb-100"], [1, "overview-area", "ptb-100"], [1, "pricing-area", "pt-100", "pb-70"], ["id", "faq", 1, "faq-area", "ptb-100"], [1, "team-area", "pt-100", "pb-70"], ["id", "blog", 1, "blog-area", "pt-100", "pb-70"], ["id", "contact", 1, "contact-area", "ptb-100"]],
    template: function HomeThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Manage all of your Stuff Using a Apzie App");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "App ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 7)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Start free trial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 5)(16, "div", 9)(17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Get started for Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "form")(20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 16)(31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 16)(46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](47, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](51, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](53, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "div", 16)(59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](60, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](69, "app-app-screenshots");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](71, "app-testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 16)(73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](74, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](78, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](80, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](82, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](84, "app-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](86, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 16)(88, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](89, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](91, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](93, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](95, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](97, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 16)(101, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](102, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](104, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](106, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](108, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](110, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](111, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](112, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](113, "app-app-download");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](115, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](117, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](118, "div", 16)(119, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](120, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](122, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](124, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](126, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](128, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](129, "app-subscribe");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent, _common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_3__.AppDownloadComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_4__.TeamComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.FaqComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__.PricingComponent, _common_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__.OverviewComponent, _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__.TestimonialsComponent, _common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_9__.AppScreenshotsComponent, _common_features_features_component__WEBPACK_IMPORTED_MODULE_10__.FeaturesComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_11__.AboutComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_12__.FunfactsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return HomeThreeComponent;
})();

/***/ }),

/***/ 8140:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-two/home-two.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwoComponent": () => (/* binding */ HomeTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/contact/contact.component */ 7524);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/blog/blog.component */ 3635);
/* harmony import */ var _common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-download/app-download.component */ 5610);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/team/team.component */ 6278);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/faq/faq.component */ 2631);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/overview/overview.component */ 2833);
/* harmony import */ var _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/testimonials/testimonials.component */ 2454);
/* harmony import */ var _common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/app-screenshots/app-screenshots.component */ 4127);
/* harmony import */ var _common_features_features_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/features/features.component */ 8820);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/about/about.component */ 7042);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/how-it-works/how-it-works.component */ 1337);















let HomeTwoComponent = /*#__PURE__*/(() => {
  class HomeTwoComponent {
    constructor() {}
    ngOnInit() {}
  }
  HomeTwoComponent.ɵfac = function HomeTwoComponent_Factory(t) {
    return new (t || HomeTwoComponent)();
  };
  HomeTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: HomeTwoComponent,
    selectors: [["app-home-two"]],
    decls: 105,
    vars: 0,
    consts: [[1, "main-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "banner-content"], [1, "banner-form"], ["type", "email", "placeholder", "Enter your Email", 1, "input-newsletter"], ["type", "submit"], ["id", "particles-js"], [1, "video-area", "pt-100"], ["id", "about", 1, "about-area", "ptb-100"], [1, "default-shape"], [1, "shape-1"], ["src", "assets/img/shape/1.png", "alt", "image"], [1, "shape-2", "rotateme"], ["src", "assets/img/shape/2.png", "alt", "image"], [1, "shape-3"], ["src", "assets/img/shape/3.svg", "alt", "image"], [1, "shape-4"], ["src", "assets/img/shape/4.svg", "alt", "image"], [1, "shape-5"], ["src", "assets/img/shape/5.png", "alt", "image"], ["id", "features", 1, "features-area", "pb-70"], [1, "testimonials-area", "ptb-100"], [1, "overview-area", "ptb-100"], [1, "pricing-area", "pt-100", "pb-70"], ["id", "faq", 1, "faq-area", "ptb-100"], [1, "team-area", "pt-100", "pb-70"], [1, "fun-facts-area", "pt-100", "pb-70"], ["id", "blog", 1, "blog-area", "pt-100", "pb-70"], ["id", "contact", 1, "contact-area", "ptb-100"]],
    template: function HomeTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Apzie Makes Your Life Very Easier");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Begin Free Trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "app-how-it-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 11)(19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 11)(32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "app-app-screenshots");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "app-testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 11)(46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](51, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](53, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "app-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](59, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 11)(61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](64, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](66, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](68, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](70, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](72, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 11)(74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](75, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](79, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](81, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](85, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](86, "app-app-download");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](88, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](90, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](92, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "div", 11)(94, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](95, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](97, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](99, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](101, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](103, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](104, "app-subscribe");
      }
    },
    dependencies: [_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_0__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent, _common_app_download_app_download_component__WEBPACK_IMPORTED_MODULE_3__.AppDownloadComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_4__.TeamComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.FaqComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_6__.PricingComponent, _common_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__.OverviewComponent, _common_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_8__.TestimonialsComponent, _common_app_screenshots_app_screenshots_component__WEBPACK_IMPORTED_MODULE_9__.AppScreenshotsComponent, _common_features_features_component__WEBPACK_IMPORTED_MODULE_10__.FeaturesComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_11__.AboutComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_12__.FunfactsComponent, _common_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__.HowItWorksComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return HomeTwoComponent;
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map