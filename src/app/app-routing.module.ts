import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/views/login/login.component';
import { RegisterComponent } from './authentication/views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: "books",
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: "admin",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
