import * as actionsTypes from '../actions';

const initialState = {
  colors: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
  account: {},
  clubInfo: {
    clubName: 'Some club in the hood',
    members$: [
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      {
        firstName: 'Sam',
        lastName: ' Peterson',
      }
    ]
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

    default:
      return state
  }
}

export default userReducer