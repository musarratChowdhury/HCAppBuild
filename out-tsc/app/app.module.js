import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Emittery from 'emittery';
import { InjectionToken } from '@angular/core';
// Create a token for the Emittery service
export const EMITTERY_INSTANCE = new InjectionToken('EmitteryInstance');
// Provide the Emittery service using the created token
export const emitteryProvider = {
    provide: EMITTERY_INSTANCE,
    useClass: Emittery,
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, AppRoutingModule],
        providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, emitteryProvider],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map