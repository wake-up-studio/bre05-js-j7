let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let body = document.querySelector("body");
            let h1 = document.createElement("h1");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
    
            let h1Text = document.createTextNode(data.data.username);
            let h2Text = document.createTextNode(data.data.firstName + " " + data.data.lastName);
            let h3Text = document.createTextNode(data.data.email);
            
            h1.appendChild(h1Text);
            h2.appendChild(h2Text);
            h3.appendChild(h3Text);
            
            body.appendChild(h1);
            body.appendChild(h2);
            body.appendChild(h3);
        })
        .catch(err => console.error(err));
});