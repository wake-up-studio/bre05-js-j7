let url = "https://maridoucet.sites.3wa.io/user-api/users/15";

fetch(url)
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(err => console.error(err));