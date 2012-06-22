/////
// Slideshow State Machine
///////////////////////////
Ext.define('WupDemo.util.Slideshow', {

	constructor: function(config) {
		this.callParent();

		config = config || {};

		// Ext.caroursel.Carousel = http://bit.ly/I7dEYa
		this._slides = config.slides || Ext.ComponentQuery.query('slideshow')[0];

		this.initSlideshow();
		this._slides.on('activeitemchange', this._handleChange, this);
	},

	// Public
	//////////////////////////////
	playMedia: function(file) {
           if(this._currentMedia !== null) {
                this._currentMedia.stop();
                this._currentMedia.release();
           }
           
           // Need iOS/Android test for path
           var path = 'media/' + file;
           this._currentMedia = new Media(path,this.mediaSuccess,this.mediaError);
           this._currentMedia.play();
 	},
 	pauseMedia: function() {
 		if(this._currentMedia !== null) {
 			this._currentMedia.pause();
 		}
 	},
 	unpauseMedia: function() {
 		if(this._currentMedia !== null) {
 			this._currentMedia.play();
 		}
 	},
    mediaSuccess: function() {
           
    },
    mediaError: function(error) {
           log('Media error: ',error);
    },
	getPlayState: function () {
		return this._getPlayState();
	},

	getSlides: function() {
		return this._slides;
	},
	getCurrentSlide: function() {
		return this._getCurrentSlide();
	},
	getCurrentId: function() {
		return "#" + this.getCurrentSlide().getId();
	},
	playPauseToggle: function() {
		if (this.getPlayState() == 'playing') {
			this.pause();
		} else {
			if(this.getPlayState() == 'stopped') {
				this.play();
			} else {
				this._trigger('unpause');
			}
		}
	},
	pause: function() {
		this._trigger('pause');
	},
	play: function() {
		if(this.getPlayState() === "stopped") {
			this._trigger('play');	
		} else {
			if ( this.getPlayState() === "paused") {
				this._trigger('unpause');
			}
		}	
	},

	restart: function() {
		this._trigger('stop');
	},

	nextSlide: function() {
		var slideLength = this._slides.getInnerItems().length;

		if ( this._slides.getActiveIndex() >= ( slideLength - 1 ) ) {
			this._slides.setActiveItem(0); // Goto initial slide
		} else {
			this._slides.next();
		}
	},
	nextTimer: function() {
		var timersLength = this._timers.length; 

		if(this._currentTimerIndex === timersLength - 1) {
			this.nextSlide();
		} else {
			this._currentTimerIndex = this._currentTimerIndex + 1;
			this._initCurrentTimer();
			this._startCurrentTimer();
		}
	},
	_initCurrentSlide: function() {

		var currentTimer = this._getCurrentTimer();
	
		if( currentTimer && typeof(currentTimer.pause) === "function") {
			currentTimer.pause();	
		}
		
		this._timers = this._getCurrentSlide().config.getTimers();
		this._currentTimerIndex = 0;
	},
	_initCurrentTimer: function() {
		var currentTimer = this._getCurrentTimer();
		currentTimer.setContext(this);
	},


	initSlideshow: function() {
		this._slides.setActiveItem(0);
		this._initCurrentSlide();
		this._initCurrentTimer();
	},

	// Private
	//////////////////////////////
	_slides: null,
	_currentMedia: null,
	_timers: [],
	_currentTimerIndex: 0,
	_getCurrentTimer: function(){
		return this._timers[this._currentTimerIndex];
	},
	_getCurrentSlide: function() {
		return this._slides.getActiveItem();
	},
	_playState: 'stopped',
	_getPlayState: function() {
		return this._playState;
	},
	_setPlayState: function(state) {
		this._playState = state;
	},
	_startCurrentTimer: function() {
		var currentTimer = this._getCurrentTimer();
		currentTimer.start();
	},
	_pauseCurrentTimer: function() {
		var currentTimer = this._getCurrentTimer();
		currentTimer.pause();
	},
	_handleChange: function(options) {
		log('Change triggered, current slide: ', this._getCurrentSlide() );
		this._initCurrentSlide();
		this._initCurrentTimer();
		if(this.getPlayState() === "playing") {
			this._startCurrentTimer();
		}
	},
	// the Play event starts the slideshow from the beginning.
	// Assumes a fresh slate
	_triggerPlay: function() {
		this._setPlayState('playing');

		this._startCurrentTimer();
	},
	_triggerStop: function() {
		this._setPlayState('stopped');
		this._pauseCurrentTimer(); // The paused timer will be overwritten by new instance
		this.pauseMedia();
		this.initSlideshow();
	},

	_triggerPause: function(){
		this._setPlayState('paused');
		this._pauseCurrentTimer();
		this.pauseMedia();
	},

	_triggerUnpause: function(){
		this._setPlayState('playing');
		this._startCurrentTimer();
		this.unpauseMedia();
	},

	_beforeTrigger: function(event) {

	},

	_afterTrigger: function(event) {
		log('Triggered', event);
	},

	_trigger: function(event) {
		var fn;
		event = event.toLowerCase();
		// "_triggerPlay, _triggerStop"
		fn = "_trigger" + event.charAt(0).toUpperCase() + event.slice(1);

		this._beforeTrigger(event);
		this[fn]();
		this._afterTrigger(event);
	},
});