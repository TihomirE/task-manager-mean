import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/core/tasks/task.service';
import { ITask } from './interfaces/ITask';
import { NewTaskComponent } from './shared/new-task/new-task.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList$: Observable<ITask[]>;
  selectedTask: ITask;

  // TODO - refactor to enum, _tasksShowHelper
  // showTask: boolean;
  showTaskActive: boolean;
  showActionActive: boolean;
  taskSelected: boolean;
  actionsSelected: boolean;
  hideActions: boolean;
  showProgress: boolean;
  showNewTaskModal: boolean;
  showOptions: boolean;

  @ViewChild(NewTaskComponent) private newTaskCmpnt: NewTaskComponent;

  constructor(private store: Store<any>, private taskService: TaskService) { }

  // createNewTask() {
  //   // this.taskService.createTask('Testing').subscribe(
  //   //   result => {
  //   //     this.getTasks();
  //   //   });
  // }

  toogleNewTaskModal() {
    if (this.showNewTaskModal) {
      this.newTaskCmpnt.resetForm();
    }
    this.showNewTaskModal = !this.showNewTaskModal;
  }

  optionsCheckChanged() {
    this.store.dispatch(
      { type: '[Tasks] Toggle Tasks Show Options' });
  }

  taskCreatedEvent() {
    this.getTasks();
    this.toogleNewTaskModal();
  }

  async getTasks() {
    this.showProgress = true;
    this.taskList$ = this.taskService.getTasks();
    this.showProgress = false;
  }

  selectTask(task: ITask) {
    this.selectedTask = task;
    this.showTaskActive = true;
    this.showActionActive = false;
    this.hideActions = true;

    // using timeouts for now so the transition animations look smoother
    setTimeout(() => {
      this.actionsSelected = false;
    }, 900);

    setTimeout(() => {
      this.taskSelected = true;
    }, 1000);
  }

  showActions(option: boolean) {
    if (option) {
      this.showTaskActive = false;
      this.showActionActive = true;
      this.hideActions = false;

      setTimeout(() => {
        this.actionsSelected = true;
      }, 1000);
    } else {
      this.showTaskActive = true;
      this.showActionActive = false;
      this.hideActions = true;

      setTimeout(() => {
        this.actionsSelected = false;
      }, 1000);
    }
  }

  ngOnInit(): void {
    this.getTasks();
    this.hideActions = true;
    this.showNewTaskModal = false;

    // TODO - unsubscribe
    this.store.select('tasks').subscribe(
      tasks => {
        if (tasks) {
          this.showOptions = tasks.showTasksOptions;
        }
      });
  }

}
