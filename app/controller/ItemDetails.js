Ext.define('Jenenei.controller.ItemDetails', {
	extend: 'Ext.app.Controller',
	config: {
		views: [
			'Jenenei.view.ItemDetails'
		],
		refs: {
			itemdetailsview : 'itemdetails'
		},
		control: {
			itemdetailsview : {
				mapDirectionReq : 'onMapDirectionReqTap'
			}
		}
	},

	onMapDirectionReqTap : function() {
		console.log ('map direction request');

		var	googleMap = false;


		var	destinationPosition = {};
		destinationPosition.lat = 23.7391419;
		destinationPosition.lng = 90.3728609;

		if (typeof google === 'object' && typeof google.maps === 'object') {
			googleMap = true;
		}

		var mapDirection = {
			xtype: 'mapdirection',
			flex: 1,
			//currentPosition: currentPosition,
			destinationPosition: destinationPosition
		};

		if(googleMap){
			console.log(Ext.Viewport.getActiveItem().id);
			var navView = Ext.getCmp('searchNavigationView');
			navView.push(mapDirection);
		}
	}
});