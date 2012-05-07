
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Preference"
	],
	function( Preference ){
	
	
		function MalePreference(){
		
			// Invoke super constructor logic.
			Preference.call( this );
		
		}
		
		// Extend Identity.
		MalePreference.prototype = Object.create( Preference ); 
		
		
		MalePreference.prototype.abbreviation = function(){
		
			return( "M" );
		
		};
		
		
		MalePreference.prototype.prefers = function( person ){
			
			return( person.isMale() );
			
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MalePreference );
		
	
	}
);