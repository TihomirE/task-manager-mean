import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-task-btn',
    templateUrl: './new-task-btn.component.html'
    // styleUrls: ['./tasks.component.scss']
})

export class NewTaskBtnComponent {

    @Output() creatNewTaskEmitter = new EventEmitter();

    createNewTask() {
        this.creatNewTaskEmitter.emit();
    }
}
