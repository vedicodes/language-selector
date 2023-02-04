import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorRoutingModule } from './language-selector-routing.module';
import { LanguageSelectorComponent } from './language-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    LanguageSelectorRoutingModule,
    FormsModule
  ],
  exports: [
    LanguageSelectorComponent
  ]
})
export class LanguageSelectorModule { }
