import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'org-tree-list',
  templateUrl: './org-tree-list.component.html',
  styleUrls: ['./org-tree-list.component.css']
})
export class OrgTreeListComponent implements OnInit {
  @Input() listData: any;
  @Output() onClickDetailNode: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    console.log('list init...');
    console.log(this.listData);
  }

  popClickNode(node) {
    this.onClickDetailNode.emit(node);
    console.log('pop node...');
    console.log(node);
    console.log('-----pop node END-----');
  }
}
