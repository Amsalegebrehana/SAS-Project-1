const myP = document.querySelector('#myP');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
const logOutBtn = document.querySelector('#logOutBtn');
const profileSec = document.querySelector('.addOn');
const navItems = document.querySelector('.myNavItems');


function updateUI(user) {
  if (user.isLoggedIn) {
    myP.innerHTML = "Logged In"
  } else {
    myP.innerHTML = "Not"
  }



  profileSec.innerHTML = ` 
    <div class="row>
   
    <div class="col-4">
        <img src=${user.imageUrl ? user.imageUrl : "./assets/images/default_avatar.png"} alt="">
      </div>
      <div class="col-8">
        <div class="row">
          <p><i class="fas fa-user-alt"></i> &nbsp; ${user.username} </p>
        </div>
        <div class="row">
          <p><i class="far fa-envelope"></i> &nbsp; ${user.email} </p>
        </div>
        <div class="row">
          <p><i class="fas fa-map-marker-alt"></i> &nbsp;${user.address} </p>
        </div>
        </div>

    `
};

getUserInfo({ id }).then(function (user) {
  updateUI(user);
});


logOutBtn.addEventListener('click', logOut);

function logOut() {

  getUserInfo({ id }).then(function (user) {

    user.isLoggedIn = false;
    update(id, user).then(function () {
      window.location.href = `login.html`;
      updateUI(user);
    })
  });

}