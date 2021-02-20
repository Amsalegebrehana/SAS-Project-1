let db = new Dexie("provider_database");
    db.version(1).stores({
        providers : "++id,title, reviews, desc, date, price"
    });
    
    
    db.providers.where("id").above(0).sortBy("date").then(arr => arr.slice(0, 3));


    


    function addNewUser(e) {
        e.preventDefault();

        let newUser = {
            date: Date.now(),
            username: fullName.value,
            email: email.value,
            password: password.value,
            address: address.value,
            isLoggedIn: true,
            orders: []
        }

        db.users.put(newUser).then(function () {
            signUpForm.reset();
          
        });



    }