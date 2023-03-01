import {uiState} from '../ui';

describe('Testing UiState', () => {
  it('sets dark mode', () => {
    uiState.setDarkMode(true);
    expect(uiState.darkMode).toBe(true);
  });

  it('sets language', () => {
    uiState.setLanguage('en_US');
    expect(uiState.language).toBe('en_US');
  });

  it('sets selected tab', () => {
    uiState.setSelectedTab(1);
    expect(uiState.selectedTab).toBe(1);
  });
});
