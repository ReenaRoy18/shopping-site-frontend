import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:"admin-home",
  templateUrl:"./admin.component.html"  
})
export class AdminComponent {
    constructor(
        private router:Router
    ){
        let admin = localStorage.getItem("admin");
        if(admin){
            this.router.navigate(['admin/dashboard']);
        } else {
            this.router.navigate(['admin/login']);
        }
    }
}