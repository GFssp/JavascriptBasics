// Promises
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error){
        resolve("Yes! resolved the promise!");
    } else {
        reject("No! rejected the promise")
    }
})

console.log(myPromise)

myPromise.then(value => {
    return value + 1;
}).then(newValeu => {
    console.log(newValeu)
}).catch(err => {
    console.log(err)
})

// Timeout
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("myNextPromise resolved");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
})

// FETCH

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    }).then(data => {
        //console.log(data);
        data.forEach(user => {
            console.log(user)
    })
})

// this line runs first (pending) withoud await
// console.log(users); 

// ASYNC / AWAIT
console.log("----------")

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    return jsonUserData
}

const anotherfunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
}

anotherfunc();
console.log(myUsers.userList) // Empty list

console.log("-------------------")

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArray = jsonUserData.map(user => {
        return user.email
    })

    //console.log(userEmailArray)
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data)
}

//console.log(getAllUserEmails()); // Returns pending only
getAllUserEmails();

// FETCH 2nd parameter
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonJokeData = await response.json()
    console.log(jsonJokeData)
}

getDadJoke()

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&
    lastName=${lastName}`)
    const jsonResponse = await response.json()
    console.log(jsonResponse.value.joke)
}

requestJoke("Bruce", "Lee")