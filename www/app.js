// Phonegap stuff
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Avoid lag when initializing media later on
    var media = new Media('media/silence.wav', onMediaSuc);
    media.play();
    media.stop();
    media.release();
}
function onMediaSuc() {
    log('Media playback OK.')
}
Ext.application({
    name: 'WupDemo',

    // Startup screens! Do this.
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    glossOnIcon: false,

    views: ['Main'],
    controllers: [
        'Main'
    ],

    launch: function() {
        
    },
});

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


window.DEBUG = true;
if(!DEBUG) {console.log = function(){} ;}
log('Console logging enabled');
