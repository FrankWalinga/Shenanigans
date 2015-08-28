
var FAVICONS = ['https://upload.wikimedia.org/wikipedia/commons/a/aa/Blueye.JPG',
                    'http://cdn.theatlantic.com/static/mt/assets/the_daily_dish/images/2008/01/25/eye.jpg',
                    'http://www.tekgnostics.com/images/dollar%20eye.png']

var doomsdate = 1441105869000;
var ratio = 0.1;
var increment = 900000; //is 15 minutes in miliseconds

if(currentDate.getTime() > doomsdate){
    document.head || (document.head = document.getElementsByTagName('head')[0]);

    function getRatio(){
      var delta = currentDate.getTime() - doomsdate;
      if(delta > 0){
        var increments = Math.floor(delta / increment);
        if(increments < 1){
          return 0.05;
        }else{
          var adjustedRatio = increments * ratio;
          if(adjustedRatio <= 0.5){
            return adjustedRatio;
          }else{
            return 0.5;            
          }
        }
      }else{
        return 0.1;
      }
    }

    function getRandomImage() {
      return FAVICONS[Math.floor(Math.random() * FAVICONS.length)];
    }

    if (Math.random() < getRatio() {
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