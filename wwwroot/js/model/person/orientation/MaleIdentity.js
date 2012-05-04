
// Define class requirments and cosntructor.
define(
	[
		"./Identity"
	],
	function( Identity ){
	
	
		function MaleIdentity(){
		
			// Invoke super constructor logic.
			Identity.call( this );
		
		}
		
		// Extend Identity.
		MaleIdentity.prototype = Object.create( Identity ); 
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MaleIdentity );
		
	
	}
);