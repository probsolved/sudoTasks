import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { task } from '../shared/task.model';
import { TaskListListService } from '../task-list/task-list-list.service';
import { project } from './project.model';

@Injectable()
export class projectService {
  projectsChanged = new Subject<project[]>();

  private projects: project[] = [
    new project(
      'Build Personal Course Project',
      'This project is a personal Angular project for the CodeLabs front-end program that manages projects and tasks.',
      'https://cdn.pixabay.com/photo/2020/04/04/03/42/space-5000696_1280.png',
      [
        new task('Create component functionality', 2),
        new task('Add routing', 1),
        new task('Style views', 1),
      ]
    ),
    new project(
      'Open a can of worms',
      'Make something needlessly complicated',
      'https://cdn.pixabay.com/photo/2021/11/11/11/11/to-do-6786046_1280.png',
      [
        new task('Task 1', 2),
        new task('Task 2', 2),
      ]
    ),
        new project(
      'Update Recipes App',
      'Update the recipes app from Academind videos with Max.',
      'https://cdn.pixabay.com/photo/2020/04/04/03/42/space-5000696_1280.png',
      [
        new task('Add forms content', 1),
        new task('Update routing', 3),
        new task('Style views', 1),
      ]
    ),
        new project(
      'Update sudoTasks app',
      'sudoTasks is a project management app for development.',
      'https://cdn.pixabay.com/photo/2020/04/04/03/42/space-5000696_1280.png',
      [
        new task('Fix forms for adding / editing projects', 2),
        new task('Add component for task details', 1),
        new task('Fix gears component to save status', 1),
      ]
    ),
        new project(
      'Convert Get Stumped trivia app to Angular',
      'Transition from a pure html/css/js app to an Angular.',
      'https://cdn.pixabay.com/photo/2020/04/04/03/42/space-5000696_1280.png',
      [
        new task('Map out application structure', 1),
        new task('Create components', 1),
        new task('Style views', 1),
      ]
    ),
  ];

  constructor(private tlService: TaskListListService) {}

  getprojects() {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addtasksToTaskListList(tasks: task[]) {
    this.tlService.addtasks(tasks);
  }

  addProject(project: project) {
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
  }

  updateProject(index: number, newProject: project) {
    this.projects[index] = newProject;
    this.projectsChanged.next(this.projects.slice())
  }

  deleteProject(index:number) {
    this.projects.splice(index, 1);
    this.projectsChanged.next(this.projects.slice());
  }

}
