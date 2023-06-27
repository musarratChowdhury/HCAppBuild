import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatchWinType } from 'src/Types/interfaces';
import { GameEvents } from '../middleware/socketService.type';
let ResultComponent = class ResultComponent {
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
            if (this.socketService.MatchResult.matchWinType == MatchWinType.IsDraw) {
                this.matchResultText = "The Match is Draw!";
            }
            else if (this.socketService.MatchResult.matchWinType == MatchWinType.WonByRun) {
                this.matchResultText = `Team ${this.socketService.MatchResult.winnerTeam.name} has won the match by
                                       ${this.socketService.MatchResult.wonByRun} runs`;
            }
            else {
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
            this.teamRuns.teamA = this.socketService.MatchResult.teamA.player1.runs +
                this.socketService.MatchResult.teamA.player2.runs;
            this.teamRuns.teamB = this.socketService.MatchResult.teamB.player1.runs +
                this.socketService.MatchResult.teamB.player2.runs;
        });
    }
    handleBack() {
        this.router.navigate(['/setup']).then();
        this.socketService.Emitter.emit(GameEvents.DeleteRoom, this.socketService.MatchData.name);
    }
};
ResultComponent = __decorate([
    Component({
        selector: 'app-result',
        templateUrl: './result.component.html',
        styleUrls: ['./result.component.css']
    })
], ResultComponent);
export { ResultComponent };
//# sourceMappingURL=result.component.js.map