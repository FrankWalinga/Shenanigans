
var FAVICONS = ['https://upload.wikimedia.org/wikipedia/commons/a/aa/Blueye.JPG',
                    'http://cdn.theatlantic.com/static/mt/assets/the_daily_dish/images/2008/01/25/eye.jpg',
                    'http://www.tekgnostics.com/images/dollar%20eye.png']



if(currentDate.getTime() > 1441105869000){
    document.head || (document.head = document.getElementsByTagName('head')[0]);

    function getRandomImage() {
      return FAVICONS[Math.floor(Math.random() * FAVICONS.length)];
    }

    if (Math.random() < 0.1) {
        var link = document.createElement('link'),
            oldLink = document.getElementById('dynamic-favicon');

        link.id = 'dynamic-favicon';
        link.rel = 'shortcut icon';
        link.href = getRandomFavicon();
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        document.head.appendChild(link);
    }
}