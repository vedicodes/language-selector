import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSelectorVM as vm } from "./language-selector.model";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {

  languageOpts: Array<vm.LanguageListItem>;
  selectedLanguages: Array<vm.LanguageProficiency>;
  searchText: string;
  proficiencyLevelOpt = vm.proficiencyLevelOpt;
  get selectAllEle() {
    return document.getElementById("selectAll") as HTMLInputElement;
  };

  constructor(private router: Router) {
    vm.LanguageLocalStorage.clear();
    this.selectedLanguages = new Array<vm.LanguageProficiency>();
    this.setLanguageOpts();
  }

  setLanguageOpts() {
    this.languageOpts = vm.languageOpts.map(x => ({
      ...x,
      isHidden: false,
      isChecked: false
    }));
  }

  onLanguageSearch() {
    this.languageOpts.forEach(item => item.isHidden = !item.label.includes(this.searchText));
    this.updateSelectAllStatus();
  }

  onLanguageSelect(language: vm.LanguageListItem) {
    //Remove If Selected
    if (this.selectedLanguages.find(x => x.value == language.value)) {
      this.selectedLanguages = [
        ...this.selectedLanguages.filter(x => x.value != language.value)
      ];
    }
    //Add If not Selected
    else {
      this.selectedLanguages = [
        ...this.selectedLanguages,
        {
          label: language.label,
          proficiency: vm.ProficiencyLevel.Native,
          value: language.value
        }
      ];
    }
    this.updateSelectAllStatus();
  }

  onLanguageSelectAll() {
    let allVisibleOpts = this.languageOpts.filter(x => !x.isHidden);
    if (this.selectAllEle.checked) {
      let selectedLanguageSet = this.selectedLanguages.reduce((accu, x) => accu.add(x.value), new Set<number>());
      this.selectedLanguages = [...this.selectedLanguages.concat(allVisibleOpts.filter(x => !selectedLanguageSet.has(x.value)).map(x => ({
        ...x,
        label: x.label,
        proficiency: vm.ProficiencyLevel.Native,
        value: x.value
      })))];
    } else {
      let visibleLanguageSet = allVisibleOpts.reduce((accu, x) => accu.add(x.value), new Set<number>());
      this.selectedLanguages = [...this.selectedLanguages.filter(x => !visibleLanguageSet.has(x.value))];
    }
    allVisibleOpts.forEach(x => x.isChecked = this.selectAllEle.checked);
  }

  updateSelectAllStatus() {
    if (this.selectAllEle) {
      let allVisibleOptSet = this.languageOpts.filter(x => !x.isHidden).reduce((accu, x) => accu.add(x.value), new Set<number>());
      let checkedCount = this.selectedLanguages.filter(x => allVisibleOptSet.has(x.value)).length;
      if (checkedCount === 0) {
        this.selectAllEle.checked = false;
        this.selectAllEle.indeterminate = false;
      } else if (checkedCount === allVisibleOptSet.size) {
        this.selectAllEle.checked = true;
        this.selectAllEle.indeterminate = false;
      } else {
        this.selectAllEle.checked = false;
        this.selectAllEle.indeterminate = true;
      }
    }
  }

  onSubmit() {
    vm.LanguageLocalStorage.saveSelectedLanguages(this.selectedLanguages);
    this.router.navigate([ vm.RouteConst.selectedLanguage ]);
  }

  clearSelectedLanguages() {
    let selectedLanguageSet = this.selectedLanguages.reduce((accu, x) => accu.add(x.value), new Set<number>());
    this.languageOpts.filter(x => selectedLanguageSet.has(x.value)).forEach(x => x.isChecked = false);
    this.selectedLanguages = new Array<vm.LanguageProficiency>();
    this.updateSelectAllStatus();
  }

  clearAll() {
    this.selectedLanguages = new Array<vm.LanguageProficiency>();
    this.setLanguageOpts();
    this.searchText = '';
    this.updateSelectAllStatus();
  }

}
