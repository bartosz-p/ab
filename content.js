chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    //var my_selector = document.querySelector("#main-header");
    //my_selector.style.background = "red";
    //my_selector.style.borderColor = "red";
    //my_selector.style.borderWidth = 20;
    //alert(message.type);
    //$('a').css({'background-color': 'red'});
    console.log(my_url);

    // The following part is a retrieval of data from the server. Most likely will be replaced by GAE Network API
    //$.get("http://www.google.pl/", function(data, textStatus)
    //{
    //    alert("Done, with the following status: " + textStatus + ". Here is the response: " + data);
    //});

    //Selecting HTML tags
    var links = document.getElementsByTagName("a");
    var divs = document.getElementsByTagName("div");
    var headers = document.getElementsByTagName('h2');

    console.log(links.length, divs.length, headers.length)

    // Links
    for(var i=0; i<links.length; i++) {
        //links[i].style.border = true;
        //links[i].style.borderWidth = "20";
        links[i].style.background = "blue";
    }

    // Divs
    for(var j=0; j<divs.length; j++) {
        //divs[j].style.border = true;
        //divs[j].style.borderWidth = "20";
        divs[j].style.background = "green";
    }

    // Headers
    for(var k=0; k<headers.length; k++) {
        headers[k].style.background = "red";
    }

});



/*

chrome.extension.onMessage.addListener(function(message, sender, sendRespone) {
    var links = document.getElementsByTagName("a");
    //var images = document.getElementsByTagName("img");
    var divs = document.getElementsByTagName("div");
    //var lists = document.getElementsByTagName("ul");
    //var listElements = document.getElementsByTagName("li");

    // Links
    for(var i=0; i<links.length; i++) {
        divs[i].style.backgroundColor = "red";
    }

    // Divs
    for(var j=0; j<divs.length; j++) {
        divs[j].style.backgroundColor = "blue";
    }
    console.log(message.type);
});

/*

/*

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	}
});

*/