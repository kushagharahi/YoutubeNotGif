var a = document.getElementsByTagName('a');
var youtubeTag = "<span style='color: #FF1493;font-weight: bold;'>[YOUTUBE] </span>";
for (var i = 0; i < a.length; i++) {
    var a_attr = a[i].getAttribute('data-href-url');
    if (a_attr !== null && a_attr.indexOf("youtube.com") > -1) {
        a[i].innerHTML = youtubeTag + a[i].innerHTML;
    }
}