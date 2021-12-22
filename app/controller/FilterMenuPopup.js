Ext.define('Jenenei.controller.FilterMenuPopup', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			filterView: 'filterMenuPopup',
			//filterMenuButton: '#filter_menu_button',
			mainView: 'main'
		},
		control: {
			/*filterMenuButton: {
				tap: 'openFilterMenu'
			},*/
			mainView: {
				filterMenuClicked: 'openFilterMenu'
			}
		}
	},

	openFilterMenu: function (btn) {

		//console.log('filter button from controller');
		
		if(this.getFilterView().isHidden()) {
			this.getFilterView().showBy(btn);
		}
		else {
			this.getFilterView().hide();
		}
	},
});