import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { project } from "./project.model";
import { projectService } from "./project.service";

@Injectable({providedIn: 'root'})
export class ProjectsResolverService implements Resolve<project[]> {
  constructor(private dataStorageService: DataStorageService, private projectsService: projectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const projects = this.projectsService.getprojects();
    if (projects.length === 0) {
      return this.dataStorageService.fetchProjects();
    } else {
      return projects;
    }

  }
}
