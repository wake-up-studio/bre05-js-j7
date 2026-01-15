let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            
            let body = document.querySelector("body");
            let table = document.createElement("table");
            
            body.appendChild(table);

            for(let i=0; i<data.data.length; i++){
                let tr = document.createElement("tr");
                
                table.appendChild(tr);
                    for(let x=0; x<4; x++){
                        let td = document.createElement("td");
                        let id = document.createTextNode(data.data[i].id);
                        let username = document.createTextNode(data.data[i].username);
                        let names = document.createTextNode(data.data[i].firstName + " " + data.data[i].lastName);
                        let email = document.createTextNode(data.data[i].email);
                            
                            if(x===0){
                                td.appendChild(id);
                                tr.appendChild(td); 
                            }
                            else if(x===1){
                                td.appendChild(username);
                                tr.appendChild(td);
                            }
                            else if(x===2){
                                td.appendChild(names);
                                tr.appendChild(td);
                            }
                            
                            else{
                                td.appendChild(email);
                                tr.appendChild(td);
                            }
                    }
            }
            
        })
        .catch(err => console.error(err));
});