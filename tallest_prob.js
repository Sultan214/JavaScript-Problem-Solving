// Problem Solving by Array

function maxInchArr(numbers) {
	let largest = numbers[0];
	for (let i = 0; i < numbers.length; i++){
		const index = i;
		const element = numbers[index];
		console.log('array elements are :', i, element);
		if (element > largest) {
			largest = element;
		}
	}
	return largest;
}

const heights = [167, 190, 120, 365, 137, 330];
const largestNum = maxInchArr(heights);
 console.log('Largest Num is ', largestNum);
