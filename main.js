"use strict";
(self["webpackChunkHCApp"] = self["webpackChunkHCApp"] || []).push([["main"],{

/***/ 4670:
/*!*********************************!*\
  !*** ./src/Types/interfaces.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMatchDataType: () => (/* binding */ InMatchDataType),
/* harmony export */   InningsDataType: () => (/* binding */ InningsDataType),
/* harmony export */   InningsName: () => (/* binding */ InningsName),
/* harmony export */   MatchRoomData: () => (/* binding */ MatchRoomData),
/* harmony export */   MatchWinType: () => (/* binding */ MatchWinType),
/* harmony export */   PlayerData: () => (/* binding */ PlayerData),
/* harmony export */   Result: () => (/* binding */ Result)
/* harmony export */ });
class MatchRoomData {
  constructor() {
    this.roomId = "";
    this.name = "";
    this.matchType = "";
    this.roomCreatedAt = "";
    this.roomCreatedBy = "";
    this.maxBalls = 0;
    this.totalWickets = 0;
    this.teamA = new Team();
    this.teamB = new Team();
    this.inMatchData = new InMatchDataType();
    this.isTossStage = false;
    this.firstInnings = new InningsDataType();
    this.secondInnings = new InningsDataType();
    this.currentInnings = new InningsDataType();
    this.playerList = [];
    this.gameOver = false;
  }
}
class Team {
  constructor() {
    this.name = "";
    this.customDisplayName = "";
    this.isBatting = false;
    this.isBowling = false;
    this.captain = new PlayerData();
    this.onStrike = new PlayerData();
    this.bowling = new PlayerData();
    this.player1 = new PlayerData();
    this.player2 = new PlayerData();
    this.thisOver = [];
    this.thisOverDisplay = [];
    this.players = [];
  }
}
class PlayerData {
  constructor() {
    this.roomId = '';
    this.roomIdString = '';
    this.playerId = '';
    this.currentConnectionId = '';
    this.teamName = '';
    this.name = '';
    this.roomName = "";
    this.number = 0;
    this.runs = 0;
    this.wicketsLeft = 0;
    this.isOnStrike = false;
    this.ballsPlayed = 0;
    this.isBatting = false;
    this.hasWonToss = false;
    this.runRate = 0;
    this.strikeRate = 0;
    this.captainsChoice = "";
    this.isTossing = false;
    this.isCaptain = false;
    this.isHeads = false;
    this.isReady = false;
    this.isLocked = false;
    this.lockedWith = 0;
    this.hasSelectedNumber = false;
  }
}
class InningsDataType {
  constructor() {
    this.name = "1st";
    this.isOn = false;
    this.batting = new PlayerData();
    this.bowling = new PlayerData();
    this.battingTeam = new Team();
    this.bowlingTeam = new Team();
    this.ballsPlayed = 0;
    this.wickets = 0;
    this.runs = 0;
  }
}
class InMatchDataType {
  constructor() {
    this.isSameNumber = false;
    this.playerWithHeads = new PlayerData();
    this.playerWithTails = new PlayerData();
    this.playerWithTossWin = new PlayerData();
    this.playerWithTossLoss = new PlayerData();
    this.playerWithTossWinId = "";
    this.playerWithTossLossId = "";
  }
}
var InningsName;
(function (InningsName) {
  InningsName[InningsName["First"] = 1] = "First";
  InningsName[InningsName["Second"] = 2] = "Second";
})(InningsName || (InningsName = {}));
var MatchWinType;
(function (MatchWinType) {
  MatchWinType[MatchWinType["IsDraw"] = 0] = "IsDraw";
  MatchWinType[MatchWinType["WonByRun"] = 1] = "WonByRun";
  MatchWinType[MatchWinType["WonByWicket"] = 2] = "WonByWicket";
})(MatchWinType || (MatchWinType = {}));
class Result {
  constructor() {
    this.winnerTeam = new Team();
    this.matchWinType = MatchWinType.IsDraw;
    this.wonByRun = 0;
    this.wonByWicket = 0;
    this.teamA = new Team();
    this.teamB = new Team();
  }
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  redirectTo: 'setup',
  pathMatch: 'full'
}, {
  path: '',
  children: [{
    path: 'setup',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_setup_setup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setup/setup.module */ 2769)).then(m => m.SetupModule)
  }, {
    path: 'game',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_game_game_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./game/game.module */ 9724)).then(m => m.GameModule)
  }, {
    path: 'result',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_result_result_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./result/result.module */ 1605)).then(m => m.ResultModule)
  }]
},
// { path: 'not-found', component: PageNotFoundComponent },
// { path: 'access-denied', component: AccessDeniedComponent },
{
  path: '**',
  redirectTo: 'game'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware/socketService.type */ 4274);
