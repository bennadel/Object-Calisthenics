
// Define class requirments and constructor.
define(
	[
		"model/util/Collection"
	],
	function( Collection ){
	
		function Blackbook(){
		
			Collection.apply( this, arguments );
		
		}
		
		
		// Extend core collection.
		Blackbook.prototype = Object.create( Collection.prototype );
			
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Blackbook );
	
	}
);