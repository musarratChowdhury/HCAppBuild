import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GameEvents, INternalEvents } from './middleware/socketService.type';
import { CurrentMode, MODES, gameconnection } from 'src/main';
import { PlayerConfirmedDto } from 'src/Types/Dtos/PlayerConfirmedDto';
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
        this.developmentMode = CurrentMode == MODES.Production ? false : true;
        // INITIAL FORM SUBMIT
        socketService.Emitter.on(GameEvents.InitialFormSubmit, (data) => {
            gameconnection.invoke(GameEvents.InitialFormSubmit, data);
        });
        //#region FIRST PLAYER JOINED
        gameconnection.on(GameEvents.FirstPlayerJoined, (data) => {
            socketService.CurrentPlayer = data.playerList.find((p) => p.currentConnectionId == gameconnection.connectionId);
            socketService.Emitter.emit(GameEvents.LOADGAMESCREEN, data);
            // save data in lc
            socketService.MatchData = data;
            this.localStorageService.setData('matchData', data);
        });
        //#endregion
        //#region  Other PLAYER JOINED
        gameconnection.on(GameEvents.PLAYERJOINED, (data) => {
            //when the other player joins the room
            // if (socketService.CurrentPlayer.playerId == '') {
            //   socketService.CurrentPlayer = data.playerList.find(
            //     (p) => p.currentConnectionId == gameconnection.connectionId
            //   )!;
            // }
            if (data.playerList.some(x => x.currentConnectionId == gameconnection.connectionId)) {
                //this mean this guy is added as a player in the match room
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
            socketService.Emitter.emit(GameEvents.LOADGAMESCREEN, data);
            socketService.Emitter.emit(GameEvents.PLAYERJOINED, data);
            // save data in lc
            socketService.MatchData = data;
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
                gameconnection.invoke(GameEvents.PlayerReady, socketService.CurrentPlayer.roomId, socketService.CurrentPlayer.name, socketService.CurrentPlayer.currentConnectionId);
            }
            else {
                console.error("room id not found on current player");
            }
        });
        //#endregion
        //#region PLAYER READY RECEIVED
        gameconnection.on(GameEvents.PlayerReadyReceived, (playerName) => {
            socketService.Emitter.emit(GameEvents.PlayerReadyReceived, playerName);
        });
        //#endregion
        //#region PLAYER CONFIRMED
        socketService.Emitter.on(GameEvents.PlayerConfirmed, (data) => {
            // debugger
            let playerConfirmedDto = new PlayerConfirmedDto();
            playerConfirmedDto.currentConnectionId = gameconnection.connectionId;
            playerConfirmedDto.playerId = socketService.CurrentPlayer.playerId;
            playerConfirmedDto.lockedWith = parseInt(data);
            playerConfirmedDto.roomName = socketService.MatchData.name;
            playerConfirmedDto.roomId = socketService.MatchData.roomId;
            if (socketService.CurrentPlayer.roomId != "") {
                gameconnection.invoke(GameEvents.PlayerConfirmed, socketService.CurrentPlayer.roomId, playerConfirmedDto);
            }
            else {
                console.log("room id not found");
            }
        });
        //#endregion
        //#region PLAYER CONFIRMED RECEIVED 
        gameconnection.on(GameEvents.PlayerConfirmedReceived, (data) => {
            if (this.socketService.isTeamMate(data.playerId)) {
                //showing teammate the locked number
                this.socketService.Emitter.emit("ShowTheLockedNumber", data.lockedWith);
            }
            else {
                //For SPectators
                this.socketService.Emitter.emit("ShowOppoisLocked");
            }
        });
        //#endregion
        //#region TOSS WINNER RECEIVED
        gameconnection.on(GameEvents.TossWinner, (data) => {
            let currentPlayerId = this.socketService.CurrentPlayer.playerId;
            let playerWithTossWinId = data.tossWinnerId;
            let playerWithTossLossId = data.tossLoserId;
            if (currentPlayerId == playerWithTossWinId ||
                this.socketService.isTeamMate(playerWithTossWinId)) {
                this.socketService.Emitter.emit(GameEvents.TossWinner, { tosswinner: true, msg: `You have won the toss`,
                    myNumber: data.winnerIsLockedWith,
                    oppoNumber: data.loserIsLockedWith });
            }
            else if (currentPlayerId == playerWithTossLossId ||
                this.socketService.isTeamMate(playerWithTossLossId)) {
                this.socketService.Emitter.emit(GameEvents.TossWinner, { tosswinner: false, msg: `${data.winnerTeamName} have won the toss`,
                    myNumber: data.loserIsLockedWith,
                    oppoNumber: data.winnerIsLockedWith });
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
            if (data.currentOnStrikeBatsmanId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            if (data.currentOnStrikeBowlerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            socketService.Emitter.emit(GameEvents.StartMatch, data);
        });
        //#endregion
        //#region UPDATE SCORE EVENT
        gameconnection.on(GameEvents.UpdateScore, (data) => {
            console.info("update score event : ", data);
            if (data.currentOnStrikeBatsmanId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            if (data.currentOnStrikeBowlerId == socketService.CurrentPlayer.playerId) {
                socketService.CurrentPlayer.isOnStrike = true;
            }
            socketService.Emitter.emit(GameEvents.UpdateScore, data);
        });
        //#endregion
        //#region GAME OVER EVENT
        gameconnection.on(GameEvents.GameOver, (data) => {
            console.info("game over event : ", data);
            this.socketService.MatchResult = data;
            this.socketService.MatchData.gameOver = true;
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
        //#region PlayerDIsconnect
        gameconnection.on(GameEvents.PlayerDisconnected, (data) => {
            this.socketService.MatchData = data;
            this.socketService.Emitter.emit(GameEvents.PlayerDisconnected);
        });
        //#endregion
        //#region  CONNECTION CLOSED EVENT
        gameconnection.onclose((err) => {
            console.log("ON CLOSE EVENT TRIGGERED : ", err);
            this.socketService.IsConnected = false;
            this.socketService.Emitter.emit(GameEvents.ServerDisconnected);
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