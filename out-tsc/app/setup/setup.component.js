import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameEvents } from '../middleware/socketService.type';
import { gameconnection } from 'src/main';
let SetupComponent = class SetupComponent {
    constructor(socketService, localStorageService, router, ngZone) {
        this.socketService = socketService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.ngZone = ngZone;
        /**
         *
         */
        this.wickets = 0;
        this.overs = 0;
        this.connectedToTheServer = false;
        this.submitCount = 0;
    }
    ngOnInit() {
        this.formGroup = new FormGroup({
            playerName: new FormControl('', Validators["required"]),
            roomName: new FormControl('', Validators["required"]),
            teamName: new FormControl('', Validators["required"]),
            matchMode: new FormControl(''),
            wickets: new FormControl(0),
            overs: new FormControl(0),
            isPowerPlayEnabled: new FormControl(false),
            isCaptain: new FormControl(false)
        });
        gameconnection.on(GameEvents.ConnectionSuccessful, () => {
            this.ngZone.run(() => {
                this.connectedToTheServer = true;
                this.socketService.IsConnected = true;
            });
        });
        //#region Load Game Screen
        this.socketService.Emitter.on(GameEvents.LOADGAMESCREEN, (data) => {
            this.navigateToGameScreen(data);
        });
        //#endregion
        //#region SERVER DISCONNECT
        this.socketService.Emitter.on(GameEvents.ServerDisconnected, () => {
            this.ngZone.run(() => {
                this.connectedToTheServer = false;
            });
        });
        //#endregion
    }
    navigateToGameScreen(data) {
        console.log(data);
        this.router.navigate(['/game']).then();
        //make a seperate service for handling localstorage data storing and fetching
        this.localStorageService.setData('matchRoomData', data);
    }
    getPlayerName() {
        return this.formGroup.get("playerName")?.value;
    }
    getRoomName() {
        return this.formGroup.get("roomName")?.value;
    }
    getWickets() {
        return this.formGroup.get("wickets")?.value;
    }
    getOvers() {
        return this.formGroup.get("overs")?.value;
    }
    submitForm() {
        // if(this.wickets == 0 || this.overs == 0)
        // return;
        if (this.formGroup.invalid)
            return;
        console.log(this.formGroup?.value);
        this.socketService.Emitter.emit(GameEvents.InitialFormSubmit, this.formGroup.value).then(() => {
            this.submitCount++;
        });
    }
    handleWicketChange(e) {
        this.wickets = e.target.value;
    }
    handleOversChange(e) {
        this.overs = e.target.value;
    }
};
SetupComponent = __decorate([
    Component({
        selector: 'app-setup',
        templateUrl: './setup.component.html',
        styleUrls: ['./setup.component.css'],
    })
], SetupComponent);
export { SetupComponent };
//# sourceMappingURL=setup.component.js.map