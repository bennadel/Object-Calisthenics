
// Define class requirments and constructor.
define(
	[
		"model/matchmaker/Blackbook",
		"model/matchmaker/MatchMaker",
		"model/person/Name",
		"model/person/Person",
		"model/person/orientation/FemaleIdentity",
		"model/person/orientation/FemalePreference",
		"model/person/orientation/MaleIdentity",
		"model/person/orientation/MalePreference",
		"model/person/orientation/NonPreference",
		"model/person/orientation/Orientation",
		"model/util/RandomAccessCollection"
	],
	function(
		Blackbook,
		MatchMaker, 
		Name,
		Person,
		FemaleIdentity,
		FemalePreference,
		MaleIdentity,
		MalePreference,
		NonPreference,
		Orientation,
		RandomAccessCollection 
		){
	
	
		// I provide a central point for  "new" constructor calls.
		function Factory(){
			
			// Create a list of men's names.
			this._maleNames = new RandomAccessCollection( 
				"Arnold", "Brett", "Byron", "Collin", "Dan", "Elton",
				"Isaac", "James", "Logan", "Louis", "Phil", "Rex",
				"Robert", "Spencer", "Sly", "Stan", "Vin", "Willy", 
				"Zack" 
			);
			
			// Create a list of women's names.
			this._femaleNames = new RandomAccessCollection( 
				"Adeline", "Alyson", "Amy", "Betsy", "Christina", 
				"Hillary", "Joanna", "Kim", "Krysten", "Mallory", 
				"Nicole", "Rebecka", "Sally", "Sarah", "Stacy", 
				"Tricia", "Vanessa" 
			);
			
		}
		
		
		// Define the instance methods.
		Factory.prototype = {
			
			// I create the blackbook used to collect people.
			createBlackbook: function(){
				
				return( new Blackbook() );
				
			},
			
			
			// I create the match maker.
			createMatchMaker: function(){
				
				return(
					new MatchMaker( this.createBlackbook() )
				);
				
			},
			
			
			// I create a person with random characteristics.
			createPerson: function(){
				
				// Distribute male/female creation.
				if (Math.random() > .5){
					
					var name = this.getRandomMaleName();
					var identity = new MaleIdentity();
					
				} else {
					
					var name = this.getRandomFemaleName();
					var identity = new FemaleIdentity();
					
				}
				
				var preference = this.createPreference();
				var orientation = new Orientation( identity, preference );
				var person = new Person( name, orientation );
			
				return( person );
			},
			
			
			// I create a random gender preference.
			createPreference: function(){
				
				var random = Math.random();
				
				if (random >= .55){
					
					return( new FemalePreference() );
					
				} else if (random >= .1) {
					
					return( new MalePreference() ) ;
					
				} else {
					
					return( new NonPreference() ) ;
					
				}
				
			},
			
			
			// I create a random female Name instance.
			getRandomFemaleName: function(){
			
				return(
					new Name( this._femaleNames.getRandom() )
				);
							
			},
			
			
			// I create a random male Name instance.
			getRandomMaleName: function(){
			
				return(
					new Name( this._maleNames.getRandom() )
				);
							
			}
			
		};
		
		
		// -------------------------------------------------- //
		// -------------------------------------------------- //
		
		
		// Return constructor definition.
		return( Factory );
	
	
	}
);