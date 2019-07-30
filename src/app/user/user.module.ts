import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

// user imports 

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* modules from Materialize */

import {MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule,MatRadioModule,MatButtonModule,MatCheckboxModule,MatTooltipModule  } from '@angular/material';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';

const routes : Routes=[
  {path :'login',component:LoginComponent},
  {path :'signup',component:SignupComponent},
  {path :'forgot-password',component: ForgotPasswordComponent},
  {path :'verify-email/userId',component:VerifyEmailComponent},
  {path :'reset-password/:validationToken', component:ResetPasswordComponent},
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPasswordComponent, ForgotPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
