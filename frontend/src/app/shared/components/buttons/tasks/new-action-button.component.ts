import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-action-btn',
    templateUrl: './new-action-btn.component.html'
    // styleUrls: ['./tasks.component.scss']
})

export class NewActionBtnComponent {

    @Output() creatNewActionEmitter = new EventEmitter();

    createNewAction() {
        this.creatNewActionEmitter.emit();
    }
}
