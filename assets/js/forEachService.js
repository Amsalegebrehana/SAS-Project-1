const bg = document.querySelector('#cont');
const eachServiceTitle = document.querySelector('#eachServiceTitle');
const eachProvs = document.querySelector('#eachProvs');
const chooseProv = document.querySelector('#chooseProv');
const btn1 = document.querySelector('.chooseBtn');
const btn2 = document.querySelector('.chooseBtn1');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
let catFound;

getCategoryInfo({ categoryid: id }).then(function (category) {
    catFound = category;
    bg.style.background = `url(${category.categoryImageUrl})   `;
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    eachServiceTitle.innerHTML = `${category.categoryname} Services`;
    btn1.innerHTML = `<a href="chooseAProvider.html?id=${category.categoryid}" class="btn btn-outline-secondary help">Find help now</a>`
    btn2.innerHTML = `<a href="chooseAProvider.html?id=${category.categoryid}" class="btn btn-outline-secondary help">Find help now</a>`
    getAllUsers().then(function (users) {
        var result = []
        users.forEach(user => {
            if (user.isProvider && user.providerStat.skill === catFound.categoryname) {
                result.push(user)
            }
        });
        let div3;

        result.forEach(prov => {
            div3 = document.createElement('div');
            div3.className = 'carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active';

            div3.innerHTML = `
            <a  href="providerProfile.html?id=${prov.id}">
            <div class="card cards">
            <img  class="mx-auto img3" src="${prov.imageUrl}" >
            <div class="card-body">
              <p class="card-title">${prov.username}</p>
              <p class="text-center">${prov.providerStat.price}</p>
              <ul>
                <li><i class="fa fa-check"></i>${prov.providerStat.numHire} ${prov.providerStat.skill} Service Complete</li>
                <li><i class="fa fa-star"></i>100% Positive reviews</li>
              </ul>
              </a>
              <hr>
              <h5>How I can help:</h5>
              <p class="card-text">${prov.providerStat.description}</p>
              </div>
            </div>
            `


            eachProvs.appendChild(div3);


        });
    });
});




