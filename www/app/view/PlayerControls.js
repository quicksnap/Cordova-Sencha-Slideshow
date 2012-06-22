Ext.define('WupDemo.view.PlayerControls', {
	extend: 'Ext.Toolbar',
	alias: 'widget.playercontrols',

	config: {
		defaults: {
			iconMask: true,
		},

     	docked: 'bottom',
        scrollable: 'false',

		items: [			
			{
				xtype: 'button',
				// text: 'Play',
				iconCls: 'refresh',
				iconAlign: 'center',
				id: 'restartbutton'
			},
			{
				xtype: 'spacer'
			},
			{
				xtype: 'button',
				// text: 'Play',
				iconCls: 'arrow_right',
				iconAlign: 'center',
				id: 'playbutton'

			},
			{
				xtype: 'spacer'
			},
			{
				xtype: 'spacer',
				width: 53
			}
		]
	}
});
