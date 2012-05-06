
// Define class requirments and cosntructor.
define(
	[
		"model/util/Collection"
	],
	function( Collection ){
	
	
		function RandomAccessCollection(){
			
			Collection.apply( this, arguments );
			
			this._lastRandomIndex = null;
			
		}
		
		
		RandomAccessCollection.prototype = Object.create( Collection.prototype );
		
		
		RandomAccessCollection.prototype.getRandom = function(){

			var randomIndex = this.getRandomIndex();
			
			var randomItem = this.get( randomIndex );

			return( randomItem );

		};


		RandomAccessCollection.prototype.getRandomIndex = function(){
			
			if (this.size() === 1){
				
				return( 0 );
				
			}
			
			do {
				
				var randomIndex = this.randRange( 0, this._values.length );
				
			} while ( randomIndex === this._lastRandomIndex );

			this._lastRandomIndex = randomIndex;

			return( randomIndex );

		};
		

		RandomAccessCollection.prototype.randRange = function( low, highExclusive ){
			
			var randomValue = (
				low +
				Math.floor( (highExclusive - low) * Math.random() )
			);

			return( randomValue );

		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( RandomAccessCollection );
	
	
	}
);