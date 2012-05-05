
// Define class requirments and cosntructor.
define(
	[
		"./Preference"
	],
	function( Preference ){
	
	
		function FemalePreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		// Extend Identity.
		FemalePreference.prototype = Object.create( Preference ); 
		
		
		FemalePreference.prototype.prefers = function( person ){
			
			return( person.isFemale() );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( FemalePreference );
		
	
	}
);