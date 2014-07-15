chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var my_url = window.location.href;
    var my_selector = document.querySelector("#main-header");
    //my_selector.style.background = "red";
    my_selector.style.borderColor = "red";
    my_selector.style.borderWidth = 20;
    //alert(message.type);
    $('a').css({'background-color': 'red'});
    console.log(my_url);
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