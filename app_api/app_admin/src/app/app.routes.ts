import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListingComponent } from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent},
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  //{ path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }, // I don't think I need this, buddy.
];
