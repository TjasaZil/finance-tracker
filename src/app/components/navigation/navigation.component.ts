import { Component, OnInit } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [DxButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: '../../app.component.scss',
})
export class NavigationComponent implements OnInit {
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
