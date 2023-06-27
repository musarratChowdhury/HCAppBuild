export var GameEvents;
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
export var INternalEvents;
(function (INternalEvents) {
    INternalEvents["InitiateTossStage"] = "InitiateTossStage";
    INternalEvents["ShowTheLockedNumber"] = "ShowTheLockedNumber";
    INternalEvents["ShowOppoisLocked"] = "ShowOppoisLocked";
    INternalEvents["ShowMatchWinLose"] = "ShowMatchWinLose";
})(INternalEvents || (INternalEvents = {}));
//# sourceMappingURL=socketService.type.js.map