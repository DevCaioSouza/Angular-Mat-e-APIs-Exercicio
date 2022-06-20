import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchResult$!: Observable<PeopleData>;

  search = new FormControl();

  searchFormGroup = new FormGroup({
    search: this.search,
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap(term =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map(response =>
        response.count > 0 ? response.results[0] : {name: "No Results"}
      ),
      map(
       response =>
        ({
          name: response.name,
          birthYear: response.birth_year,
          height: Number(response.height),
          weight: Number(response.mass),
          eyeColor: response.eye_color
        }as PeopleData)
      )
    )
  }
}
