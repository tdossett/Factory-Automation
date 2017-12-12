"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var OeeService = (function () {
    function OeeService(_http) {
        this._http = _http;
        this._oeeUrl = 'http://localhost/OEEWebAPI/api/v1/OEE';
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'x-id');
    }
    OeeService.prototype.getOees = function () {
        return this._http.get(this._oeeUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OeeService.prototype.getOee = function (id) {
        return this.getOees()
            .map(function (oees) { return oees.find(function (x) { return x.oeeId === id; }); });
    };
    OeeService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return OeeService;
}());
OeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OeeService);
exports.OeeService = OeeService;
//# sourceMappingURL=oee.service.js.map