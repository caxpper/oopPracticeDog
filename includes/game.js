

class PetGame{
	constructor(){
		//create a new dog object, save it to the property in this object call dog.  Pas in a name of your choice, a string of 'dog'
		//call the dog's render method and store the return value.
		//append the dom element to the element with an ID of gameArea
		//call the attach handlers method of this object
	}
	attachHandlers(){
		//attach a click handler to the #gameArea.  have it call handleBoardClick.  Make sure to bind it to the object!
	}
	handleBoardClick(){
		//call the dog's move method.  Give it an object with an x and y property.  You can get the x/y coordinate from the event variable (it is available by default in an event handler)
	}
	handleMovementFinished(){
		//call the dog's bark method, give it a message of your choice
	}
}