
// Define class requirments and cosntructor.
define(
	[
		"model/person/orientation/Identity"
	],
	function( Identity ){
	
	
		function MaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		// Extend Identity.
		MaleIdentity.prototype = Object.create( Identity ); 
		
		
		MaleIdentity.prototype.abbreviation = function(){
			
			return( "M" );
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MaleIdentity );
		
	
	}
);