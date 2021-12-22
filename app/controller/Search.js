
Ext.define('Jenenei.controller.Search', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			searchCard: 'searchCard',

		},
		control: {
			searchCard: {
				listItemSelected: 'onListSelected'
			}
		}
	},

	onListSelected: function(record){

		//console.log('searchlist selected '+ record.data.title);
		var navView = Ext.getCmp('searchNavigationView');
		var itemDetailsView = Ext.create('Jenenei.view.ItemDetails',{
			record: record.data
		});
		navView.push(itemDetailsView);
	}
});