
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		// I model the gender identity and preference of a person.
		function Orientation( identity, prefrence ){
		
			this._identity = identity;
			this._preference = prefrence;
			
		}
		
		
		// Define the instance methods.
		Orientation.prototype = {
			
			// I return the abbreviated representation of the gender
			// identity and preference (ex. F<=>M).
			getAbbreviation: function(){
				
				return(
					this._identity.abbreviation() + 
					"<=>" +
					this._preference.abbreviation()
				);
				
			},
			
			
			// I flag whether or not this orientation would be 
			// attracted to the given person (based on gender
			// preference).
			isAttractedTo: function( person ){
			
				return(
					this._preference.prefers( person )
				);
			
			},
			
			
			// I flag whether or not the orientation identifies as 
			// Female. While the underlying identity can be fluid, we
			// want to provide easy access to the two primary genders.
			identifiesAsFemale: function(){

				return( this._identity.isFemale() );
				
			},
			
			
			// I flag whether or not the orientation identifies as 
			// Male. While the underlying identity can be fluid, we
			// want to provide easy access to the two primary genders.
			identifiesAsMale: function(){

				return( this._identity.isMale() );
				
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Orientation );
	
	}
);
