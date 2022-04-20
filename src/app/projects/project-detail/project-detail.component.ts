import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: project;
  id: number;

  constructor(private projectService: projectService,
              private route:ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id);
        }
      );
  }

  onAddToTaskListList() {
    this.projectService.addtasksToTaskListList(this.project.tasks);
  }

  onEditProject() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteProject() {
    this.projectService.deleteProject(this.id);
    this.router.navigate(['/projects']);
  }
}
