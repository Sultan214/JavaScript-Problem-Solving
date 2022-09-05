function wordReverse(str) {
	const words = str.split(' ');
	console.log(words)
	const result = [];
	for (let i = words.length - 1; i >= 0; i--){
		const element = words[i];
		result.push(element);
	}
	console.log(result);
	const reversed = result.join(' ');
	return reversed;
}

const string = "i am a good boy";
wordReverse(string);
console.log(string);



//New shortcut method

function reverseString(str) {

    // return a new array of strings
	const arrayStrings = str.split(" ");
	console.log(arrayStrings);
   
    // reverse the new created array elements
	const reverseArray = arrayStrings.reverse();
	console.log(reverseArray);
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join(" ");
    
    // return the reversed string
	return joinArray;
}
 


const result = reverseString("good boy");
console.log(result);