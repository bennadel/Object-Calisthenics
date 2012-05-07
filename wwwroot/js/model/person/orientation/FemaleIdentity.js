
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Identity"
	],
	function( Identity ){
	
		
		// I model the female gender identity.
		function FemaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		
		// Extend Identity.
		FemaleIdentity.prototype = Object.create( Identity.prototype ); 
		
		
		// I return the abbreviated representation.
		FemaleIdentity.prototype.abbreviation = function(){

			return( "F" );

		};
		
		
		// I flag that this identity represents the general 
		// understanding of the female gender.
		FemaleIdentity.prototype.isFemale = function(){
			
			return( true );
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( FemaleIdentity );
		
	
	}
);
