import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { TaskListListComponent } from "./task-list/task-list-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo:'/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'task-list-list', component: TaskListListComponent}


];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
