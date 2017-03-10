import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { UUIDService as uuid }  from './app.uuid.service';

@Component({
    selector: 'difference-item-box',
    template: `
        <li>
            {{item.name}}
            <ul>
                <li *ngFor="let subitem of item.columns">
                    {{ subitem.name }} [{{ subitem.type }}]
                </li>
            </ul>
        </li>
    `,
})
export class DifferenceItemBox{
    constructor(
        private itemService: AppService,
        private uuid: uuid
    ){}

    @Input() item: Item;
    @Input() differenceIndex: string;
    @Input() personsListId: string;
    @Input() personEditId: string;
    @Input() getTableStructure: string;
    @Input() compareTableStructure: string;

    editItem(){
    }
    ngOnChanges(changes:any) {
    }

}