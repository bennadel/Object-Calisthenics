
// Define class requirments and constructor.
define(
	[
		"model/util/Collection"
	],
	function( Collection ){
	
	
		// I represent a collection of Matches.
		function MatchCollection(){
			
			Collection.apply( this, arguments )
			
		}
		
		
		// Extend the core Collection class.		
		MatchCollection.prototype = Object.create( Collection.prototype );
		
		
		// I deterine if the given match already exists in the current
		// collection - the order of the people within the match is 
		// not taken into account.
		MatchCollection.prototype.exists = function( match ){
			
			// Loop over each item to check equality.
			//
			// NOTE: I know that this approach violates Rule #1 - one
			// level of indentation per method; however, as this is a
			// class specifically for collections, I find it hard to 
			// perform logic across the collection without an extra
			// level of indentation.
			for (var i = 0 ; i < this.size() ; i++){
				
				if (this.get( i ).equals( match )){
					
					return( true );
					
				}
				
			}
			
			// If none matched, the given match doesn't exist.
			return( false );
			
		};
		
	
		// I add the given match to the collection; but, I only add 
		// it if it didn't already exist.
		MatchCollection.prototype.push = function( match ){

			if (this.exists( match )){
				
				return;
				
			}
			
			Collection.prototype.push.call( this, match );

		};

	
		// I remove any matches from the collection that don't appear
		// to foster a possible relationship (based on attraction).
		MatchCollection.prototype.removeBadMatches = function(){
			
			for (var i = this._values.length - 1 ; i >= 0 ; i--){
				
				this.removeMatchIfBad( i );
				
			}
			
		};
		
		
		// I remove the match at the given index if it doesn't look
		// to foster a possible relationship.
		MatchCollection.prototype.removeMatchIfBad = function( index ){

			if (!this._values[ index ].isPromising()){

				this._values.splice( index, 1 );

			}

		};
		
	
		// I return the string representation of the match at the
		// given index.
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
