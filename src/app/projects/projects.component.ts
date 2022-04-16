import { Component, OnInit } from '@angular/core';
import { projectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [projectService],
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
