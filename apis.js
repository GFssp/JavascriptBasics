const myArray = ["eat", "sleep", "code"]

const myObject = {
    name: "Dave",
    hobbies:  ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
}

// Session Storage
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray))
const mySessionStore = JSON.parse(sessionStorage.getItem("mySessionStore"))
console.log(mySessionStore)

// Persisted data - Local Storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray))
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))

//localStorage.removeItem("myLocalStore"); // Delete data from session storage
//localStorage.clear();

console.log(key)