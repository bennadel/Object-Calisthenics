



// Polyfill the create() method.
if (!Object.hasOwnProperty( "create" )){
	
	Object.create = function( superClass ){
		
		var Connector = function(){};
		
		Connector.prototype = superClass();
		
		return( new Connector() );
		
	};

}

// Define the paths to be used in the script mappings. Also, define
// the named module for certain libraries that are AMD compliant.
require.config({
	baseUrl: "js/",
	paths: {
		"controller": "controller",
		"domReady": "lib/require/domReady",
		"jquery": "lib/jquery/jquery-1.7.2",
		"model": "model",
		"signal": "lib/signal",
		"text": "lib/require/text",
		"view": "view"
	}
});


// Load the application.
require(
	[
		"model/Factory",
		"jquery",
		"application",
		"domReady",
	],
	function( Factory, $, Application ){
	
		console.log( "Smallest thing working!" );
		
		var factory = new Factory();
		
		var m = factory.createMale();
		var f = factory.createFemale();
		
		console.log( m.toString() );
		console.log( f.toString() );
		
		console.log( m.isAttractedTo( f ) );
		console.log( f.isAttractedTo( m ) );
		
		
	}
);














































