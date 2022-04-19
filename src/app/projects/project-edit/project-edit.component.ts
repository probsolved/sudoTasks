import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private projectService: projectService) { }

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

  onSubmit() {
    console.log(this.projectForm);
  }
  private initForm() {
    let projectName = '';
    let projectImagePath = '';
    let projectDescription = '';

    if (this.editMode) {
      const project = this.projectService.getProject(this.id);
      projectName = project.name;
      projectImagePath = project.imagePath;
      projectDescription = project.description;
    }

    this.projectForm = new FormGroup({
      'name': new FormControl(projectName),
      'imagePath' : new FormControl(projectImagePath),
      'description' : new FormControl(projectDescription)
    });

  }

}
