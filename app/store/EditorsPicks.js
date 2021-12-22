Ext.define('Jenenei.store.EditorsPicks', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Rest',
		'Jenenei.model.ItemSummary'
    ],
    config: {
        model: 'Jenenei.model.ItemSummary',
        storeId: 'editorsPicks',
        autoLoad: true,
        proxy: {
            type:'rest',
            url:'json/special_picks.json', //  http://27.147.237.204/jenenei/json/special_picks.json
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
				value: /EDPK/
			}
		]
    }
});