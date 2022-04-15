import { Component, OnInit } from '@angular/core';
import { project } from './project.model';
import { projectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [projectService],
})
export class ProjectsComponent implements OnInit {
  selectedproject: project;
  constructor(private projectService: projectService) {}

  ngOnInit() {
    this.projectService.projectSelected.subscribe((project: project) => {
      this.selectedproject = project;
    });
  }
}
