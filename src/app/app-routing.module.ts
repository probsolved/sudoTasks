import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarDayViewComponent, CalendarMonthViewComponent, CalendarWeekViewComponent } from "angular-calendar";
import { DeferralsComponent } from "./deferrals/deferrals.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { ProjectEditComponent } from "./projects/project-edit/project-edit.component";
import { ProjectStartComponent } from "./projects/project-start/project-start.component";
import { ProjectsResolverService } from "./projects/projects-resolver.service";
import { ProjectsComponent } from "./projects/projects.component";
import { TaskListListComponent } from "./task-list/task-list-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo:'/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, children: [
    {path: '', component: ProjectStartComponent},
    {path: 'new', component: ProjectEditComponent},
    {path: ':id', component: ProjectDetailComponent, resolve: [ProjectsResolverService]},
    {path: ':id/edit', component: ProjectEditComponent, resolve: [ProjectsResolverService]}
  ]},
  {path: 'task-list-list', component: TaskListListComponent},

  {path: 'month', component: CalendarMonthViewComponent},
  {path: 'calendar', component: DeferralsComponent}

];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
