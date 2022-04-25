import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { TaskListListComponent } from './task-list/task-list-list.component';
import { TaskListEditComponent } from './task-list/task-list/task-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TaskListListService } from './task-list/task-list-list.service';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { GearsComponent } from './gears/gears.component';
import { FooterComponent } from './footer/footer.component';
import { projectService } from './projects/project.service';
import { CommonModule } from '@angular/common';
const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectItemComponent,
    TaskListListComponent,
    TaskListEditComponent,
    HeaderComponent,
    DropdownDirective,
    ProjectStartComponent,
    ProjectEditComponent,
    GearsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [TaskListListService, projectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
