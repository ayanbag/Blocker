window.onload = function () {
	function updateLabel() {
		var enabled = chrome.extension.getBackgroundPage().enabled;
		document.getElementById('toggle_button').value = enabled ? " Off " : " On ";
    }
    
	document.getElementById('toggle_button').onclick = function () {
		var background = chrome.extension.getBackgroundPage();
		background.enabled = !background.enabled;
		updateLabel();
	};
    updateLabel();
    function updateLabel1() {
		var open = chrome.extension.getBackgroundPage().open;
		document.getElementById('autoplay_button').value = open ? " Off " : " On ";
    }
    
	document.getElementById('autoplay_button').onclick = function () {
		var back = chrome.extension.getBackgroundPage();
		back.open = !back.open;
		updateLabel1();
	};
    updateLabel1();
}



