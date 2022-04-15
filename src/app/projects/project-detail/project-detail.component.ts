import { Component, Input, OnInit } from '@angular/core';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: project;

  constructor(private projectService: projectService) {}

  ngOnInit(): void {}

  onAddToTaskListList() {
    this.projectService.addtasksToTaskListList(this.project.tasks);
  }
}
