import {makeAutoObservable, observable} from 'mobx';
import {createContext, useContext} from 'react';

export class UiState {
  darkMode = false;
  language = 'en_US';
  selectedTab = 0;

  constructor() {
    makeAutoObservable(this, {
      darkMode: observable,
      language: observable,
      selectedTab: observable,
    });
  }

  setDarkMode = (enabled: boolean) => {
    this.darkMode = enabled;
  };

  setLanguage = (language: string) => {
    this.language = language;
  };

  setSelectedTab = (selectedTab: number) => {
    this.selectedTab = selectedTab;
  };
}

export const uiState = new UiState();

export const UIContext = createContext(uiState);
export const useUI = () => useContext(UIContext);
