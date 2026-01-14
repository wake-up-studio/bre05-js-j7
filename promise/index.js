function major (age){
    return new Promise((resolve, reject)=>{
        if(age>=18){
            resolve("Autorisation accordée");
        }
        else{
            reject("Autorisation refusée");
        }
    });
}

major(42)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));
    
major(16)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));