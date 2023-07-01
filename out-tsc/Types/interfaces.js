export class MatchRoomData {
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
        this.spectators = [];
        //we need a method to find out playerno
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
export class PlayerData {
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
        this.isConnected = false;
        this.isCaptain = false;
        this.isReady = false;
        this.isLocked = false;
        this.lockedWith = 0;
    }
}
export class Spectator {
    constructor() {
        this.name = "";
        this.roomName = "";
        this.roomId = "";
        this.spectatorId = "";
        this.currentConnectionId = "";
    }
}
export class InningsDataType {
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
export class InMatchDataType {
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
export var InningsName;
(function (InningsName) {
    InningsName[InningsName["First"] = 1] = "First";
    InningsName[InningsName["Second"] = 2] = "Second";
})(InningsName || (InningsName = {}));
export var MatchWinType;
(function (MatchWinType) {
    MatchWinType[MatchWinType["IsDraw"] = 0] = "IsDraw";
    MatchWinType[MatchWinType["WonByRun"] = 1] = "WonByRun";
    MatchWinType[MatchWinType["WonByWicket"] = 2] = "WonByWicket";
})(MatchWinType || (MatchWinType = {}));
export class Result {
    constructor() {
        this.winnerTeam = new Team();
        this.matchWinType = MatchWinType.IsDraw;
        this.wonByRun = 0;
        this.wonByWicket = 0;
        this.teamA = new Team();
        this.teamB = new Team();
    }
}
//# sourceMappingURL=interfaces.js.map