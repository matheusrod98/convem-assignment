import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
