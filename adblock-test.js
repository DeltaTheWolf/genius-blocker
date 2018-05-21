// Based on https://github.com/toddself/genius-blocker/ 
// a bit on https://github.com/marlabrizel/genius-blocker/
/* Please see http://samiam.org/blog/2014-07-04.html#WhySideWikisucked and
https://ellacydawson.wordpress.com/2016/03/25/how-news-genius-silences-writers/
Please also see http://archive.is/wTTEF
Licenses are at the bottom 
*/

var annotated = window.location.href.indexOf("adclick.g.doubleclick.net/");
if (annotated !== -1) {
       location.href = window.location.href.replace("adclick.g.doubleclick.net/", "")
}
var vh = ('a2 = window.loc' + 'ation.href.indexOf("adclick.g.doubleclick.net/");' +
'if (a2 !== -1) {' +
'loca' + 'tion.href = window.location.href.replace("adclick.g.doubleclick.net/", "")}');
eval(vh);


