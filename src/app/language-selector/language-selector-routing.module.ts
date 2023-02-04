import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageSelectorComponent,
    title: "Language Selector"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSelectorRoutingModule { }
