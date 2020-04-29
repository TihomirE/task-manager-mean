import { Injectable } from '@angular/core';
import { WebRequestService } from '../request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getTasks() {
    return this.webReqService.get('lists');
  }

  createTask(title: string) {
    // send a web request to create a task
    return this.webReqService.post('tasks', { title });
  }

}
