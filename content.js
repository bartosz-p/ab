chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    alert(my_url);
    //console.log();
});

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