import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {AppService} from './app.service';
import { Item } from './app.item';
import { AppEmitterService } from './app.emitter.service';
import { AppPersonsList } from './app.persons-list';
import { SocketService } from './app.service.socketio';
import { AppStateService } from "./app.state.service";

@Component({
  selector: 'my-app',
  templateUrl: './dist/app/app.component.html'
})
export class AppComponent implements OnInit, OnChanges{
  public Title = 'Database Manager';
  private personsListId = 'PERSONS_LIST';
  private personEditId = 'PERSON_EDIT';
  private getTableStructure = 'TABLE_STRUCTURE';
  private compareTableStructure = 'COMPARE_TABLE_STRUCTURE';
  //private SocketService: SocketService;
  private lastStructureUpdate: string;
  private lastCompareUpdate: string;
  private subscription: Subscription;
  private appStates: { [ID: string]: any };

  constructor(
      private itemService: AppService,
      private appStateService: AppStateService,
      private SocketService: SocketService
  ){
    //this.SocketService = new SocketService();
    this.subscription = this.appStateService.getStates().subscribe(states => { this.appStates = states });
    this.appStates = {};
  }

  loadTableStructure() {
    AppEmitterService.get(this.getTableStructure).emit({});
  }

  loadTableCompare(){
    AppEmitterService.get(this.compareTableStructure).emit({});
  }

  ngOnInit(){
    AppEmitterService.get('last-structure-update').subscribe((date: string) => {
      this.lastStructureUpdate = date;
    });
    AppEmitterService.get('last-compare-update').subscribe((date: string) => {
      this.lastCompareUpdate = date;
    });
  }

  ngOnChanges(changes:any) {

  }
}
