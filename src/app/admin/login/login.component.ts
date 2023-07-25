import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'shopping-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService
  ){
    this.loginForm = this.fb.group({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  submit(){
    console.log(this.loginForm.value);
    let params  = this.loginForm.value;
    this.adminService.login(params).subscribe((response:any)=>{
      if(response.ok){
        console.log("Admin Login Successful");
        
      }
    })
  }
}
