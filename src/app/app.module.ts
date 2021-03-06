import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AttestationService } from './services/attestation';
import { Base64 } from './services/base64';
import { AlertService } from './services/alert.service';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './services/alert.component';
import { routing } from './app.routing';
import { WindowRef } from './services/window';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AssertionService } from './services/assertion';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    HomeComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AttestationService,
    AssertionService,
    Base64,
    AlertService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
