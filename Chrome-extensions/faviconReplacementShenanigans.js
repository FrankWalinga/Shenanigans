
if(currentDate.getTime() > 1441105869000){
    document.head || (document.head = document.getElementsByTagName('head')[0]);

    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');

    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = "https://upload.wikimedia.org/wikipedia/commons/0/01/MaverickEyes_Favicon_Image.gif";
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}