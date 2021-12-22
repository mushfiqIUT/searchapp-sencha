Ext.define('Jenenei.view.Search', {
	extend: 'Ext.Container',
	alias: 'widget.searchCard',
	requires: [
<<<<<<< HEAD
		'Ext.dataview.DataView'
=======
		'Ext.dataview.List'
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
	],

	config: {
		layout: 'fit',
		listeners:{
			activate: function(newActiveItem, container, oldActiveItem, eOpts){
				//this.fireEvent('searchCard', this);
			}
		}
	},

	initialize: function () {
		this.callParent(arguments);

		//var view = this;

		var searchNavigationView = {
				xtype: 'navigationview',
				id:'searchNavigationView',
				navigationBar: false,
				items: [
					{
<<<<<<< HEAD
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
									'<img class="item-thumb" src="http://27.147.237.204/jenenei/json/images/{thumb}" />'+
									'<div class="item-title">{title}</div>'+
									'<div class="item-location">{location}</div>'+
									'<div class="item-rating">Rating: {rating}/5</div>'+
								 '</div>',
						store: 'editorsPicks',
=======
						xtype: 'list',
		                title: 'Search List',
						styleHtmlContent: true,
						emptyText: 'No Data Available...',
						loadingText: 'Loading...',
						itemTpl:'<div class="list-item-img-container" style="background-image: url(\'json/images/{thumb}\')">'+ 
										'<div class="list-item-title">{title}' +
											'<span class="list-item-location">{location}</span>'+
											'<span class="list-item-rating">Rating: {rating}/5</span>'+
										'</div>'+
									'</div>',
						store: 'editorsPicks',

>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
						listeners: {
							itemtap: {
								scope: this,
								fn: this.onListSelect
							}
						}
					}
				],
				listeners: {
					push: function(navView, newView, eOpts){
						Ext.getCmp('search-back-button').show();
<<<<<<< HEAD
					},
					pop: function(navView, newView, eOpts){
						Ext.getCmp('search-back-button').hide();
					},
					painted: function (a, b){
						console.log('Search view painted');
						if(!(Ext.getCmp('back-button').isHidden())) {
							Ext.getCmp('back-button').hide();
							Ext.getCmp('homeNavigationView').pop();
						}
						
						//Ext.getCmp('search-back-button').hide();
=======
						Ext.getCmp('filter_menu_button').hide();
						Ext.getCmp('filterMenuPopupView_id').hide();
					},
					pop: function(navView, newView, eOpts){
						if(Ext.getCmp('searchNavigationView').getInnerItems().length == 1) {
							Ext.getCmp('search-back-button').hide();
							Ext.getCmp('filter_menu_button').show();
						}
					},
					painted: function (a, b){
						console.log('Search view painted');
						//console.log(Ext.getCmp('searchNavigationView').getInnerItems().length);
						
						if(!(Ext.getCmp('back-button').isHidden())) {
							Ext.getCmp('back-button').hide();
						}
						if(Ext.getCmp('searchNavigationView').getInnerItems().length == 1) {
							Ext.getCmp('filter_menu_button').show();
						}
						if(Ext.getCmp('searchNavigationView').getInnerItems().length > 1) {
							Ext.getCmp('search-back-button').show();
						}
						
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
					}
				}
		};

		this.add([searchNavigationView]);
	},

	onListSelect: function(view, index, target, record){
		this.fireEvent('listItemSelected', record);
	}
});
