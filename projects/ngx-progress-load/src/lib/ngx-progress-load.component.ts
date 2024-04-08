import { ProgressLoaderDLService } from './partials/services/progress-loader-dl.service';
import { Component, Input, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';

import { CircleProgressComponent } from './partials/components/circle-progress/circle-progress.component';
import { SquareProgressComponent } from './partials/components/square-progress/square-progress.component';

import { ColorType, ProgressType } from './partials/constants';
import { ProgressLoader } from './partials/progress-loader';

import { ProgressLoadType, ProgressLoadColor } from './partials/types';

@Component({
  selector: 'ngx-progress-load',
  standalone: true,
  imports: [
    NgComponentOutlet,
    AsyncPipe,
    CircleProgressComponent,
    SquareProgressComponent
  ],
  templateUrl: './ngx-progress-load.component.html',
  styleUrl: './ngx-progress-load.component.scss',
})
export class NgxProgressLoadComponent implements OnInit, ProgressLoader {

  @ViewChild('loader') private loader!: ProgressLoader; 
  @ViewChild('content', {static: true}) contentRef!: TemplateRef<any>;

  @Input() value!: number
  @Input() type: ProgressLoadType = ProgressType.circle;
  @Input() color: ProgressLoadColor = ColorType.blue;
  @Input() showStatus: boolean = false;
  @Input() infinite: boolean = false;

  protected loadComponent!: Type<ProgressLoader>;

  protected outContent?: any[][];

  constructor(
    private progressLoaderDynamic: ProgressLoaderDLService,
    private vcr: ViewContainerRef,
  ) {}

  ngOnInit(): void {
      this.outContent = [
        this.vcr.createEmbeddedView(this.contentRef).rootNodes
      ];
      
      this.loadComponent = this.progressLoaderDynamic.getComponent(this.type);
  }

  protected get loaderInputs(): any {
    return {
      value: this.value,
      color: this.color,
      showStatus: this.showStatus,
      infinite: this.infinite
    };
  }


  runAnimation(): void {
    this.loader?.runAnimation(); 
  }

}
