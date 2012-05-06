
// Define class requirments and cosntructor.
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
	
	
		function Factory(){
			
			this._maleNames = new RandomAccessCollection( 
				"Arnold", "Brett", "Byron", "Collin", "Dan", "Elton", "Isaac", 
				"James", "Logan", "Louis", "Phil", "Rex", "Robert", "Spencer", 
				"Sly", "Stan", "Vin", "Willy", "Zack" 
			);
			
			this._femaleNames = new RandomAccessCollection( 
				"Adeline", "Alyson", "Amy", "Betsy", "Christina", "Hillary", 
				"Joanna", "Kim", "Krysten", "Mallory", "Nicole", "Rebecka", 
				"Sally", "Sarah", "Stacy", "Tricia", "Vanessa" 
			);
			
		}
		
		
		Factory.prototype = {
			
			createBlackbook: function(){
				
				return( new Blackbook() );
				
			},
			
			
			createMatchMaker: function(){
				
				return(
					new MatchMaker( this.createBlackbook() )
				);
				
			},
			
			
			createPerson: function(){
				
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
			
			
			getRandomFemaleName: function(){
			
				return(
					new Name( this._femaleNames.getRandom() )
				);
							
			},
			
			
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