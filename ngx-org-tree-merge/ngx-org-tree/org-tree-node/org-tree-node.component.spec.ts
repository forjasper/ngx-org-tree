import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTreeNodeComponent } from './org-tree-node.component';

describe('OrgTreeNodeComponent', () => {
  let component: OrgTreeNodeComponent;
  let fixture: ComponentFixture<OrgTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
