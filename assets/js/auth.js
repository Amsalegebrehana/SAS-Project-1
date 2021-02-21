
let db;

db = new Dexie("seeker_database");
db.version(1).stores({
    users: 'id,username,email, password, phoneNumber, address, isLoggedIn, orders, isProvider, providerStat '
});


function addNewUser(newUser) {

    return db.users.put(newUser);

}
function addNewProvider(newProvider) {

    return db.users.put(newProvider);

}

function addAdmin(newAdmin) {
    return db.users.put(newAdmin);
}

let newAdmin = {
    id: Date.now(),
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    address: 'Addis Ababa',
    isLoggedIn: false,
    orders: [],
    phoneNumber: '',
    isProvider: false,
    providerStat: {},
    imageUrl: '',
    isAdmin: true,
};

getUserInfo({ email: 'admin@admin.com' }).then(function (user) {
    if (user) {
        return;
    } else {
        addAdmin(newAdmin).then(console.log("admin added"))
    }
});

function getUserInfo(obj) {
    return db.users.get(obj);

}

function update(id, user) {
    return db.users.update(id, user);
}

