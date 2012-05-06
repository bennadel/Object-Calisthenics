
// Define class requirments and cosntructor.
define(
	[
		"model/matchmaker/MatchCollection",
		"model/matchmaker/Match"
	],
	function( MatchCollection, Match ){
	
	
		function MatchMaker( blackbook ){
		
			this._blackbook = blackbook;
		
		}
		
		
		MatchMaker.prototype = {
			
			introduce: function( person ){
			
				this._blackbook.push( person );
				
			},
			
			
			gatherMatches: function( person, matches ){
				
				for (var i = 0 ; i < this._blackbook.size() ; i++){
					
					var possibleMatch = this._blackbook.get( i );
					
					if (person === possibleMatch ){
						continue;
					}
					
					matches.push(
						new Match( person, possibleMatch )
					);
					
				}
			
			},
			
			
			suggestMatches: function(){
				
				var matches = new MatchCollection();
				
				for (var i = 0 ; i < this._blackbook.size() ; i++){
					
					this.gatherMatches(
						this._blackbook.get( i ),
						matches
					);
					
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