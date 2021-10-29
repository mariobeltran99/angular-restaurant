import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingBurgerComponent } from './drawing-burger.component';

describe('DrawingBurgerComponent', () => {
  let component: DrawingBurgerComponent;
  let fixture: ComponentFixture<DrawingBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
