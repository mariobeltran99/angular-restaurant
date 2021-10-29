import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditBurgerComponent } from './add-or-edit-burger.component';

describe('AddOrEditBurgerComponent', () => {
  let component: AddOrEditBurgerComponent;
  let fixture: ComponentFixture<AddOrEditBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
