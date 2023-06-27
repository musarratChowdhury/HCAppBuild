import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GameEvents, INternalEvents } from '../middleware/socketService.type';
import { PlayerData, } from 'src/Types/interfaces';
let GameComponent = class GameComponent {
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
        this.CurrentPlayer = new PlayerData();
        this.OppoPlayer = new PlayerData();
        this.MessageBoxText = '';
        this.Overs = '';
        this.Wickets = 0;
        this.TotalWickets = 0;
        this.Target = 0;
        this.Runs = 0;
        this.ThisOverBattingDisplay = [];
        this.InningsText = '1st';
        this.SelectedNumber = 0;
        this.CaptainsChoice = '';
        this.ShowOutNotification = false;
        // lastBatsmanNumber:number|null = null;
        // lastBowlerNumber: number|null = null;
        this.HandImageSrc = [
            'dotball',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
        ];
        this.OppoHandImageSrc = [
            'dotball',
            'oner',
            'twor',
            'threer',
            'fourr',
            'fiver',
            'sixr',
        ];
        this.HandImage = this.HandImageSrc[0];
        this.OppoHandImage = this.OppoHandImageSrc[0];
        // info side bars
        this.playerNames = {
            player1: 'Player 1',
            player2: 'Player 2',
            player3: 'Player 3',
            player4: 'Player 4',
        };
        this.playerRuns = {
            player1: 0,
            player2: 0,
            player3: 0,
            player4: 0,
        };
        this.playerWicketsLeft = {
            player1: 0,
            player2: 0,
            player3: 0,
            player4: 0,
        };
        this.OnStrike = {
            player1: false,
            player2: false,
            player3: false,
            player4: false,
        };
        this.Bowling = {
            player1: false,
            player2: false,
            player3: false,
            player4: false,
        };
        this.OnStrikeImage_player1 = 'nonStriker';
        this.OnStrikeImage_player2 = 'nonStriker';
        this.OnStrikeImage_player3 = 'nonStriker';
        this.OnStrikeImage_player4 = 'nonStriker';
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
        this.socketService.Emitter.on(GameEvents.PLAYERJOINED, (data) => {
            this.ngZone.run(() => {
                this.MessageBoxText = `Oppo Joined : ${this.socketService.OppoPlayers.length}`;
                this.setPlayerNames();
            });
        });
        //#endregion
        //#region Initiate Toss Stage
        this.socketService.Emitter.on(INternalEvents.InitiateTossStage, (data) => {
            this.ngZone.run(() => {
                this.MessageBoxText = `Toss : ${data.inMatchData.playerWithHeads?.name} is head`;
                //if current player is a captain
                if (this.socketService.CurrentPlayer.isCaptain) {
                    this.toggleReady = true;
                }
                else {
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
        this.socketService.Emitter.on(GameEvents.PlayerReadyReceived, (data) => {
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
        this.socketService.Emitter.on(INternalEvents.ShowTheLockedNumber, (data) => {
            this.ngZone.run(() => {
                this.MessageBoxText = `Confirmed : ${data}`;
                this.OppoPlayer.isReady = true;
            });
        });
        //#endregion
        //#region SHOW OPP IS LOCKED
        this.socketService.Emitter.on(INternalEvents.ShowOppoisLocked, () => {
            this.ngZone.run(() => {
                this.MessageBoxText = `Oppo is locked`;
                this.OppoPlayer.isReady = true;
            });
        });
        //#endregion
        //#region  TOSS DECISION
        this.socketService.Emitter.on(GameEvents.TossDecision, (data) => {
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
        this.socketService.Emitter.on(GameEvents.StartMatch, (data) => {
            this.ngZone.run(() => {
                this.Overs = this.overText(data.currentInnings.ballsPlayed, data.maxBalls);
                this.Wickets = data.currentInnings.wickets;
                this.Runs = data.currentInnings.runs;
                this.InningsText = data.firstInnings.isOn ? '1st' : '2nd';
                this.TotalWickets = data.totalWickets;
            });
            this.UpdateScreen(data);
        });
        this.socketService.Emitter.on(GameEvents.UpdateScore, (data) => {
            this.ngZone.run(() => {
                this.Overs = this.overText(data.currentInnings.ballsPlayed, data.maxBalls);
                this.Wickets = data.currentInnings.wickets;
                this.Runs = data.currentInnings.runs;
                this.InningsText = data.firstInnings.isOn ? '1st' : '2nd';
            });
            this.ngZone.run(() => {
                if (data.secondInnings.isOn) {
                    this.Target = data.firstInnings.runs - data.secondInnings.runs + 1;
                }
                this.ThisOverBattingDisplay =
                    data.currentInnings.battingTeam.thisOverDisplay;
                if (this.isOut(this.ThisOverBattingDisplay)) {
                    this.ShowOutNotification = true;
                }
                if (this.socketService.CurrentPlayer.playerId ==
                    data.currentInnings.batting.playerId ||
                    this.socketService.isTeamMate(data.currentInnings.batting.playerId)) {
                    this.HandImage =
                        this.HandImageSrc[this.getlastnumber(data.currentInnings.battingTeam.thisOver)];
                    this.OppoHandImage =
                        this.OppoHandImageSrc[this.getlastnumber(data.currentInnings.bowlingTeam.thisOver)];
                }
                else {
                    this.HandImage =
                        this.HandImageSrc[this.getlastnumber(data.currentInnings.bowlingTeam.thisOver)];
                    this.OppoHandImage =
                        this.OppoHandImageSrc[this.getlastnumber(data.currentInnings.battingTeam.thisOver)];
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
        this.socketService.Emitter.on(INternalEvents.ShowMatchWinLose, (data) => {
            if (data.winnerTeam.player1.playerId ==
                this.socketService.CurrentPlayer.playerId ||
                data.winnerTeam.player2.playerId ==
                    this.socketService.CurrentPlayer.playerId) {
                this.ngZone.run(() => {
                    this.MessageBoxText = 'Your team has won';
                });
            }
            else {
                this.ngZone.run(() => {
                    this.MessageBoxText = 'Your team has lost';
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
            this.socketService.Emitter.emit(GameEvents.PlayerReady);
        }
        else {
            console.log('current player was not found!');
        }
    }
    handleConfirmClick() {
        //Handle Confirm Events
        this.socketService.Emitter.emit(GameEvents.PlayerConfirmed, this.SelectedNumber);
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
        this.socketService.Emitter.emit(GameEvents.CaptainsChoice, this.CaptainsChoice);
        this.ngZone.run(() => {
            this.MessageBoxText = `Selected to ${selection} first`;
            this.batBallSelection = false;
        });
    }
    getlastnumber(arr) {
        if (arr.length != 0) {
            return arr[arr.length - 1];
        }
        else
            return 0;
    }
    isOut(arr) {
        if (arr.length != 0)
            return arr[arr.length - 1].includes('W');
        else
            return false;
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
        if (currentBatsmanId == currentPlayerId ||
            currentBowlerId == currentPlayerId) {
            this.ngZone.run(() => {
                this.toggleReady = true;
                this.MessageBoxText =
                    currentBatsmanId == currentPlayerId
                        ? `You are on Strike!`
                        : `You are bowling`;
            });
        }
        else {
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
        this.OnStrike.player1 =
            this.socketService.MatchData.teamA.isBatting &&
                this.socketService.MatchData.teamA.player1?.isOnStrike;
        this.OnStrike.player2 =
            this.socketService.MatchData.teamA.isBatting &&
                this.socketService.MatchData.teamA.player2?.isOnStrike;
        this.OnStrike.player3 =
            this.socketService.MatchData.teamB.isBatting &&
                this.socketService.MatchData.teamB.player1?.isOnStrike;
        this.OnStrike.player4 =
            this.socketService.MatchData.teamB.isBatting &&
                this.socketService.MatchData.teamB.player2?.isOnStrike;
        this.OnStrikeImage_player1 = this.OnStrike.player1 ? 'bat' : 'nonStriker';
        this.OnStrikeImage_player2 = this.OnStrike.player2 ? 'bat' : 'nonStriker';
        this.OnStrikeImage_player3 = this.OnStrike.player3 ? 'bat' : 'nonStriker';
        this.OnStrikeImage_player4 = this.OnStrike.player4 ? 'bat' : 'nonStriker';
        this.playerRuns.player1 = this.socketService.MatchData.teamA.player1.runs;
        this.playerRuns.player2 = this.socketService.MatchData.teamA.player2.runs;
        this.playerRuns.player3 = this.socketService.MatchData.teamB.player1.runs;
        this.playerRuns.player4 = this.socketService.MatchData.teamB.player2.runs;
        this.playerWicketsLeft.player1 =
            this.socketService.MatchData.teamA.player1.wicketsLeft;
        this.playerWicketsLeft.player2 =
            this.socketService.MatchData.teamA.player2.wicketsLeft;
        this.playerWicketsLeft.player3 =
            this.socketService.MatchData.teamB.player1.wicketsLeft;
        this.playerWicketsLeft.player4 =
            this.socketService.MatchData.teamB.player2.wicketsLeft;
    }
    updateBowlingInfos() {
        this.Bowling.player1 =
            this.socketService.MatchData.teamA.isBowling &&
                this.socketService.MatchData.teamA.player1?.isOnStrike;
        this.Bowling.player2 =
            this.socketService.MatchData.teamA.isBowling &&
                this.socketService.MatchData.teamA.player2?.isOnStrike;
        this.Bowling.player3 =
            this.socketService.MatchData.teamB.isBowling &&
                this.socketService.MatchData.teamB.player1?.isOnStrike;
        this.Bowling.player4 =
            this.socketService.MatchData.teamB.isBowling &&
                this.socketService.MatchData.teamB.player2?.isOnStrike;
        if (this.socketService.MatchData.teamA.isBowling) {
            this.OnStrikeImage_player1 = this.Bowling.player1 ? 'ball' : 'nonStriker';
            this.OnStrikeImage_player2 = this.Bowling.player2 ? 'ball' : 'nonStriker';
        }
        if (this.socketService.MatchData.teamB.isBowling) {
            this.OnStrikeImage_player3 = this.Bowling.player3 ? 'ball' : 'nonStriker';
            this.OnStrikeImage_player4 = this.Bowling.player4 ? 'ball' : 'nonStriker';
        }
    }
};
GameComponent = __decorate([
    Component({
        selector: 'app-game',
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.css'],
    })
], GameComponent);
export { GameComponent };
//# sourceMappingURL=game.component.js.map