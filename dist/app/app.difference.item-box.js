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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var app_item_1 = require("./app.item");
var app_uuid_service_1 = require("./app.uuid.service");
var DifferenceItemBox = (function () {
    function DifferenceItemBox(itemService, uuid) {
        this.itemService = itemService;
        this.uuid = uuid;
    }
    DifferenceItemBox.prototype.editItem = function () {
    };
    DifferenceItemBox.prototype.ngOnChanges = function (changes) {
    };
    return DifferenceItemBox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_item_1.Item)
], DifferenceItemBox.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DifferenceItemBox.prototype, "differenceIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DifferenceItemBox.prototype, "personsListId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DifferenceItemBox.prototype, "personEditId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DifferenceItemBox.prototype, "getTableStructure", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DifferenceItemBox.prototype, "compareTableStructure", void 0);
DifferenceItemBox = __decorate([
    core_1.Component({
        selector: 'difference-item-box',
        template: "\n        <li>\n            {{item.name}}\n            <ul>\n                <li *ngFor=\"let subitem of item.columns\">\n                    {{ subitem.name }} [{{ subitem.type }}]\n                </li>\n            </ul>\n        </li>\n    ",
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        app_uuid_service_1.UUIDService])
], DifferenceItemBox);
exports.DifferenceItemBox = DifferenceItemBox;
//# sourceMappingURL=app.difference.item-box.js.map