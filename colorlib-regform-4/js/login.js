var pageCounter = 1;
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var api = 'http://localhost:8181/api/v1/users/findByEmail/' + email;
    console.log(email);
    console.log(password);
    var ajaxFindByEmail = new XMLHttpRequest();
    ajaxFindByEmail.open('GET', api);
    ajaxFindByEmail.onload = function () {
        if (ajaxFindByEmail.status >= 200 && ajaxFindByEmail.status < 400) {
            var ourData = JSON.parse(ajaxFindByEmail.responseText);
            console.log(password);
            console.log(ourData.password);
            if (password == ourData.password) {
                console.log("It works");
            }
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ajaxFindByEmail.onerror = function () {
        console.log("Connection error");
    };

    ajaxFindByEmail.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});