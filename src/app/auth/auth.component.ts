import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoginMode = true;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log("form invalid");
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
    this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData)
        }, error => {
        console.log(error)
        }
      );
    }
    form.reset()
  }

}
