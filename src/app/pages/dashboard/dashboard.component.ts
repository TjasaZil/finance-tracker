import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DxButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: '../../app.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goToLogin() {
    this.router.navigateByUrl('/');
  }
}
