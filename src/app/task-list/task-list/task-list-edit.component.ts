import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { task } from 'src/app/shared/task.model';
import { TaskListListService } from '../task-list-list.service';

@Component({
  selector: 'app-task-list-edit',
  templateUrl: './task-list-edit.component.html',
  styleUrls: ['./task-list-edit.component.css']
})
export class TaskListEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('priorityInput') priorityInputRef: ElementRef;

  constructor(private slService: TaskListListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.priorityInputRef.nativeElement.value;
    const newtask = new task(ingName, ingAmount);
    this.slService.addtask(newtask);
  }
}
