import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameEvents } from '../middleware/socketService.type';
let SetupComponent = class SetupComponent {
    constructor(socketService, localStorageService, router) {
        this.socketService = socketService;
        this.localStorageService = localStorageService;
        this.router = router;
        /**
         *
         */
        this.wickets = 0;
        this.overs = 0;
    }
    ngOnInit() {
        this.formGroup = new FormGroup({
            playerName: new FormControl(''),
            roomName: new FormControl(''),
            teamName: new FormControl(''),
            matchMode: new FormControl(''),
            wickets: new FormControl(0),
            overs: new FormControl(0),
            isPowerPlayEnabled: new FormControl(false),
            isCaptain: new FormControl(false)
        });
        this.socketService.Emitter.on(GameEvents.LOADGAMESCREEN, (data) => {
            this.navigateToGameScreen(data);
        });
    }
    navigateToGameScreen(data) {
        console.log(data);
        this.router.navigate(['/game']).then();
        //make a seperate service for handling localstorage data storing and fetching
        this.localStorageService.setData('matchRoomData', data);
    }
    submitForm() {
        console.log(this.formGroup?.value);
        this.socketService.Emitter.emit(GameEvents.InitialFormSubmit, this.formGroup.value);
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