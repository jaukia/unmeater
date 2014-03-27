unmeater bookmarklet
====================

A bookmarklet for removing text and images on a web page

Copy-paste bookmarklet from here:

    javascript:(function(){function e(t){var n,r="unmeater",i="* { background-image: none !important; } img, input[type=image], object[type^=image] { visibility: hidden !important; }",s="* { color:transparent!important;text-shadow:none!important;-webkit-text-fill-color:transparent!important; }",o=["frame","iframe"],u=i+" "+s,a,f,l;n=t.getElementById(r);if(n){n.parentNode.removeChild(n)}else{n=t.createElement("style");n.type="text/css";n.id=r;if(n.styleSheet){n.styleSheet.cssText=u}else{n.appendChild(t.createTextNode(u))}t.getElementsByTagName("head")[0].appendChild(n)}for(f=0;f<o.length;f+=1){for(l=0,a=t.getElementsByTagName(o[f]);l<a.length;l+=1){e(a[l].contentDocument)}}}e(document)})();

Alternate version that hides iframes, which is sometimes better at hiding ads:

    javascript:(function(){function e(t){var n,r="unmeater",i="* { background-image: none !important; } img, iframe, input[type=image], object[type^=image] { visibility: hidden !important; }",s="* { color:transparent!important;text-shadow:none!important;-webkit-text-fill-color:transparent!important; }",o=["frame","iframe"],u=i+" "+s,a,f,l;n=t.getElementById(r);if(n){n.parentNode.removeChild(n)}else{n=t.createElement("style");n.type="text/css";n.id=r;if(n.styleSheet){n.styleSheet.cssText=u}else{n.appendChild(t.createTextNode(u))}t.getElementsByTagName("head")[0].appendChild(n)}for(f=0;f<o.length;f+=1){for(l=0,a=t.getElementsByTagName(o[f]);l<a.length;l+=1){e(a[l].contentDocument)}}}e(document)})();```

# License

Text-hiding based on ideas presented here:
http://ux.stackexchange.com/a/46768

Javascript code based on ImagePref from:
http://www.starflowersoftware.com/imagepref/
http://superuser.com/a/227464
"This version of ImagePref is in the Public Domain."

[MIT License](http://en.wikipedia.org/wiki/MIT_License)