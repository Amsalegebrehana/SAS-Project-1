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
  else if (user.isProvider) {

    const newBtn = document.createElement('button');

    newBtn.className = 'nav-link';
    newBtn.id = 'v-pills-skills-tab';
    newBtn.setAttribute("data-bs-toggle", "pill");
    newBtn.setAttribute("data-bs-target", "#v-pills-skills");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("role", "tab");
    newBtn.setAttribute("aria-controls", "v-pills-skills");
    newBtn.setAttribute("aria-selected", "false");


    newBtn.innerHTML = `
   Skills
    `;

    tabControlArray.splice(2, 0, newBtn);
    tabControlArray.splice(4)
    tabControls.innerHTML = '';

    tabControlArray.forEach((elmnt) => {
      tabControls.appendChild(elmnt);
    });

    const newSec = document.createElement('div');

    newSec.className = 'tab-pane fade';
    newSec.id = 'v-pills-skills';
    newSec.setAttribute("aria-labelledby", "v-pills-skills-tab");
    newSec.setAttribute("role", "tabpanel");


    const divContent = document.createElement('div');
    divContent.innerHTML = ` 
    
    <div class="row">
    <h5>Skill</h5>
    <p >${user.providerStat.skill}</p>
    <h5>Description</h5>
    <p >${user.providerStat.description}</p>
    <h5>File URL</h5>
    <p >${user.providerStat.fileUrl}</p>
  </div>`;

    newSec.appendChild(divContent);



    tabsArray.splice(2, 0, newSec);
    tabs.innerHTML = '';

    tabsArray.forEach((elmnt) => {
      tabs.appendChild(elmnt);
    });

    const activeOrderTable = document.createElement('table');
    activeOrderTable.className = 'table';
    const activeOrderTableHeader = document.createElement('thead');
    activeOrderTableHeader.innerHTML = `
    <tr>
    <th scope="col">Active Orders</th>
    <th></th>
  </tr>
    `;
    const activeOrderTableContent = document.createElement('tbody');

    const pendingOrderTable = document.createElement('table');
    pendingOrderTable.className = 'table';
    const pendingOrderTableHeader = document.createElement('thead');
    pendingOrderTableHeader.innerHTML = `
  <tr>
  <th scope="col">Pending Orders</th>
  <th></th>
</tr>
`;
    const pendingOrderTableContent = document.createElement('tbody');


    const completeOrderTable = document.createElement('table');
    completeOrderTable.className = 'table';
    const completeOrderTableHeader = document.createElement('thead');
    completeOrderTableHeader.innerHTML = `
  <tr>
  <th scope="col">Complete Orders</th>
  <th></th>
</tr>
`;
    const completeOrderTableContent = document.createElement('tbody');

    let orders = user.tasks;

    orders.forEach((ord) => {
      getOrderInfo({ orderId: ord.orderId }).then(function (order) {
        if (order.isAccepted) {

          getUserInfo({ id: order.userId }).then(function (userFound) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
          <td>UserName:${userFound.username}<br>
          Email:${userFound.email}<br>
          Phone Number:${userFound.phoneNumber}<br>
          Service: ${user.providerStat.skill} <br>
          Address:${userFound.address}
          </td>
        
        
          <td>
          <a class="btn btn-primary text-light ${order.isReviewing ? 'disabled' : ''}" type="button" id="completeBtn">${order.isReviewing ? 'Reviewing...' : 'Complete'}</a>
         
          </td>
          `;

            activeOrderTableContent.appendChild(newRow);
          });


        } else if (order.isComplete) {

          getUserInfo({ id: order.userId }).then(function (userFound) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
          <td>UserName:${userFound.username}<br>
          Email:${userFound.email}<br>
          Phone Number:${userFound.phoneNumber}<br>
          Service: ${user.providerStat.skill} <br>
          Address:${userFound.address}
          </td>
        
        
          <td></td>
          `;

            completeOrderTableContent.appendChild(newRow);
          });

        } else if (order.isPending) {

          getUserInfo({ id: order.userId }).then(function (userFound) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
          <td>UserName:${userFound.username}<br>
          Service: ${user.providerStat.skill} <br>
          Address:${userFound.address}
          </td>
        
          <td>
          <a class="btn btn-primary text-light" type="button" id="acceptBtn">Accept</a>
          <a class="btn btn-danger text-light" type="button" id="denyBtn">Deny</a>
          </td>
          `;

            pendingOrderTableContent.appendChild(newRow);

          });

        }

      });

    });

    activeOrderTable.appendChild(activeOrderTableHeader);
    pendingOrderTable.appendChild(pendingOrderTableHeader);
    completeOrderTable.appendChild(completeOrderTableHeader);
    activeOrderTable.appendChild(activeOrderTableContent);
    pendingOrderTable.appendChild(pendingOrderTableContent);
    completeOrderTable.appendChild(completeOrderTableContent);

    const orderTablesContainer = document.createElement('div');

    orderTablesContainer.appendChild(activeOrderTable);
    orderTablesContainer.appendChild(pendingOrderTable);
    orderTablesContainer.appendChild(completeOrderTable);

    userOrder.appendChild(orderTablesContainer);

    pendingOrderTable.addEventListener('click', processOrder);
    activeOrderTable.addEventListener('click', processOrder);


  }
  else if (!user.isProvider && !user.isAdmin) {

    const activeOrderTable = document.createElement('table');
    activeOrderTable.className = 'table';
    const activeOrderTableHeader = document.createElement('thead');
    activeOrderTableHeader.innerHTML = `
    <tr>
    <th scope="col">Active Orders</th>
    <th></th>
  </tr>
    `;
    const activeOrderTableContent = document.createElement('tbody');

    const pendingOrderTable = document.createElement('table');
    pendingOrderTable.className = 'table';
    const pendingOrderTableHeader = document.createElement('thead');
    pendingOrderTableHeader.innerHTML = `
  <tr>
  <th scope="col">Pending Orders</th>
  <th></th>
</tr>
`;
    const pendingOrderTableContent = document.createElement('tbody');


    const completeOrderTable = document.createElement('table');
    completeOrderTable.className = 'table';
    const completeOrderTableHeader = document.createElement('thead');
    completeOrderTableHeader.innerHTML = `
  <tr>
  <th scope="col">Complete Orders</th>
  <th></th>
</tr>
`;
    const completeOrderTableContent = document.createElement('tbody');



    const declinedOrderTable = document.createElement('table');
    declinedOrderTable.className = 'table';
    const declinedOrderTableHeader = document.createElement('thead');
    declinedOrderTableHeader.innerHTML = `
  <tr>
  <th scope="col">Declined Orders</th>
  <th></th>
</tr>
`;
    const declinedOrderTableContent = document.createElement('tbody');



    let orders = user.orders;
    orders.forEach((ord) => {
      getOrderInfo({ orderId: ord.orderId }).then(function (order) {

        if (order.isAccepted) {

          getUserInfo({ id: order.providerId }).then(function (provider) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
            <td>Username:${provider.username}<br>
          Email:${provider.email}<br>
          Phone Number:${provider.phoneNumber}<br>
          Service:${provider.providerStat.skill}
          </td>
        
          <td><a class="btn btn-primary text-light ${order.isReviewing ? '' : 'disabled'}" type="button" id="reviewBtn">Review</a></td>
          `;

            activeOrderTableContent.appendChild(newRow);
          });


        } else if (order.isComplete) {

          getUserInfo({ id: order.providerId }).then(function (provider) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
          <td>Username:${provider.username}<br>
          Email:${provider.email}<br>
          Phone Number:${provider.phoneNumber}<br>
          Service:${provider.providerStat.skill}
          </td>
        
          <td></td>
          `;

            completeOrderTableContent.appendChild(newRow);
          });

        } else if (order.isPending) {

          getUserInfo({ id: order.providerId }).then(function (provider) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);

            newRow.innerHTML = `
          <td>Username:${provider.username}<br>
          Service:${provider.providerStat.skill}<br>
          </td>
        
          <td><a class="btn btn-danger text-light" type="button" id="deleteBtn">Delete</a></td>
          `;

            pendingOrderTableContent.appendChild(newRow);

          });

        } else if (order.isDeclined) {

          getUserInfo({ id: order.providerId }).then(function (provider) {

            newRow = document.createElement('tr');
            newRow.setAttribute('data-order-id', order.orderId);
            newRow.setAttribute('data-providerSkill-id', provider.providerStat.skill);
            newRow.innerHTML = `
            <td>Username:${provider.username}<br>
            Service:${provider.providerStat.skill}<br>
            </td>
        
          <td><a class="btn btn-success text-light" type="button" id="smOneElseBtn">Hire Someone else</a></td>
          `;

            declinedOrderTableContent.appendChild(newRow);

          });

        }
      });
    });


    activeOrderTable.appendChild(activeOrderTableHeader);
    pendingOrderTable.appendChild(pendingOrderTableHeader);
    completeOrderTable.appendChild(completeOrderTableHeader);
    declinedOrderTable.appendChild(declinedOrderTableHeader);
    activeOrderTable.appendChild(activeOrderTableContent);
    pendingOrderTable.appendChild(pendingOrderTableContent);
    completeOrderTable.appendChild(completeOrderTableContent);
    declinedOrderTable.appendChild(declinedOrderTableContent);

    const orderTablesContainer = document.createElement('div');

    orderTablesContainer.appendChild(activeOrderTable);
    orderTablesContainer.appendChild(pendingOrderTable);
    orderTablesContainer.appendChild(completeOrderTable);
    orderTablesContainer.appendChild(declinedOrderTable);

    userOrder.appendChild(orderTablesContainer);

    pendingOrderTable.addEventListener('click', processOrder);
    activeOrderTable.addEventListener('click', processOrder);
    declinedOrderTable.addEventListener('click', processOrder);

  }
}
function updateUI(user) {
  if (localStorage.getItem('userId')) {

    profileSec.innerHTML = ` 
    
  
      <div class="col-md-4">
        <img src=${user.imageUrl ? user.imageUrl : "./assets/images/default_avatar.png"} width="100px" height="130px" alt="">
      </div>
      <div class="col-md-8">
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

  } else {
    window.location.href = `login.html`;
  }
};

getUserInfo({ id }).then(function (user) {
  updateUI(user);
  updateTabs(user);
});

logOutBtn.addEventListener('click', logOut);

function logOut() {

  getUserInfo({ id }).then(function (user) {

    user.isLoggedIn = false;
    update(id, user).then(function () {
      localStorage.removeItem('userId');
      window.location.href = `login.html`;
      updateUI(user);
    })
  });

}
deactivateBtn.addEventListener('click', deactivate);

function deactivate() {
  if (confirm('Are You Sure you want to deactivate your account ?')) {

    deleteUser(id).then(function (user) {
      localStorage.removeItem('userId');
      console.log('deleted');
      window.location.href = `index.html`;

    });
  }
}

