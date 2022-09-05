function reverseStr(Text) {
	let reversed = '';
	for (let i = Text.length - 1; i >= 0; i--){
		const element = Text[i];
		 reversed = reversed + element;
		console.log(reversed);
	}
	return myStr;
}
const myStr = "I am A Good Boy";
const reversed = reverseStr(myStr);
console.log("reversede output", reversed);