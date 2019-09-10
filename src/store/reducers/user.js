import * as actionsTypes from '../actions';

const initialState = {
  colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
  account: {}
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.USER_DATA_SUCCESS: {
      const { account } = payload
      return {
        ...state,
        account
      }
    }

    default:
      return state
  }
}

export default userReducer