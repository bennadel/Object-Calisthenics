
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Identity(){
			// ...
		}
		
		
		Identity.prototype.abbreviation = function(){

			throw( new Error( "AbstractMethod" ) );

		};
	
	
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Identity );
	
	
	}
);