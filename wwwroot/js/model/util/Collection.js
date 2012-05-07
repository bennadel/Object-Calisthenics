
// Define class requirments and constructor.
define(
	[],
	function(){
	
		
		// I am the core Collection class. I wrap an native 
		// JavaScript array. The only purpose of this class is to
		// provide a home for collection-based logic. The only 
		// property that I am allowed to have (according to the 
		// Object Calisthetics) is the wrapped array.
		function Collection(){
			
			// Wrap the native JavaScript array.
			this._values = Array.apply( null, arguments );
			
		}
		
		
		// Define the instance methods.
		Collection.prototype = {
			
			// I get the value at the given index.
			get: function( index ){
			
				return( this._values[ index ] );
			
			},
			
			
			// I remove the value at the end of the collection.
			pop: function(){
			
				return( this._values.pop() );
			
			},
			
			
			// I add a new element onto the end of the collection.
			push: function( value ){
			
				this._values.push( value );
			
			},
			
			
			// I return the number of items stored in the collection.
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
