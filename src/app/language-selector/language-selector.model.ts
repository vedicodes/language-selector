export namespace LanguageSelectorVM {
  
  export enum ProficiencyLevel {
    Native = 1,
    Fluent = 2,
    Conversational = 3
  }

  export class CommonListItem<T> {
    label: string;
    value: T;
  }

  export class LanguageListItem extends CommonListItem<number> {
    isHidden: boolean;
    isChecked: boolean;
  }

  export class LanguageProficiency extends CommonListItem<number> {
    proficiency: ProficiencyLevel = ProficiencyLevel.Native;
  }

  export const RouteConst = {
    selectedLanguage: "selected-language"
  };

  export const localStorageKey: string = "selectedLanguages";

  export const languageOpts: Array<CommonListItem<number>> = [
    {
      label: "Gujarati",
      value: 1
    }, {
      label: "Hindi",
      value: 2
    }, {
      label: "English",
      value: 3
    }, {
      label: "French",
      value: 4
    }, {
      label: "Spanish",
      value: 5
    }
  ];

  export const proficiencyLevelOpt: Array<CommonListItem<ProficiencyLevel>> = [
    {
      label: "Native proficient",
      value: ProficiencyLevel.Native
    }, {
      label: "Fluent",
      value: ProficiencyLevel.Fluent
    }, {
      label: "Conversational",
      value: ProficiencyLevel.Conversational
    }
  ];

  export const LanguageLocalStorage = {
    getSavedLanguages: (): Array<LanguageProficiency> => {
      let savedLanguages = localStorage.getItem(localStorageKey);
      return savedLanguages ? JSON.parse(savedLanguages) : new Array<LanguageProficiency>();
    },
    saveSelectedLanguages: (languages: Array<LanguageProficiency>) => {
      if (languages && languages.length)
        localStorage.setItem(localStorageKey, JSON.stringify(languages))
    },
    clear: () => localStorage.removeItem(localStorageKey)
  };

}