const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const address = document.querySelector('#address');
const phoneNum = document.querySelector('#phoneNum');
const signUpForm = document.querySelector('#signUpForm');

const urlParams = new URLSearchParams(window.location.search);
const providerId = Number(urlParams.get('providerId'));


signUpForm.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();

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

    addNewUser(newUser).then(function (user) {
        signUpForm.reset();
        localStorage.setItem('userId', newUser.id);

        if (providerId) {
            window.location.href = `providerProfile.html?id=${providerId}`;

        } else {
            window.location.href = `index.html`;
            updateUI(user);
        }


    });


}






