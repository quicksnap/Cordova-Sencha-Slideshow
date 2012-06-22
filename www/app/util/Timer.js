Ext.define('WupDemo.util.Timer', {

	constructor: function(config) {
		config = config || {};
		// Private Vars
		var start_time = config.startTime || 0;
		var time = start_time; // Time in MS
		var tick_interval = config.tick_interval || 100;
		var intervalID = null;
		var ticker = config.ticker || function() {
			return time - tick_interval;
		};
		var auto_advance = config.autoAdvance || false;
		var context = null;
		var _state = 'reset';

		// Public Methods
		this.start = function() {
			if(_state == 'reset') {
				log('New timer triggered');
				if (typeof(config.onBegin) === "function" ) {
					config.onBegin.call(context);	
				}
			}
			if(intervalID) {
				clearInterval(intervalID);
			}

			intervalID = setInterval( (function(self){
				return function() { self._tick(); }
			}(this)), tick_interval);

			_state = 'playing';
		};
		this.pause = function() {
			clearInterval(intervalID);
			_state = 'paused';
		};
		this.getTime = function() {
			return time;
		};
		this.reset = function() {
			if (intervalID) {
				this.pause();
			}
			time = 0;
			_state = 'reset';
		};

		this.setContext = function(that) {
			context = that;
		};

		// Private Methods
		this._tick = function() {
			time = ticker();
			if (time <= 0) {
				log('Times up');
				this.pause();
				time = 0;
				if (auto_advance === true) {
					context.nextTimer();
				}
			}
			log('Tick, tock..');
		};
	}
});