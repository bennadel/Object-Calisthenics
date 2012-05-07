
// Define class requirments and constructor.
define(
	[],
	function(){
	
	
		// I represent a possible match between two people. 
		function Match( person1, person2 ){
			
			this._person1 = person1;
			this._person2 = person2;
			
		}
		
		
		// Define the instance methods.
		Match.prototype = {
			
			// I determine if this match equals the given match
			// based on the people involved. The direciton of the
			// relationship does not matter. 
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

			
			// I return the first person in the match.
			getPerson1: function(){
				
				return( this._person1 );
				
			},
			
			
			// I return the second person in the match.
			getPerson2: function(){
				
				return( this._person2 );
				
			},
			
			
			// I determine if the match bewteen these two people might
			// be promising. That is, could it lead to a successful 
			// relationship. This is baseue purely on potential 
			// attraction, not actual personality.
			isPromising: function(){
				
				// This match is promising if both people are 
				// generally attracted to each other's type.
				return(
					this._person1.isAttractedTo( this._person2 ) &&
					this._person2.isAttractedTo( this._person1 )
				);
				
			},
			
			
			// I return the string representation.
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
