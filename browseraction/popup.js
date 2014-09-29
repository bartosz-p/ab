window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            //chrome.tabs.sendMessage(tabs[0].id, {type: "color-divs"}, function(response) {});
        });
	}
};

/*

// Sending a message

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
});

*/

