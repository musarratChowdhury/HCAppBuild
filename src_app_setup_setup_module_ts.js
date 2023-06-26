"use strict";
(self["webpackChunkHCApp"] = self["webpackChunkHCApp"] || []).push([["src_app_setup_setup_module_ts"],{

/***/ 2750:
/*!***********************************************!*\
  !*** ./src/app/setup/setup-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupRoutingModule: () => (/* binding */ SetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.component */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _setup_component__WEBPACK_IMPORTED_MODULE_0__.SetupComponent
}];
class SetupRoutingModule {}
SetupRoutingModule.ɵfac = function SetupRoutingModule_Factory(t) {
  return new (t || SetupRoutingModule)();
};
SetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SetupRoutingModule
});
SetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 740:
/*!******************************************!*\
  !*** ./src/app/setup/setup.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupComponent: () => (/* binding */ SetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware/socketService.type */ 4274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/socketservice.service */ 1982);
/* harmony import */ var _middleware_localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/localStorageService/local-storage-service.service */ 6690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);







class SetupComponent {
  constructor(socketService, localStorageService, router) {
    this.socketService = socketService;
    this.localStorageService = localStorageService;
    this.router = router;
    /**
     *
     */
    this.wickets = 0;
    this.overs = 0;
  }
  ngOnInit() {
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      playerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      roomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      teamName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      matchMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      wickets: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      overs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0),
      isPowerPlayEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
      isCaptain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false)
    });
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.LOADGAMESCREEN, data => {
      this.navigateToGameScreen(data);
    });
  }
  navigateToGameScreen(data) {
    console.log(data);
    this.router.navigate(['/game']).then();
    //make a seperate service for handling localstorage data storing and fetching
    this.localStorageService.setData('matchRoomData', data);
  }
  submitForm() {
    console.log(this.formGroup?.value);
    this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.InitialFormSubmit, this.formGroup.value);
  }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) {
  return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_middleware_localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
SetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SetupComponent,
  selectors: [["app-setup"]],
  decls: 43,
  vars: 1,
  consts: [["id", "room-create-form", 1, "room-create-form", 3, "formGroup", "ngSubmit"], ["for", "team"], ["formControlName", "teamName", "id", "team", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3"], ["value", "", "selected", "", "disabled", ""], ["value", "A"], ["value", "B"], ["formControlName", "matchMode", "id", "matchMode", "aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3"], ["value", "1v1"], ["value", "2v2"], [1, "form-floating", "mb-3"], ["formControlName", "playerName", "type", "text", "id", "name", "placeholder", "Enter your name", "required", "", 1, "form-control"], ["formControlName", "roomName", "type", "text", "id", "room", "placeholder", "Enter room name", "required", "", 1, "form-control"], ["for", "wickets", 1, "form-label"], ["formControlName", "wickets", "type", "range", "min", "0", "max", "10", "step", "2", "id", "wickets", "name", "Wickets", "required", "", 1, "form-range"], ["for", "over", 1, "form-label"], ["formControlName", "overs", "type", "range", "min", "1", "max", "10", "step", "1", "id", "over", "name", "Over", "required", "", 1, "form-range"], [1, "form-check"], ["type", "checkbox", "formControlName", "isPowerPlayEnabled", "id", "isPowerPlayEnabled", 1, "form-check-input"], ["for", "isPowerPlayEnabled", 1, "form-check-label"], ["type", "checkbox", "formControlName", "isCaptain", "id", "isCaptain", 1, "form-check-input"], ["for", "isCaptain", 1, "form-check-label"], ["type", "submit", "id", "submitBtn", "value", "Submit"]],
  template: function SetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SetupComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Select your Team:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 2)(5, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select your Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Team A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Team B");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "select", 6)(13, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Select MatchMode");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "1 vs 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "2 vs 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Wickets:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 13)(27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Over:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 15)(31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Enable PowerPlay Rules");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Joining As A Captain");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "br")(41, "br")(42, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".room-create-form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 74%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  \n\n\n  display: none;\n  align-items: center;\n  justify-content: center;\n  \n\n}\n\n.room-create-form[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  margin: 0 auto;\n  text-align: left;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.room-create-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 12px 20px;\n  margin-bottom: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.room-create-form[_ngcontent-%COMP%]   input[type=\"room\"][_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 12px 20px;\n  margin-bottom: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.room-create-form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.room-create-form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n  background-color: #1c6320;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2V0dXAvc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQ0FBaUM7O0VBRWpDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tLWNyZWF0ZS1mb3JtLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzQlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKiBvdGhlciBDU1MgcHJvcGVydGllcyBnbyBoZXJlICovXHJcblxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiAxMDAlIG9mIHZpZXdwb3J0IGhlaWdodCAqL1xyXG59XHJcblxyXG4ucm9vbS1jcmVhdGUtZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucm9vbS1jcmVhdGUtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnJvb20tY3JlYXRlLWZvcm0gaW5wdXRbdHlwZT1cInJvb21cIl0ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yb29tLWNyZWF0ZS1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvb20tY3JlYXRlLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjNjMyMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 2769:
/*!***************************************!*\
  !*** ./src/app/setup/setup.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupModule: () => (/* binding */ SetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-routing.module */ 2750);
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup.component */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





class SetupModule {}
SetupModule.ɵfac = function SetupModule_Factory(t) {
  return new (t || SetupModule)();
};
SetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SetupModule
});
SetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SetupModule, {
    declarations: [_setup_component__WEBPACK_IMPORTED_MODULE_1__.SetupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_setup_setup_module_ts.js.map