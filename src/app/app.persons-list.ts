import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { ItemBox } from './app.item-box';
import { UUIDService as uuid }  from './app.uuid.service';
@Component({
    selector: 'persons-list',
    template: `
        <ul>
            <item-box [personsListId]="personsListId" [personEditId]="personEditId" [getTableStructure]="getTableStructure" *ngFor="let item of items" [item]="item"></item-box>
        </ul>
  `,
})
export class AppPersonsList implements OnInit, OnChanges{
    items: Item[];
    @Input() personsListId: string;
    @Input() personEditId: string;
    @Input() getTableStructure: string;

    constructor(
        private itemService: AppService,
        private uuid: uuid
    ){}

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
        //AppEmitterService.get(this.personEditId).subscribe((item:Item) => {console.log(item);});
    }

    ngOnChanges(changes:any) {
    }
}
