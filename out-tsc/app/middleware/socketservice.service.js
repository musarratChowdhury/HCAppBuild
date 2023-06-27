import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import Emittery from 'emittery';
import { EMITTERY_INSTANCE } from '../app.module';
import { MatchRoomData, PlayerData, Result } from 'src/Types/interfaces';
let SocketService = class SocketService {
    constructor(emittery, localStorageService) {
        this.emittery = emittery;
        this.localStorageService = localStorageService;
        this.CurrentPlayer = new PlayerData();
        this.OppoPlayers = [];
        this.Teammates = [];
        this.MatchData = new MatchRoomData();
        this.MatchResult = new Result();
        emittery = new Emittery();
        Emittery.isDebugEnabled = false;
    }
    TurnOffDebugger() {
        Emittery.isDebugEnabled = false;
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
};
SocketService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(EMITTERY_INSTANCE))
], SocketService);
export { SocketService };
//# sourceMappingURL=socketservice.service.js.map