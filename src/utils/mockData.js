export const userAccount = {
  // uses to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  anniversaryDate: '2018-08-22',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}

export const userClubInfo = {
  clubName: 'Some club in the hood',
  members$: [
      {
          firstName: 'First user name',
          lastName: 'First user last name',
          hobbies$: [
              'hobby 1',
              'hobby 2'
          ]
      },
      {
          firstName: 'Second user name',
          lastName: 'Second user last name',
          hobbies$: [
              'hobby 1',
              'hobby 2',
              'hobby 3'
          ]
      }
  ]
}