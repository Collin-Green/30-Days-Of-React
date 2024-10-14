//1.
const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [10000],
    expenses: [5000],
    totalIncome: function () {
        return this.incomes.reduce((a, b) => {return a + b});
    },
    totalExpense: function () {
        return this.expenses.reduce((a,b) => {return a + b});
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}\nIncomes: ${this.incomes}\nExpenses: ${this.expenses}`;
    },
    addIncome: function (income){
        this.incomes.push(income);
    },
    addExpense: function (expense){
        this.expenses.push(expense);
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
}

console.log(personAccount.accountInfo());
personAccount.addIncome(50000);
personAccount.addExpense(40000);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

//2.
const users = [
{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
},
]
  
const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
},
]

//a.
function signUp(new_user){
    for (let user of users){
        if (user._id === new_user._id){
            console.log('User already exists');
            return;
        }
    }
    console.log('You have been signed up');
    users.push(new_user);
}

function signIn(username, password){
    for (let user of users){
        if (user.username == username && user.password == password){
            if (user.isLoggedIn != true){
                user.isLoggedIn = true;
                console.log('You are logged in');
                return;
            }
            else{
                console.log('You are already logged in');
                return;
            }
        }
    }
    console.log('Your username or password are incorrect');
}

const new_user = {
    _id: 'agadglka',
    username: 'cjgreen',
    email: 'collin@collin.com',
    password: '12345',
    createdAt: '10/10/2024 11:33 PM',
    isLoggedIn: false
}
console.log(users);
signIn('cjgreen', '12345');
signUp(new_user);
console.log(users);
signIn('cjgreen', '12345');
signIn('cjgreen', '12345');

//3.a
function rateProduct (productId, uId, rate){
    for (let product of products){
        if (product._id === productId){
            //Check all userIDs to update instead of duplicate
            let dupFlag = false;
            for (let rating of product.ratings){
                if (rating.userId === uId){
                    dupFlag = true;
                    rating.rate = rate;
                    break;
                }
            }
            if (!dupFlag){
                const new_rating = {
                    userId: uId,
                    rate: rate
                };
                product.ratings.push(new_rating);
            }
            console.log(`Product: ${product.name}'s rating updated`);
            return;
        }
    }
    console.log(`Could not find ${productId}`);
    return;
}
//3.b
function averageRating (productId){
    for (let product of products){
        if (product._id === productId){
            let sum = 0;
            for (let rating of product.ratings){
                sum += rating.rate;
            }
            return sum / product.ratings.length;
        }
    }
    console.log(`Could not find ${productId}`);
    return -1;
}

//testing 3
console.log(averageRating('eedfcf'));
rateProduct('eedfcf', 'fg13cy', 10);
console.log(averageRating('eedfcf'));
console.log(averageRating('alghdsalghalg'));
rateProduct('aegfal', 'agagagsdfa', 5);
console.log(averageRating('aegfal'));
console.log(averageRating('hedfcg'));
rateProduct('hedfcg', 'fg12cy', 2);
console.log(averageRating('hedfcg'));

//4.
function likeProduct(productId, userId){
    for (let product of products){
        if (product._id === productId){
            const loc = product.likes.indexOf(userId);
            if (loc !== -1){
                product.likes.splice(loc, 1);
                console.log(`${product.name} unliked`);
                return;
            }
            product.likes.push(userId);
            console.log(`${product.name} liked`);
            return;
        }
    }
    console.log(`Product Id: ${productId} could not be found`);
    return;
}

//4. Testing
console.log(products[2].likes);
likeProduct('hedfcg', 'fg13cy');
console.log(products[2].likes);
likeProduct('hedfcg', 'fg12cy');
console.log(products[2].likes);
likeProduct('hedfcg', 'fg12cy');
console.log(products[2].likes);