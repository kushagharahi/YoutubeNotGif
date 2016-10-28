    var a = document.getElementsByTagName('a');
    var youtubeTag = "<span style='color: #FF1493;font-weight: bold;'>[YOUTUBE] </span>";
    for (var i = 0; i < a.length; i++) {
        var a_attr = a[i].getAttribute('class');
        if (a_attr !== null && a_attr.includes("title")) {
		var href = a[i].getAttribute('href');
		if (href.indexOf("youtube.com") > -1 || href.indexOf("youtu.be") > -1) {
                	a[i].innerHTML = youtubeTag + a[i].innerHTML;
            }
	}
        
    }
    // var getYoutubeViews = function() {

    // }

    // var getAttibutes = function(){
        
    // }
