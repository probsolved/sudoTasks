import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { ProjectStartComponent } from "./projects/project-start/project-start.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TaskListListComponent } from "./task-list/task-list-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo:'/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, children: [
    {path: '', component: ProjectStartComponent},
    {path: ':id', component: ProjectDetailComponent}
  ]},
  {path: 'task-list-list', component: TaskListListComponent}


];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
