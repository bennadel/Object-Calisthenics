
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Preference(){
			// ...
		}
		
		
		Preference.prototype.abbreviation = function(){
		
			throw( new Error( "AbstractMethod" ) );
		
		};
		
		
		Preference.prototype.prefers = function( person ){
		
			throw( new Error( "AbstractMethod" ) );
		
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Preference );
		
	
	}
);