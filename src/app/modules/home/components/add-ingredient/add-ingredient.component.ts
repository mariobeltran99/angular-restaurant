import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ingredientsInitials } from 'src/app/modules/shared/constants/ingredientsInitials';
import { countsIngredients } from 'src/app/modules/shared/constants/countsIngredients';
@Component({
  selector: 'add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  @Input('ingredients') ingredients!: Array<string>;
  @Output('sendIngredients') results = new EventEmitter<Array<string>>();
  @Output('sendBills') bills = new EventEmitter<Array<string>>();
  @Output('price') amount = new EventEmitter<number>();
  ingredientForm!: FormGroup;
  list: Array<any> = [];
  initialItems = ingredientsInitials;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ingredientForm = this.fb.group({
      ingredient: new FormControl('meat', [Validators.required]),
    });
  }

  addIngredient() {
    if (this.ingredientForm.valid) {
      const { ingredient } = this.ingredientForm.value;
      this.ingredients.unshift(ingredient);
      this.list = countsIngredients(this.ingredients);
      this.sendArray();
    }
  }
  removeIngredient(id: number) {
    if (id !== -1) {
      this.ingredients.splice(id, 1);
      this.list = countsIngredients(this.ingredients);
      this.sendArray();
    }
  }
  sendArray() {
    this.results.emit(this.ingredients);
    this.bills.emit(this.list);
    this.amount.emit(this.priceAmount());
  }
  priceAmount(): number {
    let subtotal: number = 0;
    let prices: number = 0;
    this.list.forEach((item) => {
      subtotal += item.price;
    });
    return (prices = subtotal + 1.0);
  }
}
