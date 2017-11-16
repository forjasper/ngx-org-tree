import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOrgTreeComponent } from './ngx-org-tree.component';

describe('NgxOrgTreeComponent', () => {
  let component: NgxOrgTreeComponent;
  let fixture: ComponentFixture<NgxOrgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOrgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOrgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
