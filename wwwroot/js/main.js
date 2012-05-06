
// Polyfill the Object.create() method since we'll be using it in our
// class extension and inheritance relationships.
if (!Object.hasOwnProperty( "create" )){
	
	Object.create = function( superClass ){
		
		var Connector = function(){};
		
		Connector.prototype = superClass();
		
		return( new Connector() );
		
	};

}


// Define the paths to be used in the script mappings. Also, define
// the named modules for any libraries that are AMD compliant.
require.config({
	baseUrl: "js/",
	paths: {
		"model": "model"
	}
});


// Load the application. For this exploration, we're not going to use
// an actual application object - we'll just run everything right in
// the Main file.
require(
	[
		"model/Factory"
	],
	function( Factory ){
	
		var factory = new Factory();
		
		var matchMaker = factory.createMatchMaker();
		
		for (var i = 0 ; i < 10 ; i++){
			
			matchMaker.introduce( factory.createPerson() );
			
		}
		
		var matches = matchMaker.suggestMatches();
		
		for (var i = 0 ; i < matches.size() ; i++){
			
			console.log( matches.toString( i ) );
			
		}
		
	}
);














































