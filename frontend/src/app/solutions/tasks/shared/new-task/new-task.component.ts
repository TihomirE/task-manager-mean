import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/tasks/task.service';

@Component({
  selector: 'new-task-component',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  showProgress: boolean;

  newTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });

  @Output() taskCreatedEmitter = new EventEmitter();

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  onSubmit() {
    this.createNewTask();
  }

  createNewTask() {
    this.showProgress = true;
    this.taskService.createTask(this.newTaskForm.value).subscribe(
      result => {
        this.showProgress = false;
        // TODO - error handling!
        this.taskCreatedEmitter.emit();
        this.resetForm();
      });
  }

  resetForm() {
    this.newTaskForm.reset();
  }

  ngOnInit(): void {
    this.showProgress = false;
  }

}
