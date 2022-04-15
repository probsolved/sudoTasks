import { task } from '../shared/task.model';

export class project {
  public name: string;
  public description: string;
  public imagePath: string;
  public tasks: task[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    tasks: task[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.tasks = tasks;
  }
}
