
// Define class requirments and cosntructor.
define(
	[
		"./Identity"
	],
	function( Identity ){
	
	
		function FemaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		// Extend Identity.
		FemaleIdentity.prototype = Object.create( Identity ); 
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( FemaleIdentity );
		
	
	}
);