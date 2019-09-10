export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS'

export const userDataSuccess = (account) => ({
  type: USER_DATA_SUCCESS,
  payload: { account }
})
