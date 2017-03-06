import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { UUIDService as uuid }  from './app.uuid.service';

@Component({
    selector: 'item-box',
    template: `
        <li>{{item.id}} - {{item.name}} <button (click)="editItem()">Edit</button></li>
    `,
})
export class ItemBox{
    constructor(
        private itemService: AppService,
        private uuid: uuid
    ){}

    @Input() item: Item;
    @Input() personsListId: string;
    @Input() personEditId: string;

    editItem(){
        this.item.name = this.uuid.uuid();
        console.log('-- edited --');
        AppEmitterService.get(this.personEditId).emit(this.item);
    }
    ngOnChanges(changes:any) {
    }

}