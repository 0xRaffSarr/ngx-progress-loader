import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressLoaderComponent } from './ngx-progress-loader.component';

describe('NgxProgressLoadComponent', () => {
  let component: NgxProgressLoaderComponent;
  let fixture: ComponentFixture<NgxProgressLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProgressLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxProgressLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
