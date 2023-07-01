import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
const routes = [{ path: '', component: SetupComponent }];
let SetupRoutingModule = class SetupRoutingModule {
};
SetupRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SetupRoutingModule);
export { SetupRoutingModule };
//# sourceMappingURL=setup-routing.module.js.map