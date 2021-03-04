let db;

db = new Dexie("seeker_database");
db.version(11).stores({
    users: 'id,username,email, password, phoneNumber, address, isLoggedIn, orders, tasks, isProvider, providerStat, SASVerified, imageUrl, isAdmin',
    categories: 'categoryid, categoryname, numProviders, categoryImageUrl',
    activeOrders: 'orderId, providerId, userId, review, isComplete, isAccepted, isDeclined, isPending, isReviewing'
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

function getAllUsers() {
    return db.users.toArray();
}

function getAllCategories() {
    return db.categories.toArray();
}

function addNewCategory(newCategory) {
    return db.categories.put(newCategory);
}

function deleteCategoryFromDB(id) {
    return db.categories.delete(id);
}
function deleteProviderFromDB(id) {
    return db.users.delete(id);
}
function updateCategory(categoryId, category) {
    return db.categories.update(categoryId, category);
}
function getCategoryInfo(obj) {
    return db.categories.get(obj);
}


let defaultCategories = [cleaningCategory, deliveryCategory, mechanicCategory, electricianCategory, paintingCategory, constructionCategory];

defaultCategories.forEach((cat) => {

    getCategoryInfo({ categoryname: cat.categoryname }).then(function (category) {
        if (category) {
            return;
        } else {
            addNewCategory(cat).then(function () {
                window.location.reload();
                console.log("category added")
            })

        };
    });
});

let defaultProviders = [angelina, jackson, david, ...defProvs];
defaultProviders.forEach((prov) => {

    getUserInfo({ username: prov.username }).then(function (provider) {
        if (provider) {
            return;
        } else {
            addNewProvider(prov).then(function () {
                window.location.reload();
                console.log("provider added")
            })

        };
    });
});


function addNewOrder(newOrder) {

    return db.activeOrders.put(newOrder);

};

function getAllActiveorders() {
    return db.activeOrders.toArray();
}

function getOrderInfo(obj) {
    return db.activeOrders.get(obj);
}

function updateOrder(orderId, order) {
    return db.activeOrders.update(orderId, order);
}

function removeOrder(orderId) {
    return db.activeOrders.delete(orderId);
}
function deleteUser(userId) {
    return db.users.delete(userId);
}