import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-org-tree',
  templateUrl: './ngx-org-tree.component.html',
  styleUrls: ['./ngx-org-tree.component.css']
})
export class NgxOrgTreeComponent implements OnInit {
  data: any;
  constructor() { }
  ngOnInit() {
    this.show();
  }
  public show() {
    const data = [
      {id: '1', name: '总公司1',
        children: [
          {id: '2', name: '软件2', selected: false, children: [
            {'id': '3', name: '软件3', selected: false},
            {'id': '4', name: '软件4', selected: false},
            {'id': '5', name: '软件5', selected: false},
            {'id': '6', name: '软件6', selected: false},
            {'id': '7', name: '软件7', selected: false}]},
          {id: '8', name: '销售8', selected: false},
          {id: '9', name: '财务9', selected: false},
          {id: '10', name: '研发10', selected: false},
          {id: '11', name: '销售11', selected: false, children: [
            {'id': '12', name: '软件12', selected: false},
            {'id': '13', name: '软件13', selected: false},
            {'id': '14', name: '软件14', selected: false}]},
          {id: '15', name: '研发15', selected: false},
          {id: '16', name: '研发16', selected: false},
          {id: '17', name: '销售17', selected: false, children: [
            {'id': '18', name: '软件18', selected: false},
            {'id': '19', name: '软件19', selected: false}]},
          {id: '20', name: '研发20', selected: false},
          {id: '21', name: '研发21', selected: false}]}
    ];
    console.log(data);
    this.data = data;
  }
  // remove click node
  removeNode(node) {
    console.log('删除了id为' + node.id + '的节点');
    console.log(node);
  }
  // remove click node
  editNode(node) {
    console.log('修改了id为' + node.id + '的节点');
    console.log(node);
  }
  // remove click node
  addNOde(node) {
    console.log('新增了一个节点');
    console.log(node);
  }
  nodeClick(node) {
    // 调整未选中节点的样式
    this.resetStyle(this.data, node.id);
    console.log('选择了节点');
    console.log(node);
  }
  resetStyle(data, nodeId) {
  for (const i in data) {
    if (data[i].id === nodeId) {
      console.log(data[i].id);
      data[i].selected = true;
      this.resetStyle(data[i].children, nodeId);
    } else {
      data[i].selected = false;
      console.log(data[i].selected);
      this.resetStyle(data[i].children, nodeId);
    }
  }}
}
