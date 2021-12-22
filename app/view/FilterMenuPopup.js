
Ext.define('Jenenei.view.FilterMenuPopup', {
	extend: 'Ext.Panel',
	alias: 'widget.filterMenuPopup',
	requires: [
		'Ext.field.Select',
		'Ext.field.Search'

	],

	//id: 'filterMenuPopupView_id',

	config: {
		width: 250,
		height: 200,
		labelWidth: 70,
		filterBtnWidth: 115,
		cancelBtnWidth: 115,
		btnStyle: 'font-size: 7pt; color: #117BBE;'
	},

	initialize: function () {
		this.callParent(arguments);

		var categoryFilter,
			distanceFilter,
			textFilter,
			btnPanel,
			filterBtn,
			cancelBtn;


		categoryFilter = {			
			xtype: 'selectfield',
			name: 'categoryFilter',
			id: 'categoryFilter',
			width: '90%',
			label: 'Category',
			labelWidth: '35%',
			options: [
				{text: 'Restaurants', value: 1},
				{text: 'Banks', value: 2},
				{text: 'Hotels', value: 3},
				{text: 'Hospitals', value: 4},
				{text: 'Market', value: 5}
			]						
		};

		distanceFilter = {			
			xtype: 'selectfield',
			name: 'distanceFilter',
			id: 'distanceFilter',
			width: '90%',
			label: 'Distance',
			labelWidth: '35%',
			options: [
				{text: 'No Distance Filter', value: -1},
				{text: 'Within 7km', value: 7},
				{text: 'Within 5km', value: 5},
				{text: 'Within 3km', value: 3},
				{text: 'Within 1km', value: 1}
			]					
		};

		textFilter = {
			xtype: 'searchfield',
			placeHolder: 'Search By Locations',
			width: '90%',
			id: 'textFilter'
		};
		
		filterBtn = {
			xtype: 'button',
			cls: 'saveButton',
			ui: 'light',
			height: 20,
			width: this.getFilterBtnWidth(),
			text: 'Filter',
			style: this.getBtnStyle(),
			handler: this.filterList
		};
		cancelBtn = {
			xtype: 'button',
			ui: 'light',
			height: 20,
			width: this.getCancelBtnWidth(),
			text: 'Cancel',
			style: this.getBtnStyle(),
			handler: function() {
				this.parent.parent.hide();
			}
		};

		btnPanel = {
			xtype:'panel',
			layout: 'hbox',
			items: [
				{xtype: 'spacer'},
				filterBtn,
				{xtype: 'spacer'},
				cancelBtn,
				{xtype: 'spacer'}
			]
		};

		this.add([
			categoryFilter,
			distanceFilter,
			textFilter,
			btnPanel
		]);
	},

	filterList: function () {
		console.log('Implement filter call event');
	}
});