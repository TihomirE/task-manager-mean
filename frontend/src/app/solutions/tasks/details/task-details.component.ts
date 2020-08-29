import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

    disableComplete: boolean;

    @Input() task: ITask;
    @Output() actionsEmitter = new EventEmitter<boolean>();

    setTaskCompleted() {
        // TODO - create functionality for set task to completed
    }

    showActions(option: boolean) {
        this.actionsEmitter.emit(option);
    }

    ngOnInit() {
        // TODO - this needs to come from actions - if all completed can set task to completed as well
        this.disableComplete = true;
    }

}
