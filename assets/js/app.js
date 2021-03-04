const navItems = document.querySelector('.myNavItems');

function updateNavBar() {
    let userId = localStorage.getItem('userId');
    if (userId) {

        let result = Array.from(navItems.children)

        const liAcc = document.createElement('li');
        liAcc.className = 'nav-item active';
        liAcc.id = 'acc';
        liAcc.innerHTML = `
        <a class="nav-link" href="account.html?id=${userId}"> Account</a>
        `;
        result.push(liAcc);


        navItems.innerHTML = '';

        result.forEach((elmnt) => {
            navItems.appendChild(elmnt);
        });

    } else {
        let result = Array.from(navItems.children)
        // result.pop();
        const liAuthOpt = document.createElement('li');
        liAuthOpt.className = 'nav-item active';
        liAuthOpt.id = 'authOpt';
        liAuthOpt.innerHTML = `
        <a class="nav-link" href="authOption.html"> Sign up/Log in</a>
        `;
        result.push(liAuthOpt);

        const liBecome = document.createElement('li');
        liBecome.className = 'nav-item active';
        liBecome.id = 'becomeProv';
        liBecome.innerHTML = `
        <a  class="btn btn-outline-secondary bg-light" style="width: 50; padding: 10px;" href="becomeAProvider.html">Become a Provider</a>
        `;
        result.push(liBecome);



        navItems.innerHTML = '';

        result.forEach((elmnt) => {
            navItems.appendChild(elmnt);
        });



    };
}

updateNavBar();