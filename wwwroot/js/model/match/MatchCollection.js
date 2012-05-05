
// Define class requirments and cosntructor.
define(
	[
		"../util/Collection"
	],
	function( Collection ){
	
	
		function MatchCollection(){
			
			Collection.apply( this, arguments )
			
		}
		
		
		MatchCollection.prototype = Object.create( Collection.prototype );
		
		
		MatchCollection.prototype.removeBadMatches = function(){
			
			for (var i = this._values.length - 1 ; i >= 0 ; i--){
				
				this.removeMatchIfBad( i );
				
			}
			
		};
		
		
		MatchCollection.prototype.removeMatchIfBad = function( index ){

			if (!this._values[ index ].isPromising()){

				this._values.splice( index, 1 );

			}

		};

		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MatchCollection );
	
	
	}
);