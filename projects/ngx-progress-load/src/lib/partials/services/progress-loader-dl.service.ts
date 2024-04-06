import { Injectable, Type } from '@angular/core';

import { ProgressType as PType } from '../../types/ngx-progress-load';
import { ProgressLoader } from '../progress-loader';
import { ProgressType } from '../constants';

import { CircleProgressComponent } from '../components/circle-progress/circle-progress.component';
import { SquareProgressComponent } from '../components/square-progress/square-progress.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressLoaderDLService {

  constructor() { }

  getComponent(type: PType): Type<ProgressLoader> {
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
