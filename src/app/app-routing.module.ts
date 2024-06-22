import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/ts/user-list.component';
import { UserFormComponent } from './components/ts/user-form.component';
import { DepartmentListComponent } from './components/ts/department-list.component';
import { DepartmentFormComponent } from './components/ts/department-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/new', component: DepartmentFormComponent },
  { path: 'departments/edit/:id', component: DepartmentFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
