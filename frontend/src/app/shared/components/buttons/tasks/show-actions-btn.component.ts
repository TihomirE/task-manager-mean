import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'show-actions-btn',
    templateUrl: './show-actions-btn.component.html'
    // styleUrls: ['./tasks.component.scss']
})

export class ShowActionsBtnComponent {

    @Output() showActionsEmitter = new EventEmitter();

    showActions() {
        this.showActionsEmitter.emit();
    }
}
