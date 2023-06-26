import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GameEvents, INternalEvents } from './middleware/socketService.type';
import { gameconnection } from 'src/main';
//middleware socket handshakes
let AppComponent = class AppComponent {
    /**
     *
     */
    constructor(socketService, localStorageService, router) {
        this.socketService = socketService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.title = 'HCApp';
        // INITIAL FORM SUBMIT
        socketService.Emitter.on(GameEvents.InitialFormSubmit, (data) => {
            gameconnection.invoke(GameEvents.InitialFormSubmit, data);
        });
        //#region First PLAYER JOINED
        gameconnection.on(GameEvents.FirstPlayerJoined, (data) => {
            socketService.CurrentPlayer = data.playerList.find((p) => p.currentConnectionId == gameconnection.connectionId);
            socketService.MatchData = data;
            socketService.Emitter.emit(GameEvents.LOADGAMESCREEN, data);
            // save data in lc
            this.localStorageService.setData('matchData', data);
        });
        //#endregion
        //#region  Other PLAYER JOINED
        gameconnection.on(GameEvents.PLAYERJOINED, (data) => {
            //when the other player joins the room
            if (socketService.CurrentPlayer.playerId == '') {
                socketService.CurrentPlayer = data.playerList.find((p) => p.currentConnectionId == gameconnection.connectionId);
            }
            //setting teammates and opponents
            data.playerList.forEach(player => {
                if (socketService.CurrentPlayer.teamName == player.teamName) {
                    if (!socketService.isTeamMate(player.playerId)) {
                        socketService.Teammates.push(player);
                    }
                }
                else {
                    if (!socketService.isOpponent(player.playerId)) {
                        socketService.OppoPlayers.push(player);
                    }
                }
            });
            socketService.MatchData = data;
            socketService.Emitter.emit(GameEvents.LOADGAMESCREEN, data);
            socketService.Emitter.emit(GameEvents.PLAYERJOINED, data);
            // save data in lc
            this.localStorageService.setData('matchData', data);
        });
        //#endregion
        //#region All PLAYERS JOINED
        gameconnection.on(GameEvents.AllPlayersJoined, (data) => {
            //updating data on both localstorage and socketservice
            socketService.MatchData = data;
            this.localStorageService.setData('matchData', data);
            setTimeout(() => {
                socketService.Emitter.emit(INternalEvents.InitiateTossStage, socketService.MatchData);
            }, 1000);
        });
        //#endregion
        //#region PLAYER READY
        socketService.Emitter.on(GameEvents.PlayerReady, () => {
            if (socketService.CurrentPlayer.roomId != "") {
                gameconnection.invoke(GameEvents.PlayerReady, socketService.CurrentPlayer?.roomId, socketService.CurrentPlayer);
            }
            else {
                console.error("room id not found on current player");
            }
        });
        //#endregion
        //#region PLAYER READY RECEIVED
        gameconnection.on(GameEvents.PlayerReadyReceived, (data) => {
            if (data.currentConnectionId !=
                this.socketService.CurrentPlayer.currentConnectionId)
                socketService.Emitter.emit(GameEvents.PlayerReadyReceived, data);
        });
        //#endregion
        //#region PLAYER CONFIRMED
        socketService.Emitter.on(GameEvents.PlayerConfirmed, (data) => {
            // debugger
            socketService.CurrentPlayer.isLocked = true;
            socketService.CurrentPlayer.lockedWith = parseInt(data);
            if (socketService.CurrentPlayer.roomId != "") {
                gameconnection.invoke(GameEvents.PlayerConfirmed, socketService.CurrentPlayer.roomId, socketService.CurrentPlayer);
            }
            else {
                console.log("room id not found");
            }
        });
        //#endregion
        //#region PLAYER CONFIRMED RECEIVED 
        gameconnection.on(GameEvents.PlayerConfirmedReceived, (data) => {
            if (this.socketService.isTeamMate(data.currentInnings.batting.playerId)) {
                //showing teammate the locked number
                this.socketService.Emitter.emit("ShowTheLockedNumber", data.currentInnings.batting.lockedWith);
            }
            else if (this.socketService.isTeamMate(data.currentInnings.bowling.playerId)) {
                //showing teammate the locked number
                this.socketService.Emitter.emit("ShowTheLockedNumber", data.currentInnings.bowling.lockedWith);
            }
            else {
                //For SPectators
                this.socketService.Emitter.emit("ShowOppoisLocked");
            }
        });
        //#endregion
        //#region TOSS DECISION RECEIVED
        gameconnection.on(GameEvents.TossDecision, (data) => {
            let currentPlayerId = this.socketService.CurrentPlayer.playerId;
            let playerWithTossWinId = data.inMatchData.playerWithTossWin.playerId;
            let playerWithTossLossId = data.inMatchData.playerWithTossLoss.playerId;
            if (currentPlayerId == playerWithTossWinId || this.socketService.isTeamMate(playerWithTossWinId)) {
                this.socketService.Emitter.emit(GameEvents.TossDecision, { tosswinner: true, msg: "You have won the toss",
                    myNumber: data.inMatchData.playerWithTossWin.lockedWith,
                    oppoNumber: data.inMatchData.playerWithTossLoss.lockedWith });
            }
            else if (currentPlayerId == playerWithTossLossId || this.socketService.isTeamMate(playerWithTossLossId)) {
                this.socketService.Emitter.emit(GameEvents.TossDecision, { tosswinner: false, msg: "You have lost the toss",
                    myNumber: data.inMatchData.playerWithTossLoss.lockedWith,
                    oppoNumber: data.inMatchData.playerWithTossWin.lockedWith });
            }
        });
        //#endregion
        //#region CAPTAINS CHOiCE 
        socketService.Emitter.on(GameEvents.CaptainsChoice, (data) => {
            socketService.CurrentPlayer.captainsChoice = data;
            gameconnection.invoke(GameEvents.CaptainsChoice, socketService.CurrentPlayer.roomId, socketService.CurrentPlayer);
        });
        //#endregion
        //#region START MATCH EVENT
        gameconnection.on(GameEvents.StartMatch, (data) => {
            console.info("after receiving start match event from server : ", data);
            if (data.currentInnings.batting.playerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            if (data.currentInnings.bowling.playerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            socketService.Emitter.emit(GameEvents.StartMatch, data);
            socketService.MatchData = data;
            this.localStorageService.setData('matchData', data);
        });
        //#endregion
        //#region UPDATE SCORE EVENT
        gameconnection.on(GameEvents.UpdateScore, (data) => {
            console.info("update score event : ", data);
            if (data.currentInnings.batting.playerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            if (data.currentInnings.bowling.playerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            socketService.Emitter.emit(GameEvents.UpdateScore, data);
            socketService.MatchData = data;
            this.localStorageService.setData('matchData', data);
        });
        //#endregion
        //#region GAME OVER EVENT
        gameconnection.on(GameEvents.GameOver, (data) => {
            console.info("game over event : ", data);
            this.socketService.MatchResult = data;
            //send show result event to game comp
            this.socketService.Emitter.emit(INternalEvents.ShowMatchWinLose, data);
        });
        //#endregion
        //#region DELETE ROOM
        this.socketService.Emitter.on(GameEvents.DeleteRoom, (roomname) => {
            gameconnection.invoke(GameEvents.DeleteRoom, roomname);
        });
        gameconnection.on(GameEvents.RoomDeleted, data => {
            console.log("previous room deleted");
        });
        //#endregion
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map