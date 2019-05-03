function autoplay(){
    'use strict';
    var arVideo = document.getElementsByTagName('video');
    for (var i=0; i < arVideo.length; i++){
        var frame = arVideo[i];
        frame.autoplay = false;
}
}
autoplay();