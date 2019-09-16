import * as actionsTypes from '../actions';

const initialState = {
  colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
  account: {},
  context: {
    requiredNickname: true
  }
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

    case actionsTypes.USER_TOGGLE_REQUIRED_NICKNAME: {
      return {
        ...state,
        context: {
          ...state.context,
          requiredNickname: payload
        }
        
      }
    }

    

    default:
      return state
  }
}

export default userReducer