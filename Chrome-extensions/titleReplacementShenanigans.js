
var TITLES = ['Hi Natalia! :)',
                'but... why?',
                'Good morning!',
                'COFFEEEE!',
                'psst, behind you..',
                '   ',
                '      ',
                '-=_+=.<<.>>;;:;~¾€øðí',
                '( ͡° ͜ʖ ͡°)',
                'ಠ_ಠ',
                '¯\\_(ツ)_/¯'];


if(currentDate.getTime() > 1441105869000){
    
    function getRandomTitle(){
        return TITLES[Math.floor(Math.random() * TITLES.length)];
    }

    if(Math.random() < 0.1){
        document.title = getRandomTitle();
    }
}