import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'org-tree-node',
  templateUrl: './org-tree-node.component.html',
  styleUrls: ['./org-tree-node.component.css']
})
export class OrgTreeNodeComponent implements OnInit {
  nodeAddName: string;
  nodeEditName: string;
  showChildren: boolean;
  dbClickTime: any;
  nodeSelected: boolean;
  @Input() nodeData: any;
  @Output() _nodeClick: EventEmitter<any> = new EventEmitter();
  @Output() _removeNode: EventEmitter<any> = new EventEmitter();
  @Output() _editNode: EventEmitter<any> = new EventEmitter();
  @Output() _addNode: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.showChildren = true;
    this.nodeSelected = false;
    // console.log('node init...');
    console.log(this.nodeData);
  }
  hasChildren() {
    if ( isUndefined(this.nodeData.children) ) {
      // console.log('undefined...');
      return false;
    }
    return true;
  }
  // click delete btn
  deleteNode(event) {
    event.stopPropagation();
    // console.log('click remove btn...');
    this._removeNode.emit(this.nodeData);
  }
  // click edit btn
  editNode(event) {
    event.stopPropagation();
    this._editNode.emit(this.nodeData);
    // console.log('click edit btn...');
    // this._editNode.emit(this.nodeData);
  }
  // click addNode btn
  addNode(event) {
    event.stopPropagation();
    this._addNode.emit(this.nodeData);
    // console.log('click add btn...');
    // this._addNode.emit(this.nodeData);
  }
  // pop current node data
  popDeleteNode(node) {
    // console.log('pop del node...');
    this._removeNode.emit(node);
  }
  // pop current node data
  popEditNode(node) {
    // console.log('pop edit node...');
    this._editNode.emit(node);
  }
  // pop current node data
  popAddNode(node) {
    // console.log('pop add node...');
    this._addNode.emit(node);
  }
  popNodeClick(node) {
    this._nodeClick.emit(node);
  }
  nodeDoubleClick() {
    clearTimeout(this.dbClickTime);
    if (this.showChildren === true) {
      this.showChildren = false;
    }else {
      this.showChildren = true;
    }
  }
  nodeClick() {
    clearTimeout(this.dbClickTime);
    // this.nodeSelected = !this.nodeSelected;
    this.nodeData.selected = !this.nodeData.selected;
    const that = this;
    this.dbClickTime = setTimeout(function(){
      that._nodeClick.emit(that.nodeData);

    }, 400);
  }
}
