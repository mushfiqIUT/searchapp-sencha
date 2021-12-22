Ext.define("Jenenei.view.ItemDetails", {
	requires: [
		'Jenenei.util.Functions',
		'Ext.SegmentedButton'
	],
    extend: "Ext.Container",
    xtype: 'itemdetails',
	id: 'itemdetailscard',
    config: {
		scrollable: {
<<<<<<< HEAD
		    direction: 'vertical',
		    directionLock: true
=======
			direction: 'vertical',
			directionLock: true
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
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
				items: [
					{
						xtype: 'segmentedbutton',
						id: 'bookmark-button',
						allowMultiple: true,
						docked: 'right',
						items: [
							{
								style: 'margin-left: 10px',
								iconCls: 'icon-star3'
							}
						],
						listeners: {
							toggle: function(container, button, pressed){
								var itemToBookmark = container.parent.parent.config.record;
								var bookmarkStore = Ext.getStore('bookmarkStore');
								
								itemToBookmark.setDirty();
								if (pressed){
									bookmarkStore.add(itemToBookmark.data);
								} else {
									bookmarkStore.remove(itemToBookmark);
								}
								bookmarkStore.sync();
							}
						}
						//badge: 'Review'
					},
					{
						xtype: 'button',
						ui: 'confirm',
						iconCls: 'icon-phone',
						docked: 'left'
						//badge: 'Call'
					},
					{
						xtype: 'button',
						style: 'margin-left: 10px',
						ui: 'action',
						iconCls: 'icon-map',
						docked: 'left',
						handler: function () {
							this.parent.parent.fireEvent('mapDirectionReq');
						}
						//badge: 'Map'
					},
					{
						xtype: 'button',
						style: 'margin-left: 10px',
						iconCls: 'icon-pencil2',
						docked: 'left'
						//badge: 'Review'
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
<<<<<<< HEAD
	initialize : function(){
        this.callParent();
        var record = this.config.record;
		Ext.getCmp('itemDetails-Header').setHtml(
			'<div>'+
				'<img class="item-thumb" src="json/images/' + record.thumb + '" />'+ //http://27.147.237.204/jenenei/json/images/
			'</div>');
=======
	initialize: function(){
		var id = this.config.record.data.id;
		
		var bookmarked = Ext.getStore('bookmarkStore').getById(id);
		if (bookmarked == null) {
			
		} else {
			Ext.getCmp('bookmark-button').setPressed(0, true);
		}

		Ext.Ajax.request({
			loadMask: true,
			url: 'json/getDetails.php',
			params: {id: id},
			success: function(resp) {

				var item = Ext.decode(resp.responseText);
				console.log('Fetching: ID: ' + item.id);
				
				Ext.getCmp('itemDetails-Header').setHtml(
					'<div class="item-details-img-container" style="background-image: url(\'json/images/' + item.thumb + '\')">'+ //http://27.147.237.204/jenenei/
						'<div class="item-details-title">' + item.title + 
							'<span class="item-details-location">' + item.location + '</span>'+
							'<span class="item-details-rating">'+ Jenenei.util.Functions.getRatingHtml(item.rating) + '</span>'+
						'</div>'+
					'</div>'
				);
				Ext.getCmp('itemDetails-Body').setHtml(
					'<div class="item-details-body-container">'+
							'<span class="item-details-location">' + item.shortdesc + '</span>'+
							'<div class="item-details-contact">'+ Jenenei.util.Functions.getContactHtml(item) + '</div>'+
					'</div>'
				);
			}
		});
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
    }
});