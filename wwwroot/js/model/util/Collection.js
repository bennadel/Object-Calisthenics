
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Collection(){
			
			this._values = Array.apply( null, arguments );
			
		}
		
		
		Collection.prototype = {

			get: function( index ){
			
				return( this._values[ index ] );
			
			},
			
			
			getRandom: function(){

				return(
					this.get(
						this.randRange( 0, this._values.length )
					)
				);
				
			},


			pop: function(){
			
				return( 
					this._values.pop() 
				);
			
			},
			
			
			push: function( value ){
			
				this._values.push( value );
			
				return( this );
			
			},
			
			
			randRange: function( low, highExclusive ){
			
				return(
					Math.floor( (highExclusive - low) * Math.random() ) + low
				);
			
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Collection );
	
	
	}
);