function url_check(url){
    return "*://*."+String(url)+"/*";
}

var url=[
    "doubleclick.net",
    "media.net",
    "undertone.com",
    "bidvertiser.com",
    "ayboll.com",
    "blogads.com",
    "viglink.com",
    "nativeads.com",
    "hexagram.com",
    "sharethrough.com",
    "gravity.com",
    "disqus.com",
    "revcontent.com",
    "content.ad",
    "taboola.com",
    "outbrain.com",
    "infolinks.com",
    "popcash.net",
    "go2cloud.org"
];

blocked_domains=url.map(url_check);

var enabled = true;
if (enabled ==  true){
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            return {cancel: enabled };
        },
        {urls:[...blocked_domains]},
        ["blocking"]
    );
    }

var open = true;

if (open == true){
    'use strict';
    var arVideo = document.getElementsByTagName('video');
    for (var i=0; i < arVideo.length; i++){
        var frame = arVideo[i];
        frame.autoplay = false;
}
}