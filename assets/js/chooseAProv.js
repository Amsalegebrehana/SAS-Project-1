
const chooseProv = document.querySelector('#chooseProv');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
let catFound;


getCategoryInfo({ categoryid: id }).then(function (category) {
    catFound = category;
    getAllUsers().then(function (users) {
        var result = []
        users.forEach(user => {
            if (user.isProvider && user.providerStat.skill === catFound.categoryname) {
                result.push(user)
            }
        });
        let div4, content;
        result.forEach(prov => {
            div4 = document.createElement('div');
            div4.className = 'col';

            content = `
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
            div4.innerHTML = content;

            chooseProv.appendChild(div4);

        });
    });
});




