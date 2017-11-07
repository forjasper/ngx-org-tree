import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'org-tree-node',
  templateUrl: './org-tree-node.component.html',
  styleUrls: ['./org-tree-node.component.css']
})
export class OrgTreeNodeComponent implements OnInit {
  @Input() nodeData: any;
  @Output() onClickNode: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('node init...');
    console.log(this.nodeData);
  }
  hasChildren() {
    if ( isUndefined(this.nodeData.children) ) {
      console.log('undefined...');
      return false;
    }
    return true;
  }
  // throw delete node
  deleteNode() {
    this.onClickNode.emit(this.nodeData);
  }
  getNode(node) {
    this.onClickNode.emit(node);
  }
}
