import { Component, OnInit, Input, } from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'org-tree-node',
  templateUrl: './org-tree-node.component.html',
  styleUrls: ['./org-tree-node.component.css']
})
export class OrgTreeNodeComponent implements OnInit {
  @Input() nodeData: any;
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
}
