chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    //console.log(my_url);

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
        newImage.src = imageUrl;
        //newImage.innerHTML = textNodeArgument;

        // Assigning a position of the comments_icon
        newImage.style.position = "absolute";
        newImage.style.left = source_x + 'px';
        newImage.style.top = source_y + 'px';

        // Assigning a class name
        newImage.className = "blinkk";



        // Open a messaging window on click


        // Add an element to the HTML document
        document.body.appendChild(newImage);

        newImage.click(function () {
            console.log("hello");
        });

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

        // Assign an ID to an element
        id = "location" + "div" + j;
        setAttributes(divs[j], {"ab_id": id});

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

// Adds several attributes to a single HTML element - Helper function
function setAttributes(element, attributes) {
    for(var attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
}

// Adds several styling attributes to a single HTML element - Helper function

function setStylingAttributes(element, stylingAttributes) {
    for(var attribute in stylingAttributes) {
        element.style.setProperty(attribute, stylingAttributes[attribute]);
    }
}

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
                                   "color": "dodgerblue",
                                   // For some reason not all Attributes work. Eg. background-color doesn't work
                                   "background-color": "dogerblue",
                                   "border": "5px",
                                   "borderStyle": "solid",
                                   "borderWidth": "5px",
                                   "borderColor": "black",
                                   "zIndex": "99"
    });

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

    //newChat.innerHTML = "<p>People online:</p>";
    document.body.appendChild(newChat);
}

/*

function testingFunction(info, tab) {
    console.log("Testing is OK!");
    console.log(info + "a" + tab);
}

*/

chrome.runtime.sendMessage({start: "ok"}, function(response) {
    console.log(response.farewell);
});

var url;
var contents;
var rangeObject;
var closestId;

$(document).mousedown(function(event) {
    //var contents = this.innerHTML;
    //var contents = "contents text";


    //alert(rangeObject);

    /*

    var userSelection;
    if (window.getSelection) {
        userSelection = window.getSelection();
    }
    else if (document.selection) { // should come last; Opera!
        userSelection = document.selection.createRange();
    }


    if ($(this).closest('[id]').getAttribute('id')) {
        var closestId = $(this).closest('[id]').attr('id');
    }   else {
        var closestId = "N/A";
    }
    */


    switch (event.which) {
        case 3:

            url = window.location.href;
            contents = window.getSelection();
            rangeObject = contents.anchorNode;
            closestId = $(rangeObject).closest('[id]').attr('id');

            console.log("closestId " + closestId);
            console.log("url " + url);
            console.log("contents" + contents);


            chrome.runtime.sendMessage({contents: contents.toString(), url: url, closestId: closestId}, function(response) {
                console.log(response.farewell);
            });


            break;
    }
});

/*

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
     if (message.contentInfo) {
         chrome.runtime.sendMessage({contents: contents.toString(), url: url, closestId: closestId}, function(response) {
             console.log(response.farewell);
         });
     }
});

*/

var newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.backgroundColor = "red";
newDiv.className = "blinkkk";

$(".blinkkk").click(function () {
    console.log("JU");
    createChat();
    //document.getElementById('dialog').dialog();
    //$('#dialog').dialog();
});

/*

// Channel API Implementation

sendMessage = function(path) {
    path += "path"; // This should be a path which will be sent by xhr
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.send();
}

onOpened = function() {
    sendMessage('/opened');
}

onMessage = function(m) {
    newState = JSON.parse(m.data);
    // in the original one this was mainly state update and updateGame() call
}

openChannel = function() {
    var token = '{{ token }}';
    var channel = new goog.appengine.Channel(token);
    var handler = {
        'onopen': onOpened,
        'onmessage': onMessage,
        'onerror': function() {},
        'onclose': function() {}
    };
    var socket = channel.open(handler);
    socket.onopen = onOpened;
    socket.onmessage = onMessage;
}

initialize = function() {
    openChannel();
    onMessage({data: '{{ initial_message }}'});
}

setTimeout(initialize, 100);

*/