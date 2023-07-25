import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:"admin-dashboard",
  templateUrl:"./dashboard.component.html",
  styles:[
    ":host{ display:block; height:100vh}"
  ]
})
export class DashboardComponent {
    constructor(
        private router:Router
    ){
        
    }
}