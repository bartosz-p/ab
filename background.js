
chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.start == "ok") {
        var parentTest = chrome.contextMenus.create({"id": "myContextMenu","title": "Chunk it!", "contexts":["all"],
            "onclick": function testingFunction(info, tab) {
                // TO-DO: This function should be called when clicked on ContextMenu
                alert("This should not show up");
            }});
    }
});

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.greet) {
        chrome.contextMenus.onClicked.addListener(function testFunc2(info, tab){
                // TO-DO: Here, we are going to send data to server in order to save it to a database

                //var data={"name": message.greet};
                var data={"name": "5113880120393728"};

                $.ajax({
                    url: 'http://www.edu-atoms.appspot.com/comments_admin',
                    type: 'POST',
                    data: data,
                    dataType: 'json',
                    success: function(data,status){
                        alert(data.name);
                        alert("Data" + data +"status"+status);
                    }
                });

                /*

                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://www.edu-atoms.appspot.com/", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        // innerText does not let the attacker inject HTML elements.
                        //document.getElementById("resp").innerText = xhr.responseText;
                        var resp = xhr.responseText;
                        resp = resp[:10];
                        alert(resp);
                    }
                };
                xhr.send();

                */
            }
        )
    }
});




// Create a Context Menu

/*
chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {


    switch (true) {
        case Boolean(message.start) != Boolean(message.greet):
            var parentTest = chrome.contextMenus.create({"id": "myContextMenu","title": "Chunk it!", "contexts":["all"],
                "onclick": function testingFunction(info, tab) {
                    // TO-DO: Here, we are going to send data to server in order to save it to a database
                    alert("Only start");
                    alert(" " + message.start + " " + message.greet);
                }});
            break;
        case message.start && message.greet:
            alert("Both start and greeting");
            break;
    }


    if (message.start || message.greeting) {
    var parentTest = chrome.contextMenus.create({"id": "myContextMenu","title": "Chunk it!", "contexts":["all"],
        "onclick": function testingFunction(info, tab) {
            // TO-DO: Here, we are going to send data to server in order to save it to a database
            alert("Only start");
        }});
    } else {
        alert("Both start and greeting")
        // TO-DO: Here, we are going to send data to server in order to save it to a database
        //alert(message.greeting);
    }


});
     */
/*

var parentTest = chrome.contextMenus.create({"id": "myContextMenu","title": "Temporary title", "contexts":["all"],
    "onclick": function testingFunction(info, tab) {
        console.log("Testing is OK!" + info + " " + tab);
    }});
console.log(parentTest);



chrome.extension.onRequest.addListener(function(request) {
    if(request.cmd == "create_menu") {
        chrome.contextMenus.removeAll(function() {
            chrome.contextMenus.create({
                "title" : "Resolve DOI",
                "type" : "normal",
                "contexts" : ["selection"],
                "onclick" : getClickHandler()
            });
        });
    } else if(request.cmd == "delete_menu") {
        chrome.contextMenus.removeAll();
    }
});

*/

/*
$(document).ready(function(){
    $("#button").click(function(){
        $.get("edu-atoms.appspot.com", function(status) {
            var ala = status;
            console.log("ala");
        });
    });
});


chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    //alert(message.type);
    alert(my_url);
});



// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([
	  {content: "color-divs", description: "Make everything red"}
	]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
	if(text == "color-divs") colorDivs();
});

// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
    }
    return true;
});

// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
       	switch(port.name) {
			case "color-divs-port":
				colorDivs();
			break;
		}
    });
});

// send a message to the content script
var colorDivs = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
	    // setting a badge
		chrome.browserAction.setBadgeText({text: "red!"});
	});
}

*/