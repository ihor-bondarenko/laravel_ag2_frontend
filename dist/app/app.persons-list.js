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
var app_emitter_service_1 = require("./app.emitter.service");
var app_uuid_service_1 = require("./app.uuid.service");
var _ = require("lodash");
var app_service_socketio_1 = require("./app.service.socketio");
var app_state_service_1 = require("./app.state.service");
var AppPersonsList = (function () {
    function AppPersonsList(itemService, uuid, appStateService) {
        this.itemService = itemService;
        this.uuid = uuid;
        this.appStateService = appStateService;
    }
    AppPersonsList.prototype.checkStates = function () {
        console.log(this.appStateService);
    };
    AppPersonsList.prototype.compareTables = function () {
        var _this = this;
        this.itemService.compareTables().subscribe(function (comments) {
            if (_.isObject(comments) && _.has(comments, 'structure')) {
                _this.compareItems = comments.structure;
            }
            if (_.isObject(comments) && _.has(comments, 'difference')) {
                _this.differenceItems = comments.difference;
            }
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    AppPersonsList.prototype.loadList = function () {
        this.SocketService.getTableStructure();
        /*this.itemService.getList().subscribe(
            comments => {
                    this.items = comments;
            },
            err => {
                console.log(err);
            }
        )*/
    };
    AppPersonsList.prototype.newTableStructure = function (items) {
        this.items = items;
    };
    AppPersonsList.prototype.addNewItem = function () {
        var uuid = this.uuid.uuid();
        var item = new app_item_1.Item(uuid, 'Ihor' + uuid, '');
        this.items.push(new app_item_1.Item(uuid, 'Ihor' + uuid, ''));
        console.log('-- added --');
        app_emitter_service_1.AppEmitterService.get(this.personsListId).emit(item);
    };
    AppPersonsList.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadList();
        app_emitter_service_1.AppEmitterService.get(this.getTableStructure).subscribe(function (item) { _this.loadList(); });
        app_emitter_service_1.AppEmitterService.get(this.compareTableStructure).subscribe(function (item) { _this.compareTables(); });
        app_emitter_service_1.AppEmitterService.get('new-table-structure').subscribe(function (items) { _this.newTableStructure(items); });
        //AppEmitterService.get(this.personEditId).subscribe((item:Item) => {console.log(item);});
    };
    AppPersonsList.prototype.ngOnChanges = function (changes) {
    };
    return AppPersonsList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppPersonsList.prototype, "personsListId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppPersonsList.prototype, "personEditId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppPersonsList.prototype, "getTableStructure", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppPersonsList.prototype, "compareTableStructure", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", app_service_socketio_1.SocketService)
], AppPersonsList.prototype, "SocketService", void 0);
AppPersonsList = __decorate([
    core_1.Component({
        selector: 'db-structure-list',
        template: "\n        <ul>\n            <item-box [personsListId]=\"personsListId\" [personEditId]=\"personEditId\" [getTableStructure]=\"getTableStructure\" [compareTableStructure]=\"compareTableStructure\" *ngFor=\"let item of items\" [item]=\"item\"></item-box>\n        </ul>\n        <ul>\n            <item-box [personsListId]=\"personsListId\" [personEditId]=\"personEditId\" [getTableStructure]=\"getTableStructure\" [compareTableStructure]=\"compareTableStructure\" *ngFor=\"let compareItem of compareItems\" [item]=\"compareItem\"></item-box>\n        </ul>\n        <ul>\n            <difference-item-box [personsListId]=\"personsListId\" [personEditId]=\"personEditId\" [getTableStructure]=\"getTableStructure\" [compareTableStructure]=\"compareTableStructure\" *ngFor=\"let differenceItem of differenceItems; let differenceIndex = index\" [differenceIndex]=\"differenceIndex\" [item]=\"differenceItem\"></difference-item-box>\n        </ul>\n  ",
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        app_uuid_service_1.UUIDService,
        app_state_service_1.AppStateService])
], AppPersonsList);
exports.AppPersonsList = AppPersonsList;
//# sourceMappingURL=app.persons-list.js.map