var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");
console.log(txtInput)

var testserverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/valyrian.json"

function errorHandler(error){
    console.log("error occured",error)
    alert("server responding with an error!!")
}

function getRequestUrl(text){
    return serverUrl + "?" + "text=" + text

}

function clickHandler(){
    fetch(getRequestUrl(txtInput.value))
    .then(Response => Response.json())
    .then(json => {
        txtOutput.innerText = json.contents.translated
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)