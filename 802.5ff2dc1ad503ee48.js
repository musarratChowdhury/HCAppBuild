"use strict";(self.webpackChunkHCApp=self.webpackChunkHCApp||[]).push([[802],{802:(b,s,r)=>{r.r(s),r.d(s,{SetupModule:()=>v});var p=r(6814),t=r(95),l=r(6538),u=r(4274),e=r(4946),f=r(1982),g=r(6690);const d=[{path:"",component:(()=>{class o{constructor(n,i,m){this.socketService=n,this.localStorageService=i,this.router=m,this.wickets=0,this.overs=0}ngOnInit(){this.formGroup=new t.cw({playerName:new t.NI(""),roomName:new t.NI(""),teamName:new t.NI(""),matchMode:new t.NI(""),wickets:new t.NI(0),overs:new t.NI(0),isPowerPlayEnabled:new t.NI(!1),isCaptain:new t.NI(!1)}),this.socketService.Emitter.on(u.f.LOADGAMESCREEN,n=>{this.navigateToGameScreen(n)})}navigateToGameScreen(n){console.log(n),this.router.navigate(["/game"]).then(),this.localStorageService.setData("matchRoomData",n)}submitForm(){console.log(this.formGroup?.value),this.socketService.Emitter.emit(u.f.InitialFormSubmit,this.formGroup.value)}handleWicketChange(n){this.wickets=n.target.value}handleOversChange(n){this.overs=n.target.value}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(f.$),e.Y36(g.J),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-setup"]],decls:40,vars:3,consts:[[1,"title-container"],[1,"title"],[1,"sub-title"],["id","room-create-form",1,"room-create-form",3,"formGroup","ngSubmit"],["formControlName","teamName","id","team","aria-label",".form-select-lg example",1,"form-select","form-select-lg","mb-3"],["value","","selected","","disabled",""],["value","A"],["value","B"],["formControlName","matchMode","id","matchMode","aria-label",".form-select-lg example",1,"form-select","form-select-lg","mb-3"],["value","2v2"],[1,"form-floating","mb-3"],["formControlName","playerName","type","text","id","name","placeholder","Enter your name","required","",1,"form-control"],["formControlName","roomName","type","text","id","room","placeholder","Enter room name","required","",1,"form-control"],["for","wickets",1,"form-label"],["formControlName","wickets","type","range","min","0","max","10","step","2","id","wickets","name","Wickets","required","",1,"form-range",3,"change"],["for","over",1,"form-label"],["formControlName","overs","type","range","min","1","max","10","step","1","id","over","name","Over","required","",1,"form-range",3,"change"],[1,"form-check"],["type","checkbox","formControlName","isCaptain","id","isCaptain",1,"form-check-input"],["for","isCaptain",1,"form-check-label"],["type","submit","id","submitBtn","value","Submit"]],template:function(n,i){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1),e._uU(3,"HandCricket"),e.qZA(),e.TgZ(4,"div",2),e._uU(5,"REBORN V.1.0.0"),e.qZA()(),e.TgZ(6,"form",3),e.NdJ("ngSubmit",function(){return i.submitForm()}),e.TgZ(7,"select",4)(8,"option",5),e._uU(9,"Select Your Team"),e.qZA(),e.TgZ(10,"option",6),e._uU(11,"Team A"),e.qZA(),e.TgZ(12,"option",7),e._uU(13,"Team B"),e.qZA()(),e._UZ(14,"hr"),e.TgZ(15,"select",8)(16,"option",5),e._uU(17,"Select Match Mode"),e.qZA(),e.TgZ(18,"option",9),e._uU(19,"2 vs 2"),e.qZA()(),e._UZ(20,"hr"),e.TgZ(21,"div",10),e._UZ(22,"input",11),e.qZA(),e.TgZ(23,"div",10),e._UZ(24,"input",12),e.qZA(),e.TgZ(25,"label",13),e._uU(26),e.qZA(),e.TgZ(27,"input",14),e.NdJ("change",function(c){return i.handleWicketChange(c)}),e.qZA(),e._UZ(28,"br"),e.TgZ(29,"label",15),e._uU(30),e.qZA(),e.TgZ(31,"input",16),e.NdJ("change",function(c){return i.handleOversChange(c)}),e.qZA(),e._UZ(32,"br"),e.TgZ(33,"div",17),e._UZ(34,"input",18),e.TgZ(35,"label",19),e._uU(36,"Joining As A Captain"),e.qZA()(),e._UZ(37,"br")(38,"br")(39,"input",20),e.qZA()()),2&n&&(e.xp6(6),e.Q6J("formGroup",i.formGroup),e.xp6(20),e.hij("Wickets: ",i.wickets,""),e.xp6(4),e.hij("Over: ",i.overs,""))},dependencies:[t._Y,t.YN,t.Kr,t.Fj,t.eT,t.Wl,t.EJ,t.JJ,t.JL,t.Q7,t.sg,t.u],styles:[".title-container[_ngcontent-%COMP%]{display:grid;justify-content:center;text-align:center}.title[_ngcontent-%COMP%]{font-family:SunnySpells;font-size:2.5rem;padding:.5rem 0;color:orange}.sub-title[_ngcontent-%COMP%]{font-family:Roboto;font-style:italic;padding:.5rem .2rem;color:#020100}.room-create-form[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:center;font-family:Roboto;color:orange;width:300px;margin:0 auto;text-align:left;padding:20px;border:1px dotted #ccc;border-radius:5px}label[_ngcontent-%COMP%]{font-family:Roboto;font-size:1.2rem;font-weight:700;display:block;margin-bottom:10px}.room-create-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .room-create-form[_ngcontent-%COMP%]   input[type=room][_ngcontent-%COMP%]{font-family:Roboto;width:80%;padding:12px 20px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px}.room-create-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{font-family:Roboto;background-color:#4caf50;color:#fff;padding:12px 20px;border:none;border-radius:4px;cursor:pointer}#submitBtn[_ngcontent-%COMP%]{background-color:#12127e;font-size:1.2rem;font-family:Roboto}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(d),l.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,h,t.UX]}),o})()}}]);