import { createSelector } from 'reselect'

export const uiState = state => state.ui

export const getTheme = createSelector(
  uiState,
  uiState => uiState.theme
)

export const getPrismShowLoader = createSelector(
  uiState,
  uiState => uiState.prismShowLoader
)
