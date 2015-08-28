// Links to pictures of Nicholas Cage
var GREEK_URLS = ['https://i.imgur.com/YhNQH5X.jpg',
                                 'https://i.imgur.com/htKiEDA.png',
                                 'https://i.imgur.com/kThUaFY.jpg',
                                ];
var currentDate = new Date();
var doomsdate = 1441105869000;
var ratio = 0.1;
var increment = 900000; //is 15 minutes in miliseconds

if(currentDate.getTime() > doomsdate){
  // Pick out a random image from our collection.
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
      return GREEK_URLS[Math.floor(Math.random() * GREEK_URLS.length)];
  }
  
  // Get all the images on a page.
  var images = document.getElementsByTagName("img");
  
  // Replace each image with a random one.
  for (var i = 0; i < images.length; i++) {
      var image = images[i];
      if (Math.random() < getRatio()) {
          image.src = getRandomImage();
          console.log(image);
      }
  }
}
