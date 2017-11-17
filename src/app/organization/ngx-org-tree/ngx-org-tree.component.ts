import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-org-tree',
  templateUrl: './ngx-org-tree.component.html',
  styleUrls: ['./ngx-org-tree.component.css']
})
export class NgxOrgTreeComponent implements OnInit {
  @Input() nodeData: any;
  @Output() nodeClick: EventEmitter<any> = new EventEmitter();
  @Output() removeNode: EventEmitter<any> = new EventEmitter();
  @Output() editNode: EventEmitter<any> = new EventEmitter();
  @Output() addNode: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  // remove click node
  removeNodePop(node) {
    this.removeNode.emit(node);
  }
  // remove click node
  editNodePop(node) {
    this.editNode.emit(node);
  }
  // remove click node
  addNodePop(node) {
    this.addNode.emit(node);
  }
  nodeClickPop(node) {
    // 调整未选中节点的样式
    this.resetStyle(this.nodeData, node);
    this.nodeClick.emit(node);
  }
  resetStyle(data, node) {
  for (const i in data) {
    if (data[i].id === node.id) {
      data[i].selected = node.selected;
      this.resetStyle(data[i].children, node);
    } else {
      data[i].selected = false;
      this.resetStyle(data[i].children, node);
    }
  }}
}
