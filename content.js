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
chrome.runtime.sendMessage({start: "ok"}, function(response) {
    console.log(response.farewell);
});
*/

var url;
var contents;
var rangeObject;
var closestId;
var media_type;

$(document).mousedown(function(event) {

    switch (event.which) {
        case 3:

            url = window.location.href;

            // Contents
            if (window.getSelection()) {
                contents = window.getSelection();
            } else {
                contents = "Empty";
            }

            rangeObject = contents.anchorNode;
            closestId = $(rangeObject).closest('[id]').attr('id');
            media_type = event.target.nodeName;
            contents = contents.toString();

            //console.log("closestId " + typeof closestId);
            //console.log("url " +typeof url);
            //console.log("contents " +typeof contents);
            //console.log("media_type" + Object.keys(this));
            //console.log("media_type: " +typeof event.target.nodeName);
            break;
    }
});

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
   if (message.popup) {

       // Grey area
       var newDiv = document.createElement("div");
       document.body.appendChild(newDiv);
       newDiv.style.width = "200px";
       newDiv.style.height = "200px";
       newDiv.style.backgroundColor = "grey";
       newDiv.className = "ChunkInfo";
       newDiv.style.position = "absolute";
       newDiv.style.top = 0;
       newDiv.style.right = 0;

       // Form
       var chunkForm = document.createElement("form");
       newDiv.appendChild(chunkForm);

       // Concept
       var conceptText = document.createElement("b");
       conceptText.innerHTML = "Concept";
       chunkForm.appendChild(conceptText);
       var conceptArea = document.createElement("textarea");
       conceptArea.style.rows =  "3";
       conceptArea.style.cols =  "60";
       chunkForm.appendChild(conceptArea);

       // Parent
       var parentText = document.createElement("b");
       parentText.innerHTML = "Parent";
       chunkForm.appendChild(parentText);
       var parentArea = document.createElement("textarea");
       parentArea.style.rows =  "3";
       parentArea.style.cols =  "60";
       chunkForm.appendChild(parentArea);

       // Medium type
       var instructionSelect = document.createElement("select");
       instructionSelect.name = "instruction_type";
       var instructionOption1 = document.createElement("option");
       var instructionOption2 = document.createElement("option");
       instructionOption1.value = "theory";
       instructionOption2.value = "practice";
       instructionOption1.innerHTML = "Theory";
       instructionOption2.innerHTML = "Practice";
       instructionSelect.appendChild(instructionOption1);
       instructionSelect.appendChild(instructionOption2);
       chunkForm.appendChild(instructionSelect);

       // Submit button
       var chunkButton = document.createElement("button");
       chunkButton.innerHTML = "My Button";
       chunkForm.appendChild(chunkButton);

       chunkButton.onclick = function () {
           chrome.runtime.sendMessage({to_server: true,
                   concept: conceptArea.value,
                   parent: parentArea.value,
                   instruction_type: instructionSelect.value,
                   media_type: media_type,
                   contents: contents,
                   url: url,
                   closestId: closestId
               }
           );
       };
   }
});


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