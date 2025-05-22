import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ArrowRight, Dumbbell, ClipboardList, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-landing',
  imports: [
    RouterModule, LucideAngularModule, ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
      })
export class LandingComponent {

}
