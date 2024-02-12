import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [DxFormModule, DxChartModule, DxButtonModule],
  templateUrl: './log-in.component.html',
  styleUrl: '../../app.component.scss',
})
export class LogInComponent implements OnInit {
  constructor(private router: Router, private authservice: AuthService) {}
  ngOnInit(): void {}

  /*submitLogin() {
    console.log('I am logged in');
  }*/

  loginCredentials = {
    email: '',
    password: '',
  };
  loginButtonOptions = {
    text: 'Log In',
    useSubmitBehavior: true,
  };

  loginWithEmailAndPassword() {
    //this.authservice.signInwithEmailAndPassword(email, password).then;
  }

  goToSignup() {
    this.router.navigateByUrl('/sign-up');
  }

  logWithGoogle() {
    this.authservice
      .signInWithGoogle()
      .then((response: any) => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch((error: any) => {
        alert(error);
      });
  }
}
