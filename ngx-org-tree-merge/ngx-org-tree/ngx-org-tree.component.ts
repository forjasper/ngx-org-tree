import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '@services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { DelModalComponent } from '@components/delete-modal/delete-modal.component';

import { OrganizationService } from '@usermanage/services/organization.service';
import { PersonService } from '@usermanage/services/person.service';
import { Organization } from '@usermanage/models/organization.model';

@Component({
  selector: 'ngx-org-tree',
  templateUrl: './ngx-org-tree.component.html',
  styleUrls: ['./ngx-org-tree.component.css']
})
export class NgxOrgTreeComponent implements OnInit {
  @Output() popPersonList: EventEmitter<any> = new EventEmitter();
  data: any;
  personList: any;
  organizations: Organization = new Organization();
  langKeys = [
    'userManage.organization.updateOrganizationSuccess',
    'userManage.organization.updateOrganizationError',
    'userManage.organization.updateOrganizationRequired',
    'userManage.organization.addOrganizationSuccess',
    'userManage.organization.addOrganizationError',
    'userManage.organization.deleteOrganizationSuccess',
    'userManage.organization.placeholder',
    'userManage.organization.personName',
    'userManage.organization.confirmDelete',
    'userManage.deleteSuccess',
    'userManage.organization.confirmDelete',
    'general.common.noData'
  ];
  langMap: Map<string, string> = new Map<string, string>();

  constructor(private service: OrganizationService, private personService: PersonService, private toast: ToastService,
              private translate: TranslateService, private modal: NgbModal) { }
  ngOnInit() {
    this.show();
    this.load()
  }
  public show() {
    this.service.getOrganizations().subscribe((res) => {
      if(res && res._body) {
        let data = JSON.parse(res._body);
        let organizationList = [];
        organizationList.push(data);
        this.data = organizationList;
      }
    });
  }

  public load() {
    this.translate.get(this.langKeys).subscribe(res => {
      for (let key of this.langKeys) {
        this.langMap.set(key, res[key]);
      }
    });
  }

  // remove click node
  removeNode(node) {
    const activeModal = this.modal.open(DelModalComponent);
    activeModal.componentInstance.content = this.langMap.get('userManage.organization.confirmDelete') + node.name;
    activeModal.result.then((v) => {
      if(v == "ok"){
        this.service.deleteOrganization(node.organizationId).subscribe((data) => {
          if(data && (data._body === '')) {
            this.toast.showToast('success', this.langMap.get('userManage.organization.deleteOrganizationSuccess').replace('{0}', node.name), '');
            this.show()
          }
        })
      }
    })
  }
  // remove click node
  editNode(node) {
    this.service.editOrganization(node).subscribe((data) => {
      if(data && data._body) {
        this.toast.showToast('success', this.langMap.get('userManage.organization.updateOrganizationSuccess').replace('{0}', node.name), '');
        this.show()
      }
    }, (error) => {
      this.toast.showToast('error', this.langMap.get('userManage.organization.updateOrganizationError').replace('{0}', node.name), '');
    })
  }
  // remove click node
  addNOde(node) {
    let organization : Organization = new Organization();
    organization.levelOfPath = node.parentNode.levelOfPath + '.' + node.parentNode.parentId;
    organization.parentId = node.parentNode.organizationId;
    organization.name = node.nodeName;
    organization.caption = '';
    organization.description = '';
    organization.children = [];
    this.service.addOrganization(organization).subscribe((data) => {
      if(data && data._body) {
        this.toast.showToast('success',this.langMap.get('userManage.organization.addOrganizationSuccess').replace('{0}', node.nodeName), '');
        this.show()
      }
    })
  }

  nodeClick(node) {
    this.resetStyle(this.data, node);
    this.service.getOrganizationPerson(node.organizationId).subscribe((data) => {
      if(data && data._body) {
        this.personList = JSON.parse(data._body);
        this.personList.organizationName = node.name;
        this.personList.organizationId = node.organizationId;
        this.popPersonList.emit(this.personList);
      }
    })
  }

  resetStyle(data, node) {
    for (const i in data) {
      if (data[i].organizationId === node.organizationId) {
        data[i].selected = node.selected;
        this.resetStyle(data[i].children, node);
      } else {
        data[i].selected = false;
        this.resetStyle(data[i].children, node);
      }
    }
  }
}
