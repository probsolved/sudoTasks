import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { project } from '../../project.model';
import { projectService } from '../../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: project;

  constructor(private projectService: projectService) {}

  ngOnInit(): void {}

  onSelected() {
    this.projectService.projectSelected.emit(this.project);
  }
}
