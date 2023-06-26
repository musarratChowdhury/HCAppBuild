"use strict";
(self["webpackChunkHCApp"] = self["webpackChunkHCApp"] || []).push([["src_app_game_game_module_ts"],{

/***/ 5224:
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameRoutingModule: () => (/* binding */ GameRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.component */ 7510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent
}];
class GameRoutingModule {}
GameRoutingModule.ɵfac = function GameRoutingModule_Factory(t) {
  return new (t || GameRoutingModule)();
};
GameRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GameRoutingModule
});
GameRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GameRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7510:
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameComponent: () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware/socketService.type */ 4274);
/* harmony import */ var src_Types_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Types/interfaces */ 4670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/socketservice.service */ 1982);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function GameComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Need To Win : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.Target, "");
  }
}
function GameComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_48_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.handleReadyClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " READY? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GameComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_71_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.handleBatBallSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "BAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_71_Template_div_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.handleBatBallSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "BALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function GameComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "OUT!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function GameComponent_li_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const number_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", number_r10, "");
  }
}
class GameComponent {
  //
  constructor(socketService, ngZone, router) {
    this.socketService = socketService;
    this.ngZone = ngZone;
    this.router = router;
    this.toggleReady = false;
    this.toggleConfirm = false;
    this.toggleSelection = false;
    this.batBallSelection = false;
    this.moveOppoHand = false;
    this.moveCurrentHand = false;
    this.localStorageIMatchRoomData = null;
    this.CurrentPlayer = new src_Types_interfaces__WEBPACK_IMPORTED_MODULE_1__.PlayerData();
    this.OppoPlayer = new src_Types_interfaces__WEBPACK_IMPORTED_MODULE_1__.PlayerData();
    this.MessageBoxText = '';
    this.Overs = "";
    this.Wickets = 0;
    this.TotalWickets = 0;
    this.Target = 0;
    this.Runs = 0;
    this.ThisOverBattingDisplay = [];
    this.InningsText = '1st';
    this.SelectedNumber = 0;
    this.CaptainsChoice = "";
    this.ShowOutNotification = false;
    this.HandImageSrc = ["dotball", "one", "two", "three", "four", "five", "six"];
    this.OppoHandImageSrc = ["dotball", "oner", "twor", "threer", "fourr", "fiver", "sixr"];
    this.HandImage = this.HandImageSrc[0];
    this.OppoHandImage = this.OppoHandImageSrc[0];
    // info side bars
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
    this.playerWicketsLeft = {
      player1: 0,
      player2: 0,
      player3: 0,
      player4: 0
    };
    this.OnStrike = {
      player1: false,
      player2: false,
      player3: false,
      player4: false
    };
    this.Bowling = {
      player1: false,
      player2: false,
      player3: false,
      player4: false
    };
  }
  //
  ngOnInit() {
    // Current Player will always get set on the app component
    if (this.socketService.CurrentPlayer) {
      this.CurrentPlayer = this.socketService.CurrentPlayer;
      //this is where localstorage will help
      let matchRoomData = this.socketService.MatchData;
      this.ngZone.run(() => {
        if (matchRoomData != null) {
          this.Wickets = matchRoomData.totalWickets;
        }
      });
    }
    //#region LOADGAMESCREEN For Otherplayer | ONLOAD EVENT
    // this code is for player who just joined the room
    if (this.socketService.MatchData.teamA) {
      this.ngZone.run(() => {
        this.setPlayerNames();
      });
    }
    //#endregion
    //#region PLAYER JOINED event // triggers when other players are joining
    // this code is for players who are already in the game, then sees other player joining
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PLAYERJOINED, data => {
      this.ngZone.run(() => {
        this.MessageBoxText = `Oppo Joined : ${this.socketService.OppoPlayers.length}`;
        this.setPlayerNames();
      });
    });
    //#endregion
    //#region Initiate Toss Stage
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.InitiateTossStage, data => {
      this.ngZone.run(() => {
        this.MessageBoxText = `Toss : ${data.inMatchData.playerWithHeads?.name} is head`;
        //if current player is a captain
        if (this.socketService.CurrentPlayer.isCaptain) {
          this.toggleReady = true;
        } else {
          this.MessageBoxText = `Captain is Tossing`;
        }
        this.Overs = this.overText(data.currentInnings.ballsPlayed, data.maxBalls);
        this.Wickets = data.currentInnings.wickets;
        this.Runs = data.currentInnings.runs;
        this.InningsText = data.currentInnings.name;
      });
    });
    //#endregion
    //#region PLAYER READY RECEIVED EVENT
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReadyReceived, data => {
      this.ngZone.run(() => {
        if (this.socketService.isTeamMate(data.playerId)) {
          this.MessageBoxText = `${data.name} is Ready!`;
          this.moveCurrentHand = true;
        }
        if (this.socketService.isOpponent(data.playerId)) {
          this.MessageBoxText = `${data.name} is Ready!`;
          this.moveOppoHand = true;
        }
      });
    });
    //#endregion
    //#region SHOW LOCKED NUMBER TO TEAM MATE
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.ShowTheLockedNumber, data => {
      this.ngZone.run(() => {
        this.MessageBoxText = `Confirmed : ${data}`;
        this.OppoPlayer.isReady = true;
      });
    });
    //#endregion
    //#region SHOW OPP IS LOCKED
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.ShowOppoisLocked, () => {
      this.ngZone.run(() => {
        this.MessageBoxText = `Oppo is locked`;
        this.OppoPlayer.isReady = true;
      });
    });
    //#endregion
    //#region  TOSS DECISION
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.TossDecision, data => {
      if (data.tosswinner && this.socketService.CurrentPlayer.isCaptain) {
        this.ngZone.run(() => {
          this.batBallSelection = true;
        });
      }
      this.ngZone.run(() => {
        this.HandImage = this.HandImageSrc[data.myNumber];
        this.OppoHandImage = this.OppoHandImageSrc[data.oppoNumber];
        this.MessageBoxText = `${data.msg}`;
      });
    });
    //#endregion
    //#region  START MATCH
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.StartMatch, data => {
      this.ngZone.run(() => {
        this.Overs = this.overText(data.currentInnings.ballsPlayed, data.maxBalls);
        this.Wickets = data.currentInnings.wickets;
        this.Runs = data.currentInnings.runs;
        this.InningsText = data.firstInnings.isOn ? "1st" : "2nd";
        this.TotalWickets = data.totalWickets;
      });
      this.UpdateScreen(data);
    });
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.UpdateScore, data => {
      this.ngZone.run(() => {
        this.Overs = this.overText(data.currentInnings.ballsPlayed, data.maxBalls);
        this.Wickets = data.currentInnings.wickets;
        this.Runs = data.currentInnings.runs;
        this.InningsText = data.firstInnings.isOn ? "1st" : "2nd";
      });
      this.ngZone.run(() => {
        if (data.secondInnings.isOn) {
          this.Target = data.firstInnings.runs - data.secondInnings.runs + 1;
        }
        this.ThisOverBattingDisplay = data.currentInnings.battingTeam.thisOverDisplay;
        if (this.isOut(this.ThisOverBattingDisplay)) {
          this.ShowOutNotification = true;
        }
        if (this.socketService.CurrentPlayer.playerId == data.currentInnings.batting.playerId || this.socketService.isTeamMate(data.currentInnings.batting.playerId)) {
          this.HandImage = this.HandImageSrc[this.getlastnumber(data.currentInnings.battingTeam.thisOver)];
          this.OppoHandImage = this.OppoHandImageSrc[this.getlastnumber(data.currentInnings.bowlingTeam.thisOver)];
        } else {
          this.HandImage = this.HandImageSrc[this.getlastnumber(data.currentInnings.bowlingTeam.thisOver)];
          this.OppoHandImage = this.OppoHandImageSrc[this.getlastnumber(data.currentInnings.battingTeam.thisOver)];
        }
      });
      if (!data.gameOver) {
        setTimeout(() => {
          this.UpdateScreen(data);
        }, 1500);
      }
    });
    //#endregion
    //#region SHOW MATCH WIN LOSE
    this.socketService.Emitter.on(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.INternalEvents.ShowMatchWinLose, data => {
      if (data.winnerTeam.player1.playerId == this.socketService.CurrentPlayer.playerId || data.winnerTeam.player2.playerId == this.socketService.CurrentPlayer.playerId) {
        this.ngZone.run(() => {
          this.MessageBoxText = "Your team has won";
        });
      } else {
        this.ngZone.run(() => {
          this.MessageBoxText = "Your team has lost";
        });
      }
      //switch to match summary component after 2 secs
      setTimeout(() => {
        this.router.navigate(['/result']).then();
      }, 1500);
    });
    //#endregion
  }

  handleReadyClick() {
    //Handle Ready Events
    // this.localStorageIMatchRoomData =
    //   this.localstorageService.loadData('IMatchRoomData');
    // this.socketService.EmitEvent('PlayerReady', this.localStorageIMatchRoomData);
    //
    if (this.CurrentPlayer) {
      this.socketService.CurrentPlayer.isReady = true;
      this.ngZone.run(() => {
        this.toggleReady = false;
        this.toggleSelection = true;
        this.moveCurrentHand = true;
      });
      //seding emitter event
      this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerReady);
    } else {
      console.log('current player was not found!');
    }
  }
  handleConfirmClick() {
    //Handle Confirm Events
    this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.PlayerConfirmed, this.SelectedNumber);
    this.ngZone.run(() => {
      this.toggleConfirm = false;
      this.toggleSelection = false;
    });
  }
  handleNumberClick(e) {
    //Handle Number Click
    // Handle Number Click
    const number = e.target?.dataset.number;
    this.SelectedNumber = number;
    this.ngZone.run(() => {
      this.toggleConfirm = true;
    });
    console.log(number);
  }
  handleBatBallSelection(e) {
    const selection = e.target?.dataset.selection;
    this.CaptainsChoice = selection;
    this.socketService.Emitter.emit(_middleware_socketService_type__WEBPACK_IMPORTED_MODULE_0__.GameEvents.CaptainsChoice, this.CaptainsChoice);
    this.ngZone.run(() => {
      this.MessageBoxText = `Selected to ${selection} first`;
      this.batBallSelection = false;
    });
  }
  getlastnumber(arr) {
    if (arr.length != 0) return arr[arr.length - 1];else return 0;
  }
  isOut(arr) {
    if (arr.length != 0) return arr[arr.length - 1].includes("W");else return false;
  }
  UpdateScreen(data) {
    //reset hand images
    this.ngZone.run(() => {
      this.OppoHandImage = this.OppoHandImageSrc[0];
      this.moveOppoHand = false;
      this.moveCurrentHand = false;
      this.HandImage = this.HandImageSrc[0];
      this.ShowOutNotification = false;
      this.updateOnStrikeInfos();
      this.updateBowlingInfos();
    });
    let currentBatsmanId = data.currentInnings.batting.playerId;
    let currentBatsmanName = data.currentInnings.batting.name;
    let currentBowlerId = data.currentInnings.bowling.playerId;
    let currentBowlerName = data.currentInnings.bowling.name;
    let currentPlayerId = this.socketService.CurrentPlayer.playerId;
    if (currentBatsmanId == currentPlayerId || currentBowlerId == currentPlayerId) {
      this.ngZone.run(() => {
        this.toggleReady = true;
        this.MessageBoxText = currentBatsmanId == currentPlayerId ? `You are on Strike!` : `You are bowling`;
      });
    } else {
      if (this.socketService.isTeamMate(currentBatsmanId)) {
        this.ngZone.run(() => {
          this.MessageBoxText = `${currentBatsmanName} is Batting!`;
        });
      }
      if (this.socketService.isTeamMate(currentBowlerId)) {
        this.ngZone.run(() => {
          this.MessageBoxText = `${currentBowlerName} is Bowling!`;
        });
      }
    }
  }
  overText(ballsPlayed, maxBalls) {
    return `${Math.floor(ballsPlayed / 6)}.${ballsPlayed % 6} (${maxBalls / 6})`;
  }
  setPlayerNames() {
    this.playerNames.player1 = this.socketService.MatchData.teamA.player1?.name;
    this.playerNames.player2 = this.socketService.MatchData.teamA.player2?.name;
    this.playerNames.player3 = this.socketService.MatchData.teamB.player1?.name;
    this.playerNames.player4 = this.socketService.MatchData.teamB.player2?.name;
  }
  updateOnStrikeInfos() {
    this.OnStrike.player1 = this.socketService.MatchData.teamA.isBatting && this.socketService.MatchData.teamA.player1?.isOnStrike;
    this.OnStrike.player2 = this.socketService.MatchData.teamA.isBatting && this.socketService.MatchData.teamA.player2?.isOnStrike;
    this.OnStrike.player3 = this.socketService.MatchData.teamB.isBatting && this.socketService.MatchData.teamB.player1?.isOnStrike;
    this.OnStrike.player4 = this.socketService.MatchData.teamB.isBatting && this.socketService.MatchData.teamB.player2?.isOnStrike;
    this.playerRuns.player1 = this.socketService.MatchData.teamA.player1.runs;
    this.playerRuns.player2 = this.socketService.MatchData.teamA.player2.runs;
    this.playerRuns.player3 = this.socketService.MatchData.teamB.player1.runs;
    this.playerRuns.player4 = this.socketService.MatchData.teamB.player2.runs;
    this.playerWicketsLeft.player1 = this.socketService.MatchData.teamA.player1.wicketsLeft;
    this.playerWicketsLeft.player2 = this.socketService.MatchData.teamA.player2.wicketsLeft;
    this.playerWicketsLeft.player3 = this.socketService.MatchData.teamB.player1.wicketsLeft;
    this.playerWicketsLeft.player4 = this.socketService.MatchData.teamB.player2.wicketsLeft;
  }
  updateBowlingInfos() {
    this.Bowling.player1 = this.socketService.MatchData.teamA.isBowling && this.socketService.MatchData.teamA.player1?.isOnStrike;
    this.Bowling.player2 = this.socketService.MatchData.teamA.isBowling && this.socketService.MatchData.teamA.player2?.isOnStrike;
    this.Bowling.player3 = this.socketService.MatchData.teamB.isBowling && this.socketService.MatchData.teamB.player1?.isOnStrike;
    this.Bowling.player4 = this.socketService.MatchData.teamB.isBowling && this.socketService.MatchData.teamB.player2?.isOnStrike;
  }
}
GameComponent.ɵfac = function GameComponent_Factory(t) {
  return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_middleware_socketservice_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
GameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GameComponent,
  selectors: [["app-game"]],
  decls: 83,
  vars: 64,
  consts: [[1, "main-game-section"], [1, "score-board"], [1, "over"], [1, "over-text"], [1, "runs"], [1, "runs-text"], [1, "wickets"], [1, "wickets-text"], [1, "innings"], [1, "innings-text"], ["class", "target", 4, "ngIf"], [1, "notification-board"], [1, "message-box"], [1, "cricket-field"], [1, "left-side-window"], [1, "team-name"], [1, "players"], [1, "player"], [1, "player-name"], [1, "is-onstrike"], [1, "player-runs"], [1, "player-wicketsLeft"], [1, "back-field"], [1, "hand-1"], ["data-hand", "oppo", "alt", "hand", "srcset", "", 3, "src"], [1, "hand-2"], ["data-hand", "self", "alt", "hand", "srcset", "", 3, "src"], ["class", "beautiful-button", "id", "ready-button", 3, "click", 4, "ngIf"], ["id", "confirm-button", 1, "beautiful-button", 3, "click"], [1, "right-side-window"], ["class", "captains-decision", 4, "ngIf"], ["class", "outnotification", 4, "ngIf"], [1, "this-over-container"], [4, "ngFor", "ngForOf"], [1, "bottom-container"], [1, "hand-buttons-container"], ["data-number", "1", 1, "hand", "one", 3, "click"], ["data-number", "2", 1, "hand", "two", 3, "click"], ["data-number", "3", 1, "hand", "three", 3, "click"], ["data-number", "4", 1, "hand", "four", 3, "click"], ["data-number", "5", 1, "hand", "five", 3, "click"], ["data-number", "6", 1, "hand", "six", 3, "click"], [1, "target"], [1, "target-text"], ["id", "ready-button", 1, "beautiful-button", 3, "click"], [1, "captains-decision"], [1, "bat-ball-decision"], ["data-selection", "bat", 1, "bat-option", 3, "click"], ["data-selection", "ball", 1, "ball-option", 3, "click"], [1, "outnotification"], [1, "out-text"], [1, "balls-played"]],
  template: function GameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Over : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Runs : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Wickets : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Innings : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, GameComponent_div_18_Template, 4, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Team A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 17)(36, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22)(44, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, GameComponent_div_48_Template, 2, 0, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_49_listener() {
        return ctx.handleConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 29)(52, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Team B");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 16)(55, "div", 17)(56, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 17)(64, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, GameComponent_div_71_Template, 6, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, GameComponent_div_72_Template, 3, 0, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, GameComponent_li_74_Template, 3, 1, "li", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 34)(76, "div", 35)(77, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_77_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_78_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_79_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_80_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_81_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_div_click_82_listener($event) {
        return ctx.handleNumberClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Overs);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Runs);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.Wickets, " (", ctx.TotalWickets, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.InningsText);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Target > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.MessageBoxText);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.playerNames.player1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("player-onstrike", ctx.OnStrike.player1)("player-bowling", ctx.Bowling.player1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs : ", ctx.playerRuns.player1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Wickets Left : ", ctx.playerWicketsLeft.player1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.playerNames.player2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("player-onstrike", ctx.OnStrike.player2)("player-bowling", ctx.Bowling.player2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs : ", ctx.playerRuns.player2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Wickets Left : ", ctx.playerWicketsLeft.player2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animated-opp-hand", ctx.moveOppoHand)("animated-opp-hand-rev", !ctx.moveOppoHand);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../assets/images/hands/", ctx.OppoHandImage, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animated-self-hand", ctx.moveCurrentHand)("animated-self-hand-rev", !ctx.moveCurrentHand);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../assets/images/hands/", ctx.HandImage, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.toggleReady === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("invisible", !ctx.toggleConfirm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" CONFIRM (", ctx.SelectedNumber, ")? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.playerNames.player3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("player-onstrike", ctx.OnStrike.player3)("player-bowling", ctx.Bowling.player3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs : ", ctx.playerRuns.player3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Wickets Left : ", ctx.playerWicketsLeft.player3, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.playerNames.player4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("player-onstrike", ctx.OnStrike.player4)("player-bowling", ctx.Bowling.player4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Runs : ", ctx.playerRuns.player4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Wickets Left : ", ctx.playerWicketsLeft.player4, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.batBallSelection === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ShowOutNotification === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ThisOverBattingDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", !ctx.toggleSelection);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: ["\n\n.main-game-section[_ngcontent-%COMP%] {\n  background-image: url('stadium.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  margin: 0 auto;\n  height: 700px;\n  width: 378px;\n\n  display: grid;\n  grid-template-rows: 1.5fr 0.5fr 5fr 0.5fr 2fr;\n  border-radius: 1rem;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n.score-board[_ngcontent-%COMP%] {\n  background-color: rgb(14, 14, 94);\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n\n  border-radius: 1rem 0rem;\n}\n.score-board[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 1.6rem;\n  color: white;\n  font-family: LCDN;\n}\n\n.notification-board[_ngcontent-%COMP%] {\n  background-color: #f70000;\n  border-radius: 1rem 0rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-family: LedBoardR;\n\n  color: white;\n}\n\n.cricket-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-field[_ngcontent-%COMP%] {\n  width: 162px;\n  height: 85%;\n  background-color: white;\n  \n\n  border-radius: 2rem;\n  position: relative;\n}\n.hand-1[_ngcontent-%COMP%], .hand-2[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  transform-origin: top left;\n}\n.hand-1[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hand-2[_ngcontent-%COMP%] {\n  top: 85%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hand-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.hand-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hand-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 50px;\n}\n\n\n\n.animated-self-hand[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveSelfHand 0.5s ease-in-out forwards;\n}\n.animated-opp-hand[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveOppHand 0.5s ease-in-out forwards;\n}\n.animated-self-hand-rev[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveSelfHandR 0.5s ease-in-out forwards;\n}\n.animated-opp-hand-rev[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveOppHandR 0.5s ease-in-out forwards;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 60%;\n  pointer-events: none;\n  touch-action: none;\n}\n\n.invisible[_ngcontent-%COMP%]{\n  opacity: 0%;\n  pointer-events: none;\n  touch-action: none;\n}\n\n@keyframes _ngcontent-%COMP%_moveSelfHand {\n  from {\n    top: 85%;\n  }\n  to {\n    top: 60%;\n  }\n}\n@keyframes _ngcontent-%COMP%_moveOppHand {\n  from {\n    top: 15%;\n  }\n  to {\n    top: 39%;\n  }\n}\n@keyframes _ngcontent-%COMP%_moveSelfHandR {\n  from {\n    top: 60%;\n  }\n  to {\n    top: 85%;\n  }\n}\n@keyframes _ngcontent-%COMP%_moveOppHandR {\n  from {\n    top: 39%;\n  }\n  to {\n    top: 15%;\n  }\n}\n\n#ready-button[_ngcontent-%COMP%], #confirm-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#confirm-button[_ngcontent-%COMP%] {\n  background-color: #c40000;\n  \n\n}\n#confirm-button[_ngcontent-%COMP%]:hover {\n  background-color: #a10404;\n}\n.this-over-container[_ngcontent-%COMP%] {\n  background-color: gainsboro;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.this-over-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  list-style: none;\n}\n\n.balls-played[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid;\n  border-radius: 50%;\n\n  font-family: var(--this-over-font);\n}\n\n.hand-buttons-container[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  row-gap: 1.5rem;\n  column-gap: 1.5rem;\n  width: 50%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.hand[_ngcontent-%COMP%] {\n  \n\n  border-radius: 2rem;\n  width: 50px;\n  height: 50px;\n  padding: 0rem;\n\n  cursor: pointer;\n  box-shadow: 2px 5px #000;\n\n  background-size: 120%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.hand[_ngcontent-%COMP%]:active {\n  box-shadow: 1px 2px #000;\n  transform: translateY(2px);\n}\n\n.one[_ngcontent-%COMP%] {\n  background-image: url('one.png');\n}\n.two[_ngcontent-%COMP%] {\n  background-image: url('two.png');\n}\n.three[_ngcontent-%COMP%] {\n  background-image: url('three.png');\n}\n.four[_ngcontent-%COMP%] {\n  background-image: url('four.png');\n}\n.five[_ngcontent-%COMP%] {\n  background-image: url('five.png');\n}\n.six[_ngcontent-%COMP%] {\n  background-image: url('six.png');\n}\n\n.bottom-container[_ngcontent-%COMP%] {\n}\n\n.beautiful-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n\n.beautiful-button[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n\n.beautiful-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4caf50;\n}\n\n.beautiful-button[_ngcontent-%COMP%]:active {\n  background-color: #3e8e41;\n}\n\n\n\n.captains-decision[_ngcontent-%COMP%]{\n  position: absolute;\n}\n.outnotification[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 42%;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding:.3rem;\n  border-radius: 1rem;\n  background-color: rgb(102, 98, 98);\n}\n.out-text[_ngcontent-%COMP%]{\n  font-size: 2rem;\n  letter-spacing: .1rem;\n  font-style: bold;\n  color: red;\n  font-family: \"SunnySpells\";\n}\n.bat-ball-decision[_ngcontent-%COMP%]{\n  background-color: blanchedalmond;\n  width: 200px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.bat-option[_ngcontent-%COMP%], .ball-option[_ngcontent-%COMP%]{\n  padding:.5rem;\n  background-color: #45a049;\n  cursor: pointer;\n}\n\n\n\n.left-side-window[_ngcontent-%COMP%], .right-side-window[_ngcontent-%COMP%]{\n  padding: .5rem;\n  background-color: rgba(7, 7, 7, 0.65);\n  color: white;\n  border-radius: .3rem;\n}\n.player-name[_ngcontent-%COMP%]{\n  padding:.5rem .2rem;\n  text-align: center;\n}\n.team-name[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.player-runs[_ngcontent-%COMP%], .player-wicketsLeft[_ngcontent-%COMP%]{\n  font-size: .8rem;\n  padding-bottom: .3rem;\n}\n\n.is-onstrike[_ngcontent-%COMP%]{\n  width: 20px;\n  height: 20px;\n  margin-bottom: .3rem;\n  background-color: white;\n  background-size: cover;\n  border: .5px solid black;\n  border-radius: 50%;\n}\n.player-connected[_ngcontent-%COMP%]{\n  background-color: #3e8e41;\n}\n.player-onstrike[_ngcontent-%COMP%]{\n  background-image: url('bat.png');\n}\n\n.player-bowling[_ngcontent-%COMP%]{\n  background-image: url('ball.png');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0Usb0NBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTs7RUFFWixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CO0FBQ0Esc0JBQXNCOztBQUV0QjtFQUNFLGlDQUFpQzs7RUFFakMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7O0VBRTNCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7O0VBRXRCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsY0FBYztBQUNkO0VBQ0UsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7O0VBRWIsZUFBZTtFQUNmLHdCQUF3Qjs7RUFFeEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBd0Q7QUFDMUQ7QUFDQTtFQUNFLGdDQUF3RDtBQUMxRDtBQUNBO0VBQ0Usa0NBQTBEO0FBQzVEO0FBQ0E7RUFDRSxpQ0FBeUQ7QUFDM0Q7QUFDQTtFQUNFLGlDQUF5RDtBQUMzRDtBQUNBO0VBQ0UsZ0NBQXdEO0FBQzFEOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdDQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGlDQUEyRDtBQUM3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1haW4gZ2FtZSBzZWN0aW9uICovXHJcbi5tYWluLWdhbWUtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvc3RhZGl1bS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICB3aWR0aDogMzc4cHg7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAwLjVmciA1ZnIgMC41ZnIgMmZyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLyogbWFpbiBnYW1lIHNlY3Rpb24gKi9cclxuXHJcbi5zY29yZS1ib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxNCwgOTQpO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMHJlbTtcclxufVxyXG4uc2NvcmUtYm9hcmQgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogTENETjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1ib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtIDByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWVzc2FnZS1ib3gge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBMZWRCb2FyZFI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNyaWNrZXQtZmllbGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2stZmllbGQge1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDg1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiBvcGFjaXR5OiA4NSU7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhhbmQtMSxcclxuLmhhbmQtMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxufVxyXG4uaGFuZC0xIHtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmhhbmQtMiB7XHJcbiAgdG9wOiA4NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5oYW5kLTEgaW1nIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uaGFuZC0xIGltZywgLmhhbmQtMiBpbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi8qIGFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZWQtc2VsZi1oYW5kIHtcclxuICBhbmltYXRpb246IG1vdmVTZWxmSGFuZCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcbi5hbmltYXRlZC1vcHAtaGFuZCB7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlT3BwSGFuZCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcbi5hbmltYXRlZC1zZWxmLWhhbmQtcmV2IHtcclxuICBhbmltYXRpb246IG1vdmVTZWxmSGFuZFIgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxufVxyXG4uYW5pbWF0ZWQtb3BwLWhhbmQtcmV2IHtcclxuICBhbmltYXRpb246IG1vdmVPcHBIYW5kUiAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDYwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbnZpc2libGV7XHJcbiAgb3BhY2l0eTogMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVTZWxmSGFuZCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IDg1JTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZU9wcEhhbmQge1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRvcDogMzklO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVTZWxmSGFuZFIge1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRvcDogODUlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVPcHBIYW5kUiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IDM5JTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgfVxyXG59XHJcblxyXG4jcmVhZHktYnV0dG9uLFxyXG4jY29uZmlybS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuI2NvbmZpcm0tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwMDAwO1xyXG4gIC8qIHotaW5kZXg6IC0xOyAqL1xyXG59XHJcbiNjb25maXJtLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExMDQwNDtcclxufVxyXG4udGhpcy1vdmVyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGhpcy1vdmVyLWNvbnRhaW5lciBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYmFsbHMtcGxheWVkIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICBmb250LWZhbWlseTogdmFyKC0tdGhpcy1vdmVyLWZvbnQpO1xyXG59XHJcblxyXG4uaGFuZC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgcm93LWdhcDogMS41cmVtO1xyXG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbn1cclxuXHJcbi5oYW5kIHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCAjMDAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmhhbmQ6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAxcHggMnB4ICMwMDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2hhbmRzL29uZS5wbmcpO1xyXG59XHJcbi50d28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2hhbmRzL3R3by5wbmcpO1xyXG59XHJcbi50aHJlZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFuZHMvdGhyZWUucG5nKTtcclxufVxyXG4uZm91ciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFuZHMvZm91ci5wbmcpO1xyXG59XHJcbi5maXZlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9oYW5kcy9maXZlLnBuZyk7XHJcbn1cclxuLnNpeCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFuZHMvc2l4LnBuZyk7XHJcbn1cclxuXHJcbi5ib3R0b20tY29udGFpbmVyIHtcclxufVxyXG5cclxuLmJlYXV0aWZ1bC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJlYXV0aWZ1bC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbi5iZWF1dGlmdWwtYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmLCAwIDAgMCA0cHggIzRjYWY1MDtcclxufVxyXG5cclxuLmJlYXV0aWZ1bC1idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG59XHJcblxyXG4vKiBDYXB0YWlucyBkZWNpc2lvbnMgYnV0dG9ucyAqL1xyXG4uY2FwdGFpbnMtZGVjaXNpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5vdXRub3RpZmljYXRpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDIlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOi4zcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgOTgsIDk4KTtcclxufVxyXG4ub3V0LXRleHR7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXN0eWxlOiBib2xkO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3VubnlTcGVsbHNcIjtcclxufVxyXG4uYmF0LWJhbGwtZGVjaXNpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhdC1vcHRpb24sIC5iYWxsLW9wdGlvbntcclxuICBwYWRkaW5nOi41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBpbmZvcm1hdGlvbiBzaWRlIHRlYW0gaW5mbyAqL1xyXG4ubGVmdC1zaWRlLXdpbmRvdywgLnJpZ2h0LXNpZGUtd2luZG93e1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgNywgNywgMC42NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xyXG59XHJcbi5wbGF5ZXItbmFtZXtcclxuICBwYWRkaW5nOi41cmVtIC4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGVhbS1uYW1le1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGxheWVyLXJ1bnMsIC5wbGF5ZXItd2lja2V0c0xlZnR7XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcbn1cclxuXHJcbi5pcy1vbnN0cmlrZXtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXI6IC41cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5wbGF5ZXItY29ubmVjdGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbn1cclxuLnBsYXllci1vbnN0cmlrZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2JhdC5wbmdcIik7XHJcbn1cclxuXHJcbi5wbGF5ZXItYm93bGluZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2JhbGwucG5nXCIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9724:
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameModule: () => (/* binding */ GameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 5224);
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.component */ 7510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class GameModule {}
GameModule.ɵfac = function GameModule_Factory(t) {
  return new (t || GameModule)();
};
GameModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: GameModule
});
GameModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GameModule, {
    declarations: [_game_component__WEBPACK_IMPORTED_MODULE_1__.GameComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_game_game_module_ts.js.map