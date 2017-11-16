import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'org-tree-node',
  templateUrl: './org-tree-node.component.html',
  styleUrls: ['./org-tree-node.component.css']
})
export class OrgTreeNodeComponent implements OnInit {
  editView: boolean;
  addView: boolean;
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
    this.editView = false;
    this.addView = false;
    this.showChildren = true;
    this.nodeSelected = false;
  }
  hasChildren() {
    if ( isUndefined(this.nodeData.children) || this.nodeData.children.length <= 0 ) {
      return false;
    }
    return true;
  }
  // click delete btn
  deleteNode(event) {
    event.stopPropagation();
    this._removeNode.emit(this.nodeData);
  }
  // click edit btn
  editNode(event) {
    event.stopPropagation();
    this.addView = false;
    this.nodeEditName = this.nodeData.name;
    if ( this.editView === false) {
      this.editView = true;
    }else {
      this.editView = false;
    }
  }
  // click addNode btn
  addNode(event) {
    event.stopPropagation();
    this.editView = false;
    if ( this.addView === false) {
      this.addView = true;
    }else {
      this.addView = false;
    }
  }
  // pop current node data
  popDeleteNode(node) {
    this._removeNode.emit(node);
  }
  // pop current node data
  popEditNode(node) {
    this._editNode.emit(node);
  }
  // pop current node data
  popAddNode(node) {
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
  editCancel() {
    this.editView = false;
  }
  editSave() {
    this.editView = false;
    this.nodeData.name = this.nodeEditName;
    this.nodeEditName = '';
    this._editNode.emit(this.nodeData);
  }
  editEnter(event) {
    let e = event || window.event;
    if(e.keyCode === 13) {
      this.editSave()
    }
  }
  addEnter(event) {
    let e = event || window.event;
    if(e.keyCode === 13) {
      this.addSave()
    }
  }
  addCancel() {
    this.addView = false;
  }
  addSave() {
    this.addView = false;
    let node: any;
    node = {parentNode: null, nodeName: null};
    node.parentNode = this.nodeData;
    node.nodeName = this.nodeAddName;
    this._addNode.emit(node);
  }
  stopInnerClick(event){
    event.stopPropagation();
  }
}
