var RestView = function() {
	this.initialize = function() {
		// Define a div wrapper for the view. The div wrapper is used to attach events.
		this.el = $('<div/>');
	};

	
	this.getTweets = function() {
		
	    var twurl = "http://search.twitter.com/search.json?q=mesan&rpp=10&callback=?";
	    
	    $.getJSON(twurl, function(data){
	    	$('.tweet-list').html(RestView.liTemplate({tweet: data}));
	    	
	        navigator.notification.alert(
	                'Data hentet!',  // message
	                'Ferdig',        // title
	                'OK'             // buttonName
	        );
	    });
	}
	
	this.render = function() {
		this.el.html(RestView.template());
		this.getTweets();
		return this;
	}

	this.initialize();

}

RestView.template = Handlebars.compile($("#rest-tpl").html());
RestView.liTemplate = Handlebars.compile($("#rest-li-tpl").html());

