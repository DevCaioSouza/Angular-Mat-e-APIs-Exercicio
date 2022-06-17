import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

//aqui temos uma Dependency Injection (nos argumentos do constructor)
  constructor(private http: HttpClient) {

   }

  search(term: string){
    return this.http.get(`https://swapi.dev/api/people/?search=${term}`)
  }
}

/*
---------- SERVICES ----------
- Used to fetch / store / update any kind of data in our app
- Almost Always where we are going to put network requests
- Data flows from a service to a component
- Implemented as classes
- Angular will automatically create a single instance of each service for us
*/
