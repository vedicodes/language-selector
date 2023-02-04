import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedLanguageRoutingModule } from './selected-language-routing.module';
import { SelectedLanguageComponent } from './selected-language.component';


@NgModule({
  declarations: [
    SelectedLanguageComponent
  ],
  imports: [
    CommonModule,
    SelectedLanguageRoutingModule
  ],
  exports: [
    SelectedLanguageComponent
  ]
})
export class SelectedLanguageModule { }
