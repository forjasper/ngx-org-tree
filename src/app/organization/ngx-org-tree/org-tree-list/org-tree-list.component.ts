import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'org-tree-list',
  templateUrl: './org-tree-list.component.html',
  styleUrls: ['./org-tree-list.component.css']
})
export class OrgTreeListComponent implements OnInit {
  @Input() listData: any;
  constructor() { }
  ngOnInit() {
    console.log('list init...');
    console.log(this.listData);
  }

}
