document.addEventListener("DOMContentLoaded", function(){
let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let data = sessionStorage.getItem(user);

    if(data){
        let userJSON = JSON.stringify(user);
        sessionStorage.setItem("user", userJSON);
    }
    else{
        let jsonUser = sessionStorage.getItem("user");
        let newUser = JSON.parse(jsonUser);
        console.log(newUser);
    }
});