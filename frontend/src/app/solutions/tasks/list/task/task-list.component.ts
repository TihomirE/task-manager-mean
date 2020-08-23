import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../interfaces/ITask';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
    // styleUrls: ['./task-details.component.scss']
})
export class TaskListComponent {

    @Input() taskList: ITask[];
    @Input() selectedTask: ITask;
    @Output() selectTaskEmitter = new EventEmitter<ITask>();

    constructor() { }

    selectTask(selectedTask: ITask) {
        this.selectTaskEmitter.emit(selectedTask);
    }

}
