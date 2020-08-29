import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'show-actions-btn',
    templateUrl: './show-actions-btn.component.html'
    // styleUrls: ['./tasks.component.scss']
})

export class ShowActionsBtnComponent implements OnInit {

    showActionsToogle: boolean;

    @Output() showActionsEmitter = new EventEmitter<boolean>();

    showActions() {
        this.showActionsToogle = !this.showActionsToogle;
        this.showActionsEmitter.emit(this.showActionsToogle);
    }

    ngOnInit() {
        this.showActionsToogle = false;
    }
}
