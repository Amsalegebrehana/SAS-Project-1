let newUser = {
    id: Date.now(),
    username: fullName.value,
    email: email.value,
    password: password.value,
    address: address.value,
    isLoggedIn: true,
    orders: [],
    phoneNumber: phoneNum.value,
    isProvider: false,
    providerStat: {},
    imageUrl: '',
    isAdmin: false,
}

let user1 = {
    address: "Dire Dawa",
    email: "test1@test.com",
    id: Date.now(),
    imageUrl: "",
    isAdmin: false,
    isLoggedIn: false,
    isProvider: false,
    orders: {},
    password: "1234",
    phoneNumber: "+251911111111",
    providerStat: {},
    username: "User1"
}