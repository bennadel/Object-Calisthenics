
// Define class requirments and constructor.
define(
	[],
	function(){
	
		function Orientation( identity, prefrence ){
		
			this._identity = identity;
			this._preference = prefrence;
			
		}
		
		
		Orientation.prototype = {
			
			getAbbreviation: function(){
				
				return(
					this._identity.abbreviation() + 
					"<=>" +
					this._preference.abbreviation()
				);
				
			},
			
			
			isAttractedTo: function( person ){
			
				return(
					this._preference.prefers( person )
				);
			
			},
			
			
			identifiesAsFemale: function(){

				return( this._identity.isFemale() );
				
			},
			
			
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