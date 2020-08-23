import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAction } from '../../interfaces/IAction';

@Component({
    selector: 'action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent {

    @Input() actionList: IAction[];
    // @Input() selectedTask: ITask;
    // @Output() selectTaskEmitter = new EventEmitter<ITask>();

    constructor() { }

    // selectTask(selectedTask: ITask) {
    //     this.selectTaskEmitter.emit(selectedTask);
    // }

    onActionClick(action: IAction) {
        // // we want to set the action to completed
        // this.taskService.complete(action).subscribe(() => {
        //     // the task has been set to completed successfully
        //     console.log("Completed successully!");
        //     action.completed = !action.completed;
        // });
        action.completed = !action.completed;
    }

}
