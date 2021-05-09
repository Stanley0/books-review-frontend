import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule

  ]
})
export class AuthenticationModule { }
