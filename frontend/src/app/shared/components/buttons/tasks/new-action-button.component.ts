import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'new-action-btn',
    templateUrl: './new-action-button.component.html'
    // styleUrls: ['./tasks.component.scss']
})

export class NewActionBtnComponent {

    @Output() createNewActionEmitter = new EventEmitter();

    createNewAction() {
        this.createNewActionEmitter.emit();
    }
}
