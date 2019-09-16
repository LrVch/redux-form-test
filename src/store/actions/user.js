export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS'
export const USER_CLUB_INFO_SUCCESS = 'USER_CLUB_INFO_SUCCESS'
export const USER_TOGGLE_REQUIRED_NICKNAME = 'USER_TOGGLE_REQUIRED_NICKNAME'

export const userDataSuccess = (account) => ({
  type: USER_DATA_SUCCESS,
  payload: { account }
})

export const userClubInfoSuccess = (clubInfo) => ({
  type: USER_CLUB_INFO_SUCCESS,
  payload: { clubInfo }
})

export const userToggleRequiredNickname = (value) => ({
  type: USER_TOGGLE_REQUIRED_NICKNAME,
  payload: value 
})
