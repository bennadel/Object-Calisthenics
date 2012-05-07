
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		// I represent a gender preference.
		function Preference(){
			// ...
		}
		
		
		// Define the instance methods.
		Preference.prototype = {

			// I return the abbreviated representation.
			abbreviation: function(){
		
				throw( new Error( "AbstractMethod" ) );
			
			},
			
			
			// I determine whether or not the given person satisfies
			// the underlying gender preference.
			prefers: function( person ){
		
				throw( new Error( "AbstractMethod" ) );
			
			}

		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Preference );
		
	
	}
);
