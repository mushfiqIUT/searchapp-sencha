Ext.define('Jenenei.store.New', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Rest',
		'Jenenei.model.ItemSummary'
    ],
    config: {
        model: 'Jenenei.model.ItemSummary',
        storeId: 'new',
        autoLoad: true,
        proxy: {
            type:'rest',
<<<<<<< HEAD
            url:'json/special_picks.json', 
=======
            url:'json/special_picks.json', //http://27.147.237.204/jenenei/json/special_picks.json
>>>>>>> 6bbc32c320c2a163850f94a0bc4d442b7dae6edd
            reader: {
                type:'json',
                rootProperty: 'items'
            },
            noCache: false,
            limitParam: false,
            headers: {                
                'Accept' : 'application/json'                 
            }
        },
		filters: [
			{
				property: "category",
				value: /NEW/
			}
		]
    }
});