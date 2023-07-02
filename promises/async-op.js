function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`Making request to ${location}`)
        if (location == "Google"){
            resolve("Hi Google!")
        } else {
            reject("We can only talk to Google")
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log("Processing response")
        resolve(`Extra information + ${response}`)
    })
}

async function doWork(){
    try {
        const response = await makeRequest('Facebook')
        console.log("Response received")
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err){
        console.log(err)
    }
}

doWork()