import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditBurgerComponent } from './components/add-or-edit-burger/add-or-edit-burger.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: AddOrEditBurgerComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: AddOrEditBurgerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
