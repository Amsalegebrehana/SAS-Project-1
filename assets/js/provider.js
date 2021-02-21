// const fullName = document.querySelector('#fullName');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const address = document.querySelector('#address');

// const signUpForm = document.querySelector('#signUpForm');


// signUpForm.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();

    let newProvider = {
        id: Date.now(),
        username: fullName.value,
        email: email.value,
        password: password.value,
        address: address.value,
        isLoggedIn: true,
        orders: [],
        phoneNumber: '',
        isProvider: false,
        providerStat: {
            description: '',
            price: '',
            level: '',
            rating: 0,
            reviews: [],
            fileUrl: '',
            numHire: 0
        },
        imageUrl: '',
        isAdmin: false,
    }

    addNewUser(newProvider).then(function (user) {

        // signUpForm.reset();
        window.location.href = `account.html?id=${newUser.id}`;

    });


}






