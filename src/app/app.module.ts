import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {BackModule } from './back/back.module';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { ComponentsModule } from './back/components/components.module';
import {ROUTING} from './app.routing';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';


@NgModule({
  imports: [
    CommonModule,
    ROUTING ,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    NgbModule,
    BackModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FrontComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
