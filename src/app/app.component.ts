import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { AppPersonsList } from './app.persons-list';

@Component({
  selector: 'my-app',
  templateUrl: './dist/app/app.component.html'
})
export class AppComponent implements OnInit, OnChanges{
  name = 'Angular';
  private personsListId = 'PERSONS_LIST';
  private personEditId = 'PERSON_EDIT';
  private getTableStructure = 'TABLE_STRUCTURE';
  private compareTableStructure = 'COMPARE_TABLE_STRUCTURE';
  constructor(
      private itemService: AppService
  ){}

  loadTableStructure() {
    AppEmitterService.get(this.getTableStructure).emit({});
  }

  loadTableCompare(){
    AppEmitterService.get(this.compareTableStructure).emit({});
  }

  ngOnInit(){

  }

  ngOnChanges(changes:any) {

  }
}
