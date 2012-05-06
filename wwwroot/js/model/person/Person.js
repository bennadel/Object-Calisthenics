
// Define class requirments and cosntructor.
define(
	[ 
		"model/person/orientation/FemaleIdentity",
		"model/person/orientation/MaleIdentity"
	],
	function( FemaleIdentity, MaleIdentity ){
	
	
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
			
				return(
					this._orientation.identifiesAs( FemaleIdentity )
				);
			
			},
			
			
			isMale: function(){
			
				return(
					this._orientation.identifiesAs( MaleIdentity )
				);
			
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