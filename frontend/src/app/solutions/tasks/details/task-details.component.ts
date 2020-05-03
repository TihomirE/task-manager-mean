import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

    @Input() task: ITask;
    @Output() actionsEmitter = new EventEmitter();

    constructor() { }

    showActions() {
        this.actionsEmitter.emit();
    }

}
