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
var router_1 = require("@angular/router");
var oee_filter_pipe_1 = require("./oee-filter.pipe");
//import { StarComponent } from '../shared/star.component';
var oee_service_1 = require("./oee.service");
var OeeListComponent = (function () {
    function OeeListComponent(router, _oeeService) {
        this.router = router;
        this._oeeService = _oeeService;
        this.pageTitle = 'Oee List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    }
    OeeListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    OeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._oeeService.getOees()
            .subscribe(function (oees) { return _this.oees = oees; }, function (error) { return _this.errorMessage = error; });
    };
    return OeeListComponent;
}());
OeeListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/oee/oee-list.component.html',
        styleUrls: ['app/oee/oee-list.component.css'],
        pipes: [oee_filter_pipe_1.OeeFilterPipe],
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        oee_service_1.OeeService])
], OeeListComponent);
exports.OeeListComponent = OeeListComponent;
//# sourceMappingURL=oee-list.component.js.map