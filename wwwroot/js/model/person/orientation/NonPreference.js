
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Preference"
	],
	function( Preference ){
	
	
		function NonPreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		// Extend Identity.
		NonPreference.prototype = Object.create( Preference ); 
		
		
		NonPreference.prototype.abbreviation = function(){

			return( "M/F" );

		};
		
		
		NonPreference.prototype.prefers = function( person ){
			
			// Gender is irrelevant.
			return( true );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( NonPreference );
	
	
	}
);