import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {environment} from '../environments/environment';

export function kcInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init(environment.keycloakOptions);
        console.log('Keycloak is initialized');
        resolve();
      } catch (error) {
        console.log('Error thrown in init ' + error);
        reject(error);
      }
    });
  };
}

@NgModule({
  imports: [
    KeycloakAngularModule ,
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
  providers: [
    { provide: APP_INITIALIZER, useFactory: kcInitializer, multi: true, deps: [KeycloakService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
