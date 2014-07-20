chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    console.log(my_url);

    // The following part is a retrieval of data from the server. Most likely will be replaced by GAE Network API
    //$.get("http://www.google.pl/", function(data, textStatus)
    //{
    //    alert("Done, with the following status: " + textStatus + ". Here is the response: " + data);
    //});

    // Selecting HTML tags
    var links = document.getElementsByTagName("a");
    var divs = document.getElementsByTagName("div");
    var headers = document.getElementsByTagName('h2');

    // Creating a full URL to allow using comments_icon
    var imageUrl = chrome.extension.getURL("icons/comments_icon.png");

    // Function to create a possibility to start commenting on an element
    function PlaceImage(source_x, source_y, imageUrl) {

        var newImage = document.createElement("img");
        //var textNodeArgument = "<img src='" + imageUrl + "'>";

        // TO-DO: The link should point to a specific commenting place which will be fetched from a database
        //newImage.setAttribute("href", "http://www.google.com/");
        newImage.className = "blink";
        newImage.src = imageUrl;
        //newImage.innerHTML = textNodeArgument;

        // Add an element to the HTML code
        document.body.appendChild(newImage);

        // Assigning a position of the comments_icon
        newImage.style.position = "absolute";
        newImage.style.left = source_x + 'px';
        newImage.style.top = source_y + 'px'

    }

    // Links
    for(var i=0; i<links.length; i++) {
        //links[i].style.border = true;
        //links[i].style.borderWidth = "20";

    }

    // Divs
    for(var j=0; j<divs.length; j++) {
        // Color the element
        //divs[j].style.background = "blue";

        // Get the position of an element with getBoundingClientRect
        var position = divs[j].getBoundingClientRect();
        var x = position.left;
        var y = position.top;
        y -=32;

        // Create comment image
        PlaceImage(x, y, imageUrl);
    }

    // Headers
    for(var k=0; k<headers.length; k++) {
        //headers[k].style.background = "red";
    }


    // Debugging
    //console.log(links.length, divs.length, headers.length);
    //console.log('x: ', x, 'y: ', y);

});


// THIS PART IS FOR THE ACTUAL COMMENTING FUNCTIONALITY

//var blinks = document.querySelector(".blink").on

// Adds several attributes to a single HTML element - Helper function
function setAttributes(element, attributes) {
    for(var attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
}



// TO-DO: rewrite this function using the information from the StackOverflow question
// Adds several styling attributes to a single HTML element - Helper function
// http://stackoverflow.com/questions/24854692/whats-wrong-with-newchat-style-setattributewidth-100px-in-content-scrip?noredirect=1#24854880

function setStylingAttributes(element, stylingAttributes) {
    for(var attribute in stylingAttributes) {
        element.style.setProperty(attribute, stylingAttributes[attribute]);
    }
}

/*
function setStylingAttributes(element, stylingAttributes) {
    for(var attribute in stylingAttributes) {
        element.style.setAttribute(attribute, stylingAttributes[attribute]);
    }
}
*/

// Create a chat window
function createChat() {
    var newChat = document.createElement("div");

    setAttributes(newChat, {"id": "dialog",
                            "title": "Basic dialog",
                            "display": "none"
    });

    setStylingAttributes(newChat, {"width": "300px",
                                   "height": "700px",
                                   "position": "absolute",
                                   "top": "0",
                                   "right": "0",
                                   "backgroundColor": "white",
                                   "borderStyle": "solid",
                                   "borderWidth": "5",
                                   "borderColor": "black",
                                   "zIndex": "99"
    });

    /*
    newChat.style.width = "300px";
    newChat.style.height = "700px";
    newChat.style.position = "absolute";
    newChat.style.top = "0";
    newChat.style.right = "0";
    newChat.style.backgroundColor = "white";
    newChat.style.borderWidth = "5";
    newChat.style.borderColor = "black";
    */

    //newChat.style.zIndex = "999";

    var user1 = chrome.extension.getURL("icons/user1.jpg");
    var user2 = chrome.extension.getURL("icons/user2.jpg");
    var user3 = chrome.extension.getURL("icons/user3.jpg");

    var myHTML = [
            '<h1>People online:</h1><hr>',
            '<p>Michał Piechnik</p>',
            '<img src="' + user1 + '">',
            '<hr>',
            '<p>Maria Velazquez</p>',
            '<img src="' + user2 + '">',
            '<hr>',
            '<p>Jose Carlos Mandana</p>',
            '<img src="' + user3 + '">',
            '<hr>',
            '<button id="button">Who is here?</button>'
    ].join('\n');

    newChat.innerHTML = myHTML;

    /*

    //newChat.style.setAttribute("width", "100px");
    //setAttribute("width", "100px");
    //newChat.style.setAttribute("position", "absolute");

    /*

    setStylingAttributes(newChat, {"width": "100px",
                                   "position": "absolute"
    });

    */

    //newChat.setAttribute("id", "dialog");
    //newChat.setAttribute("title", "Basic dialog");
    //newChat.setAttribute("display", "none");

    //newChat.innerHTML = "<p>People online:</p>";
    document.body.appendChild(newChat);
}

$(document).ready(function () {
    $(".label-key").click(function () {
        createChat();
        //document.getElementById('dialog').dialog();
        //$('#dialog').dialog();
    });
});



// Rewriting

/*

var startingComments =  {

    onReady: function() {
        $(".label-key").click(function(){
            var my_test = chrome.extension.getBackgroundPage().getElementById("dialog");
            //$('#dialog').dialog();
            console.log(my_test);
        })
    }


    };

$( document).ready( startingComments.onReady );

*/

/*

// BETTER
var PI = {

    onReady: function() {
        $( "#magic" ).click( PI.candyMtn );
        $( "#happiness" ).load( PI.url + " #unicorns", PI.unicornCb );
    },

    candyMtn: function( event ) {
        $( "#yayeffects" ).slideUp( PI.slideCb );
    },

    slideCb: function() { ... },

    unicornCb: function() { ... }

};

$( document ).ready( PI.onReady );

*/

/*

$(document).ready.$(".label-key").click(function() {
    // Testing
    console.alert("Hello there");

    // Holds the product ID of the clicked element
    //var productId = $(this).attr('class').replace('addproduct ', '');

    //addToCart(productId);
});

*/

/*

$(function() {
    $( ".dialog" ).dialog();
});

*/

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