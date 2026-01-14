let url = "https://corsproxy.io/" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);

let formData = new FormData();
    formData.append('username', "DogDock");
    formData.append('firstName', "Gurvan");
    formData.append('lastName', "Leroy");
    formData.append('email', "gurvan.leroy@3wa.io");

let body = {
    method: 'POST',
    body: formData
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: formData
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));