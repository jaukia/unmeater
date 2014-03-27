(function () {
    function toggleImagesAndText(root) {
        var stylesheet, stylesheetId = 'unmeater',
            imageRules = '* { background-image: none !important; } img, input[type=image], object { visibility: hidden !important; }',
            textRules = '* { color:transparent!important;text-shadow:none!important;-webkit-text-fill-color:transparent!important; }',
            tagNames = ['frame', 'iframe'],
            rules = imageRules+" "+textRules,
            elements, i, j;
        stylesheet = root.getElementById(stylesheetId);
        if (stylesheet) {
            stylesheet.parentNode.removeChild(stylesheet);
        } else {
            stylesheet = root.createElement('style');
            stylesheet.type = 'text/css';
            stylesheet.id = stylesheetId;
            if (stylesheet.styleSheet) {
                stylesheet.styleSheet.cssText = rules;
            } else {
                stylesheet.appendChild(root.createTextNode(rules));
            }
            root.getElementsByTagName('head')[0].appendChild(stylesheet);
        }
        for (var i = 0; i < tagNames.length; i += 1) {
            for (var j = 0, elements = root.getElementsByTagName(tagNames[i]); j < elements.length; j += 1) {
                toggleImagesAndText(elements[j].contentDocument);
            }
        }
    }
    toggleImagesAndText(document);
}());