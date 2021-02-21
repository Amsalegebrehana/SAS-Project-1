const fn = document.querySelector('#name');
const mail = document.querySelector('#mail');
const pass = document.querySelector('#pass');
const place = document.querySelector('#sel1');
const skills=document.getElementById("sel2");
const phoneNumber=document.getElementById("pnum");
const description= document.getElementById("comment");
const file= document.getElementById("fileurl");
const P = document.getElementById("createProv");


P.addEventListener('click', ()=>{
    console.log("I work");
});

function addUser2(e) {
    e.preventDefault();

    let newProvider = {
        id: Date.now(),
        username: fn.value,
        mail: mail.value,
        pass: pass.value,
        place: place.value,
        isLoggedIn: true,
        orders: [],
        phoneNumber: phoneNumber.value,
        skill:skills.value,
        isProvider: true,
        providerStat: {
            description: description.value,
            price: "$27/hr",
            level: '',
            rating: 0, 
            reviews: [],
            fileUrl: file.value,
            numHire: 0
        },
        imageUrl: '',
        isAdmin: false,
    }

    addNewProvider(newProvider).then(function (user) {

        // P.reset();
        // window.location.href = `account.html?id=${newProvider.id}`;

    });


}






