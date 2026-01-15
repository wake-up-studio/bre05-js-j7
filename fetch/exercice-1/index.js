let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/15"
);

fetch(url)
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(err => console.error(err));