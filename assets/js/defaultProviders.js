let angelina = {
    id: Date.now(),
    SASVerified: true,
    username: 'Angelina Frederic',
    email: 'angelina@test.com',
    password: '1234',
    address: 'Addis Ababa',
    isLoggedIn: true,
    orders: [],
    tasks: [],
    phoneNumber: '+251911111111',
    isProvider: true,
    providerStat: {
        description: 'Talented Errand Runner',
        skill: 'Errand Runner',
        price: "$27/hr",
        level: '',
        rating: 0,
        reviews: [{
            reviewer: 'SAS',
            reviewRating: 5.0,
            reviewMessage: 'I expected anything less than perfect for the team of experts. They are the best team ever!'
        }],
        fileUrl: '',
        numHire: 0
    },
    imageUrl: 'data:image/jpeg;base64,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',
    isAdmin: false,
}

let jackson = {
    id: Date.now(),
    SASVerified: true,
    username: 'Jackson Totham',
    email: 'jackson@test.com',
    password: '1234',
    address: 'Addis Ababa',
    isLoggedIn: true,
    orders: [],
    tasks: [],
    phoneNumber: '+251911111112',
    isProvider: true,
    providerStat: {
        description: 'A marketing consultant good at his job',
        skill: 'Marketing Consultant',
        price: "$27/hr",
        level: '',
        rating: 0,
        reviews: [{
            reviewer: 'SAS',
            reviewRating: 5.0,
            reviewMessage: 'I really enjoyed working with them, they are Group of Professionals and they know what they are Doing',
        }],
        fileUrl: '',
        numHire: 0
    },
    imageUrl: 'data:image/jpeg;base64,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',
    isAdmin: false,
}

let david = {
    id: Date.now(),
    SASVerified: true,
    username: 'David Gregory',
    email: 'david@test.com',
    password: '1234',
    address: 'Addis Ababa',
    isLoggedIn: true,
    orders: [],
    tasks: [],
    phoneNumber: '+251911111112',
    isProvider: true,
    providerStat: {
        description: 'Resident DJ',
        skill: 'DJ',
        price: "$27/hr",
        level: '',
        rating: 0,
        reviews: [{
            reviewer: 'SAS',
            reviewRating: 5.0,
            reviewMessage: 'I always wanted cool videos of my concerts never knew whom to talk to but they are amazing!',
        }],
        fileUrl: '',
        numHire: 0
    },
    imageUrl: 'data:image/jpeg;base64,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',
    isAdmin: false,
}


let cats = ['Electrician', 'Mechanic', 'Painting', 'Delivery', 'Cleaning', 'Construction'];
let defProvs = [];
cats.forEach(cat => {
    let newProv
    for (let index = 0; index < 5; index++) {
        newProv = {
            id: Date.now(),
            username: `${cat}${index}`,
            email: `${cat}${index}@test.com`,
            password: '1234',
            address: 'Addis Ababa',
            isLoggedIn: true,
            orders: [],
            tasks: [],
            phoneNumber: '+251911111111',
            isProvider: true,
            providerStat: {
                description: 'As a dedicated professional with many years of experience working , I am confident in my ability to provide the service you need',
                skill: `${cat}`,
                price: "$27/hr",
                level: '',
                rating: 0,
                reviews: [{
                    reviewer: 'SAS',
                    reviewRating: 5.0,
                    reviewMessage: 'I expected anything less than perfect for the team of experts. They are the best team ever!'
                }],
                fileUrl: '',
                numHire: 0,
            },
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLySM-E-G7RYXuJa_oo_HpAMgge9ZAHzlAeSYvSHsTegHI6o_VSyTDqVdrB-D6ct1CTs&usqp=CAU',
            isAdmin: false,
        }

        defProvs.push(newProv);

    }



});
