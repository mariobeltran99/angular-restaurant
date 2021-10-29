import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IBurger } from '../../../shared/interfaces/burger';
import { HomeService } from '../../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { countsIngredients } from './../../../shared/constants/countsIngredients';
import { finances } from 'src/app/modules/shared/constants/finances';
@Component({
  selector: 'add-or-edit-burger',
  templateUrl: './add-or-edit-burger.component.html',
  styleUrls: ['./add-or-edit-burger.component.scss'],
})
export class AddOrEditBurgerComponent implements OnInit {
  arrayIngredients: Array<string> = [];
  arrayBills: Array<any> = [];
  money: string = '';
  total: number = 1.0;
  burgerForm!: FormGroup;
  id: number = 0;
  coins = finances;
  constructor(
    private fb: FormBuilder,
    private api: HomeService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.burgerForm = this.fb.group({
      coin: new FormControl('USD', [Validators.required]),
      name: new FormControl(null, [
        Validators.maxLength(50),
        Validators.required,
        Validators.minLength(2),
      ]),
    });
    this.routeActive.params.subscribe((params: Params) => {
      this.id = params.id;
      if (this.id !== undefined) {
        this.api.getBurger(this.id).subscribe((data) => {
          this.arrayIngredients = data.ingredients;
          this.burgerForm.get('coin')?.setValue(data.currency);
          this.burgerForm.get('name')?.setValue(data.name);
          this.total = data.price;
          this.money = data.currency;
          this.arrayBills = countsIngredients(data.ingredients);
        });
      }
    });
  }
  onChangeCoins() {
    const { coin } = this.burgerForm.value;
    this.money = coin;
  }
  resetForm() {
    const form = this.burgerForm;
    form.reset();
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].setErrors(null);
    });
    this.burgerForm.reset();
    this.arrayBills = [];
    this.burgerForm.get('coin')?.setValue('USD');
    this.money = 'USD';
    this.arrayIngredients = [];
    this.total = 1.0;
  }
  addBurgerOrEdit() {
    if (
      this.burgerForm.valid &&
      this.burgerForm.get('name')?.value.trim().length >= 2
    ) {
      const { coin, name } = this.burgerForm.value;
      const burger: IBurger = {
        name: name,
        ingredients: this.arrayIngredients,
        currency: coin,
        price: this.total,
      };
      if (this.id == undefined) {
        this.api.addBurger(burger).subscribe(() => {
          this.resetForm();
          this.toastr.success('Ready to eat hamburger', 'Created!', {
            timeOut: 5000,
            easeTime: 500,
            progressBar: true,
            progressAnimation: 'decreasing',
            easing: 'ease-in',
            closeButton: true,
            positionClass: 'toast-bottom-right',
          });
        });
      } else {
        this.api.updateBurger(this.id, burger).subscribe(() => {
          this.toastr.success('A better burger', 'Updated!', {
            timeOut: 5000,
            easeTime: 500,
            progressBar: true,
            progressAnimation: 'decreasing',
            easing: 'ease-in',
            closeButton: true,
            positionClass: 'toast-bottom-right',
          });
          this.router.navigate(['/history']);
        });
      }
    } else {
      this.toastr.warning('There are empty spaces', 'Warning!', {
        timeOut: 5000,
        easeTime: 500,
        progressBar: true,
        progressAnimation: 'decreasing',
        easing: 'ease-in',
        closeButton: true,
        positionClass: 'toast-bottom-right',
      });
    }
  }

  isFieldValid(field: string) {
    const control = this.burgerForm.get(field);
    return (control!.touched || control!.dirty) && !control!.valid;
  }
  get errorMessage1(): string {
    let message = '';
    const forms = this.burgerForm.get('name');
    if (forms!.hasError('required')) {
      message = 'The field is required';
    } else if (forms!.hasError('minlength')) {
      message = 'Must contain at least 2 characters';
    } else if (forms!.hasError('maxlength')) {
      message = 'Must contain a maximum of 50 characters';
    }
    return message;
  }
}
