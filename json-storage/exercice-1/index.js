document.addEventListener("DOMContentLoaded", function(){
    let name = "Harry Bow";
    
    JSON.stringify(name);
    
    localStorage.setItem(name);
    sessionStorage.setItem(name);
    
});

