import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private tripsUrl = 'http://localhost:3000/api/trips';
  private authUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    // console.log('Inside TripDataService::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    // console.log('Inside TripDataService::addTrips');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
  // AuthMethod: Login
  login(user: User, password: string): Observable<AuthResponse> {
    const body = {
      name: user.name,
      email: user.email,
      password: password
    };
    return this.http.post<AuthResponse>(`${this.authUrl}/login`, body);
  }
  // AuthMethod: Register
  register(user: User, password: string): Observable<AuthResponse> {
    const body = {
      name: user.name,
      email: user.email,
      password: password
    };
    return this.http.post<AuthResponse>(`${this.authUrl}/register`, body);
  }

}

