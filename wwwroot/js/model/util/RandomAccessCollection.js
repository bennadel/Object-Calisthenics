
// Define class requirments and cosntructor.
define(
	[
		"./Collection"
	],
	function( Collection ){
	
	
		function RandomAccessCollection(){
			
			Collection.apply( this, arguments )
			
		}
		
		
		RandomAccessCollection.prototype = Object.create( Collection.prototype );
		
		
		RandomAccessCollection.prototype.getRandom = function(){

			return(
				this.get(
					this.randRange( 0, this._values.length )
				)
			);

		};


		RandomAccessCollection.prototype.randRange = function( low, highExclusive ){

			return(
				Math.floor( (highExclusive - low) * Math.random() ) + low
			);

		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( RandomAccessCollection );
	
	
	}
);