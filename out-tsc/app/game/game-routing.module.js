import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game.component';
const routes = [
    {
        path: '',
        component: GameComponent,
    },
];
let GameRoutingModule = class GameRoutingModule {
};
GameRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GameRoutingModule);
export { GameRoutingModule };
//# sourceMappingURL=game-routing.module.js.map