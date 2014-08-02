chrome.contextMenus.create({"id": "myContextMenu","title": "Chunk it!", "contexts":["all"],
    "onclick": function testingFunction(info, tab) {

        alert(my_url);

        if (info.url) {
            //alert(info.url);
            //alert(info.contents);
            //alert(info.closestId);
        } else {
            //alert("Just start");
            //alert(info.selectionText);
            //alert(info.pageUrl);
            //alert(info.linkUrl);
        }
    }});

chrome.contextMenus.onClicked.addListener(function testFunc2(info, tab) {
    //alert("test1");
    alert(Object.keys(info));
    chrome.tabs.sendMessage(tabs[0].id, {contentInfo: "OK"}, function(response) {});
    //alert(info.contents);
    //alert(info.closestId);
});

var my_url;
var my_contents;
var my_closestId;

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.contents) {
        my_url = message.url;
        my_contents = message.contents;
        my_closestId = message.closestId;

        //alert(message.url);
        //alert(message.contents);
        //alert(message.closestId);
    }
});


/*

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.start == "ok") {
        var parentTest = chrome.contextMenus.create({"id": "myContextMenu","title": "Chunk it!", "contexts":["all"],
            "onclick": function testingFunction(info, tab) {

                // TO-DO: This function should be called when clicked on ContextMenu
                alert("This should not show up");
            }});
    }
});

*/

/*

chrome.contextMenus.onClicked.addListener(function testFunc2(info, tab){
    //alert("test1");
    alert(info.url);
    alert(info.contents);
    alert(info.closestId);
    /*
    chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {

        alert(message.contents);
        alert(message.url);
        alert(message.closestId);

        if (message.url) {
            alert("test2");
            alert(message.url);
            alert(message.closestId);
        }

    })
         */
//});


/*

chrome.contextMenus.onClicked.addListener(function testFunc2(info, tab){
    // TO-DO: Here, we are going to send data to server in order to save it to a database

    chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.url) {

    alert(message.url);
    //alert(message.contents[message.contents.length - 1]);
    //alert(typeof message.contents);
    alert(message.closestId);
            }
    })
)};


chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.url) {

        chrome.contextMenus.onClicked.addListener(function testFunc2(info, tab){
                // TO-DO: Here, we are going to send data to server in order to save it to a database

                //var data={"name": message.greet};

                alert(message.url);
                //alert(message.contents[message.contents.length - 1]);
                //alert(typeof message.contents);
                alert(message.closestId);


                var data={"url": message.url,
                          //"concept": "",
                          "contents": message.contents,
                          "media_type": "",
                          "parent": "",
                          "instruction_type": ""
                };

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



                 def post(self):

                 atom_name = self.request.get('atom_name',
                 DEFAULT_ATOM_NAME)

                 #atom = Atom(parent=atom_key(atom_name))
                 atom = Atom()


                 if users.get_current_user():
                 atom.author = users.get_current_user()

                 atom.link = self.request.get('link')
                 atom.concept = self.request.get('concept')
                 atom.media_type = self.request.get('media_type')
                 atom.parent = self.request.get('parent')
                 atom.instruction_type = self.request.get('instruction_type')

                 atom.put()

                 query_params = {'atom_name' : atom_name}
                 self.redirect('/?' + urllib.urlencode(query_params))


            }
        )
    }
});

 */


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