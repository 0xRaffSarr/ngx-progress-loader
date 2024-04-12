import {ProgressLoaderDLService} from './partials/services/progress-loader-dl.service';
import {
  Component, ElementRef,
  Input,
  OnInit,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import {AsyncPipe, NgComponentOutlet} from '@angular/common';

import {CircleProgressComponent} from './partials/components/circle-progress/circle-progress.component';
import {SquareProgressComponent} from './partials/components/square-progress/square-progress.component';

import { ColorType, ProgressType} from './partials/constants';
import {ProgressLoader} from './partials/progress-loader';

import {ProgressLoadColor, ProgressLoadType} from './partials/types';

@Component({
  selector: 'ngx-progress-loader',
  standalone: true,
  imports: [
    NgComponentOutlet,
    AsyncPipe,
    CircleProgressComponent,
    SquareProgressComponent
  ],
  templateUrl: './ngx-progress-loader.component.html',
  styleUrls: [
    './ngx-progress-loader.component.scss',
    'styles/theme.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxProgressLoaderComponent implements OnInit, ProgressLoader {

  @ViewChild('loaderContainer', {static: true}) loaderContainer!: ElementRef;
  @ViewChild('content', {static: true}) contentRef!: TemplateRef<any>;

  @Input() value!: number
  @Input() type: ProgressLoadType = ProgressType.circle;
  @Input() color!: ProgressLoadColor;
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
      //color: this.color,
      showStatus: this.showStatus,
      infinite: this.infinite
    };
  }

  runAnimation(): void {
    this.loadComponent.prototype.runAnimation();
  }

}
