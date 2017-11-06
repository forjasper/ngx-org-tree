import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOrgTreeComponent } from './ngx-org-tree.component';
import { OrgTreeNodeComponent } from './org-tree-node/org-tree-node.component';
import { OrgTreeListComponent } from './org-tree-list/org-tree-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxOrgTreeComponent,
    OrgTreeNodeComponent,
    OrgTreeListComponent
  ],
  exports: [
    NgxOrgTreeComponent,
    OrgTreeNodeComponent,
    OrgTreeListComponent]
})
export class NgxOrgTreeModule { }
