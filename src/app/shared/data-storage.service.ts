import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { projectService } from "../projects/project.service";

@Injectable({providedIn: 'root'})

export class DataStorageService {
  constructor(private http: HttpClient, private projectService: projectService) {}

    storeProjects() {
    const projects = this.projectService.getprojects();
    this.http.put('https://sudotasks-df06e-default-rtdb.firebaseio.com/projects.json', projects).subscribe(response => {
      console.log(response);
    });
  }
}
