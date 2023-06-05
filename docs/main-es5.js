function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_functional_stream_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/functional/stream.service */
    "./src/app/services/functional/stream.service.ts");
    /* harmony import */


    var _services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/functional/lecturer.service */
    "./src/app/services/functional/lecturer.service.ts");
    /* harmony import */


    var _services_functional_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/functional/student.service */
    "./src/app/services/functional/student.service.ts");
    /* harmony import */


    var _services_functional_college_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/functional/college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var _components_college_database_college_database_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/college-database/college-database.component */
    "./src/app/components/college-database/college-database.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(streamService, lecturerServive, studentService, collegeService) {
        _classCallCheck(this, AppComponent);

        this.streamService = streamService;
        this.lecturerServive = lecturerServive;
        this.studentService = studentService;
        this.collegeService = collegeService;
        this.title = 'college-demo';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.streamService.getAllStreamsDetails();
          this.lecturerServive.getAllLecturerDetails();
          this.studentService.getAllStudentsDetails();
          this.collegeService.getAllCollegesDetails();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_1__["StreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_2__["LecturerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_functional_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_functional_college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-college-database");
        }
      },
      directives: [_components_college_database_college_database_component__WEBPACK_IMPORTED_MODULE_5__["CollegeDatabaseComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_functional_stream_service__WEBPACK_IMPORTED_MODULE_1__["StreamService"]
        }, {
          type: _services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_2__["LecturerService"]
        }, {
          type: _services_functional_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]
        }, {
          type: _services_functional_college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_college_database_college_database_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/college-database/college-database.component */
    "./src/app/components/college-database/college-database.component.ts");
    /* harmony import */


    var _components_college_database_lecturers_data_table_lecturers_data_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/college-database/lecturers-data-table/lecturers-data-table.component */
    "./src/app/components/college-database/lecturers-data-table/lecturers-data-table.component.ts");
    /* harmony import */


    var _components_college_database_students_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var _components_college_database_lecturers_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var _components_college_database_students_data_table_students_data_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/college-database/students-data-table/students-data-table.component */
    "./src/app/components/college-database/students-data-table/students-data-table.component.ts");
    /* harmony import */


    var _services_data_in_memory_data_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/data/in-memory-data.service */
    "./src/app/services/data/in-memory-data.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _components_college_database_delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/college-database/delete-prompt-dailog/delete-prompt-dailog.component */
    "./src/app/components/college-database/delete-prompt-dailog/delete-prompt-dailog.component.ts");
    /* harmony import */


    var _components_college_database_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/college-database/create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var _interceptors_TestInterceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./interceptors/TestInterceptor */
    "./src/app/interceptors/TestInterceptor.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_TestInterceptor__WEBPACK_IMPORTED_MODULE_28__["MyInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_29__["environment"].production ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__["HttpClientInMemoryWebApiModule"].forRoot(_services_data_in_memory_data_service__WEBPACK_IMPORTED_MODULE_24__["InMemoryDataService"], {
        dataEncapsulation: false,
        delay: 3000
      }) : null, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _components_college_database_college_database_component__WEBPACK_IMPORTED_MODULE_19__["CollegeDatabaseComponent"], _components_college_database_lecturers_data_table_lecturers_data_table_component__WEBPACK_IMPORTED_MODULE_20__["LecturersDataTableComponent"], _components_college_database_students_data_table_students_data_table_component__WEBPACK_IMPORTED_MODULE_23__["StudentsDataTableComponent"], _components_college_database_students_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_21__["StudentCreateUpdateDailogBoxComponent"], _components_college_database_lecturers_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_22__["LecturerCreateUpdateDailogBoxComponent"], _components_college_database_delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_26__["DeletePromptDailogComponent"], _components_college_database_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_27__["CollegeCreateUpdateDailogBoxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__["HttpClientInMemoryWebApiModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _components_college_database_college_database_component__WEBPACK_IMPORTED_MODULE_19__["CollegeDatabaseComponent"], _components_college_database_lecturers_data_table_lecturers_data_table_component__WEBPACK_IMPORTED_MODULE_20__["LecturersDataTableComponent"], _components_college_database_students_data_table_students_data_table_component__WEBPACK_IMPORTED_MODULE_23__["StudentsDataTableComponent"], _components_college_database_students_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_21__["StudentCreateUpdateDailogBoxComponent"], _components_college_database_lecturers_data_table_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_22__["LecturerCreateUpdateDailogBoxComponent"], _components_college_database_delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_26__["DeletePromptDailogComponent"], _components_college_database_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_27__["CollegeCreateUpdateDailogBoxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_29__["environment"].production ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__["HttpClientInMemoryWebApiModule"].forRoot(_services_data_in_memory_data_service__WEBPACK_IMPORTED_MODULE_24__["InMemoryDataService"], {
            dataEncapsulation: false,
            delay: 3000
          }) : null, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_TestInterceptor__WEBPACK_IMPORTED_MODULE_28__["MyInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/Constants.ts":
  /*!*************************************!*\
    !*** ./src/app/common/Constants.ts ***!
    \*************************************/

  /*! exports provided: COLLEGE_LOADING_MESSAGE, ERROR_MESSAGE, STUDENT_CREATE_FORM_HEADER, STUDENT_UPDATE_FORM_HEADER, LECTURER_CREATE_FORM_HEADER, LECTURER_UPDATE_FORM_HEADER, SAVE_BTN_LABEL, UPDATE_BTN_LABEL */

  /***/
  function srcAppCommonConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLEGE_LOADING_MESSAGE", function () {
      return COLLEGE_LOADING_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGE", function () {
      return ERROR_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STUDENT_CREATE_FORM_HEADER", function () {
      return STUDENT_CREATE_FORM_HEADER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STUDENT_UPDATE_FORM_HEADER", function () {
      return STUDENT_UPDATE_FORM_HEADER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LECTURER_CREATE_FORM_HEADER", function () {
      return LECTURER_CREATE_FORM_HEADER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LECTURER_UPDATE_FORM_HEADER", function () {
      return LECTURER_UPDATE_FORM_HEADER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SAVE_BTN_LABEL", function () {
      return SAVE_BTN_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_BTN_LABEL", function () {
      return UPDATE_BTN_LABEL;
    });

    var COLLEGE_LOADING_MESSAGE = "Getting collges data. Please wait...";
    var ERROR_MESSAGE = "Looks like there is some issue. Please try again.";
    var STUDENT_CREATE_FORM_HEADER = "Student Registration";
    var STUDENT_UPDATE_FORM_HEADER = "Update Student Details";
    var LECTURER_CREATE_FORM_HEADER = "Lecturer Registration";
    var LECTURER_UPDATE_FORM_HEADER = "Update Lecturer Details";
    var SAVE_BTN_LABEL = "Save";
    var UPDATE_BTN_LABEL = "Update";
    /***/
  },

  /***/
  "./src/app/common/HttpHeaders.ts":
  /*!***************************************!*\
    !*** ./src/app/common/HttpHeaders.ts ***!
    \***************************************/

  /*! exports provided: FrequentHttpHeaders */

  /***/
  function srcAppCommonHttpHeadersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrequentHttpHeaders", function () {
      return FrequentHttpHeaders;
    });

    var FrequentHttpHeaders = {
      'Content-Type': "application/json",
      'Accept': "application/json"
    };
    /***/
  },

  /***/
  "./src/app/common/helpers/college.data.ts":
  /*!************************************************!*\
    !*** ./src/app/common/helpers/college.data.ts ***!
    \************************************************/

  /*! exports provided: COLLEGE_DATA */

  /***/
  function srcAppCommonHelpersCollegeDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLEGE_DATA", function () {
      return COLLEGE_DATA;
    });

    var COLLEGE_DATA = [{
      id: 1,
      location: "Warangal, Telangana",
      name: "Kakatiya Institute of Technology & Science",
      principalId: 0
    }, {
      id: 2,
      location: "Banglore, Karnataka",
      name: "Indian Institute of Management",
      principalId: 0
    }];
    /***/
  },

  /***/
  "./src/app/common/helpers/lecturer.data.ts":
  /*!*************************************************!*\
    !*** ./src/app/common/helpers/lecturer.data.ts ***!
    \*************************************************/

  /*! exports provided: LECTURER_DATA */

  /***/
  function srcAppCommonHelpersLecturerDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LECTURER_DATA", function () {
      return LECTURER_DATA;
    });

    var LECTURER_DATA = [{
      id: 1,
      streamId: 1,
      firstName: "Pavan Kumar",
      lastName: "Erraboina",
      collegeId: 1
    }, {
      id: 2,
      streamId: 2,
      firstName: "Akhilesh",
      lastName: "Yadav",
      collegeId: 1
    }, {
      id: 3,
      streamId: 3,
      firstName: "Satish",
      lastName: "Reddy",
      collegeId: 1
    }, {
      id: 4,
      streamId: 4,
      firstName: "Ashok",
      lastName: "Reddy",
      collegeId: 1
    }, {
      id: 5,
      streamId: 5,
      firstName: "Madhu Priya",
      lastName: "Putti",
      collegeId: 1
    }, {
      id: 6,
      streamId: 6,
      firstName: "Sowjanya",
      lastName: "Reddy",
      collegeId: 1
    }];
    /***/
  },

  /***/
  "./src/app/common/helpers/stream.data.ts":
  /*!***********************************************!*\
    !*** ./src/app/common/helpers/stream.data.ts ***!
    \***********************************************/

  /*! exports provided: STREAM_DATA */

  /***/
  function srcAppCommonHelpersStreamDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STREAM_DATA", function () {
      return STREAM_DATA;
    });

    var STREAM_DATA = [{
      id: 1,
      name: "Electronics & Communications",
      noOfYears: 4
    }, {
      id: 2,
      name: "Computer Science",
      noOfYears: 4
    }, {
      id: 3,
      name: "Information Technology",
      noOfYears: 4
    }, {
      id: 4,
      name: "Mechanical",
      noOfYears: 4
    }, {
      id: 5,
      name: "Electronics & Electrical",
      noOfYears: 4
    }, {
      id: 6,
      name: "Civil Engineering",
      noOfYears: 4
    }];
    /***/
  },

  /***/
  "./src/app/common/helpers/student.data.ts":
  /*!************************************************!*\
    !*** ./src/app/common/helpers/student.data.ts ***!
    \************************************************/

  /*! exports provided: STUDENT_DATA */

  /***/
  function srcAppCommonHelpersStudentDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STUDENT_DATA", function () {
      return STUDENT_DATA;
    });

    var STUDENT_DATA = [{
      id: 1,
      collegeId: 1,
      firstName: "Prashanth",
      lastName: "Charla",
      streamId: 1,
      currStreamYear: 2
    }, {
      id: 2,
      collegeId: 1,
      firstName: "Vikas",
      lastName: "Krishnamurthy",
      streamId: 2,
      currStreamYear: 4
    }, {
      id: 3,
      collegeId: 1,
      firstName: "Raj",
      lastName: "Kumar",
      streamId: 4,
      currStreamYear: 2
    }, {
      id: 4,
      collegeId: 1,
      firstName: "Sajan",
      lastName: "Kumar",
      streamId: 2,
      currStreamYear: 4
    }, {
      id: 5,
      collegeId: 1,
      firstName: "Yashwanth",
      lastName: "Paindla",
      streamId: 1,
      currStreamYear: 3
    }, {
      id: 6,
      collegeId: 1,
      firstName: "Vishal",
      lastName: "Palle",
      streamId: 3,
      currStreamYear: 1
    }, {
      id: 7,
      collegeId: 1,
      firstName: "Sai Krishna",
      lastName: "Mudigonda",
      streamId: 1,
      currStreamYear: 2
    }, {
      id: 8,
      collegeId: 1,
      firstName: "Nikhil",
      lastName: "Reddy",
      streamId: 3,
      currStreamYear: 3
    }, {
      id: 9,
      collegeId: 1,
      firstName: "Sharath",
      lastName: "Reddy",
      streamId: 3,
      currStreamYear: 1
    }, {
      id: 10,
      collegeId: 1,
      firstName: "Girish",
      lastName: "Golla",
      streamId: 6,
      currStreamYear: 4
    }];
    /***/
  },

  /***/
  "./src/app/components/college-database/college-database.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/college-database/college-database.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CollegeDatabaseComponent */

  /***/
  function srcAppComponentsCollegeDatabaseCollegeDatabaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollegeDatabaseComponent", function () {
      return CollegeDatabaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/functional/college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _students_data_table_students_data_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./students-data-table/students-data-table.component */
    "./src/app/components/college-database/students-data-table/students-data-table.component.ts");
    /* harmony import */


    var _lecturers_data_table_lecturers_data_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./lecturers-data-table/lecturers-data-table.component */
    "./src/app/components/college-database/lecturers-data-table/lecturers-data-table.component.ts");

    function CollegeDatabaseComponent_mat_card_content_10_mat_expansion_panel_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CollegeDatabaseComponent_mat_card_content_10_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var college_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.panelOpen(college_r2.id, i_r3);
        })("closed", function CollegeDatabaseComponent_mat_card_content_10_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var college_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.panelClose(college_r2.id, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-students-data-table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-lecturers-data-table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var college_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r1.isExpansionPanelExpanded(i_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r2.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx_r1.studentDisplayColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx_r1.lecturerDispalyColumns);
      }
    }

    function CollegeDatabaseComponent_mat_card_content_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollegeDatabaseComponent_mat_card_content_10_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onCreateClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add College");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollegeDatabaseComponent_mat_card_content_10_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onUpdateClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update College");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CollegeDatabaseComponent_mat_card_content_10_mat_expansion_panel_7_Template, 12, 5, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.collegesList);
      }
    }

    var CollegeDatabaseComponent = /*#__PURE__*/function () {
      function CollegeDatabaseComponent(collegeService, uiCommonService, dialog) {
        _classCallCheck(this, CollegeDatabaseComponent);

        this.collegeService = collegeService;
        this.uiCommonService = uiCommonService;
        this.dialog = dialog;
        this.title = "Welcome to the College Database";
        this.subtitle = "Explore & Manage";
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.activePanel = -1;
        this.collegesList = new Array();
        this.studentDisplayColumns = ["Id", "firstName", "lastName", "stream", "maxYearsInStream", "currentYear", "actions"];
        this.lecturerDispalyColumns = ["Id", "firstName", "lastName", "stream", "actions"];
      }

      _createClass(CollegeDatabaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingMessage$ = this.uiCommonService.loadingMessage$;
          this.collegeService.latestFilteredCollegesData$.subscribe(function (colleges) {
            return _this.collegesList = colleges;
          });
        }
      }, {
        key: "panelOpen",
        value: function panelOpen(id, index) {
          this.activePanel = index;
          this.collegeService.latestOpenedPanelId.next(id);
        }
      }, {
        key: "panelClose",
        value: function panelClose(id, index) {
          this.collegeService.latestClosedPanelId.next(id);
        }
      }, {
        key: "isExpansionPanelExpanded",
        value: function isExpansionPanelExpanded(index) {
          return this.activePanel == index;
        }
      }, {
        key: "onCreateClick",
        value: function onCreateClick() {
          this.openCreateOrUpdateDialog("save");
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick() {
          this.openCreateOrUpdateDialog("update");
        }
      }, {
        key: "openCreateOrUpdateDialog",
        value: function openCreateOrUpdateDialog(action) {
          var dialogRef = this.dialog.open(_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_2__["CollegeCreateUpdateDailogBoxComponent"], {
            data: {
              action: action
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return CollegeDatabaseComponent;
    }();

    CollegeDatabaseComponent.ɵfac = function CollegeDatabaseComponent_Factory(t) {
      return new (t || CollegeDatabaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_3__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_4__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    CollegeDatabaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollegeDatabaseComponent,
      selectors: [["app-college-database"]],
      decls: 12,
      vars: 8,
      consts: [[1, "loadingMessage"], [4, "ngIf"], [1, "btns-grp"], ["mat-raised-button", "", 1, "btn", 3, "click"], ["multi", ""], [3, "expanded", "opened", "closed", 4, "ngFor", "ngForOf"], [3, "expanded", "opened", "closed"], [1, "college"], [1, "location"], ["label", "Students"], [3, "displayedColumns"], ["label", "Lecturers"]],
      template: function CollegeDatabaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CollegeDatabaseComponent_mat_card_content_10_Template, 8, 1, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.loadingMessage$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.loadingMessage$).length == 0);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _students_data_table_students_data_table_component__WEBPACK_IMPORTED_MODULE_11__["StudentsDataTableComponent"], _lecturers_data_table_lecturers_data_table_component__WEBPACK_IMPORTED_MODULE_12__["LecturersDataTableComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".college[_ngcontent-%COMP%] {\n  font-weight: 599;\n}\n\n.location[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  opacity: 0.5;\n  font-size: 0.9em;\n}\n\n.btns-grp[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.btns-grp[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL0Y6XFxhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpLXBvY1xcY29sbGVnZS1kZW1vL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb2xsZWdlLWRhdGFiYXNlXFxjb2xsZWdlLWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbGxlZ2UtZGF0YWJhc2UvY29sbGVnZS1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNJLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbGxlZ2UtZGF0YWJhc2UvY29sbGVnZS1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWdlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1OTk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbn1cclxuXHJcbi5idG5zLWdycCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBcclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgfVxyXG59IiwiLmNvbGxlZ2Uge1xuICBmb250LXdlaWdodDogNTk5O1xufVxuXG4ubG9jYXRpb24ge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5idG5zLWdycCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5idG5zLWdycCAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollegeDatabaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-college-database',
          templateUrl: './college-database.component.html',
          styleUrls: ['./college-database.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_3__["CollegeService"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_4__["UiCommonService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/create-update-dailog-box/create-update-dailog-box.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/components/college-database/create-update-dailog-box/create-update-dailog-box.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: CollegeCreateUpdateDailogBoxComponent */

  /***/
  function srcAppComponentsCollegeDatabaseCreateUpdateDailogBoxCreateUpdateDailogBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollegeCreateUpdateDailogBoxComponent", function () {
      return CollegeCreateUpdateDailogBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/functional/college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/functional/lecturer.service */
    "./src/app/services/functional/lecturer.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CollegeCreateUpdateDailogBoxComponent_div_5_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var college_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", college_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", college_r3.name, " ");
      }
    }

    function CollegeCreateUpdateDailogBoxComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "College");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CollegeCreateUpdateDailogBoxComponent_div_5_Template_mat_select_selectionChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.updateOtherFieldValues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CollegeCreateUpdateDailogBoxComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.collegeDropdownValues);
      }
    }

    function CollegeCreateUpdateDailogBoxComponent_div_21_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lecturer_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lecturer_r7.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lecturer_r7.firstName + " " + lecturer_r7.lastName, " ");
      }
    }

    function CollegeCreateUpdateDailogBoxComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CollegeCreateUpdateDailogBoxComponent_div_21_mat_option_5_Template, 2, 2, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.lecturerDropdownValues);
      }
    }

    var CollegeCreateUpdateDailogBoxComponent = /*#__PURE__*/function () {
      function CollegeCreateUpdateDailogBoxComponent(collegeService, lecturerService, formBuilder, uiCommonService, dialogRef, data) {
        var _this2 = this;

        _classCallCheck(this, CollegeCreateUpdateDailogBoxComponent);

        this.collegeService = collegeService;
        this.lecturerService = lecturerService;
        this.formBuilder = formBuilder;
        this.uiCommonService = uiCommonService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.collegeForm = this.formBuilder.group({
          collegeId: [],
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          principalId: []
        });
        this.disableFieldsExceptCollege = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disableFieldsExceptCollege$ = this.disableFieldsExceptCollege.asObservable();
        this.subscriptions.add(this.disableFieldsExceptCollege$.subscribe(function (disable) {
          if (disable) {
            _this2.collegeForm.get('name').disable();

            _this2.collegeForm.get('city').disable();

            _this2.collegeForm.get('state').disable();

            _this2.collegeForm.get('principalId').disable();
          } else {
            _this2.collegeForm.get('name').enable();

            _this2.collegeForm.get('city').enable();

            _this2.collegeForm.get('state').enable();

            _this2.collegeForm.get('principalId').enable();
          }
        }));
      }

      _createClass(CollegeCreateUpdateDailogBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dialogRef.updateSize("27%");
          this.action = this.data.action.toLowerCase();

          if (this.action === "save") {
            this.title = "Add College";
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["SAVE_BTN_LABEL"];
            this.disableFieldsExceptCollege.next(false);
          } else if (this.action === "update") {
            this.title = "Update College";
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_BTN_LABEL"];
            this.disableFieldsExceptCollege.next(true);
          }

          this.disableSave$ = this.collegeService.isCollegeFormSubmitDisabled.asObservable();
          this.subscriptions.add(this.collegeService.collegesData$.subscribe(function (data) {
            return _this3.collegeDropdownValues = data;
          }));
        }
      }, {
        key: "updateOtherFieldValues",
        value: function updateOtherFieldValues() {
          var _this4 = this;

          this.disableFieldsExceptCollege.next(false);
          this.selectedCollege = this.collegeDropdownValues.find(function (college) {
            return college.id == _this4.collegeForm.get('collegeId').value;
          });
          this.collegeForm.get('name').setValue(this.selectedCollege.name);
          this.collegeForm.get('city').setValue(this.selectedCollege.location.split(',')[0]);
          this.collegeForm.get('state').setValue(this.selectedCollege.location.split(',')[1]);
          this.subscriptions.add(this.lecturerService.lecturersData$.subscribe(function (data) {
            return _this4.lecturerDropdownValues = data.filter(function (lecturer) {
              return lecturer.collegeId == _this4.selectedCollege.id;
            });
          }));
          this.collegeForm.get('principalId').setValue(this.selectedCollege.principalId);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _a;

          var college = {
            location: this.collegeForm.get('city').value + ',' + this.collegeForm.get('state').value,
            name: this.collegeForm.get('name').value,
            principalId: (_a = this.collegeForm.get('principalId')) === null || _a === void 0 ? void 0 : _a.value
          };
          if (this.data.action.toLowerCase() === "save") this.collegeService.addCollege(college);else if (this.data.action.toLowerCase() === "update") {
            college.id = this.selectedCollege.id;
            this.collegeService.updateCollegeDetails(this.selectedCollege.id, college);
          }
          this.dialogRef.close();
          this.uiCommonService.load.next(true);
        }
      }]);

      return CollegeCreateUpdateDailogBoxComponent;
    }();

    CollegeCreateUpdateDailogBoxComponent.ɵfac = function CollegeCreateUpdateDailogBoxComponent_Factory(t) {
      return new (t || CollegeCreateUpdateDailogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_5__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_6__["LecturerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_7__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8));
    };

    CollegeCreateUpdateDailogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollegeCreateUpdateDailogBoxComponent,
      selectors: [["app-create-update-dailog-box"]],
      decls: 28,
      vars: 8,
      consts: [["mat-dialog-title", ""], [1, "content"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "type", "text", "formControlName", "city", "required", ""], ["matInput", "", "formControlName", "state", "required", ""], ["mat-dialog-actions", "", "align", "center"], ["type", "button", "mat-raised-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-raised-button", "", 3, "disabled"], ["formControlName", "collegeId", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "principalId"]],
      template: function CollegeCreateUpdateDailogBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CollegeCreateUpdateDailogBoxComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CollegeCreateUpdateDailogBoxComponent_div_5_Template, 6, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City / District");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CollegeCreateUpdateDailogBoxComponent_div_21_Template, 6, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.collegeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 6, ctx.disableSave$) || !ctx.collegeForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submitBtnLabel);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC9GOlxcYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaS1wb2NcXGNvbGxlZ2UtZGVtby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29sbGVnZS1kYXRhYmFzZVxcY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94XFxjcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9jcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3gvY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksV0FBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC9jcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCJkaXYgZGl2IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollegeCreateUpdateDailogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-update-dailog-box',
          templateUrl: './create-update-dailog-box.component.html',
          styleUrls: ['./create-update-dailog-box.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_5__["CollegeService"]
        }, {
          type: src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_6__["LecturerService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_7__["UiCommonService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/delete-prompt-dailog/delete-prompt-dailog.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/components/college-database/delete-prompt-dailog/delete-prompt-dailog.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DeletePromptDailogComponent */

  /***/
  function srcAppComponentsCollegeDatabaseDeletePromptDailogDeletePromptDailogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeletePromptDailogComponent", function () {
      return DeletePromptDailogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DeletePromptDailogComponent = /*#__PURE__*/function () {
      function DeletePromptDailogComponent(dialogRef, data) {
        _classCallCheck(this, DeletePromptDailogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DeletePromptDailogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAction",
        value: function onAction(event) {
          this.dialogRef.close({
            event: event
          });
        }
      }]);

      return DeletePromptDailogComponent;
    }();

    DeletePromptDailogComponent.ɵfac = function DeletePromptDailogComponent_Factory(t) {
      return new (t || DeletePromptDailogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8));
    };

    DeletePromptDailogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeletePromptDailogComponent,
      selectors: [["app-delete-prompt-dailog"]],
      decls: 9,
      vars: 0,
      consts: [[1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 3, "click"], ["mat-button", "", 3, "click"]],
      template: function DeletePromptDailogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you sure?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePromptDailogComponent_Template_button_click_5_listener() {
            return ctx.onAction("No");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePromptDailogComponent_Template_button_click_7_listener() {
            return ctx.onAction("Yes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["div[_ngcontent-%COMP%] {\n  width: 20em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL2RlbGV0ZS1wcm9tcHQtZGFpbG9nL0Y6XFxhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpLXBvY1xcY29sbGVnZS1kZW1vL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb2xsZWdlLWRhdGFiYXNlXFxkZWxldGUtcHJvbXB0LWRhaWxvZ1xcZGVsZXRlLXByb21wdC1kYWlsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9kZWxldGUtcHJvbXB0LWRhaWxvZy9kZWxldGUtcHJvbXB0LWRhaWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9kZWxldGUtcHJvbXB0LWRhaWxvZy9kZWxldGUtcHJvbXB0LWRhaWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICB3aWR0aDogMjBlbTtcclxufSIsImRpdiB7XG4gIHdpZHRoOiAyMGVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletePromptDailogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-prompt-dailog',
          templateUrl: './delete-prompt-dailog.component.html',
          styleUrls: ['./delete-prompt-dailog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: LecturerCreateUpdateDailogBoxComponent */

  /***/
  function srcAppComponentsCollegeDatabaseLecturersDataTableCreateUpdateDailogBoxCreateUpdateDailogBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerCreateUpdateDailogBoxComponent", function () {
      return LecturerCreateUpdateDailogBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/functional/lecturer.service */
    "./src/app/services/functional/lecturer.service.ts");
    /* harmony import */


    var src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/functional/stream.service */
    "./src/app/services/functional/stream.service.ts");
    /* harmony import */


    var src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/functional/college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function LecturerCreateUpdateDailogBoxComponent_mat_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stream_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", stream_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", stream_r1.name, " ");
      }
    }

    var LecturerCreateUpdateDailogBoxComponent = /*#__PURE__*/function () {
      function LecturerCreateUpdateDailogBoxComponent(lecturerService, streamService, collegeService, formBuilder, uiCommonService, data, dialogRef) {
        _classCallCheck(this, LecturerCreateUpdateDailogBoxComponent);

        this.lecturerService = lecturerService;
        this.streamService = streamService;
        this.collegeService = collegeService;
        this.formBuilder = formBuilder;
        this.uiCommonService = uiCommonService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.streamDropdownValues = new Array();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(LecturerCreateUpdateDailogBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.dialogRef.updateSize("27%");
          this.action = this.data.action.toLowerCase();
          this.lecturerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stream: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });

          if (this.action === "save") {
            this.title = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["LECTURER_CREATE_FORM_HEADER"];
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["SAVE_BTN_LABEL"];
          } else if (this.action === "update") {
            this.title = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["LECTURER_UPDATE_FORM_HEADER"];
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_BTN_LABEL"];
            this.lecturerForm.get('firstName').setValue(this.data.lecturer.firstName);
            this.lecturerForm.get('lastName').setValue(this.data.lecturer.lastName);
            this.lecturerForm.get('stream').setValue(this.data.lecturer.streamId);
          }

          this.disableSave$ = this.lecturerService.isLecturerFormSubmitDisabled.asObservable();
          this.subscriptions.add(this.streamService.streamsData$.subscribe(function (data) {
            _this5.streamDropdownValues = data;
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var lecturer = {
            firstName: this.lecturerForm.get('firstName').value,
            lastName: this.lecturerForm.get('lastName').value,
            collegeId: this.collegeService.currentActiveClgId,
            streamId: this.lecturerForm.get('stream').value
          };
          if (this.data.action.toLowerCase() === "save") this.lecturerService.addLecturer(lecturer);else if (this.data.action.toLowerCase() === "update") {
            lecturer.id = this.data.lecturer.id;
            this.lecturerService.updateLecturerDetails(this.data.lecturer.id, lecturer);
          }
          this.dialogRef.close();
          this.uiCommonService.load.next(true);
        }
      }]);

      return LecturerCreateUpdateDailogBoxComponent;
    }();

    LecturerCreateUpdateDailogBoxComponent.ɵfac = function LecturerCreateUpdateDailogBoxComponent_Factory(t) {
      return new (t || LecturerCreateUpdateDailogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    LecturerCreateUpdateDailogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LecturerCreateUpdateDailogBoxComponent,
      selectors: [["app-lecturer-create-update-dailog-box"]],
      decls: 26,
      vars: 7,
      consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["formControlName", "stream", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "center"], ["type", "button", "mat-raised-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-raised-button", "", 3, "disabled"], [3, "value"]],
      template: function LecturerCreateUpdateDailogBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LecturerCreateUpdateDailogBoxComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LecturerCreateUpdateDailogBoxComponent_mat_option_19_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.lecturerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.streamDropdownValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 5, ctx.disableSave$) || !ctx.lecturerForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submitBtnLabel);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL2xlY3R1cmVycy1kYXRhLXRhYmxlL2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC9GOlxcYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaS1wb2NcXGNvbGxlZ2UtZGVtby9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29sbGVnZS1kYXRhYmFzZVxcbGVjdHVyZXJzLWRhdGEtdGFibGVcXGNyZWF0ZS11cGRhdGUtZGFpbG9nLWJveFxcY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbGxlZ2UtZGF0YWJhc2UvbGVjdHVyZXJzLWRhdGEtdGFibGUvY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94L2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFdBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9sZWN0dXJlcnMtZGF0YS10YWJsZS9jcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3gvY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59IiwiZGl2IGRpdiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LecturerCreateUpdateDailogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lecturer-create-update-dailog-box',
          templateUrl: './create-update-dailog-box.component.html',
          styleUrls: ['./create-update-dailog-box.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]
        }, {
          type: src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"]
        }, {
          type: src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__["CollegeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__["UiCommonService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/lecturers-data-table/lecturers-data-table.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/components/college-database/lecturers-data-table/lecturers-data-table.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: LecturersDataTableComponent */

  /***/
  function srcAppComponentsCollegeDatabaseLecturersDataTableLecturersDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturersDataTableComponent", function () {
      return LecturersDataTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../delete-prompt-dailog/delete-prompt-dailog.component */
    "./src/app/components/college-database/delete-prompt-dailog/delete-prompt-dailog.component.ts");
    /* harmony import */


    var _create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/lecturers-data-table/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/functional/lecturer.service */
    "./src/app/services/functional/lecturer.service.ts");
    /* harmony import */


    var src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/functional/stream.service */
    "./src/app/services/functional/stream.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function LecturersDataTableComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.id, " ");
      }
    }

    function LecturersDataTableComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.firstName, " ");
      }
    }

    function LecturersDataTableComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.lastName, " ");
      }
    }

    function LecturersDataTableComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stream ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r16 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getStream(element_r16.streamId).name, " ");
      }
    }

    function LecturersDataTableComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LecturersDataTableComponent_td_21_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var element_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onUpdateClick(element_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LecturersDataTableComponent_td_21_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var element_r17 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onDeleteClick(element_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LecturersDataTableComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function LecturersDataTableComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var LecturersDataTableComponent = /*#__PURE__*/function () {
      function LecturersDataTableComponent(lecturerService, streamService, uiCommonService, dialog) {
        _classCallCheck(this, LecturersDataTableComponent);

        this.lecturerService = lecturerService;
        this.streamService = streamService;
        this.uiCommonService = uiCommonService;
        this.dialog = dialog;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.streamsData = new Array();
      }

      _createClass(LecturersDataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.loadTable$ = this.uiCommonService.load$;
          this.subcriptions.add(this.streamService.streamsData$.subscribe(function (data) {
            return _this6.streamsData = data;
          }));
          this.subcriptions.add(this.lecturerService.latestFiltredLecturerData.subscribe(function (data) {
            return _this6.dataSource.data = data;
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "getStream",
        value: function getStream(id) {
          return this.streamsData.find(function (stream) {
            return stream.id === id;
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_6__["LecturerCreateUpdateDailogBoxComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(lecturer) {
          this.openDeletePromptDailog(lecturer);
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick(lecturer) {
          this.openCreateOrUpdateDialog("update", lecturer);
        }
      }, {
        key: "onCreateClick",
        value: function onCreateClick() {
          this.openCreateOrUpdateDialog("save");
        }
      }, {
        key: "openCreateOrUpdateDialog",
        value: function openCreateOrUpdateDialog(action, lecturer) {
          var dialogRef = this.dialog.open(_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_6__["LecturerCreateUpdateDailogBoxComponent"], {
            data: {
              action: action,
              lecturer: lecturer
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openDeletePromptDailog",
        value: function openDeletePromptDailog(lecturer) {
          var _this7 = this;

          var dialogRef = this.dialog.open(_delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_5__["DeletePromptDailogComponent"], {
            width: "32em",
            data: {
              caller: "lecturer-table"
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if ((result === null || result === void 0 ? void 0 : result.event.toLowerCase()) === "yes") {
              _this7.uiCommonService.load.next(true);

              _this7.lecturerService.removeLecturer(lecturer.id);
            }
          });
        }
      }]);

      return LecturersDataTableComponent;
    }();

    LecturersDataTableComponent.ɵfac = function LecturersDataTableComponent_Factory(t) {
      return new (t || LecturersDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_7__["LecturerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_8__["StreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]));
    };

    LecturersDataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LecturersDataTableComponent,
      selectors: [["app-lecturers-data-table"]],
      viewQuery: function LecturersDataTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        displayedColumns: "displayedColumns"
      },
      decls: 25,
      vars: 8,
      consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["class", "loading-shade", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "stream"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "title", "Update", 3, "click"], ["mat-icon-button", "", "title", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function LecturersDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LecturersDataTableComponent_Template_button_click_1_listener() {
            return ctx.onCreateClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Lecturer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LecturersDataTableComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LecturersDataTableComponent_th_8_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LecturersDataTableComponent_td_9_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LecturersDataTableComponent_th_11_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LecturersDataTableComponent_td_12_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LecturersDataTableComponent_th_14_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LecturersDataTableComponent_td_15_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LecturersDataTableComponent_th_17_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LecturersDataTableComponent_td_18_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LecturersDataTableComponent_th_20_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LecturersDataTableComponent_td_21_Template, 7, 0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LecturersDataTableComponent_tr_22_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LecturersDataTableComponent_tr_23_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-paginator", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.loadTable$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL2xlY3R1cmVycy1kYXRhLXRhYmxlL0Y6XFxhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpLXBvY1xcY29sbGVnZS1kZW1vL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb2xsZWdlLWRhdGFiYXNlXFxsZWN0dXJlcnMtZGF0YS10YWJsZVxcbGVjdHVyZXJzLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9sZWN0dXJlcnMtZGF0YS10YWJsZS9sZWN0dXJlcnMtZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbGxlZ2UtZGF0YWJhc2UvbGVjdHVyZXJzLWRhdGEtdGFibGUvbGVjdHVyZXJzLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlbW8tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcbiAgXHJcbi5kZW1vLWJ1dHRvbiArIC5kZW1vLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmRlbW8tYnV0dG9uICsgLmRlbW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LecturersDataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lecturers-data-table',
          templateUrl: './lecturers-data-table.component.html',
          styleUrls: ['./lecturers-data-table.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_lecturer_service__WEBPACK_IMPORTED_MODULE_7__["LecturerService"]
        }, {
          type: src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_8__["StreamService"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__["UiCommonService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }];
      }, {
        displayedColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: StudentCreateUpdateDailogBoxComponent */

  /***/
  function srcAppComponentsCollegeDatabaseStudentsDataTableCreateUpdateDailogBoxCreateUpdateDailogBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCreateUpdateDailogBoxComponent", function () {
      return StudentCreateUpdateDailogBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/functional/student.service */
    "./src/app/services/functional/student.service.ts");
    /* harmony import */


    var src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/functional/stream.service */
    "./src/app/services/functional/stream.service.ts");
    /* harmony import */


    var src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/functional/college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function StudentCreateUpdateDailogBoxComponent_mat_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stream_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", stream_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", stream_r2.name, " ");
      }
    }

    function StudentCreateUpdateDailogBoxComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", year_r3, " ");
      }
    }

    var StudentCreateUpdateDailogBoxComponent = /*#__PURE__*/function () {
      function StudentCreateUpdateDailogBoxComponent(studentervice, streamService, collegeService, formBuilder, uiCommonService, data, dialogRef) {
        _classCallCheck(this, StudentCreateUpdateDailogBoxComponent);

        this.studentervice = studentervice;
        this.streamService = streamService;
        this.collegeService = collegeService;
        this.formBuilder = formBuilder;
        this.uiCommonService = uiCommonService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.streamDropdownValues = new Array();
        this.currentStreamYearDropdownValues = new Array();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(StudentCreateUpdateDailogBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.dialogRef.updateSize("27%");
          this.action = this.data.action.toLowerCase();
          this.studentForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stream: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            currentYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });

          if (this.action === "save") {
            this.title = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["STUDENT_CREATE_FORM_HEADER"];
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["SAVE_BTN_LABEL"];
          } else if (this.action === "update") {
            this.title = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["STUDENT_UPDATE_FORM_HEADER"];
            this.submitBtnLabel = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_BTN_LABEL"];
            this.studentForm.get('firstName').setValue(this.data.student.firstName);
            this.studentForm.get('lastName').setValue(this.data.student.lastName);
            this.studentForm.get('stream').setValue(this.data.student.streamId);
            this.studentForm.get('currentYear').setValue(this.data.student.currStreamYear);
          }

          this.disableSave$ = this.studentervice.isStudentFormSubmitDisabled.asObservable();
          this.subscriptions.add(this.streamService.streamsData$.subscribe(function (data) {
            _this8.streamDropdownValues = data;
            _this8.currentStreamYearDropdownValues = _toConsumableArray(Array.from({
              length: Math.max.apply(Math, _toConsumableArray(data.map(function (obj) {
                return obj.noOfYears;
              })))
            }, function (_, i) {
              return i + 1;
            }));
          }));
        }
      }, {
        key: "updateCurrentYearDropdown",
        value: function updateCurrentYearDropdown() {
          var _this9 = this;

          var maxYears = this.streamDropdownValues.find(function (stream) {
            return stream.id === _this9.studentForm.get("stream").value;
          }).noOfYears;
          this.currentStreamYearDropdownValues = _toConsumableArray(Array.from({
            length: maxYears
          }, function (_, i) {
            return i + 1;
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var student = {
            firstName: this.studentForm.get('firstName').value,
            lastName: this.studentForm.get('lastName').value,
            collegeId: this.collegeService.currentActiveClgId,
            streamId: this.studentForm.get('stream').value,
            currStreamYear: this.studentForm.get('currentYear').value
          };
          if (this.data.action.toLowerCase() === "save") this.studentervice.addStudent(student);else if (this.data.action.toLowerCase() === "update") {
            student.id = this.data.student.id;
            this.studentervice.updateStudentDetails(this.data.student.id, student);
          }
          this.dialogRef.close();
          this.uiCommonService.load.next(true);
        }
      }]);

      return StudentCreateUpdateDailogBoxComponent;
    }();

    StudentCreateUpdateDailogBoxComponent.ɵfac = function StudentCreateUpdateDailogBoxComponent_Factory(t) {
      return new (t || StudentCreateUpdateDailogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
    };

    StudentCreateUpdateDailogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentCreateUpdateDailogBoxComponent,
      selectors: [["app-student-create-update-dailog-box"]],
      decls: 31,
      vars: 8,
      consts: [["mat-dialog-title", ""], [1, "content"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matInput", "", "formControlName", "lastName", "required", ""], ["formControlName", "stream", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "currentYear", "required", ""], ["mat-dialog-actions", "", "align", "center"], ["type", "button", "mat-raised-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-raised-button", "", 3, "disabled"], [3, "value"]],
      template: function StudentCreateUpdateDailogBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentCreateUpdateDailogBoxComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StudentCreateUpdateDailogBoxComponent_Template_mat_select_selectionChange_18_listener() {
            return ctx.updateCurrentYearDropdown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentCreateUpdateDailogBoxComponent_mat_option_19_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Current Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentCreateUpdateDailogBoxComponent_mat_option_24_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.streamDropdownValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentStreamYearDropdownValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 6, ctx.disableSave$) || !ctx.studentForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submitBtnLabel);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL3N0dWRlbnRzLWRhdGEtdGFibGUvY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94L0Y6XFxhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpLXBvY1xcY29sbGVnZS1kZW1vL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb2xsZWdlLWRhdGFiYXNlXFxzdHVkZW50cy1kYXRhLXRhYmxlXFxjcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3hcXGNyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL3N0dWRlbnRzLWRhdGEtdGFibGUvY3JlYXRlLXVwZGF0ZS1kYWlsb2ctYm94L2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFdBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9zdHVkZW50cy1kYXRhLXRhYmxlL2NyZWF0ZS11cGRhdGUtZGFpbG9nLWJveC9jcmVhdGUtdXBkYXRlLWRhaWxvZy1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCJkaXYgZGl2IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCreateUpdateDailogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-create-update-dailog-box',
          templateUrl: './create-update-dailog-box.component.html',
          styleUrls: ['./create-update-dailog-box.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]
        }, {
          type: src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"]
        }, {
          type: src_app_services_functional_college_service__WEBPACK_IMPORTED_MODULE_7__["CollegeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_8__["UiCommonService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/college-database/students-data-table/students-data-table.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/components/college-database/students-data-table/students-data-table.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: StudentsDataTableComponent */

  /***/
  function srcAppComponentsCollegeDatabaseStudentsDataTableStudentsDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsDataTableComponent", function () {
      return StudentsDataTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../delete-prompt-dailog/delete-prompt-dailog.component */
    "./src/app/components/college-database/delete-prompt-dailog/delete-prompt-dailog.component.ts");
    /* harmony import */


    var _create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-update-dailog-box/create-update-dailog-box.component */
    "./src/app/components/college-database/students-data-table/create-update-dailog-box/create-update-dailog-box.component.ts");
    /* harmony import */


    var src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/functional/stream.service */
    "./src/app/services/functional/stream.service.ts");
    /* harmony import */


    var src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/functional/student.service */
    "./src/app/services/functional/student.service.ts");
    /* harmony import */


    var src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/ui-common.service */
    "./src/app/services/ui-common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function StudentsDataTableComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.id, " ");
      }
    }

    function StudentsDataTableComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.firstName, " ");
      }
    }

    function StudentsDataTableComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.lastName, " ");
      }
    }

    function StudentsDataTableComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stream ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r20 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.getStream(element_r20.streamId).name, " ");
      }
    }

    function StudentsDataTableComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Course Duration(Year) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r21 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.getStream(element_r21.streamId).noOfYears, " ");
      }
    }

    function StudentsDataTableComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Current Year ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.currStreamYear, " ");
      }
    }

    function StudentsDataTableComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsDataTableComponent_td_27_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var element_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onUpdateClick(element_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsDataTableComponent_td_27_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var element_r23 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onDeleteClick(element_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentsDataTableComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    function StudentsDataTableComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var StudentsDataTableComponent = /*#__PURE__*/function () {
      function StudentsDataTableComponent(streamService, studentService, uiCommonService, dialog) {
        _classCallCheck(this, StudentsDataTableComponent);

        this.streamService = streamService;
        this.studentService = studentService;
        this.uiCommonService = uiCommonService;
        this.dialog = dialog;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.streamsData = new Array();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(StudentsDataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.loadTable$ = this.uiCommonService.load$;
          this.subscriptions.add(this.streamService.streamsData$.subscribe(function (data) {
            return _this10.streamsData = data;
          }));
          this.subscriptions.add(this.studentService.latestFilteredStudentData.asObservable().subscribe(function (data) {
            _this10.dataSource.data = data;
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "getStream",
        value: function getStream(id) {
          return this.streamsData.find(function (stream) {
            return stream.id === id;
          });
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(student) {
          this.openDeletePromptDailog(student);
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick(student) {
          this.openCreateOrUpdateDialog("update", student);
        }
      }, {
        key: "onCreateClick",
        value: function onCreateClick() {
          this.openCreateOrUpdateDialog("save");
        }
      }, {
        key: "openCreateOrUpdateDialog",
        value: function openCreateOrUpdateDialog(action, student) {
          var dialogRef = this.dialog.open(_create_update_dailog_box_create_update_dailog_box_component__WEBPACK_IMPORTED_MODULE_6__["StudentCreateUpdateDailogBoxComponent"], {
            data: {
              action: action,
              student: student
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openDeletePromptDailog",
        value: function openDeletePromptDailog(student) {
          var _this11 = this;

          var dialogRef = this.dialog.open(_delete_prompt_dailog_delete_prompt_dailog_component__WEBPACK_IMPORTED_MODULE_5__["DeletePromptDailogComponent"], {
            data: {
              caller: "student-table"
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if ((result === null || result === void 0 ? void 0 : result.event.toLowerCase()) === "yes") {
              _this11.uiCommonService.load.next(true);

              _this11.studentService.removeStudent(student.id);
            }
          });
        }
      }]);

      return StudentsDataTableComponent;
    }();

    StudentsDataTableComponent.ɵfac = function StudentsDataTableComponent_Factory(t) {
      return new (t || StudentsDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_7__["StreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__["UiCommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]));
    };

    StudentsDataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentsDataTableComponent,
      selectors: [["app-students-data-table"]],
      viewQuery: function StudentsDataTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        displayedColumns: "displayedColumns",
        data: "data"
      },
      decls: 31,
      vars: 8,
      consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["class", "loading-shade", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "stream"], ["matColumnDef", "maxYearsInStream", "mat-sort-header", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "currentYear"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", "title", "Update", 3, "click"], ["mat-icon-button", "", "title", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function StudentsDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsDataTableComponent_Template_button_click_1_listener() {
            return ctx.onCreateClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Student ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentsDataTableComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentsDataTableComponent_th_8_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentsDataTableComponent_td_9_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentsDataTableComponent_th_11_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentsDataTableComponent_td_12_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentsDataTableComponent_th_14_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentsDataTableComponent_td_15_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudentsDataTableComponent_th_17_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StudentsDataTableComponent_td_18_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StudentsDataTableComponent_th_20_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StudentsDataTableComponent_td_21_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StudentsDataTableComponent_th_23_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentsDataTableComponent_td_24_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StudentsDataTableComponent_th_26_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StudentsDataTableComponent_td_27_Template, 7, 0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, StudentsDataTableComponent_tr_28_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, StudentsDataTableComponent_tr_29_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.loadTable$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL3N0dWRlbnRzLWRhdGEtdGFibGUvRjpcXGFuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGktcG9jXFxjb2xsZWdlLWRlbW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbGxlZ2UtZGF0YWJhc2VcXHN0dWRlbnRzLWRhdGEtdGFibGVcXHN0dWRlbnRzLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVnZS1kYXRhYmFzZS9zdHVkZW50cy1kYXRhLXRhYmxlL3N0dWRlbnRzLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWdlLWRhdGFiYXNlL3N0dWRlbnRzLWRhdGEtdGFibGUvc3R1ZGVudHMtZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGVtby1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuICBcclxuLmRlbW8tYnV0dG9uICsgLmRlbW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVtby1idXR0b24tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uZGVtby1idXR0b24gKyAuZGVtby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsDataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-students-data-table',
          templateUrl: './students-data-table.component.html',
          styleUrls: ['./students-data-table.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_functional_stream_service__WEBPACK_IMPORTED_MODULE_7__["StreamService"]
        }, {
          type: src_app_services_functional_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]
        }, {
          type: src_app_services_ui_common_service__WEBPACK_IMPORTED_MODULE_9__["UiCommonService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }];
      }, {
        displayedColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/interceptors/TestInterceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/interceptors/TestInterceptor.ts ***!
    \*************************************************/

  /*! exports provided: MyInterceptor */

  /***/
  function srcAppInterceptorsTestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyInterceptor", function () {
      return MyInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_HttpHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/HttpHeaders */
    "./src/app/common/HttpHeaders.ts");

    var MyInterceptor = /*#__PURE__*/function () {
      function MyInterceptor() {
        _classCallCheck(this, MyInterceptor);
      }

      _createClass(MyInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // Attach headers to every request
          var reqClone = req.clone({
            setHeaders: _common_HttpHeaders__WEBPACK_IMPORTED_MODULE_3__["FrequentHttpHeaders"]
          });
          return next.handle(reqClone).pipe( // Retry calling the http method one more time on failure
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), // Check if the request is related to college, so that we want to modify only the response from collge API'S 
          // filter(event => event instanceof HttpResponse && reqClone.url.includes('college')),
          // tap((response: HttpResponse<any>) => console.log("Reponse - ", response.body)),
          // Handle Error
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            alert("You got error with ".concat(reqClone.url));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return MyInterceptor;
    }();

    MyInterceptor.ɵfac = function MyInterceptor_Factory(t) {
      return new (t || MyInterceptor)();
    };

    MyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MyInterceptor,
      factory: MyInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data/in-memory-data.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/data/in-memory-data.service.ts ***!
    \*********************************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppServicesDataInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_helpers_college_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/common/helpers/college.data */
    "./src/app/common/helpers/college.data.ts");
    /* harmony import */


    var src_app_common_helpers_lecturer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/helpers/lecturer.data */
    "./src/app/common/helpers/lecturer.data.ts");
    /* harmony import */


    var src_app_common_helpers_stream_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/helpers/stream.data */
    "./src/app/common/helpers/stream.data.ts");
    /* harmony import */


    var src_app_common_helpers_student_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/helpers/student.data */
    "./src/app/common/helpers/student.data.ts");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb(reqInfo) {
          return {
            stream: src_app_common_helpers_stream_data__WEBPACK_IMPORTED_MODULE_3__["STREAM_DATA"],
            student: src_app_common_helpers_student_data__WEBPACK_IMPORTED_MODULE_4__["STUDENT_DATA"],
            lecturer: src_app_common_helpers_lecturer_data__WEBPACK_IMPORTED_MODULE_2__["LECTURER_DATA"],
            college: src_app_common_helpers_college_data__WEBPACK_IMPORTED_MODULE_1__["COLLEGE_DATA"]
          };
        }
      }, {
        key: "genId",
        value: function genId(data) {
          return data.length > 0 ? Math.max.apply(Math, _toConsumableArray(data.map(function (t) {
            return t.id;
          }))) + 1 : 1;
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
      return new (t || InMemoryDataService)();
    };

    InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InMemoryDataService,
      factory: InMemoryDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/functional/college.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/functional/college.service.ts ***!
    \********************************************************/

  /*! exports provided: CollegeService */

  /***/
  function srcAppServicesFunctionalCollegeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollegeService", function () {
      return CollegeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ui_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ui-common.service */
    "./src/app/services/ui-common.service.ts");

    var CollegeService = /*#__PURE__*/function () {
      function CollegeService(_http, uiCommonService) {
        var _this12 = this;

        _classCallCheck(this, CollegeService);

        this._http = _http;
        this.uiCommonService = uiCommonService;
        this.requestUrl = "api/college/";
        this.collegesData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.collegesData$ = this.collegesData.asObservable();
        this.latestClosedPanelId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.latestOpenedPanelId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.latestFilteredCollegesData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.latestFilteredCollegesData$ = this.latestFilteredCollegesData.asObservable();
        this.isCollegeFormSubmitDisabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.refreshCollegeData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions.add(this.latestOpenedPanelId.asObservable().subscribe(function (collegeId) {
          return _this12.currentActiveClgId = collegeId;
        }));
        this.filterCollegeData();
      }

      _createClass(CollegeService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.collegesData.complete();
        }
      }, {
        key: "addCollege",
        value: function addCollege(college) {
          var _this13 = this;

          var response$ = this._http.post(this.requestUrl, college);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this13.isCollegeFormSubmitDisabled.next(false);

            data ? _this13.getAllCollegesDetails() : null;
          }, function (error) {
            return _this13.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "getAllCollegesDetails",
        value: function getAllCollegesDetails() {
          var _this14 = this;

          this.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["COLLEGE_LOADING_MESSAGE"]);

          var response$ = this._http.get(this.requestUrl);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this14.collegesData.next(data);

            _this14.uiCommonService.loadingMessage.next('');
          }, function (error) {
            return _this14.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "updateCollegeDetails",
        value: function updateCollegeDetails(id, college) {
          var _this15 = this;

          var response$ = this._http.put(this.requestUrl + id, college);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this15.isCollegeFormSubmitDisabled.next(false);

            _this15.getAllCollegesDetails();
          }, function (error) {
            return _this15.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "removeCollege",
        value: function removeCollege(id) {
          var _this16 = this;

          var response$ = this._http["delete"](this.requestUrl + id);

          this.subscriptions.add(response$.subscribe(function (data) {
            return data ? _this16.getAllCollegesDetails() : null;
          }, function (error) {
            return _this16.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "filterCollegeData",
        value: function filterCollegeData() {
          var _this17 = this;

          this.subscriptions.add(this.collegesData$.subscribe(function (data) {
            _this17.latestFilteredCollegesData.next(data);

            _this17.uiCommonService.load.next(false);
          }));
        }
      }]);

      return CollegeService;
    }();

    CollegeService.ɵfac = function CollegeService_Factory(t) {
      return new (t || CollegeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ui_common_service__WEBPACK_IMPORTED_MODULE_4__["UiCommonService"]));
    };

    CollegeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CollegeService,
      factory: CollegeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollegeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ui_common_service__WEBPACK_IMPORTED_MODULE_4__["UiCommonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/functional/lecturer.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/functional/lecturer.service.ts ***!
    \*********************************************************/

  /*! exports provided: LecturerService */

  /***/
  function srcAppServicesFunctionalLecturerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerService", function () {
      return LecturerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _college_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var _ui_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui-common.service */
    "./src/app/services/ui-common.service.ts");

    var LecturerService = /*#__PURE__*/function () {
      function LecturerService(_http, collegeService, uiCommonService) {
        _classCallCheck(this, LecturerService);

        this._http = _http;
        this.collegeService = collegeService;
        this.uiCommonService = uiCommonService;
        this.requestUrl = "api/lecturer/";
        this.lecturersData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.lecturersData$ = this.lecturersData.asObservable();
        this.latestFiltredLecturerData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.isLecturerFormSubmitDisabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.filterLecturerData();
      }

      _createClass(LecturerService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.lecturersData.complete();
        }
      }, {
        key: "addLecturer",
        value: function addLecturer(lecturer) {
          var _this18 = this;

          this.isLecturerFormSubmitDisabled.next(true);

          var response$ = this._http.post(this.requestUrl, lecturer);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this18.isLecturerFormSubmitDisabled.next(false);

            data ? _this18.getAllLecturerDetails() : null;
          }, function (error) {
            return _this18.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "getAllLecturerDetails",
        value: function getAllLecturerDetails() {
          var _this19 = this;

          var response$ = this._http.get(this.requestUrl);

          this.subscriptions.add(response$.subscribe(function (data) {
            return _this19.lecturersData.next(data);
          }, function (error) {
            return _this19.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "updateLecturerDetails",
        value: function updateLecturerDetails(id, lecturer) {
          var _this20 = this;

          this.isLecturerFormSubmitDisabled.next(true);

          var response$ = this._http.put(this.requestUrl + id, lecturer);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this20.isLecturerFormSubmitDisabled.next(false);

            _this20.getAllLecturerDetails();
          }, function (error) {
            return _this20.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "removeLecturer",
        value: function removeLecturer(id) {
          var _this21 = this;

          var response$ = this._http["delete"](this.requestUrl + id);

          this.subscriptions.add(response$.subscribe(function (data) {
            return _this21.getAllLecturerDetails();
          }, function (error) {
            return _this21.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "filterLecturerData",
        value: function filterLecturerData() {
          var _this22 = this;

          this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.collegeService.latestOpenedPanelId.asObservable(), this.lecturersData$, function (collegeId, lecturers) {
            _this22.latestFiltredLecturerData.next(lecturers.filter(function (obj) {
              return obj.collegeId == collegeId;
            }));

            _this22.uiCommonService.load.next(false);
          }).subscribe());
        }
      }]);

      return LecturerService;
    }();

    LecturerService.ɵfac = function LecturerService_Factory(t) {
      return new (t || LecturerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ui_common_service__WEBPACK_IMPORTED_MODULE_5__["UiCommonService"]));
    };

    LecturerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LecturerService,
      factory: LecturerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LecturerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]
        }, {
          type: _ui_common_service__WEBPACK_IMPORTED_MODULE_5__["UiCommonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/functional/stream.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/functional/stream.service.ts ***!
    \*******************************************************/

  /*! exports provided: StreamService */

  /***/
  function srcAppServicesFunctionalStreamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamService", function () {
      return StreamService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StreamService = /*#__PURE__*/function () {
      function StreamService(_http) {
        _classCallCheck(this, StreamService);

        this._http = _http;
        this.requestUrl = "api/stream/";
        this.streamsData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.streamsData$ = this.streamsData.asObservable();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(StreamService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.streamsData.complete();
        }
      }, {
        key: "addStream",
        value: function addStream(stream) {
          var _this23 = this;

          var response$ = this._http.post(this.requestUrl, stream);

          this.subscriptions.add(response$.subscribe(function (data) {
            return data ? _this23.getAllStreamsDetails() : null;
          }, function (error) {
            return console.log(error);
          }));
        }
      }, {
        key: "getAllStreamsDetails",
        value: function getAllStreamsDetails(caller) {
          var _this24 = this;

          var response$ = this._http.get(this.requestUrl);

          this.subscriptions.add(response$.subscribe(function (data) {
            return _this24.streamsData.next(data);
          }, function (error) {
            return console.log(error);
          }));
        }
      }, {
        key: "updateStreamDetails",
        value: function updateStreamDetails(id, stream) {
          var _this25 = this;

          var response$ = this._http.put(this.requestUrl + id, stream);

          this.subscriptions.add(response$.subscribe(function (data) {
            return data ? _this25.getAllStreamsDetails() : null;
          }, function (error) {
            return console.log(error);
          }));
        }
      }, {
        key: "removeStream",
        value: function removeStream(id) {
          var _this26 = this;

          var response$ = this._http["delete"](this.requestUrl + id);

          this.subscriptions.add(response$.subscribe(function (data) {
            return data ? _this26.getAllStreamsDetails() : null;
          }, function (error) {
            return console.log(error);
          }));
        }
      }]);

      return StreamService;
    }();

    StreamService.ɵfac = function StreamService_Factory(t) {
      return new (t || StreamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    StreamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StreamService,
      factory: StreamService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/functional/student.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/functional/student.service.ts ***!
    \********************************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesFunctionalStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/Constants */
    "./src/app/common/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _college_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./college.service */
    "./src/app/services/functional/college.service.ts");
    /* harmony import */


    var _ui_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui-common.service */
    "./src/app/services/ui-common.service.ts");

    var StudentService = /*#__PURE__*/function () {
      function StudentService(_http, collegeService, uiCommonService) {
        _classCallCheck(this, StudentService);

        this._http = _http;
        this.collegeService = collegeService;
        this.uiCommonService = uiCommonService;
        this.requestUrl = "api/student/";
        this.studentsData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.studentsData$ = this.studentsData.asObservable();
        this.latestFilteredStudentData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isStudentFormSubmitDisabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.filterStudentData();
      }

      _createClass(StudentService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
          this.studentsData.complete();
        }
      }, {
        key: "addStudent",
        value: function addStudent(student) {
          var _this27 = this;

          this.isStudentFormSubmitDisabled.next(true);

          var response$ = this._http.post(this.requestUrl, student);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this27.isStudentFormSubmitDisabled.next(false);

            data ? _this27.getAllStudentsDetails() : null;
          }, function (error) {
            return _this27.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "getAllStudentsDetails",
        value: function getAllStudentsDetails() {
          var _this28 = this;

          var response$ = this._http.get(this.requestUrl);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this28.studentsData.next(data);
          }, function (error) {
            return _this28.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "updateStudentDetails",
        value: function updateStudentDetails(id, student) {
          var _this29 = this;

          this.isStudentFormSubmitDisabled.next(true);

          var response$ = this._http.put(this.requestUrl + id, student);

          this.subscriptions.add(response$.subscribe(function (data) {
            _this29.isStudentFormSubmitDisabled.next(false);

            _this29.getAllStudentsDetails();
          }, function (error) {
            return _this29.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "removeStudent",
        value: function removeStudent(id) {
          var _this30 = this;

          var response$ = this._http["delete"](this.requestUrl + id);

          this.subscriptions.add(response$.subscribe(function (data) {
            return _this30.getAllStudentsDetails();
          }, function (error) {
            return _this30.uiCommonService.loadingMessage.next(src_app_common_Constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE"]);
          }));
        }
      }, {
        key: "filterStudentData",
        value: function filterStudentData() {
          var _this31 = this;

          this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.collegeService.latestOpenedPanelId.asObservable(), this.studentsData$, function (collegeId, students) {
            if (collegeId && students) {
              _this31.latestFilteredStudentData.next(students.filter(function (obj) {
                return obj.collegeId == collegeId;
              }));

              _this31.uiCommonService.load.next(false);
            }
          }).subscribe());
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ui_common_service__WEBPACK_IMPORTED_MODULE_5__["UiCommonService"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _college_service__WEBPACK_IMPORTED_MODULE_4__["CollegeService"]
        }, {
          type: _ui_common_service__WEBPACK_IMPORTED_MODULE_5__["UiCommonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ui-common.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/ui-common.service.ts ***!
    \***********************************************/

  /*! exports provided: UiCommonService */

  /***/
  function srcAppServicesUiCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiCommonService", function () {
      return UiCommonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UiCommonService = /*#__PURE__*/_createClass(function UiCommonService() {
      _classCallCheck(this, UiCommonService);

      this.load = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
      this.load$ = this.load.asObservable();
      this.loadingMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      this.loadingMessage$ = this.loadingMessage.asObservable();
    });

    UiCommonService.ɵfac = function UiCommonService_Factory(t) {
      return new (t || UiCommonService)();
    };

    UiCommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UiCommonService,
      factory: UiCommonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiCommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\angular-in-memory-web-api-poc\college-demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map