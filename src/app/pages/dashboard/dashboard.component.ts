import { Component } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DxButtonModule, DxChartModule, DxPieChartModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: '../../app.component.scss',
})
export class DashboardComponent  {
  
  }

