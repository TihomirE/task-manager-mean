import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/tasks/task.service';
import { IAction } from '../../interfaces/IAction';

@Component({
  selector: 'new-action-component',
  templateUrl: './new-action.component.html'
//   styleUrls: ['./new-action.component.scss']
})
export class NewActionComponent {

//   showProgress: boolean;

  newActionForm = this.fb.group({
    title: ['', Validators.required]
  });

  @Output() actionCreatedEmitter = new EventEmitter<IAction>();

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  onSubmit() {
    this.actionCreatedEmitter.emit(this.newActionForm.value);
  }

//   createNewTask() {
//     this.showProgress = true;
//     this.taskService.createTask(this.newTaskForm.value).subscribe(
//       result => {
//         this.showProgress = false;
//         // TODO - error handling!
//         this.taskCreatedEmitter.emit();
//         this.resetForm();
//       });
//   }

  resetForm() {
    this.newActionForm.reset();
  }

//   ngOnInit(): void {
//     this.showProgress = false;
//   }

}
