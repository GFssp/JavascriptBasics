"use strict";
const variable = "Gui"

const makeError = () => {
    try{
        throw new customError("This is a custom error")
        //const name = "Guilherme"
        //name = "Guilherme"
    } catch(err){
        console.error(err.name);
    } finally {
        console.log("...finally")
    }
}
makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}