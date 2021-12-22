
Ext.define('Jenenei.view.MapDirection', {
	extend: 'Ext.Map',
	alias: 'widget.mapdirection',
	requires: [
		'Ext.util.Geolocation'
	],

	config: {
		currentPosition: {
			lat: null,
			lng: null
		},
		destinationPosition: {
			lat: null,
			lng: null
		},
		storeData: null,
		travelMod: google.maps.TravelMode.DRIVING,
		geoObject: null,
		id: 'mapdirectionview',
		flex: 1,
		//useCurrentLocation: true,
		mapOptions: {
			zoom: 13,
			maxZoom: 18,
			minZoom: 9
		},
		listeners: {
			maprender: function(comp, map){

				var desPos = this.getDestinationPosition(),
					tavelMod = this.getTravelMod();
				var marker;
				var markersArray = [];
				var map = map;
				var geo,
					first = true,
					control = this;

				var directionsService = new google.maps.DirectionsService();
				var directionsDisplay = new google.maps.DirectionsRenderer();

				directionsDisplay.setMap(map);

				 geo = Ext.create('Ext.util.Geolocation', {
					frequency : 10000,
					allowHighAccuracy : true,
					listeners: {
						locationupdate: function(geo) {
							var currentPosition = {};
							currentPosition.lat = geo.getLatitude();
							currentPosition.lng = geo.getLongitude();

							control.setCurrentPosition(currentPosition);

							if(first){
								var position = new google.maps.LatLng(currentPosition.lat, currentPosition.lng);
								map.panTo(position);

								var request = {
										origin: new google.maps.LatLng(currentPosition.lat, currentPosition.lng),
										destination: new google.maps.LatLng(desPos.lat, desPos.lng),
										travelMode: tavelMod
									};

								directionsService.route(request, function(result, status) {
									if (status == google.maps.DirectionsStatus.OK) {
										directionsDisplay.setDirections(result);
									} else{
										Ext.Msg.alert("Directions request failed", "Couldn't draw your Route, please try again later. ");
									}
								});

								first = false;
							}

							if (markersArray) {
								for (i in markersArray) {
									markersArray[i].setMap(null);
								}
								markersArray.length = 0;
							}

							marker = new google.maps.Marker({
								position: new google.maps.LatLng(currentPosition.lat, currentPosition.lng),
								map: map,
								title: 'Your Current Position',
								//animation: google.maps.Animation.DROP,
								icon: new google.maps.MarkerImage(
									'resources/images/ring.png',
									new google.maps.Size(50, 50),
									new google.maps.Point(0, 0),
									new google.maps.Point(15, 15)
								)
							});
							markersArray.push(marker);
						},
						locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
							if(bTimeout){
								Ext.Msg.alert("Timeout occurred while fetching current location","");
							} else {
								Ext.Msg.alert("Error occurred while fetching current location","");
							}
						}
					}
				});

				this.setGeoObject(geo);
				google.maps.event.addListenerOnce(map, 'idle', function(){
					//loading gif hiding
				});

			}


		}
	}
});