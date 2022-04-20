import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: project[];
  subscription: Subscription;

  constructor(private projectService: projectService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.projectService.projectsChanged
      .subscribe(
        (projects: project[]) => {
          this.projects = projects;
        }
      );
    this.projects = this.projectService.getprojects();
  }

  onNewProject() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
