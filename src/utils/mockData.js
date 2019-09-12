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
            firstName: 'Jane',
            lastName: 'Doe',
            hobbies$: [
                'reading',
                'swimming'
            ]
        },
        {
            firstName: 'Sam',
            lastName: ' Peterson',
            hobbies$: [
                'sport',
                'running',
                'writing'
            ]
        }
    ]
}