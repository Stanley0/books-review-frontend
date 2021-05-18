import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BookAddComponent } from './book-add/book-add.component';
import { AppCommonModule } from '../app-common/app-common.module';




@NgModule({
  declarations: [
    BookAddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppCommonModule
  ]
})
export class AdminModule { }
