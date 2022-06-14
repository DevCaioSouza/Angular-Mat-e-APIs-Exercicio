import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://swapi.dev/api/planets/1/'

  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
      console.log(data)
    })
  }
}

//A request get é "observable", mas ñ faz sentido observar pois a request
//só é feita uma vez
