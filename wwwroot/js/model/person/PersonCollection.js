
// Define class requirments and cosntructor.
define(
	[
		"../util/Collection"
	],
	function( Collection ){
	
	
		function PersonCollection(){
			
			Collection.apply( this, arguments )
			
		}
		
		
		PersonCollection.prototype = Object.create( Collection.prototype );
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( PersonCollection );
	
	
	}
);