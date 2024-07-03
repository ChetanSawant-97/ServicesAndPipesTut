import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    CapitalizePipe,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    UserDetailsComponent
  ]
})

export class UserDetailsModule { }
