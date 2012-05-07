
// Define class requirments and constructor.
define(
	[
		"model/util/Collection"
	],
	function( Collection ){
	
	
		function MatchCollection(){
			
			Collection.apply( this, arguments )
			
		}
		
		
		MatchCollection.prototype = Object.create( Collection.prototype );
		
		
		MatchCollection.prototype.exists = function( match ){
			
			for (var i = 0 ; i < this.size() ; i++){
				
				if (this.get( i ).equals( match )){
					
					return( true );
					
				}
				
			}
			
			return( false );
			
		};
		
	
		MatchCollection.prototype.push = function( match ){

			if (this.exists( match )){
				
				return;
				
			}
			
			Collection.prototype.push.call( this, match );

		};

	
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
		
	
		MatchCollection.prototype.toString = function( index ){

			return( 
				this.get( index ).toString()
			);

		};

		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MatchCollection );
	
	
	}
);