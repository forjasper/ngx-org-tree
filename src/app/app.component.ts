import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxOrgTreeComponent } from './organization/ngx-org-tree/ngx-org-tree.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  data: any;
  ngOnInit() {
    this.getData();
  }
  getData() {
    const data = [
      {id: '1', name: '总公司1',
        children: [
          {id: '2', name: '软件2', selected: false, children: [
            {'id': '3', name: '软件asdfasfadfadasfdsf3', selected: false},
            {'id': '4', name: '软件fdsfdsaf4', selected: false},
            {'id': '5', name: '软件5', selected: false},
            {'id': '6', name: '软件safadf6', selected: false},
            {'id': '7', name: '软件7', selected: false}]},
          {id: '8', name: '销售8', selected: false},
          {id: '9', name: '财务9', selected: false},
          {id: '10', name: '研发safdsafa10', selected: false},
          {id: '11', name: '销售11', selected: false, children: [
            {'id': '12', name: '软件12', selected: false},
            {'id': '13', name: '软件13', selected: false},
            {'id': '14', name: '软件afasfda14', selected: false}]},
          {id: '15', name: '研发afaafsdfa15', selected: false},
          {id: '16', name: '研发afasdfasdfa16', selected: false},
          {id: '17', name: '销售17', selected: false, children: [
            {'id': '18', name: '软件afafadfadsaf18', selected: false},
            {'id': '19', name: '软件19', selected: false}]},
          {id: '20', name: '研发20', selected: false},
          {id: '21', name: '研发21', selected: false}]}
    ];
    this.data = data;
  }
}
