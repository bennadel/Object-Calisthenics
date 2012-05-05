
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Collection(){
			
			this._values = Array.apply( null, arguments );
			
		}
		
		
		Collection.prototype = {
			
			addAll: function(){
				
				
				
			},

			get: function( index ){
			
				return( this._values[ index ] );
			
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
			
			
			size: function(){
				
				return( this._values.length );
				
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Collection );
	
	
	}
);