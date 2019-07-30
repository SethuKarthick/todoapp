import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnNavbarComponent } from './own-navbar/own-navbar.component';

//user imports 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
//import {  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { ModalModule } from 'ngb-modal';

import {MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,  
  MatListModule,
  MatDialogModule,
} from '@angular/material';
import { ListContainerComponent } from './list-container/list-container.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FirstCharComponent } from './first-char/first-char.component';


@NgModule({
  declarations: [OwnNavbarComponent, ListContainerComponent, DialogBoxComponent, FriendsListComponent, FirstCharComponent ],
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
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,

    ModalModule,
    //NgbModalModule,
    
    ReactiveFormsModule,
    RouterModule,


    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ], 
  exports: [
    FirstCharComponent,
    DialogBoxComponent,
    ListContainerComponent,
    OwnNavbarComponent,
    FriendsListComponent,
    CommonModule,
    FormsModule,
    
  ],
})
export class SharedModule { }
