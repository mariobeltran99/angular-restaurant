import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { MeatComponent } from './components/ingredients/meat/meat.component';
import { BreadComponent } from './components/ingredients/bread/bread.component';
import { SausageComponent } from './components/ingredients/sausage/sausage.component';
import { CheeseComponent } from './components/ingredients/cheese/cheese.component';
import { SaladComponent } from './components/ingredients/salad/salad.component';
import { BaconComponent } from './components/ingredients/bacon/bacon.component';
import { TomatoesComponent } from './components/ingredients/tomatoes/tomatoes.component';
import { PicklesComponent } from './components/ingredients/pickles/pickles.component';
import { DrawingBurgerComponent } from './components/drawing-burger/drawing-burger.component';
import { ModalComponent } from './components/modal/modal.component';
import { ListPricesComponent } from './components/list-prices/list-prices.component';
@NgModule({
  declarations: [
    CardComponent,
    MeatComponent,
    BreadComponent,
    SaladComponent,
    SausageComponent,
    CheeseComponent,
    BaconComponent,
    TomatoesComponent,
    PicklesComponent,
    DrawingBurgerComponent,
    ModalComponent,
    ListPricesComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    MeatComponent,
    BreadComponent,
    SaladComponent,
    SausageComponent,
    CheeseComponent,
    BaconComponent,
    TomatoesComponent,
    PicklesComponent,
    DrawingBurgerComponent,
    ModalComponent,
    ListPricesComponent,
  ],
})
export class SharedModule {}
