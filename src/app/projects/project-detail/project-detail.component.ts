import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskListListService } from 'src/app/task-list/task-list-list.service';
import { project } from '../project.model';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  [x: string]: any;
  project: project;
  id: number;

  constructor(private projectService: projectService,
    private tlService: TaskListListService,
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

  onDoneTask() {
    var doneTask = document.getElementById('done');
    doneTask.classList.add('done');
  }

  onDeferTask() {
    console.log(this.project.tasks)
  }


}
