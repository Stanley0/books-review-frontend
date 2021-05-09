import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRouteGuard } from './route-guards/main-route.guard';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [MainRouteGuard],
    children: [
      {
        path: "",
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: "authentication",
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
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
