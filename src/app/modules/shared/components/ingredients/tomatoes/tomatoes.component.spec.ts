import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoesComponent } from './tomatoes.component';

describe('TomatoesComponent', () => {
  let component: TomatoesComponent;
  let fixture: ComponentFixture<TomatoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomatoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
