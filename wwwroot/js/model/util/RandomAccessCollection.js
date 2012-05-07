
// Define class requirments and constructor.
define(
	[
		"model/util/Collection"
	],
	function( Collection ){
	
	
		// I extend the Collection class, adding logic for randomly
		// selecting values within the collection. I have logic such
		// that two subsequent random access values should not be 
		// located at the same internal index.
		function RandomAccessCollection(){
			
			// Call the super constructor.
			Collection.apply( this, arguments );
			
			// Keep track of the last randomly-accessed index so that
			// we can prevent two subsequent random index values from
			// being the same.
			this._lastRandomIndex = null;
			
		}
		
		
		// Extend the core Collection class.
		RandomAccessCollection.prototype = Object.create( Collection.prototype );
		
		
		// I get a random element from the collection.
		RandomAccessCollection.prototype.getRandom = function(){

			var randomIndex = this.getRandomIndex();
			
			var randomItem = this.get( randomIndex );

			return( randomItem );

		};


		// I get a random index that is in-bounds for the collection. 
		// Subsequent calls to this method should return different 
		// values unless the collection only has one element (at which
		// point we can not have any variation).
		RandomAccessCollection.prototype.getRandomIndex = function(){
			
			// If there is only one element, we will only have the 
			// first index.
			if (this.size() === 1){
				
				return( 0 );
				
			}
			
			// Keep selecting random indices until we have one that 
			// is different from the previously selected index.
			do {
				
				var randomIndex = this.randRange( 0, this._values.length );
				
			} while ( randomIndex === this._lastRandomIndex );

			// Store the randomly-selected index for future reference.
			this._lastRandomIndex = randomIndex;

			return( randomIndex );

		};
		

		// I am a utility method selects a random value from bewteen 
		// the two values. The low value is inclusive; the high value
		// is exclusive.
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