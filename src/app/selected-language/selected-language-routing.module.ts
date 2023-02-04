import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedLanguageComponent } from './selected-language.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedLanguageComponent,
    title: "Selected Languages"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedLanguageRoutingModule { }
