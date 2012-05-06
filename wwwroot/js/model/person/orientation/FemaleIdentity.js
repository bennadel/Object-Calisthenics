
// Define class requirments and cosntructor.
define(
	[
		"model/person/orientation/Identity"
	],
	function( Identity ){
	
	
		function FemaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		// Extend Identity.
		FemaleIdentity.prototype = Object.create( Identity ); 
		
		
		FemaleIdentity.prototype.abbreviation = function(){

			return( "F" );

		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( FemaleIdentity );
		
	
	}
);