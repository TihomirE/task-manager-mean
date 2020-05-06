import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LanguageChangeComponent } from './language-change.component';



const routes: Routes = [
  {
    path: '',
    component: LanguageChangeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanguageChangeComponent]
})

export class LanguageChangeModule {}
