import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/models/planet';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  private planet!: Planet;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getAllPlanets()
      .subscribe((data: Planet)=>{
        this.planet = data
      })
  }

}