/* harmony import */ var src_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/main */ 4913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/socketservice.service */ 1982);
/* harmony import */ var _middleware_localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/localStorageService/local-storage-service.service */ 6690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






//middleware socket handshakes
class AppComponent {
  /**
   *
   */
  constructor(socketService, localStorageService, router) {
    this.socketService = socketService;
    this.localStorageService = localStorageService;
    this.router = router;
    this.title = 'HCApp';
    // INITIAL FORM SUBMIT
    socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.InitialFormSubmit, data => {
      src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.invoke(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.InitialFormSubmit, data);
    });
    //#region First PLAYER JOINED
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.FirstPlayerJoined, data => {
      socketService.CurrentPlayer = data.playerList.find(p => p.currentConnectionId == src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.connectionId);
      socketService.MatchData = data;
      socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.LOADGAMESCREEN, data);
      // save data in lc
      this.localStorageService.setData('matchData', data);
    });
    //#endregion
    //#region  Other PLAYER JOINED
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PLAYERJOINED, data => {
      //when the other player joins the room
      if (socketService.CurrentPlayer.playerId == '') {
        socketService.CurrentPlayer = data.playerList.find(p => p.currentConnectionId == src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.connectionId);
      }
      //setting teammates and opponents
      data.playerList.forEach(player => {
        if (socketService.CurrentPlayer.teamName == player.teamName) {
          if (!socketService.isTeamMate(player.playerId)) {
            socketService.Teammates.push(player);
          }
        } else {
          if (!socketService.isOpponent(player.playerId)) {
            socketService.OppoPlayers.push(player);
          }
        }
      });
      socketService.MatchData = data;
      socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.LOADGAMESCREEN, data);
      socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PLAYERJOINED, data);
      // save data in lc
      this.localStorageService.setData('matchData', data);
    });
    //#endregion
    //#region All PLAYERS JOINED
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.AllPlayersJoined, data => {
      //updating data on both localstorage and socketservice
      socketService.MatchData = data;
      this.localStorageService.setData('matchData', data);
      setTimeout(() => {
        socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.InitiateTossStage, socketService.MatchData);
      }, 1000);
    });
    //#endregion
    //#region PLAYER READY
    socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReady, () => {
      if (socketService.CurrentPlayer.roomId != "") {
        src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.invoke(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReady, socketService.CurrentPlayer?.roomId, socketService.CurrentPlayer);
      } else {
        console.error("room id not found on current player");
      }
    });
    //#endregion
    //#region PLAYER READY RECEIVED
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReadyReceived, data => {
      if (data.currentConnectionId != this.socketService.CurrentPlayer.currentConnectionId) socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReadyReceived, data);
    });
    //#endregion
    //#region PLAYER CONFIRMED
    socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerConfirmed, data => {
      // debugger
      socketService.CurrentPlayer.isLocked = true;
      socketService.CurrentPlayer.lockedWith = parseInt(data);
      if (socketService.CurrentPlayer.roomId != "") {
        src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.invoke(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerConfirmed, socketService.CurrentPlayer.roomId, socketService.CurrentPlayer);
      } else {
        console.log("room id not found");
      }
    });
    //#endregion
    //#region PLAYER CONFIRMED RECEIVED 
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerConfirmedReceived, data => {
      if (this.socketService.isTeamMate(data.currentInnings.batting.playerId)) {
        //showing teammate the locked number
        this.socketService.Emitter.emit("ShowTheLockedNumber", data.currentInnings.batting.lockedWith);
      } else if (this.socketService.isTeamMate(data.currentInnings.bowling.playerId)) {
        //showing teammate the locked number
        this.socketService.Emitter.emit("ShowTheLockedNumber", data.currentInnings.bowling.lockedWith);
      } else {
        //For SPectators
        this.socketService.Emitter.emit("ShowOppoisLocked");
      }
    });
    //#endregion
    //#region TOSS DECISION RECEIVED
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.TossDecision, data => {
      let currentPlayerId = this.socketService.CurrentPlayer.playerId;
      let playerWithTossWinId = data.inMatchData.playerWithTossWin.playerId;
      let playerWithTossLossId = data.inMatchData.playerWithTossLoss.playerId;
      if (currentPlayerId == playerWithTossWinId || this.socketService.isTeamMate(playerWithTossWinId)) {
        this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.TossDecision, {
          tosswinner: true,
          msg: "You have won the toss",
          myNumber: data.inMatchData.playerWithTossWin.lockedWith,
          oppoNumber: data.inMatchData.playerWithTossLoss.lockedWith
        });
      } else if (currentPlayerId == playerWithTossLossId || this.socketService.isTeamMate(playerWithTossLossId)) {
        this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.TossDecision, {
          tosswinner: false,
          msg: "You have lost the toss",
          myNumber: data.inMatchData.playerWithTossLoss.lockedWith,
          oppoNumber: data.inMatchData.playerWithTossWin.lockedWith
        });
      }
    });
    //#endregion
    //#region CAPTAINS CHOiCE 
    socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.CaptainsChoice, data => {
      socketService.CurrentPlayer.captainsChoice = data;
      src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.invoke(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.CaptainsChoice, socketService.CurrentPlayer.roomId, socketService.CurrentPlayer);
    });
    //#endregion
    //#region START MATCH EVENT
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.StartMatch, data => {
      console.info("after receiving start match event from server : ", data);
      if (data.currentInnings.batting.playerId == socketService.CurrentPlayer.playerId) {
        socketService.CurrentPlayer.isOnStrike = true;
      }
      if (data.currentInnings.bowling.playerId == socketService.CurrentPlayer.playerId) {
        socketService.CurrentPlayer.isOnStrike = true;
      }
      socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.StartMatch, data);
      socketService.MatchData = data;
      this.localStorageService.setData('matchData', data);
    });
    //#endregion
    //#region UPDATE SCORE EVENT
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.UpdateScore, data => {
      console.info("update score event : ", data);
      if (data.currentInnings.batting.playerId == socketService.CurrentPlayer.playerId) {
        socketService.CurrentPlayer.isOnStrike = true;
      }
      if (data.currentInnings.bowling.playerId == socketService.CurrentPlayer.playerId) {
        socketService.CurrentPlayer.isOnStrike = true;
      }
      socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.UpdateScore, data);
      socketService.MatchData = data;
      this.localStorageService.setData('matchData', data);
    });
    //#endregion
    //#region GAME OVER EVENT
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.GameOver, data => {
      console.info("game over event : ", data);
      this.socketService.MatchResult = data;
      //send show result event to game comp
      this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.ShowMatchWinLose, data);
    });
    //#endregion
    //#region DELETE ROOM
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.DeleteRoom, roomname => {
      src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.invoke(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.DeleteRoom, roomname);
    });
    src_main__WEBPACK_IMPORTED_MODULE_1__.gameconnection.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.RoomDeleted, data => {
      console.log("previous room deleted");
    });
    //#endregion
  }
}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_middleware_localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 14,
  vars: 0,
  consts: [["routerLink", "/game", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/setup", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/result", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "App is working");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nav")(3, "ul")(4, "li")(5, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li")(8, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Setup");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li")(11, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
  styles: ["@font-face {\n  font-family: SunnySpells;\n  src: url('SunnySpells.ttf');\n}\n\n@font-face {\n  font-family: FredokaOne;\n  src: url('FredokaOne-Regular.ttf');\n}\n@font-face {\n  font-family: LedBoard;\n  src: url('LedBoard.TTF');\n}\n@font-face {\n  font-family: LedBoardR;\n  src: url('LEDBDREV.TTF');\n}\n@font-face {\n  font-family: LCD2N;\n  src: url('LCD2N___.TTF');\n}\n@font-face {\n  font-family: LCDN;\n  src: url('LCD-N___.TTF');\n}\n\n\n\n[_ngcontent-%COMP%]:root {\n  --notification-font: SunnySpells;\n  --scoreboard-font: LCDN;\n  --this-over-font: LedBoardR;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMkJBQTBDO0FBQzVDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFpRDtBQUNuRDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF1QztBQUN6QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF1QztBQUN6QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF1QztBQUN6QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF1QztBQUN6Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0EsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBTdW5ueVNwZWxscztcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9Gb250L1N1bm55U3BlbGxzLnR0ZlwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEZyZWRva2FPbmU7XHJcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvRm9udC9GcmVkb2thT25lLVJlZ3VsYXIudHRmXCIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBMZWRCb2FyZDtcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9Gb250L0xlZEJvYXJkLlRURlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogTGVkQm9hcmRSO1xyXG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL0ZvbnQvTEVEQkRSRVYuVFRGXCIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBMQ0QyTjtcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9Gb250L0xDRDJOX19fLlRURlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogTENETjtcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9Gb250L0xDRC1OX19fLlRURlwiKTtcclxufVxyXG5cclxuLypjc3MgdmFyaWFibGVzICovXHJcbjpyb290IHtcclxuICAtLW5vdGlmaWNhdGlvbi1mb250OiBTdW5ueVNwZWxscztcclxuICAtLXNjb3JlYm9hcmQtZm9udDogTENETjtcclxuICAtLXRoaXMtb3Zlci1mb250OiBMZWRCb2FyZFI7XHJcbn1cclxuXHJcbi8qIGJvZHkgKi9cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi8qIGJvZHkgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   EMITTERY_INSTANCE: () => (/* binding */ EMITTERY_INSTANCE),
/* harmony export */   emitteryProvider: () => (/* binding */ emitteryProvider)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emittery */ 5436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







// Create a token for the Emittery service
const EMITTERY_INSTANCE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('EmitteryInstance');
// Provide the Emittery service using the created token
const emitteryProvider = {
  provide: EMITTERY_INSTANCE,
  useClass: emittery__WEBPACK_IMPORTED_MODULE_2__["default"]
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.HashLocationStrategy
  }, emitteryProvider],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 6690:
/*!*********************************************************************************!*\
  !*** ./src/app/middleware/localStorageService/local-storage-service.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageServiceService: () => (/* binding */ LocalStorageServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LocalStorageServiceService {
  constructor() {}
  loadData(datakey) {
    if (localStorage.getItem(datakey)) {
      return JSON.parse(localStorage.getItem(datakey));
    } else {
      return null;
    }
  }
  setData(dataKey, data) {
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
  deleteData(dataKey) {
    localStorage.removeItem(dataKey);
  }
}
LocalStorageServiceService.ɵfac = function LocalStorageServiceService_Factory(t) {
  return new (t || LocalStorageServiceService)();
};
LocalStorageServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalStorageServiceService,
  factory: LocalStorageServiceService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4274:
/*!**************************************************!*\
  !*** ./src/app/middleware/socketService.type.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameEvents: () => (/* binding */ GameEvents),
/* harmony export */   INternalEvents: () => (/* binding */ INternalEvents)
/* harmony export */ });
var GameEvents;
(function (GameEvents) {
  GameEvents["GamePageLoaded"] = "gamepageLoaded";
  GameEvents["InitialFormSubmit"] = "initialFormSubmit";
  GameEvents["FirstPlayerJoined"] = "FirstPlayerJoined";
  GameEvents["PLAYERJOINED"] = "PLAYERJOINED";
  GameEvents["AllPlayersJoined"] = "AllPlayersJoined";
  GameEvents["PlayerReady"] = "PlayerReady";
  GameEvents["PlayerReadyReceived"] = "PlayerReadyReceived";
  GameEvents["PlayerConfirmed"] = "PlayerConfirmed";
  GameEvents["PlayerConfirmedReceived"] = "PlayerConfirmedReceived";
  GameEvents["LOADGAMESCREEN"] = "LOADGAMESCREEN";
  GameEvents["TossDecision"] = "TossDecision";
  GameEvents["CaptainsChoice"] = "CaptainsChoice";
  GameEvents["StartMatch"] = "StartMatch";
  GameEvents["UpdateScore"] = "UpdateScore";
  GameEvents["GameOver"] = "GameOver";
  GameEvents["DeleteRoom"] = "DeleteMatchRoom";
  GameEvents["RoomDeleted"] = "RoomDeleted";
})(GameEvents || (GameEvents = {}));
var INternalEvents;
(function (INternalEvents) {
  INternalEvents["InitiateTossStage"] = "InitiateTossStage";
  INternalEvents["ShowTheLockedNumber"] = "ShowTheLockedNumber";
  INternalEvents["ShowOppoisLocked"] = "ShowOppoisLocked";
  INternalEvents["ShowMatchWinLose"] = "ShowMatchWinLose";
})(INternalEvents || (INternalEvents = {}));

