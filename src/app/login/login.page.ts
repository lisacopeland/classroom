import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });

  }

  onLoginWithGoogle() {
  }

  onLogin() {
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
