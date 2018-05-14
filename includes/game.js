

class PetGame{
	constructor(){		
		//create a new dog object, save it to the property in this object call dog.  Pas in a name of your choice, a string of 'dog'
		this.dog = new Dog('Max','dog');
		//call the dog's render method and store the return value.
		this.$dog = this.dog.render();
		//append the dom element to the element with an ID of gameArea
		$('#gameArea').append(this.$dog);
		//call the attach handlers method of this object
		this.attachHandlers();
	}
	attachHandlers(){
		//attach a click handler to the #gameArea.  have it call handleBoardClick.  Make sure to bind it to the object!
		console.log('guau');
		$('#gameArea').click(this.handleBoardClick.bind(this));
	}
	handleBoardClick(){
		//call the dog's move method.  Give it an object with an x and y property.  You can get the x/y coordinate from the event variable (it is available by default in an event handler)
		const destination = {
			x: event.x,
			y:event.y
		}
		const time = Math.ceil(Math.random(5) * 1000);
		this.dog.move(destination, time, this.handleMovementFinished.bind(this));
	}
	handleMovementFinished(){
		//call the dog's bark method, give it a message of your choice		
		this.dog.bark('squirrel',1000);
	}
}