/***/ }),

/***/ 1982:
/*!*****************************************************!*\
  !*** ./src/app/middleware/socketservice.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketService: () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emittery */ 5436);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.module */ 8629);
/* harmony import */ var src_Types_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Types/interfaces */ 4670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageService/local-storage-service.service */ 6690);





class SocketService {
  constructor(emittery, localStorageService) {
    this.emittery = emittery;
    this.localStorageService = localStorageService;
    this.CurrentPlayer = new src_Types_interfaces__WEBPACK_IMPORTED_MODULE_2__.PlayerData();
    this.OppoPlayers = [];
    this.Teammates = [];
    this.MatchData = new src_Types_interfaces__WEBPACK_IMPORTED_MODULE_2__.MatchRoomData();
    this.MatchResult = new src_Types_interfaces__WEBPACK_IMPORTED_MODULE_2__.Result();
    emittery = new emittery__WEBPACK_IMPORTED_MODULE_0__["default"]();
    emittery__WEBPACK_IMPORTED_MODULE_0__["default"].isDebugEnabled = false;
  }
  TurnOffDebugger() {
    emittery__WEBPACK_IMPORTED_MODULE_0__["default"].isDebugEnabled = false;
  }
  get Emitter() {
    return this.emittery;
  }
  isTeamMate(playerId) {
    return this.Teammates.some(x => x.playerId == playerId);
  }
  isOpponent(playerId) {
    return this.OppoPlayers.some(x => x.playerId == playerId);
  }
}
SocketService.ɵfac = function SocketService_Factory(t) {
  return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.EMITTERY_INSTANCE), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_localStorageService_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageServiceService));
};
SocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: SocketService,
  factory: SocketService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatconnection: () => (/* binding */ chatconnection),
/* harmony export */   gameconnection: () => (/* binding */ gameconnection)
/* harmony export */ });
/* harmony import */ var E_muhit_HC2_HC2_HCApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! peerjs */ 6887);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ 9336);




const SignallingServerURL_Production = "https://hc220230626063443.azurewebsites.net/";
const SignallingServerURL_Development = "https://localhost:44383";
//#region SIGNALR CONNECTIONs

const gameconnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder().withUrl(`${SignallingServerURL_Production}/gamehub`).build();
const chatconnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder().withUrl(`${SignallingServerURL_Production}/chathub`).build();
//#endregion
let userId = null;
// peer js
const myPeer = new peerjs__WEBPACK_IMPORTED_MODULE_3__.Peer();
myPeer.on('open', id => {
  const startSignalR = /*#__PURE__*/function () {
    var _ref = (0,E_muhit_HC2_HC2_HCApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      userId = id;
      // userId = Math.random().toString();
      yield gameconnection.start();
      yield chatconnection.start();
      // await chatconnection.invoke('NewConnection', userId);
      yield chatconnection.invoke('JoinRoom', 'FIRST_LOBBY', userId);
    });
    return function startSignalR() {
      return _ref.apply(this, arguments);
    };
  }();
  startSignalR();
});
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map