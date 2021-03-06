import { Subject } from "rxjs";
import { task } from "../shared/task.model";

export class TaskListListService {
  tasksChanged = new Subject<task[]>();
  startedEditing = new Subject<number>();


  // private tasks: task[] = [
  //   new task('Private Task 1', 1),
  //   new task('Private Task 2', 2)
  // ];
    private tasks: task[] = [];


  gettasks() {
    return this.tasks.slice();
  }

    getTask(index:number) {
    return this.tasks[index];
  }

  addtask(task: task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  addtasks(tasks: task[]) {
    this.tasks.push(...tasks);
    this.tasksChanged.next(this.tasks.slice())
  }
  updateTask(index: number, newtask: task) {
    this.tasks[index] = newtask;
    this.tasksChanged.next(this.tasks.slice());
  }

  deleteTask(index:number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
  }
}
