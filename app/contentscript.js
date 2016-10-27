    var a = document.getElementsByTagName('a');
    var youtubeTag = "<span style='color: #FF1493;font-weight: bold;'>[YOUTUBE] </span>";
    for (var i = 0; i < a.length; i++) {
        var a_attr = a[i].getAttribute('class');
        if (a_attr.includes("title"))
            if (a_attr.indexOf("youtube.com") > -1 || a_attr.indexOf("youtu.be") > -1) {
                a[i].innerHTML = youtubeTag + a[i].innerHTML;
                break;
            }
        
    }
    // var getYoutubeViews = function() {

    // }

    // var getAttibutes = function(){
        
    // }