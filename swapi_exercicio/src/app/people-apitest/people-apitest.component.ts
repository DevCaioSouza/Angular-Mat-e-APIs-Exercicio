import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-people-apitest',
  templateUrl: './people-apitest.component.html',
  styleUrls: ['./people-apitest.component.css']
})
export class PeopleAPItestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get("https://swapi.dev/api/people/1")
    .pipe(map((response: any) => ({
        name: response.name,
        birthYear: response.birth_year,
        height: Number(response.height),
        weight: Number(response.mass),
        eyeColor: response.eye_color
    })))
    .subscribe(luke => console.log(luke))
  }

}
