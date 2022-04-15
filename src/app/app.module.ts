import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskListListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
