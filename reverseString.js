// module 21 - 8

function reverseString(text) {
	console.log(text)
	for (let i = text.length-1; i >= 0; i--){
		const element = text[i];
		console.log(i,element)
	}
	
}

const reversedString = "I am a good boy";
const Str = reverseString(reversedString);
