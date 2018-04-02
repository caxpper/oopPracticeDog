

class Dog{
	/* jsdoc documentation
		@purpose: initialize the object
		@params: 
			name (string): the name the dog will have
			dogClass (string): the class to add to the dog's dom element when it is rendered
		@returns: undefined
	*/
	constructor(name, dogClass){
		this.domElement = null;
		this.domClass = dogClass;
		this.position = { x: null, y: null}
		this.barkBubble = null;
		this.animationTimer = null;
		this.stats = {
			name: name,
			health: 100,
			hunger: 0,
			maxHunger: 100
		}
	}
	/*
	do not use
	@purpose: turns background animation off and on.
	@params: 
		animationSpeed (number): ms between animation frames
		framwWidth (number): the distance to shift background every frame
		returns: (number): the timer for the animation interval timer
	*/
	toggleBackgroundAnimation(animationSpeed=250, frameWidth=64){
		if(this.animationTimer){
			clearInterval(this.animationTimer);
			this.animationTimer=null;
			return;
		} else {
			var animationFrame = 0;

		}
		function advanceAnimation(){
			animationFrame+=frameWidth;
			if(animationFrame>461){
				animationFrame=0;
			}
			this.domElement.css({
				backgroundPosition: `${animationFrame}px 0px`
			});
		}
		this.animationTimer = setInterval(advanceAnimation.bind(this), animationSpeed);
		return this.animationTimer;
	}
	/*
		@purpose: move the dog to the given pixel coordinate in its parent in the given time, calling back the given callback once the movement is complete
		@params: 
			destination (object): an object with an x and y value ({x: 23, y: 56}) with pixels within the parent to move to
			time (number): the time (in milliseconds) to take to move to the given destination 
			movementCompleteCallback (function): the function to call when the movement is complete
		@returns: the jquery dom element of the dog to be appended by the caller
	render(){
	*/
	move(destination, time, movementCompleteCallback){
		this.toggleBackgroundAnimation(50, 64);
		var { x:left, y:top} = destination;
		var currentPosition = this.domElement.position();

		if(currentPosition.left > left){
			this.domElement.css('transform', 'scaleX(-1)');
			this.domElement.addClass('reverseBubble');
		} else {
			this.domElement.css('transform', 'scaleX(1)');
			this.domElement.removeClass('reverseBubble');
		}
		this.domElement.animate({
			left : left + 'px',
			top: top + 'px'
		}, time, 'linear',this.movementComplete.bind(this, movementCompleteCallback))
	}
	/*
		@purpose: pop up a bubble over the dog
		@params: 
			message (string): the message to pop over the dog.  defaults to 'bark bark'
			time (number): the time in ms to show the message.  defaults to 3000 ms
		@returns: the jquery dom element of the dog to be appended by the caller
	render(){
	*/
	bark(message = 'bark bark', time = 3000){
		if(this.barkBubble){
			this.barkBubble.remove();
		}
		this.barkBubble = $("<aside>",{
			'class': 'messageBubble',
		});
		var barkMessage = $("<figcaption>",{
			'class': 'message',
			text: message
		});
		this.barkBubble.append(barkMessage);
		this.domElement.append(this.barkBubble);
		setTimeout((function(){
			this.barkBubble.remove();
		}).bind(this),time);
	}
	/*
	do not use
	@purpose: handler for movement complete.
	@params: 
		completeCallback (function): the function to call when the movement is complete
	*/
	movementComplete(completeCallback=function(){}){
		this.toggleBackgroundAnimation();
		completeCallback();
	}
	/*
		@purpose: create the dom elements for the dog
		@params: undefined
		@returns: the jquery dom element of the dog to be appended by the caller
	
	*/
	render(){

		this.domElement = $("<div>",{
			'class': this.domClass,
			'css':{
				position: 'absolute'
			}
		});
		return this.domElement;
	}
}