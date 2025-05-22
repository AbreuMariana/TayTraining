import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  imports: [MatCardModule, LucideAngularModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
