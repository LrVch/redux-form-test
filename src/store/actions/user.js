export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS'
export const USER_CLUB_INFO_SUCCESS = 'USER_CLUB_INFO_SUCCESS'

export const userDataSuccess = (account) => ({
  type: USER_DATA_SUCCESS,
  payload: { account }
})

export const userClubInfoSuccess = (clubInfo) => ({
  type: USER_CLUB_INFO_SUCCESS,
  payload: { clubInfo }
})
