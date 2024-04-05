import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressLoadComponent } from './ngx-progress-load.component';

describe('NgxProgressLoadComponent', () => {
  let component: NgxProgressLoadComponent;
  let fixture: ComponentFixture<NgxProgressLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProgressLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxProgressLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
