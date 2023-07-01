export class UpdateScoreDto {
    constructor() {
        this.changeInnings = false;
        this.batsmanWasLockedWith = 0;
        this.bowlerWasLockedWith = 0;
        this.currentInningsUpdatedRuns = 0;
        this.currentInningsUpdatedWickets = 0;
        this.currentInningsBallsPlayed = 0;
        this.currentOnStrikeBatsmanId = "";
        this.currentOnStrikeBowlerId = "";
        this.bowlingTeamThisOver = [];
        this.battingTeamThisOverDisplay = [];
        this.isOut = false;
        this.needToWin = 0;
        this.teamWiseRuns = [];
        this.teamWiseWicketsLeft = [];
        this.teamWiseStrikes = [];
    }
}
//# sourceMappingURL=UpdateScoreDto.js.map