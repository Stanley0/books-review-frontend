import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BookAddComponent } from './book-add/book-add.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BookAddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppCommonModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
