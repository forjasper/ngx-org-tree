import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxOrgTreeModule} from './organization/ngx-org-tree/ngx-org-tree.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxOrgTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
