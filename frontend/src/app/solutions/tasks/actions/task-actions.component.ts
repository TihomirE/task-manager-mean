import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
    selector: 'app-task-actions',
    templateUrl: './task-actions.component.html',
    styleUrls: ['./task-actions.component.scss']
})
export class TaskActionsComponent {

    // @Input() task: ITask;
    // @Output() actionsEmitter = new EventEmitter();

    // constructor() { }

    // showActions() {
    //     this.actionsEmitter.emit();
    // }

}
