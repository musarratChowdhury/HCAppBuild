import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
let GameModule = class GameModule {
};
GameModule = __decorate([
    NgModule({
        declarations: [GameComponent],
        imports: [CommonModule, GameRoutingModule],
    })
], GameModule);
export { GameModule };
//# sourceMappingURL=game.module.js.map