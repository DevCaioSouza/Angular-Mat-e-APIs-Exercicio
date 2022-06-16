import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term = '';

  constructor() { }

  onFormSubmit(event: any){
    event.preventDefault()
    console.log(this.term)
  }
}
