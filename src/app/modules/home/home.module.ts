import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HomeService } from './services/home.service';

import { AddOrEditBurgerComponent } from './components/add-or-edit-burger/add-or-edit-burger.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';

@NgModule({
  declarations: [AddIngredientComponent, AddOrEditBurgerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [HomeService],
})
export class HomeModule {}
