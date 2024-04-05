import { Component, Input, OnInit } from '@angular/core';

import { CircleProgressComponent } from './partials/circle-progress/circle-progress.component';

import { ProgressType } from './partials/enums';

@Component({
  selector: 'ngx-progress-load',
  standalone: true,
  imports: [
    CircleProgressComponent
  ],
  templateUrl: './ngx-progress-load.component.html',
  styleUrl: './ngx-progress-load.component.scss',
})
export class NgxProgressLoadComponent implements OnInit {
  @Input() value!: number
  @Input() type: ProgressType = ProgressType.Circle;
  @Input() color: 'orange' | 'blue' | 'green' | 'purple' = 'blue';
  @Input() showStatus: boolean = false;
  @Input() infinite: boolean = false;


  ngOnInit(): void {
      
  }

}
