
// Define class requirments and constructor.
define(
	[
		"model/matchmaker/MatchCollection",
		"model/matchmaker/Match"
	],
	function( MatchCollection, Match ){
	
	
		// I represent the match maker that will provide logic for 
		// aggregating and finding possible relationships between
		// single people.
		function MatchMaker( blackbook ){
		
			this._blackbook = blackbook;
		
		}
		
		
		// Define the instance methods.
		MatchMaker.prototype = {
			
			// Intoduce a single person to the match maker.
			introduce: function( person ){
			
				this._blackbook.push( person );
				
			},
			
			
			// I gather all the possible matches for the given 
			// person based on combination (cross-product) rather 
			// than attraction. 
			gatherMatches: function( person, matches ){
				
				// Gather all the people in the Blackbook who are not
				// the given person (ie. all possible combinations).
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
			
			
			// I suggest all possible matches for all people that
			// have been introduced to the match maker. 
			suggestMatches: function(){
				
				var matches = new MatchCollection();
				
				// Gather all possible combinations.
				for (var i = 0 ; i < this._blackbook.size() ; i++){
					
					this.gatherMatches(
						this._blackbook.get( i ),
						matches
					);
					
				}
				
				// Remove any combinations that don't seem likely
				// to lead to a relationship.
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
