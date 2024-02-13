import { Component, OnInit } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [DxButtonModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: '../../app.component.scss',
})
export class NavigationComponent implements OnInit {
  navClosed:boolean=true;
  constructor(private router: Router, private afAuth:AngularFireAuth) {}
  ngOnInit(): void {}
  goToLogin() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error('Logout error', error);
    });
  }
closeNav(){
  this.navClosed=!this.navClosed;
  console.log(this.navClosed)
}
}
