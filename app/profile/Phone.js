
Ext.define('Jenenei.profile.Phone', {
  extend: 'Ext.app.Profile',

  config: {
    name: 'Phone',
		views: [
			'Main'
		],
		controllers: [
		]
  },

  isActive: function() {
    return Ext.os.is.Phone;
  },

  launch: function () {
    console.log('Active profile: Phone');

		//Ext.Ajax.setDisableCaching(false);

    Ext.fly('appLoadingIndicator').destroy();
    Ext.Viewport.add({
      xtype: 'main_phone'
    });
  }
});
