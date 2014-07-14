window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: "color-divs"}, function(response) {});
        });
	}
}

/*

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
});

*/

/*

// getting the URL of the current tab
var my_url = window.location
window.onload = function() {
    document.getElementById("url_button").onclick = function() {
        chrome.extension.sendMessage({
            type: "my_url",
            data: "lalalalal"
        });
    }
}

*/