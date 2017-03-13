"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var app_persons_list_1 = require("./app.persons-list");
var app_item_box_1 = require("./app.item-box");
var app_difference_item_box_1 = require("./app.difference.item-box");
var app_service_1 = require("./app.service");
var app_service_socketio_1 = require("./app.service.socketio");
var app_uuid_service_1 = require("./app.uuid.service");
var app_state_service_1 = require("./app.state.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            material_1.MaterialModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_persons_list_1.AppPersonsList,
            app_item_box_1.ItemBox,
            app_difference_item_box_1.DifferenceItemBox
        ],
        providers: [
            app_service_1.AppService,
            app_uuid_service_1.UUIDService,
            app_service_socketio_1.SocketService,
            app_state_service_1.AppStateService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map