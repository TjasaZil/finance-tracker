import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [DxFormModule, DxChartModule, DxButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: '../../app.component.scss'
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private authservice: AuthService) {}
  ngOnInit(): void {}
  registerCredentials = {
    email: '',
    password: '',
  };
  registerButtonOptions = {
    text: 'Sign Up',
    useSubmitBehavior: true,
  };

  registerWithEmailAndPassword() {
    const { email, password } = this.registerCredentials;
    this.authservice
      .registerWithEmailAndPassword({ email, password })
      .then((response: any) => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch((error: any) => {
        alert(error);
      });
  }

  goToLogin() {
    this.router.navigateByUrl('/');
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
