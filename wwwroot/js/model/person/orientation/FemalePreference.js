
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Preference"
	],
	function( Preference ){
	
	
		// I represent a general preference for the Female gender.
		function FemalePreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		
		// Extend Identity.
		FemalePreference.prototype = Object.create( Preference.prototype ); 
		
		
		// I return the abbreviated representation.
		FemalePreference.prototype.abbreviation = function(){

			return( "F" );

		};
		
		
		// I flag whether or not the given person satisfys the 
		// underlying preference.
		FemalePreference.prototype.prefers = function( person ){
			
			// Preference will be satisfied if / only if the given
			// person is considered Female.
			return( person.isFemale() );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( FemalePreference );
		
	
	}
);
