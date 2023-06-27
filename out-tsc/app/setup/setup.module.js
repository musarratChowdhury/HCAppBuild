import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
let SetupModule = class SetupModule {
};
SetupModule = __decorate([
    NgModule({
        declarations: [SetupComponent],
        imports: [CommonModule, SetupRoutingModule, ReactiveFormsModule],
    })
], SetupModule);
export { SetupModule };
//# sourceMappingURL=setup.module.js.map