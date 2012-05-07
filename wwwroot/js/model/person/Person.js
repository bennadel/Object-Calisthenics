
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		// I model a person as having a name and an orientation (which
		// further defined gender identity and gender preference).
		function Person( name, orientation ){

			this._name = name;
			this._orientation = orientation;
			
		}
		
		
		// Define the instance methods.
		Person.prototype = {
			
			// I return the gender identity and preference for the 
			// person as they may use in an online / printed personal
			// ad (ex. "M4F"). 
			getPersonalAd: function(){
				
				return(
					this._orientation.getAbbreviation()
				);
				
			},
			
			
			// I flag whether or not this person could be attracted 
			// to the given person based on orientation.
			isAttractedTo: function( otherPerson ){
				
				return(
					this._orientation.isAttractedTo( otherPerson )
				);
				
			},
			
			
			// While gender identity is polymorphic, we want to 
			// provide easy-access hooks into the two common gender
			// identities. This returns true if the person closely
			// identifies with the Female gender.
			isFemale: function(){
			
				return( this._orientation.identifiesAsFemale() );
			
			},
			
			
			// While gender identity is polymorphic, we want to 
			// provide easy-access hooks into the two common gender
			// identities. This returns true if the person closely
			// identifies with the Male gender.
			isMale: function(){
			
				return( this._orientation.identifiesAsMale() );
			
			},
			
			
			// I return the string represenation of this person.
			toString: function(){
			
				return( 
					"[Person " + this._name.toString() + " - " + 
					this.getPersonalAd() + "]" 
				);
				
			}
		
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Person );
	
	
	}
);