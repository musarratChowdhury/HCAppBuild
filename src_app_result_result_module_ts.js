"use strict";
(self["webpackChunkHCApp"] = self["webpackChunkHCApp"] || []).push([["src_app_result_result_module_ts"],{

/***/ 3593:
/*!*************************************************!*\
  !*** ./src/app/result/result-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultRoutingModule: () => (/* binding */ ResultRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.component */ 6312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _result_component__WEBPACK_IMPORTED_MODULE_0__.ResultComponent
}];
class ResultRoutingModule {}
ResultRoutingModule.ɵfac = function ResultRoutingModule_Factory(t) {
  return new (t || ResultRoutingModule)();
};
ResultRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ResultRoutingModule
});
ResultRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResultRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6312:
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultComponent: () => (/* binding */ ResultComponent)
/* harmony export */ });
/* harmony import */ var src_Types_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Types/interfaces */ 4670);
/* harmony import */ var _middleware_socketService_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/socketService.type */ 4274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/socketservice.service */ 1982);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





class ResultComponent {
  /**
   *
   */
  constructor(socketService, ngZone, router) {
    this.socketService = socketService;
    this.ngZone = ngZone;
    this.router = router;
    this.playerNames = {
      player1: "Player 1",
      player2: "Player 2",
      player3: "Player 3",
      player4: "Player 4"
    };
    this.playerRuns = {
      player1: 0,
      player2: 0,
      player3: 0,
      player4: 0
    };
    this.playerStrikeRate = {
      player1: 0,
      player2: 0,
      player3: 0,
      player4: 0
    };
    this.teamRuns = {
      teamA: 0,
      teamB: 0
    };
    this.matchResultText = "";
  }
  ngOnInit() {
    this.ngZone.run(() => {
      if (this.socketService.MatchResult.matchWinType == src_Types_interfaces__WEBPACK_IMPORTED_MODULE_0__.MatchWinType.IsDraw) {
        this.matchResultText = "The Match is Draw!";
      } else if (this.socketService.MatchResult.matchWinType == src_Types_interfaces__WEBPACK_IMPORTED_MODULE_0__.MatchWinType.WonByRun) {
        this.matchResultText = `Team ${this.socketService.MatchResult.winnerTeam.name} has won the match by
                                       ${this.socketService.MatchResult.wonByRun} runs`;
      } else {
        this.matchResultText = `Team ${this.socketService.MatchResult.winnerTeam.name} has won the match by
                                       ${this.socketService.MatchResult.wonByWicket} wickets`;
      }
      this.playerRuns.player1 = this.socketService.MatchData.teamA.player1.runs;
      this.playerRuns.player2 = this.socketService.MatchData.teamA.player2.runs;
      this.playerRuns.player3 = this.socketService.MatchData.teamB.player1.runs;
      this.playerRuns.player4 = this.socketService.MatchData.teamB.player2.runs;
      this.playerStrikeRate.player1 = this.socketService.MatchResult.teamA.player1.strikeRate;
      this.playerStrikeRate.player2 = this.socketService.MatchResult.teamA.player2.strikeRate;
      this.playerStrikeRate.player3 = this.socketService.MatchResult.teamB.player1.strikeRate;
      this.playerStrikeRate.player4 = this.socketService.MatchResult.teamB.player2.strikeRate;
      this.playerNames.player1 = this.socketService.MatchResult.teamA.player1.name;
      this.playerNames.player2 = this.socketService.MatchResult.teamA.player2.name;
      this.playerNames.player3 = this.socketService.MatchResult.teamB.player1.name;
      this.playerNames.player4 = this.socketService.MatchResult.teamB.player2.name;
      this.teamRuns.teamA = this.socketService.MatchResult.teamA.player1.runs + this.socketService.MatchResult.teamA.player2.runs;
      this.teamRuns.teamB = this.socketService.MatchResult.teamB.player1.runs + this.socketService.MatchResult.teamB.player2.runs;
    });
  }
  handleBack() {
    this.router.navigate(['/setup']).then();
    this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_1__.GameEvents.DeleteRoom, this.socketService.MatchData.name);
  }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) {
  return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ResultComponent,
  selectors: [["app-result"]],
  decls: 45,
  vars: 15,
  consts: [[1, "result-container"], [1, "title"], [1, "match-result"], [1, "match-result-text"], [1, "team"], [1, "team-name"], [1, "players-container"], [1, "player"], [1, "player-name"], [1, "player-runs"], [1, "player-sr"], [1, "back-button-container"], [1, "back-button", 3, "click"]],
  template: function ResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Match Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7)(18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 4)(25, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6)(28, "div", 7)(29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 7)(36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11)(43, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_43_listener() {
        return ctx.handleBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.matchResultText);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Team A : ", ctx.teamRuns.teamA, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Name : ", ctx.playerNames.player1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs: ", ctx.playerRuns.player1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/R : ", ctx.playerStrikeRate.player1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Name : ", ctx.playerNames.player2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs: ", ctx.playerRuns.player2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/R : ", ctx.playerStrikeRate.player2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Team B : ", ctx.teamRuns.teamB, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Name : ", ctx.playerNames.player3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs: ", ctx.playerRuns.player3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/R : ", ctx.playerStrikeRate.player3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Name : ", ctx.playerNames.player4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs: ", ctx.playerRuns.player4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/R : ", ctx.playerStrikeRate.player4, "");
    }
  },
  styles: [".result-container[_ngcontent-%COMP%]{\n    display: grid;\n    justify-content: center;\n    -webkit-user-select: none;\n            user-select: none;\n    align-items: center;\n}\n.back-button-container[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n}\n.back-button[_ngcontent-%COMP%]{\n    padding: .2rem .4rem;\n    margin: .4rem .5rem;\n    cursor: pointer;\n    font-size: 1.2rem;\n    font-family: \"SunnySpells\";\n}\n.title[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: \"LedBoardR\";\n\n}\n.team-name[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: \"LCD2N\";\n\n}\n.match-result-text[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size:1.2rem;\n    font-family: \"LCDN\";\n}\n.team[_ngcontent-%COMP%]{\n    display: grid;\n    justify-content: center;\n}\n.players-container[_ngcontent-%COMP%]{\n    display: flex;\n    text-align: center;\n    justify-content: space-around;\n    font-family: \"LCD2N\";\n    width: 350px;\n    background-color: bisque;\n}\n.player[_ngcontent-%COMP%]{\n    text-align: center;\n    padding: 1rem .5rem\n}\n.player-name[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    padding: .3rem .1rem;\n}\n.player-runs[_ngcontent-%COMP%], .player-sr[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n    padding: .3rem .1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3Qjs7QUFFNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7O0FBRXhCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJhY2stYnV0dG9uLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFjay1idXR0b257XHJcbiAgICBwYWRkaW5nOiAuMnJlbSAuNHJlbTtcclxuICAgIG1hcmdpbjogLjRyZW0gLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlN1bm55U3BlbGxzXCI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGVkQm9hcmRSXCI7XHJcblxyXG59XHJcbi50ZWFtLW5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJMQ0QyTlwiO1xyXG5cclxufVxyXG4ubWF0Y2gtcmVzdWx0LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTENETlwiO1xyXG59XHJcbi50ZWFte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wbGF5ZXJzLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxDRDJOXCI7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbn1cclxuLnBsYXllcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gLjVyZW1cclxufVxyXG4ucGxheWVyLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IC4zcmVtIC4xcmVtO1xyXG59XHJcbi5wbGF5ZXItcnVucywgLnBsYXllci1zcntcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjFyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1605:
/*!*****************************************!*\
  !*** ./src/app/result/result.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultModule: () => (/* binding */ ResultModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-routing.module */ 3593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class ResultModule {}
ResultModule.ɵfac = function ResultModule_Factory(t) {
  return new (t || ResultModule)();
};
ResultModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ResultModule
});
ResultModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResultModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_result_result_module_ts.js.map