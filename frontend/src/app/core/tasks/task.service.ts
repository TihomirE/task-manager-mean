import { Injectable } from '@angular/core';
import { WebRequestService } from '../request/web-request.service';
import { ITask } from 'src/app/solutions/tasks/interfaces/ITask';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAction } from 'src/app/solutions/tasks/interfaces/IAction';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getTasks() { // : Observable<ITask[]>
    return this.webReqService.get('tasks');
  }

  createTask(task: ITask) {
    // send a web request to create a task
    return this.webReqService.post('tasks', { task });
  }

  getActions(taskId: string) { // : Observable<ITask[]>
    return this.webReqService.get('tasks/' + taskId + '/actions' );
  }

  createTaskAction(taskId: string, action: IAction) {
    // send a web request to create an action for specified task
    return this.webReqService.post('tasks/' + taskId + '/actions', { action });
  }

}
