import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxProgressLoaderComponent } from '../../../ngx-progress-load/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxProgressLoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo';

  progressValue: number = 0;

  ngOnInit(): void {
      const interval = setInterval(() => {
        this.progressValue += (this.progressValue > 0) ? -50 : 50;
      }, 3000);
  }

}
