import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxProgressLoadComponent } from '../../../ngx-progress-load/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxProgressLoadComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';

  progressValue: number = 25;
}
