
// Define class requirments and cosntructor.
define(
	[
		"./Preference"
	],
	function( Preference ){
	
	
		function MalePreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		// Extend Identity.
		MalePreference.prototype = Object.create( Preference ); 
		
		
		MalePreference.prototype.isSexuallyAppealing = function( person ){
			
			return( person.isMale() );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MalePreference );
		
	
	}
);