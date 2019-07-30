import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

// user imports

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { MatTabsModule } from '@angular/material';
//import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    UserModule,
    //SharedModule,
    
    TodoModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
