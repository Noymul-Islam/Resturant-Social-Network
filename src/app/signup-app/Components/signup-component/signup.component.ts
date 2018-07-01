import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  person : any = {};
  constructor(){
  
  }
  onSubmit()
  {
    console.log(this.person);
    
  }
  
  
}
