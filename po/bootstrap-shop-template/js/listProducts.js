var ajaxRequest = new XMLHttpRequest();

ajaxRequest.onreadystatechange = function(){
	console.log("Ready state changed!");
    if(ajaxRequest.readyState == 1){
		console.log("Established server connection.");
	}
	else if(ajaxRequest.readyState == 2){
		console.log("Request received by server.");
	}
	else if(ajaxRequest.readyState == 3){
		console.log("Processing request.");
	}
	else if(ajaxRequest.readyState == 4){
		console.log("Done loading!");
	}
	else{
		console.log("Something went wrong. :(");
	}
	//more on this in a second
}

ajaxRequest.open("POST", "http://localhost:8080/api/v1/users", true);
ajaxRequest.send();

var ajaxPost = new XMLHttpRequest();

ajaxPost.onreadystatechange = function(){
    var createNewUser = {
        "firstName" : "",
        "lastName" : "",
        "idNumber" : "",
        "email" : "",
        "username" : "",
        "mobileNumber" : "",
        "password" : ""
    }
}
