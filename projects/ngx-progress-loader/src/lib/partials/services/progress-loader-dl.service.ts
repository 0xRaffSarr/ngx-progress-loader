import { Injectable, Type } from '@angular/core';

import { ProgressLoader } from '../progress-loader';

import { CircleProgressComponent } from '../components/circle-progress/circle-progress.component';
import { SquareProgressComponent } from '../components/square-progress/square-progress.component';

import { ProgressType } from '../constants';
import { ProgressLoadType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProgressLoaderDLService {

  constructor() { }

  getComponent(type: ProgressLoadType): Type<ProgressLoader> {
    switch(type) {
      case ProgressType.circle: {
        return CircleProgressComponent;
      }
      case ProgressType.square: {
        return SquareProgressComponent;
      }
      default: {
        return CircleProgressComponent;
      }
    }
  }
}
