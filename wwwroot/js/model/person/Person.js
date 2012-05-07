
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		function Person( name, orientation ){

			this._name = name;
			this._orientation = orientation;
			
		}
		
		
		Person.prototype = {
			
			getPersonalAd: function(){
				
				return(
					this._orientation.getAbbreviation()
				);
				
			},
			
			
			isAttractedTo: function( otherPerson ){
				
				return(
					this._orientation.isAttractedTo( otherPerson )
				);
				
			},
			
			
			isFemale: function(){
			
				return( this._orientation.identifiesAsFemale() );
			
			},
			
			
			isMale: function(){
			
				return( this._orientation.identifiesAsMale() );
			
			},
			
			
			toString: function(){
			
				return( "[Person " + this._name.toString() + " - " + this.getPersonalAd() + "]" );
				
			}
		
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Person );
	
	
	}
);