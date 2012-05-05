
// Define class requirments and cosntructor.
define(
	[
		"./match/MatchCollection",
		"./match/Match"
	],
	function( MatchCollection ){
	
	
		function MatchMaker( blackbook ){
		
			this._blackbook = blackbook;
		
		}
		
		
		MatchMaker.prototype = {
			
			introduce: function( person ){
			
				this._blackbook.push( person );
				
			},
			
			
			suggestMatches: function(){
				
				var matches = new MatchCollection();
				
				for (var p1 = 0 ; p1 < this._blackbook.size() ; p1++){
					
					for (var p2 = 0 ; p2 < this._blackbook.size() ; p2++){
						
						matches.push(
							new Match(
								this._blackbook.get( p1 ),
								this._blackbook.get( p2 )
							)
						);
						
					}
					
				}
				
				matches.removeBadMatches();
				
				return( matches );
				
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( MatchMaker );
		
	
	}
);