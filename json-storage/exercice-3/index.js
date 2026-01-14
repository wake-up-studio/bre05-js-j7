let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function(){
    let string = JSON.stringify(data);
    console.log(string);
    
    let parse = JSON.parse(string);
    console.log(parse);
});