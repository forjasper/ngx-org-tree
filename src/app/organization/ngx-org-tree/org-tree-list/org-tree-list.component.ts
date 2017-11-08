import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'org-tree-list',
  templateUrl: './org-tree-list.component.html',
  styleUrls: ['./org-tree-list.component.css']
})
export class OrgTreeListComponent implements OnInit {
  @Input() listData: any;
  @Output() _removeNode: EventEmitter<any> = new EventEmitter();
  @Output() _editNode: EventEmitter<any> = new EventEmitter();
  @Output() _addNode: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    // console.log('list init...');
    console.log(this.listData);
  }

  removeNode(node) {
    this._removeNode.emit(node);
    // console.log('pop node...');
    console.log(node);
    // console.log('-----pop node END-----');
  }
  addNode(node) {
    this._addNode.emit(node);
  }
  editNode(node) {
    this._editNode.emit(node);
  }
}
