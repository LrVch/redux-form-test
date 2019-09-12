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

    case actionsTypes.USER_CLUB_INFO_SUCCESS: {
      const { clubInfo } = payload
      return {
        ...state,
        clubInfo
      }
    }

    default:
      return state
  }
}

export default userReducer