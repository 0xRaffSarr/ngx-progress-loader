import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'xrs-circle-progress',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './circle-progress.component.html',
  styleUrl: './circle-progress.component.scss'
})
export class CircleProgressComponent implements OnInit, OnChanges {

  @ViewChild('container', {static: true}) private container!: ElementRef;
  @ViewChild('progress', {static: true}) private progress!: ElementRef;

  @Input() value: number = 0;
  @Input() color: 'orange' | 'blue' | 'green' = 'blue';
  @Input() showStatus: boolean = false;

  ngOnInit(): void {
    this.requestAnimationFrame();      
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.requestAnimationFrame();
  }

  get parsedValue(): number {

    if(!this.value) return 0;

    if(this.value && this.value < 0) return 0;
    if(this.value && this.value > 100) return 100;

    return this.value;
  }

  requestAnimationFrame() {

      this.container.nativeElement.dataset.value = this.parsedValue;

      const bar = this.progress.nativeElement.querySelector('[data-bar]');

      const r = bar?.getAttribute('r');
      const c = Math.PI * (r * 2);
      
      const pct = ((100 - this.parsedValue)/100) * c;

      console.log(bar, pct);
      
      requestAnimationFrame(
        () => {
          bar.style.strokeDashoffset = pct
        }
      );
  }

}
