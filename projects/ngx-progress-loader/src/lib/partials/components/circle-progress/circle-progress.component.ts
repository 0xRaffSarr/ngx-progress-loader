import {CommonModule} from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import {ProgressLoader} from '../../progress-loader';

@Component({
  selector: 'xrs-circle-progress',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CircleProgressComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges, ProgressLoader {

  @ViewChild('statusIndicatorRef', {static: true}) private statusIndicator!: ElementRef;

  @ViewChild('container', {static: true}) private container!: ElementRef;
  @ViewChild('progress', {static: true}) private progress!: ElementRef;
  @ViewChild('refContent', {static: true}) private refContent!: ElementRef;

  @Input() value: number = 0;
  @Input() showStatus: boolean = false;
  @Input() infinite: boolean = false;

  private resizeFontObserver!: ResizeObserver;

  private readonly DEFAULT_FONT_SIZE = '1rem';
  private readonly FONT_SCALING_FACTOR = 0.55;

  protected get showContentRef(): boolean {
    return  this.refContent?.nativeElement ? this.refContent?.nativeElement?.children.length > 0 : false;
  }

  protected get _showStatus(): boolean {
    return !this.showContentRef && this.showStatus;
  }

  ngOnInit(): void {
    this.runAnimation();
  }

  ngAfterViewInit() {
    this.initializeFontResizeObserver();
  }

  ngOnDestroy() {
    if(this.resizeFontObserver) this.resizeFontObserver.disconnect();
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

  private initializeFontResizeObserver() {
    const container = this.statusIndicator.nativeElement;
    const textElement = container.querySelector('.status-display');

    const adjustFontSize = () => {
      textElement.style.fontSize = this.DEFAULT_FONT_SIZE;

      const containerWidth = container.clientWidth;

      const fontSize = ((containerWidth - 5) * this.FONT_SCALING_FACTOR);

      textElement.style.fontSize = fontSize + 'px';
    }

    this.resizeFontObserver = new ResizeObserver(() => {
      adjustFontSize();
    });

    this.resizeFontObserver.observe(container);

    adjustFontSize();
  }

}
