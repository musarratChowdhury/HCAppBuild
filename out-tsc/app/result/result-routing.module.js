import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';
const routes = [
    {
        path: '',
        component: ResultComponent,
    },
];
let ResultRoutingModule = class ResultRoutingModule {
};
ResultRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ResultRoutingModule);
export { ResultRoutingModule };
//# sourceMappingURL=result-routing.module.js.map