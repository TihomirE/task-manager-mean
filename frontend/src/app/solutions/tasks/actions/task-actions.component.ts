import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ITask } from '../interfaces/ITask';
import { NewActionComponent } from '../shared/new-action/new-action.component';
import { TaskService } from 'src/app/core/tasks/task.service';
import { IAction } from '../interfaces/IAction';

@Component({
    selector: 'app-task-actions',
    templateUrl: './task-actions.component.html',
    styleUrls: ['./task-actions.component.scss']
})
export class TaskActionsComponent implements OnInit {

    showNewActionModal: boolean;
    showProgress: boolean;

    actions: IAction[];

    @ViewChild(NewActionComponent) private newActionCmpnt: NewActionComponent;

    @Input() task: ITask;
    // @Output() actionsEmitter = new EventEmitter();

    constructor(private taskService: TaskService) { }

    // showActions() {
    //     this.actionsEmitter.emit();
    // }

    actionCreateEvent(event: IAction) {
        // this.getTasks();
        // this.toogleNewTaskModal();
        this.showProgress = true;
        this.taskService.createTaskAction(this.task.id, event).subscribe(
            result => {
                this.showProgress = false;
                // TODO - error handling!
                this.toogleNewActionModal();
            });
    }

    toogleNewActionModal() {
        if (this.showNewActionModal) {
            this.newActionCmpnt.resetForm();
        }
        this.showNewActionModal = !this.showNewActionModal;
    }

    getActions() {
        this.showProgress = true;
        this.taskService.getActions(this.task.id).subscribe(
            (result: IAction[]) => {
                this.actions = result;
                this.showProgress = false;
            }
        );
    }

    ngOnInit(): void {
        this.showProgress = false;
        this.getActions();
    }

}
