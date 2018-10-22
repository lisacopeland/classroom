import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
    path: 'home',
      loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
      loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'class-detail/:id',
      loadChildren: './class-detail/class-detail.module#ClassDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'students', loadChildren: './students/students.module#StudentsPageModule' },
  { path: 'student-detail/:id', loadChildren: './student-detail/student-detail.module#StudentDetailPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
