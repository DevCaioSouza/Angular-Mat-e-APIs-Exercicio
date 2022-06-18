import { Component, Injectable } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private swapi: SwapiService){}

  onTerm(term: string){
    this.swapi.search(term).subscribe((response: any) => {
      this.pages = response.results
      console.log(response.results[0].name)
    })
  }
}
