const myP = document.querySelector('#myP');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
const logOutBtn = document.querySelector('#logOutBtn');
const profileSec = document.querySelector('#addOn');
const tabs = document.querySelector('#v-pills-tabContent');
const tabControls = document.querySelector('#v-pills-tab');
const accContent = document.querySelector('#accContent');
const deactivateBtn = document.querySelector('#deactivateBtn');
const userOrder = document.querySelector('#v-pills-orders');
// const changePW = document.querySelector('#changePW');
// const currentPassword = document.querySelector('#currentPassword');
// const newPassword = document.querySelector('#newPassword');
// const confirmPassword = document.querySelector('#confirmPassword');



let categoryNew, catImageUrl, acceptBtn, denyBtn, completeBtn;


function updateTabs(user) {
  let tabsArray = Array.from(tabs.children);
  let tabControlArray = Array.from(tabControls.children);
  if (user.isAdmin) {
    const newBtn = document.createElement('button');

    newBtn.className = 'nav-link';
    newBtn.id = 'v-pills-providers-tab';
    newBtn.setAttribute("data-bs-toggle", "pill");
    newBtn.setAttribute("data-bs-target", "#v-pills-providers");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("role", "tab");
    newBtn.setAttribute("aria-controls", "v-pills-providers");
    newBtn.setAttribute("aria-selected", "false");


    newBtn.innerHTML = `
   Providers
    `;


    const newBtn2 = document.createElement('button');

    newBtn2.className = 'nav-link';
    newBtn2.id = 'v-pills-categories-tab';
    newBtn2.setAttribute("data-bs-toggle", "pill");
    newBtn2.setAttribute("data-bs-target", "#v-pills-categories");
    newBtn2.setAttribute("type", "button");
    newBtn2.setAttribute("role", "tab");
    newBtn2.setAttribute("aria-controls", "v-pills-categories");
    newBtn2.setAttribute("aria-selected", "false");


    newBtn2.innerHTML = `
   Categories
    `;

    tabControlArray.splice(0, 0, newBtn, newBtn2);
    tabControlArray.splice(3)
    tabControls.innerHTML = '';

    tabControlArray.forEach((elmnt) => {
      tabControls.appendChild(elmnt);
    });

    const newSec = document.createElement('div');

    newSec.className = 'tab-pane fade';
    newSec.id = 'v-pills-providers';
    newSec.setAttribute("aria-labelledby", "v-pills-providers-tab");
    newSec.setAttribute("role", "tabpanel");


    const usersTable = document.createElement('table');
    usersTable.className = 'table';

    const usersTableHeader = document.createElement('thead');
    usersTableHeader.innerHTML = `
    <tr>
    <th scope="col">User ID</th>
    <th scope="col">UserName</th>
    <th scope="col">Email</th>
    <th scope="col">Phone Number</th>
    <th scope="col">Skill</th>
    <th scope="col">Hire Count</th>
    <th></th>
  </tr>
    `;


    const userTableContent = document.createElement('tbody');

    getAllUsers().then(function (users) {

      let newRow;

      users.forEach((user) => {
        if (user.isProvider) {

          newRow = document.createElement('tr');
          newRow.setAttribute('data-provider-id', user.id);

          newRow.innerHTML = `
            <th scope="row">${user.id}</th>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.providerStat.skill}</td>
            <td>${user.providerStat.numHire}</td>
            <td><a class="remove-item btn text-danger" type="button"><i class="fas fa-trash "></i></a></td>
            `;

          userTableContent.appendChild(newRow);

        }
      });
      usersTable.appendChild(usersTableHeader);
      usersTable.appendChild(userTableContent);


      const usersTableContainer = document.createElement('div');
      usersTableContainer.appendChild(usersTable);
      newSec.innerHTML = `${usersTableContainer.innerHTML}`;
      newSec.addEventListener('click', deleteProvider);
    });



    const newSec2 = document.createElement('div');

    newSec2.className = 'tab-pane fade show ';
    newSec2.id = 'v-pills-categories';
    newSec2.setAttribute("aria-labelledby", "v-pills-categories-tab");
    newSec2.setAttribute("role", "tabpanel");

    newSec2.innerHTML = `  
    <div class="row">
    <form id="categoryForm">
    <div class="col s12 py-2">
            <input type="text" name="category" id="categoryNew" placeholder="Enter New Category ">
            </div>
            <div class="col s12 py-2">
            <input type="url" placeholder="Enter image link here" id="catImageUrl" required>
            </div>
            <div class="col s12">
            <input type="submit" value="Add" class="btn findtop">
            </div>
        </form>
    </div>

    <div class='row'>
    <ul id="categoryList" class="">
    </ul>
    </div>

`
    const categoryListContainer = document.createElement('div');
    categoryListContainer.className = 'row'
    const categoryList = document.createElement('ul');
    categoryList.className = 'list-group list-group-flush';

    getAllCategories().then(function (categories) {
      let listElmnt;

      categories.forEach((category) => {
        listElmnt = document.createElement('li');
        listElmnt.setAttribute('data-category-id', category.categoryid);
        listElmnt.className = 'list-group-item';
        listElmnt.appendChild(document.createTextNode(category.categoryname));
        const link = document.createElement('a');
        link.className = 'remove-item btn text-danger ';
        link.setAttribute('type', 'button')
        link.innerHTML = `
         <i class="fas fa-trash "></i>
        
          `;

        const span = document.createElement('span');
        span.className = 'badge findtop rounded-pill ml-auto';
        span.innerHTML = `${category.numProviders}`

        listElmnt.appendChild(span);
        listElmnt.appendChild(link);


        categoryList.appendChild(listElmnt);

      })

      categoryListContainer.appendChild(categoryList);
      newSec2.appendChild(categoryListContainer);
    });



    tabsArray.splice(2, 2, newSec, newSec2);
    tabs.innerHTML = '';

    tabsArray.forEach((elmnt) => {
      tabs.appendChild(elmnt);
    });

    categoryNew = document.querySelector('#categoryNew');
    catImageUrl = document.querySelector('#catImageUrl');
    categoryForm.addEventListener('submit', addCategory);
    categoryList.addEventListener('click', deleteCategory);


  }