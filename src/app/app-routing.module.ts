import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  //{ path: 'cars/cardetail/:carId', component: CarComponent },
  { path: 'cars/cardetail/:carId', component: CarDetailPageComponent },
  { path: 'cars/rental/add', component: RentalAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
