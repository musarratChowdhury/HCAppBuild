"use strict";(self.webpackChunkHCApp=self.webpackChunkHCApp||[]).push([[802],{802:(S,p,a)=>{a.r(p),a.d(p,{SetupModule:()=>y});var c=a(6814),t=a(95),u=a(72),s=a(4274),g=a(4773),e=a(4946),d=a(1982);function h(n,m){1&n&&(e.ynx(0),e._UZ(1,"i",25),e.BQk())}function v(n,m){1&n&&(e.ynx(0),e._UZ(1,"i",26),e.BQk())}function C(n,m){1&n&&e._UZ(0,"input",27)}const b=function(n,m){return{"text-blue-600":n,"text-red-500":m}},T=[{path:"",component:(()=>{class n{constructor(r,i,o){this.socketService=r,this.router=i,this.ngZone=o,this.wickets=0,this.overs=0,this.connectedToTheServer=!1,this.submitCount=0}ngOnInit(){this.formGroup=new t.cw({playerName:new t.NI("",t.kI.required),roomName:new t.NI("",t.kI.required),teamName:new t.NI("",t.kI.required),matchMode:new t.NI("2v2"),wickets:new t.NI(0),overs:new t.NI(0),isPowerPlayEnabled:new t.NI(!1),isCaptain:new t.NI(!1)}),g.GG.on(s.f.ConnectionSuccessful,()=>{this.ngZone.run(()=>{this.connectedToTheServer=!0,this.socketService.IsConnected=!0})}),this.socketService.Emitter.on(s.f.LOADGAMESCREEN,r=>{this.navigateToGameScreen(r)}),this.socketService.Emitter.on(s.f.ServerDisconnected,()=>{this.ngZone.run(()=>{this.connectedToTheServer=!1})})}navigateToGameScreen(r){this.router.navigate(["/game"]).then()}getPlayerName(){return this.formGroup.get("playerName")?.value}getRoomName(){return this.formGroup.get("roomName")?.value}getWickets(){return this.formGroup.get("wickets")?.value}getOvers(){return this.formGroup.get("overs")?.value}submitForm(){this.formGroup.invalid||(console.log(this.formGroup?.value),this.socketService.Emitter.emit(s.f.InitialFormSubmit,this.formGroup.value).then(()=>{this.submitCount++}))}handleWicketChange(r){this.wickets=r.target.value}handleOversChange(r){this.overs=r.target.value}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.$),e.Y36(u.F0),e.Y36(e.R0b))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-setup"]],decls:43,vars:10,consts:[[1,"setup-component"],[1,"title-container"],[1,"title"],[1,"sub-title"],[1,"server-connection-status","text-xl","font-mono","text-green-600"],[3,"ngClass"],[4,"ngIf"],[1,"setup-message"],[1,"text-sm","font-sans","text-yellow-400"],["id","room-create-form",1,"room-create-form",3,"formGroup","ngSubmit"],["formControlName","teamName","id","team","aria-label",".form-select-lg example","required","",1,"form-select","form-select-lg","mb-3"],["value","","selected","","disabled",""],["value","A"],["value","B"],[1,"form-floating","mb-3"],["formControlName","playerName","type","text","id","name","placeholder","Enter your name","required","",1,"form-control"],["formControlName","roomName","type","text","id","room","placeholder","Enter room name","required","",1,"form-control"],["for","wickets",1,"form-label"],["formControlName","wickets","type","range","min","0","max","10","step","2","id","wickets","name","Wickets","required","",1,"form-range",3,"change"],["for","over",1,"form-label"],["formControlName","overs","type","range","min","1","max","10","step","1","id","over","name","Over","required","",1,"form-range",3,"change"],[1,"form-check"],["type","checkbox","formControlName","isCaptain","id","isCaptain",1,"form-check-input"],["for","isCaptain",1,"form-check-label"],["type","submit","id","submitBtn","value","Submit","class","outline-pink-600 border-slate-300 text-red-50",4,"ngIf"],[1,"fas","fa-wifi"],[1,"fas","fa-circle-exclamation","p-1"],["type","submit","id","submitBtn","value","Submit",1,"outline-pink-600","border-slate-300","text-red-50"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"HandCricket"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"REBORN V.1.0.0"),e.qZA()(),e.TgZ(6,"div",4),e._uU(7," Server Connection Status : "),e.TgZ(8,"div",5),e.YNc(9,h,2,0,"ng-container",6),e.YNc(10,v,2,0,"ng-container",6),e.qZA()(),e.TgZ(11,"div",7)(12,"div",8),e._uU(13," Room Creator will be the captain of TEAM A "),e.qZA()(),e.TgZ(14,"form",9),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(15,"select",10)(16,"option",11),e._uU(17,"Select Your Team"),e.qZA(),e.TgZ(18,"option",12),e._uU(19,"Team A"),e.qZA(),e.TgZ(20,"option",13),e._uU(21,"Team B"),e.qZA()(),e._UZ(22,"hr")(23,"hr"),e.TgZ(24,"div",14),e._UZ(25,"input",15),e.qZA(),e.TgZ(26,"div",14),e._UZ(27,"input",16),e.qZA(),e.TgZ(28,"label",17),e._uU(29),e.qZA(),e.TgZ(30,"input",18),e.NdJ("change",function(l){return o.handleWicketChange(l)}),e.qZA(),e._UZ(31,"br"),e.TgZ(32,"label",19),e._uU(33),e.qZA(),e.TgZ(34,"input",20),e.NdJ("change",function(l){return o.handleOversChange(l)}),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"div",21),e._UZ(37,"input",22),e.TgZ(38,"label",23),e._uU(39,"Joining As A Captain"),e.qZA()(),e._UZ(40,"br")(41,"br"),e.YNc(42,C,1,0,"input",24),e.qZA()()),2&i&&(e.xp6(8),e.Q6J("ngClass",e.WLB(7,b,o.connectedToTheServer,!o.connectedToTheServer)),e.xp6(1),e.Q6J("ngIf",o.connectedToTheServer),e.xp6(1),e.Q6J("ngIf",!o.connectedToTheServer),e.xp6(4),e.Q6J("formGroup",o.formGroup),e.xp6(15),e.hij("Wickets: ",o.wickets,""),e.xp6(4),e.hij("Over: ",o.overs,""),e.xp6(9),e.Q6J("ngIf",o.submitCount<=1))},dependencies:[c.mk,c.O5,t._Y,t.YN,t.Kr,t.Fj,t.eT,t.Wl,t.EJ,t.JJ,t.JL,t.Q7,t.sg,t.u],styles:[".setup-component[_ngcontent-%COMP%]{background-color:#0d0224;width:380px}.title-container[_ngcontent-%COMP%]{display:grid;justify-content:center;text-align:center}.title[_ngcontent-%COMP%]{font-family:SunnySpells;font-size:2.5rem;padding:.5rem 0;color:orange}.sub-title[_ngcontent-%COMP%]{font-family:Roboto;font-style:italic;padding:.5rem .2rem;color:#fff}.server-connection-status[_ngcontent-%COMP%]{font-family:Roboto;padding:.3rem 1rem;display:flex}.setup-message[_ngcontent-%COMP%]{padding:.5rem 1rem}.message-text[_ngcontent-%COMP%]{color:#fffb15}.room-create-form[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:center;font-family:Roboto;color:orange;width:300px;margin:0 auto;text-align:left;padding:20px;border:1px dotted #ccc;border-radius:5px}label[_ngcontent-%COMP%]{font-family:Roboto;font-size:1.2rem;font-weight:700;display:block;margin-bottom:10px}.room-create-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .room-create-form[_ngcontent-%COMP%]   input[type=room][_ngcontent-%COMP%]{font-family:Roboto;width:80%;padding:12px 20px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px}.room-create-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{font-family:Roboto;padding:12px 20px;cursor:pointer}#submitBtn[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Roboto}"]})}return n})()}];let Z=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(T),u.Bz]})}return n})(),y=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,Z,t.UX]})}return n})()}}]);