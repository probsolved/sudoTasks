import { Injectable } from '@angular/core';
import { task } from '../shared/task.model';
import { TaskListListService } from '../task-list/task-list-list.service';
import { project } from './project.model';

@Injectable()
export class projectService {
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
  ];

  constructor(private slService: TaskListListService) {}

  getprojects() {
    return this.projects.slice();
  }

   getProject(index: number) {
    return this.projects[index];
  }

  addtasksToTaskListList(tasks: task[]) {
    this.slService.addtasks(tasks);
  }
}
