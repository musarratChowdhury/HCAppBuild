"use strict";(self.webpackChunkHCApp=self.webpackChunkHCApp||[]).push([[755],{9755:(v,l,n)=>{n.r(l),n.d(l,{ResultModule:()=>R});var u=n(4755),i=n(1932),c=n(7109),p=n(6739),e=n(3020),h=n(7617);const y=[{path:"",component:(()=>{class a{constructor(s,t,o){this.socketService=s,this.ngZone=t,this.router=o,this.playerNames={player1:"Player 1",player2:"Player 2",player3:"Player 3",player4:"Player 4"},this.playerRuns={player1:0,player2:0,player3:0,player4:0},this.playerStrikeRate={player1:0,player2:0,player3:0,player4:0},this.teamRuns={teamA:0,teamB:0},this.teamInnings={teamA:"",teamB:""},this.matchResultText=""}ngOnInit(){this.ngZone.run(()=>{this.matchResultText=this.socketService.MatchResult.matchWinType==c.PV.IsDraw?"The Match is Draw!":this.socketService.MatchResult.matchWinType==c.PV.WonByRun?`Team ${this.socketService.MatchResult.winnerTeamName} has won the match by\n                                       ${this.socketService.MatchResult.wonByRun} runs`:`Team ${this.socketService.MatchResult.winnerTeamName} has won the match by\n                                       ${this.socketService.MatchResult.wonByWicket} wickets`,this.playerRuns.player1=this.socketService.MatchResult.player1Runs,this.playerRuns.player2=this.socketService.MatchResult.player2Runs,this.playerRuns.player3=this.socketService.MatchResult.player3Runs,this.playerRuns.player4=this.socketService.MatchResult.player4Runs,this.playerStrikeRate.player1=this.socketService.MatchResult.player1Sr,this.playerStrikeRate.player2=this.socketService.MatchResult.player2Sr,this.playerStrikeRate.player3=this.socketService.MatchResult.player3Sr,this.playerStrikeRate.player4=this.socketService.MatchResult.player4Sr,this.playerNames.player1=this.socketService.MatchResult.player1Name,this.playerNames.player2=this.socketService.MatchResult.player2Name,this.playerNames.player3=this.socketService.MatchResult.player3Name,this.playerNames.player4=this.socketService.MatchResult.player4Name,this.teamRuns.teamA=this.socketService.MatchResult.teamATotalRuns,this.teamRuns.teamB=this.socketService.MatchResult.teamBTotalRuns,this.teamInnings.teamA=this.socketService.MatchResult.teamAInnings,this.teamInnings.teamB=this.socketService.MatchResult.teamBInnings})}handleBack(){this.router.navigate(["/setup"]).then(),this.socketService.Emitter.emit(p.f.DeleteRoom,this.socketService.CurrentMatchInfo.roomName),this.socketService.resetObjects()}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(h.$),e.Y36(e.R0b),e.Y36(i.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-result"]],decls:45,vars:17,consts:[[1,"result-container"],[1,"title"],[1,"match-result"],[1,"match-result-text"],[1,"team"],[1,"team-name"],[1,"players-container"],[1,"player"],[1,"player-name"],[1,"player-runs"],[1,"player-sr"],[1,"back-button-container"],[1,"back-button",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Match Summary"),e.qZA(),e.TgZ(3,"div",2)(4,"h5",3),e._uU(5),e.qZA()(),e.TgZ(6,"div",4)(7,"h3",5),e._uU(8),e.qZA(),e.TgZ(9,"div",6)(10,"div",7)(11,"div",8),e._uU(12),e.qZA(),e.TgZ(13,"div",9),e._uU(14),e.qZA(),e.TgZ(15,"div",10),e._uU(16),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8),e._uU(19),e.qZA(),e.TgZ(20,"div",9),e._uU(21),e.qZA(),e.TgZ(22,"div",10),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",4)(25,"h3",5),e._uU(26),e.qZA(),e.TgZ(27,"div",6)(28,"div",7)(29,"div",8),e._uU(30),e.qZA(),e.TgZ(31,"div",9),e._uU(32),e.qZA(),e.TgZ(33,"div",10),e._uU(34),e.qZA()(),e.TgZ(35,"div",7)(36,"div",8),e._uU(37),e.qZA(),e.TgZ(38,"div",9),e._uU(39),e.qZA(),e.TgZ(40,"div",10),e._uU(41),e.qZA()()()(),e.TgZ(42,"div",11)(43,"button",12),e.NdJ("click",function(){return t.handleBack()}),e._uU(44,"Back"),e.qZA()()()),2&s&&(e.xp6(5),e.Oqu(t.matchResultText),e.xp6(3),e.AsE("Team A : ",t.teamRuns.teamA," (",t.teamInnings.teamA,")"),e.xp6(4),e.hij(" Name : ",t.playerNames.player1,""),e.xp6(2),e.hij("Runs: ",t.playerRuns.player1,""),e.xp6(2),e.hij("S/R : ",t.playerStrikeRate.player1,""),e.xp6(3),e.hij(" Name : ",t.playerNames.player2,""),e.xp6(2),e.hij("Runs: ",t.playerRuns.player2,""),e.xp6(2),e.hij("S/R : ",t.playerStrikeRate.player2,""),e.xp6(3),e.AsE("Team B : ",t.teamRuns.teamB," (",t.teamInnings.teamB,")"),e.xp6(4),e.hij(" Name : ",t.playerNames.player3,""),e.xp6(2),e.hij("Runs: ",t.playerRuns.player3,""),e.xp6(2),e.hij("S/R : ",t.playerStrikeRate.player3,""),e.xp6(3),e.hij(" Name : ",t.playerNames.player4,""),e.xp6(2),e.hij("Runs: ",t.playerRuns.player4,""),e.xp6(2),e.hij("S/R : ",t.playerStrikeRate.player4,""))},styles:[".result-container[_ngcontent-%COMP%]{display:grid;justify-content:center;-webkit-user-select:none;user-select:none;align-items:center}.back-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.back-button[_ngcontent-%COMP%]{padding:.2rem .4rem;margin:.4rem .5rem;cursor:pointer;font-size:1.2rem;font-family:SunnySpells}.title[_ngcontent-%COMP%]{text-align:center;font-family:LedBoardR}.team-name[_ngcontent-%COMP%]{text-align:center;font-family:LCD2N}.match-result-text[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem;font-family:LCD2N;font-size:1.4rem;font-weight:400;font-style:italic}.team[_ngcontent-%COMP%]{display:grid;justify-content:center}.players-container[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:space-around;font-family:LCD2N;width:350px;background-color:bisque}.player[_ngcontent-%COMP%]{text-align:center;padding:1rem .5rem}.player-name[_ngcontent-%COMP%]{font-size:1.2rem;padding:.3rem .1rem}.player-runs[_ngcontent-%COMP%], .player-sr[_ngcontent-%COMP%]{font-size:1.1rem;padding:.3rem .1rem}"]}),a})()}];let m=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[i.Bz.forChild(y),i.Bz]}),a})(),R=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.ez,m]}),a})()}}]);