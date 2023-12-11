import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  users = [
    { username: 'shree', password: '12345' },
    { username: 'Surya', password: '13456' },
    { username: 'rohit', password: '23456' },
    { username: 'virat', password: '67890' },
    { username: 'dhoni', password: '98765' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // get userValidator() {
  //   return this.loginForm.get('UserName');
  // }
 
  // get passwordValidator() {
  //   return this.loginForm.get('Password');
  // }
  login(){
    
    if(this.loginForm.valid){
      const username=this.loginForm.value.username;
      const password=this.loginForm.value.password;

      const originalUser=this.users.find(user=>user.username === username&& user.password=== password);

      if(originalUser){
        alert("Login successful");
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Invalid username or password");
      }
    }
  }
}

