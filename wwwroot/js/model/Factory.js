
// Define class requirments and cosntructor.
define(
	[
		"model/person/Name",
		"model/person/Person",
		"model/person/orientation/FemaleIdentity",
		"model/person/orientation/FemalePreference",
		"model/person/orientation/MaleIdentity",
		"model/person/orientation/MalePreference",
		"model/person/orientation/Orientation",
		"model/util/RandomAccessCollection"
	],
	function( 
		Name,
		Person,
		FemaleIdentity,
		FemalePreference,
		MaleIdentity,
		MalePreference,
		Orientation,
		RandomAccessCollection 
		){
	
	
		function Factory(){
			
			this._maleNames = new RandomAccessCollection( "Arnold", "Vin", "Sly", "James", "Robert" );
			this._femaleNames = new RandomAccessCollection( "Tricia", "Sarah", "Joanna", "Kim", "Stacy" );
			
		}
		
		
		Factory.prototype = {
			
			createFemale: function(){
			
				var name = this.getRandomFemaleName();
				var identity = new FemaleIdentity();
				var preference = new MalePreference();
				var orientation = new Orientation( identity, preference );
				var person = new Person( name, orientation );
			
				return( person );
				
			},
			
			
			createMale: function(){
			
				var name = this.getRandomMaleName();
				var identity = new MaleIdentity();
				var preference = new FemalePreference();
				var orientation = new Orientation( identity, preference );
				var person = new Person( name, orientation );
			
				return( person );
				
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