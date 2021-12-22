Ext.define('Jenenei.model.ItemSummary', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'auto' },
            { name: 'category', type: 'auto' },
			{ name: 'location', type: 'auto' },
			{ name: 'rating', type: 'auto' },
			{ name: 'thumb', type: 'auto' },
			{ name: 'web', type: 'auto' },
			{ name: 'phone', type: 'auto' },
			{ name: 'email', type: 'auto' }
        ],
		idProperty: 'id'
    }
});
