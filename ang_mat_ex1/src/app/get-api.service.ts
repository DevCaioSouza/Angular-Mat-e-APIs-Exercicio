import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  url = 'https://swapi.dev/api/planets/1/'

  // constructor(private httpClient: HttpClient) { }

  // pegarLinkApi(){
  //   return this.httpClient.get(this.url)
  // }

  // get(): Observable<any> {
  //   return this.httpClient.get<any>(this.url);
  // }

}
