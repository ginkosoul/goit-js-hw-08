import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyTime = `videoplayer-current-time`;
let timeValue = localStorage.getItem(keyTime) || 0;
console.log("timeValue: ", timeValue);
setPlayTime(timeValue);

const throttledOnTimeUpdate = throttle(onTimeupdate, 500);

player.on('timeupdate', throttledOnTimeUpdate);

// player.on('pause', function(event) {
//     console.log(event);
//     // timeValue = event.seconds;
// });

// player.on('play', function(event) {
//     console.log(event);
//     // setPlayTime(videoplayerCurrentTime);
// });

window.onbeforeunload = onReload;

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

function setPlayTime(time){
    player.setCurrentTime(time).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}

function onReload()
{
    localStorage.setItem(keyTime, timeValue);
}
function onTimeupdate(event){
    console.log(event);
    timeValue = event.seconds;
}