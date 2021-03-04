const fn = document.querySelector('#name');
const mail = document.querySelector('#email');
const pass = document.querySelector('#pass');
const place = document.querySelector('#sel1');
const skills = document.getElementById("sel2");
const phoneNumber = document.getElementById("pnum");
const description = document.getElementById("comment");
const file = document.getElementById("fileurl");
const image = document.getElementById("imageurl");

const providerForm = document.querySelector('#providerForm');

getAllCategories().then(function (categories) {
    let newOpt;
    categories.forEach(categrory => {
        newOpt = document.createElement('option');
        newOpt.innerHTML = `${categrory.categoryname}`;
        skills.appendChild(newOpt);
    });

})

providerForm.addEventListener('submit', addUser2);



function addUser2(e) {
    e.preventDefault();

    let newProvider = {
        id: Date.now(),
        username: fn.value,
        email: mail.value,
        password: pass.value,
        address: place.value,
        isLoggedIn: true,
        orders: [],
        tasks: [],
        phoneNumber: phoneNumber.value,
        isProvider: true,
        providerStat: {
            description: description.value,
            skill: skills.value,
            price: "$27/hr",
            level: '',
            rating: 0,
            reviews: [],
            fileUrl: file.value,
            numHire: 0,
        },
        imageUrl: image.value,
        isAdmin: false,
    }

    addNewProvider(newProvider).then(function (user) {

        const categoryname = newProvider.providerStat.skill;
        getCategoryInfo({ categoryname }).then(function (category) {
            categrory.numProviders += 1;
            updateCategory(categroryid, categrory).then(function () {
                console.log("category updated")
            })
        })
        providerForm.reset();
        localStorage.setItem('userId', newProvider.id);
        window.location.href = `account.html?id=${newProvider.id}`;

    });


}






