const emailInput = document.querySelector('#emailLogin');
const passwordInput = document.querySelector('#passwordLogin');
const urlParams = new URLSearchParams(window.location.search);
const providerId = Number(urlParams.get('providerId'));
const logInForm = document.querySelector('#logInForm');



logInForm.addEventListener('submit', logUser);

function logUser(e) {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    getUserInfo({ email }).then(function (user) {
        if (user.password === password) {
            user.isLoggedIn = true;
            localStorage.setItem('userId', user.id);
            update(user.id, user).then(function () {
                if (providerId) {
                    window.location.href = `providerProfile.html?id=${providerId}`;


                } else {
                    window.location.href = `index.html`;
                    updateUI(user);
                }

            })
        } else {
            console.log("error")
        }

    });

}






