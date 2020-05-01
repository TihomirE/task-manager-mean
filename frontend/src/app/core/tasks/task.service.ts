import { Injectable } from '@angular/core';
import { WebRequestService } from '../request/web-request.service';
import { ITask } from 'src/app/solutions/tasks/interfaces/ITask';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getTasks() { // : Observable<ITask[]>
    return this.webReqService.get('tasks');
  }

  createTask(title: string) {
    // send a web request to create a task
    return this.webReqService.post('tasks', { title });
  }

}
