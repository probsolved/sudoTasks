import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: project[];

  constructor(private projectService: projectService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.projects = this.projectService.getprojects();
  }

  onNewProject() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
