const simpleFunction = (name, age) => {
    if (age < 18){
        console.log("You are not allowed here")
    } else {
        if (name.trim().toLowerCase() === "guilherme"){
            console.log("Welcome admin!")
        } else {
            if (!name){
                console.log("Invalid username")
            } else {
                console.log("Welcome guess")
            }
        }
    }
}

const getUserFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"))
}

let username = prompt("Name: ");
let age = prompt("Age: ");
simpleFunction(username, age)
console.log(getUserFromEmail("playerOne@gmail.com"))