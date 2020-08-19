import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'set-completed-btn',
    templateUrl: './set-completed-btn.component.html'
})

export class SetCompletedBtnComponent {

    @Input() disabled: boolean;
    @Output() setCompletedEmitter = new EventEmitter();

    setCompleted() {
        this.setCompletedEmitter.emit();
    }

}
