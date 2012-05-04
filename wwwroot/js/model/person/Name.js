
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Name( name ){
			
			this._name = name;
			
		}
		
		
		Name.prototype = {
			
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