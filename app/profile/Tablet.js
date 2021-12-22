

Ext.define('Jenenei.profile.Tablet', {
  extend: 'Ext.app.Profile',

  config: {
    name: 'Tablet',
    views: [
			'Main'
    ],
		controllers: [
		]
  },

  isActive: function() {
    return Ext.os.is.Tablet;
  },

  launch: function () {
    console.log('Active profile: Tablet');

		//Ext.Ajax.setDisableCaching(false);

    Ext.fly('appLoadingIndicator').destroy();
    Ext.Viewport.add({
      xtype: 'main_tab'
    });
  }
});
