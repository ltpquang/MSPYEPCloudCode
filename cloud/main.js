

Parse.Cloud.beforeSave("JoiningInfo", function(request, response) {
	var query = new Parse.Query("JoiningInfo");
  		query.equalTo("event", request.object.get("event"));
  		query.find({
  	  	success: function(results) {
  	  		
  	  		var randomCodes = [];
	    	for (var i = 0; i < results.length; ++i) {
	    		randomCodes.push(results[i].get("connectCode"));
	    	}
  	    	var randomCode = "";
  	        var possible = "123456789";

  	        for( var i=0; i < 5; i++ )
  	            randomCode += possible.charAt(Math.floor(Math.random() * possible.length));

  	        while( randomCodes.indexOf(randomCode) > -1 ) {
  	        	randomCode = "";
  	        	for( var i=0; i < 5; i++ )
  	            	randomCode += possible.charAt(Math.floor(Math.random() * possible.length));
  	        }

  	        request.object.set("connectCode", randomCode);
  	        console.log(randomCode);
  	        response.success();

  	  },
  	  error: function() {
  	    
  	  }
  	});

	
});
