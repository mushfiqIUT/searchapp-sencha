Ext.define('Jenenei.util.Functions', {
	singleton : true,
	config : {

	},
	constructor : function(config) {
		this.initConfig(config);
		this.callParent([config]);
	},
	getRatingHtml: function(rating) {
		var ratingHtml = "";
		for (var i = 0; i <= 5; i++){
			if (i < rating && i+1 <= rating) {
				ratingHtml += '<span class="full"></span>';
			} else if (i < rating && i+1 > rating){
				ratingHtml += '<span class="half"></span>';
				i++;
			} else if (i > rating) {
				ratingHtml += '<span class="empty"></span>';
			}
		}
		
		return ratingHtml;
	},
	getContactHtml: function(item) {
		var contactHtml = "";
		if (item.phone != 'undefined' && item.phone != ''){
			contactHtml += '<div class="contact-item"><span class="icon phone"> ' + item.phone + '</div>';
		}
		if (item.web != 'undefined' && item.web != ''){
			contactHtml += '<div class="contact-item"><span class="icon web"> ' + item.web + '</div>';
		}
		if (item.email != 'undefined' && item.email != ''){
			contactHtml += '<div class="contact-item"><span class="icon email"> ' + item.email + '</div>';
		}
		
		return contactHtml;
	}
});