import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { project } from '../../project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: project;
  @Input() index: number;


  ngOnInit(): void {}


}
