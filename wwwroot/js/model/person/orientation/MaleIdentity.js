
// Define class requirments and constructor.
define(
	[
		"model/person/orientation/Identity"
	],
	function( Identity ){
	
	
		// I model the male gender identity.
		function MaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		
		// Extend Identity.
		MaleIdentity.prototype = Object.create( Identity.prototype ); 
		
		
		// I return the abbreviated representation.
		MaleIdentity.prototype.abbreviation = function(){
			
			return( "M" );
			
		};
		
		
		// I flag that this identity represents the general 
		// understanding of the male gender.
		MaleIdentity.prototype.isMale = function(){
			
			return( true );
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MaleIdentity );
		
	
	}
);
