import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { ProgressLoader } from '../../progress-loader';
import { ProgressLoadColor } from './../../types';

import { ColorType } from '../../constants';

@Component({
  selector: 'xrs-circle-progress',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './circle-progress.component.html',
  styleUrl: './circle-progress.component.scss'
})
export class CircleProgressComponent implements OnInit, OnChanges, ProgressLoader {

  @ViewChild('container', {static: true}) private container!: ElementRef;
  @ViewChild('progress', {static: true}) private progress!: ElementRef;
  @ViewChild('refContent', {static: true}) private refContent!: ElementRef;

  @Input() value: number = 0;
  @Input() color: ProgressLoadColor = ColorType.blue;
  @Input() showStatus: boolean = false;
  @Input() infinite: boolean = false;


  protected get showContentRef(): boolean {
    return  this.refContent?.nativeElement ? this.refContent?.nativeElement?.children.length > 0 : false;
  }

  protected get _showStatus(): boolean {
    return !this.showContentRef && this.showStatus;
  } 

  ngOnInit(): void {
    this.runAnimation();      
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.runAnimation();
  }

  get parsedValue(): number {

    if(!this.value) return 0;

    if(this.value && this.value < 0) return 0;
    if(this.value && this.value > 100) return 100;

    return this.value;
  }

  runAnimation() {
    if(!this.infinite) {
      this.container.nativeElement.dataset.value = this.parsedValue;

      const bar = this.progress.nativeElement.querySelector('.progress-bar');

      const r = bar?.getAttribute('r');
      const c = Math.PI * (r * 2);
      
      const pct = ((100 - this.parsedValue)/100) * c;
      
      requestAnimationFrame(
        () => {
          bar.style.strokeDashoffset = pct
        }
      );
    }
  }

}
