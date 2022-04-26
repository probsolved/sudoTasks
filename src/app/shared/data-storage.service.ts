import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { projectService } from "../projects/project.service";
import { project } from "../projects/project.model";
import { map, tap } from "rxjs";

@Injectable({providedIn: 'root'})

export class DataStorageService {
  constructor(private http: HttpClient, private projectService: projectService) {}

    storeProjects() {
    const projects = this.projectService.getprojects();
    this.http.put('https://sudotasks-df06e-default-rtdb.firebaseio.com/projects.json', projects).subscribe(response => {
      console.log(response);
    });
  }

  fetchProjects() {
    return this.http
    .get<project[]>('https://sudotasks-df06e-default-rtdb.firebaseio.com/projects.json')
    .pipe(map(projects => {
      return projects.map(project => {
        return {...project, tasks: project.tasks ? project.tasks : []};
      });
    })
    ,tap(projects => {
      this.projectService.setProjects(projects);

    })
    )

  }
}
