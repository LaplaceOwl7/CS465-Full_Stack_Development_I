import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TripListingComponent } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TripListingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Added []s for the new version.
})
export class App {
  protected readonly title = signal('Travlr Getways Admin Portal');
}
