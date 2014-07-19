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

    console.log(links.length, divs.length, headers.length);

    var imageUrl = chrome.extension.getURL("icons/comments_icon.png");

    function PlaceImage(source_x, source_y, imageUrl) {
        var newImage = document.createElement("a");
        newImage.setAttribute("href", "http://www.google.com/");
        var textNodeArgument = "<img src='" + imageUrl + "'>";
        //newImage.createTextNode(textNodeArgument);

        newImage.innerHTML = textNodeArgument;

        document.body.appendChild(newImage);

        // This part will set an image position. The function should retrieve pos x and y of a source element as arguments.

        newImage.style.position = "absolute";
        newImage.style.left = source_x + 'px';
        newImage.style.top = source_y + 'px'

        //newImage.setAttribute("src", imageUrl);

        // This part is done with getBoundingClientRect()
        /*
        var imagePosition = newImage.getBoundingClientRect();
        imagePosition.left = source_x;
        imagePosition.top = source_y;
        */

        //var image_y = imagePosition.top;
        //image_x = source_x;
        //image_y = source_y;
    }

    // Links
    // TO-DO: make small icons to pop-up in the left, top corner of each element
    for(var i=0; i<links.length; i++) {
        //links[i].style.border = true;
        //links[i].style.borderWidth = "20";

    }

    // Divs
    for(var j=0; j<divs.length; j++) {
        //divs[j].style.border = true;
        //divs[j].style.borderWidth = "20";
        //divs[j].style.background = "green";
        // Color the element
        //divs[j].style.background = "blue";

        // Get the position of an element with 'style'
        //var x = links[i].style.left;
        //var y = links[i].style.top;
        //var x = i;
        //var y = i;

        // Get the position of an element with getBoundingClientRect

        var position = divs[j].getBoundingClientRect();
        var x = position.left;
        var y = position.top;
        y -=32;


        // Create comment image
        PlaceImage(x, y, imageUrl);

        //links[i].style.position = "absolute";
        console.log('x: ', x, 'y: ', y);
    }

    // Headers
    for(var k=0; k<headers.length; k++) {
        //headers[k].style.background = "red";
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