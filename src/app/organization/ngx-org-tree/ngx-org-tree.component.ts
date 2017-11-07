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
            {'id': '2-3', name: '软件三部'}]},
          {id: '4', name: '销售部'},
          {id: '5', name: '财务部'},
          {id: '6', name: '研发部'}]}
    ];
    console.log(data);
    this.data = data;
  }
  // get click node
  onClickNode(node) {
    console.log('root component...');
    console.log(node);
    this.removeNodeById(this.data, node.id);
  }
  removeNodeById(data, nodeId) {
    return;
  }
  searchNodeById() {
    return;
  }
}
