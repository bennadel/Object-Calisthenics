
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		// I model the gender identity for a person. The core values
		// are Male and Female; however, non-core values are possible
		// through polymorphism.
		function Identity(){
			// ...
		}
		
		
		// Define the instance properties.
		Identity.prototype = {
			
			// I return the abbreviated representation of the 
			// given identity.
			abbreviation: function(){

				throw( new Error( "AbstractMethod" ) );

			},
			
			
			// I determine if the identity represents female.
			isFemale: function(){
				
				// This will only be true in sub-classed methods.
				return( false );
				
			},
			
			
			// I determine if the identity represents male.
			isMale: function(){
				
				// This will only be true in sub-classed methods.
				return( false );
				
			}
			
		};
		
	
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Identity );
	
	
	}
);
