
// Define class requirments and constructor.
define(
	[],
	function(){
	
		
		// I represent a Person's name. According to the Object 
		// Calisthenics, I have to wrap primitive values.
		function Name( name ){
			
			this._name = name;
			
		}
		
		
		// Define the instance methods.
		Name.prototype = {
			
			// I return the string representation.
			toString: function(){

				return( this._name );
				
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Name );
	
	
	}
);