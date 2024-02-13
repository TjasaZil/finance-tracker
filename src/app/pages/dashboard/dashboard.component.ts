import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DxButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: '../../app.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private afAuth:AngularFireAuth) {}
  ngOnInit(): void {}
  goToLogin() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']); // Redirect to login or home page
    }).catch(error => {
      // Handle any errors here
      console.error('Logout error', error);
    });
  }
  }

