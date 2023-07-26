"use strict";(self.webpackChunkHCApp=self.webpackChunkHCApp||[]).push([[195],{7195:(Z,u,r)=>{r.r(u),r.d(u,{SetupModule:()=>y});var p=r(4755),o=r(5030),l=r(1932),s=r(6739),d=r(6821);class g{constructor(){this.teamName="",this.playerName="",this.roomName="",this.matchType="",this.wickets=0,this.overs=0,this.isCaptain=!1}}var e=r(3020),f=r(7617),h=r(6028);function v(n,a){1&n&&e._UZ(0,"input",24)}const C=[{path:"",component:(()=>{class n{constructor(t,i,c,m){this.socketService=t,this.localStorageService=i,this.router=c,this.ngZone=m,this.wickets=0,this.overs=0,this.connectedToTheServer=!1,this.submitCount=0}ngOnInit(){this.formGroup=new o.cw({playerName:new o.NI("",o.kI.required),roomName:new o.NI("",o.kI.required),teamName:new o.NI("",o.kI.required),matchMode:new o.NI(""),wickets:new o.NI(0),overs:new o.NI(0),isPowerPlayEnabled:new o.NI(!1),isCaptain:new o.NI(!1)}),d.GG.on(s.f.ConnectionSuccessful,()=>{this.ngZone.run(()=>{this.connectedToTheServer=!0,this.socketService.IsConnected=!0})}),this.socketService.Emitter.on(s.f.LOADGAMESCREEN,t=>{this.navigateToGameScreen(t)}),this.socketService.Emitter.on(s.f.ServerDisconnected,()=>{this.ngZone.run(()=>{this.connectedToTheServer=!1})})}navigateToGameScreen(t){this.router.navigate(["/game"]).then()}getPlayerName(){return this.formGroup.get("playerName")?.value}getRoomName(){return this.formGroup.get("roomName")?.value}getWickets(){return this.formGroup.get("wickets")?.value}getOvers(){return this.formGroup.get("overs")?.value}getTeamName(){return this.formGroup.get("teamName")?.value}getMatchType(){return this.formGroup.get("matchMode")?.value}submitForm(){let t=new g;t.wickets=this.getWickets(),t.overs=this.getOvers(),t.playerName=this.getPlayerName(),t.roomName=this.getRoomName(),t.teamName=this.getTeamName(),t.matchType=this.getMatchType(),t.isCaptain=this.formGroup.get("isCaptain")?.value,!this.formGroup.invalid&&(console.log(t),d.GG.invoke(s.f.InitialFormSubmit,t))}handleWicketChange(t){this.wickets=t.target.value}handleOversChange(t){this.overs=t.target.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.$),e.Y36(h.J),e.Y36(l.F0),e.Y36(e.R0b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-setup"]],decls:44,vars:7,consts:[[1,"title-container"],[1,"title"],[1,"sub-title"],[1,"server-connection-status"],[1,"message"],[1,"message-text"],["id","room-create-form",1,"room-create-form",3,"formGroup","ngSubmit"],["formControlName","teamName","id","team","aria-label",".form-select-lg example","required","",1,"form-select","form-select-lg","mb-3"],["value","","selected","","disabled",""],["value","A"],["value","B"],["formControlName","matchMode","id","matchMode","aria-label",".form-select-lg example",1,"form-select","form-select-lg","mb-3"],["selected","","value","2v2"],[1,"form-floating","mb-3"],["formControlName","playerName","type","text","id","name","placeholder","Enter your name","required","",1,"form-control"],["formControlName","roomName","type","text","id","room","placeholder","Enter room name","required","",1,"form-control"],["for","wickets",1,"form-label"],["formControlName","wickets","type","range","min","0","max","4","step","2","id","wickets","name","Wickets","required","",1,"form-range",3,"change"],["for","over",1,"form-label"],["formControlName","overs","type","range","min","1","max","4","step","1","id","over","name","Over","required","",1,"form-range",3,"change"],[1,"form-check"],["type","checkbox","formControlName","isCaptain","id","isCaptain",1,"form-check-input"],["for","isCaptain",1,"form-check-label"],["type","submit","id","submitBtn","value","Submit",4,"ngIf"],["type","submit","id","submitBtn","value","Submit"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1),e._uU(3,"HandCricket"),e.qZA(),e.TgZ(4,"div",2),e._uU(5,"REBORN V.1.0.0"),e.qZA()(),e.TgZ(6,"div",3),e._uU(7," Server Connection Status : "),e._UZ(8,"div"),e.qZA(),e.TgZ(9,"div",4)(10,"div",5),e._uU(11,"Room Creator will be the captain of TEAM A"),e.qZA()(),e.TgZ(12,"form",6),e.NdJ("ngSubmit",function(){return i.submitForm()}),e.TgZ(13,"select",7)(14,"option",8),e._uU(15,"Select Your Team"),e.qZA(),e.TgZ(16,"option",9),e._uU(17,"Team A"),e.qZA(),e.TgZ(18,"option",10),e._uU(19,"Team B"),e.qZA()(),e._UZ(20,"hr"),e.TgZ(21,"select",11)(22,"option",12),e._uU(23,"2 vs 2"),e.qZA()(),e._UZ(24,"hr"),e.TgZ(25,"div",13),e._UZ(26,"input",14),e.qZA(),e.TgZ(27,"div",13),e._UZ(28,"input",15),e.qZA(),e.TgZ(29,"label",16),e._uU(30),e.qZA(),e.TgZ(31,"input",17),e.NdJ("change",function(m){return i.handleWicketChange(m)}),e.qZA(),e._UZ(32,"br"),e.TgZ(33,"label",18),e._uU(34),e.qZA(),e.TgZ(35,"input",19),e.NdJ("change",function(m){return i.handleOversChange(m)}),e.qZA(),e._UZ(36,"br"),e.TgZ(37,"div",20),e._UZ(38,"input",21),e.TgZ(39,"label",22),e._uU(40,"Joining As A Captain"),e.qZA()(),e._UZ(41,"br")(42,"br"),e.YNc(43,v,1,0,"input",23),e.qZA()()),2&t&&(e.xp6(8),e.Tol(i.connectedToTheServer?"connected-to-server":"not-connected-to-server"),e.xp6(4),e.Q6J("formGroup",i.formGroup),e.xp6(18),e.hij("Wickets: ",i.wickets,""),e.xp6(4),e.hij("Over: ",i.overs,""),e.xp6(9),e.Q6J("ngIf",i.submitCount<=1))},dependencies:[p.O5,o._Y,o.YN,o.Kr,o.Fj,o.eT,o.Wl,o.EJ,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".title-container[_ngcontent-%COMP%]{display:grid;justify-content:center;text-align:center}.title[_ngcontent-%COMP%]{font-family:SunnySpells;font-size:2.5rem;padding:.5rem 0;color:orange}.sub-title[_ngcontent-%COMP%]{font-family:Roboto;font-style:italic;padding:.5rem .2rem;color:#020100}.server-connection-status[_ngcontent-%COMP%]{font-family:Roboto;font-size:.9rem;padding:.3rem .2rem;display:flex}.not-connected-to-server[_ngcontent-%COMP%]{background-color:#f70909;width:20px;height:20px;border-radius:50%}.connected-to-server[_ngcontent-%COMP%]{background-color:#98f709;width:20px;height:20px;border-radius:50%}.room-create-form[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:center;font-family:Roboto;color:orange;width:300px;margin:0 auto;text-align:left;padding:20px;border:1px dotted #ccc;border-radius:5px}label[_ngcontent-%COMP%]{font-family:Roboto;font-size:1.2rem;font-weight:700;display:block;margin-bottom:10px}.room-create-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .room-create-form[_ngcontent-%COMP%]   input[type=room][_ngcontent-%COMP%]{font-family:Roboto;width:80%;padding:12px 20px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px}.room-create-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{font-family:Roboto;background-color:#4caf50;color:#fff;padding:12px 20px;border:none;border-radius:4px;cursor:pointer}#submitBtn[_ngcontent-%COMP%]{background-color:#12127e;font-size:1.2rem;font-family:Roboto}"]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(C),l.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,b,o.UX]}),n})()}}]);