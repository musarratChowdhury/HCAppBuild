import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LocalStorageServiceService = class LocalStorageServiceService {
    constructor() { }
    loadData(datakey) {
        if (localStorage.getItem(datakey)) {
            return JSON.parse(localStorage.getItem(datakey));
        }
        else {
            return null;
        }
    }
    setData(dataKey, data) {
        localStorage.setItem(dataKey, JSON.stringify(data));
    }
    deleteData(dataKey) {
        localStorage.removeItem(dataKey);
    }
};
LocalStorageServiceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LocalStorageServiceService);
export { LocalStorageServiceService };
//# sourceMappingURL=local-storage-service.service.js.map