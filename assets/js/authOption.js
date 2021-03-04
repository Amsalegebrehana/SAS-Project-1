const urlParams = new URLSearchParams(window.location.search);
const providerId = Number(urlParams.get('providerId'));
const authBtns = document.querySelector('#authBtns');

if (providerId) {
   authBtns.innerHTML = `
    <div class="text-center ">
    <a type="button" href="signUp.html?providerId=${providerId}"  class="btn btn-block send-button button1 my-2">Sign Up</a>
 </div>
 <div class="text-center ">
    <a type="button" href="login.html?providerId=${providerId}"  class="btn btn-block btn-outline-secondary send-button button2 my-2">Log In</a>
 </div>
    `;
} else {
   authBtns.innerHTML = `
    <div class="text-center ">
    <a type="button" href="signUp.html"  class="btn btn-block send-button button1 my-2">Sign Up</a>
 </div>
 <div class="text-center ">
    <a type="button" href="login.html"  class="btn btn-block btn-outline-secondary send-button button2 my-2">Log In</a>
 </div>
    `
}