import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private swapi: SwapiService){

  }

  onTerm(term: string){
    const results = this.swapi.search(term)
    console.log(results)
  }
}
