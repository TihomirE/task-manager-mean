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
  showTask: boolean;
  showTaskActive: boolean;
  showActionActive: boolean;
  taskSelected: boolean;
  actionsSelected: boolean;

  constructor(private taskService: TaskService) { }

  createNewTask() {
    this.taskService.createTask('Testing').subscribe(
      result => {
        this.getTasks();
      });
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (result: ITask[]) => {
        this.taskList = result;
        if (this.taskList.length > 0) {
          this.showTask = true;
        }
      });
  }

  selectTask(task: ITask) {
    this.selectedTask = task;
    // TODO - get actions for task from server (and pass them to actions component)

    this.taskSelected = true;
    this.showTask = false;
    this.showTaskActive = true;
    this.showActionActive = false;
  }

  showActions() {
    this.actionsSelected = true;
    this.showTask = false;
    this.showTaskActive = false;
    this.showActionActive = true;
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
