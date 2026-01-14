let data = sessionStorage.getItem("username");

function createUsername (){
    if(data===null){
        let username = window.prompt("Entrez votre pseudo");
        JSON.stringify(username);
        sessionStorage.setItem("username", username);
    }
}

function alertUsername (){
    if(data !== null){
        window.alert(sessionStorage.getItem("username"));
    }
}

window.addEventListener("DOMContentLoaded", function(){
    createUsername();
    alertUsername();
});