import * as actionsTypes from '../actions';

const initialState = {
  theme: 'prism-okaidia',
  prismShowLoader: false
}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.UI_CHANGE_THEME: {
      const { theme } = payload
      return {
        ...state,
        theme
      }
    }

    case actionsTypes.UI_PRISM_SHOW_LOADER: {
      return {
        ...state,
        prismShowLoader: true
      }
    }

    case actionsTypes.UI_PRISM_HIDE_LOADER: {
      return {
        ...state,
        prismShowLoader: false
      }
    }

    default:
      return state
  }
}

export default uiReducer