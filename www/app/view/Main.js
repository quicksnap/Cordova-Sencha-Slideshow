Ext.define('WupDemo.view.Main', {
	extend: 'Ext.Container',
	requires: [
		'WupDemo.view.Slideshow',
		'WupDemo.view.PlayerControls'
	],
	config: {
		itemId: 'mainview',
		fullscreen: true,
		layout: 'vbox',
		items: [
			{
				xtype: 'slideshow',
				flex: 1
			},
	        {
	            xtype: 'playercontrols',
	        }
		]
	}
});