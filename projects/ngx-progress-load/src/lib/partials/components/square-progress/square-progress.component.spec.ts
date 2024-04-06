import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareProgressComponent } from './square-progress.component';

describe('SquareProgressComponent', () => {
  let component: SquareProgressComponent;
  let fixture: ComponentFixture<SquareProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
