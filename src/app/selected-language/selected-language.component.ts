import { Component } from '@angular/core';
import { LanguageSelectorVM as selectorVM } from "../language-selector/language-selector.model";

@Component({
  selector: 'app-selected-language',
  templateUrl: './selected-language.component.html',
  styleUrls: ['./selected-language.component.scss']
})
export class SelectedLanguageComponent {

  selectedLanguages: Array<selectorVM.LanguageProficiency & { proficiencyLabel: string }>;

  constructor() {
    this.selectedLanguages = selectorVM.LanguageLocalStorage.getSavedLanguages().map(x => ({
      ...x,
      proficiencyLabel: selectorVM.proficiencyLevelOpt.find(y => y.value == x.proficiency)!.label
    }));
  }
}
