import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';

import { HistoryService } from './services/history.service';

import { HistoryComponent } from './components/history/history.component';
import { DetailsComponent } from './components/details/details.component';
import { CardBurgerComponent } from './components/card-burger/card-burger.component';

@NgModule({
  declarations: [HistoryComponent, DetailsComponent, CardBurgerComponent],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
  providers: [HistoryService],
})
export class HistoryModule {}
