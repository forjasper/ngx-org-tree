import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTreeListComponent } from './org-tree-list.component';

describe('OrgTreeListComponent', () => {
  let component: OrgTreeListComponent;
  let fixture: ComponentFixture<OrgTreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgTreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
