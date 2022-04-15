import { Component, OnInit } from '@angular/core';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: project[];

  constructor(private projectService: projectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getprojects();
  }
}
