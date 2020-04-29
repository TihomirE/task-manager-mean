import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/tasks/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  createNewTask() {
    this.taskService.createTask('Testing').subscribe(
      result => {
        console.log(result);
      });
  }

  ngOnInit(): void {
  }

}
