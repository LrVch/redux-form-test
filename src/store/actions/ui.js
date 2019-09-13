import PrismService from "../../services/prism.servise";

export const UI_CHANGE_THEME = 'UI_CHANGE_THEME'
export const UI_PRISM_SHOW_LOADER = 'UI_PRISM_SHOW_LOADER'
export const UI_PRISM_HIDE_LOADER = 'UI_PRISM_HIDE_LOADER'

export const uiChangeTheme = (theme) => ({
  type: UI_CHANGE_THEME,
  payload: {
    theme
  }
})

export const uiPrismShowLoader = (payload) => ({
  type: UI_PRISM_SHOW_LOADER,
  payload
})

export const uiPrismHideLoader = (payload) => ({
  type: UI_PRISM_HIDE_LOADER,
  payload
})

export const uiChangeThemeInDome = (theme) => {
  return (dispatch) => {
    dispatch(uiPrismShowLoader())
    PrismService.changeTheme(theme)
      .then(theme => {
        dispatch(uiChangeTheme(theme));
      })
      .catch(console.error)
      .finally(() => dispatch(uiPrismHideLoader()))
  };
}

