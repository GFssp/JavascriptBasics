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

makeRequest("Google").then(response => {
    console.log("Response received")
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse)
})

makeRequest('Facebook').then(response => {
    console.log("Response received")
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse)
}).catch(err => {
    console.log(err)
})

/* response é o parâmetro da função de retorno do primeiro .then(). Nesse caso, response representa o valor resolvido pela primeira 
promessa retornada pela função makeRequest("Google"). No seu exemplo, esse valor é uma string "Hi Google!".
Quanto ao processResponse, ele é o parâmetro da função de retorno do segundo .then(). 
Essa função é chamada assim que a segunda promessa, retornada por processRequest(response), for resolvida.
Lembre-se de que as funções .then() permitem encadear operações assíncronas em JavaScript. 
Cada .then() recebe o valor resolvido pela promessa anterior como parâmetro da função de retorno. 
Isso permite que você realize operações adicionais com base nos resultados anteriores.

No código em questão, o fluxo é o seguinte:

    makeRequest("Google") cria uma promessa e a executa.
    Quando a promessa é resolvida, a função de retorno do primeiro .then() é chamada, e o valor resolvido é passado como parâmetro para essa função (no caso, response).
    Dentro dessa função, é exibida a mensagem "Response received" e a função processRequest(response) é chamada, retornando uma nova promessa.
    Quando a segunda promessa é resolvida, a função de retorno do segundo .then() é chamada, e o valor resolvido é passado como parâmetro para essa função (no caso, processResponse).
    Dentro dessa função, é exibido o valor processResponse.

Essa sequência de chamadas encadeadas permite lidar com o fluxo assíncrono de operações, 
processando os resultados passados de uma etapa para outra.Certifique-se de que as funções makeRequest() e processRequest() 
estejam retornando promessas corretamente para que o encadeamento com .then() funcione conforme esperado. */