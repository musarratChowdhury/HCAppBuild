import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: 'setup',
                loadChildren: () => import('./setup/setup.module').then((m) => m.SetupModule),
            },
            {
                path: 'game',
                loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
            },
            {
                path: 'result',
                loadChildren: () => import('./result/result.module').then((m) => m.ResultModule),
            },
        ],
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'access-denied', component: AccessDeniedComponent },
    { path: '**', redirectTo: 'game' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map