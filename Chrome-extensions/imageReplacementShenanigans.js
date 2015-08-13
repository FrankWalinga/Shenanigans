// Links to pictures of Nicholas Cage
var GREEK_URLS = ['https://i.imgur.com/YhNQH5X.jpg',
                                 'https://i.imgur.com/htKiEDA.png',
                                 'https://i.imgur.com/kThUaFY.jpg',
                                ];

// Pick out a random image from our collection.
function getRandomImage() {
    return GREEK_URLS[Math.floor(Math.random() * GREEK_URLS.length)];
}

// Get all the images on a page.
var images = document.getElementsByTagName("img");

// Replace each image with a random one.
for (var i = 0; i < images.length; i++) {
    var image = images[i];
  image.src = getRandomImage();
  console.log(image);
}