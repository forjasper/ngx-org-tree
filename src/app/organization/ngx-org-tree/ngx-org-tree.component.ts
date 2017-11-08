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
      {id: '1', name: '总公司',
        children: [
          {id: '2', name: '软件部门', children: [
            {'id': '2-1', name: '软件一部'},
            {'id': '2-2', name: '软件二部'},
            {'id': '2-2', name: '软件二部'},
            {'id': '2-2', name: '软件二部'},
            {'id': '2-3', name: '软件三部'}]},
          {id: '4', name: '销售部1'},
          {id: '5', name: '财务部2'},
          {id: '6', name: '研发部3'},
          {id: '7', name: '销售部4'},
          {id: '8', name: '研发部5'},
          {id: '9', name: '研发部10'}]}
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
}
