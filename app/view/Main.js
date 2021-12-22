Ext.define('Jenenei.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
			{
				id: 'jenenei-top-bar',
				cls: 'icon-toolbar',
				docked: 'top',
				xtype: 'titlebar',
				title: '',
				items: [
					{
						xtype: 'button',
						id: 'back-button',
						ui: 'back',
						text: 'Back',
						handler: function () {
							Ext.getCmp('homeNavigationView').pop();
						}
					},
					{
						xtype: 'button',
						id: 'search-back-button',
						ui: 'back',
						text: 'sBack',
						handler: function () {
							Ext.getCmp('searchNavigationView').pop();
						}
					},
					{
<<<<<<< HEAD
						xtype: 'panel',
						cls: 'icon-jenenei'
=======
						xtype: "button",
						iconCls: 'settings',
						align: 'right',
						iconMask: true,
						id: "filter_menu_button",
						handler: function (btn) {
							this.parent.parent.parent.fireEvent('filterMenuClicked', btn);
							
						}
					},
					{
						xtype: 'filterMenuPopup',
						id: 'filterMenuPopupView_id',
						hidden: true
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
					}
				]

			},
			{
				title: 'Home',
				iconCls: 'icon-home',
				xtype: 'homecard'
			},
			{
				title: 'Search',
<<<<<<< HEAD
				iconCls: 'search',
=======
				iconCls: 'icon-search',
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
				xtype: 'searchCard'
			}
		],
		listeners: {
			painted: function (a, b){
				console.log('Main view painted');
				Ext.getCmp('back-button').hide();
				Ext.getCmp('search-back-button').hide();
			}
		}
    }
});
