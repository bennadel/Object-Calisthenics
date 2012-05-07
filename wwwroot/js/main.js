
// Polyfill the Object.create() method since we'll be using it in our
// class extension and inheritance relationships.
if (!Object.hasOwnProperty( "create" )){
	
	Object.create = function( superClass ){
		
		var Connector = function(){};
		
		Connector.prototype = superClass;
		
		return( new Connector() );
		
	};

}


// ---------------------------------------------------------- //
// ---------------------------------------------------------- //


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
	
	
		// Create an instance of our factory. The factory is 
		// responsible for creating new instances of the Person
		// class with a certain amount of randomness.
		var factory = new Factory();
		
		// Create our match maker - this is the domain entity that
		// will come up with pairings of people who may have a 
		// successful relationship.
		var matchMaker = factory.createMatchMaker();
		
		// Create a number of people and "introduce" them to the 
		// match maker.
		for (var i = 0 ; i < 10 ; i++){
			
			var randomPerson = factory.createPerson();
			
			matchMaker.introduce( randomPerson );
			
		}
		
		// Now that we have introduced a number of people to the 
		// match maker, ask the match maker to suggest matches that
		// might lead to viable relationships.
		var matches = matchMaker.suggestMatches();
		
		// Output the suggested matches.
		for (var i = 0 ; i < matches.size() ; i++){
			
			console.log( matches.toString( i ) );
			
		}
		
		
	}
);
