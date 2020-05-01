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

  constructor(private taskService: TaskService) { }

  createNewTask() {
    this.taskService.createTask('Testing').subscribe(
      result => {
        console.log(result);
      });
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (result: ITask[]) => {
        this.taskList = result;
      });
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
