
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Preference(){
			// ...
		}
		
		
		Preference.prototype.isSexuallyAppealing = function( person ){
		
			throw( new Error( "AbstractMethod" ) );
		
		}
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Preference );
		
	
	}
);