
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Match( person1, person2 ){
			
			this._person1 = person1;
			this._person2 = person2;
			
		}
		
		
		Match.prototype = {
			
			getPerson1: function(){
				
				return( this._person1 );
				
			},
			
			
			getPerson2: function(){
				
				return( this._person2 );
				
			},
			
			
			isPromising: function(){
				
				return(
					this._person1.isAttractedTo( this._person2 ) &&
					this._person2.isAttractedTo( this._person1 )
				);
				
			}
						
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Match );
	
	
	}
);