
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
		function Orientation( identity, prefrence ){
		
			this._identity = identity;
			this._preference = prefrence;
			
		}
		
		
		Orientation.prototype = {
			
			isAttractedTo: function( person ){
			
				return(
					this._preference.prefers( person )
				);
			
			},
			
			identifiesAs: function( Identity ){

				return( this._identity instanceof Identity );
				
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Orientation );
	
	}
);