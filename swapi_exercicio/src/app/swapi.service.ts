import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }
}

/*
---------- SERVICES ----------
- Used to fetch / store / update any kind of data in our app
- Almost Always where we are going to put network requests
- Data flows from a service to a component
- Implemented as classes
- Angular will automatically create a single instance of each service for us
*/
