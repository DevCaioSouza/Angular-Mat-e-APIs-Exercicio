import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Job } from './jobsobj';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class jobsComponent {
  private jobs: Job[] = [];

  constructor(private dataService: DataService) {
    this.dataService.get_jobs().subscribe((res: Job[]) => {
      this.jobs = res
    });
  }
}
