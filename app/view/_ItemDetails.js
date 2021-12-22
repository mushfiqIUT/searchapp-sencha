Ext.define("Jenenei.view.ItemDetails", {
	requires: [
		'Jenenei.util.Functions'
	],
    extend: "Ext.Container",
    xtype: 'itemdetails',
	id: 'itemdetailscard',
    config: {
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		layout: 'vbox',
        items: [
			{
				id: 'itemDetails-Header',
				minHeight: '20%',
				html: ''
			},
			{
				xtype: 'panel',
				layout: 'hbox',
				style: 'padding: 10px; margin-top: -60px;',
				minHeight: '30px',
				dockedItems: [
					{
						xtype: 'button',
						style: 'margin-left: 10px',
						iconCls: 'icon-pencil2',
						dock: 'right',
						//badge: 'Review'
					},
					{
						xtype: 'button',
						style: 'margin-left: 10px',
						ui: 'action',
						iconCls: 'icon-map',
						dock: 'right',
						//badge: 'Map'
					},
					{
						xtype: 'button',
						ui: 'confirm',
						iconCls: 'icon-phone',
						dock: 'right',
						//badge: 'Call'
					}
				]
			},
			{
				id: 'itemDetails-Body',
				minHeight: '20%',
				html: ''
			},
        ]
    },
	initialize: function(){
		var id = this.config.record.id;
		Ext.Ajax.request({
			loadMask: true,
			url: 'json/getDetails.php',
			params: {id: id},
			success: function(resp) {
				var item = Ext.decode(resp.responseText);
				console.log('Fetching: ID: ' + item.id);
				
				var ratingHtml = Jenenei.util.Functions.getRatingHtml(item.rating);
				console.log(ratingHtml);
				
				Ext.getCmp('itemDetails-Header').setHtml(
					'<div class="item-details-img-container" style="background-image: url(\'http://27.147.237.204/jenenei/json/images/' + item.thumb + '\')">'+
						'<div class="item-details-title">' + item.title + 
							'<span class="item-details-location">' + item.location + '</span>'+
							'<span class="item-details-rating">'+ ratingHtml + '</span>'+
						'</div>'+
					'</div>'
				);
				Ext.getCmp('itemDetails-Body').setHtml(
					'<div class="item-details-body-container">'+
							'<span class="item-details-location">' + item.shortdesc + '</span>'+
							'<div class="item-details-contact">'+
								'<div class="contact-item"><span class="icon phone">8159750</div>'+
								'<div class="contact-item"><span class="icon web">www.jenenei.com</div>'+
								'<div class="contact-item"><span class="icon email">info@jenenei.com</div>'+
							'</div>'+
					'</div>'
				);
			}
		});
    }
});