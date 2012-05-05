
// Define class requirments and cosntructor.
define(
	[
		"./Preference"
	],
	function( Preference ){
	
	
		function NonPreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		// Extend Identity.
		NonPreference.prototype = Object.create( Preference ); 
		
		
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