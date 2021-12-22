var homeView = Ext.define("Jenenei.view.Home", {
    extend: "Ext.Container",
    xtype: 'homecard',
    requires: [
		'Ext.navigation.View'
	],
    config: {
        //title: 'Home',
        //iconCls: 'home',
        layout:'fit',
        items: [
			{
				xtype: 'navigationview',
				id:'homeNavigationView',
				navigationBar: false,
				items: [
					{	
						layout: 'vbox',
						scrollable: {
							direction: 'vertical',
							directionLock:true
						},
						items: [
							{
								xtype: 'titlebar',
								cls: 'mini-titlebar',
								title: 'Editors Pick'
							},
							{
								minHeight: '215px',
								xtype: 'dataview',
								cls: 'horizontal-dataview',
								scrollable: {
									direction: 'horizontal',
									directionLock:true
								},
								inline: {
									wrap: false
								},
								itemTpl: '<div class="item-summary-container">'+
											'<img class="item-thumb" src="json/images/{thumb}" />'+ //http://27.147.237.204/jenenei/json/images/{thumb}
											'<div class="item-title">{title}</div>'+
											'<div class="item-location">{location}</div>'+
											'<div class="item-rating">Rating: {rating}/5</div>'+
										 '</div>',
								store: 'editorsPicks',
								listeners: {
									itemtap: function(thisDataView, index, target, record, e, eOpts ){
										var navView = Ext.getCmp('homeNavigationView');
										var itemDetailsView = Ext.create('Jenenei.view.ItemDetails',{
											record: record
										});
										navView.push(itemDetailsView);
									}
								}
							},
							{
								xtype: 'titlebar',
								cls: 'mini-titlebar',
								title: 'Whats New'
							},
							{
								minHeight: '215px',
								xtype: 'dataview',
								cls: 'horizontal-dataview',
								scrollable: {
									direction: 'horizontal',
									directionLock:true
								},
								inline: {
									wrap: false
								},
								itemTpl: '<div class="item-summary-container">'+
											'<img class="item-thumb" src="json/images/{thumb}" />'+
											'<div class="item-title">{title}</div>'+
											'<div class="item-location">{location}</div>'+
											'<div class="item-rating">Rating: {rating}/5</div>'+
										 '</div>',
								store: 'new'
							},
							{
								xtype: 'titlebar',
								cls: 'mini-titlebar',
								title: 'Bookmarks'
							},
							{
								minHeight: '215px',
								xtype: 'dataview',
								emptyText: '<div class="empty-data-view">No bookmarks yet!<div>',
								cls: 'horizontal-dataview',
								scrollable: {
									direction: 'horizontal',
									directionLock:true
								},
								inline: {
									wrap: false
								},
								itemTpl: '<div class="item-summary-container">'+
											'<img class="item-thumb" src="json/images/{thumb}" />'+
											'<div class="item-title">{title}</div>'+
											'<div class="item-location">{location}</div>'+
											'<div class="item-rating">Rating: {rating}/5</div>'+
										 '</div>',
								store: 'bookmarkStore'
							}
						]
					}
				],
				listeners: {
					push: function(navView, newView, eOpts){
						Ext.getCmp('back-button').show();
					},
					pop: function(navView, newView, eOpts){
						Ext.getCmp('back-button').hide();
					},
					painted: function (a, b){
						console.log('Home view painted');
<<<<<<< HEAD
						if(!(Ext.getCmp('search-back-button').isHidden())) {
							Ext.getCmp('search-back-button').hide();
							Ext.getCmp('searchNavigationView').pop();
						}
						//Ext.getCmp('back-button').hide();
=======
						//console.log(Ext.getCmp('homeNavigationView').getInnerItems().length);

						Ext.getCmp('filter_menu_button').hide();
						Ext.getCmp('filterMenuPopupView_id').hide();

						if(!(Ext.getCmp('search-back-button').isHidden())) {
							Ext.getCmp('search-back-button').hide();
						}
						if(Ext.getCmp('homeNavigationView').getInnerItems().length > 1) {
							Ext.getCmp('back-button').show();
						}
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
						
					}
				}
			}
        ]
    }
});