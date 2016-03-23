function ArrayJob(arr) {
	this.theArray = arr;
}

ArrayJob.prototype.findThreeLetterNames = function() {
	var newArray = this.theArray.filter(function(val) {
		return val.length == 3;
	});
	return newArray;
}

ArrayJob.prototype.twoWordNames = function() {
	var newArray = this.theArray.filter(function(val) {
		// match returns array of matches for each val, we check if it's an array because there might be no spaces and in that case match() returns null
		//also check if returned array length is 1, meaning match all vals that only has 1 space(two word names)
		if(val.match(/\s/g) instanceof Array && val.match(/\s/g).length == 1){
			return val;
		}
		//another way
		//return val.split(" ").length == 2;
	});
	return newArray;
}

ArrayJob.prototype.firstCharNotK = function() {
	var newArray = this.theArray.filter(function(val) {
		return /^[^k]/i.test(val);
	});
	return newArray;
}

ArrayJob.prototype.bearToTeddyBear = function() {
	var newArray = this.theArray.map(function(val, index, array) {
		return val.replace(/bear/gi, 'Teddy Bear');
	});
	return newArray;
}

ArrayJob.prototype.rename = function() {
	var newArray = this.theArray.map(function(val, index, array) {
		if (/^cat$/i.test(val)) {return val.replace(/^cat$/i, 'Kitty Cat');}
		else if (/^dog$/i.test(val)) {return val.replace(/^dog$/i, 'Puppy');}
		else {return val;}
	});
	return newArray;
}

var myArray = new ArrayJob(["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear", "Polar Bear 2"]);
console.log(myArray.findThreeLetterNames());
console.log(myArray.twoWordNames());
console.log(myArray.firstCharNotK());
console.log(myArray.bearToTeddyBear());
console.log(myArray.rename());
