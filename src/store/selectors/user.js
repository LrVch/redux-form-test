import { createSelector } from 'reselect'

export const userState = state => state.user

export const getUserAccount = createSelector(
  userState,
  userState => userState.account
)

export const getUserColors = createSelector(
  userState,
  userState => userState.colors
)

