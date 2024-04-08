import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressLoader } from '../../progress-loader';

import { ProgressLoadColor } from './../../types';

import { ColorType } from '../../constants';

@Component({
  selector: 'xrs-square-progress',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './square-progress.component.html',
  styleUrl: './square-progress.component.scss'
})
export class SquareProgressComponent implements OnInit, OnChanges, ProgressLoader {

  @ViewChild('progress', {static: true}) private progress!: ElementRef;

  @Input() value: number = 0;
  @Input() color: ProgressLoadColor = ColorType.blue;
  @Input() showStatus: boolean = false;
  @Input() infinite: boolean = false;

  ngOnInit(): void {
      this.runAnimation()
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.runAnimation()
  }

  get parsedValue(): number {

    if(!this.value) return 0;

    if(this.value && this.value < 0) return 0;
    if(this.value && this.value > 100) return 100;

    return this.value;
  }

  runAnimation(): void {
      if(!this.infinite) {

        const bar = this.progress.nativeElement.querySelector('.progress-bar');

        requestAnimationFrame(
          () => {
            bar.style.height = this.parsedValue + '%';
          }
        );
      }
  }

}
