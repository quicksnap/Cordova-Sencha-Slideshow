Ext.define('WupDemo.controller.Main', {
    extend: 'Ext.app.Controller',

	requires: [
		'WupDemo.util.Timer',
		'WupDemo.util.Slideshow',
	],

	config: {
		refs: {
			play: '#playbutton',
			restart: '#restartbutton'
		},
		control: {
			play: {
				tap: 'doPlay'
			},
			restart: {
				tap: 'doRestart'
			}
		}
	},

	doPlay: function(){ this.slideshow.playPauseToggle(); },

	doRestart: function(){ this.slideshow.restart(); },

	slideshow: null,

	init: function(controller) {

	},

	launch: function(controller) {
		Ext.create('WupDemo.view.Main');

		this.slideshow = Ext.create('WupDemo.util.Slideshow');

		// TODO: Bind PhoneGap pause/resume to slideshow 
	},

	// next: function(arg) {

 //    },

    // reset: function() {
    //     this.setActiveItem(0);
    // },
    // start: function() {
    //     this.getTimer().start();
    // },
    // pause: function() {
    //     this.getTimer().pause();
    // },
    // getTimer: function() {
    //     var that = this;

    //     this._timer = this._timer || 
    //         Ext.create('WupDemo.util.Timer', {
    //             ticker: function() {
    //                 return 0;
    //             }
    //         });

    //     return this._timer;
    // },
});