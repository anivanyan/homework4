//2. 
const line = function (char, num) {
	let a = '';
	while(num > 0) {
		num= num -1;
		a = a + char;
	}
	return a 
};

const repeatIt = function(n, h) {
	console.log(line(' ',n) + line('*', 2*h -1));
};

const triangleStar = function(h) {
	let n = 0
	while(h >=1){
		repeatIt(n,h)
		h= h - 1;
		n= n + 1;
	}
};

//3. 
const multiToSingle = function(array) {
	let newArr = [], index = 0;
	let totalIndexNumber = 0;
	while(index < array.length) {
		let limit = 0;
		while (limit < array[index].length) {

		newArr[totalIndexNumber] = array[index][limit];
		limit = limit + 1;
		totalIndexNumber++;

		}
		index ++;
	
	}
	return newArr
};




//4. 
const findMinMax = function (anArr, boolOp) {
	if (boolOp) {
		let index = 1; 
		let max = anArr[0];
		while (index < anArr.length) {
			if(anArr[index] > max) {
				max = anArr[index]
			}
			index = index + 1;
		}	
		return max 
	} else {
		let index = 1
		let min = anArr[0];
		while(index < anArr.length) {
			if (anArr[index] < min) {
				min = anArr[index];
			}
			index = index + 1;
		} return min
	} 
}
 console.log(findMinMax([1,3,8, -10], false));






//6 
const sum = function(someArr) {
	let index = 0; 
	let a = 0;
	while(index < someArr.length) {
		a = a + someArr[index]; 
		index = index + 1;
	}
	return a
};

//7
const reverse = function(someString) {
	let index = someString.length - 1 ;
	let result = '';
	while (index >= 0){
		result = result + someString[index];
		index =index - 1;
	}
	return result
};










