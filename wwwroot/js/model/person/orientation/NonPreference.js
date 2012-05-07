
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Preference"
	],
	function( Preference ){
	
	
		// I represent a non-specific attraction to gender. That is, 
		// I am attracted to both Male and Female genders.
		function NonPreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		
		// Extend Identity.
		NonPreference.prototype = Object.create( Preference.prototype ); 
		
		
		// I return the abbreviated representation.		
		NonPreference.prototype.abbreviation = function(){

			return( "M/F" );

		};
		
		
		// I flag whether or not the given person satisfys the 
		// underlying preference.
		NonPreference.prototype.prefers = function( person ){
			
			// Since this preference is not gender-specific, we can
			// return true without checking the given person.
			return( true );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( NonPreference );
	
	
	}
);
