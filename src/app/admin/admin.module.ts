import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './services/admin.service';
import { AdminComponent } from './admin.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule

  ],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
