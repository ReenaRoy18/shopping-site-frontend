import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
