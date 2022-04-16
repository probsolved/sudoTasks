import { Subject } from "rxjs";
import { task } from "../shared/task.model";

export class TaskListListService {
  tasksChanged = new Subject<task[]>();

  private tasks: task[] = [
    new task('Bread slices', 5),
    new task('Butter', 2)
  ];

  gettasks() {
    return this.tasks.slice();
  }

  addtask(task: task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  addtasks(tasks: task[]) {
    this.tasks.push(...tasks);
    this.tasksChanged.next(this.tasks.slice())

  }
}
