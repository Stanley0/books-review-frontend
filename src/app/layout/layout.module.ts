import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    NavigationHeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
