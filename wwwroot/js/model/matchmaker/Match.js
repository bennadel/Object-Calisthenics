
// Define class requirments and cosntructor.
define(
	[],
	function(){
	
	
		function Match( person1, person2 ){
			
			this._person1 = person1;
			this._person2 = person2;
			
		}
		
		
		Match.prototype = {
			
			equals: function( match ){

				return(
						(
							(this._person1 === match.getPerson1()) &&
							(this._person2 === match.getPerson2())
						)
					||
						(
							(this._person2 === match.getPerson1()) &&
							(this._person1 === match.getPerson2())
						)
				);

			},

			
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
				
			},
			
			
			toString: function(){

				return(
					this._person1.toString() +
					" :: " +
					this._person2.toString()
				);

			}
		
						
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Match );
	
	
	}
);