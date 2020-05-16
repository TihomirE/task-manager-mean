import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/tasks/task.service';
import { ITask } from './interfaces/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList: ITask[];
  selectedTask: ITask;

  // TODO - refactor to enum, _tasksShowHelper
  // showTask: boolean;
  showTaskActive: boolean;
  showActionActive: boolean;
  taskSelected: boolean;
  actionsSelected: boolean;
  hideActions: boolean;
  showProgress: boolean;

  constructor(private taskService: TaskService) { }

  createNewTask() {
    this.taskService.createTask('Testing').subscribe(
      result => {
        this.getTasks();
      });
  }

  getTasks() {
    this.showProgress = true;
    this.taskService.getTasks().subscribe(
      (result: ITask[]) => {
        this.taskList = result;
        // setTimeout(() => {
        //   this.showProgress = false;
        // }, 2000);
        this.showProgress = false;
      });
  }

  selectTask(task: ITask) {
    this.selectedTask = task;
    // TODO - get actions for task from server (and pass them to actions component)
    this.showTaskActive = true;
    this.showActionActive = false;
    this.hideActions = true;

    setTimeout(() => {
      this.actionsSelected = false;

    }, 900);

    setTimeout(() => {
      this.taskSelected = true;
    }, 1000);
  }

  showActions() {
    this.showTaskActive = false;
    this.showActionActive = true;
    this.hideActions = false;

    setTimeout(() => {
      this.actionsSelected = true;
    }, 1000);
  }

  ngOnInit(): void {
    this.getTasks();
    this.hideActions = true;
  }

}
