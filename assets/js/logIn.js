const emailInput = document.querySelector('#emailLogin');
const passwordInput = document.querySelector('#passwordLogin');

const logInForm = document.querySelector('#logInForm');



logInForm.addEventListener('submit', logUser);

function logUser(e) {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    getUserInfo({ email }).then(function (user) {

        if (user.password === password) {
            user.isLoggedIn = true;

            update(user.id, user).then(function () {
                window.location.href = `account.html?id=${user.id}`;
                updateUI(user);
            })
        } else {
            console.log("error")
        }

    });

}






