
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Preference"
	],
	function( Preference ){
	
	
		// I represent the general preference for the Male gender.
		function MalePreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		
		// Extend Identity.
		MalePreference.prototype = Object.create( Preference.prototype ); 
		
		
		// I return the abbreviated representation.
		MalePreference.prototype.abbreviation = function(){
		
			return( "M" );
		
		};
		
		
		// I flag whether or not the given person satisfys the 
		// underlying preference.
		MalePreference.prototype.prefers = function( person ){
			
			// Preference will be satisfied if / only if the given
			// person is considered Male.
			return( person.isMale() );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MalePreference );
		
	
	}
);
