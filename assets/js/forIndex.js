const row1Services = document.querySelector('#row1Services');
const row2Services = document.querySelector('#row2Services');
const featuredTaskers = document.querySelector('#featuredTaskers');
const categoryDropDown = document.querySelector('#categoryDropDown');
const searchBtn = document.querySelector('#searchBtn');
let categories, div1, first, second, div2;

getAllCategories().then(function (cats) {
    categories = cats;
    first = categories.slice(0, 3)
    second = categories.slice(3, 6)
    first.forEach(cat => {
        div1 = document.createElement('div1');
        div1.className = "col-md-4 col3 serviceCards"
        div1.innerHTML = `
       <a href="eachService.html?id=${cat.categoryid}" id= "${cat.categoryname}" class="specLink">
       <div class="card catCard">
       <img class="card-img-top imgs"  src="${cat.categoryImageUrl}">
       <div class="card-body">
           <p class= "card-title text-center"   >${cat.categoryname}</p>
           <hr>
         
         </div>
         </div>
         </a>`;

        row1Services.appendChild(div1);

    });
    second.forEach(cat => {
        div1 = document.createElement('div1');
        div1.className = "col-md-4 col3 serviceCards"
        div1.innerHTML = `
        <a href="eachService.html?id=${cat.categoryid}" id= "${cat.categoryname}" class="specLink">
        <div class="card catCard">
        <img class="card-img-top imgs"  src="${cat.categoryImageUrl}">
        <div class="card-body">
            <p class= "card-title text-center"   >${cat.categoryname}</p>
            <hr>
          
          </div>
          </div>
          </a>`;

        row2Services.appendChild(div1);

    });


});
getAllUsers().then(function (users) {
    var featured = []
    users.forEach(user => {
        if (user.SASVerified) {

            featured.push(user)
        }
    });



    featured.forEach(featuredUser => {
        div2 = document.createElement('div');
        div2.className = "card col-md-3 mt-100 serviceCards"
        div2.innerHTML = `
      <a href="providerProfile.html?id=${featuredUser.id}" id="${featuredUser.username}">
        <div class="card-content">
        <div class="card-body p-0">
            <div class="profile"> <img src="${featuredUser.imageUrl}"> </div>
            <div class="card-title"> ${featuredUser.username}<br /> <small>${featuredUser.providerStat.skill}</small> <br> <small>⭐️100% positive reviews</small></div>
            <div class="card-subtitle">
                <p> <small class="text-muted"> ${featuredUser.providerStat.reviews[0].reviewMessage} </small> </p>
            </div>
        </div>
    </div>
    </a>`;

        featuredTaskers.appendChild(div2);

    });
});

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('input', searchDropDown);
let datalist;
function searchDropDown() {
    datalist = document.createElement('datalist');
    datalist.setAttribute('id', 'datalistOptions')
    let option;
    categories.forEach(category => {
        option = document.createElement('option');
        option.setAttribute('value', category.categoryname);
        datalist.appendChild(option);

    });

    categoryDropDown.appendChild(datalist);



}

searchBtn.addEventListener('click', go);

function go() {
    const cat = searchBar.value;
    getCategoryInfo({ categoryname: cat }).then(function (cat) {
        window.location.href = `eachService.html?id=${cat.categoryid}`;
    });

}


