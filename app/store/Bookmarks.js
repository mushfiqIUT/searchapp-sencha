Ext.define('Jenenei.store.Bookmarks', {
    extend: 'Ext.data.Store',
    requires: [
        'Jenenei.model.ItemSummary',
		'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: 'Jenenei.model.ItemSummary',
        storeId: 'bookmarkStore',
        autoLoad: true,
        proxy: {
            type: 'localstorage',
			id: 'bookmarks',
			proxy:{idProperty:'id'}  
        }
    },
	listeners: {
		addrecords: function(store, records, eOpts) {
			Ext.each(records, function(record) {
				//console.log(record);
				//record.setDirty();
			});
		},
		removerecords: function(store, records, indices, eOpts){
			Ext.each(records, function(record) {
				//record.phantom = true;
				//record.setDirty();
				//record.erase();
			});
		}
	}
});