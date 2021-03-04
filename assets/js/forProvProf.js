const specificProv = document.querySelector('#specificProv');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
let hireBtn;
let dataContent1, dataContent2, selectedProvider;

getUserInfo({ id }).then(function (user) {
    selectedProvider = user;
    dataContent1 = document.createElement('div');
    dataContent1.className = 'col-md-6';
    dataContent1.innerHTML = ` 
    <div class="card cards">
    <div class="row">
    <div class="col-md-5">
    <img  class="img3" src="${user.imageUrl}" >
    </div>
    <div class="col-md-7">
    <div class="card-body body">

        <h5 class="card-title" >${user.username}</h5>

        <ul>

        <li><i class="fa fa-check"></i>${user.providerStat.numHire} ${user.providerStat.skill} Service</li>
        <li><i class="fa fa-star"></i>100% Positive reviews</li>
        </ul>
        </div>

        </div>
        </div>
        </div>
        
        <div class="card cards2" id="cardeas">
        <div class="row">
        <div class="col-md-6">
        
                    <div class="card-body">

            
                <h4>About me</h4>
                <hr>
                <ul>
                <li><i class="fas fa-map-marker-alt"></i> &nbsp; Working in ${user.address}</li>
                <li><i class="fa fa-check"></i>ID verified</li>
                <li><i class="fa fa-star"></i>Provider since 2020</li>
                </ul>

               
            
            
            </div>
            </div>
            <div class="col-md-6">
            <button class="btn btn-danger findtop help" id="hireBtn">Hire</button>
            </div>
            </div>
        </div>
    
    `;

    specificProv.appendChild(dataContent1);
    dataContent2 = document.createElement('div');
    dataContent2.className = 'col-md-6';
    const reviews = user.providerStat.reviews;
    let custom1;
    reviews.forEach(review => {
        custom1 = document.createElement('div');
        custom1.className = "card cards3";
        custom1.innerHTML = `
                    
        <div class="card-body">

          <h4>${review.reviewer}</h4>
          <p><i class="fa fa-star"></i>${review.reviewRating}</p>

          <p>${review.reviewMessage}</p>
        
        </div>
      </div>`;
        dataContent2.appendChild(custom1);

    });



    specificProv.appendChild(dataContent2);
    hireBtn = document.querySelector('#hireBtn');

    hireBtn.addEventListener('click', hire);
});



function hire() {
    let newOrder;
    let userId = localStorage.getItem('userId');
    if (userId) {
        newOrder = {
            orderId: Date.now(),
            providerId: selectedProvider.id,
            userId: parseInt(userId),
            review: {},
            isComplete: false,
            isAccepted: false,
            isDeclined: false,
            isPending: true,
            isReviewing: false,
        }

        if (confirm('Are You Sure you want to hire that provider ?')) {
            addNewOrder(newOrder).then(function (order) {
                getUserInfo({ id: newOrder.providerId }).then(function (provider) {
                    provider.tasks.push({
                        orderId: newOrder.orderId,
                        userId: newOrder.userId,

                    });

                    update(provider.id, provider).then(function () {
                        getUserInfo({ id: newOrder.userId }).then(function (user) {
                            user.orders.push({
                                orderId: newOrder.orderId,
                                providerId: newOrder.providerId,
                            })

                            update(user.id, user).then(function () {
                                alert(`${provider.username} will contact you shortly`);
                                window.location.href = `account.html?id=${user.id}`;
                            });

                        });
                    });


                });
            });

        } else {
            removeOrder(orderId);
        }

    } else {
        window.location.href = `authOption.html?providerId=${selectedProvider.id}`;

    }

};

function processOrder(orderId) {

    console.log(orderId);
    getOrderInfo({ orderId }).then(function (order) {
        console.log(order);
    });
    getUserInfo({ id: order.providerId }).then(function (provider) {
        console.log(provider);
    });
}
