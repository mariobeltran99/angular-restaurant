import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBurgerComponent } from './card-burger.component';

describe('CardBurgerComponent', () => {
  let component: CardBurgerComponent;
  let fixture: ComponentFixture<CardBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
