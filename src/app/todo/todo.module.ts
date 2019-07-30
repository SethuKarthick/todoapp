import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import { MultiUserComponent } from './multi-user/multi-user.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';

import { SharedModule } from '../shared/shared.module'


//user imports 
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
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
  MatTabsModule
} from '@angular/material';

const routes : Routes= [
  {path :'single-user',component:SingleUserComponent},
  {path :'multi-user',component:MultiUserComponent},
  {path :'manage-friends',component:ManageFriendsComponent},

];

@NgModule({
  declarations: [SingleUserComponent, MultiUserComponent, ManageFriendsComponent],
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
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SharedModule

  ],
  exports: [
    RouterModule
  ]
})
export class TodoModule { }
