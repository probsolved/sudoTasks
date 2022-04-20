import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { projectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  projectForm: FormGroup

  constructor(private route: ActivatedRoute, private projectService: projectService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  get controls() { // a getter!
  return (<FormArray>this.projectForm.get('tasks')).controls;
}

  onSubmit() {
    // const newProject = new project(
    //   this.projectForm.value['name'],
    //   this.projectForm.value['description'],
    //   this.projectForm.value['imagePath'],
    //   this.projectForm.value['tasks']
    //   );
    if (this.editMode) {
      this.projectService.updateProject(this.id, this.projectForm.value)
    } else {
      this.projectService.addProject(this.projectForm.value)
    }
    this.onCancel();
  }

  onAddTask() {
    (<FormArray>this.projectForm.get('tasks')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'priority': new FormControl()
      })
    )
  }

  onDeleteTask(index: number) {
    (<FormArray>this.projectForm.get('tasks')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let projectName = '';
    let projectImagePath = '';
    let projectDescription = '';
    let projectTasks = new FormArray([]);

    if (this.editMode) {
      const project = this.projectService.getProject(this.id);
      projectName = project.name;
      projectImagePath = project.imagePath;
      projectDescription = project.description;
      if (project['tasks']) {
        for (let task of project.tasks) {
          projectTasks.push(
            new FormGroup({
              'name' : new FormControl(task.name, Validators.required),
              'priority': new FormControl(task.priority)
            })
          )
        }
      }
    }

    this.projectForm = new FormGroup({
      'name': new FormControl(projectName, Validators.required),
      'imagePath' : new FormControl(projectImagePath),
      'description' : new FormControl(projectDescription, Validators.required),
      'tasks' : projectTasks
    });

  }

}
