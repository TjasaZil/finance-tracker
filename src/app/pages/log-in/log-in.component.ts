import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [DxFormModule, DxChartModule, DxButtonModule],
  templateUrl: './log-in.component.html',
  styleUrl: '../../app.component.scss',
})
export class LogInComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  submitLogin() {
    console.log('I am logged in');
  }

  loginCredentials = {
    mail: '',
    password: '',
  };
  loginButtonOptions = {
    text: 'Log In',
    useSubmitBehavior: true,
  };

  loginWithEmailAndPassword() {}

  goToSignup() {
    this.router.navigateByUrl('/sign-up');
  }
  logWithGoogle() {}
}
