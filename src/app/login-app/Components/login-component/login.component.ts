import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){
    console.log("LogIN Component");
  }
  title = 'app';
  loginBackgroundimage="url(assets/login_background.jpeg)"
  
}
