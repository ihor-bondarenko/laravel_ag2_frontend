import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { ItemBox } from './app.item-box';
import { UUIDService as uuid }  from './app.uuid.service';
import * as _ from "lodash";
@Component({
    selector: 'persons-list',
    template: `
        <ul style="float: left;">
            <item-box [personsListId]="personsListId" [personEditId]="personEditId" [getTableStructure]="getTableStructure" [compareTableStructure]="compareTableStructure" *ngFor="let item of items" [item]="item"></item-box>
        </ul>
        <ul style="float: left;">
            <item-box [personsListId]="personsListId" [personEditId]="personEditId" [getTableStructure]="getTableStructure" [compareTableStructure]="compareTableStructure" *ngFor="let compareItem of compareItems" [item]="compareItem"></item-box>
        </ul>
        <ul>
            <difference-item-box [personsListId]="personsListId" [personEditId]="personEditId" [getTableStructure]="getTableStructure" [compareTableStructure]="compareTableStructure" *ngFor="let differenceItem of differenceItems; let differenceIndex = index" [differenceIndex]="differenceIndex" [item]="differenceItem"></difference-item-box>
        </ul>
  `,
})
export class AppPersonsList implements OnInit, OnChanges{
    items: Item[];
    compareItems: any[];
    differenceItems: any[];

    @Input() personsListId: string;
    @Input() personEditId: string;
    @Input() getTableStructure: string;
    @Input() compareTableStructure: string;

    constructor(
        private itemService: AppService,
        private uuid: uuid
    ){}

    compareTables() {
        this.itemService.compareTables().subscribe(
            comments => {
                if(_.isObject(comments) && _.has(comments,'structure')){
                    this.compareItems = comments.structure;
                }
                if(_.isObject(comments) && _.has(comments,'difference')){
                    this.differenceItems = comments.difference;
                }
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            }
        )
    }

    loadList(){
        this.itemService.getList().subscribe(
            comments => {
                    this.items = comments;
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            }
        )
    }

    addNewItem():void {
        let uuid = this.uuid.uuid();
        let item = new Item(uuid,'Ihor'+uuid,'');
        this.items.push(new Item(uuid,'Ihor'+uuid,''));
        console.log('-- added --');
        AppEmitterService.get(this.personsListId).emit(item);
    }

    ngOnInit(){
        //this.loadList();
        AppEmitterService.get(this.getTableStructure).subscribe((item:Item) => {this.loadList()});
        AppEmitterService.get(this.compareTableStructure).subscribe((item:Item) => {this.compareTables()});
        //AppEmitterService.get(this.personEditId).subscribe((item:Item) => {console.log(item);});
    }

    ngOnChanges(changes:any) {
    }
}
